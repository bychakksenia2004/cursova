import { NextResponse } from "next/server";

export async function POST() {
  try {
    const secure = process.env.NODE_ENV === "production";
    // clear cookie
    const cookie = `token=; HttpOnly; Path=/; Max-Age=0; SameSite=Lax${secure ? "; Secure" : ""}`;
    // also clear by setting Expires in past (redundant)
    const cookie2 = `token=; HttpOnly; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax${secure ? "; Secure" : ""}`;

    return new NextResponse(JSON.stringify({ ok: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": `${cookie}; ${cookie2}`
      }
    });
  } catch (err: any) {
    console.error("Logout error:", err);
    return NextResponse.json({ error: err?.message || "Internal server error" }, { status: 500 });
  }
}
