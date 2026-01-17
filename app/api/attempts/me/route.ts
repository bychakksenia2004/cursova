import { NextResponse } from "next/server";
import { connectToDB } from "../../../../lib/mongodb";
import Attempt from "../../../../lib/models/Attempt";
import Test from "../../../../lib/models/Test";
import { getUserFromCookieServer } from "../../../../lib/auth";

export async function GET(req: Request) {
  try {
    await connectToDB();
    const user = await getUserFromCookieServer();
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const url = new URL(req.url);
    const testQuery = (url.searchParams.get("test") || "").trim();
    const authorQuery = (url.searchParams.get("author") || "").trim();
    const fromParam = (url.searchParams.get("from") || "").trim();
    const toParam = (url.searchParams.get("to") || "").trim();
    const page = Math.max(1, Number(url.searchParams.get("page") || "1"));
    const limit = Math.min(100, Math.max(1, Number(url.searchParams.get("limit") || "10")));
    const skip = (page - 1) * limit;

    // build DB query with optional date range and optional test title filter
    const q: any = { userId: String(user._id) };
    if (fromParam || toParam) {
      q.createdAt = {};
      if (fromParam) {
        const f = new Date(fromParam);
        if (!isNaN(f.getTime())) q.createdAt.$gte = f;
      }
      if (toParam) {
        let t = new Date(toParam);
        if (!isNaN(t.getTime())) {
          // if date string without time, include whole day by setting 23:59:59.999
          if (/^\d{4}-\d{2}-\d{2}$/.test(toParam)) t.setHours(23, 59, 59, 999);
          q.createdAt.$lte = t;
        }
      }
      // if createdAt ended up empty (invalid dates), remove it
      if (Object.keys(q.createdAt).length === 0) delete q.createdAt;
    }

    // If a test title query is provided, resolve matching test IDs first
    if (testQuery) {
      const regex = new RegExp(testQuery, "i");
      const matchingTestIds = await Test.find({ title: regex }).distinct("_id");
      if (!Array.isArray(matchingTestIds) || matchingTestIds.length === 0) {
        return NextResponse.json({ ok: true, attempts: [], total: 0, page, totalPages: 1 }, { status: 200 });
      }
      q.testId = { $in: matchingTestIds };
    }

    // If an author query is provided, resolve tests authored by matching users and filter attempts by those tests
    if (authorQuery) {
      try {
        const regexA = new RegExp(authorQuery, "i");
        const User = (await import("../../../../lib/models/User")).default;
        const matchingUserIds = await User.find({ username: regexA }).distinct("_id");
        if (!matchingUserIds || matchingUserIds.length === 0) {
          return NextResponse.json({ ok: true, attempts: [], total: 0, page, totalPages: 1 }, { status: 200 });
        }
        const matchingTestIdsByAuthor = await Test.find({ authorId: { $in: matchingUserIds } }).distinct("_id");
        if (!matchingTestIdsByAuthor || matchingTestIdsByAuthor.length === 0) {
          return NextResponse.json({ ok: true, attempts: [], total: 0, page, totalPages: 1 }, { status: 200 });
        }
        // combine with existing testId filter if present
        if (q.testId && q.testId.$in) {
          const intersection = q.testId.$in.filter((id: any) => matchingTestIdsByAuthor.map(String).includes(String(id)));
          if (intersection.length === 0) {
            return NextResponse.json({ ok: true, attempts: [], total: 0, page, totalPages: 1 }, { status: 200 });
          }
          q.testId.$in = intersection;
        } else {
          q.testId = { $in: matchingTestIdsByAuthor };
        }
      } catch (err) {
        // ignore author filter on error
      }
    }

    const total = await Attempt.countDocuments(q);
    const attempts = await Attempt.find(q).sort({ createdAt: -1 }).skip(skip).limit(limit).lean();

    const results = await Promise.all(attempts.map(async (a: any) => {
      const test = await Test.findById(a.testId).select("title ownResultView").lean();
      const title = test ? (test.title || "(невідомий тест)") : "(видалений тест)";
      const ownView = test ? (test.ownResultView || "full") : "nothing";
      // If the test owner chose to show nothing to takers, do not include totals or details
      let details: any = null;
      if (ownView !== "nothing") {
        const hasTotals = (typeof a.totalScore === 'number' || typeof a.totalPossible === 'number');
        if (hasTotals) {
          details = { totalScore: a.totalScore, totalPossible: a.totalPossible };
          if (ownView === "full") {
            details.perQuestion = a.perQuestion;
          }
        }
      }
      return { id: String(a._id), testId: String(a.testId), title, createdAt: a.createdAt, details };
    }));

    const totalPages = Math.max(1, Math.ceil(total / limit));
    return NextResponse.json({ ok: true, attempts: results, total, page, totalPages }, { status: 200 });
  } catch (err: any) {
    console.error("/api/attempts/me GET error:", err);
    return NextResponse.json({ error: err?.message || String(err) }, { status: 500 });
  }
}
