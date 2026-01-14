import { NextResponse } from "next/server";
import { connectToDB } from "../../../lib/mongodb";
import Test from "../../../lib/models/Test";

export async function GET(req: Request) {
  try {
    await connectToDB();
    // find public tests and include author's username
    const tests = await Test.find({ visibility: "public" })
      .select("title description authorId timed timeLimitMinutes")
      .populate({ path: "authorId", select: "username" })
      .lean();

    const mapped = Array.isArray(tests)
      ? tests.map((t: any) => ({ _id: t._id, title: t.title, description: t.description, author: t.authorId?.username || null, timed: !!t.timed, timeLimitMinutes: t.timeLimitMinutes ?? null }))
      : [];

    return NextResponse.json({ ok: true, tests: mapped }, { status: 200 });
  } catch (err: any) {
    console.error("/api/public-tests GET error:", err);
    return NextResponse.json({ error: err?.message || String(err) }, { status: 500 });
  }
}
