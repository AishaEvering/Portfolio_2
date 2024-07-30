"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/nav/SideBar.tsx":
/*!************************************!*\
  !*** ./components/nav/SideBar.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SideBar: function() { return /* binding */ SideBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sidebar_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar.module.scss */ \"./components/nav/sidebar.module.scss\");\n/* harmony import */ var _sidebar_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst SideBar = ()=>{\n    _s();\n    const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const sections = document.querySelectorAll(\".section-wrapper\");\n        const options = {\n            threshold: 0.3\n        };\n        const callback = (entries)=>{\n            entries.forEach((entry)=>{\n                if (entry.isIntersecting) {\n                    setSelected(entry.target.id);\n                }\n            });\n        };\n        const observer = new IntersectionObserver(callback, options);\n        sections.forEach((section)=>observer.observe(section));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.nav, {\n        initial: {\n            x: -70\n        },\n        animate: {\n            x: 0\n        },\n        transition: {\n            duration: 0.5\n        },\n        className: (_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_2___default().sideBar),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: (_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_2___default().logo),\n                children: [\n                    \"WELCOME\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \".\"\n                    }, void 0, false, {\n                        fileName: \"/Users/aisha/Documents/Tutorials/YouTube/MyPortfolio/Portfolio_2/components/nav/SideBar.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 16\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/aisha/Documents/Tutorials/YouTube/MyPortfolio/Portfolio_2/components/nav/SideBar.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.a, {\n                initial: {\n                    x: -70\n                },\n                animate: {\n                    x: 0\n                },\n                transition: {\n                    duration: 0.5,\n                    delay: 0.1\n                },\n                href: \"#about\",\n                onClick: ()=>{\n                    setSelected(\"about\");\n                },\n                className: selected === \"about\" ? (_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_2___default().selected) : \"\",\n                children: \"About\"\n            }, void 0, false, {\n                fileName: \"/Users/aisha/Documents/Tutorials/YouTube/MyPortfolio/Portfolio_2/components/nav/SideBar.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.a, {\n                initial: {\n                    x: -70\n                },\n                animate: {\n                    x: 0\n                },\n                transition: {\n                    duration: 0.5,\n                    delay: 0.2\n                },\n                href: \"#projects\",\n                onClick: ()=>setSelected(\"projects\"),\n                className: selected === \"projects\" ? (_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_2___default().selected) : \"\",\n                children: \"Projects\"\n            }, void 0, false, {\n                fileName: \"/Users/aisha/Documents/Tutorials/YouTube/MyPortfolio/Portfolio_2/components/nav/SideBar.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.a, {\n                initial: {\n                    x: -70\n                },\n                animate: {\n                    x: 0\n                },\n                transition: {\n                    duration: 0.5,\n                    delay: 0.3\n                },\n                href: \"#experience\",\n                onClick: ()=>setSelected(\"experience\"),\n                className: selected === \"experience\" ? (_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_2___default().selected) : \"\",\n                children: \"Exp.\"\n            }, void 0, false, {\n                fileName: \"/Users/aisha/Documents/Tutorials/YouTube/MyPortfolio/Portfolio_2/components/nav/SideBar.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.a, {\n                initial: {\n                    x: -70\n                },\n                animate: {\n                    x: 0\n                },\n                transition: {\n                    duration: 0.5,\n                    delay: 0.4\n                },\n                href: \"#contact\",\n                onClick: ()=>setSelected(\"contact\"),\n                className: selected === \"contact\" ? (_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_2___default().selected) : \"\",\n                children: \"Contact\"\n            }, void 0, false, {\n                fileName: \"/Users/aisha/Documents/Tutorials/YouTube/MyPortfolio/Portfolio_2/components/nav/SideBar.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/aisha/Documents/Tutorials/YouTube/MyPortfolio/Portfolio_2/components/nav/SideBar.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SideBar, \"BFBnh0W/Yf4n++zYLJ4vqwP5U5o=\");\n_c = SideBar;\nvar _c;\n$RefreshReg$(_c, \"SideBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdi9TaWRlQmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ0Q7QUFDSjtBQUVoQyxNQUFNSSxVQUFVOztJQUNyQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQUM7SUFFekNELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTU8sV0FBV0MsU0FBU0MsZ0JBQWdCLENBQUM7UUFFM0MsTUFBTUMsVUFBVTtZQUNkQyxXQUFXO1FBQ2I7UUFFQSxNQUFNQyxXQUFXLENBQUNDO1lBQ2hCQSxRQUFRQyxPQUFPLENBQUMsQ0FBQ0M7Z0JBQ2YsSUFBSUEsTUFBTUMsY0FBYyxFQUFFO29CQUN4QlYsWUFBWVMsTUFBTUUsTUFBTSxDQUFDQyxFQUFFO2dCQUM3QjtZQUNGO1FBQ0Y7UUFFQSxNQUFNQyxXQUFXLElBQUlDLHFCQUFxQlIsVUFBVUY7UUFFcERILFNBQVNPLE9BQU8sQ0FBQyxDQUFDTyxVQUFZRixTQUFTRyxPQUFPLENBQUNEO0lBQ2pELEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDbEIsaURBQU1BLENBQUNvQixHQUFHO1FBQ1RDLFNBQVM7WUFBRUMsR0FBRyxDQUFDO1FBQUc7UUFDbEJDLFNBQVM7WUFBRUQsR0FBRztRQUFFO1FBQ2hCRSxZQUFZO1lBQUVDLFVBQVU7UUFBSTtRQUM1QkMsV0FBVzNCLHFFQUFjOzswQkFFekIsOERBQUM2QjtnQkFBS0YsV0FBVzNCLGtFQUFXOztvQkFBRTtrQ0FDckIsOERBQUM2QjtrQ0FBSzs7Ozs7Ozs7Ozs7OzBCQUVmLDhEQUFDNUIsaURBQU1BLENBQUM4QixDQUFDO2dCQUNQVCxTQUFTO29CQUFFQyxHQUFHLENBQUM7Z0JBQUc7Z0JBQ2xCQyxTQUFTO29CQUFFRCxHQUFHO2dCQUFFO2dCQUNoQkUsWUFBWTtvQkFBRUMsVUFBVTtvQkFBS00sT0FBTztnQkFBSTtnQkFDeENDLE1BQUs7Z0JBQ0xDLFNBQVM7b0JBQ1A5QixZQUFZO2dCQUNkO2dCQUNBdUIsV0FBV3hCLGFBQWEsVUFBVUgsc0VBQWUsR0FBRzswQkFDckQ7Ozs7OzswQkFHRCw4REFBQ0MsaURBQU1BLENBQUM4QixDQUFDO2dCQUNQVCxTQUFTO29CQUFFQyxHQUFHLENBQUM7Z0JBQUc7Z0JBQ2xCQyxTQUFTO29CQUFFRCxHQUFHO2dCQUFFO2dCQUNoQkUsWUFBWTtvQkFBRUMsVUFBVTtvQkFBS00sT0FBTztnQkFBSTtnQkFDeENDLE1BQUs7Z0JBQ0xDLFNBQVMsSUFBTTlCLFlBQVk7Z0JBQzNCdUIsV0FBV3hCLGFBQWEsYUFBYUgsc0VBQWUsR0FBRzswQkFDeEQ7Ozs7OzswQkFHRCw4REFBQ0MsaURBQU1BLENBQUM4QixDQUFDO2dCQUNQVCxTQUFTO29CQUFFQyxHQUFHLENBQUM7Z0JBQUc7Z0JBQ2xCQyxTQUFTO29CQUFFRCxHQUFHO2dCQUFFO2dCQUNoQkUsWUFBWTtvQkFBRUMsVUFBVTtvQkFBS00sT0FBTztnQkFBSTtnQkFDeENDLE1BQUs7Z0JBQ0xDLFNBQVMsSUFBTTlCLFlBQVk7Z0JBQzNCdUIsV0FBV3hCLGFBQWEsZUFBZUgsc0VBQWUsR0FBRzswQkFDMUQ7Ozs7OzswQkFHRCw4REFBQ0MsaURBQU1BLENBQUM4QixDQUFDO2dCQUNQVCxTQUFTO29CQUFFQyxHQUFHLENBQUM7Z0JBQUc7Z0JBQ2xCQyxTQUFTO29CQUFFRCxHQUFHO2dCQUFFO2dCQUNoQkUsWUFBWTtvQkFBRUMsVUFBVTtvQkFBS00sT0FBTztnQkFBSTtnQkFDeENDLE1BQUs7Z0JBQ0xDLFNBQVMsSUFBTTlCLFlBQVk7Z0JBQzNCdUIsV0FBV3hCLGFBQWEsWUFBWUgsc0VBQWUsR0FBRzswQkFDdkQ7Ozs7Ozs7Ozs7OztBQUtQLEVBQUU7R0E3RVdFO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmF2L1NpZGVCYXIudHN4PzgxOTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zaWRlYmFyLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5leHBvcnQgY29uc3QgU2lkZUJhciA9ICgpID0+IHtcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZWN0aW9uLXdyYXBwZXJcIik7XG5cbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgdGhyZXNob2xkOiAwLjMsXG4gICAgfTtcblxuICAgIGNvbnN0IGNhbGxiYWNrID0gKGVudHJpZXM6IGFueSkgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeTogYW55KSA9PiB7XG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgIHNldFNlbGVjdGVkKGVudHJ5LnRhcmdldC5pZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihjYWxsYmFjaywgb3B0aW9ucyk7XG5cbiAgICBzZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uKSA9PiBvYnNlcnZlci5vYnNlcnZlKHNlY3Rpb24pKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5uYXZcbiAgICAgIGluaXRpYWw9e3sgeDogLTcwIH19XG4gICAgICBhbmltYXRlPXt7IHg6IDAgfX1cbiAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSB9fVxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2lkZUJhcn1cbiAgICA+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5cbiAgICAgICAgV0VMQ09NRTxzcGFuPi48L3NwYW4+XG4gICAgICA8L3NwYW4+XG4gICAgICA8bW90aW9uLmFcbiAgICAgICAgaW5pdGlhbD17eyB4OiAtNzAgfX1cbiAgICAgICAgYW5pbWF0ZT17eyB4OiAwIH19XG4gICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSwgZGVsYXk6IDAuMSB9fVxuICAgICAgICBocmVmPVwiI2Fib3V0XCJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIHNldFNlbGVjdGVkKFwiYWJvdXRcIik7XG4gICAgICAgIH19XG4gICAgICAgIGNsYXNzTmFtZT17c2VsZWN0ZWQgPT09IFwiYWJvdXRcIiA/IHN0eWxlcy5zZWxlY3RlZCA6IFwiXCJ9XG4gICAgICA+XG4gICAgICAgIEFib3V0XG4gICAgICA8L21vdGlvbi5hPlxuICAgICAgPG1vdGlvbi5hXG4gICAgICAgIGluaXRpYWw9e3sgeDogLTcwIH19XG4gICAgICAgIGFuaW1hdGU9e3sgeDogMCB9fVxuICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUsIGRlbGF5OiAwLjIgfX1cbiAgICAgICAgaHJlZj1cIiNwcm9qZWN0c1wiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkKFwicHJvamVjdHNcIil9XG4gICAgICAgIGNsYXNzTmFtZT17c2VsZWN0ZWQgPT09IFwicHJvamVjdHNcIiA/IHN0eWxlcy5zZWxlY3RlZCA6IFwiXCJ9XG4gICAgICA+XG4gICAgICAgIFByb2plY3RzXG4gICAgICA8L21vdGlvbi5hPlxuICAgICAgPG1vdGlvbi5hXG4gICAgICAgIGluaXRpYWw9e3sgeDogLTcwIH19XG4gICAgICAgIGFuaW1hdGU9e3sgeDogMCB9fVxuICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUsIGRlbGF5OiAwLjMgfX1cbiAgICAgICAgaHJlZj1cIiNleHBlcmllbmNlXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWQoXCJleHBlcmllbmNlXCIpfVxuICAgICAgICBjbGFzc05hbWU9e3NlbGVjdGVkID09PSBcImV4cGVyaWVuY2VcIiA/IHN0eWxlcy5zZWxlY3RlZCA6IFwiXCJ9XG4gICAgICA+XG4gICAgICAgIEV4cC5cbiAgICAgIDwvbW90aW9uLmE+XG4gICAgICA8bW90aW9uLmFcbiAgICAgICAgaW5pdGlhbD17eyB4OiAtNzAgfX1cbiAgICAgICAgYW5pbWF0ZT17eyB4OiAwIH19XG4gICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSwgZGVsYXk6IDAuNCB9fVxuICAgICAgICBocmVmPVwiI2NvbnRhY3RcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZChcImNvbnRhY3RcIil9XG4gICAgICAgIGNsYXNzTmFtZT17c2VsZWN0ZWQgPT09IFwiY29udGFjdFwiID8gc3R5bGVzLnNlbGVjdGVkIDogXCJcIn1cbiAgICAgID5cbiAgICAgICAgQ29udGFjdFxuICAgICAgPC9tb3Rpb24uYT5cbiAgICA8L21vdGlvbi5uYXY+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwibW90aW9uIiwiU2lkZUJhciIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJzZWN0aW9ucyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIm9wdGlvbnMiLCJ0aHJlc2hvbGQiLCJjYWxsYmFjayIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsInRhcmdldCIsImlkIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsInNlY3Rpb24iLCJvYnNlcnZlIiwibmF2IiwiaW5pdGlhbCIsIngiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiY2xhc3NOYW1lIiwic2lkZUJhciIsInNwYW4iLCJsb2dvIiwiYSIsImRlbGF5IiwiaHJlZiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/nav/SideBar.tsx\n"));

/***/ })

});