import { NextResponse } from "next/server";
import { connectToDB } from "../../../lib/mongodb";
import Test from "../../../lib/models/Test";

export async function GET(req: Request) {
  try {
    await connectToDB();
    // pagination params
    const url = new URL(req.url);
    const page = Math.max(1, Number(url.searchParams.get("page") || "1"));
    const limit = Math.min(100, Math.max(1, Number(url.searchParams.get("limit") || "10")));
    const skip = (page - 1) * limit;

    // find public tests and include author's username and whether responses are stored
    const baseQuery = { visibility: "public" };
    const total = await Test.countDocuments(baseQuery);
    const tests = await Test.find(baseQuery)
      .select("title description authorId timed timeLimitMinutes storeResponses")
      .populate({ path: "authorId", select: "username" })
      .sort({ _id: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    const mapped = Array.isArray(tests)
      ? tests.map((t: any) => ({
          _id: t._id,
          title: t.title,
          description: t.description,
          author: t.authorId?.username || null,
          timed: !!t.timed,
          timeLimitMinutes: t.timeLimitMinutes ?? null,
          storeResponses: !!t.storeResponses,
        }))
      : [];

    const totalPages = Math.max(1, Math.ceil(total / limit));
    return NextResponse.json({ ok: true, tests: mapped, total, page, totalPages }, { status: 200 });
  } catch (err: any) {
    console.error("/api/public-tests GET error:", err);
    return NextResponse.json({ error: err?.message || String(err) }, { status: 500 });
  }
}
