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

/***/ "(app-pages-browser)/./src/components/Landing/WGLCanvas/Scene/Scene.tsx":
/*!**********************************************************!*\
  !*** ./src/components/Landing/WGLCanvas/Scene/Scene.tsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LayerContext: function() { return /* binding */ LayerContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"(app-pages-browser)/./node_modules/three/build/three.module.js\");\n/* harmony import */ var _hooks_bubbles_useCustomRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/bubbles/useCustomRenderer */ \"(app-pages-browser)/./src/hooks/bubbles/useCustomRenderer.ts\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/useGLTF.js\");\n/* harmony import */ var _Letter_Letter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Letter/Letter */ \"(app-pages-browser)/./src/components/Landing/WGLCanvas/Scene/Letter/Letter.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst baseRt = new three__WEBPACK_IMPORTED_MODULE_4__.WebGLRenderTarget(0, 0);\nconst LayerContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    layer: undefined,\n    transmissionMap: undefined,\n    blur: 0\n});\nconst Scene = (param)=>{\n    let { text3d } = param;\n    _s();\n    const gltf = (0,_react_three_drei__WEBPACK_IMPORTED_MODULE_5__.useGLTF)(text3d);\n    const { t, i, b, o } = gltf.nodes;\n    const foreground = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({});\n    const background = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({});\n    const { transmissionRt, sceneBackgroundTextureRef } = (0,_hooks_bubbles_useCustomRenderer__WEBPACK_IMPORTED_MODULE_2__.useCustomRenderer)(background, foreground);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"group\", {\n            position: [\n                0,\n                -1,\n                0\n            ],\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"group\", {\n                    ref: foreground,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LayerContext.Provider, {\n                        value: {\n                            layer: \"foreground\",\n                            transmissionMap: transmissionRt.current.texture,\n                            blur: 1.8\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"group\", {\n                            rotation: [\n                                1.5,\n                                0,\n                                0\n                            ],\n                            scale: [\n                                2,\n                                2,\n                                2\n                            ],\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Letter_Letter__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    geometry: t.geometry\n                                }, void 0, false, {\n                                    fileName: \"/Users/thibautevrard/Desktop/repos/web/portfolio/portfolio-front/src/components/Landing/WGLCanvas/Scene/Scene.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Letter_Letter__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    geometry: b.geometry\n                                }, void 0, false, {\n                                    fileName: \"/Users/thibautevrard/Desktop/repos/web/portfolio/portfolio-front/src/components/Landing/WGLCanvas/Scene/Scene.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/thibautevrard/Desktop/repos/web/portfolio/portfolio-front/src/components/Landing/WGLCanvas/Scene/Scene.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/thibautevrard/Desktop/repos/web/portfolio/portfolio-front/src/components/Landing/WGLCanvas/Scene/Scene.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/thibautevrard/Desktop/repos/web/portfolio/portfolio-front/src/components/Landing/WGLCanvas/Scene/Scene.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"group\", {\n                    ref: background,\n                    position: [\n                        0,\n                        0,\n                        -2\n                    ],\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LayerContext.Provider, {\n                        value: {\n                            layer: \"background\",\n                            transmissionMap: sceneBackgroundTextureRef.current,\n                            blur: 0\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"group\", {\n                            rotation: [\n                                1.5,\n                                0,\n                                0\n                            ],\n                            scale: [\n                                2,\n                                2,\n                                2\n                            ],\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Letter_Letter__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    geometry: i.geometry\n                                }, void 0, false, {\n                                    fileName: \"/Users/thibautevrard/Desktop/repos/web/portfolio/portfolio-front/src/components/Landing/WGLCanvas/Scene/Scene.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Letter_Letter__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    geometry: o.geometry\n                                }, void 0, false, {\n                                    fileName: \"/Users/thibautevrard/Desktop/repos/web/portfolio/portfolio-front/src/components/Landing/WGLCanvas/Scene/Scene.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/thibautevrard/Desktop/repos/web/portfolio/portfolio-front/src/components/Landing/WGLCanvas/Scene/Scene.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/thibautevrard/Desktop/repos/web/portfolio/portfolio-front/src/components/Landing/WGLCanvas/Scene/Scene.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/thibautevrard/Desktop/repos/web/portfolio/portfolio-front/src/components/Landing/WGLCanvas/Scene/Scene.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/thibautevrard/Desktop/repos/web/portfolio/portfolio-front/src/components/Landing/WGLCanvas/Scene/Scene.tsx\",\n            lineNumber: 30,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(Scene, \"YFG4Fflod+DXFrMjJ0vLVioGQgg=\", false, function() {\n    return [\n        _react_three_drei__WEBPACK_IMPORTED_MODULE_5__.useGLTF,\n        _hooks_bubbles_useCustomRenderer__WEBPACK_IMPORTED_MODULE_2__.useCustomRenderer\n    ];\n});\n_c = Scene;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Scene);\nvar _c;\n$RefreshReg$(_c, \"Scene\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0xhbmRpbmcvV0dMQ2FudmFzL1NjZW5lL1NjZW5lLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ1E7QUFDWTtBQUNkO0FBRWpCO0FBRXJDLE1BQU1NLFNBQVMsSUFBSUosb0RBQWlCQSxDQUFDLEdBQUc7QUFFakMsTUFBTUssNkJBQWVQLG9EQUFhQSxDQUFDO0lBQ3RDUSxPQUFPQztJQUNQQyxpQkFBaUJEO0lBQ2pCRSxNQUFNO0FBQ1YsR0FBRztBQUVILE1BQU1DLFFBQW9CO1FBQUMsRUFBQ0MsTUFBTSxFQUFDOztJQUMvQixNQUFNQyxPQUFPViwwREFBT0EsQ0FBQ1M7SUFDckIsTUFBTSxFQUFDRSxDQUFDLEVBQUVDLENBQUMsRUFBRUMsQ0FBQyxFQUFFQyxDQUFDLEVBQUMsR0FBR0osS0FBS0ssS0FBSztJQUUvQixNQUFNQyxhQUFhbkIsNkNBQU1BLENBQUMsQ0FBQztJQUMzQixNQUFNb0IsYUFBYXBCLDZDQUFNQSxDQUFDLENBQUM7SUFFM0IsTUFBTSxFQUFDcUIsY0FBYyxFQUFFQyx5QkFBeUIsRUFBQyxHQUFHcEIsbUZBQWlCQSxDQUNqRWtCLFlBQ0FEO0lBR0oscUJBQ0k7a0JBQ0ksNEVBQUNJO1lBQU1DLFVBQVU7Z0JBQUM7Z0JBQUcsQ0FBQztnQkFBRzthQUFFOzs4QkFDdkIsOERBQUNEO29CQUFNRSxLQUFLTjs4QkFDUiw0RUFBQ2IsYUFBYW9CLFFBQVE7d0JBQ2xCQyxPQUFPOzRCQUNIcEIsT0FBTzs0QkFDUEUsaUJBQWlCWSxlQUFlTyxPQUFPLENBQUNDLE9BQU87NEJBQy9DbkIsTUFBTTt3QkFDVjtrQ0FFQSw0RUFBQ2E7NEJBQU1PLFVBQVU7Z0NBQUM7Z0NBQUs7Z0NBQUc7NkJBQUU7NEJBQUVDLE9BQU87Z0NBQUM7Z0NBQUc7Z0NBQUc7NkJBQUU7OzhDQUMxQyw4REFBQzNCLHNEQUFNQTtvQ0FBQzRCLFVBQVVsQixFQUFFa0IsUUFBUTs7Ozs7OzhDQUM1Qiw4REFBQzVCLHNEQUFNQTtvQ0FBQzRCLFVBQVVoQixFQUFFZ0IsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFJeEMsOERBQUNUO29CQUFNRSxLQUFLTDtvQkFBWUksVUFBVTt3QkFBQzt3QkFBRzt3QkFBRyxDQUFDO3FCQUFFOzhCQUN4Qyw0RUFBQ2xCLGFBQWFvQixRQUFRO3dCQUNsQkMsT0FBTzs0QkFDSHBCLE9BQU87NEJBQ1BFLGlCQUFpQmEsMEJBQTBCTSxPQUFPOzRCQUNsRGxCLE1BQU07d0JBQ1Y7a0NBRUEsNEVBQUNhOzRCQUFNTyxVQUFVO2dDQUFDO2dDQUFLO2dDQUFHOzZCQUFFOzRCQUFFQyxPQUFPO2dDQUFDO2dDQUFHO2dDQUFHOzZCQUFFOzs4Q0FDMUMsOERBQUMzQixzREFBTUE7b0NBQUM0QixVQUFVakIsRUFBRWlCLFFBQVE7Ozs7Ozs4Q0FDNUIsOERBQUM1QixzREFBTUE7b0NBQUM0QixVQUFVZixFQUFFZSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU94RDtHQTlDTXJCOztRQUNXUixzREFBT0E7UUFNZ0NELCtFQUFpQkE7OztLQVBuRVM7QUFnRE4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGFuZGluZy9XR0xDYW52YXMvU2NlbmUvU2NlbmUudHN4P2JiODIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGQywgY3JlYXRlQ29udGV4dCwgdXNlUmVmfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1dlYkdMUmVuZGVyVGFyZ2V0LCBHcm91cCwgVGV4dHVyZX0gZnJvbSAndGhyZWUnO1xuaW1wb3J0IHt1c2VDdXN0b21SZW5kZXJlcn0gZnJvbSAnQC9ob29rcy9idWJibGVzL3VzZUN1c3RvbVJlbmRlcmVyJztcbmltcG9ydCB7dXNlR0xURiwgdXNlVGV4dHVyZX0gZnJvbSAnQHJlYWN0LXRocmVlL2RyZWknO1xuaW1wb3J0IHtJTGV0dGVyQXNzZXRzLCBJU2NlbmV9IGZyb20gJy4vU2NlbmUudHlwZXMnO1xuaW1wb3J0IExldHRlciBmcm9tICcuL0xldHRlci9MZXR0ZXInO1xuXG5jb25zdCBiYXNlUnQgPSBuZXcgV2ViR0xSZW5kZXJUYXJnZXQoMCwgMCk7XG5cbmV4cG9ydCBjb25zdCBMYXllckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHtcbiAgICBsYXllcjogdW5kZWZpbmVkIGFzICdmb3JlZ3JvdW5kJyB8ICdiYWNrZ3JvdW5kJyB8IHVuZGVmaW5lZCxcbiAgICB0cmFuc21pc3Npb25NYXA6IHVuZGVmaW5lZCBhcyB1bmRlZmluZWQgfCBUZXh0dXJlLFxuICAgIGJsdXI6IDAgYXMgbnVtYmVyLFxufSk7XG5cbmNvbnN0IFNjZW5lOiBGQzxJU2NlbmU+ID0gKHt0ZXh0M2R9KSA9PiB7XG4gICAgY29uc3QgZ2x0ZiA9IHVzZUdMVEYodGV4dDNkKSBhcyBhbnk7XG4gICAgY29uc3Qge3QsIGksIGIsIG99ID0gZ2x0Zi5ub2RlcyBhcyBJTGV0dGVyQXNzZXRzO1xuXG4gICAgY29uc3QgZm9yZWdyb3VuZCA9IHVzZVJlZih7fSBhcyBHcm91cCk7XG4gICAgY29uc3QgYmFja2dyb3VuZCA9IHVzZVJlZih7fSBhcyBHcm91cCk7XG5cbiAgICBjb25zdCB7dHJhbnNtaXNzaW9uUnQsIHNjZW5lQmFja2dyb3VuZFRleHR1cmVSZWZ9ID0gdXNlQ3VzdG9tUmVuZGVyZXIoXG4gICAgICAgIGJhY2tncm91bmQsXG4gICAgICAgIGZvcmVncm91bmRcbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxncm91cCBwb3NpdGlvbj17WzAsIC0xLCAwXX0+XG4gICAgICAgICAgICAgICAgPGdyb3VwIHJlZj17Zm9yZWdyb3VuZH0+XG4gICAgICAgICAgICAgICAgICAgIDxMYXllckNvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXI6ICdmb3JlZ3JvdW5kJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc21pc3Npb25NYXA6IHRyYW5zbWlzc2lvblJ0LmN1cnJlbnQudGV4dHVyZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibHVyOiAxLjgsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Z3JvdXAgcm90YXRpb249e1sxLjUsIDAsIDBdfSBzY2FsZT17WzIsIDIsIDJdfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGV0dGVyIGdlb21ldHJ5PXt0Lmdlb21ldHJ5fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMZXR0ZXIgZ2VvbWV0cnk9e2IuZ2VvbWV0cnl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2dyb3VwPlxuICAgICAgICAgICAgICAgICAgICA8L0xheWVyQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICAgICAgICAgICA8L2dyb3VwPlxuICAgICAgICAgICAgICAgIDxncm91cCByZWY9e2JhY2tncm91bmR9IHBvc2l0aW9uPXtbMCwgMCwgLTJdfT5cbiAgICAgICAgICAgICAgICAgICAgPExheWVyQ29udGV4dC5Qcm92aWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllcjogJ2JhY2tncm91bmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbWlzc2lvbk1hcDogc2NlbmVCYWNrZ3JvdW5kVGV4dHVyZVJlZi5jdXJyZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsdXI6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Z3JvdXAgcm90YXRpb249e1sxLjUsIDAsIDBdfSBzY2FsZT17WzIsIDIsIDJdfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGV0dGVyIGdlb21ldHJ5PXtpLmdlb21ldHJ5fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMZXR0ZXIgZ2VvbWV0cnk9e28uZ2VvbWV0cnl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2dyb3VwPlxuICAgICAgICAgICAgICAgICAgICA8L0xheWVyQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICAgICAgICAgICA8L2dyb3VwPlxuICAgICAgICAgICAgPC9ncm91cD5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNjZW5lO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VSZWYiLCJXZWJHTFJlbmRlclRhcmdldCIsInVzZUN1c3RvbVJlbmRlcmVyIiwidXNlR0xURiIsIkxldHRlciIsImJhc2VSdCIsIkxheWVyQ29udGV4dCIsImxheWVyIiwidW5kZWZpbmVkIiwidHJhbnNtaXNzaW9uTWFwIiwiYmx1ciIsIlNjZW5lIiwidGV4dDNkIiwiZ2x0ZiIsInQiLCJpIiwiYiIsIm8iLCJub2RlcyIsImZvcmVncm91bmQiLCJiYWNrZ3JvdW5kIiwidHJhbnNtaXNzaW9uUnQiLCJzY2VuZUJhY2tncm91bmRUZXh0dXJlUmVmIiwiZ3JvdXAiLCJwb3NpdGlvbiIsInJlZiIsIlByb3ZpZGVyIiwidmFsdWUiLCJjdXJyZW50IiwidGV4dHVyZSIsInJvdGF0aW9uIiwic2NhbGUiLCJnZW9tZXRyeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Landing/WGLCanvas/Scene/Scene.tsx\n"));

/***/ })

});