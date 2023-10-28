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

/***/ "(app-pages-browser)/./src/components/Landing/Landing.tsx":
/*!********************************************!*\
  !*** ./src/components/Landing/Landing.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-scroll.mjs\");\n/* harmony import */ var _Landing_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Landing.styles */ \"(app-pages-browser)/./src/components/Landing/Landing.styles.ts\");\n/* harmony import */ var _WGLCanvas_WGLCanvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WGLCanvas/WGLCanvas */ \"(app-pages-browser)/./src/components/Landing/WGLCanvas/WGLCanvas.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ContentSlide_ContentSlide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ContentSlide/ContentSlide */ \"(app-pages-browser)/./src/components/Landing/ContentSlide/ContentSlide.tsx\");\n/* harmony import */ var _hooks_page_useSmoothScroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/hooks/page/useSmoothScroll */ \"(app-pages-browser)/./src/hooks/page/useSmoothScroll.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Landing = ()=>{\n    _s();\n    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const { scrollYProgress, scrollY } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.useScroll)({\n        target: containerRef,\n        offset: [\n            \"start start\",\n            \"end start\"\n        ]\n    });\n    const introProgress = (0,_hooks_page_useSmoothScroll__WEBPACK_IMPORTED_MODULE_5__.useSmoothScroll)(scrollYProgress);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Landing_styles__WEBPACK_IMPORTED_MODULE_1__.ScrollContainer, {\n            ref: containerRef,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Landing_styles__WEBPACK_IMPORTED_MODULE_1__.CanvasContainer, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ContentSlide_ContentSlide__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        progress: introProgress\n                    }, void 0, false, {\n                        fileName: \"/Users/thibautevrard/Desktop/repos/web/portfolio/portfolio-front/src/components/Landing/Landing.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_WGLCanvas_WGLCanvas__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        progress: introProgress\n                    }, void 0, false, {\n                        fileName: \"/Users/thibautevrard/Desktop/repos/web/portfolio/portfolio-front/src/components/Landing/Landing.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/thibautevrard/Desktop/repos/web/portfolio/portfolio-front/src/components/Landing/Landing.tsx\",\n                lineNumber: 30,\n                columnNumber: 17\n            }, undefined)\n        }, 1, false, {\n            fileName: \"/Users/thibautevrard/Desktop/repos/web/portfolio/portfolio-front/src/components/Landing/Landing.tsx\",\n            lineNumber: 29,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(Landing, \"8PxZp4/PG0lzsJxjCk29erunwmA=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_6__.useScroll,\n        _hooks_page_useSmoothScroll__WEBPACK_IMPORTED_MODULE_5__.useSmoothScroll\n    ];\n});\n_c = Landing;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Landing);\nvar _c;\n$RefreshReg$(_c, \"Landing\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0xhbmRpbmcvTGFuZGluZy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFLdUI7QUFLRztBQUNvQjtBQUNqQjtBQUMwQjtBQUNNO0FBRTdELE1BQU1PLFVBQVU7O0lBQ1osTUFBTUMsZUFBZUosNkNBQU1BLENBQWlCO0lBRTVDLE1BQU0sRUFBQ0ssZUFBZSxFQUFFQyxPQUFPLEVBQUMsR0FBR1Ysd0RBQVNBLENBQUM7UUFDekNXLFFBQVFIO1FBQ1JJLFFBQVE7WUFBQztZQUFlO1NBQVk7SUFDeEM7SUFFQSxNQUFNQyxnQkFBZ0JQLDRFQUFlQSxDQUFDRztJQUV0QyxxQkFDSTtrQkFDSSw0RUFBQ1AsNERBQWVBO1lBQVNZLEtBQUtOO3NCQUMxQiw0RUFBQ1AsNERBQWVBOztrQ0FDWiw4REFBQ0ksa0VBQVlBO3dCQUFDVSxVQUFVRjs7Ozs7O2tDQUN4Qiw4REFBQ1YsNERBQVNBO3dCQUFDWSxVQUFVRjs7Ozs7Ozs7Ozs7O1dBSFA7Ozs7OztBQVFsQztHQXBCTU47O1FBR2lDUCxvREFBU0E7UUFLdEJNLHdFQUFlQTs7O0tBUm5DQztBQXNCTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9MYW5kaW5nL0xhbmRpbmcudHN4Pzk2NDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBIVE1MTW90aW9uUHJvcHMsXG4gICAgdXNlTW90aW9uVmFsdWVFdmVudCxcbiAgICB1c2VTY3JvbGwsXG4gICAgdXNlVHJhbnNmb3JtLFxufSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7XG4gICAgQ2FudmFzQ29udGFpbmVyLFxuICAgIENvbnRlbnRDb250YWluZXIsXG4gICAgU2Nyb2xsQ29udGFpbmVyLFxufSBmcm9tICcuL0xhbmRpbmcuc3R5bGVzJztcbmltcG9ydCBXR0xDYW52YXMgZnJvbSAnLi9XR0xDYW52YXMvV0dMQ2FudmFzJztcbmltcG9ydCB7dXNlUmVmfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29udGVudFNsaWRlIGZyb20gJy4vQ29udGVudFNsaWRlL0NvbnRlbnRTbGlkZSc7XG5pbXBvcnQge3VzZVNtb290aFNjcm9sbH0gZnJvbSAnQC9ob29rcy9wYWdlL3VzZVNtb290aFNjcm9sbCc7XG5cbmNvbnN0IExhbmRpbmcgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcblxuICAgIGNvbnN0IHtzY3JvbGxZUHJvZ3Jlc3MsIHNjcm9sbFl9ID0gdXNlU2Nyb2xsKHtcbiAgICAgICAgdGFyZ2V0OiBjb250YWluZXJSZWYsXG4gICAgICAgIG9mZnNldDogWydzdGFydCBzdGFydCcsICdlbmQgc3RhcnQnXSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGludHJvUHJvZ3Jlc3MgPSB1c2VTbW9vdGhTY3JvbGwoc2Nyb2xsWVByb2dyZXNzKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8U2Nyb2xsQ29udGFpbmVyIGtleT17MX0gcmVmPXtjb250YWluZXJSZWZ9PlxuICAgICAgICAgICAgICAgIDxDYW52YXNDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxDb250ZW50U2xpZGUgcHJvZ3Jlc3M9e2ludHJvUHJvZ3Jlc3N9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxXR0xDYW52YXMgcHJvZ3Jlc3M9e2ludHJvUHJvZ3Jlc3N9IC8+XG4gICAgICAgICAgICAgICAgPC9DYW52YXNDb250YWluZXI+XG4gICAgICAgICAgICA8L1Njcm9sbENvbnRhaW5lcj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExhbmRpbmc7XG4iXSwibmFtZXMiOlsidXNlU2Nyb2xsIiwiQ2FudmFzQ29udGFpbmVyIiwiU2Nyb2xsQ29udGFpbmVyIiwiV0dMQ2FudmFzIiwidXNlUmVmIiwiQ29udGVudFNsaWRlIiwidXNlU21vb3RoU2Nyb2xsIiwiTGFuZGluZyIsImNvbnRhaW5lclJlZiIsInNjcm9sbFlQcm9ncmVzcyIsInNjcm9sbFkiLCJ0YXJnZXQiLCJvZmZzZXQiLCJpbnRyb1Byb2dyZXNzIiwicmVmIiwicHJvZ3Jlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Landing/Landing.tsx\n"));

/***/ })

});