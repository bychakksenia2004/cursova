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
        setQuestions((s)=>s.map((q, idx)=>{
                if (q.id !== qid) return q;
                const out = {
                    ...q,
                    type
                };
                out.data = out.data || {};
                const baseId = Date.now() + idx;
                if ((type === "single" || type === "multi") && !Array.isArray(out.data.options)) {
                    out.data.options = [
                        {
                            id: baseId + 1,
                            text: "",
                            correct: false
                        },
                        {
                            id: baseId + 2,
                            text: "",
                            correct: false
                        }
                    ];
                }
                if (type === "sequence" && !Array.isArray(out.data.options)) {
                    out.data.options = [
                        {
                            id: baseId + 1,
                            text: "",
                            order: 1
                        },
                        {
                            id: baseId + 2,
                            text: "",
                            order: 2
                        }
                    ];
                }
                if (type === "matching" && !Array.isArray(out.data.pairs)) {
                    out.data.pairs = [
                        {
                            id: baseId + 1,
                            left: "",
                            right: ""
                        },
                        {
                            id: baseId + 2,
                            left: "",
                            right: ""
                        }
                    ];
                }
                if (type === "open" && !Array.isArray(out.data.answers)) {
                    out.data.answers = [
                        ""
                    ];
                }
                return normalizeQuestion(out, idx);
            }));
    }
    function addQuestion() {
        const baseId = Date.now();
        let data = {};
        if (newQuestionType === "single" || newQuestionType === "multi") {
            // create two empty options by default
            data.options = [
                {
                    id: baseId + 1,
                    text: "",
                    correct: false
                },
                {
                    id: baseId + 2,
                    text: "",
                    correct: false
                }
            ];
        } else if (newQuestionType === "sequence") {
            data.options = [
                {
                    id: baseId + 1,
                    text: "",
                    order: 1
                },
                {
                    id: baseId + 2,
                    text: "",
                    order: 2
                }
            ];
        } else if (newQuestionType === "matching") {
            data.pairs = [
                {
                    id: baseId + 1,
                    left: "",
                    right: ""
                },
                {
                    id: baseId + 2,
                    left: "",
                    right: ""
                }
            ];
        } else if (newQuestionType === "open") {
            data.answers = [
                ""
            ];
        }
        const q = {
            id: baseId,
            type: newQuestionType,
            text: "",
            data
        };
        setQuestions((s)=>[
                ...s,
                normalizeQuestion(q, s.length)
            ]);
    }
    async function uploadToCloudinary(file) {
        try {
            const cloudName = ("TURBOPACK compile-time value", "dbwse9h4t");
            const uploadPreset = ("TURBOPACK compile-time value", "photobase");
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const form = new FormData();
            form.append("file", file);
            form.append("upload_preset", uploadPreset);
            const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
                method: "POST",
                body: form
            });
            if (!res.ok) {
                console.error("Upload failed", await res.text());
                return null;
            }
            const j = await res.json();
            return j.secure_url || j.url || null;
        } catch (err) {
            console.error(err);
            return null;
        }
    }
    function updateQuestionImage(qid, url) {
        setQuestions((s)=>s.map((q)=>q.id === qid ? {
                    ...q,
                    imageUrl: url || undefined
                } : q));
    }
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [visibility, setVisibility] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("public");
    const [storeResponses, setStoreResponses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [ownResultView, setOwnResultView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("full");
    const [timed, setTimed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [timeLimitMinutes, setTimeLimitMinutes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [dateWindowEnabled, setDateWindowEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openFrom, setOpenFrom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [openTo, setOpenTo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [questions, setQuestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [initialImageUrls, setInitialImageUrls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
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
                            setTimed(!!t.timed);
                            setTimeLimitMinutes(typeof t.timeLimitMinutes === "number" ? t.timeLimitMinutes : t.timeLimitMinutes ?? "");
                            setDateWindowEnabled(!!t.dateWindowEnabled);
                            setOpenFrom(t.openFrom ? String(new Date(t.openFrom).toISOString().slice(0, 16)) : "");
                            setOpenTo(t.openTo ? String(new Date(t.openTo).toISOString().slice(0, 16)) : "");
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
                                    data: dataObj,
                                    imageUrl: q.imageUrl || q.image && (q.image.secure_url || q.image.url) || undefined
                                };
                            }) : [];
                            setQuestions(mapped);
                            try {
                                const imgs = mapped.map((q)=>q.imageUrl).filter(Boolean);
                                setInitialImageUrls(imgs);
                            } catch  {}
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
        setTimed(false);
        setTimeLimitMinutes("");
        setDateWindowEnabled(false);
        setOpenFrom("");
        setOpenTo("");
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
        // validate timing if enabled
        if (timed) {
            const n = typeof timeLimitMinutes === "number" ? timeLimitMinutes : timeLimitMinutes ? Number(timeLimitMinutes) : NaN;
            if (!Number.isFinite(n) || n <= 0) {
                setError("Вкажіть коректну тривалість тесту у хвилинах");
                return false;
            }
        }
        // validate date window if enabled
        if (dateWindowEnabled) {
            if (!openFrom || !openTo) {
                setError("Вкажіть дати початку та кінця відкритості тесту");
                return false;
            }
            const f = new Date(openFrom);
            const t = new Date(openTo);
            if (isNaN(f.getTime()) || isNaN(t.getTime()) || f.getTime() > t.getTime()) {
                setError("Некоректні дати: початок має бути раніше або рівним кінцю");
                return false;
            }
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
            // If editing, delete any images that existed in the original test but were removed now
            if (editId && Array.isArray(initialImageUrls) && initialImageUrls.length > 0) {
                const currentUrls = questions.map((q)=>q.imageUrl).filter(Boolean);
                const removed = initialImageUrls.filter((u)=>!currentUrls.includes(u));
                if (removed.length > 0) {
                    const failures = [];
                    for (const url of removed){
                        try {
                            const res = await fetch(`/api/cloudinary/delete`, {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    imageUrl: url
                                })
                            });
                            if (!res.ok) {
                                const txt = await res.text().catch(()=>undefined);
                                failures.push(`${url} -> ${txt || res.status}`);
                            }
                        } catch (err) {
                            failures.push(`${url} -> ${String(err)}`);
                        }
                    }
                    if (failures.length > 0) {
                        setLoading(false);
                        alert("Не вдалося видалити старі зображення:\n" + failures.join("\n"));
                        return;
                    }
                }
            }
            let res;
            const payload = {
                title,
                description,
                visibility,
                storeResponses,
                timed,
                timeLimitMinutes: typeof timeLimitMinutes === "number" ? timeLimitMinutes : timeLimitMinutes ? Number(timeLimitMinutes) : undefined,
                dateWindowEnabled,
                openFrom: openFrom || undefined,
                openTo: openTo || undefined,
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
                lineNumber: 675,
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
                                lineNumber: 678,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: `form-control ${invalidField && invalidField.field === "title" ? "is-invalid" : ""}`,
                                value: title,
                                "data-field": "title",
                                onChange: (e)=>setTitle(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/app/editor/new/page.tsx",
                                lineNumber: 679,
                                columnNumber: 11
                            }, this),
                            invalidField && invalidField.field === "title" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "invalid-feedback d-block app-error",
                                children: invalidField.message
                            }, void 0, false, {
                                fileName: "[project]/app/editor/new/page.tsx",
                                lineNumber: 686,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/editor/new/page.tsx",
                        lineNumber: 677,
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
                                lineNumber: 691,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                className: "form-control",
                                rows: 5,
                                value: description,
                                onChange: (e)=>setDescription(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/app/editor/new/page.tsx",
                                lineNumber: 692,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/editor/new/page.tsx",
                        lineNumber: 690,
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
                                lineNumber: 701,
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
                                        lineNumber: 703,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "btn btn-outline-primary",
                                        htmlFor: "public",
                                        children: "Публічний"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/new/page.tsx",
                                        lineNumber: 712,
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
                                        lineNumber: 716,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "btn btn-outline-primary",
                                        htmlFor: "private",
                                        children: "Приватний"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/new/page.tsx",
                                        lineNumber: 725,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editor/new/page.tsx",
                                lineNumber: 702,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/editor/new/page.tsx",
                        lineNumber: 700,
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
                                lineNumber: 733,
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
                                        lineNumber: 735,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "btn btn-outline-primary",
                                        htmlFor: "storeYes",
                                        children: "Так"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/new/page.tsx",
                                        lineNumber: 744,
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
                                        lineNumber: 748,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "btn btn-outline-primary",
                                        htmlFor: "storeNo",
                                        children: "Ні"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/new/page.tsx",
                                        lineNumber: 757,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editor/new/page.tsx",
                                lineNumber: 734,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "form-text mt-1",
                                children: "Якщо так — зберігатимуться індивідуальні відповіді та результати (ви зможете бачити список користувачів, які пройшли тест)."
                            }, void 0, false, {
                                fileName: "[project]/app/editor/new/page.tsx",
                                lineNumber: 761,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/editor/new/page.tsx",
                        lineNumber: 732,
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
                                lineNumber: 768,
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
                                        lineNumber: 770,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "btn btn-outline-primary",
                                        htmlFor: "ownFull",
                                        children: "Повні результати (питання + відповіді + бали)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/new/page.tsx",
                                        lineNumber: 779,
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
                                        lineNumber: 783,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "btn btn-outline-primary",
                                        htmlFor: "ownScore",
                                        children: "Тільки бали"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/new/page.tsx",
                                        lineNumber: 792,
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
                                        lineNumber: 796,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "btn btn-outline-primary",
                                        htmlFor: "ownNothing",
                                        children: "Нічого не показувати"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/new/page.tsx",
                                        lineNumber: 805,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editor/new/page.tsx",
                                lineNumber: 769,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "form-text mt-1",
                                children: "Ця опція визначає, що бачить сам користувач після завершення тесту незалежно від того, чи зберігаються відповіді."
                            }, void 0, false, {
                                fileName: "[project]/app/editor/new/page.tsx",
                                lineNumber: 809,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/editor/new/page.tsx",
                        lineNumber: 767,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "form-label d-block",
                                children: "Налаштування часу"
                            }, void 0, false, {
                                fileName: "[project]/app/editor/new/page.tsx",
                                lineNumber: 815,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "form-check form-switch mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "form-check-input",
                                        type: "checkbox",
                                        role: "switch",
                                        id: "timedSwitch",
                                        checked: timed,
                                        onChange: (e)=>setTimed(e.target.checked)
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/new/page.tsx",
                                        lineNumber: 817,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "form-check-label",
                                        htmlFor: "timedSwitch",
                                        children: "Обмежений час проходження"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/new/page.tsx",
                                        lineNumber: 818,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editor/new/page.tsx",
                                lineNumber: 816,
                                columnNumber: 11
                            }, this),
                            timed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "d-flex align-items-center gap-2 mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: 220
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            min: 1,
                                            className: "form-control",
                                            value: timeLimitMinutes,
                                            onChange: (e)=>setTimeLimitMinutes(e.target.value === "" ? "" : Number(e.target.value)),
                                            placeholder: "Тривалість (хвилин)"
                                        }, void 0, false, {
                                            fileName: "[project]/app/editor/new/page.tsx",
                                            lineNumber: 823,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/new/page.tsx",
                                        lineNumber: 822,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-text",
                                        children: "Вкажіть тривалість тесту в хвилинах."
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/new/page.tsx",
                                        lineNumber: 832,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editor/new/page.tsx",
                                lineNumber: 821,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                                fileName: "[project]/app/editor/new/page.tsx",
                                lineNumber: 836,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "form-check form-switch mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "form-check-input",
                                        type: "checkbox",
                                        role: "switch",
                                        id: "dateWindowSwitch",
                                        checked: dateWindowEnabled,
                                        onChange: (e)=>setDateWindowEnabled(e.target.checked)
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/new/page.tsx",
                                        lineNumber: 839,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "form-check-label",
                                        htmlFor: "dateWindowSwitch",
                                        children: "Обмежити доступ датами"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/new/page.tsx",
                                        lineNumber: 840,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editor/new/page.tsx",
                                lineNumber: 838,
                                columnNumber: 11
                            }, this),
                            dateWindowEnabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "d-flex flex-column gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "d-flex align-items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "form-label mb-0",
                                                style: {
                                                    width: 120
                                                },
                                                children: "Від"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editor/new/page.tsx",
                                                lineNumber: 845,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "datetime-local",
                                                className: "form-control",
                                                value: openFrom,
                                                onChange: (e)=>setOpenFrom(e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/app/editor/new/page.tsx",
                                                lineNumber: 846,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/editor/new/page.tsx",
                                        lineNumber: 844,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "d-flex align-items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "form-label mb-0",
                                                style: {
                                                    width: 120
                                                },
                                                children: "До"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editor/new/page.tsx",
                                                lineNumber: 849,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "datetime-local",
                                                className: "form-control",
                                                value: openTo,
                                                onChange: (e)=>setOpenTo(e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/app/editor/new/page.tsx",
                                                lineNumber: 850,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/editor/new/page.tsx",
                                        lineNumber: 848,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-text",
                                        children: "Коли увімкнено — тест буде доступний лише в проміжку часу."
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/new/page.tsx",
                                        lineNumber: 852,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editor/new/page.tsx",
                                lineNumber: 843,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/editor/new/page.tsx",
                        lineNumber: 814,
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
                                lineNumber: 858,
                                columnNumber: 11
                            }, this),
                            questions.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "muted mb-2",
                                children: "Поки немає питань. Додайте перше питання."
                            }, void 0, false, {
                                fileName: "[project]/app/editor/new/page.tsx",
                                lineNumber: 861,
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
                                                    lineNumber: 866,
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
                                                                    lineNumber: 874,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "multi",
                                                                    children: "Множинний вибір"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/editor/new/page.tsx",
                                                                    lineNumber: 875,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "sequence",
                                                                    children: "Порядок"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/editor/new/page.tsx",
                                                                    lineNumber: 876,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "open",
                                                                    children: "Відкрита відповідь"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/editor/new/page.tsx",
                                                                    lineNumber: 877,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "matching",
                                                                    children: "Відповідності"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/editor/new/page.tsx",
                                                                    lineNumber: 878,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/editor/new/page.tsx",
                                                            lineNumber: 868,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "badge bg-secondary text-capitalize",
                                                            children: q.type
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/editor/new/page.tsx",
                                                            lineNumber: 880,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/editor/new/page.tsx",
                                                    lineNumber: 867,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/editor/new/page.tsx",
                                            lineNumber: 865,
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
                                                    lineNumber: 885,
                                                    columnNumber: 19
                                                }, this),
                                                invalidField && invalidField.qid === q.id && invalidField.field === "text" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "invalid-feedback d-block app-error",
                                                    children: invalidField.message
                                                }, void 0, false, {
                                                    fileName: "[project]/app/editor/new/page.tsx",
                                                    lineNumber: 894,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-2 d-flex align-items-center gap-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "form-label mb-1",
                                                                children: "Зображення (опціонально)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/editor/new/page.tsx",
                                                                lineNumber: 898,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "d-flex gap-2 align-items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "file",
                                                                        accept: "image/*",
                                                                        onChange: async (e)=>{
                                                                            const f = e.target.files?.[0];
                                                                            if (!f) return;
                                                                            try {
                                                                                // if existing image present, delete it from cloud first
                                                                                if (q.imageUrl) {
                                                                                    try {
                                                                                        await fetch(`/api/cloudinary/delete`, {
                                                                                            method: "POST",
                                                                                            headers: {
                                                                                                "Content-Type": "application/json"
                                                                                            },
                                                                                            body: JSON.stringify({
                                                                                                imageUrl: q.imageUrl
                                                                                            })
                                                                                        });
                                                                                    } catch (err) {
                                                                                        console.warn("Failed to delete previous image:", err);
                                                                                    }
                                                                                }
                                                                                const url = await uploadToCloudinary(f);
                                                                                if (url) updateQuestionImage(q.id, url);
                                                                            } catch (err) {
                                                                                console.error(err);
                                                                                alert("Не вдалося завантажити зображення");
                                                                            }
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/editor/new/page.tsx",
                                                                        lineNumber: 900,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    q.imageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            maxWidth: 140
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                src: q.imageUrl,
                                                                                alt: "preview",
                                                                                style: {
                                                                                    width: "100%",
                                                                                    borderRadius: 8
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/editor/new/page.tsx",
                                                                                lineNumber: 929,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "mt-1",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    className: "btn btn-sm btn-outline-danger",
                                                                                    onClick: async ()=>{
                                                                                        try {
                                                                                            if (q.imageUrl) {
                                                                                                const res = await fetch(`/api/cloudinary/delete`, {
                                                                                                    method: "POST",
                                                                                                    headers: {
                                                                                                        "Content-Type": "application/json"
                                                                                                    },
                                                                                                    body: JSON.stringify({
                                                                                                        imageUrl: q.imageUrl
                                                                                                    })
                                                                                                });
                                                                                                if (!res.ok) {
                                                                                                    const txt = await res.text().catch(()=>undefined);
                                                                                                    alert("Не вдалося видалити зображення на сервері: " + (txt || res.status));
                                                                                                    return;
                                                                                                }
                                                                                            }
                                                                                        } catch (err) {
                                                                                            console.warn("Failed to delete image on server:", err);
                                                                                            alert("Не вдалося видалити зображення на сервері");
                                                                                            return;
                                                                                        }
                                                                                        updateQuestionImage(q.id, null);
                                                                                    },
                                                                                    children: "Видалити"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/editor/new/page.tsx",
                                                                                    lineNumber: 931,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/editor/new/page.tsx",
                                                                                lineNumber: 930,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/editor/new/page.tsx",
                                                                        lineNumber: 928,
                                                                        columnNumber: 27
                                                                    }, this) : null
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/editor/new/page.tsx",
                                                                lineNumber: 899,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/editor/new/page.tsx",
                                                        lineNumber: 897,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/editor/new/page.tsx",
                                                    lineNumber: 896,
                                                    columnNumber: 19
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
                                            lineNumber: 965,
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
                                            lineNumber: 978,
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
                                            lineNumber: 991,
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
                                            lineNumber: 1004,
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
                                            lineNumber: 1016,
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
                                                lineNumber: 1026,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/editor/new/page.tsx",
                                            lineNumber: 1025,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, q.id, true, {
                                    fileName: "[project]/app/editor/new/page.tsx",
                                    lineNumber: 864,
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
                                                lineNumber: 1038,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "multi",
                                                children: "Множинний вибір"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editor/new/page.tsx",
                                                lineNumber: 1039,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "sequence",
                                                children: "Порядок (послідовність)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editor/new/page.tsx",
                                                lineNumber: 1040,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "open",
                                                children: "Відкрита відповідь"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editor/new/page.tsx",
                                                lineNumber: 1041,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "matching",
                                                children: "Відповідності"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editor/new/page.tsx",
                                                lineNumber: 1042,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/editor/new/page.tsx",
                                        lineNumber: 1033,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "btn btn-secondary",
                                        onClick: ()=>addQuestion(),
                                        children: "Додати питання"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editor/new/page.tsx",
                                        lineNumber: 1044,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editor/new/page.tsx",
                                lineNumber: 1032,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/editor/new/page.tsx",
                        lineNumber: 857,
                        columnNumber: 9
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "app-error mb-3",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/app/editor/new/page.tsx",
                        lineNumber: 1050,
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
                                lineNumber: 1055,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn btn-primary",
                                type: "submit",
                                disabled: loading,
                                children: loading ? "Зберігаю..." : "Створити тест"
                            }, void 0, false, {
                                fileName: "[project]/app/editor/new/page.tsx",
                                lineNumber: 1058,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/editor",
                                className: "btn btn-outline-secondary",
                                children: "Назад"
                            }, void 0, false, {
                                fileName: "[project]/app/editor/new/page.tsx",
                                lineNumber: 1061,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/editor/new/page.tsx",
                        lineNumber: 1054,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/editor/new/page.tsx",
                lineNumber: 676,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/editor/new/page.tsx",
        lineNumber: 674,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=app_8aa740da._.js.map