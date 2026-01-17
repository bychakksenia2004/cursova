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
    points: {
        type: Number,
        required: false,
        default: 1
    },
    type: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: false
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
    timed: {
        type: Boolean,
        default: false
    },
    timeLimitMinutes: {
        type: Number,
        required: false
    },
    dateWindowEnabled: {
        type: Boolean,
        default: false
    },
    openFrom: {
        type: Date,
        required: false
    },
    openTo: {
        type: Date,
        required: false
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
"[project]/lib/models/Attempt.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const AttemptSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    userId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
        required: false,
        ref: "User"
    },
    testId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
        required: true,
        ref: "Test"
    },
    answers: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.Mixed,
        required: false
    },
    totalScore: {
        type: Number,
        required: true
    },
    totalPossible: {
        type: Number,
        required: true
    },
    perQuestion: {
        type: Array,
        required: true
    },
    createdAt: {
        type: Date,
        default: ()=>new Date()
    }
}, {
    timestamps: false
});
const Attempt = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.Attempt || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model("Attempt", AttemptSchema);
const __TURBOPACK__default__export__ = Attempt;
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
"[project]/app/api/public-tests/[id]/submit/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mongodb.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$models$2f$Test$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/models/Test.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$models$2f$Attempt$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/models/Attempt.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth.ts [app-route] (ecmascript)");
;
;
;
;
;
async function POST(req, ctx) {
    try {
        const params = await ctx.params;
        const id = params?.id;
        if (!id) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Missing id"
        }, {
            status: 400
        });
        const body = await req.json();
        const answers = body?.answers || {};
        // Sanitize answers by serializing and parsing to remove prototypes and ensure plain objects
        const sanitizedAnswers = JSON.parse(JSON.stringify(answers || {}));
        console.log("/api/public-tests/[id]/submit received answers:", sanitizedAnswers);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectToDB"])();
        const test = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$models$2f$Test$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findById(String(id)).lean();
        if (!test) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Not found"
        }, {
            status: 404
        });
        if (test.visibility !== "public") return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Not public"
        }, {
            status: 403
        });
        // If the test requires storing responses, require an authenticated user to take it
        let viewer = null;
        if (test.storeResponses) {
            viewer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getUserFromCookieServer"])();
            if (!viewer) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Authentication required to take this test"
            }, {
                status: 401
            });
        } else {
            // attach viewer if present (optional)
            try {
                viewer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getUserFromCookieServer"])();
            } catch  {}
        }
        let totalPossible = 0;
        let totalScore = 0;
        const perQuestion = [];
        for (const q of test.questions || []){
            const qid = q.id;
            const qpoints = typeof q.points === "number" ? q.points : 1;
            totalPossible += qpoints;
            const userAns = sanitizedAnswers[qid] ?? sanitizedAnswers[String(qid)];
            let score = 0;
            if (q.type === "single_choice") {
                // find correct option id
                const correct = (q.options || []).find((o)=>o.correct === true);
                if (correct && typeof userAns !== "undefined" && String(userAns) === String(correct.id)) {
                    score = qpoints;
                }
            } else if (q.type === "multi_choice") {
                const opts = q.options || [];
                const correctIds = opts.filter((o)=>o.correct === true).map((o)=>String(o.id));
                const userIds = Array.isArray(userAns) ? userAns.map((x)=>String(x)) : [];
                // award full points only if user selected exactly all correct and no incorrect
                const selectedSet = new Set(userIds);
                const correctSet = new Set(correctIds);
                let allCorrect = correctIds.length > 0 && correctIds.every((c)=>selectedSet.has(c));
                // also ensure no incorrect selected
                const noIncorrect = userIds.every((u)=>correctSet.has(u));
                if (allCorrect && noIncorrect) score = qpoints;
            } else if (q.type === "sequence") {
                // userAns expected to be mapping itemId -> position
                const opts = q.options || [];
                // require all items have positions and match the correct 'order'
                const allMatch = opts.length > 0 && opts.every((it)=>{
                    const correctPos = Number(it.order);
                    const provided = userAns && Object.prototype.hasOwnProperty.call(userAns, it.id) ? Number(userAns[it.id]) : undefined;
                    return typeof provided !== "undefined" && provided === correctPos;
                });
                if (allMatch) score = qpoints;
            } else if (q.type === "matching") {
                // userAns expected mapping leftPairId -> rightPairId
                const pairs = q.pairs || [];
                const totalPairs = pairs.length || 0;
                let correctMatches = 0;
                for (const p of pairs){
                    const pid = String(p.id);
                    const userMap = userAns || {};
                    if (Object.prototype.hasOwnProperty.call(userMap, pid)) {
                        const chosen = String(userMap[pid] ?? "");
                        // correct is when chosen equals the same pair id (pairing by id)
                        if (chosen === pid) correctMatches++;
                    }
                }
                if (totalPairs > 0) score = qpoints * (correctMatches / totalPairs);
            } else if (q.type === "open") {
                // open: compare trimmed, case-insensitive to any of stored answers
                const expected = (q.answers || []).map((a)=>String(a || "").trim().toLowerCase());
                const provided = typeof userAns === "string" ? String(userAns).trim().toLowerCase() : "";
                if (provided && expected.includes(provided)) score = qpoints;
            }
            // round to 3 decimals to avoid floating noise
            score = Math.round((score + Number.EPSILON) * 1000) / 1000;
            perQuestion.push({
                id: qid,
                type: q.type,
                points: qpoints,
                score
            });
            totalScore += score;
        }
        totalScore = Math.round((totalScore + Number.EPSILON) * 1000) / 1000;
        // Save attempt record (always saved regardless of storeResponses setting)
        let createdAttempt = null;
        try {
            // Prevent duplicate attempts for authenticated users: if a recent attempt
            // by the same user on the same test has identical answers, return that
            // attempt instead of creating a duplicate.
            if (viewer) {
                try {
                    const recent = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$models$2f$Attempt$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find({
                        userId: viewer._id,
                        testId: test._id
                    }).sort({
                        createdAt: -1
                    }).limit(5).lean();
                    const payloadStr = JSON.stringify(sanitizedAnswers || {});
                    const now = Date.now();
                    for (const r of recent){
                        try {
                            const rStr = JSON.stringify(r.answers || {});
                            const ageMs = now - new Date(r.createdAt).getTime();
                            // consider duplicates if within 60 seconds
                            if (rStr === payloadStr && ageMs >= 0 && ageMs <= 60000) {
                                console.log("Duplicate submit detected, returning existing attempt:", String(r._id));
                                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                                    ok: true,
                                    totalScore: r.totalScore,
                                    totalPossible: r.totalPossible,
                                    perQuestion: r.perQuestion,
                                    attemptId: String(r._id),
                                    savedAnswers: r.answers
                                }, {
                                    status: 200
                                });
                            }
                        } catch  {}
                    }
                } catch (err) {
                    console.warn("Duplicate check failed:", err);
                }
            }
            createdAttempt = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$models$2f$Attempt$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].create({
                userId: viewer ? viewer._id : null,
                testId: test._id,
                answers: sanitizedAnswers,
                totalScore,
                totalPossible,
                perQuestion,
                createdAt: new Date()
            });
            console.log("/api/public-tests/[id]/submit created attempt id:", String(createdAttempt._id));
        } catch (err) {
            console.error("Failed to save attempt:", err);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Failed to save attempt"
            }, {
                status: 500
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            totalScore,
            totalPossible,
            perQuestion,
            attemptId: String(createdAttempt._id),
            savedAnswers: createdAttempt.answers
        }, {
            status: 200
        });
    } catch (err) {
        console.error("/api/public-tests/[id]/submit POST error:", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: err?.message || String(err)
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a99cfe2c._.js.map