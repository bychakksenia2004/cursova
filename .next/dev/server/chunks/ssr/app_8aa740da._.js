module.exports = [
"[project]/app/components/testcomponents/OpenAnswer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OpenAnswer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function OpenAnswer({ qid, invalidField, text = "", answers = [], onChange }) {
    function addAnswer() {
        const next = [
            ...answers,
            ""
        ];
        onChange && onChange({
            text,
            answers: next
        });
    }
    function updateAnswer(idx, value) {
        const next = answers.map((a, i)=>i === idx ? value : a);
        onChange && onChange({
            text,
            answers: next
        });
    }
    function removeAnswer(idx) {
        const next = answers.filter((_, i)=>i !== idx);
        onChange && onChange({
            text,
            answers: next
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        className: `form-control ${invalidField && invalidField.qid === (qid || 0) && invalidField.field === "text" ? "is-invalid" : ""}`,
                        rows: 2,
                        value: text,
                        "data-qid": qid,
                        "data-field": "text",
                        onChange: (e)=>onChange && onChange({
                                text: e.target.value,
                                answers
                            })
                    }, void 0, false, {
                        fileName: "[project]/app/components/testcomponents/OpenAnswer.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    invalidField && invalidField.qid === (qid || 0) && invalidField.field === "text" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "invalid-feedback d-block app-error",
                        children: invalidField.message
                    }, void 0, false, {
                        fileName: "[project]/app/components/testcomponents/OpenAnswer.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/testcomponents/OpenAnswer.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "d-flex justify-content-between align-items-center mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "form-label mb-0",
                                children: "Очікувана відповідь"
                            }, void 0, false, {
                                fileName: "[project]/app/components/testcomponents/OpenAnswer.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "btn btn-sm btn-outline-secondary",
                                onClick: addAnswer,
                                children: "Додати відповідь"
                            }, void 0, false, {
                                fileName: "[project]/app/components/testcomponents/OpenAnswer.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/testcomponents/OpenAnswer.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    answers.map((a, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "d-flex gap-2 align-items-start mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    className: `form-control ${invalidField && invalidField.qid === (qid || 0) && invalidField.field === "answer" && invalidField.idx === idx ? "is-invalid" : ""}`,
                                    "data-qid": qid,
                                    "data-field": "answer",
                                    "data-idx": idx,
                                    value: a,
                                    onChange: (e)=>updateAnswer(idx, e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/testcomponents/OpenAnswer.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "btn btn-sm btn-outline-danger",
                                    onClick: ()=>removeAnswer(idx),
                                    children: "Видалити"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/testcomponents/OpenAnswer.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this),
                                invalidField && invalidField.qid === (qid || 0) && invalidField.field === "answer" && invalidField.idx === idx && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "invalid-feedback d-block app-error",
                                    children: invalidField.message
                                }, void 0, false, {
                                    fileName: "[project]/app/components/testcomponents/OpenAnswer.tsx",
                                    lineNumber: 65,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, idx, true, {
                            fileName: "[project]/app/components/testcomponents/OpenAnswer.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/testcomponents/OpenAnswer.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/app/components/testcomponents/SingleChoice.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SingleChoice
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function SingleChoice({ q, qid, invalidField, ensureOptions, addOptionToQuestion, updateOptionText, removeOption, toggleOptionCorrect }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "d-flex gap-2 align-items-center mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        className: "mb-0",
                        children: "Варіанти відповіді"
                    }, void 0, false, {
                        fileName: "[project]/app/components/testcomponents/SingleChoice.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "btn btn-sm btn-outline-secondary",
                        onClick: ()=>{
                            ensureOptions(q.id);
                            addOptionToQuestion(q.id);
                        },
                        children: "Додати варіант"
                    }, void 0, false, {
                        fileName: "[project]/app/components/testcomponents/SingleChoice.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/testcomponents/SingleChoice.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            (q.data && q.data.options || []).map((opt, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "d-flex gap-2 align-items-start mb-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: 6
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "radio",
                                name: `correct-${q.id}`,
                                checked: !!opt.correct,
                                onChange: ()=>toggleOptionCorrect(q.id, opt.id)
                            }, void 0, false, {
                                fileName: "[project]/app/components/testcomponents/SingleChoice.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/testcomponents/SingleChoice.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            className: `form-control ${invalidField && invalidField.qid === (qid || q.id) && invalidField.field === "option" && (invalidField.idx === undefined || invalidField.idx === idx) ? "is-invalid" : ""}`,
                            "data-qid": qid || q.id,
                            "data-field": "option",
                            "data-idx": idx,
                            value: opt.text,
                            onChange: (e)=>updateOptionText(q.id, opt.id, e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/app/components/testcomponents/SingleChoice.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        invalidField && invalidField.qid === (qid || q.id) && invalidField.field === "option" && (invalidField.idx === undefined || invalidField.idx === idx) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "invalid-feedback d-block app-error",
                            children: invalidField.message
                        }, void 0, false, {
                            fileName: "[project]/app/components/testcomponents/SingleChoice.tsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "btn btn-sm btn-outline-danger",
                            onClick: ()=>removeOption(q.id, opt.id),
                            children: "Видалити"
                        }, void 0, false, {
                            fileName: "[project]/app/components/testcomponents/SingleChoice.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this)
                    ]
                }, opt.id, true, {
                    fileName: "[project]/app/components/testcomponents/SingleChoice.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/testcomponents/SingleChoice.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/components/testcomponents/MultiChoice.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MultiChoice
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function MultiChoice({ q, qid, invalidField, ensureOptions, addOptionToQuestion, updateOptionText, removeOption, toggleOptionCorrect }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "d-flex gap-2 align-items-center mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        className: "mb-0",
                        children: "Варіанти відповіді"
                    }, void 0, false, {
                        fileName: "[project]/app/components/testcomponents/MultiChoice.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "btn btn-sm btn-outline-secondary",
                        onClick: ()=>{
                            ensureOptions(q.id);
                            addOptionToQuestion(q.id);
                        },
                        children: "Додати варіант"
                    }, void 0, false, {
                        fileName: "[project]/app/components/testcomponents/MultiChoice.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/testcomponents/MultiChoice.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            (q.data && q.data.options || []).map((opt, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "d-flex gap-2 align-items-start mb-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: 6
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "checkbox",
                                checked: !!opt.correct,
                                onChange: ()=>toggleOptionCorrect(q.id, opt.id)
                            }, void 0, false, {
                                fileName: "[project]/app/components/testcomponents/MultiChoice.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/testcomponents/MultiChoice.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            className: `form-control ${invalidField && invalidField.qid === (qid || q.id) && invalidField.field === "option" && (invalidField.idx === undefined || invalidField.idx === idx) ? "is-invalid" : ""}`,
                            "data-qid": qid || q.id,
                            "data-field": "option",
                            "data-idx": idx,
                            value: opt.text,
                            onChange: (e)=>updateOptionText(q.id, opt.id, e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/app/components/testcomponents/MultiChoice.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        invalidField && invalidField.qid === (qid || q.id) && invalidField.field === "option" && (invalidField.idx === undefined || invalidField.idx === idx) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "invalid-feedback d-block app-error",
                            children: invalidField.message
                        }, void 0, false, {
                            fileName: "[project]/app/components/testcomponents/MultiChoice.tsx",
                            lineNumber: 49,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "btn btn-sm btn-outline-danger",
                            onClick: ()=>removeOption(q.id, opt.id),
                            children: "Видалити"
                        }, void 0, false, {
                            fileName: "[project]/app/components/testcomponents/MultiChoice.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this)
                    ]
                }, opt.id, true, {
                    fileName: "[project]/app/components/testcomponents/MultiChoice.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/testcomponents/MultiChoice.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/components/testcomponents/SequenceQuestion.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SequenceQuestion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function SequenceQuestion({ q, qid, invalidField, addSequenceItem, updateSequenceItemText, updateSequenceItemOrder, removeSequenceItem }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "d-flex gap-2 align-items-center mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        className: "mb-0",
                        children: "Елементи"
                    }, void 0, false, {
                        fileName: "[project]/app/components/testcomponents/SequenceQuestion.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "btn btn-sm btn-outline-secondary",
                        onClick: ()=>addSequenceItem(q.id),
                        children: "Додати елемент"
                    }, void 0, false, {
                        fileName: "[project]/app/components/testcomponents/SequenceQuestion.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/testcomponents/SequenceQuestion.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            (q.data && q.data.options || []).slice().sort((a, b)=>(Number(a.order) || 0) - (Number(b.order) || 0)).map((it, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "d-flex gap-2 align-items-start mb-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `form-control`,
                            style: {
                                width: 90,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            },
                            children: Number(it.order) || idx + 1
                        }, void 0, false, {
                            fileName: "[project]/app/components/testcomponents/SequenceQuestion.tsx",
                            lineNumber: 32,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            className: `form-control ${invalidField && invalidField.qid === (qid || q.id) && invalidField.field === "sequence" && invalidField.idx === idx ? "is-invalid" : ""}`,
                            "data-qid": q.id,
                            "data-field": "sequence",
                            "data-idx": idx,
                            value: it.text,
                            onChange: (e)=>updateSequenceItemText(q.id, it.id, e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/app/components/testcomponents/SequenceQuestion.tsx",
                            lineNumber: 35,
                            columnNumber: 13
                        }, this),
                        invalidField && invalidField.qid === (qid || q.id) && invalidField.field === "sequence" && invalidField.idx === idx && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "invalid-feedback d-block app-error",
                            children: invalidField.message
                        }, void 0, false, {
                            fileName: "[project]/app/components/testcomponents/SequenceQuestion.tsx",
                            lineNumber: 44,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "btn btn-sm btn-outline-danger",
                            onClick: ()=>removeSequenceItem(q.id, it.id),
                            children: "Видалити"
                        }, void 0, false, {
                            fileName: "[project]/app/components/testcomponents/SequenceQuestion.tsx",
                            lineNumber: 46,
                            columnNumber: 13
                        }, this)
                    ]
                }, it.id, true, {
                    fileName: "[project]/app/components/testcomponents/SequenceQuestion.tsx",
                    lineNumber: 31,
                    columnNumber: 11
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/testcomponents/SequenceQuestion.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/components/testcomponents/MatchingQuestion.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MatchingQuestion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function MatchingQuestion({ q, qid, invalidField, addPairToQuestion, updatePairText, removePairFromQuestion }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "d-flex gap-2 align-items-center mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        className: "mb-0",
                        children: "Пари відповідностей"
                    }, void 0, false, {
                        fileName: "[project]/app/components/testcomponents/MatchingQuestion.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "btn btn-sm btn-outline-secondary",
                        onClick: ()=>addPairToQuestion(q.id),
                        children: "Додати пару"
                    }, void 0, false, {
                        fileName: "[project]/app/components/testcomponents/MatchingQuestion.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/testcomponents/MatchingQuestion.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            (q.data && q.data.pairs || []).map((p, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "d-flex gap-2 align-items-start mb-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            className: `form-control ${invalidField && invalidField.qid === (qid || q.id) && invalidField.field === "pair" && invalidField.idx === idx ? "is-invalid" : ""}`,
                            "data-qid": q.id,
                            "data-field": "pair",
                            "data-idx": idx,
                            value: p.left,
                            onChange: (e)=>updatePairText(q.id, p.id, "left", e.target.value),
                            placeholder: "Ліва"
                        }, void 0, false, {
                            fileName: "[project]/app/components/testcomponents/MatchingQuestion.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "align-self-center",
                            children: "→"
                        }, void 0, false, {
                            fileName: "[project]/app/components/testcomponents/MatchingQuestion.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            className: `form-control ${invalidField && invalidField.qid === (qid || q.id) && invalidField.field === "pair" && invalidField.idx === idx ? "is-invalid" : ""}`,
                            "data-qid": q.id,
                            "data-field": "pair",
                            "data-idx": idx,
                            value: p.right,
                            onChange: (e)=>updatePairText(q.id, p.id, "right", e.target.value),
                            placeholder: "Права"
                        }, void 0, false, {
                            fileName: "[project]/app/components/testcomponents/MatchingQuestion.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        invalidField && invalidField.qid === (qid || q.id) && invalidField.field === "pair" && invalidField.idx === idx && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "invalid-feedback d-block app-error",
                            children: invalidField.message
                        }, void 0, false, {
                            fileName: "[project]/app/components/testcomponents/MatchingQuestion.tsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "btn btn-sm btn-outline-danger",
                            onClick: ()=>removePairFromQuestion(q.id, p.id),
                            children: "Видалити"
                        }, void 0, false, {
                            fileName: "[project]/app/components/testcomponents/MatchingQuestion.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    ]
                }, p.id, true, {
                    fileName: "[project]/app/components/testcomponents/MatchingQuestion.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/testcomponents/MatchingQuestion.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/editor/new/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NewTestPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$testcomponents$2f$OpenAnswer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/testcomponents/OpenAnswer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$testcomponents$2f$SingleChoice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/testcomponents/SingleChoice.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$testcomponents$2f$MultiChoice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/testcomponents/MultiChoice.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$testcomponents$2f$SequenceQuestion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/testcomponents/SequenceQuestion.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$testcomponents$2f$MatchingQuestion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/testcomponents/MatchingQuestion.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
function NewTestPage() {
    // hooks used across the component
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
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
    // Open answer expected values (array)
    function updateOpenAnswer(id, answers) {
        setQuestions((s)=>s.map((q)=>q.id === id ? {
                    ...q,
                    data: {
                        ...q.data || {},
                        answers
                    }
                } : q));
    }
    function removeQuestion(id) {
        setQuestions((s)=>s.filter((q)=>q.id !== id));
    }
    // new question type selector state and helpers (used by UI)
    const [newQuestionType, setNewQuestionType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("single");
    function updateQuestion(qid, text) {
        setQuestions((s)=>s.map((q)=>q.id === qid ? {
                    ...q,
                    text
                } : q));
    }
    function updateQuestionType(qid, type) {
        setQuestions((s)=>s.map((q, idx)=>q.id === qid ? normalizeQuestion({
                    ...q,
                    type
                }, idx) : q));
    }
    function addQuestion() {
        const q = {
            id: Date.now(),
            type: newQuestionType,
            text: "",
            data: {}
        };
        setQuestions((s)=>[
                ...s,
                normalizeQuestion(q, s.length)
            ]);
    }
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [visibility, setVisibility] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("public");
    const [storeResponses, setStoreResponses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [ownResultView, setOwnResultView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("full");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [questions, setQuestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [invalidField, setInvalidField] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const DRAFT_KEY = "test_draft_v1";
    const [lastSaved, setLastSaved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editId, setEditId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Ensure restored questions and nested items have necessary ids/defaults
    function normalizeQuestion(q, idx) {
        const out = {
            ...q
        };
        if (!out.id) out.id = Date.now() + idx + 1;
        if (!out.type) out.type = out.type || "single";
        if (typeof out.text === "undefined") out.text = "";
        out.data = out.data || {};
        if (out.type === "single" || out.type === "multi") {
            out.data.options = Array.isArray(out.data.options) ? out.data.options.map((o, i)=>({
                    id: o?.id || Date.now() + idx + i + 2,
                    text: typeof o?.text === "undefined" ? "" : o.text,
                    correct: !!o?.correct
                })) : [];
        } else if (out.type === "sequence") {
            out.data.options = Array.isArray(out.data.options) ? out.data.options.map((o, i)=>({
                    id: o?.id || Date.now() + idx + i + 2,
                    text: typeof o?.text === "undefined" ? "" : o.text,
                    order: typeof o?.order === "undefined" ? i + 1 : o.order
                })) : [];
        } else if (out.type === "matching") {
            out.data.pairs = Array.isArray(out.data.pairs) ? out.data.pairs.map((p, i)=>({
                    id: p?.id || Date.now() + idx + i + 2,
                    left: typeof p?.left === "undefined" ? "" : p.left,
                    right: typeof p?.right === "undefined" ? "" : p.right
                })) : [];
        } else if (out.type === "open") {
            out.data.answers = Array.isArray(out.data.answers) ? out.data.answers.map((a)=>typeof a === "undefined" ? "" : a) : [
                ""
            ];
        }
        return out;
    }
    // Always restore draft on mount so navigating away and back preserves state
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            document.title = "TestHub | Новий тест";
        } catch  {}
    }, []);
    // reusable draft loader
    function loadDraftFromStorage() {
        try {
            if ("TURBOPACK compile-time truthy", 1) return;
            //TURBOPACK unreachable
            ;
            const raw = undefined;
            const parsed = undefined;
        } catch (err) {
            console.warn("Failed to load draft:", err);
        }
    }
    // Load on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        loadDraftFromStorage();
        // If the URL has ?edit=<id> fetch test for editing
        try {
            const id = searchParams.get("edit");
            if (id) {
                setEditId(id);
                (async function() {
                    try {
                        const res = await fetch(`/api/tests/${id}`, {
                            credentials: "include"
                        });
                        if (!res.ok) return;
                        const data = await res.json();
                        if (data?.ok && data.test) {
                            const t = data.test;
                            setTitle(t.title || "");
                            setDescription(t.description || "");
                            setVisibility(t.visibility || "public");
                            setStoreResponses(!!t.storeResponses);
                            setOwnResultView(t.ownResultView || "full");
                            // map server question types back to frontend
                            const mapped = Array.isArray(t.questions) ? t.questions.map((q)=>{
                                const mapBack = (stype)=>{
                                    switch(stype){
                                        case "single_choice":
                                            return "single";
                                        case "multi_choice":
                                            return "multi";
                                        case "sequence":
                                            return "sequence";
                                        case "matching":
                                            return "matching";
                                        case "open":
                                            return "open";
                                        default:
                                            return stype;
                                    }
                                };
                                const ftype = mapBack(q.type);
                                const dataObj = {};
                                if (ftype === "single" || ftype === "multi") dataObj.options = q.options || [];
                                else if (ftype === "sequence") dataObj.options = q.options || [];
                                else if (ftype === "matching") dataObj.pairs = q.pairs || [];
                                else if (ftype === "open") dataObj.answers = q.answers || [];
                                return {
                                    id: q.id || Date.now(),
                                    type: ftype,
                                    text: q.text || "",
                                    data: dataObj
                                };
                            }) : [];
                            setQuestions(mapped);
                        }
                    } catch (err) {
                        console.warn("Failed to load test for edit:", err);
                    }
                })();
            }
        } catch  {}
    }, []);
    // Also reload when pathname becomes this page (handles client-side navigation back)
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            if (pathname === "/editor/new") {
                // only reload draft when not editing a specific test
                const id = searchParams.get("edit");
                if (!id) loadDraftFromStorage();
            }
        } catch  {}
    }, [
        pathname
    ]);
    // Auto-save draft to localStorage (immediate)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            if ("TURBOPACK compile-time truthy", 1) return;
            //TURBOPACK unreachable
            ;
            const payload = undefined;
        } catch  {}
    }, [
        title,
        description,
        visibility,
        storeResponses,
        ownResultView,
        questions
    ]);
    function clearDraft() {
        try {
            if ("TURBOPACK compile-time truthy", 1) return;
            //TURBOPACK unreachable
            ;
        } catch  {}
        setTitle("");
        setDescription("");
        setVisibility("public");
        setStoreResponses(true);
        setOwnResultView("full");
        setQuestions([]);
        setLastSaved(null);
        setInvalidField(null);
        setError(null);
    }
    // Note: lastSaved timestamp is still stored in localStorage but not shown in the UI.
    function validateQuestions() {
        // validate title first
        if (!title || !String(title).trim()) {
            const msg = "Вкажіть назву тесту";
            setError(msg);
            const foundInvalid = {
                qid: -1,
                field: "title",
                message: msg
            };
            setInvalidField(foundInvalid);
            const el = document.querySelector(`[data-field="title"]`);
            if (el) {
                el.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
                try {
                    el.focus();
                } catch  {}
            }
            return false;
        }
        if (!questions || questions.length === 0) {
            setError("Додайте принаймні одне питання");
            return false;
        }
        let firstInvalidSelector = null;
        let foundInvalid = null;
        for(let i = 0; i < questions.length; i++){
            const q = questions[i];
            const qNo = i + 1;
            if (!q.text || !String(q.text).trim()) {
                const msg = `Питання ${qNo}: введіть текст питання`;
                setError(msg);
                foundInvalid = {
                    qid: q.id,
                    field: "text",
                    message: msg
                };
                firstInvalidSelector = `[data-qid="${q.id}"][data-field="text"]`;
                break;
            }
            if (q.type === "single" || q.type === "multi") {
                const opts = q.data && q.data.options || [];
                if (!opts || opts.length === 0) {
                    const msg = `Питання ${qNo}: додайте варіанти відповіді`;
                    setError(msg);
                    foundInvalid = {
                        qid: q.id,
                        field: "option",
                        message: msg
                    };
                    firstInvalidSelector = `[data-qid="${q.id}"][data-field="option"]`;
                    break;
                }
                for(let j = 0; j < opts.length; j++){
                    const o = opts[j];
                    if (!o.text || !String(o.text).trim()) {
                        const msg = `Питання ${qNo}, варіант ${j + 1}: введіть текст варіанту`;
                        setError(msg);
                        foundInvalid = {
                            qid: q.id,
                            field: "option",
                            idx: j,
                            message: msg
                        };
                        firstInvalidSelector = `[data-qid="${q.id}"][data-field="option"][data-idx="${j}"]`;
                        break;
                    }
                }
                if (firstInvalidSelector) break;
                const hasCorrect = opts.some((o)=>!!o.correct);
                if (!hasCorrect) {
                    const msg = `Питання ${qNo}: позначте принаймні один правильний варіант`;
                    setError(msg);
                    foundInvalid = {
                        qid: q.id,
                        field: "option",
                        message: msg
                    };
                    firstInvalidSelector = `[data-qid="${q.id}"][data-field="option"]`;
                    break;
                }
            } else if (q.type === "sequence") {
                const items = q.data && q.data.options || [];
                if (!items || items.length === 0) {
                    const msg = `Питання ${qNo}: додайте елементи послідовності`;
                    setError(msg);
                    foundInvalid = {
                        qid: q.id,
                        field: "sequence",
                        message: msg
                    };
                    firstInvalidSelector = `[data-qid="${q.id}"][data-field="sequence"]`;
                    break;
                }
                for(let j = 0; j < items.length; j++){
                    if (!items[j].text || !String(items[j].text).trim()) {
                        const msg = `Питання ${qNo}, елемент ${j + 1}: введіть текст`;
                        setError(msg);
                        foundInvalid = {
                            qid: q.id,
                            field: "sequence",
                            idx: j,
                            message: msg
                        };
                        firstInvalidSelector = `[data-qid="${q.id}"][data-field="sequence"][data-idx="${j}"]`;
                        break;
                    }
                }
                if (firstInvalidSelector) break;
            } else if (q.type === "matching") {
                const pairs = q.data && q.data.pairs || [];
                if (!pairs || pairs.length === 0) {
                    const msg = `Питання ${qNo}: додайте пари відповідностей`;
                    setError(msg);
                    foundInvalid = {
                        qid: q.id,
                        field: "pair",
                        message: msg
                    };
                    firstInvalidSelector = `[data-qid="${q.id}"][data-field="pair"]`;
                    break;
                }
                for(let j = 0; j < pairs.length; j++){
                    const p = pairs[j];
                    if (!p.left || !String(p.left).trim() || !p.right || !String(p.right).trim()) {
                        const msg = `Питання ${qNo}, пара ${j + 1}: заповніть обидва поля пари`;
                        setError(msg);
                        foundInvalid = {
                            qid: q.id,
                            field: "pair",
                            idx: j,
                            message: msg
                        };
                        firstInvalidSelector = `[data-qid="${q.id}"][data-field="pair"][data-idx="${j}"]`;
                        break;
                    }
                }
                if (firstInvalidSelector) break;
            } else if (q.type === "open") {
                const answers = q.data && q.data.answers || [];
                if (!answers || answers.length === 0) {
                    const msg = `Питання ${qNo}: додайте принаймні одну очікувану відповідь або заповніть питання`;
                    setError(msg);
                    foundInvalid = {
                        qid: q.id,
                        field: "answer",
                        message: msg
                    };
                    firstInvalidSelector = `[data-qid="${q.id}"][data-field="answer"]`;
                    break;
                }
                for(let j = 0; j < answers.length; j++){
                    if (!answers[j] || !String(answers[j]).trim()) {
                        const msg = `Питання ${qNo}, очікувана відповідь ${j + 1}: введіть текст`;
                        setError(msg);
                        foundInvalid = {
                            qid: q.id,
                            field: "answer",
                            idx: j,
                            message: msg
                        };
                        firstInvalidSelector = `[data-qid="${q.id}"][data-field="answer"][data-idx="${j}"]`;
                        break;
                    }
                }
                if (firstInvalidSelector) break;
            }
        }
        if (foundInvalid) {
            setInvalidField(foundInvalid);
            const el = document.querySelector(firstInvalidSelector);
            if (el) {
                el.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
                try {
                    el.focus();
                } catch  {}
            }
            return false;
        }
        setInvalidField(null);
        setError(null);
        return true;
    }
    async function onSubmit(e) {
        e.preventDefault();
        setError(null);
        if (!validateQuestions()) return;
        // title validation now handled in validateQuestions()
        setLoading(true);
        try {
            let res;
            const payload = {
                title,
                description,
                visibility,
                storeResponses,
                ownResultView,
                questions
            };
            if (editId) {
                res = await fetch(`/api/tests/${editId}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    credentials: "include",
                    body: JSON.stringify(payload)
                });
            } else {
                res = await fetch("/api/tests", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    credentials: "include",
                    body: JSON.stringify(payload)
                });
            }
            if (!res.ok) {
                const txt = await res.text();
                throw new Error(txt || `HTTP ${res.status}`);
            }
            // після успіху — повернутись до /editor
            router.push("/editor");
        } catch (err) {
            setError(err?.message || (editId ? "Помилка при оновленні тесту" : "Помилка при створенні тесту"));
            setLoading(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container d-flex flex-column align-items-center min-vh-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "mb-4 text-center",
                children: "Новий тест"
            }, void 0, false, {
                fileName: "[project]/app/editor/new/page.tsx",
                lineNumber: 521,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: "menu-box p-4",
                onSubmit: onSubmit,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "form-label",
                                children: "Назва"
                            }, void 0, false, {
                                fileName: "[project]/app/editor/new/page.tsx",
                                lineNumber: 524,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: `form-control ${invalidField && invalidField.field === "title" ? "is-invalid" : ""}`,
                                value: title,
                                "data-field": "title",
                                onChange: (e)=>setTitle(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/app/editor/new/page.tsx",
                                lineNumber: 525,
                                columnNumber: 11
                            }, this),
                            invalidField && invalidField.field === "title" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "invalid-feedback d-block app-error",
                                children: invalidField.message
                            }, void 0, false, {
                                fileName: "[project]/app/editor/new/page.tsx",
                                lineNumber: 532,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/editor/new/page.tsx",
                        lineNumber: 523,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "form-label",
                                children: "Опис"
                            }, void 0, false, {
                                fileName: "[project]/app/editor/new/page.tsx",
                                lineNumber: 537,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                className: "form-control",
                                rows: 5,
                                value: description,
                                onChange: (e)=>setDescription(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/app/editor/new/page.tsx",
                                lineNumber: 538,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/editor/new/page.tsx",
                        lineNumber: 536,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "form-label d-block",
                                children: "Видимість"
                            }, void 0, false, {
                                fileName: "[project]/app/editor/new/page.tsx",
                                lineNumber: 547,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "btn-group",
                                role: "group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "radio",
                                        className: "btn-check",
                                        name: "visibility",
                                        id: "public",
                                        autoComplete: "off",
                                        checked: visibility === "public",
                                        onChange: ()=>setVisibility("public")
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/new/page.tsx",
                                        lineNumber: 549,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "btn btn-outline-primary",
                                        htmlFor: "public",
                                        children: "Публічний"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/new/page.tsx",
                                        lineNumber: 558,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "radio",
                                        className: "btn-check",
                                        name: "visibility",
                                        id: "private",
                                        autoComplete: "off",
                                        checked: visibility === "private",
                                        onChange: ()=>setVisibility("private")
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/new/page.tsx",
                                        lineNumber: 562,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "btn btn-outline-primary",
                                        htmlFor: "private",
                                        children: "Приватний"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/new/page.tsx",
                                        lineNumber: 571,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editor/new/page.tsx",
                                lineNumber: 548,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/editor/new/page.tsx",
                        lineNumber: 546,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "form-label d-block",
                                children: "Зберігати відповіді та результати користувачів"
                            }, void 0, false, {
                                fileName: "[project]/app/editor/new/page.tsx",
                                lineNumber: 579,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "btn-group",
                                role: "group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "radio",
                                        className: "btn-check",
                                        name: "storeResponses",
                                        id: "storeYes",
                                        autoComplete: "off",
                                        checked: storeResponses === true,
                                        onChange: ()=>setStoreResponses(true)
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/new/page.tsx",
                                        lineNumber: 581,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "btn btn-outline-primary",
                                        htmlFor: "storeYes",
                                        children: "Так"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/new/page.tsx",
                                        lineNumber: 590,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "radio",
                                        className: "btn-check",
                                        name: "storeResponses",
                                        id: "storeNo",
                                        autoComplete: "off",
                                        checked: storeResponses === false,
                                        onChange: ()=>setStoreResponses(false)
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/new/page.tsx",
                                        lineNumber: 594,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "btn btn-outline-primary",
                                        htmlFor: "storeNo",
                                        children: "Ні"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/new/page.tsx",
                                        lineNumber: 603,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editor/new/page.tsx",
                                lineNumber: 580,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "form-text mt-1",
                                children: "Якщо так — зберігатимуться індивідуальні відповіді та результати (ви зможете бачити список користувачів, які пройшли тест)."
                            }, void 0, false, {
                                fileName: "[project]/app/editor/new/page.tsx",
                                lineNumber: 607,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/editor/new/page.tsx",
                        lineNumber: 578,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "form-label d-block",
                                children: "Що бачить користувач після проходження"
                            }, void 0, false, {
                                fileName: "[project]/app/editor/new/page.tsx",
                                lineNumber: 614,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "btn-group",
                                role: "group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "radio",
                                        className: "btn-check",
                                        name: "ownResultView",
                                        id: "ownFull",
                                        autoComplete: "off",
                                        checked: ownResultView === "full",
                                        onChange: ()=>setOwnResultView("full")
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/new/page.tsx",
                                        lineNumber: 616,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "btn btn-outline-primary",
                                        htmlFor: "ownFull",
                                        children: "Повні результати (питання + відповіді + бали)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/new/page.tsx",
                                        lineNumber: 625,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "radio",
                                        className: "btn-check",
                                        name: "ownResultView",
                                        id: "ownScore",
                                        autoComplete: "off",
                                        checked: ownResultView === "score_only",
                                        onChange: ()=>setOwnResultView("score_only")
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/new/page.tsx",
                                        lineNumber: 629,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "btn btn-outline-primary",
                                        htmlFor: "ownScore",
                                        children: "Тільки бали"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/new/page.tsx",
                                        lineNumber: 638,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "radio",
                                        className: "btn-check",
                                        name: "ownResultView",
                                        id: "ownNothing",
                                        autoComplete: "off",
                                        checked: ownResultView === "nothing",
                                        onChange: ()=>setOwnResultView("nothing")
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/new/page.tsx",
                                        lineNumber: 642,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "btn btn-outline-primary",
                                        htmlFor: "ownNothing",
                                        children: "Нічого не показувати"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/new/page.tsx",
                                        lineNumber: 651,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editor/new/page.tsx",
                                lineNumber: 615,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "form-text mt-1",
                                children: "Ця опція визначає, що бачить сам користувач після завершення тесту незалежно від того, чи зберігаються відповіді."
                            }, void 0, false, {
                                fileName: "[project]/app/editor/new/page.tsx",
                                lineNumber: 655,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/editor/new/page.tsx",
                        lineNumber: 613,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3 questions-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "mb-2 text-center",
                                children: "Питання"
                            }, void 0, false, {
                                fileName: "[project]/app/editor/new/page.tsx",
                                lineNumber: 661,
                                columnNumber: 11
                            }, this),
                            questions.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "muted mb-2",
                                children: "Поки немає питань. Додайте перше питання."
                            }, void 0, false, {
                                fileName: "[project]/app/editor/new/page.tsx",
                                lineNumber: 664,
                                columnNumber: 13
                            }, this),
                            questions.map((q)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "d-flex justify-content-between align-items-center mb-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "form-label mb-0",
                                                    children: "Питання"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/editor/new/page.tsx",
                                                    lineNumber: 669,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "d-flex align-items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            className: "form-select form-select-sm",
                                                            style: {
                                                                width: 200
                                                            },
                                                            value: q.type,
                                                            onChange: (e)=>updateQuestionType(q.id, e.target.value),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "single",
                                                                    children: "Одиночний вибір"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/editor/new/page.tsx",
                                                                    lineNumber: 677,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "multi",
                                                                    children: "Множинний вибір"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/editor/new/page.tsx",
                                                                    lineNumber: 678,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "sequence",
                                                                    children: "Порядок"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/editor/new/page.tsx",
                                                                    lineNumber: 679,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "open",
                                                                    children: "Відкрита відповідь"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/editor/new/page.tsx",
                                                                    lineNumber: 680,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "matching",
                                                                    children: "Відповідності"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/editor/new/page.tsx",
                                                                    lineNumber: 681,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/editor/new/page.tsx",
                                                            lineNumber: 671,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "badge bg-secondary text-capitalize",
                                                            children: q.type
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/editor/new/page.tsx",
                                                            lineNumber: 683,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/editor/new/page.tsx",
                                                    lineNumber: 670,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/editor/new/page.tsx",
                                            lineNumber: 668,
                                            columnNumber: 15
                                        }, this),
                                        q.type !== "open" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    className: `form-control ${invalidField && invalidField.qid === q.id && invalidField.field === "text" ? "is-invalid" : ""}`,
                                                    rows: 3,
                                                    value: q.text,
                                                    "data-qid": q.id,
                                                    "data-field": "text",
                                                    onChange: (e)=>updateQuestion(q.id, e.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/editor/new/page.tsx",
                                                    lineNumber: 688,
                                                    columnNumber: 19
                                                }, this),
                                                invalidField && invalidField.qid === q.id && invalidField.field === "text" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "invalid-feedback d-block app-error",
                                                    children: invalidField.message
                                                }, void 0, false, {
                                                    fileName: "[project]/app/editor/new/page.tsx",
                                                    lineNumber: 697,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true),
                                        q.type === "open" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$testcomponents$2f$OpenAnswer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            qid: q.id,
                                            invalidField: invalidField,
                                            text: q.text,
                                            answers: q.data && q.data.answers || [],
                                            onChange: (v)=>{
                                                updateQuestion(q.id, v.text);
                                                updateOpenAnswer(q.id, v.answers);
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/editor/new/page.tsx",
                                            lineNumber: 702,
                                            columnNumber: 17
                                        }, this),
                                        q.type === "single" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$testcomponents$2f$SingleChoice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            q: q,
                                            qid: q.id,
                                            invalidField: invalidField,
                                            ensureOptions: ensureOptions,
                                            addOptionToQuestion: addOptionToQuestion,
                                            updateOptionText: updateOptionText,
                                            removeOption: removeOption,
                                            toggleOptionCorrect: toggleOptionCorrect
                                        }, void 0, false, {
                                            fileName: "[project]/app/editor/new/page.tsx",
                                            lineNumber: 715,
                                            columnNumber: 17
                                        }, this),
                                        q.type === "multi" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$testcomponents$2f$MultiChoice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            q: q,
                                            qid: q.id,
                                            invalidField: invalidField,
                                            ensureOptions: ensureOptions,
                                            addOptionToQuestion: addOptionToQuestion,
                                            updateOptionText: updateOptionText,
                                            removeOption: removeOption,
                                            toggleOptionCorrect: toggleOptionCorrect
                                        }, void 0, false, {
                                            fileName: "[project]/app/editor/new/page.tsx",
                                            lineNumber: 728,
                                            columnNumber: 17
                                        }, this),
                                        q.type === "sequence" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$testcomponents$2f$SequenceQuestion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            q: q,
                                            qid: q.id,
                                            invalidField: invalidField,
                                            addSequenceItem: addSequenceItem,
                                            updateSequenceItemText: updateSequenceItemText,
                                            updateSequenceItemOrder: updateSequenceItemOrder,
                                            removeSequenceItem: removeSequenceItem
                                        }, void 0, false, {
                                            fileName: "[project]/app/editor/new/page.tsx",
                                            lineNumber: 741,
                                            columnNumber: 17
                                        }, this),
                                        q.type === "matching" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$testcomponents$2f$MatchingQuestion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            q: q,
                                            qid: q.id,
                                            invalidField: invalidField,
                                            addPairToQuestion: addPairToQuestion,
                                            updatePairText: updatePairText,
                                            removePairFromQuestion: removePairFromQuestion
                                        }, void 0, false, {
                                            fileName: "[project]/app/editor/new/page.tsx",
                                            lineNumber: 753,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 d-flex gap-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "btn btn-outline-danger",
                                                onClick: ()=>removeQuestion(q.id),
                                                children: "Видалити питання"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editor/new/page.tsx",
                                                lineNumber: 763,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/editor/new/page.tsx",
                                            lineNumber: 762,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, q.id, true, {
                                    fileName: "[project]/app/editor/new/page.tsx",
                                    lineNumber: 667,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-2 d-flex justify-content-center align-items-center gap-2 mt-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "form-select w-auto",
                                        value: newQuestionType,
                                        onChange: (e)=>setNewQuestionType(e.target.value),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "single",
                                                children: "Одиночний вибір"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editor/new/page.tsx",
                                                lineNumber: 775,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "multi",
                                                children: "Множинний вибір"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editor/new/page.tsx",
                                                lineNumber: 776,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "sequence",
                                                children: "Порядок (послідовність)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editor/new/page.tsx",
                                                lineNumber: 777,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "open",
                                                children: "Відкрита відповідь"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editor/new/page.tsx",
                                                lineNumber: 778,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "matching",
                                                children: "Відповідності"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editor/new/page.tsx",
                                                lineNumber: 779,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/editor/new/page.tsx",
                                        lineNumber: 770,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "btn btn-secondary",
                                        onClick: ()=>addQuestion(),
                                        children: "Додати питання"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/new/page.tsx",
                                        lineNumber: 781,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editor/new/page.tsx",
                                lineNumber: 769,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/editor/new/page.tsx",
                        lineNumber: 660,
                        columnNumber: 9
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "app-error mb-3",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/app/editor/new/page.tsx",
                        lineNumber: 787,
                        columnNumber: 19
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "d-flex gap-2 actions-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "btn btn-sm btn-outline-danger",
                                onClick: clearDraft,
                                children: "Очистити всі поля"
                            }, void 0, false, {
                                fileName: "[project]/app/editor/new/page.tsx",
                                lineNumber: 792,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn btn-primary",
                                type: "submit",
                                disabled: loading,
                                children: loading ? "Зберігаю..." : "Створити тест"
                            }, void 0, false, {
                                fileName: "[project]/app/editor/new/page.tsx",
                                lineNumber: 795,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/editor",
                                className: "btn btn-outline-secondary",
                                children: "Назад"
                            }, void 0, false, {
                                fileName: "[project]/app/editor/new/page.tsx",
                                lineNumber: 798,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/editor/new/page.tsx",
                        lineNumber: 791,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/editor/new/page.tsx",
                lineNumber: 522,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/editor/new/page.tsx",
        lineNumber: 520,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=app_8aa740da._.js.map