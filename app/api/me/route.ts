import { NextResponse } from "next/server";
import { getUserFromCookieServer, verifyToken } from "../../../lib/auth";
import { connectToDB } from "../../../lib/mongodb";
import User from "../../../lib/models/User";

export async function GET(req: Request) {
  try {
    // log incoming cookie header for debugging
    const headerCookie = req.headers.get("cookie") || "";
    console.log("GET /api/me - cookie header:", headerCookie);

    // Prefer server helper (which uses next/headers cookies())
    try {
      const user = await getUserFromCookieServer();
      if (user) {
        return NextResponse.json({ ok: true, user }, { status: 200 });
      }
    } catch (e) {
      console.warn("GET /api/me - getUserFromCookieServer failed:", (e as any)?.message ?? e);
    }

    // Fallback: try extract token from raw cookie header
    const tokenPair = headerCookie
      .split(";")
      .map((s) => s.trim())
      .find((s) => s.startsWith("token="));
    const token = tokenPair ? tokenPair.substring("token=".length) : null;
    console.log("GET /api/me - token present in header:", !!token);

    if (!token) {
      return NextResponse.json({ error: "Not authenticated", debug: { headerCookie } }, { status: 401 });
    }

    const JWT_SECRET = process.env.JWT_SECRET;
    if (!JWT_SECRET) {
      console.error("GET /api/me - JWT_SECRET not set on server");
      return NextResponse.json({ error: "Server misconfiguration: JWT_SECRET missing" }, { status: 500 });
    }

    const payload = verifyToken(token, JWT_SECRET);
    console.log("GET /api/me - token payload:", payload);
    if (!payload?.sub) {
      return NextResponse.json({ error: "Invalid token", debug: { payload } }, { status: 401 });
    }

    await connectToDB();
    const dbUser = await User.findById(payload.sub).lean();
    if (!dbUser) {
      return NextResponse.json({ error: "User not found" }, { status: 401 });
    }

    return NextResponse.json(
      { ok: true, user: { _id: String((dbUser as any)._id), username: (dbUser as any).username, email: (dbUser as any).email } },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("GET /api/me error:", err);
    return NextResponse.json({ error: err?.message || "Internal server error" }, { status: 500 });
  }
}
