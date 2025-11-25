import crypto from "crypto";
import { cookies } from "next/headers";
import { connectToDB } from "./mongodb";
import User from "./models/User";

function base64url(input: Buffer | string) {
  const b = typeof input === "string" ? Buffer.from(input) : input;
  return b.toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export function verifyToken(token: string, secret: string) {
  try {
    const [headerB, payloadB, sigB] = token.split(".");
    if (!headerB || !payloadB || !sigB) return null;
    const toSign = `${headerB}.${payloadB}`;
    const expectedSig = base64url(crypto.createHmac("sha256", secret).update(toSign).digest());
    if (expectedSig !== sigB) return null;
    const payload = JSON.parse(Buffer.from(payloadB, "base64").toString("utf8"));
    if (payload.exp && Math.floor(Date.now() / 1000) > payload.exp) return null;
    return payload;
  } catch {
    return null;
  }
}

// Серверна утиліта: читає cookie 'token', верифікує і повертає користувача або null
export async function getUserFromCookieServer() {
  try {
    // cookies() в різних версіях може бути sync або async — підтримуємо обидва випадки
    let cookieStore: any = cookies();
    if (cookieStore && typeof cookieStore.then === "function") {
      cookieStore = await cookieStore;
    }

    if (!cookieStore || typeof cookieStore.get !== "function") {
      console.error("getUserFromCookieServer error: cookieStore missing or has no get()");
      return null;
    }

    const tokenCookie = cookieStore.get("token");
    if (!tokenCookie?.value) return null;
    const token = tokenCookie.value;

    const JWT_SECRET = process.env.JWT_SECRET;
    if (!JWT_SECRET) {
      // no secret configured -> cannot verify token
      return null;
    }

    const payload = verifyToken(token, JWT_SECRET);
    if (!payload?.sub) return null;

    await connectToDB();
    const user = await User.findById(payload.sub).lean();
    if (!user) return null;

    return { _id: String((user as any)._id), username: (user as any).username, email: (user as any).email };
  } catch (err) {
    console.error("getUserFromCookieServer error:", err);
    return null;
  }
}
