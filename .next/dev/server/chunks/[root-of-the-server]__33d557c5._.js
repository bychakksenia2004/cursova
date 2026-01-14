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
"[project]/lib/models/Test.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
// Mongoose sub-schemas
const questionOpts = {
    discriminatorKey: "type",
    _id: false
};
const BaseQuestionSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    id: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
}, questionOpts);
const SingleQuestionSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    options: [
        {
            id: {
                type: Number,
                required: true
            },
            text: {
                type: String,
                required: true
            },
            correct: {
                type: Boolean,
                required: true
            }
        }
    ]
}, {
    _id: false
});
const MultiQuestionSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    options: [
        {
            id: {
                type: Number,
                required: true
            },
            text: {
                type: String,
                required: true
            },
            correct: {
                type: Boolean,
                required: true
            }
        }
    ]
}, {
    _id: false
});
const SequenceQuestionSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    options: [
        {
            id: {
                type: Number,
                required: true
            },
            text: {
                type: String,
                required: true
            },
            order: {
                type: Number,
                required: true
            }
        }
    ]
}, {
    _id: false
});
const MatchingQuestionSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    pairs: [
        {
            id: {
                type: Number,
                required: true
            },
            left: {
                type: String,
                required: true
            },
            right: {
                type: String,
                required: true
            }
        }
    ]
}, {
    _id: false
});
const OpenQuestionSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    answers: [
        {
            type: String
        }
    ]
}, {
    _id: false
});
// Main Test schema — questions array uses base schema and will be discriminated
const TestSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    authorId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    visibility: {
        type: String,
        enum: [
            "private",
            "public"
        ],
        default: "private"
    },
    storeResponses: {
        type: Boolean,
        default: false
    },
    ownResultView: {
        type: String,
        enum: [
            "full",
            "score_only",
            "nothing"
        ],
        default: "full"
    },
    questions: [
        BaseQuestionSchema
    ]
});
TestSchema.path("questions").discriminator("single_choice", SingleQuestionSchema);
TestSchema.path("questions").discriminator("multi_choice", MultiQuestionSchema);
TestSchema.path("questions").discriminator("sequence", SequenceQuestionSchema);
TestSchema.path("questions").discriminator("matching", MatchingQuestionSchema);
TestSchema.path("questions").discriminator("open", OpenQuestionSchema);
const Test = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.Test || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model("Test", TestSchema);
const __TURBOPACK__default__export__ = Test;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
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
"[project]/lib/auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getUserFromCookieServer",
    ()=>getUserFromCookieServer,
    "verifyToken",
    ()=>verifyToken
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mongodb.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$models$2f$User$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/models/User.ts [app-route] (ecmascript)");
;
;
;
;
function base64url(input) {
    const b = typeof input === "string" ? Buffer.from(input) : input;
    return b.toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
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
async function getUserFromCookieServer() {
    try {
        // cookies() в різних версіях може бути sync або async — підтримуємо обидва випадки
        let cookieStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectToDB"])();
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$models$2f$User$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findById(payload.sub).lean();
        if (!user) return null;
        return {
            _id: String(user._id),
            username: user.username,
            email: user.email
        };
    } catch (err) {
        console.error("getUserFromCookieServer error:", err);
        return null;
    }
}
}),
"[project]/app/api/tests/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mongodb.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$models$2f$Test$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/models/Test.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth.ts [app-route] (ecmascript)");
;
;
;
;
function mapType(frontType) {
    switch(frontType){
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
async function POST(req) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectToDB"])();
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getUserFromCookieServer"])();
        if (!user) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Unauthorized"
        }, {
            status: 401
        });
        const body = await req.json();
        const { title, description, visibility, storeResponses, ownResultView, questions } = body;
        if (!title || !String(title).trim()) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Title is required"
        }, {
            status: 400
        });
        if (!Array.isArray(questions) || questions.length === 0) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "At least one question required"
        }, {
            status: 400
        });
        // Transform questions to match schema discriminators
        const transformed = questions.map((q)=>{
            const common = {
                id: q.id,
                type: mapType(q.type),
                text: q.text
            };
            if (q.type === "single" || q.type === "multi") {
                common.options = q.data && q.data.options || [];
            } else if (q.type === "sequence") {
                common.options = q.data && q.data.options || [];
            } else if (q.type === "matching") {
                common.pairs = q.data && q.data.pairs || [];
            } else if (q.type === "open") {
                common.answers = q.data && q.data.answers || [];
            }
            return common;
        });
        const created = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$models$2f$Test$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].create({
            title: String(title).trim(),
            description: description ? String(description) : null,
            authorId: user._id,
            visibility: visibility === "public" ? "public" : "private",
            storeResponses: !!storeResponses,
            ownResultView: ownResultView || "full",
            questions: transformed
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            id: created._id
        }, {
            status: 201
        });
    } catch (err) {
        console.error("/api/tests error:", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: err?.message || String(err)
        }, {
            status: 500
        });
    }
}
async function GET(req) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectToDB"])();
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getUserFromCookieServer"])();
        if (!user) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Unauthorized"
        }, {
            status: 401
        });
        // Return list of tests authored by user
        const tests = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$models$2f$Test$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find({
            authorId: user._id
        }).select("title description").lean();
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            tests
        }, {
            status: 200
        });
    } catch (err) {
        console.error("/api/tests GET error:", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: err?.message || String(err)
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__33d557c5._.js.map