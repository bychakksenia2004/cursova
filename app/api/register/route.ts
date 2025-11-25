import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectToDB } from "../../../lib/mongodb";
import User from "../../../lib/models/User";
import crypto from "crypto";

function base64url(input: Buffer | string) {
	const b = typeof input === "string" ? Buffer.from(input) : input;
	return b.toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
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

export async function POST(req: Request) {
	try {
		const body = await req.json();
		const { email, username, password } = body || {};

		if (!email || !username || !password) {
			return NextResponse.json({ error: "Missing fields" }, { status: 400 });
		}

		await connectToDB();

		const existing = await User.findOne({
			$or: [{ email: email.toLowerCase() }]
		}).lean();

		if (existing) {
			return NextResponse.json({ error: "User with given email already exists" }, { status: 409 });
		}

		const passwordHash = await bcrypt.hash(password, 10);

		const created = await User.create({
			email: email.toLowerCase(),
			username,
			password: passwordHash
		});

		const JWT_SECRET = process.env.JWT_SECRET;
		const headers: Record<string, string> = { "Content-Type": "application/json" };
		let debugSetCookie: string | null = null;

		if (JWT_SECRET) {
			const token = createToken({ sub: String(created._id), email: created.email }, JWT_SECRET, 7 * 24 * 3600);
			const secure = process.env.NODE_ENV === "production";
			const maxAge = 7 * 24 * 3600;
			const cookie = `token=${token}; HttpOnly; Path=/; Max-Age=${maxAge}; SameSite=Lax${secure ? "; Secure" : ""}`;
			headers["Set-Cookie"] = cookie;
			debugSetCookie = cookie;

			console.log("POST /api/register - Set-Cookie:", cookie);
		} else {
			console.warn("POST /api/register - JWT_SECRET not set — no cookie will be issued");
		}

		const bodyResp: any = { ok: true, id: created._id };
		if (process.env.NODE_ENV !== "production") {
			bodyResp.debugSetCookie = debugSetCookie;
		}

		return new NextResponse(JSON.stringify(bodyResp), {
			status: 201,
			headers
		});
	} catch (err: any) {
		console.error("Register error:", err);

		if (err?.name === "ValidationError" && err.errors) {
			const details: Record<string, string> = {};
			for (const [k, v] of Object.entries(err.errors)) {
				details[k] = (v as any).message || String(v);
			}
			return NextResponse.json({ error: "Validation error", details }, { status: 400 });
		}

		return NextResponse.json({ error: err?.message || "Internal server error" }, { status: 500 });
	}
}
