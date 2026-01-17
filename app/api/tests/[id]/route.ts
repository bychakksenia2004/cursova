import { NextResponse } from "next/server";
import { connectToDB } from "../../../../lib/mongodb";
import Test from "../../../../lib/models/Test";
import Attempt from "../../../../lib/models/Attempt";
import { getUserFromCookieServer } from "../../../../lib/auth";

export async function GET(req: Request, ctx: any) {
  try {
    await connectToDB();
    const user = await getUserFromCookieServer();
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    const params = await ctx.params;
    const id = params?.id;
    const test = await Test.findById(id).lean();
    if (!test) return NextResponse.json({ error: "Not found" }, { status: 404 });
    if (String(test.authorId) !== String(user._id)) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

    return NextResponse.json({ ok: true, test }, { status: 200 });
  } catch (err: any) {
    console.error("/api/tests/[id] GET error:", err);
    return NextResponse.json({ error: err?.message || String(err) }, { status: 500 });
  }
}

export async function PUT(req: Request, ctx: any) {
  try {
    await connectToDB();
    const user = await getUserFromCookieServer();
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    const params = await ctx.params;
    const id = params?.id;
    const body = await req.json();
    const { title, description, visibility, storeResponses, ownResultView, questions, timed, timeLimitMinutes, dateWindowEnabled, openFrom, openTo } = body;

    const test = await Test.findById(id);
    if (!test) return NextResponse.json({ error: "Not found" }, { status: 404 });
    if (String(test.authorId) !== String(user._id)) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

    if (title) test.title = String(title);
    test.description = description ? String(description) : null;
    test.visibility = visibility === "public" ? "public" : "private";
    test.storeResponses = !!storeResponses;
    test.ownResultView = ownResultView || "full";
    test.timed = !!timed;
    test.timeLimitMinutes = typeof timeLimitMinutes === "number" ? timeLimitMinutes : (timeLimitMinutes ? Number(timeLimitMinutes) : undefined);
    test.dateWindowEnabled = !!dateWindowEnabled;
    test.openFrom = openFrom ? new Date(openFrom) : undefined;
    test.openTo = openTo ? new Date(openTo) : undefined;

    // Transform questions to match schema discriminators (map front-end types)
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

    const transformed = (Array.isArray(questions) ? questions : []).map((q: any) => {
      const common: any = { id: q.id, type: mapType(q.type), text: q.text };
      // optional points per question (preserve if provided)
      common.points = typeof q.points === "number" ? q.points : (q.data && typeof q.data.points === "number" ? q.data.points : undefined);
      // preserve optional imageUrl if provided from client
      common.imageUrl = q.imageUrl || (q.image && (q.image.secure_url || q.image.url)) || undefined;
      if (q.type === "single" || q.type === "multi") common.options = q.data?.options || q.options || [];
      else if (q.type === "sequence") common.options = q.data?.options || q.options || [];
      else if (q.type === "matching") common.pairs = q.data?.pairs || q.pairs || [];
      else if (q.type === "open") common.answers = q.data?.answers || q.answers || [];
      return common;
    });
    test.questions = transformed as any;
    await test.save();
    const saved = await Test.findById(test._id).lean();
    return NextResponse.json({ ok: true, test: saved }, { status: 200 });
  } catch (err: any) {
    console.error("/api/tests/[id] PUT error:", err);
    return NextResponse.json({ error: err?.message || String(err) }, { status: 500 });
  }
}

export async function DELETE(req: Request, ctx: any) {
  try {
    await connectToDB();
    const user = await getUserFromCookieServer();
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const params = await ctx.params;
    const id = params?.id;
    const test = await Test.findById(id);
    if (!test) return NextResponse.json({ error: "Not found" }, { status: 404 });
    if (String(test.authorId) !== String(user._id)) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

    // delete associated attempts first
    try {
      await Attempt.deleteMany({ testId: id });
    } catch (err) {
      console.warn("Failed to delete related attempts for test", id, err);
    }

    await Test.findByIdAndDelete(id);
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err: any) {
    console.error("/api/tests/[id] DELETE error:", err);
    return NextResponse.json({ error: err?.message || String(err) }, { status: 500 });
  }
}
