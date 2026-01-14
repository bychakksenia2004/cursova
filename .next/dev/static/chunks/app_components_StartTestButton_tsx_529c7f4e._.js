(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/StartTestButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StartTestButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function StartTestButton({ id }) {
    function handleStart(e) {
        try {
            localStorage.setItem(`test_start_${id}`, String(Date.now()));
        } catch  {}
        // navigate to take page
        window.location.href = `/tests/${id}/take`;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: "btn btn-primary",
        onClick: handleStart,
        children: "Розпочати тест"
    }, void 0, false, {
        fileName: "[project]/app/components/StartTestButton.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = StartTestButton;
var _c;
__turbopack_context__.k.register(_c, "StartTestButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_components_StartTestButton_tsx_529c7f4e._.js.map