"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/allpost",{

/***/ "./pages/allpost/index.js":
/*!********************************!*\
  !*** ./pages/allpost/index.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nfunction allpost(param) {\n    var data = param.data;\n    var _this = this;\n    console.log(data);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                __source: {\n                    fileName: \"/home/hatim/Documents/NextJs-Demo/NextJs-Demo/pages/allpost/index.js\",\n                    lineNumber: 7\n                },\n                __self: this,\n                children: \"test\"\n            }),\n            data.map(function(d) {\n                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        __source: {\n                            fileName: \"/home/hatim/Documents/NextJs-Demo/NextJs-Demo/pages/allpost/index.js\",\n                            lineNumber: 11\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                style: {\n                                    display: \"flex\"\n                                },\n                                __source: {\n                                    fileName: \"/home/hatim/Documents/NextJs-Demo/NextJs-Demo/pages/allpost/index.js\",\n                                    lineNumber: 12\n                                },\n                                __self: _this,\n                                children: [\n                                    \"Title :- \",\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                        __source: {\n                                            fileName: \"/home/hatim/Documents/NextJs-Demo/NextJs-Demo/pages/allpost/index.js\",\n                                            lineNumber: 13\n                                        },\n                                        __self: _this,\n                                        children: d.title\n                                    })\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                style: {\n                                    display: \"flex\"\n                                },\n                                __source: {\n                                    fileName: \"/home/hatim/Documents/NextJs-Demo/NextJs-Demo/pages/allpost/index.js\",\n                                    lineNumber: 15\n                                },\n                                __self: _this,\n                                children: [\n                                    \"Body :- \",\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                        __source: {\n                                            fileName: \"/home/hatim/Documents/NextJs-Demo/NextJs-Demo/pages/allpost/index.js\",\n                                            lineNumber: 16\n                                        },\n                                        __self: _this,\n                                        children: d.body\n                                    })\n                                ]\n                            })\n                        ]\n                    })\n                }));\n            })\n        ]\n    }));\n}\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (allpost);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hbGxwb3N0L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O1NBQVNBLE9BQU8sQ0FBQyxLQUFRLEVBQUUsQ0FBQztRQUFUQyxJQUFJLEdBQU4sS0FBUSxDQUFOQSxJQUFJOztJQUVyQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUk7SUFFbEIsTUFBTSx1RUFBQzs7aUZBRUpHLENBQUc7Ozs7OzswQkFBQyxDQUFJOztZQUNSSCxJQUFJLENBQUNJLEdBQUcsQ0FBQ0MsUUFDVCxDQURTQSxDQUFDLEVBQUUsQ0FBQztnQkFDWixNQUFNLHNFQUFDO29HQUVKRixDQUFHOzs7Ozs7O2tHQUNIQSxDQUFHO2dDQUFDRyxLQUFLLEVBQUUsQ0FBQ0M7b0NBQUFBLE9BQU8sRUFBQyxDQUFNO2dDQUFBLENBQUM7Ozs7Ozs7b0NBQUcsQ0FDdEI7eUdBQUNKLENBQUc7Ozs7OztrREFBRUUsQ0FBQyxDQUFDRyxLQUFLOzs7O2tHQUVyQkwsQ0FBRztnQ0FBQ0csS0FBSyxFQUFFLENBQUNDO29DQUFBQSxPQUFPLEVBQUMsQ0FBTTtnQ0FBQSxDQUFDOzs7Ozs7O29DQUFHLENBQ3ZCO3lHQUFDSixDQUFHOzs7Ozs7a0RBQUVFLENBQUMsQ0FBQ0ksSUFBSTs7Ozs7OztZQU94QixDQUFDOzs7QUFNRCxDQUFDOztBQVlELCtEQUFlVixPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FsbHBvc3QvaW5kZXguanM/MDNkNSJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBhbGxwb3N0KHsgZGF0YSB9KSB7XG4gIFxuICBjb25zb2xlLmxvZyhkYXRhKVxuXG5yZXR1cm4oXG4gIDw+XG4gIDxkaXY+dGVzdDwvZGl2PlxuICB7ZGF0YS5tYXAoZD0+e1xuICAgIHJldHVybihcbiAgICAgIDw+XG4gICAgICA8ZGl2ID5cbiAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwifX0gPlxuICAgICAgVGl0bGUgOi0gPGRpdj57ZC50aXRsZX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCJ9fSA+XG4gICAgICBCb2R5IDotIDxkaXY+e2QuYm9keX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgPC8+XG4gICAgKVxuICB9KVxuXG4gIH1cbiAgPC8+XG4pXG5cbiAgfVxuICBcbiBcbiAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbiAgICBcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzYClcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICBcbiAgIFxuICAgIHJldHVybiB7IHByb3BzOiB7IGRhdGEgfSB9XG4gIH1cbiAgXG4gIGV4cG9ydCBkZWZhdWx0IGFsbHBvc3QiXSwibmFtZXMiOlsiYWxscG9zdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwibWFwIiwiZCIsInN0eWxlIiwiZGlzcGxheSIsInRpdGxlIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/allpost/index.js\n");

/***/ })

});