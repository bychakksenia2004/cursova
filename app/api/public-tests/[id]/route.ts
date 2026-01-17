import { NextResponse } from "next/server";
import { connectToDB } from "../../../../lib/mongodb";
import Test from "../../../../lib/models/Test";
import { getUserFromCookieServer } from "../../../../lib/auth";

export async function GET(req: Request, ctx: any) {
  try {
    const params = await ctx.params;
    const id = params?.id;
    if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });
    await connectToDB();
      const test = await Test.findById(id).lean();
    if (!test) return NextResponse.json({ error: "Not found" }, { status: 404 });
    if (test.visibility !== "public") return NextResponse.json({ error: "Not public" }, { status: 403 });

    // If the test stores responses, indicate that login is required for taking it.
    // We still return the test details, but include `requiresLogin` flag for the client UI.
    const requiresLogin = !!test.storeResponses;

    // If the requestor is authenticated, include viewer info for convenience
    const user = await getUserFromCookieServer().catch(() => null);

    return NextResponse.json({ ok: true, test: { ...test, requiresLogin, _viewer: user ? { _id: user._id, username: user.username } : null } }, { status: 200 });
  } catch (err: any) {
    console.error("/api/public-tests/[id] GET error:", err);
    return NextResponse.json({ error: err?.message || String(err) }, { status: 500 });
  }
}
