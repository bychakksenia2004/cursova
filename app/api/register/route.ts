import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectToDB } from "../../../lib/mongodb";
import User from "../../../lib/models/User";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, username, password } = body || {};

    if (!email || !username || !password) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    await connectToDB();

    const existing = await User.findOne({
      $or: [{ email: email.toLowerCase() }, { username }]
    }).lean();

    if (existing) {
      return NextResponse.json({ error: "User with given email or username already exists" }, { status: 409 });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const created = await User.create({
      email: email.toLowerCase(),
      username,
      password: passwordHash,
      passwordHash
    });

    return NextResponse.json({ ok: true, id: created._id }, { status: 201 });
  } catch (err: any) {
    console.error("Register error:", err);

    if (err?.name === "ValidationError" && err.errors) {
      const details: Record<string,string> = {};
      for (const [k, v] of Object.entries(err.errors)) {
        details[k] = v.message || String(v);
      }
      return NextResponse.json({ error: "Validation error", details }, { status: 400 });
    }

    return NextResponse.json({ error: err?.message || "Internal server error" }, { status: 500 });
  }
}
