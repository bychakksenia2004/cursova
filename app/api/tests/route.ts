import { NextResponse } from "next/server";
import { connectToDB } from "../../../lib/mongodb";
import Test from "../../../lib/models/Test";
import { getUserFromCookieServer } from "../../../lib/auth";

function mapType(frontType: string) {
  switch (frontType) {
    case "single":
      return "single_choice";
    case "multi":
      return "multi_choice";
    case "sequence":
      return "sequence";
    case "matching":
      return "matching";
    case "open":
      return "open";
    default:
      return frontType;
  }
}

export async function POST(req: Request) {
  try {
    await connectToDB();
    const user = await getUserFromCookieServer();
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await req.json();
    const { title, description, visibility, storeResponses, ownResultView, questions, timed, timeLimitMinutes, dateWindowEnabled, openFrom, openTo } = body;

    if (!title || !String(title).trim()) return NextResponse.json({ error: "Title is required" }, { status: 400 });
    if (!Array.isArray(questions) || questions.length === 0) return NextResponse.json({ error: "At least one question required" }, { status: 400 });

    // Transform questions to match schema discriminators
    const transformed = questions.map((q: any) => {
      const common: any = { id: q.id, type: mapType(q.type), text: q.text };
      // optional points per question (default handled by schema)
      common.points = typeof q.points === "number" ? q.points : (q.data && typeof q.data.points === "number" ? q.data.points : undefined);
      // preserve optional imageUrl if provided by client
      common.imageUrl = q.imageUrl || (q.image && (q.image.secure_url || q.image.url)) || undefined;
      if (q.type === "single" || q.type === "multi") {
        common.options = (q.data && q.data.options) || [];
      } else if (q.type === "sequence") {
        common.options = (q.data && q.data.options) || [];
      } else if (q.type === "matching") {
        common.pairs = (q.data && q.data.pairs) || [];
      } else if (q.type === "open") {
        common.answers = (q.data && q.data.answers) || [];
      }
      return common;
    });

    const created = await Test.create({
      title: String(title).trim(),
      description: description ? String(description) : null,
      authorId: user._id,
      visibility: visibility === "public" ? "public" : "private",
      storeResponses: !!storeResponses,
      ownResultView: ownResultView || "full",
      timed: !!timed,
      timeLimitMinutes: typeof timeLimitMinutes === "number" ? timeLimitMinutes : (timeLimitMinutes ? Number(timeLimitMinutes) : undefined),
      dateWindowEnabled: !!dateWindowEnabled,
      openFrom: openFrom ? new Date(openFrom) : undefined,
      openTo: openTo ? new Date(openTo) : undefined,
      questions: transformed,
    });

    // return created document for easier verification
    const saved = await Test.findById(created._id).lean();
    return NextResponse.json({ ok: true, id: created._id, test: saved }, { status: 201 });
  } catch (err: any) {
    console.error("/api/tests error:", err);
    return NextResponse.json({ error: err?.message || String(err) }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    await connectToDB();
    const user = await getUserFromCookieServer();
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    // pagination params
    const url = new URL(req.url);
    const page = Math.max(1, Number(url.searchParams.get("page") || "1"));
    const limit = Math.min(100, Math.max(1, Number(url.searchParams.get("limit") || "10")));
    const skip = (page - 1) * limit;

    // Return paginated list of tests authored by user (include storeResponses flag)
    const baseQuery = { authorId: user._id } as any;
    const total = await Test.countDocuments(baseQuery);
    const tests = await Test.find(baseQuery).select("title description storeResponses").sort({ _id: -1 }).skip(skip).limit(limit).lean();
    const totalPages = Math.max(1, Math.ceil(total / limit));
    return NextResponse.json({ ok: true, tests, total, page, totalPages }, { status: 200 });
  } catch (err: any) {
    console.error("/api/tests GET error:", err);
    return NextResponse.json({ error: err?.message || String(err) }, { status: 500 });
  }
}
