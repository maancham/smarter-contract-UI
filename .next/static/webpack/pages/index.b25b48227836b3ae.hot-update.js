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

/***/ "./components/SelectChains.js":
/*!************************************!*\
  !*** ./components/SelectChains.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst InputRow = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n        width: \"100%\",\n        justifyContent: \"space-between\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormControl, {\n                id: \"input-1\",\n                maxW: \"45%\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n                        children: \"Input 1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/grayfloyd/Documents/study/UWaterloo/ethglobal/smarter-contract-ui/components/SelectChains.js\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                        placeholder: \"Enter value for Input 1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/grayfloyd/Documents/study/UWaterloo/ethglobal/smarter-contract-ui/components/SelectChains.js\",\n                        lineNumber: 11,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/grayfloyd/Documents/study/UWaterloo/ethglobal/smarter-contract-ui/components/SelectChains.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormControl, {\n                id: \"input-2\",\n                maxW: \"45%\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n                        children: \"Input 2\"\n                    }, void 0, false, {\n                        fileName: \"/Users/grayfloyd/Documents/study/UWaterloo/ethglobal/smarter-contract-ui/components/SelectChains.js\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                        placeholder: \"Enter value for Input 2\"\n                    }, void 0, false, {\n                        fileName: \"/Users/grayfloyd/Documents/study/UWaterloo/ethglobal/smarter-contract-ui/components/SelectChains.js\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/grayfloyd/Documents/study/UWaterloo/ethglobal/smarter-contract-ui/components/SelectChains.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/grayfloyd/Documents/study/UWaterloo/ethglobal/smarter-contract-ui/components/SelectChains.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n_c = InputRow;\nconst SelectChains = ()=>{\n    _s();\n    const [selectedChain, setSelectedChain] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [showPopup, setShowPopup] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleRadioChange = (value)=>{\n        setSelectedChain(value);\n    };\n    const handleCall = ()=>{\n        //TODO: send the oprand \n        fetch(\"https://smarter-server.onrender.com/runScript\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                origin: \"Ethereum\",\n                oprand: \"add\"\n            })\n        }).then((response)=>response.json()).then((data)=>console.log(data));\n        setIsLoading(true);\n        // Simulate loading for 3 seconds\n        setTimeout(()=>{\n            setIsLoading(false);\n            setShowPopup(true);\n        }, 3000);\n    };\n    const handleClosePopup = ()=>{\n        setShowPopup(false);\n    };\n    const isDeployDisabled = selectedChain === null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.VStack, {\n        align: \"left\",\n        width: \"50%\",\n        margin: \"0 auto\",\n        marginTop: \"7rem\",\n        padding: \"1rem\",\n        bg: \"white\",\n        boxShadow: \"md\",\n        spacing: 4,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                fontSize: \"xl\",\n                fontWeight: \"bold\",\n                children: \"Select destination chains\"\n            }, void 0, false, {\n                fileName: \"/Users/grayfloyd/Documents/study/UWaterloo/ethglobal/smarter-contract-ui/components/SelectChains.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.RadioGroup, {\n                onChange: handleRadioChange,\n                value: selectedChain,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.HStack, {\n                        spacing: 12,\n                        marginTop: \"5rem\",\n                        padding: \"1rem\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Radio, {\n                                value: \"fantom\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        src: \"/add.png\",\n                                        alt: \"Add Logo\",\n                                        width: 50,\n                                        height: 50\n                                    }, void 0, false, {\n                                        fileName: \"/Users/grayfloyd/Documents/study/UWaterloo/ethglobal/smarter-contract-ui/components/SelectChains.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    \"Add\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/grayfloyd/Documents/study/UWaterloo/ethglobal/smarter-contract-ui/components/SelectChains.js\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Radio, {\n                                value: \"avalanche\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        src: \"/multiple.png\",\n                                        alt: \"Multiple Logo\",\n                                        width: 50,\n                                        height: 50\n                                    }, void 0, false, {\n                                        fileName: \"/Users/grayfloyd/Documents/study/UWaterloo/ethglobal/smarter-contract-ui/components/SelectChains.js\",\n                                        lineNumber: 78,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    \"Multiple\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/grayfloyd/Documents/study/UWaterloo/ethglobal/smarter-contract-ui/components/SelectChains.js\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Radio, {\n                                value: \"polygon\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        src: \"/subtract.png\",\n                                        alt: \"Subtract Logo\",\n                                        width: 50,\n                                        height: 50\n                                    }, void 0, false, {\n                                        fileName: \"/Users/grayfloyd/Documents/study/UWaterloo/ethglobal/smarter-contract-ui/components/SelectChains.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    \"Subtract\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/grayfloyd/Documents/study/UWaterloo/ethglobal/smarter-contract-ui/components/SelectChains.js\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/grayfloyd/Documents/study/UWaterloo/ethglobal/smarter-contract-ui/components/SelectChains.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(InputRow, {}, void 0, false, {\n                        fileName: \"/Users/grayfloyd/Documents/study/UWaterloo/ethglobal/smarter-contract-ui/components/SelectChains.js\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/grayfloyd/Documents/study/UWaterloo/ethglobal/smarter-contract-ui/components/SelectChains.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                colorScheme: \"blue\",\n                isDisabled: isDeployDisabled,\n                onClick: handleCall,\n                children: \"Call\"\n            }, void 0, false, {\n                fileName: \"/Users/grayfloyd/Documents/study/UWaterloo/ethglobal/smarter-contract-ui/components/SelectChains.js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, undefined),\n            isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                position: \"fixed\",\n                top: \"0\",\n                left: \"0\",\n                width: \"100%\",\n                height: \"100%\",\n                bg: \"rgba(0, 0, 0, 0.5)\",\n                zIndex: \"9999\",\n                display: \"flex\",\n                alignItems: \"center\",\n                justifyContent: \"center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                    textAlign: \"center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Spinner, {\n                            size: \"xl\"\n                        }, void 0, false, {\n                            fileName: \"/Users/grayfloyd/Documents/study/UWaterloo/ethglobal/smarter-contract-ui/components/SelectChains.js\",\n                            lineNumber: 107,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                            mt: 4,\n                            color: \"white\",\n                            fontSize: \"xl\",\n                            children: \"Deploying contract on destination chains...\"\n                        }, void 0, false, {\n                            fileName: \"/Users/grayfloyd/Documents/study/UWaterloo/ethglobal/smarter-contract-ui/components/SelectChains.js\",\n                            lineNumber: 108,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/grayfloyd/Documents/study/UWaterloo/ethglobal/smarter-contract-ui/components/SelectChains.js\",\n                    lineNumber: 106,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/grayfloyd/Documents/study/UWaterloo/ethglobal/smarter-contract-ui/components/SelectChains.js\",\n                lineNumber: 94,\n                columnNumber: 9\n            }, undefined),\n            showPopup && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                position: \"fixed\",\n                top: \"0\",\n                left: \"0\",\n                width: \"100%\",\n                height: \"100%\",\n                bg: \"rgba(0, 0, 0, 0.5)\",\n                zIndex: \"9999\",\n                display: \"flex\",\n                alignItems: \"center\",\n                justifyContent: \"center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                    bg: \"white\",\n                    p: 8,\n                    borderRadius: \"md\",\n                    textAlign: \"center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                            fontSize: \"xl\",\n                            fontWeight: \"bold\",\n                            mb: 4,\n                            children: \"Your contract has been deployed to the following chains:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/grayfloyd/Documents/study/UWaterloo/ethglobal/smarter-contract-ui/components/SelectChains.js\",\n                            lineNumber: 129,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                            children: selectedChains.join(\", \")\n                        }, void 0, false, {\n                            fileName: \"/Users/grayfloyd/Documents/study/UWaterloo/ethglobal/smarter-contract-ui/components/SelectChains.js\",\n                            lineNumber: 132,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                            colorScheme: \"purple\",\n                            mt: 4,\n                            onClick: handleClosePopup,\n                            children: \"Close\"\n                        }, void 0, false, {\n                            fileName: \"/Users/grayfloyd/Documents/study/UWaterloo/ethglobal/smarter-contract-ui/components/SelectChains.js\",\n                            lineNumber: 133,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/grayfloyd/Documents/study/UWaterloo/ethglobal/smarter-contract-ui/components/SelectChains.js\",\n                    lineNumber: 128,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/grayfloyd/Documents/study/UWaterloo/ethglobal/smarter-contract-ui/components/SelectChains.js\",\n                lineNumber: 116,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/grayfloyd/Documents/study/UWaterloo/ethglobal/smarter-contract-ui/components/SelectChains.js\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SelectChains, \"QyzyO5L6gluRqvXPAidItWiZWiY=\");\n_c1 = SelectChains;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SelectChains);\nvar _c, _c1;\n$RefreshReg$(_c, \"InputRow\");\n$RefreshReg$(_c1, \"SelectChains\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LmpzP2I4YTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgUmFkaW8sIFJhZGlvR3JvdXAsIEhTdGFjaywgVlN0YWNrLCBTcGlubmVyIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7IEZsZXgsIElucHV0LCBGb3JtQ29udHJvbCwgRm9ybUxhYmVsIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcblxuY29uc3QgSW5wdXRSb3cgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEZsZXggd2lkdGg9XCIxMDAlXCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCI+XG4gICAgICA8Rm9ybUNvbnRyb2wgaWQ9XCJpbnB1dC0xXCIgbWF4Vz1cIjQ1JVwiPlxuICAgICAgICA8Rm9ybUxhYmVsPklucHV0IDE8L0Zvcm1MYWJlbD5cbiAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiRW50ZXIgdmFsdWUgZm9yIElucHV0IDFcIiAvPlxuICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgIDxGb3JtQ29udHJvbCBpZD1cImlucHV0LTJcIiBtYXhXPVwiNDUlXCI+XG4gICAgICAgIDxGb3JtTGFiZWw+SW5wdXQgMjwvRm9ybUxhYmVsPlxuICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJFbnRlciB2YWx1ZSBmb3IgSW5wdXQgMlwiIC8+XG4gICAgICA8L0Zvcm1Db250cm9sPlxuICAgIDwvRmxleD5cbiAgKTtcbn07XG5cbmNvbnN0IFNlbGVjdENoYWlucyA9ICgpID0+IHtcbiAgY29uc3QgW3NlbGVjdGVkQ2hhaW4sIHNldFNlbGVjdGVkQ2hhaW5dID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzaG93UG9wdXAsIHNldFNob3dQb3B1cF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlUmFkaW9DaGFuZ2UgPSAodmFsdWUpID0+IHtcbiAgICBzZXRTZWxlY3RlZENoYWluKHZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDYWxsID0gKCkgPT4ge1xuICAgIC8vVE9ETzogc2VuZCB0aGUgb3ByYW5kIFxuICAgIGZldGNoKCdodHRwczovL3NtYXJ0ZXItc2VydmVyLm9ucmVuZGVyLmNvbS9ydW5TY3JpcHQnLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBvcmlnaW46ICdFdGhlcmV1bScsXG4gICAgICAgIG9wcmFuZDogJ2FkZCcsXG4gICAgfSksXG59KVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChkYXRhKSA9PiBjb25zb2xlLmxvZyhkYXRhKSk7XG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuXG4gICAgLy8gU2ltdWxhdGUgbG9hZGluZyBmb3IgMyBzZWNvbmRzXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgc2V0U2hvd1BvcHVwKHRydWUpO1xuICAgIH0sIDMwMDApO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsb3NlUG9wdXAgPSAoKSA9PiB7XG4gICAgc2V0U2hvd1BvcHVwKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBpc0RlcGxveURpc2FibGVkID0gc2VsZWN0ZWRDaGFpbiA9PT0gbnVsbDtcblxuICByZXR1cm4gKFxuICAgIDxWU3RhY2tcbiAgICAgIGFsaWduPVwibGVmdFwiXG4gICAgICB3aWR0aD1cIjUwJVwiXG4gICAgICBtYXJnaW49XCIwIGF1dG9cIlxuICAgICAgbWFyZ2luVG9wPVwiN3JlbVwiXG4gICAgICBwYWRkaW5nPVwiMXJlbVwiXG4gICAgICBiZz1cIndoaXRlXCJcbiAgICAgIGJveFNoYWRvdz1cIm1kXCJcbiAgICAgIHNwYWNpbmc9ezR9XG4gICAgPlxuICAgICAgPEJveCBmb250U2l6ZT1cInhsXCIgZm9udFdlaWdodD1cImJvbGRcIj5cbiAgICAgICAgU2VsZWN0IGRlc3RpbmF0aW9uIGNoYWluc1xuICAgICAgPC9Cb3g+XG4gICAgICA8UmFkaW9Hcm91cCBvbkNoYW5nZT17aGFuZGxlUmFkaW9DaGFuZ2V9IHZhbHVlPXtzZWxlY3RlZENoYWlufT5cbiAgICAgICAgPEhTdGFjayBzcGFjaW5nPXsxMn0gbWFyZ2luVG9wPVwiNXJlbVwiIHBhZGRpbmc9XCIxcmVtXCI+XG4gICAgICAgICAgPFJhZGlvIHZhbHVlPVwiZmFudG9tXCI+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2FkZC5wbmdcIiBhbHQ9XCJBZGQgTG9nb1wiIHdpZHRoPXs1MH0gaGVpZ2h0PXs1MH0gLz5cbiAgICAgICAgICAgIEFkZFxuICAgICAgICAgIDwvUmFkaW8+XG4gICAgICAgICAgPFJhZGlvIHZhbHVlPVwiYXZhbGFuY2hlXCI+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL211bHRpcGxlLnBuZ1wiIGFsdD1cIk11bHRpcGxlIExvZ29cIiB3aWR0aD17NTB9IGhlaWdodD17NTB9IC8+XG4gICAgICAgICAgICBNdWx0aXBsZVxuICAgICAgICAgIDwvUmFkaW8+XG4gICAgICAgICAgPFJhZGlvIHZhbHVlPVwicG9seWdvblwiPlxuICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9zdWJ0cmFjdC5wbmdcIiBhbHQ9XCJTdWJ0cmFjdCBMb2dvXCIgd2lkdGg9ezUwfSBoZWlnaHQ9ezUwfSAvPlxuICAgICAgICAgICAgU3VidHJhY3RcbiAgICAgICAgICA8L1JhZGlvPlxuICAgICAgICA8L0hTdGFjaz5cbiAgICAgICAgPElucHV0Um93PjwvSW5wdXRSb3c+XG4gICAgICA8L1JhZGlvR3JvdXA+XG4gICAgICA8QnV0dG9uIGNvbG9yU2NoZW1lPVwiYmx1ZVwiIGlzRGlzYWJsZWQ9e2lzRGVwbG95RGlzYWJsZWR9IG9uQ2xpY2s9e2hhbmRsZUNhbGx9PlxuICAgICAgICBDYWxsXG4gICAgICA8L0J1dHRvbj5cblxuICAgICAgXG4gICAgICB7aXNMb2FkaW5nICYmIChcbiAgICAgICAgPEJveFxuICAgICAgICAgIHBvc2l0aW9uPVwiZml4ZWRcIlxuICAgICAgICAgIHRvcD1cIjBcIlxuICAgICAgICAgIGxlZnQ9XCIwXCJcbiAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgIGJnPVwicmdiYSgwLCAwLCAwLCAwLjUpXCJcbiAgICAgICAgICB6SW5kZXg9XCI5OTk5XCJcbiAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgPEJveCB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgIDxTcGlubmVyIHNpemU9XCJ4bFwiIC8+XG4gICAgICAgICAgICA8Qm94IG10PXs0fSBjb2xvcj1cIndoaXRlXCIgZm9udFNpemU9XCJ4bFwiPlxuICAgICAgICAgICAgICBEZXBsb3lpbmcgY29udHJhY3Qgb24gZGVzdGluYXRpb24gY2hhaW5zLi4uXG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICApfVxuXG4gICAgICB7c2hvd1BvcHVwICYmIChcbiAgICAgICAgPEJveFxuICAgICAgICAgIHBvc2l0aW9uPVwiZml4ZWRcIlxuICAgICAgICAgIHRvcD1cIjBcIlxuICAgICAgICAgIGxlZnQ9XCIwXCJcbiAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgIGJnPVwicmdiYSgwLCAwLCAwLCAwLjUpXCJcbiAgICAgICAgICB6SW5kZXg9XCI5OTk5XCJcbiAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgPEJveCBiZz1cIndoaXRlXCIgcD17OH0gYm9yZGVyUmFkaXVzPVwibWRcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgIDxCb3ggZm9udFNpemU9XCJ4bFwiIGZvbnRXZWlnaHQ9XCJib2xkXCIgbWI9ezR9PlxuICAgICAgICAgICAgICBZb3VyIGNvbnRyYWN0IGhhcyBiZWVuIGRlcGxveWVkIHRvIHRoZSBmb2xsb3dpbmcgY2hhaW5zOlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8Qm94PntzZWxlY3RlZENoYWlucy5qb2luKFwiLCBcIil9PC9Cb3g+XG4gICAgICAgICAgICA8QnV0dG9uIGNvbG9yU2NoZW1lPVwicHVycGxlXCIgbXQ9ezR9IG9uQ2xpY2s9e2hhbmRsZUNsb3NlUG9wdXB9PlxuICAgICAgICAgICAgICBDbG9zZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgICAgKX1cblxuICAgIDwvVlN0YWNrPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0Q2hhaW5zOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkJveCIsIkJ1dHRvbiIsIlJhZGlvIiwiUmFkaW9Hcm91cCIsIkhTdGFjayIsIlZTdGFjayIsIlNwaW5uZXIiLCJJbWFnZSIsIkZsZXgiLCJJbnB1dCIsIkZvcm1Db250cm9sIiwiRm9ybUxhYmVsIiwiSW5wdXRSb3ciLCJ3aWR0aCIsImp1c3RpZnlDb250ZW50IiwiaWQiLCJtYXhXIiwicGxhY2Vob2xkZXIiLCJTZWxlY3RDaGFpbnMiLCJzZWxlY3RlZENoYWluIiwic2V0U2VsZWN0ZWRDaGFpbiIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInNob3dQb3B1cCIsInNldFNob3dQb3B1cCIsImhhbmRsZVJhZGlvQ2hhbmdlIiwidmFsdWUiLCJoYW5kbGVDYWxsIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvcmlnaW4iLCJvcHJhbmQiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzZXRUaW1lb3V0IiwiaGFuZGxlQ2xvc2VQb3B1cCIsImlzRGVwbG95RGlzYWJsZWQiLCJhbGlnbiIsIm1hcmdpbiIsIm1hcmdpblRvcCIsInBhZGRpbmciLCJiZyIsImJveFNoYWRvdyIsInNwYWNpbmciLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJvbkNoYW5nZSIsInNyYyIsImFsdCIsImhlaWdodCIsImNvbG9yU2NoZW1lIiwiaXNEaXNhYmxlZCIsIm9uQ2xpY2siLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ6SW5kZXgiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsInRleHRBbGlnbiIsInNpemUiLCJtdCIsImNvbG9yIiwicCIsImJvcmRlclJhZGl1cyIsIm1iIiwic2VsZWN0ZWRDaGFpbnMiLCJqb2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SelectChains.js\n"));

/***/ })

});