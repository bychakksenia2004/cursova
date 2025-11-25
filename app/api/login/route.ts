import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectToDB } from "../../../lib/mongodb";
import User from "../../../lib/models/User";
import crypto from "crypto";

// helper: base64url
function base64url(input: Buffer | string) {
	const b = typeof input === "string" ? Buffer.from(input) : input;
	return b.toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

// create simple HS256 JWT
function createToken(payload: Record<string, any>, secret: string, expiresInSec = 7 * 24 * 3600) {
	const header = { alg: "HS256", typ: "JWT" };
	const now = Math.floor(Date.now() / 1000);
	const body = { ...payload, iat: now, exp: now + expiresInSec };
	const headerB = base64url(JSON.stringify(header));
	const payloadB = base64url(JSON.stringify(body));
	const toSign = `${headerB}.${payloadB}`;
	const sig = crypto.createHmac("sha256", secret).update(toSign).digest();
	const sigB = base64url(sig);
	return `${toSign}.${sigB}`;
}

// verify token (returns payload or null)
function verifyToken(token: string, secret: string) {
	try {
		const [headerB, payloadB, sigB] = token.split(".");
		if (!headerB || !payloadB || !sigB) return null;
		const toSign = `${headerB}.${payloadB}`;
		const expectedSig = base64url(crypto.createHmac("sha256", secret).update(toSign).digest());
		if (expectedSig !== sigB) return null;
		const payload = JSON.parse(Buffer.from(payloadB, "base64").toString("utf8"));
		if (payload.exp && Math.floor(Date.now() / 1000) > payload.exp) return null;
		return payload;
	} catch {
		return null;
	}
}

export async function POST(req: Request) {
	try {
		const body = await req.json();
		const { email: rawEmail, password } = body || {};

		if (!rawEmail || !password) {
			return NextResponse.json({ error: "Missing fields" }, { status: 400 });
		}

		const email = String(rawEmail).trim().toLowerCase();

		await connectToDB();

		const user = await User.findOne({ email }).lean();

		if (!user) {
			// don't reveal whether email exists
			return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
		}

		// Support both possible field names (password or passwordHash)
		const hash = (user as any).password ?? (user as any).passwordHash ?? null;

		if (!hash) {
			// server-side info for debugging
			console.error(`[auth] user ${user._id} has no password hash stored`);
			return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
		}

		// debug log only in non-production to help you trace issues
		if (process.env.NODE_ENV !== "production") {
			console.debug(`[auth] login attempt`, { userId: String(user._id), hashPresent: !!hash });
		}

		const isValid = await bcrypt.compare(password, hash);
		if (!isValid) {
			return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
		}

		// successful — return minimal info
		const JWT_SECRET = process.env.JWT_SECRET;
		const headers: Record<string, string> = { "Content-Type": "application/json" };
		let debugSetCookie: string | null = null;

		if (JWT_SECRET) {
			const token = createToken({ sub: String(user._id), email: user.email }, JWT_SECRET, 7 * 24 * 3600);
			const secure = process.env.NODE_ENV === "production";
			const maxAge = 7 * 24 * 3600;
			// use SameSite=None if you suspect cross-site; keep Lax otherwise
			const cookie = `token=${token}; HttpOnly; Path=/; Max-Age=${maxAge}; SameSite=Lax${secure ? "; Secure" : ""}`;
			headers["Set-Cookie"] = cookie;
			debugSetCookie = cookie;

			// log for server-side debugging
			console.log("POST /api/login - Set-Cookie:", cookie);
		} else {
			console.warn("POST /api/login - JWT_SECRET not set — no cookie will be issued");
		}

		// include debugSetCookie in response only in non-production to diagnose
		const bodyResp: any = { ok: true, id: user._id };
		if (process.env.NODE_ENV !== "production") {
			bodyResp.debugSetCookie = debugSetCookie;
		}

		return new NextResponse(JSON.stringify(bodyResp), {
			status: 200,
			headers
		});
	} catch (err: any) {
		console.error("Login error:", err);

		if (err?.name === "ValidationError" && err.errors) {
			const details: Record<string,string> = {};
			for (const [k, v] of Object.entries(err.errors)) {
				// @ts-ignore
				details[k] = v.message || String(v);
			}
			return NextResponse.json({ error: "Validation error", details }, { status: 400 });
		}

		return NextResponse.json({ error: err?.message || "Internal server error" }, { status: 500 });
	}
}
