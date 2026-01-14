module.exports = [
"[project]/app/tests/[id]/take/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TakePageClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function TakePageClient() {
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const id = params?.id;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [test, setTest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [lightboxUrl, setLightboxUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [started, setStarted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [remainingSeconds, setRemainingSeconds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const timerRef = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : {
        current: null
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
                    const mapped = Array.isArray(t.questions) ? t.questions.map((q)=>{
                        const copy = {
                            ...q
                        };
                        const opts = q.options || q.data?.options || [];
                        const pairs = q.pairs || q.data?.pairs || [];
                        if (q.type === "single_choice" || q.type === "single" || q.type === "multi_choice" || q.type === "multi" || q.type === "sequence") {
                            copy._displayOptions = shuffleArray(opts.map((o)=>({
                                    ...o
                                })));
                        }
                        if (q.type === "matching") {
                            // For matching, shuffle left and right sides independently so taker must match.
                            // Use a robust pairId (p.id || p._id || index) to work with varying DB shapes.
                            const lefts = pairs.map((p, i)=>({
                                    pairId: p.id ?? p._id ?? `p-${i}`,
                                    text: p.left
                                }));
                            const rights = pairs.map((p, i)=>({
                                    pairId: p.id ?? p._id ?? `p-${i}`,
                                    text: p.right
                                }));
                            copy._displayLeft = shuffleArray(lefts);
                            copy._displayRight = shuffleArray(rights);
                        }
                        return copy;
                    }) : [];
                    setTest({
                        ...t,
                        questions: mapped,
                        __inWindow: inWindow
                    });
                }
            } catch (err) {
                console.warn(err);
            } finally{
                if (mounted) setLoading(false);
            }
        }
        load();
        return ()=>{
            mounted = false;
        };
    }, [
        id
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!test) return;
        try {
            const key = `test_start_${id}`;
            if (("TURBOPACK compile-time value", "undefined") !== "undefined" && localStorage.getItem(key)) //TURBOPACK unreachable
            ;
        } catch (e) {
        // ignore
        }
    }, [
        test
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!lightboxUrl) return;
        function onKey(e) {
            if (e.key === "Escape") setLightboxUrl(null);
        }
        window.addEventListener("keydown", onKey);
        return ()=>window.removeEventListener("keydown", onKey);
    }, [
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
        console.log("User answers:", answers);
        try {
            if (timerRef.current) clearInterval(timerRef.current);
        } catch  {}
        alert("Відповіді збережено локально (консоль).");
        router.push("/tests");
    }
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container min-vh-100",
        children: "Завантаження..."
    }, void 0, false, {
        fileName: "[project]/app/tests/[id]/take/page.tsx",
        lineNumber: 171,
        columnNumber: 23
    }, this);
    if (!test) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container min-vh-100",
        children: "Тест не знайдено або недоступний."
    }, void 0, false, {
        fileName: "[project]/app/tests/[id]/take/page.tsx",
        lineNumber: 172,
        columnNumber: 21
    }, this);
    // if test is outside allowed window, show message
    if (test.__inWindow === false) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container d-flex flex-column align-items-center min-vh-100",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "mb-3",
                    children: test.title
                }, void 0, false, {
                    fileName: "[project]/app/tests/[id]/take/page.tsx",
                    lineNumber: 177,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-muted mb-3",
                    children: [
                        "Автор: ",
                        test.authorId?.username || "(невідомо)"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/tests/[id]/take/page.tsx",
                    lineNumber: 178,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "menu-box w-100",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "alert alert-warning",
                            children: "Тест наразі недоступний за часовим вікном."
                        }, void 0, false, {
                            fileName: "[project]/app/tests/[id]/take/page.tsx",
                            lineNumber: 180,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/tests",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn btn-outline-secondary",
                                    children: "Назад до списку"
                                }, void 0, false, {
                                    fileName: "[project]/app/tests/[id]/take/page.tsx",
                                    lineNumber: 182,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/tests/[id]/take/page.tsx",
                                lineNumber: 182,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/tests/[id]/take/page.tsx",
                            lineNumber: 181,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/tests/[id]/take/page.tsx",
                    lineNumber: 179,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/tests/[id]/take/page.tsx",
            lineNumber: 176,
            columnNumber: 7
        }, this);
    }
    function formatTime(secs) {
        if (secs === null) return "";
        const m = Math.floor(secs / 60);
        const s = secs % 60;
        return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container d-flex flex-column align-items-center min-vh-100",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mb-3",
                        children: test.title
                    }, void 0, false, {
                        fileName: "[project]/app/tests/[id]/take/page.tsx",
                        lineNumber: 199,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-muted mb-3",
                        children: [
                            "Автор: ",
                            test.authorId?.username || "(невідомо)"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/tests/[id]/take/page.tsx",
                        lineNumber: 200,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-100 mb-2 d-flex justify-content-between align-items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: started ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "badge bg-danger",
                                    children: [
                                        "Час: ",
                                        formatTime(remainingSeconds)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/tests/[id]/take/page.tsx",
                                    lineNumber: 204,
                                    columnNumber: 13
                                }, this) : null
                            }, void 0, false, {
                                fileName: "[project]/app/tests/[id]/take/page.tsx",
                                lineNumber: 202,
                                columnNumber: 9
                            }, this),
                            test.timed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-muted",
                                children: [
                                    "Час на тест: ",
                                    test.timeLimitMinutes,
                                    " хв"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/tests/[id]/take/page.tsx",
                                lineNumber: 207,
                                columnNumber: 23
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/tests/[id]/take/page.tsx",
                        lineNumber: 201,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "menu-box w-100 questions-section",
                        children: [
                            Array.isArray(test.questions) && test.questions.map((q, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "fw-semibold",
                                            children: [
                                                idx + 1,
                                                ". ",
                                                q.text
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/tests/[id]/take/page.tsx",
                                            lineNumber: 213,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2",
                                            children: [
                                                q.imageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                                                        lineNumber: 217,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/tests/[id]/take/page.tsx",
                                                    lineNumber: 216,
                                                    columnNumber: 19
                                                }, this) : null,
                                                q.type === "single_choice" || q.type === "single" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: (q._displayOptions || q.options || q.data?.options || []).map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "d-block mb-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "radio",
                                                                    name: `q-${q.id}`,
                                                                    checked: answers[q.id] === opt.id,
                                                                    onChange: ()=>onSingle(q, opt.id)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/tests/[id]/take/page.tsx",
                                                                    lineNumber: 237,
                                                                    columnNumber: 23
                                                                }, this),
                                                                " ",
                                                                opt.text
                                                            ]
                                                        }, opt.id, true, {
                                                            fileName: "[project]/app/tests/[id]/take/page.tsx",
                                                            lineNumber: 236,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/tests/[id]/take/page.tsx",
                                                    lineNumber: 234,
                                                    columnNumber: 17
                                                }, this) : q.type === "multi_choice" || q.type === "multi" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: (q._displayOptions || q.options || q.data?.options || []).map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "d-block mb-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "checkbox",
                                                                    checked: (answers[q.id] || []).includes(opt.id),
                                                                    onChange: ()=>onMulti(q, opt.id)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/tests/[id]/take/page.tsx",
                                                                    lineNumber: 245,
                                                                    columnNumber: 23
                                                                }, this),
                                                                " ",
                                                                opt.text
                                                            ]
                                                        }, opt.id, true, {
                                                            fileName: "[project]/app/tests/[id]/take/page.tsx",
                                                            lineNumber: 244,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/tests/[id]/take/page.tsx",
                                                    lineNumber: 242,
                                                    columnNumber: 17
                                                }, this) : q.type === "sequence" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "list-group",
                                                        children: (q._displayOptions || q.options || q.data?.options || []).map((it, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "list-group-item bg-transparent border-0 d-flex align-items-center gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex-fill",
                                                                        children: it.text
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/tests/[id]/take/page.tsx",
                                                                        lineNumber: 254,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-50",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            className: "form-control bg-white",
                                                                            type: "number",
                                                                            min: 1,
                                                                            max: (q._displayOptions || q.options || q.data?.options || []).length,
                                                                            value: answers[q.id] && answers[q.id][it.id] || "",
                                                                            onChange: (e)=>onSequenceChange(q, it.id, e.target.value === "" ? "" : Number(e.target.value)),
                                                                            placeholder: "№ в послідовності"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/tests/[id]/take/page.tsx",
                                                                            lineNumber: 256,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/tests/[id]/take/page.tsx",
                                                                        lineNumber: 255,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, it.id, true, {
                                                                fileName: "[project]/app/tests/[id]/take/page.tsx",
                                                                lineNumber: 253,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/tests/[id]/take/page.tsx",
                                                        lineNumber: 251,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/tests/[id]/take/page.tsx",
                                                    lineNumber: 250,
                                                    columnNumber: 17
                                                }, this) : q.type === "matching" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "list-group",
                                                    children: (q._displayLeft || []).map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "list-group-item bg-transparent border-0 d-flex align-items-center gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-fill",
                                                                    children: l.text
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/tests/[id]/take/page.tsx",
                                                                    lineNumber: 274,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-50",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        className: "form-select",
                                                                        value: answers[q.id] && (answers[q.id][l.pairId] ?? ""),
                                                                        onChange: (e)=>onMatchSelect(q, l.pairId, e.target.value),
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "",
                                                                                children: "-- Виберіть відповідність --"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/tests/[id]/take/page.tsx",
                                                                                lineNumber: 281,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            (q._displayRight || []).map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: r.pairId,
                                                                                    children: r.text
                                                                                }, r.pairId, false, {
                                                                                    fileName: "[project]/app/tests/[id]/take/page.tsx",
                                                                                    lineNumber: 283,
                                                                                    columnNumber: 33
                                                                                }, this))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/tests/[id]/take/page.tsx",
                                                                        lineNumber: 276,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/tests/[id]/take/page.tsx",
                                                                    lineNumber: 275,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, l.pairId, true, {
                                                            fileName: "[project]/app/tests/[id]/take/page.tsx",
                                                            lineNumber: 273,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/tests/[id]/take/page.tsx",
                                                    lineNumber: 271,
                                                    columnNumber: 21
                                                }, this) : q.type === "open" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        className: "form-control",
                                                        rows: 3,
                                                        value: answers[q.id] || "",
                                                        onChange: (e)=>onOpen(q, e.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/tests/[id]/take/page.tsx",
                                                        lineNumber: 292,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/tests/[id]/take/page.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 17
                                                }, this) : null
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/tests/[id]/take/page.tsx",
                                            lineNumber: 214,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, q.id, true, {
                                    fileName: "[project]/app/tests/[id]/take/page.tsx",
                                    lineNumber: 212,
                                    columnNumber: 11
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "d-flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn btn-primary",
                                        onClick: submitLocal,
                                        children: "Завершити та надіслати"
                                    }, void 0, false, {
                                        fileName: "[project]/app/tests/[id]/take/page.tsx",
                                        lineNumber: 300,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/tests",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn btn-outline-secondary",
                                            children: "Відмінити"
                                        }, void 0, false, {
                                            fileName: "[project]/app/tests/[id]/take/page.tsx",
                                            lineNumber: 301,
                                            columnNumber: 31
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/tests/[id]/take/page.tsx",
                                        lineNumber: 301,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/tests/[id]/take/page.tsx",
                                lineNumber: 299,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/tests/[id]/take/page.tsx",
                        lineNumber: 210,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/tests/[id]/take/page.tsx",
                lineNumber: 198,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Lightbox, {
                url: lightboxUrl,
                onClose: ()=>setLightboxUrl(null)
            }, void 0, false, {
                fileName: "[project]/app/tests/[id]/take/page.tsx",
                lineNumber: 305,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true);
}
// Lightbox overlay rendered at root of module so it's inside same component render
function Lightbox({ url, onClose }) {
    if (!url) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: url,
            alt: "preview",
            style: {
                maxWidth: "90vw",
                maxHeight: "90vh",
                borderRadius: 8
            }
        }, void 0, false, {
            fileName: "[project]/app/tests/[id]/take/page.tsx",
            lineNumber: 327,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/tests/[id]/take/page.tsx",
        lineNumber: 314,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=app_tests_%5Bid%5D_take_page_tsx_ccd2fea3._.js.map