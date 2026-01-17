import { NextResponse } from "next/server";
import { connectToDB } from "../../../../lib/mongodb";
import Attempt from "../../../../lib/models/Attempt";
import Test from "../../../../lib/models/Test";
import { getUserFromCookieServer } from "../../../../lib/auth";

export async function GET(req: Request, ctx: any) {
  try {
    const params = await ctx.params;
    const testId = params?.testId;
    if (!testId) return NextResponse.json({ error: "Missing testId" }, { status: 400 });
    await connectToDB();

    const user = await getUserFromCookieServer();
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    // Ensure requesting user is the author of the test
    const test = await Test.findById(String(testId)).lean();
    if (!test) return NextResponse.json({ error: "Test not found" }, { status: 404 });
    // Only the test author may view attempts, and only when responses are being stored
    if (String(test.authorId) !== String(user._id)) return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    if (!test.storeResponses) return NextResponse.json({ error: "Responses are not stored for this test" }, { status: 403 });

    const url = new URL(req.url);
    const userQuery = (url.searchParams.get("user") || "").trim();
    const page = Math.max(1, Number(url.searchParams.get("page") || "1"));
    const limit = Math.min(100, Math.max(1, Number(url.searchParams.get("limit") || "10")));
    const skip = (page - 1) * limit;

    // build query; optionally pre-filter by username to make pagination accurate
    const q: any = { testId: String(testId) };
    let matchingUserIds: any[] | null = null;
    if (userQuery) {
      try {
        const regex = new RegExp(userQuery, "i");
        const User = (await import("../../../../lib/models/User")).default;
        matchingUserIds = await User.find({ username: regex }).distinct("_id");
        if (!matchingUserIds || matchingUserIds.length === 0) {
          return NextResponse.json({ ok: true, attempts: [], total: 0, page, totalPages: 1 }, { status: 200 });
        }
        q.userId = { $in: matchingUserIds };
      } catch (err) {
        // fallback: no user filter applied
      }
    }

    const total = await Attempt.countDocuments(q);
    const attempts = await Attempt.find(q).sort({ createdAt: -1 }).skip(skip).limit(limit).lean();

    // populate user info (simple lookup)
    const results = await Promise.all(attempts.map(async (a: any) => {
      let username: string | null = null;
      try {
        if (a.userId) {
          const User = (await import("../../../../lib/models/User")).default;
          const u = await User.findById(a.userId).select("username").lean();
          username = u ? (u.username || null) : null;
        }
      } catch (err) {
        username = null;
      }
      return { id: String(a._id), userId: a.userId || null, username: username || "Анонім", totalScore: a.totalScore, totalPossible: a.totalPossible, createdAt: a.createdAt, perQuestion: a.perQuestion };
    }));

    const totalPages = Math.max(1, Math.ceil(total / limit));
    return NextResponse.json({ ok: true, attempts: results, total, page, totalPages }, { status: 200 });
  } catch (err: any) {
    console.error("/api/attempts/[testId] GET error:", err);
    return NextResponse.json({ error: err?.message || String(err) }, { status: 500 });
  }
}
