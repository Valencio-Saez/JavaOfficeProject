/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatehello_react_typescript"]("app",{

/***/ "./node_modules/css-loader/dist/cjs.js!../wwwroot/css/AccessibilityOptions.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!../wwwroot/css/AccessibilityOptions.css ***!
  \*************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("exports = module.exports = __webpack_require__(/*! ../../Frontend/node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.id, \".access ul {\\n    list-style-type: none;\\n  }\\n  \\n  #accessibility-button img {\\n    width: 50px;\\n    height: 50px;\\n  }\\n  \\n  .high-contrast {\\n    color: #f00;\\n    -webkit-filter: invert(100%);\\n    filter: invert(100%);\\n  }\\n  \\n  .grey-hues {\\n    filter: grayscale(100%);\\n  }\\n  \\n  .colorblind {\\n    width: 30%;\\n    border: none;\\n    background-color: transparent;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    cursor: pointer;\\n    margin: -30px;\\n  }\\n  \\n  .colorchange {\\n    width: 100%;\\n    height: 40%;\\n    align-items: center;\\n  }\\n  \\n  body.colorblind-mode {\\n    background-color: #DDCC77;\\n  }\\n  \\n  body.large-text {\\n    font-size: 20px;\\n  }\\n\\n  .black-white-mode {\\n    background-color: black;\\n    color: white;\\n  }\", \"\"]);\n\n\n\n//# sourceURL=webpack://hello-react-typescript/../wwwroot/css/AccessibilityOptions.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/pages/AccessibilityOptions.tsx":
/*!********************************************!*\
  !*** ./src/pages/AccessibilityOptions.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nconst react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n__webpack_require__(/*! ../../../wwwroot/css/AccessibilityOptions.css */ \"../wwwroot/css/AccessibilityOptions.css\");\nconst AccessibilityOptions = () => {\n    (0, react_1.useEffect)(() => {\n        const toggleAccessibilityPanel = () => {\n            const panel = document.getElementById('accessibility-panel');\n            if (panel) {\n                panel.style.display = panel.style.display === 'none' ? 'block' : 'none';\n            }\n        };\n        const toggleColorBlindMode = () => {\n            document.body.classList.toggle('colorblind-mode');\n        };\n        const toggleLargeText = () => {\n            const currentFontSize = parseInt(getComputedStyle(document.body).fontSize);\n            const newFontSize = currentFontSize + 5;\n            document.body.style.fontSize = `${newFontSize}px`;\n        };\n        const toggleSmallText = () => {\n            const currentFontSize = parseInt(getComputedStyle(document.body).fontSize);\n            const newFontSize = currentFontSize - 5;\n            document.body.style.fontSize = `${newFontSize}px`;\n        };\n        const toggleHighContrast = () => {\n            document.body.classList.toggle('high-contrast');\n        };\n        const toggleGreyHues = () => {\n            document.body.classList.toggle('grey-hues');\n        };\n        const toggleBlackWhiteMode = () => {\n            document.body.classList.toggle('black-white-mode');\n        };\n        document.getElementById('accessibility-button')?.addEventListener('click', toggleAccessibilityPanel);\n        document.getElementById('colorblind-button')?.addEventListener('click', toggleColorBlindMode);\n        document.getElementById('largetxt')?.addEventListener('click', toggleLargeText);\n        document.getElementById('smalltxt')?.addEventListener('click', toggleSmallText);\n        document.getElementById('highcontrast')?.addEventListener('click', toggleHighContrast);\n        document.getElementById('greyhues')?.addEventListener('click', toggleGreyHues);\n        document.getElementById('black-white-mode')?.addEventListener('click', toggleBlackWhiteMode);\n        return () => {\n            document.getElementById('accessibility-button')?.removeEventListener('click', toggleAccessibilityPanel);\n            document.getElementById('colorblind-button')?.removeEventListener('click', toggleColorBlindMode);\n            document.getElementById('largetxt')?.removeEventListener('click', toggleLargeText);\n            document.getElementById('smalltxt')?.removeEventListener('click', toggleSmallText);\n            document.getElementById('highcontrast')?.removeEventListener('click', toggleHighContrast);\n            document.getElementById('greyhues')?.removeEventListener('click', toggleGreyHues);\n            document.getElementById('black-white-mode')?.removeEventListener('click', toggleBlackWhiteMode);\n        };\n    }, []);\n    return ((0, jsx_runtime_1.jsxs)(\"div\", { className: \"access\", children: [(0, jsx_runtime_1.jsx)(\"button\", { id: \"accessibility-button\", children: \"Accessibility Options\" }), (0, jsx_runtime_1.jsxs)(\"div\", { id: \"accessibility-panel\", style: { display: 'none' }, children: [(0, jsx_runtime_1.jsx)(\"h2\", { children: \"Accessibility Options\" }), (0, jsx_runtime_1.jsxs)(\"ul\", { children: [(0, jsx_runtime_1.jsx)(\"li\", { children: (0, jsx_runtime_1.jsx)(\"button\", { id: \"colorblind-button\", className: \"colorblind-button\", children: \"Toggle Color Blind Mode\" }) }), (0, jsx_runtime_1.jsx)(\"li\", { children: (0, jsx_runtime_1.jsx)(\"button\", { id: \"largetxt\", className: \"largetxt\", children: \"Toggle Large Text\" }) }), (0, jsx_runtime_1.jsx)(\"li\", { children: (0, jsx_runtime_1.jsx)(\"button\", { id: \"smalltxt\", className: \"smalltxt\", children: \"Toggle Small Text\" }) }), (0, jsx_runtime_1.jsx)(\"li\", { children: (0, jsx_runtime_1.jsx)(\"button\", { id: \"highcontrast\", className: \"highcontrast\", children: \"Toggle High Contrast\" }) }), (0, jsx_runtime_1.jsx)(\"li\", { children: (0, jsx_runtime_1.jsx)(\"button\", { id: \"greyhues\", className: \"greyhues\", children: \"Grey Hues\" }) }), (0, jsx_runtime_1.jsx)(\"li\", { children: (0, jsx_runtime_1.jsx)(\"button\", { id: \"black-white-mode\", className: \"black-white-mode\", children: \"Toggle Black/White Mode\" }) })] })] })] }));\n};\nexports[\"default\"] = AccessibilityOptions;\n\n\n//# sourceURL=webpack://hello-react-typescript/./src/pages/AccessibilityOptions.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("87de11943afdc51c8c46")
/******/ })();
/******/ 
/******/ }
);