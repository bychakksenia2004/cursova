module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/mongoose [external] (mongoose, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("mongoose", () => require("mongoose"));

module.exports = mod;
}),
"[externals]/dns/promises [external] (dns/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dns/promises", () => require("dns/promises"));

module.exports = mod;
}),
"[project]/lib/mongodb.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "connectToDB",
    ()=>connectToDB
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$dns$2f$promises__$5b$external$5d$__$28$dns$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/dns/promises [external] (dns/promises, cjs)");
;
;
// Додаємо константу з fallback на MONGODB_URI
const MONGODB_URL = process.env.MONGODB_URL || process.env.MONGODB_URI;
if (!MONGODB_URL) {
    throw new Error("❌ Вкажи змінну MONGODB_URL або MONGODB_URI у .env.local");
}
let cached = /*TURBOPACK member replacement*/ __turbopack_context__.g.mongoose;
if (!cached) {
    cached = /*TURBOPACK member replacement*/ __turbopack_context__.g.mongoose = {
        conn: null,
        promise: null
    };
}
async function connectToDB() {
    if (cached.conn) return cached.conn;
    if (!cached.promise) {
        // Більші таймаути для більш стабільної діагностики
        cached.promise = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].connect(MONGODB_URL, {
            // сучасні mongoose/driver опції за замовчуванням працюють добре,
            // але додаємо час очікування на вибір сервера для швидшої діагностики
            serverSelectionTimeoutMS: 10000,
            connectTimeoutMS: 10000,
            socketTimeoutMS: 45000
        }).then((mongoose)=>mongoose).catch(async (err)=>{
            // Лог оригінальної помилки на сервері (щоб бачити стек)
            console.error("MongoDB connection error (original):", err);
            // Базове дружнє повідомлення
            let diag = [
                "Не вдалося підключитися до MongoDB.",
                "Перевірте MONGODB_URL у d:\\magistrature\\Dockerwork\\kursova\\.env.local,",
                "переконайтесь, що кластер працює, та що ваш IP добавлений в Network Access (whitelist) в Atlas.",
                `Оригінальна помилка: ${err?.message ?? String(err)}`
            ].join(" ");
            // Додаткова діагностика для mongodb+srv (DNS SRV)
            try {
                if (typeof MONGODB_URL === "string" && MONGODB_URL.startsWith("mongodb+srv://")) {
                    try {
                        const parsed = new URL(MONGODB_URL);
                        const host = parsed.hostname;
                        diag += ` SRV host: ${host}.`;
                        try {
                            const srv = await __TURBOPACK__imported__module__$5b$externals$5d2f$dns$2f$promises__$5b$external$5d$__$28$dns$2f$promises$2c$__cjs$29$__["default"].resolveSrv(`_mongodb._tcp.${host}`);
                            diag += ` DNS SRV records: ${JSON.stringify(srv)}.`;
                        } catch (srvErr) {
                            diag += ` DNS SRV lookup failed: ${srvErr?.message ?? String(srvErr)}.`;
                        }
                        try {
                            const lookup = await __TURBOPACK__imported__module__$5b$externals$5d2f$dns$2f$promises__$5b$external$5d$__$28$dns$2f$promises$2c$__cjs$29$__["default"].lookup(host);
                            diag += ` DNS lookup: ${JSON.stringify(lookup)}.`;
                        } catch (lookupErr) {
                            diag += ` DNS lookup failed: ${lookupErr?.message ?? String(lookupErr)}.`;
                        }
                    } catch (parseErr) {
                        diag += ` Failed to parse URL for additional diagnostics: ${parseErr?.message ?? String(parseErr)}.`;
                    }
                } else {
                    // Для звичайних mongodb:// хостів також можна зробити dns.lookup
                    try {
                        const parsed = new URL(MONGODB_URL);
                        const host = parsed.hostname;
                        try {
                            const lookup = await __TURBOPACK__imported__module__$5b$externals$5d2f$dns$2f$promises__$5b$external$5d$__$28$dns$2f$promises$2c$__cjs$29$__["default"].lookup(host);
                            diag += ` DNS lookup: ${JSON.stringify(lookup)}.`;
                        } catch (lookupErr) {
                            diag += ` DNS lookup failed: ${lookupErr?.message ?? String(lookupErr)}.`;
                        }
                    } catch  {
                    // нічого
                    }
                }
            } catch (diagErr) {
                diag += ` (diagnostics failed: ${diagErr?.message ?? String(diagErr)})`;
            }
            // Кидаємо нову помилку з детальною діагностикою
            throw new Error(diag);
        });
    }
    cached.conn = await cached.promise;
    return cached.conn;
}
}),
"[project]/lib/models/User.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const UserSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
const User = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.User || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model("User", UserSchema);
const __TURBOPACK__default__export__ = User;
}),
"[project]/app/api/login/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mongodb.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$models$2f$User$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/models/User.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
;
;
;
;
// helper: base64url
function base64url(input) {
    const b = typeof input === "string" ? Buffer.from(input) : input;
    return b.toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
// create simple HS256 JWT
function createToken(payload, secret, expiresInSec = 7 * 24 * 3600) {
    const header = {
        alg: "HS256",
        typ: "JWT"
    };
    const now = Math.floor(Date.now() / 1000);
    const body = {
        ...payload,
        iat: now,
        exp: now + expiresInSec
    };
    const headerB = base64url(JSON.stringify(header));
    const payloadB = base64url(JSON.stringify(body));
    const toSign = `${headerB}.${payloadB}`;
    const sig = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHmac("sha256", secret).update(toSign).digest();
    const sigB = base64url(sig);
    return `${toSign}.${sigB}`;
}
// verify token (returns payload or null)
function verifyToken(token, secret) {
    try {
        const [headerB, payloadB, sigB] = token.split(".");
        if (!headerB || !payloadB || !sigB) return null;
        const toSign = `${headerB}.${payloadB}`;
        const expectedSig = base64url(__TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHmac("sha256", secret).update(toSign).digest());
        if (expectedSig !== sigB) return null;
        const payload = JSON.parse(Buffer.from(payloadB, "base64").toString("utf8"));
        if (payload.exp && Math.floor(Date.now() / 1000) > payload.exp) return null;
        return payload;
    } catch  {
        return null;
    }
}
async function POST(req) {
    try {
        const body = await req.json();
        const { email: rawEmail, password } = body || {};
        if (!rawEmail || !password) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Missing fields"
            }, {
                status: 400
            });
        }
        const email = String(rawEmail).trim().toLowerCase();
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectToDB"])();
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$models$2f$User$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
            email
        }).lean();
        if (!user) {
            // don't reveal whether email exists
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Invalid email or password"
            }, {
                status: 401
            });
        }
        // Support both possible field names (password or passwordHash)
        const hash = user.password ?? user.passwordHash ?? null;
        if (!hash) {
            // server-side info for debugging
            console.error(`[auth] user ${user._id} has no password hash stored`);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Invalid email or password"
            }, {
                status: 401
            });
        }
        // debug log only in non-production to help you trace issues
        if ("TURBOPACK compile-time truthy", 1) {
            console.debug(`[auth] login attempt`, {
                userId: String(user._id),
                hashPresent: !!hash
            });
        }
        const isValid = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].compare(password, hash);
        if (!isValid) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Invalid email or password"
            }, {
                status: 401
            });
        }
        // successful — return minimal info
        const JWT_SECRET = process.env.JWT_SECRET;
        const headers = {
            "Content-Type": "application/json"
        };
        let debugSetCookie = null;
        if (JWT_SECRET) {
            const token = createToken({
                sub: String(user._id),
                email: user.email
            }, JWT_SECRET, 7 * 24 * 3600);
            const secure = ("TURBOPACK compile-time value", "development") === "production";
            const maxAge = 7 * 24 * 3600;
            // use SameSite=None if you suspect cross-site; keep Lax otherwise
            const cookie = `token=${token}; HttpOnly; Path=/; Max-Age=${maxAge}; SameSite=Lax${("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ""}`;
            headers["Set-Cookie"] = cookie;
            debugSetCookie = cookie;
            // log for server-side debugging
            console.log("POST /api/login - Set-Cookie:", cookie);
        } else {
            console.warn("POST /api/login - JWT_SECRET not set — no cookie will be issued");
        }
        // include debugSetCookie in response only in non-production to diagnose
        const bodyResp = {
            ok: true,
            id: user._id
        };
        if ("TURBOPACK compile-time truthy", 1) {
            bodyResp.debugSetCookie = debugSetCookie;
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](JSON.stringify(bodyResp), {
            status: 200,
            headers
        });
    } catch (err) {
        console.error("Login error:", err);
        if (err?.name === "ValidationError" && err.errors) {
            const details = {};
            for (const [k, v] of Object.entries(err.errors)){
                // @ts-ignore
                details[k] = v.message || String(v);
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Validation error",
                details
            }, {
                status: 400
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: err?.message || "Internal server error"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e638d864._.js.map