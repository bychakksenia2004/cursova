import { NextResponse } from "next/server";
import { connectToDB } from "../../../../lib/mongodb";
import Test from "../../../../lib/models/Test";

export async function GET(req: Request, ctx: any) {
  try {
    const params = await ctx.params;
    const id = params?.id;
    if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });
    await connectToDB();
    const test = await Test.findById(String(id)).populate({ path: "authorId", select: "username" }).lean();
    if (!test) return NextResponse.json({ error: "Not found" }, { status: 404 });
    if (test.visibility !== "public") return NextResponse.json({ error: "Not public" }, { status: 403 });

    return NextResponse.json({ ok: true, test }, { status: 200 });
  } catch (err: any) {
    console.error("/api/public-tests/[id] GET error:", err);
    return NextResponse.json({ error: err?.message || String(err) }, { status: 500 });
  }
}
