"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/Landing/Landing.content.ts":
/*!***************************************************!*\
  !*** ./src/components/Landing/Landing.content.ts ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   content: function() { return /* binding */ content; }\n/* harmony export */ });\nconst content = {\n    assets: {\n        background: \"assets/textures/background.png\",\n        hdri: \"assets/textures/syferfontein_0d_clear_puresky_1k.hdr\",\n        title3d: \"assets/3d/tibo.glb\"\n    },\n    intro: {\n        title: \"[that's my name]\",\n        description: \"I build interactive experiences\"\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0xhbmRpbmcvTGFuZGluZy5jb250ZW50LnRzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxVQUFVO0lBQ25CQyxRQUFRO1FBQ0pDLFlBQVk7UUFDWkMsTUFBTTtRQUNOQyxTQUFTO0lBQ2I7SUFDQUMsT0FBTztRQUNIQyxPQUFPO1FBQ1BDLGFBQWE7SUFDakI7QUFDSixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0xhbmRpbmcvTGFuZGluZy5jb250ZW50LnRzPzlkNjkiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGNvbnRlbnQgPSB7XG4gICAgYXNzZXRzOiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICdhc3NldHMvdGV4dHVyZXMvYmFja2dyb3VuZC5wbmcnLFxuICAgICAgICBoZHJpOiAnYXNzZXRzL3RleHR1cmVzL3N5ZmVyZm9udGVpbl8wZF9jbGVhcl9wdXJlc2t5XzFrLmhkcicsXG4gICAgICAgIHRpdGxlM2Q6ICdhc3NldHMvM2QvdGliby5nbGInLFxuICAgIH0sXG4gICAgaW50cm86IHtcbiAgICAgICAgdGl0bGU6IFwiW3RoYXQncyBteSBuYW1lXVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0kgYnVpbGQgaW50ZXJhY3RpdmUgZXhwZXJpZW5jZXMnLFxuICAgIH0sXG59O1xuIl0sIm5hbWVzIjpbImNvbnRlbnQiLCJhc3NldHMiLCJiYWNrZ3JvdW5kIiwiaGRyaSIsInRpdGxlM2QiLCJpbnRybyIsInRpdGxlIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Landing/Landing.content.ts\n"));

/***/ })

});