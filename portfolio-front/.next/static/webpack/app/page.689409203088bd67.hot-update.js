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

/***/ "(app-pages-browser)/./src/components/Landing/WGLCanvas/WGLCanvas.tsx":
/*!********************************************************!*\
  !*** ./src/components/Landing/WGLCanvas/WGLCanvas.tsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/fiber */ \"(app-pages-browser)/./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/Environment.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three */ \"(app-pages-browser)/./node_modules/three/build/three.module.js\");\n/* harmony import */ var _Scene_Scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Scene/Scene */ \"(app-pages-browser)/./src/components/Landing/WGLCanvas/Scene/Scene.tsx\");\n/* harmony import */ var _Landing_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Landing.content */ \"(app-pages-browser)/./src/components/Landing/Landing.content.ts\");\n/* harmony import */ var _PointerCamera_PointerCamera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PointerCamera/PointerCamera */ \"(app-pages-browser)/./src/components/Landing/WGLCanvas/PointerCamera/PointerCamera.tsx\");\n\n\n\n\n\n\n\nconst WGLCanvas = (param)=>{\n    let { onReady = ()=>undefined, progress } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_fiber__WEBPACK_IMPORTED_MODULE_4__.Canvas, {\n        dpr: 0.5,\n        gl: {\n            alpha: false,\n            outputEncoding: three__WEBPACK_IMPORTED_MODULE_5__.LinearEncoding,\n            toneMapping: three__WEBPACK_IMPORTED_MODULE_5__.NoToneMapping\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_6__.Environment, {\n                files: _Landing_content__WEBPACK_IMPORTED_MODULE_2__.content.assets.hdri\n            }, void 0, false, {\n                fileName: \"/Users/thibautevrard/Desktop/repos/web/portfolio/portfolio-front/src/components/Landing/WGLCanvas/WGLCanvas.tsx\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PointerCamera_PointerCamera__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                progress: progress\n            }, void 0, false, {\n                fileName: \"/Users/thibautevrard/Desktop/repos/web/portfolio/portfolio-front/src/components/Landing/WGLCanvas/WGLCanvas.tsx\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Scene_Scene__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                text3d: _Landing_content__WEBPACK_IMPORTED_MODULE_2__.content.assets.title3d\n            }, void 0, false, {\n                fileName: \"/Users/thibautevrard/Desktop/repos/web/portfolio/portfolio-front/src/components/Landing/WGLCanvas/WGLCanvas.tsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/thibautevrard/Desktop/repos/web/portfolio/portfolio-front/src/components/Landing/WGLCanvas/WGLCanvas.tsx\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, undefined);\n};\n_c = WGLCanvas;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WGLCanvas);\nvar _c;\n$RefreshReg$(_c, \"WGLCanvas\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0xhbmRpbmcvV0dMQ2FudmFzL1dHTENhbnZhcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTBDO0FBQ0k7QUFDTTtBQUdsQjtBQUNTO0FBQ2U7QUFHMUQsTUFBTU8sWUFBNEI7UUFBQyxFQUFDQyxVQUFVLElBQU1DLFNBQVMsRUFBRUMsUUFBUSxFQUFDO0lBQ3BFLHFCQUNJLDhEQUFDVixzREFBTUE7UUFDSFcsS0FBSztRQUNMQyxJQUFJO1lBQ0FDLE9BQU87WUFDUEMsZ0JBQWdCWCxpREFBY0E7WUFDOUJZLGFBQWFiLGdEQUFhQTtRQUM5Qjs7MEJBRUEsOERBQUNELDBEQUFXQTtnQkFBQ2UsT0FBT1gscURBQU9BLENBQUNZLE1BQU0sQ0FBQ0MsSUFBSTs7Ozs7OzBCQUN2Qyw4REFBQ1osb0VBQWFBO2dCQUFDSSxVQUFVQTs7Ozs7OzBCQUt6Qiw4REFBQ04sb0RBQUtBO2dCQUFDZSxRQUFRZCxxREFBT0EsQ0FBQ1ksTUFBTSxDQUFDRyxPQUFPOzs7Ozs7Ozs7Ozs7QUFHakQ7S0FuQk1iO0FBcUJOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0xhbmRpbmcvV0dMQ2FudmFzL1dHTENhbnZhcy50c3g/MjZjZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NhbnZhc30gZnJvbSAnQHJlYWN0LXRocmVlL2ZpYmVyJztcbmltcG9ydCB7RW52aXJvbm1lbnR9IGZyb20gJ0ByZWFjdC10aHJlZS9kcmVpJztcbmltcG9ydCB7Tm9Ub25lTWFwcGluZywgTGluZWFyRW5jb2Rpbmd9IGZyb20gJ3RocmVlJztcbmltcG9ydCBCYWNrZ3JvdW5kVGV4dHVyZSBmcm9tICdzcmMvY29tcG9uZW50cy93Z2wvQmFja2dyb3VuZFRleHR1cmUvQmFja2dyb3VuZFRleHR1cmUnO1xuaW1wb3J0IHtGQywgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTY2VuZSBmcm9tICcuL1NjZW5lL1NjZW5lJztcbmltcG9ydCB7Y29udGVudH0gZnJvbSAnLi4vTGFuZGluZy5jb250ZW50JztcbmltcG9ydCBQb2ludGVyQ2FtZXJhIGZyb20gJy4vUG9pbnRlckNhbWVyYS9Qb2ludGVyQ2FtZXJhJztcbmltcG9ydCB7SVdHTENhbnZhc30gZnJvbSAnLi9XR0xDYW52YXMudHlwZXMnO1xuXG5jb25zdCBXR0xDYW52YXM6IEZDPElXR0xDYW52YXM+ID0gKHtvblJlYWR5ID0gKCkgPT4gdW5kZWZpbmVkLCBwcm9ncmVzc30pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Q2FudmFzXG4gICAgICAgICAgICBkcHI9ezAuNX1cbiAgICAgICAgICAgIGdsPXt7XG4gICAgICAgICAgICAgICAgYWxwaGE6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG91dHB1dEVuY29kaW5nOiBMaW5lYXJFbmNvZGluZyxcbiAgICAgICAgICAgICAgICB0b25lTWFwcGluZzogTm9Ub25lTWFwcGluZyxcbiAgICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICAgIDxFbnZpcm9ubWVudCBmaWxlcz17Y29udGVudC5hc3NldHMuaGRyaX0gLz5cbiAgICAgICAgICAgIDxQb2ludGVyQ2FtZXJhIHByb2dyZXNzPXtwcm9ncmVzc30gLz5cbiAgICAgICAgICAgIHsvKiA8QmFja2dyb3VuZFRleHR1cmVcbiAgICAgICAgICAgICAgICBwYXRoPXtjb250ZW50LmFzc2V0cy5iYWNrZ3JvdW5kfVxuICAgICAgICAgICAgICAgIG9uTG9hZD17b25SZWFkeX1cbiAgICAgICAgICAgIC8+ICovfVxuICAgICAgICAgICAgPFNjZW5lIHRleHQzZD17Y29udGVudC5hc3NldHMudGl0bGUzZH0gLz5cbiAgICAgICAgPC9DYW52YXM+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdHTENhbnZhcztcbiJdLCJuYW1lcyI6WyJDYW52YXMiLCJFbnZpcm9ubWVudCIsIk5vVG9uZU1hcHBpbmciLCJMaW5lYXJFbmNvZGluZyIsIlNjZW5lIiwiY29udGVudCIsIlBvaW50ZXJDYW1lcmEiLCJXR0xDYW52YXMiLCJvblJlYWR5IiwidW5kZWZpbmVkIiwicHJvZ3Jlc3MiLCJkcHIiLCJnbCIsImFscGhhIiwib3V0cHV0RW5jb2RpbmciLCJ0b25lTWFwcGluZyIsImZpbGVzIiwiYXNzZXRzIiwiaGRyaSIsInRleHQzZCIsInRpdGxlM2QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Landing/WGLCanvas/WGLCanvas.tsx\n"));

/***/ })

});