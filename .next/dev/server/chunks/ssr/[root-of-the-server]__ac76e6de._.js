module.exports = [
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
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
"[project]/lib/mongodb.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/lib/models/User.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/lib/auth.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getUserFromCookieServer",
    ()=>getUserFromCookieServer,
    "verifyToken",
    ()=>verifyToken
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongodb$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mongodb.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$models$2f$User$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/models/User.ts [app-rsc] (ecmascript)");
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
        let cookieStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongodb$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["connectToDB"])();
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$models$2f$User$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findById(payload.sub).lean();
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
"[project]/lib/models/Attempt.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/lib/models/Test.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/app/history/[attemptId]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AttemptDetailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongodb$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mongodb.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$models$2f$Attempt$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/models/Attempt.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$models$2f$Test$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/models/Test.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
async function AttemptDetailPage({ params }) {
    const { attemptId } = await params;
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongodb$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["connectToDB"])();
    const viewer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserFromCookieServer"])();
    if (!viewer) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container min-vh-100 d-flex flex-column align-items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "mb-3",
                    children: "Потрібно увійти"
                }, void 0, false, {
                    fileName: "[project]/app/history/[attemptId]/page.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "menu-box w-100",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "alert alert-warning",
                            children: "Щоб переглянути свої відповіді, будь ласка, увійдіть."
                        }, void 0, false, {
                            fileName: "[project]/app/history/[attemptId]/page.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/login",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn btn-primary",
                                    children: "Увійти"
                                }, void 0, false, {
                                    fileName: "[project]/app/history/[attemptId]/page.tsx",
                                    lineNumber: 21,
                                    columnNumber: 53
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/history/[attemptId]/page.tsx",
                                lineNumber: 21,
                                columnNumber: 33
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/history/[attemptId]/page.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/history/[attemptId]/page.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/history/[attemptId]/page.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this);
    }
    let attempt = null;
    try {
        console.log("[AttemptDetailPage] looking up attemptId:", attemptId);
        // Try several lookup strategies so we handle string vs ObjectId shapes
        const triedIds = new Set();
        const candidates = [
            attemptId,
            String(attemptId).replace(/^"|"$/g, ""),
            String(attemptId).trim()
        ];
        for (const cand of candidates){
            if (!cand || triedIds.has(cand)) continue;
            triedIds.add(cand);
            try {
                attempt = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$models$2f$Attempt$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findById(cand).lean();
                if (attempt) {
                    console.log("[AttemptDetailPage] found by findById with candidate:", cand);
                    break;
                }
            } catch (e) {
                const err = e;
                console.warn("[AttemptDetailPage] findById failed for candidate:", cand, {
                    message: err?.message ?? String(err),
                    stack: err?.stack
                });
            }
            try {
                attempt = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$models$2f$Attempt$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findOne({
                    _id: cand
                }).lean();
                if (attempt) {
                    console.log("[AttemptDetailPage] found by findOne with candidate:", cand);
                    break;
                }
            } catch (e) {
                const err = e;
                console.warn("[AttemptDetailPage] findOne failed for candidate:", cand, {
                    message: err?.message ?? String(err),
                    stack: err?.stack
                });
            }
            // try ObjectId conversion if possible
            try {
                if (__TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].isValidObjectId(cand)) {
                    attempt = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$models$2f$Attempt$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findById(new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Types.ObjectId(cand)).lean();
                    if (attempt) {
                        console.log("[AttemptDetailPage] found by ObjectId conversion for:", cand);
                        break;
                    }
                }
            } catch (e) {
                const err = e;
                console.warn("[AttemptDetailPage] ObjectId lookup failed for:", cand, {
                    message: err?.message ?? String(err),
                    stack: err?.stack
                });
            }
        }
        console.log("[AttemptDetailPage] attempt found:", !!attempt);
    } catch (err) {
        console.error("[AttemptDetailPage] unexpected error during lookup:", err);
    }
    if (!attempt) {
        // Render a helpful debug page in dev to show the attempted id instead of a generic 404
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container d-flex flex-column align-items-center min-vh-100",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "mb-3",
                    children: "Спроба не знайдена (Debug)"
                }, void 0, false, {
                    fileName: "[project]/app/history/[attemptId]/page.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "menu-box w-100",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "alert alert-warning",
                            children: [
                                "Спроба з id ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: attemptId
                                }, void 0, false, {
                                    fileName: "[project]/app/history/[attemptId]/page.tsx",
                                    lineNumber: 85,
                                    columnNumber: 60
                                }, this),
                                " не знайдена в базі даних."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/history/[attemptId]/page.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-2 text-muted",
                            children: "Перевірте, що записи збережуються при проходженні тесту та що id правильно передається."
                        }, void 0, false, {
                            fileName: "[project]/app/history/[attemptId]/page.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/history",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn btn-outline-secondary",
                                    children: "Назад"
                                }, void 0, false, {
                                    fileName: "[project]/app/history/[attemptId]/page.tsx",
                                    lineNumber: 87,
                                    columnNumber: 55
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/history/[attemptId]/page.tsx",
                                lineNumber: 87,
                                columnNumber: 33
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/history/[attemptId]/page.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/history/[attemptId]/page.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/history/[attemptId]/page.tsx",
            lineNumber: 82,
            columnNumber: 7
        }, this);
    }
    const test = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$models$2f$Test$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findById(attempt.testId).lean();
    // Allow viewing if viewer is the attempt owner OR the author of the test
    const isAttemptOwner = attempt.userId && String(attempt.userId) === String(viewer._id);
    const isTestAuthor = test && test.authorId && String(test.authorId) === String(viewer._id);
    const isTestAuthorWithStorage = !!test && !!test.storeResponses && isTestAuthor;
    if (!isAttemptOwner && !isTestAuthorWithStorage) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container min-vh-100 d-flex flex-column align-items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "mb-3",
                    children: "Доступ заборонено"
                }, void 0, false, {
                    fileName: "[project]/app/history/[attemptId]/page.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "menu-box w-100",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "alert alert-danger",
                            children: "Ви можете переглядати лише власні спроби або як автор тесту."
                        }, void 0, false, {
                            fileName: "[project]/app/history/[attemptId]/page.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/history",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn btn-outline-secondary",
                                    children: "Назад"
                                }, void 0, false, {
                                    fileName: "[project]/app/history/[attemptId]/page.tsx",
                                    lineNumber: 104,
                                    columnNumber: 55
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/history/[attemptId]/page.tsx",
                                lineNumber: 104,
                                columnNumber: 33
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/history/[attemptId]/page.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/history/[attemptId]/page.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/history/[attemptId]/page.tsx",
            lineNumber: 100,
            columnNumber: 7
        }, this);
    }
    if (!test) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container min-vh-100 d-flex flex-column align-items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "mb-3",
                    children: "Тест видалено"
                }, void 0, false, {
                    fileName: "[project]/app/history/[attemptId]/page.tsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "menu-box w-100",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "alert alert-warning",
                            children: "Цей тест було видалено, але спроба все ще збережена."
                        }, void 0, false, {
                            fileName: "[project]/app/history/[attemptId]/page.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/history",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn btn-outline-secondary",
                                    children: "Назад"
                                }, void 0, false, {
                                    fileName: "[project]/app/history/[attemptId]/page.tsx",
                                    lineNumber: 115,
                                    columnNumber: 55
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/history/[attemptId]/page.tsx",
                                lineNumber: 115,
                                columnNumber: 33
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/history/[attemptId]/page.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/history/[attemptId]/page.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/history/[attemptId]/page.tsx",
            lineNumber: 111,
            columnNumber: 7
        }, this);
    }
    // Enforce ownResultView restrictions: authors always see everything; attempt owners see according to ownResultView.
    const ownView = test.ownResultView || "full";
    const canViewDetails = isTestAuthorWithStorage || isAttemptOwner && ownView === "full";
    const canViewTotals = isTestAuthorWithStorage || isAttemptOwner && (ownView === "full" || ownView === "score_only");
    if (!canViewTotals && !canViewDetails) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container min-vh-100 d-flex flex-column align-items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "mb-3",
                    children: "Доступ заборонено"
                }, void 0, false, {
                    fileName: "[project]/app/history/[attemptId]/page.tsx",
                    lineNumber: 129,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "menu-box w-100",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "alert alert-danger",
                            children: "Власник тесту заборонив перегляд результатів цього тесту."
                        }, void 0, false, {
                            fileName: "[project]/app/history/[attemptId]/page.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/history",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn btn-outline-secondary",
                                    children: "Назад"
                                }, void 0, false, {
                                    fileName: "[project]/app/history/[attemptId]/page.tsx",
                                    lineNumber: 132,
                                    columnNumber: 55
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/history/[attemptId]/page.tsx",
                                lineNumber: 132,
                                columnNumber: 33
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/history/[attemptId]/page.tsx",
                            lineNumber: 132,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/history/[attemptId]/page.tsx",
                    lineNumber: 130,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/history/[attemptId]/page.tsx",
            lineNumber: 128,
            columnNumber: 7
        }, this);
    }
    const answers = attempt.answers || {};
    const perQuestion = attempt.perQuestion || [];
    function findPQ(qid) {
        return (perQuestion || []).find((p)=>String(p.id) === String(qid));
    }
    // Prepare questions for display (no shuffling — show canonical order)
    // Accept some type aliases used in client (`single`, `multi`) so rendering matches take page
    const qs = Array.isArray(test.questions) ? test.questions.map((q)=>{
        const copy = {
            ...q
        };
        const qtype = (q.type || "").toString();
        if (qtype === "matching") {
            const lefts = (q.pairs || []).map((p, i)=>({
                    pairId: p.id ?? p._id ?? `p-${i}`,
                    text: p.left
                }));
            const rights = (q.pairs || []).map((p, i)=>({
                    pairId: p.id ?? p._id ?? `p-${i}`,
                    text: p.right
                }));
            copy._displayLeft = lefts;
            copy._displayRight = rights;
        }
        if (qtype === "sequence" || qtype === "single_choice" || qtype === "multi_choice" || qtype === "single" || qtype === "multi") {
            copy._displayOptions = q.options || q.data?.options || [];
            // normalize common aliases so rendering checks match
            if (qtype === "single") copy.type = "single_choice";
            if (qtype === "multi") copy.type = "multi_choice";
        }
        return copy;
    }) : [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container d-flex flex-column align-items-center min-vh-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "mb-3",
                children: test.title
            }, void 0, false, {
                fileName: "[project]/app/history/[attemptId]/page.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-muted mb-3",
                children: [
                    "Проходження: ",
                    new Date(attempt.createdAt).toLocaleString()
                ]
            }, void 0, true, {
                fileName: "[project]/app/history/[attemptId]/page.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, this),
            typeof attempt.totalScore === "number" && typeof attempt.totalPossible === "number" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Результат:"
                    }, void 0, false, {
                        fileName: "[project]/app/history/[attemptId]/page.tsx",
                        lineNumber: 170,
                        columnNumber: 31
                    }, this),
                    " ",
                    attempt.totalScore,
                    " / ",
                    attempt.totalPossible
                ]
            }, void 0, true, {
                fileName: "[project]/app/history/[attemptId]/page.tsx",
                lineNumber: 170,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "menu-box w-100",
                children: [
                    qs.map((q, idx)=>{
                        // answers keys in DB may be strings ("123") or numbers (123)
                        const userAns = answers[q.id] ?? answers[String(q.id)];
                        const pq = findPQ(q.id);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "d-flex justify-content-between mb-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "fw-semibold",
                                            children: [
                                                idx + 1,
                                                ". ",
                                                q.text
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/history/[attemptId]/page.tsx",
                                            lineNumber: 181,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-muted small",
                                            children: pq ? `бали: ${pq.score} / ${pq.points}` : typeof attempt.totalScore === "number" ? `бали: — / ${q.points ?? (pq && pq.points) ?? "?"}` : ""
                                        }, void 0, false, {
                                            fileName: "[project]/app/history/[attemptId]/page.tsx",
                                            lineNumber: 182,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/history/[attemptId]/page.tsx",
                                    lineNumber: 180,
                                    columnNumber: 15
                                }, this),
                                q.imageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: q.imageUrl,
                                        alt: "qimg",
                                        style: {
                                            maxWidth: "40%"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/history/[attemptId]/page.tsx",
                                        lineNumber: 186,
                                        columnNumber: 51
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/history/[attemptId]/page.tsx",
                                    lineNumber: 186,
                                    columnNumber: 29
                                }, this) : null,
                                q.type === "single_choice" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: (q._displayOptions || []).map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "d-block mb-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: `q-${q.id}`,
                                                    disabled: true,
                                                    checked: String(userAns) === String(opt.id)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/history/[attemptId]/page.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 21
                                                }, this),
                                                " ",
                                                opt.text
                                            ]
                                        }, opt.id, true, {
                                            fileName: "[project]/app/history/[attemptId]/page.tsx",
                                            lineNumber: 190,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/history/[attemptId]/page.tsx",
                                    lineNumber: 189,
                                    columnNumber: 17
                                }, this) : q.type === "multi_choice" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: (q._displayOptions || []).map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "d-block mb-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    disabled: true,
                                                    checked: Array.isArray(userAns) && userAns.map(String).includes(String(opt.id))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/history/[attemptId]/page.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 21
                                                }, this),
                                                " ",
                                                opt.text
                                            ]
                                        }, opt.id, true, {
                                            fileName: "[project]/app/history/[attemptId]/page.tsx",
                                            lineNumber: 196,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/history/[attemptId]/page.tsx",
                                    lineNumber: 195,
                                    columnNumber: 17
                                }, this) : q.type === "sequence" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "list-group",
                                    children: (q._displayOptions || []).map((it)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "list-group-item bg-transparent border-0 d-flex align-items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-fill",
                                                    children: it.text
                                                }, void 0, false, {
                                                    fileName: "[project]/app/history/[attemptId]/page.tsx",
                                                    lineNumber: 204,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-50",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: "form-control",
                                                        value: userAns && (userAns[it.id] ?? userAns[String(it.id)]) || "",
                                                        disabled: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/history/[attemptId]/page.tsx",
                                                        lineNumber: 205,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/history/[attemptId]/page.tsx",
                                                    lineNumber: 205,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, it.id, true, {
                                            fileName: "[project]/app/history/[attemptId]/page.tsx",
                                            lineNumber: 203,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/history/[attemptId]/page.tsx",
                                    lineNumber: 201,
                                    columnNumber: 17
                                }, this) : q.type === "matching" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "list-group",
                                    children: (q._displayLeft || []).map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "list-group-item bg-transparent border-0 d-flex align-items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-fill",
                                                    children: l.text
                                                }, void 0, false, {
                                                    fileName: "[project]/app/history/[attemptId]/page.tsx",
                                                    lineNumber: 213,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-50",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        className: "form-select",
                                                        value: userAns && (userAns[l.pairId] ?? userAns[String(l.pairId)] ?? ""),
                                                        disabled: true,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: "-- Відповідність --"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/history/[attemptId]/page.tsx",
                                                                lineNumber: 216,
                                                                columnNumber: 27
                                                            }, this),
                                                            (q._displayRight || []).map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: r.pairId,
                                                                    children: r.text
                                                                }, r.pairId, false, {
                                                                    fileName: "[project]/app/history/[attemptId]/page.tsx",
                                                                    lineNumber: 218,
                                                                    columnNumber: 29
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/history/[attemptId]/page.tsx",
                                                        lineNumber: 215,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/history/[attemptId]/page.tsx",
                                                    lineNumber: 214,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, l.pairId, true, {
                                            fileName: "[project]/app/history/[attemptId]/page.tsx",
                                            lineNumber: 212,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/history/[attemptId]/page.tsx",
                                    lineNumber: 210,
                                    columnNumber: 17
                                }, this) : q.type === "open" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        className: "form-control",
                                        rows: 3,
                                        value: userAns || "",
                                        disabled: true
                                    }, void 0, false, {
                                        fileName: "[project]/app/history/[attemptId]/page.tsx",
                                        lineNumber: 226,
                                        columnNumber: 22
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/history/[attemptId]/page.tsx",
                                    lineNumber: 226,
                                    columnNumber: 17
                                }, this) : null
                            ]
                        }, q.id, true, {
                            fileName: "[project]/app/history/[attemptId]/page.tsx",
                            lineNumber: 179,
                            columnNumber: 13
                        }, this);
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "d-flex gap-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/history",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn btn-outline-secondary",
                                children: "Назад до історії"
                            }, void 0, false, {
                                fileName: "[project]/app/history/[attemptId]/page.tsx",
                                lineNumber: 233,
                                columnNumber: 33
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/history/[attemptId]/page.tsx",
                            lineNumber: 233,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/history/[attemptId]/page.tsx",
                        lineNumber: 232,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/history/[attemptId]/page.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/history/[attemptId]/page.tsx",
        lineNumber: 166,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/history/[attemptId]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/history/[attemptId]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ac76e6de._.js.map