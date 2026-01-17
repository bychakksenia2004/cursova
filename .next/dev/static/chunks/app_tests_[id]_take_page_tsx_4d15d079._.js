(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/tests/[id]/take/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TakePageClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function TakePageClient() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const id = params?.id;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [test, setTest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [viewer, setViewer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [lightboxUrl, setLightboxUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [started, setStarted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [resultPreview, setResultPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [remainingSeconds, setRemainingSeconds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const timerRef = ("TURBOPACK compile-time truthy", 1) ? {
        current: null
    } : "TURBOPACK unreachable";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TakePageClient.useEffect": ()=>{
            let mounted = true;
            async function load() {
                if (!id) return;
                try {
                    const res = await fetch(`/api/public-tests/${id}`);
                    if (!res.ok) {
                        console.warn(await res.text());
                        if (mounted) setLoading(false);
                        return;
                    }
                    const data = await res.json();
                    if (mounted) {
                        // create shuffled display order for options/pairs per question
                        function shuffleArray(arr) {
                            const a = Array.isArray(arr) ? [
                                ...arr
                            ] : [];
                            for(let i = a.length - 1; i > 0; i--){
                                const j = Math.floor(Math.random() * (i + 1));
                                const tmp = a[i];
                                a[i] = a[j];
                                a[j] = tmp;
                            }
                            return a;
                        }
                        const t = data.test;
                        // determine availability window on client
                        const now = new Date();
                        const windowEnabled = !!t.dateWindowEnabled;
                        const openFrom = t.openFrom ? new Date(t.openFrom) : null;
                        const openTo = t.openTo ? new Date(t.openTo) : null;
                        const inWindow = !windowEnabled || (openFrom ? now >= openFrom : true) && (openTo ? now <= openTo : true);
                        const mapped = Array.isArray(t.questions) ? t.questions.map({
                            "TakePageClient.useEffect.load": (q)=>{
                                const copy = {
                                    ...q
                                };
                                const opts = q.options || q.data?.options || [];
                                const pairs = q.pairs || q.data?.pairs || [];
                                if (q.type === "single_choice" || q.type === "single" || q.type === "multi_choice" || q.type === "multi" || q.type === "sequence") {
                                    copy._displayOptions = shuffleArray(opts.map({
                                        "TakePageClient.useEffect.load": (o)=>({
                                                ...o
                                            })
                                    }["TakePageClient.useEffect.load"]));
                                }
                                if (q.type === "matching") {
                                    // For matching, shuffle left and right sides independently so taker must match.
                                    // Use a robust pairId (p.id || p._id || index) to work with varying DB shapes.
                                    const lefts = pairs.map({
                                        "TakePageClient.useEffect.load.lefts": (p, i)=>({
                                                pairId: p.id ?? p._id ?? `p-${i}`,
                                                text: p.left
                                            })
                                    }["TakePageClient.useEffect.load.lefts"]);
                                    const rights = pairs.map({
                                        "TakePageClient.useEffect.load.rights": (p, i)=>({
                                                pairId: p.id ?? p._id ?? `p-${i}`,
                                                text: p.right
                                            })
                                    }["TakePageClient.useEffect.load.rights"]);
                                    copy._displayLeft = shuffleArray(lefts);
                                    copy._displayRight = shuffleArray(rights);
                                }
                                return copy;
                            }
                        }["TakePageClient.useEffect.load"]) : [];
                        setTest({
                            ...t,
                            questions: mapped,
                            __inWindow: inWindow
                        });
                        // if server provided viewer info, set it
                        if (t._viewer) setViewer(t._viewer);
                    }
                } catch (err) {
                    console.warn(err);
                } finally{
                    if (mounted) setLoading(false);
                }
            }
            load();
            return ({
                "TakePageClient.useEffect": ()=>{
                    mounted = false;
                }
            })["TakePageClient.useEffect"];
        }
    }["TakePageClient.useEffect"], [
        id
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TakePageClient.useEffect": ()=>{
            if (!test) return;
            try {
                const key = `test_start_${id}`;
                if (("TURBOPACK compile-time value", "object") !== "undefined" && localStorage.getItem(key)) {
                    localStorage.removeItem(key);
                    onStart();
                }
            } catch (e) {
            // ignore
            }
        }
    }["TakePageClient.useEffect"], [
        test
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TakePageClient.useEffect": ()=>{
            if (!lightboxUrl) return;
            function onKey(e) {
                if (e.key === "Escape") setLightboxUrl(null);
            }
            window.addEventListener("keydown", onKey);
            return ({
                "TakePageClient.useEffect": ()=>window.removeEventListener("keydown", onKey)
            })["TakePageClient.useEffect"];
        }
    }["TakePageClient.useEffect"], [
        lightboxUrl
    ]);
    function onSingle(q, optionId) {
        setAnswers((s)=>({
                ...s,
                [q.id]: optionId
            }));
    }
    function onMulti(q, optionId) {
        setAnswers((s)=>{
            const cur = s[q.id] || [];
            const next = cur.includes(optionId) ? cur.filter((x)=>x !== optionId) : [
                ...cur,
                optionId
            ];
            return {
                ...s,
                [q.id]: next
            };
        });
    }
    function onOpen(q, text) {
        setAnswers((s)=>({
                ...s,
                [q.id]: text
            }));
    }
    function onSequenceChange(q, itemId, pos) {
        setAnswers((s)=>{
            const cur = typeof s[q.id] === "object" && s[q.id] !== null ? {
                ...s[q.id]
            } : {};
            if (pos === "" || pos === null) {
                delete cur[itemId];
            } else {
                cur[itemId] = Number(pos);
            }
            return {
                ...s,
                [q.id]: cur
            };
        });
    }
    function onMatchSelect(q, leftPairId, rightPairId) {
        setAnswers((s)=>{
            const cur = typeof s[q.id] === "object" && s[q.id] !== null ? {
                ...s[q.id]
            } : {};
            cur[leftPairId] = rightPairId;
            return {
                ...s,
                [q.id]: cur
            };
        });
    }
    function onStart() {
        // placeholder: scroll to questions
        const el = document.querySelector(".questions-section");
        if (el) el.scrollIntoView({
            behavior: "smooth"
        });
        // start timer if test is timed
        if (test?.timed && !started) {
            const secs = Number(test.timeLimitMinutes) ? Math.max(1, Math.floor(Number(test.timeLimitMinutes) * 60)) : 0;
            setRemainingSeconds(secs);
            setStarted(true);
            if (timerRef.current) clearInterval(timerRef.current);
            timerRef.current = setInterval(()=>{
                setRemainingSeconds((s)=>{
                    if (s === null) return s;
                    if (s <= 1) {
                        // time's up
                        clearInterval(timerRef.current);
                        submitLocal();
                        return 0;
                    }
                    return s - 1;
                });
            }, 1000);
        }
    }
    function submitLocal() {
        try {
            if (timerRef.current) clearInterval(timerRef.current);
        } catch  {}
        if (submitting) return; // prevent duplicate submits
        setSubmitting(true);
        (async ()=>{
            let didRedirect = false;
            try {
                const res = await fetch(`/api/public-tests/${id}/submit`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        answers
                    })
                });
                if (!res.ok) {
                    const txt = await res.text();
                    console.warn("Submit error:", txt);
                    alert("Помилка надсилання відповіді");
                    router.push("/tests");
                    return;
                }
                const data = await res.json();
                if (data && data.ok) {
                    // If server returned an attemptId, it was saved — behave as before.
                    if (data.attemptId) {
                        try {
                            if ("TURBOPACK compile-time truthy", 1) alert("Відповіді збережено");
                        } catch  {}
                        didRedirect = true;
                        router.push("/");
                        return;
                    }
                    // Anonymous taker and server did not persist: show immediate results according to returned payload
                    setResultPreview(data);
                    return;
                } else {
                    alert("Невідома відповідь від сервера.");
                }
            } catch (err) {
                console.warn(err);
                alert("Помилка надсилання відповіді");
            } finally{
                // if we didn't already redirect to the saved attempt, go back to tests
                setSubmitting(false);
                if (!didRedirect) {
                    try {
                        if (("TURBOPACK compile-time value", "object") !== "undefined" && window.location.pathname && window.location.pathname.startsWith("/history")) {
                        // already on a history page — do nothing
                        } else {
                            router.push("/tests");
                        }
                    } catch  {
                        router.push("/tests");
                    }
                }
            }
        })();
    }
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container min-vh-100",
        children: "Завантаження..."
    }, void 0, false, {
        fileName: "[project]/app/tests/[id]/take/page.tsx",
        lineNumber: 224,
        columnNumber: 23
    }, this);
    if (!test) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container min-vh-100",
        children: "Тест не знайдено або недоступний."
    }, void 0, false, {
        fileName: "[project]/app/tests/[id]/take/page.tsx",
        lineNumber: 225,
        columnNumber: 21
    }, this);
    // if test is outside allowed window, show message
    if (test.__inWindow === false) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container d-flex flex-column align-items-center min-vh-100",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "mb-3",
                    children: test.title
                }, void 0, false, {
                    fileName: "[project]/app/tests/[id]/take/page.tsx",
                    lineNumber: 230,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "menu-box w-100",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "alert alert-warning",
                            children: "Тест наразі недоступний за часовим вікном."
                        }, void 0, false, {
                            fileName: "[project]/app/tests/[id]/take/page.tsx",
                            lineNumber: 232,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/tests",
                                className: "btn btn-outline-secondary",
                                children: "Назад до списку"
                            }, void 0, false, {
                                fileName: "[project]/app/tests/[id]/take/page.tsx",
                                lineNumber: 234,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/tests/[id]/take/page.tsx",
                            lineNumber: 233,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/tests/[id]/take/page.tsx",
                    lineNumber: 231,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/tests/[id]/take/page.tsx",
            lineNumber: 229,
            columnNumber: 7
        }, this);
    }
    function formatTime(secs) {
        if (secs === null) return "";
        const m = Math.floor(secs / 60);
        const s = secs % 60;
        return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
    }
    const requiresLogin = !!test.storeResponses || !!test.requiresLogin;
    const isAuthenticated = !!viewer;
    if (requiresLogin && !isAuthenticated) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container d-flex flex-column align-items-center min-vh-100",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "mb-3",
                    children: test.title
                }, void 0, false, {
                    fileName: "[project]/app/tests/[id]/take/page.tsx",
                    lineNumber: 254,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "menu-box w-100",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "alert alert-warning",
                            children: [
                                "Цей тест вимагає реєстрації для проходження. Будь ласка, ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/login",
                                    children: "увійдіть"
                                }, void 0, false, {
                                    fileName: "[project]/app/tests/[id]/take/page.tsx",
                                    lineNumber: 256,
                                    columnNumber: 105
                                }, this),
                                " або ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/register",
                                    children: "зареєструйтесь"
                                }, void 0, false, {
                                    fileName: "[project]/app/tests/[id]/take/page.tsx",
                                    lineNumber: 256,
                                    columnNumber: 139
                                }, this),
                                "."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/tests/[id]/take/page.tsx",
                            lineNumber: 256,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/tests",
                                className: "btn btn-outline-secondary",
                                children: "Назад до списку"
                            }, void 0, false, {
                                fileName: "[project]/app/tests/[id]/take/page.tsx",
                                lineNumber: 258,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/tests/[id]/take/page.tsx",
                            lineNumber: 257,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/tests/[id]/take/page.tsx",
                    lineNumber: 255,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/tests/[id]/take/page.tsx",
            lineNumber: 253,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container d-flex flex-column align-items-center min-vh-100",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mb-3",
                        children: test.title
                    }, void 0, false, {
                        fileName: "[project]/app/tests/[id]/take/page.tsx",
                        lineNumber: 268,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-100 mb-2 d-flex justify-content-between align-items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: started ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "badge bg-danger",
                                    children: [
                                        "Час: ",
                                        formatTime(remainingSeconds)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/tests/[id]/take/page.tsx",
                                    lineNumber: 272,
                                    columnNumber: 13
                                }, this) : null
                            }, void 0, false, {
                                fileName: "[project]/app/tests/[id]/take/page.tsx",
                                lineNumber: 270,
                                columnNumber: 9
                            }, this),
                            test.timed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-muted",
                                children: [
                                    "Час на тест: ",
                                    test.timeLimitMinutes,
                                    " хв"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/tests/[id]/take/page.tsx",
                                lineNumber: 275,
                                columnNumber: 23
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/tests/[id]/take/page.tsx",
                        lineNumber: 269,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "menu-box w-100 questions-section",
                        children: [
                            Array.isArray(test.questions) && test.questions.map((q, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "fw-semibold",
                                            children: [
                                                idx + 1,
                                                ". ",
                                                q.text
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/tests/[id]/take/page.tsx",
                                            lineNumber: 281,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2",
                                            children: [
                                                q.imageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: q.imageUrl,
                                                        alt: `Question ${idx + 1} image`,
                                                        style: {
                                                            cursor: "pointer",
                                                            objectFit: "contain",
                                                            maxWidth: "33%",
                                                            maxHeight: "33vh",
                                                            width: "auto",
                                                            height: "auto",
                                                            borderRadius: 8
                                                        },
                                                        onClick: ()=>setLightboxUrl(q.imageUrl)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/tests/[id]/take/page.tsx",
                                                        lineNumber: 285,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/tests/[id]/take/page.tsx",
                                                    lineNumber: 284,
                                                    columnNumber: 19
                                                }, this) : null,
                                                q.type === "single_choice" || q.type === "single" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: (q._displayOptions || q.options || q.data?.options || []).map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "d-block mb-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "radio",
                                                                    name: `q-${q.id}`,
                                                                    checked: answers[q.id] === opt.id,
                                                                    onChange: ()=>onSingle(q, opt.id)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/tests/[id]/take/page.tsx",
                                                                    lineNumber: 305,
                                                                    columnNumber: 23
                                                                }, this),
                                                                " ",
                                                                opt.text
                                                            ]
                                                        }, opt.id, true, {
                                                            fileName: "[project]/app/tests/[id]/take/page.tsx",
                                                            lineNumber: 304,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/tests/[id]/take/page.tsx",
                                                    lineNumber: 302,
                                                    columnNumber: 17
                                                }, this) : q.type === "multi_choice" || q.type === "multi" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: (q._displayOptions || q.options || q.data?.options || []).map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "d-block mb-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "checkbox",
                                                                    checked: (answers[q.id] || []).includes(opt.id),
                                                                    onChange: ()=>onMulti(q, opt.id)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/tests/[id]/take/page.tsx",
                                                                    lineNumber: 313,
                                                                    columnNumber: 23
                                                                }, this),
                                                                " ",
                                                                opt.text
                                                            ]
                                                        }, opt.id, true, {
                                                            fileName: "[project]/app/tests/[id]/take/page.tsx",
                                                            lineNumber: 312,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/tests/[id]/take/page.tsx",
                                                    lineNumber: 310,
                                                    columnNumber: 17
                                                }, this) : q.type === "sequence" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "list-group",
                                                        children: (q._displayOptions || q.options || q.data?.options || []).map((it, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "list-group-item bg-transparent border-0 d-flex align-items-center gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex-fill",
                                                                        children: it.text
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/tests/[id]/take/page.tsx",
                                                                        lineNumber: 322,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-50",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            className: "form-control bg-white",
                                                                            type: "number",
                                                                            min: 1,
                                                                            max: (q._displayOptions || q.options || q.data?.options || []).length,
                                                                            value: answers[q.id] && answers[q.id][it.id] || "",
                                                                            onChange: (e)=>onSequenceChange(q, it.id, e.target.value === "" ? "" : Number(e.target.value)),
                                                                            placeholder: "№ в послідовності"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/tests/[id]/take/page.tsx",
                                                                            lineNumber: 324,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/tests/[id]/take/page.tsx",
                                                                        lineNumber: 323,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, it.id, true, {
                                                                fileName: "[project]/app/tests/[id]/take/page.tsx",
                                                                lineNumber: 321,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/tests/[id]/take/page.tsx",
                                                        lineNumber: 319,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/tests/[id]/take/page.tsx",
                                                    lineNumber: 318,
                                                    columnNumber: 17
                                                }, this) : q.type === "matching" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "list-group",
                                                    children: (q._displayLeft || []).map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "list-group-item bg-transparent border-0 d-flex align-items-center gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-fill",
                                                                    children: l.text
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/tests/[id]/take/page.tsx",
                                                                    lineNumber: 342,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-50",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        className: "form-select",
                                                                        value: answers[q.id] && (answers[q.id][l.pairId] ?? ""),
                                                                        onChange: (e)=>onMatchSelect(q, l.pairId, e.target.value),
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "",
                                                                                children: "-- Виберіть відповідність --"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/tests/[id]/take/page.tsx",
                                                                                lineNumber: 349,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            (q._displayRight || []).map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: r.pairId,
                                                                                    children: r.text
                                                                                }, r.pairId, false, {
                                                                                    fileName: "[project]/app/tests/[id]/take/page.tsx",
                                                                                    lineNumber: 351,
                                                                                    columnNumber: 33
                                                                                }, this))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/tests/[id]/take/page.tsx",
                                                                        lineNumber: 344,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/tests/[id]/take/page.tsx",
                                                                    lineNumber: 343,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, l.pairId, true, {
                                                            fileName: "[project]/app/tests/[id]/take/page.tsx",
                                                            lineNumber: 341,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/tests/[id]/take/page.tsx",
                                                    lineNumber: 339,
                                                    columnNumber: 21
                                                }, this) : q.type === "open" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        className: "form-control",
                                                        rows: 3,
                                                        value: answers[q.id] || "",
                                                        onChange: (e)=>onOpen(q, e.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/tests/[id]/take/page.tsx",
                                                        lineNumber: 360,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/tests/[id]/take/page.tsx",
                                                    lineNumber: 359,
                                                    columnNumber: 17
                                                }, this) : null
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/tests/[id]/take/page.tsx",
                                            lineNumber: 282,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, q.id, true, {
                                    fileName: "[project]/app/tests/[id]/take/page.tsx",
                                    lineNumber: 280,
                                    columnNumber: 11
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "d-flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn btn-primary",
                                        onClick: submitLocal,
                                        disabled: submitting,
                                        children: submitting ? "Надсилаю..." : "Завершити та надіслати"
                                    }, void 0, false, {
                                        fileName: "[project]/app/tests/[id]/take/page.tsx",
                                        lineNumber: 368,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/tests",
                                        className: "btn btn-outline-secondary",
                                        children: "Відмінити"
                                    }, void 0, false, {
                                        fileName: "[project]/app/tests/[id]/take/page.tsx",
                                        lineNumber: 369,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/tests/[id]/take/page.tsx",
                                lineNumber: 367,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/tests/[id]/take/page.tsx",
                        lineNumber: 278,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/tests/[id]/take/page.tsx",
                lineNumber: 267,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Lightbox, {
                url: lightboxUrl,
                onClose: ()=>setLightboxUrl(null)
            }, void 0, false, {
                fileName: "[project]/app/tests/[id]/take/page.tsx",
                lineNumber: 373,
                columnNumber: 5
            }, this),
            resultPreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: ()=>setResultPreview(null),
                style: {
                    position: "fixed",
                    inset: 0,
                    background: "rgba(0,0,0,0.6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 10000
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "menu-box p-4",
                    style: {
                        maxWidth: 800,
                        width: "95%"
                    },
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            children: "Результат"
                        }, void 0, false, {
                            fileName: "[project]/app/tests/[id]/take/page.tsx",
                            lineNumber: 380,
                            columnNumber: 11
                        }, this),
                        typeof resultPreview.totalScore !== 'undefined' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Бали:"
                                }, void 0, false, {
                                    fileName: "[project]/app/tests/[id]/take/page.tsx",
                                    lineNumber: 382,
                                    columnNumber: 35
                                }, this),
                                " ",
                                resultPreview.totalScore,
                                " / ",
                                resultPreview.totalPossible
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/tests/[id]/take/page.tsx",
                            lineNumber: 382,
                            columnNumber: 13
                        }, this) : null,
                        Array.isArray(resultPreview.perQuestion) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                    children: "Деталі питань"
                                }, void 0, false, {
                                    fileName: "[project]/app/tests/[id]/take/page.tsx",
                                    lineNumber: 386,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "list-group",
                                    children: resultPreview.perQuestion.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "list-group-item",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "d-flex justify-content-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            i + 1,
                                                            ". ",
                                                            p.type
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/tests/[id]/take/page.tsx",
                                                        lineNumber: 391,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            p.score,
                                                            " / ",
                                                            p.points
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/tests/[id]/take/page.tsx",
                                                        lineNumber: 392,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/tests/[id]/take/page.tsx",
                                                lineNumber: 390,
                                                columnNumber: 21
                                            }, this)
                                        }, p.id || i, false, {
                                            fileName: "[project]/app/tests/[id]/take/page.tsx",
                                            lineNumber: 389,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/tests/[id]/take/page.tsx",
                                    lineNumber: 387,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/tests/[id]/take/page.tsx",
                            lineNumber: 385,
                            columnNumber: 13
                        }, this) : !resultPreview.totalScore ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-muted",
                            children: "Результати не доступні."
                        }, void 0, false, {
                            fileName: "[project]/app/tests/[id]/take/page.tsx",
                            lineNumber: 399,
                            columnNumber: 41
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 d-flex justify-content-end",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn btn-primary",
                                onClick: ()=>setResultPreview(null),
                                children: "Закрити"
                            }, void 0, false, {
                                fileName: "[project]/app/tests/[id]/take/page.tsx",
                                lineNumber: 402,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/tests/[id]/take/page.tsx",
                            lineNumber: 401,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/tests/[id]/take/page.tsx",
                    lineNumber: 379,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/tests/[id]/take/page.tsx",
                lineNumber: 375,
                columnNumber: 7
            }, this) : null
        ]
    }, void 0, true);
}
_s(TakePageClient, "ZcvJrs9w4jy7DpCURiH1BOXL46o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = TakePageClient;
// Lightbox overlay rendered at root of module so it's inside same component render
function Lightbox({ url, onClose }) {
    if (!url) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: onClose,
        style: {
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.75)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            padding: 20
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: url,
            alt: "preview",
            style: {
                maxWidth: "90vw",
                maxHeight: "90vh",
                borderRadius: 8
            }
        }, void 0, false, {
            fileName: "[project]/app/tests/[id]/take/page.tsx",
            lineNumber: 428,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/tests/[id]/take/page.tsx",
        lineNumber: 415,
        columnNumber: 5
    }, this);
}
_c1 = Lightbox;
var _c, _c1;
__turbopack_context__.k.register(_c, "TakePageClient");
__turbopack_context__.k.register(_c1, "Lightbox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_tests_%5Bid%5D_take_page_tsx_4d15d079._.js.map