(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/editor/new/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NewTestPage
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
function NewTestPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [newQuestionType, setNewQuestionType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("single");
    function addQuestion(type) {
        const qtype = type || newQuestionType;
        setQuestions((s)=>[
                ...s,
                {
                    id: Date.now(),
                    type: qtype,
                    text: "",
                    data: {}
                }
            ]);
    }
    function updateQuestion(id, text) {
        setQuestions((s)=>s.map((q)=>q.id === id ? {
                    ...q,
                    text
                } : q));
    }
    function updateQuestionType(id, type) {
        setQuestions((s)=>s.map((q)=>q.id === id ? {
                    ...q,
                    type,
                    data: {}
                } : q));
    }
    // Options management for single/multi choice
    function ensureOptions(id) {
        setQuestions((s)=>s.map((q)=>{
                if (q.id !== id) return q;
                if (!q.data) q.data = {};
                if (!Array.isArray(q.data.options)) q.data.options = [];
                return {
                    ...q
                };
            }));
    }
    function addOptionToQuestion(id) {
        const option = {
            id: Date.now(),
            text: "",
            correct: false
        };
        setQuestions((s)=>s.map((q)=>q.id === id ? {
                    ...q,
                    data: {
                        ...q.data || {},
                        options: [
                            ...q.data && q.data.options || [],
                            option
                        ]
                    }
                } : q));
    }
    function updateOptionText(id, optionId, text) {
        setQuestions((s)=>s.map((q)=>{
                if (q.id !== id) return q;
                const opts = q.data && q.data.options || [];
                return {
                    ...q,
                    data: {
                        ...q.data || {},
                        options: opts.map((o)=>o.id === optionId ? {
                                ...o,
                                text
                            } : o)
                    }
                };
            }));
    }
    function removeOption(id, optionId) {
        setQuestions((s)=>s.map((q)=>{
                if (q.id !== id) return q;
                const opts = q.data && q.data.options || [];
                return {
                    ...q,
                    data: {
                        ...q.data || {},
                        options: opts.filter((o)=>o.id !== optionId)
                    }
                };
            }));
    }
    function toggleOptionCorrect(id, optionId) {
        setQuestions((s)=>s.map((q)=>{
                if (q.id !== id) return q;
                const opts = q.data && q.data.options || [];
                if (q.type === "single") {
                    return {
                        ...q,
                        data: {
                            ...q.data || {},
                            options: opts.map((o)=>({
                                    ...o,
                                    correct: o.id === optionId
                                }))
                        }
                    };
                }
                // multi
                return {
                    ...q,
                    data: {
                        ...q.data || {},
                        options: opts.map((o)=>o.id === optionId ? {
                                ...o,
                                correct: !o.correct
                            } : o)
                    }
                };
            }));
    }
    // Sequence (ordering) items management
    function addSequenceItem(id) {
        setQuestions((s)=>s.map((q)=>{
                if (q.id !== id) return q;
                const opts = q.data && q.data.options || [];
                const maxOrder = opts.reduce((m, it)=>Math.max(m, Number(it.order || 0)), 0);
                const item = {
                    id: Date.now(),
                    text: "",
                    order: maxOrder + 1
                };
                return {
                    ...q,
                    data: {
                        ...q.data || {},
                        options: [
                            ...opts,
                            item
                        ]
                    }
                };
            }));
    }
    function updateSequenceItemText(id, itemId, text) {
        setQuestions((s)=>s.map((q)=>{
                if (q.id !== id) return q;
                const opts = q.data && q.data.options || [];
                return {
                    ...q,
                    data: {
                        ...q.data || {},
                        options: opts.map((o)=>o.id === itemId ? {
                                ...o,
                                text
                            } : o)
                    }
                };
            }));
    }
    function updateSequenceItemOrder(id, itemId, order) {
        setQuestions((s)=>s.map((q)=>{
                if (q.id !== id) return q;
                const opts = q.data && q.data.options || [];
                return {
                    ...q,
                    data: {
                        ...q.data || {},
                        options: opts.map((o)=>o.id === itemId ? {
                                ...o,
                                order
                            } : o)
                    }
                };
            }));
    }
    function removeSequenceItem(id, itemId) {
        setQuestions((s)=>s.map((q)=>{
                if (q.id !== id) return q;
                const opts = q.data && q.data.options || [];
                return {
                    ...q,
                    data: {
                        ...q.data || {},
                        options: opts.filter((o)=>o.id !== itemId)
                    }
                };
            }));
    }
    // Matching (pairs) management
    function addPairToQuestion(id) {
        const pair = {
            id: Date.now(),
            left: "",
            right: ""
        };
        setQuestions((s)=>s.map((q)=>q.id === id ? {
                    ...q,
                    data: {
                        ...q.data || {},
                        pairs: [
                            ...q.data && q.data.pairs || [],
                            pair
                        ]
                    }
                } : q));
    }
    function updatePairText(id, pairId, side, value) {
        setQuestions((s)=>s.map((q)=>{
                if (q.id !== id) return q;
                const pairs = q.data && q.data.pairs || [];
                return {
                    ...q,
                    data: {
                        ...q.data || {},
                        pairs: pairs.map((p)=>p.id === pairId ? {
                                ...p,
                                [side]: value
                            } : p)
                    }
                };
            }));
    }
    function removePairFromQuestion(id, pairId) {
        setQuestions((s)=>s.map((q)=>{
                if (q.id !== id) return q;
                const pairs = q.data && q.data.pairs || [];
                return {
                    ...q,
                    data: {
                        ...q.data || {},
                        pairs: pairs.filter((p)=>p.id !== pairId)
                    }
                };
            }));
    }
    // Open answer expected value
    function updateOpenAnswer(id, answer) {
        setQuestions((s)=>s.map((q)=>q.id === id ? {
                    ...q,
                    data: {
                        ...q.data || {},
                        answer
                    }
                } : q));
    }
    function removeQuestion(id) {
        setQuestions((s)=>s.filter((q)=>q.id !== id));
    }
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [visibility, setVisibility] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("public");
    const [storeResponses, setStoreResponses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [ownResultView, setOwnResultView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("full");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [questions, setQuestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NewTestPage.useEffect": ()=>{
            try {
                document.title = "TestHub | Новий тест";
            } catch  {}
        }
    }["NewTestPage.useEffect"], []);
    async function onSubmit(e) {
        e.preventDefault();
        setError(null);
        if (!title) {
            setError("Вкажіть назву тесту");
            return;
        }
        setLoading(true);
        try {
            // Змінити URL /api/tests на реальний API створення тесту
            const res = await fetch("/api/tests", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({
                    title,
                    description,
                    visibility,
                    storeResponses,
                    ownResultView,
                    questions
                })
            });
            if (!res.ok) {
                const txt = await res.text();
                throw new Error(txt || `HTTP ${res.status}`);
            }
            // після успіху — повернутись до /editor або на сторінку тесту
            router.push("/editor");
        } catch (err) {
            setError(err?.message || "Помилка при створенні тесту");
            setLoading(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container d-flex flex-column align-items-center justify-content-center min-vh-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "mb-4 text-center",
                children: "Новий тест"
            }, void 0, false, {
                fileName: "[project]/app/editor/new/page.tsx",
                lineNumber: 215,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: "menu-box p-4",
                onSubmit: onSubmit,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "form-label",
                                children: "Назва"
                            }, void 0, false, {
                                fileName: "[project]/app/editor/new/page.tsx",
                                lineNumber: 218,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "form-control",
                                value: title,
                                onChange: (e)=>setTitle(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/app/editor/new/page.tsx",
                                lineNumber: 219,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/editor/new/page.tsx",
                        lineNumber: 217,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "form-label",
                                children: "Опис"
                            }, void 0, false, {
                                fileName: "[project]/app/editor/new/page.tsx",
                                lineNumber: 227,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                className: "form-control",
                                rows: 5,
                                value: description,
                                onChange: (e)=>setDescription(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/app/editor/new/page.tsx",
                                lineNumber: 228,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/editor/new/page.tsx",
                        lineNumber: 226,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "form-label d-block",
                                children: "Видимість"
                            }, void 0, false, {
                                fileName: "[project]/app/editor/new/page.tsx",
                                lineNumber: 237,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "btn-group",
                                role: "group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "radio",
                                        className: "btn-check",
                                        name: "visibility",
                                        id: "public",
                                        autoComplete: "off",
                                        checked: visibility === "public",
                                        onChange: ()=>setVisibility("public")
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/new/page.tsx",
                                        lineNumber: 239,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "btn btn-outline-primary",
                                        htmlFor: "public",
                                        children: "Публічний"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/new/page.tsx",
                                        lineNumber: 248,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "radio",
                                        className: "btn-check",
                                        name: "visibility",
                                        id: "private",
                                        autoComplete: "off",
                                        checked: visibility === "private",
                                        onChange: ()=>setVisibility("private")
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/new/page.tsx",
                                        lineNumber: 252,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "btn btn-outline-primary",
                                        htmlFor: "private",
                                        children: "Приватний"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/new/page.tsx",
                                        lineNumber: 261,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editor/new/page.tsx",
                                lineNumber: 238,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/editor/new/page.tsx",
                        lineNumber: 236,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "form-label d-block",
                                children: "Зберігати відповіді та результати користувачів"
                            }, void 0, false, {
                                fileName: "[project]/app/editor/new/page.tsx",
                                lineNumber: 269,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "btn-group",
                                role: "group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "radio",
                                        className: "btn-check",
                                        name: "storeResponses",
                                        id: "storeYes",
                                        autoComplete: "off",
                                        checked: storeResponses === true,
                                        onChange: ()=>setStoreResponses(true)
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/new/page.tsx",
                                        lineNumber: 271,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "btn btn-outline-primary",
                                        htmlFor: "storeYes",
                                        children: "Так"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/new/page.tsx",
                                        lineNumber: 280,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "radio",
                                        className: "btn-check",
                                        name: "storeResponses",
                                        id: "storeNo",
                                        autoComplete: "off",
                                        checked: storeResponses === false,
                                        onChange: ()=>setStoreResponses(false)
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/new/page.tsx",
                                        lineNumber: 284,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "btn btn-outline-primary",
                                        htmlFor: "storeNo",
                                        children: "Ні"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/new/page.tsx",
                                        lineNumber: 293,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editor/new/page.tsx",
                                lineNumber: 270,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "form-text mt-1",
                                children: "Якщо так — зберігатимуться індивідуальні відповіді та результати (ви зможете бачити список користувачів, які пройшли тест)."
                            }, void 0, false, {
                                fileName: "[project]/app/editor/new/page.tsx",
                                lineNumber: 297,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/editor/new/page.tsx",
                        lineNumber: 268,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "form-label d-block",
                                children: "Що бачить користувач після проходження"
                            }, void 0, false, {
                                fileName: "[project]/app/editor/new/page.tsx",
                                lineNumber: 304,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "btn-group",
                                role: "group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "radio",
                                        className: "btn-check",
                                        name: "ownResultView",
                                        id: "ownFull",
                                        autoComplete: "off",
                                        checked: ownResultView === "full",
                                        onChange: ()=>setOwnResultView("full")
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/new/page.tsx",
                                        lineNumber: 306,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "btn btn-outline-primary",
                                        htmlFor: "ownFull",
                                        children: "Повні результати (питання + відповіді + бали)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/new/page.tsx",
                                        lineNumber: 315,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "radio",
                                        className: "btn-check",
                                        name: "ownResultView",
                                        id: "ownScore",
                                        autoComplete: "off",
                                        checked: ownResultView === "score_only",
                                        onChange: ()=>setOwnResultView("score_only")
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/new/page.tsx",
                                        lineNumber: 319,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "btn btn-outline-primary",
                                        htmlFor: "ownScore",
                                        children: "Тільки бали"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/new/page.tsx",
                                        lineNumber: 328,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "radio",
                                        className: "btn-check",
                                        name: "ownResultView",
                                        id: "ownNothing",
                                        autoComplete: "off",
                                        checked: ownResultView === "nothing",
                                        onChange: ()=>setOwnResultView("nothing")
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/new/page.tsx",
                                        lineNumber: 332,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "btn btn-outline-primary",
                                        htmlFor: "ownNothing",
                                        children: "Нічого не показувати"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/new/page.tsx",
                                        lineNumber: 341,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editor/new/page.tsx",
                                lineNumber: 305,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "form-text mt-1",
                                children: "Ця опція визначає, що бачить сам користувач після завершення тесту незалежно від того, чи зберігаються відповіді."
                            }, void 0, false, {
                                fileName: "[project]/app/editor/new/page.tsx",
                                lineNumber: 345,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/editor/new/page.tsx",
                        lineNumber: 303,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3 questions-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "mb-2 text-center",
                                children: "Питання"
                            }, void 0, false, {
                                fileName: "[project]/app/editor/new/page.tsx",
                                lineNumber: 351,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-2 d-flex justify-content-center align-items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "form-select w-auto",
                                        value: newQuestionType,
                                        onChange: (e)=>setNewQuestionType(e.target.value),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "single",
                                                children: "Одиночний вибір"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editor/new/page.tsx",
                                                lineNumber: 358,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "multi",
                                                children: "Множинний вибір"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editor/new/page.tsx",
                                                lineNumber: 359,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "sequence",
                                                children: "Порядок (послідовність)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editor/new/page.tsx",
                                                lineNumber: 360,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "open",
                                                children: "Відкрита відповідь"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editor/new/page.tsx",
                                                lineNumber: 361,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "matching",
                                                children: "Відповідності"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editor/new/page.tsx",
                                                lineNumber: 362,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/editor/new/page.tsx",
                                        lineNumber: 353,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "btn btn-secondary",
                                        onClick: ()=>addQuestion(),
                                        children: "Додати питання"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/new/page.tsx",
                                        lineNumber: 364,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editor/new/page.tsx",
                                lineNumber: 352,
                                columnNumber: 11
                            }, this),
                            questions.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "muted mb-2",
                                children: "Поки немає питань. Додайте перше питання."
                            }, void 0, false, {
                                fileName: "[project]/app/editor/new/page.tsx",
                                lineNumber: 369,
                                columnNumber: 13
                            }, this),
                            questions.map((q)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "d-flex justify-content-between align-items-center mb-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "form-label mb-0",
                                                    children: "Питання"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/editor/new/page.tsx",
                                                    lineNumber: 374,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "d-flex align-items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            className: "form-select form-select-sm",
                                                            style: {
                                                                width: 200
                                                            },
                                                            value: q.type,
                                                            onChange: (e)=>updateQuestionType(q.id, e.target.value),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "single",
                                                                    children: "Одиночний вибір"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/editor/new/page.tsx",
                                                                    lineNumber: 382,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "multi",
                                                                    children: "Множинний вибір"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/editor/new/page.tsx",
                                                                    lineNumber: 383,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "sequence",
                                                                    children: "Порядок"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/editor/new/page.tsx",
                                                                    lineNumber: 384,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "open",
                                                                    children: "Відкрита відповідь"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/editor/new/page.tsx",
                                                                    lineNumber: 385,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "matching",
                                                                    children: "Відповідності"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/editor/new/page.tsx",
                                                                    lineNumber: 386,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/editor/new/page.tsx",
                                                            lineNumber: 376,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "badge bg-secondary text-capitalize",
                                                            children: q.type
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/editor/new/page.tsx",
                                                            lineNumber: 388,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/editor/new/page.tsx",
                                                    lineNumber: 375,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/editor/new/page.tsx",
                                            lineNumber: 373,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            className: "form-control",
                                            rows: 3,
                                            value: q.text,
                                            onChange: (e)=>updateQuestion(q.id, e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/app/editor/new/page.tsx",
                                            lineNumber: 391,
                                            columnNumber: 15
                                        }, this),
                                        q.type === "open" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "form-label",
                                                    children: "Очікувана відповідь (опційно)"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/editor/new/page.tsx",
                                                    lineNumber: 399,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: "form-control",
                                                    value: q.data && q.data.answer || "",
                                                    onChange: (e)=>updateOpenAnswer(q.id, e.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/editor/new/page.tsx",
                                                    lineNumber: 400,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/editor/new/page.tsx",
                                            lineNumber: 398,
                                            columnNumber: 17
                                        }, this),
                                        (q.type === "single" || q.type === "multi") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "d-flex gap-2 align-items-center mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            className: "mb-0",
                                                            children: "Варіанти відповіді"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/editor/new/page.tsx",
                                                            lineNumber: 411,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            className: "btn btn-sm btn-outline-secondary",
                                                            onClick: ()=>{
                                                                ensureOptions(q.id);
                                                                addOptionToQuestion(q.id);
                                                            },
                                                            children: "Додати варіант"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/editor/new/page.tsx",
                                                            lineNumber: 412,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/editor/new/page.tsx",
                                                    lineNumber: 410,
                                                    columnNumber: 19
                                                }, this),
                                                (q.data && q.data.options || []).map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "d-flex gap-2 align-items-start mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    marginTop: 6
                                                                },
                                                                children: q.type === "single" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "radio",
                                                                    name: `correct-${q.id}`,
                                                                    checked: !!opt.correct,
                                                                    onChange: ()=>toggleOptionCorrect(q.id, opt.id)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/editor/new/page.tsx",
                                                                    lineNumber: 427,
                                                                    columnNumber: 27
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "checkbox",
                                                                    checked: !!opt.correct,
                                                                    onChange: ()=>toggleOptionCorrect(q.id, opt.id)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/editor/new/page.tsx",
                                                                    lineNumber: 434,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/editor/new/page.tsx",
                                                                lineNumber: 425,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                className: "form-control",
                                                                value: opt.text,
                                                                onChange: (e)=>updateOptionText(q.id, opt.id, e.target.value)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/editor/new/page.tsx",
                                                                lineNumber: 441,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                className: "btn btn-sm btn-outline-danger",
                                                                onClick: ()=>removeOption(q.id, opt.id),
                                                                children: "Видалити"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/editor/new/page.tsx",
                                                                lineNumber: 446,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, opt.id, true, {
                                                        fileName: "[project]/app/editor/new/page.tsx",
                                                        lineNumber: 424,
                                                        columnNumber: 21
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/editor/new/page.tsx",
                                            lineNumber: 409,
                                            columnNumber: 17
                                        }, this),
                                        q.type === "sequence" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "d-flex gap-2 align-items-center mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            className: "mb-0",
                                                            children: "Елементи (вкажіть порядок цифрами)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/editor/new/page.tsx",
                                                            lineNumber: 458,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            className: "btn btn-sm btn-outline-secondary",
                                                            onClick: ()=>addSequenceItem(q.id),
                                                            children: "Додати елемент"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/editor/new/page.tsx",
                                                            lineNumber: 459,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/editor/new/page.tsx",
                                                    lineNumber: 457,
                                                    columnNumber: 23
                                                }, this),
                                                (q.data && q.data.options || []).slice().sort((a, b)=>(Number(a.order) || 0) - (Number(b.order) || 0)).map((it)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "d-flex gap-2 align-items-start mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                min: 1,
                                                                value: it.order || 1,
                                                                className: "form-control",
                                                                style: {
                                                                    width: 90
                                                                },
                                                                onChange: (e)=>updateSequenceItemOrder(q.id, it.id, Number(e.target.value || 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/editor/new/page.tsx",
                                                                lineNumber: 472,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                className: "form-control",
                                                                value: it.text,
                                                                onChange: (e)=>updateSequenceItemText(q.id, it.id, e.target.value)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/editor/new/page.tsx",
                                                                lineNumber: 480,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                className: "btn btn-sm btn-outline-danger",
                                                                onClick: ()=>removeSequenceItem(q.id, it.id),
                                                                children: "Видалити"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/editor/new/page.tsx",
                                                                lineNumber: 485,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, it.id, true, {
                                                        fileName: "[project]/app/editor/new/page.tsx",
                                                        lineNumber: 471,
                                                        columnNumber: 27
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/editor/new/page.tsx",
                                            lineNumber: 456,
                                            columnNumber: 21
                                        }, this),
                                        q.type === "matching" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "d-flex gap-2 align-items-center mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            className: "mb-0",
                                                            children: "Пари відповідностей"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/editor/new/page.tsx",
                                                            lineNumber: 496,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            className: "btn btn-sm btn-outline-secondary",
                                                            onClick: ()=>addPairToQuestion(q.id),
                                                            children: "Додати пару"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/editor/new/page.tsx",
                                                            lineNumber: 497,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/editor/new/page.tsx",
                                                    lineNumber: 495,
                                                    columnNumber: 21
                                                }, this),
                                                (q.data && q.data.pairs || []).map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "d-flex gap-2 align-items-start mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                className: "form-control",
                                                                value: p.left,
                                                                onChange: (e)=>updatePairText(q.id, p.id, "left", e.target.value),
                                                                placeholder: "Ліва"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/editor/new/page.tsx",
                                                                lineNumber: 503,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "align-self-center",
                                                                children: "→"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/editor/new/page.tsx",
                                                                lineNumber: 509,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                className: "form-control",
                                                                value: p.right,
                                                                onChange: (e)=>updatePairText(q.id, p.id, "right", e.target.value),
                                                                placeholder: "Права"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/editor/new/page.tsx",
                                                                lineNumber: 510,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                className: "btn btn-sm btn-outline-danger",
                                                                onClick: ()=>removePairFromQuestion(q.id, p.id),
                                                                children: "Видалити"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/editor/new/page.tsx",
                                                                lineNumber: 516,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, p.id, true, {
                                                        fileName: "[project]/app/editor/new/page.tsx",
                                                        lineNumber: 502,
                                                        columnNumber: 23
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/editor/new/page.tsx",
                                            lineNumber: 494,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 d-flex gap-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "btn btn-outline-danger",
                                                onClick: ()=>removeQuestion(q.id),
                                                children: "Видалити питання"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editor/new/page.tsx",
                                                lineNumber: 524,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/editor/new/page.tsx",
                                            lineNumber: 523,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, q.id, true, {
                                    fileName: "[project]/app/editor/new/page.tsx",
                                    lineNumber: 372,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/editor/new/page.tsx",
                        lineNumber: 350,
                        columnNumber: 9
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-danger mb-3",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/app/editor/new/page.tsx",
                        lineNumber: 532,
                        columnNumber: 19
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "d-flex gap-2 actions-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn btn-primary",
                                type: "submit",
                                disabled: loading,
                                children: loading ? "Зберігаю..." : "Створити тест"
                            }, void 0, false, {
                                fileName: "[project]/app/editor/new/page.tsx",
                                lineNumber: 535,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/editor",
                                className: "btn btn-outline-secondary",
                                children: "Назад"
                            }, void 0, false, {
                                fileName: "[project]/app/editor/new/page.tsx",
                                lineNumber: 538,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/editor/new/page.tsx",
                        lineNumber: 534,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/editor/new/page.tsx",
                lineNumber: 216,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/editor/new/page.tsx",
        lineNumber: 214,
        columnNumber: 5
    }, this);
}
_s(NewTestPage, "o0HUkEsG2Se0LTaX/XObdu0IyM0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = NewTestPage;
var _c;
__turbopack_context__.k.register(_c, "NewTestPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_editor_new_page_tsx_f3c9e0d1._.js.map