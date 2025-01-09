"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatehello_react_typescript"]("app",{

/***/ "./src/pages/LayoutFeature.tsx":
/*!*************************************!*\
  !*** ./src/pages/LayoutFeature.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nconst react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nconst LayoutFeature = () => {\n    const [isDarkMode, setIsDarkMode] = (0, react_1.useState)(false);\n    (0, react_1.useEffect)(() => {\n        // Check if a theme was previously set in localStorage\n        const savedTheme = localStorage.getItem('theme');\n        if (savedTheme === 'dark') {\n            setIsDarkMode(true);\n            document.body.classList.add('dark-mode');\n        }\n        else {\n            setIsDarkMode(false);\n            document.body.classList.remove('dark-mode');\n        }\n    }, []);\n    const toggleTheme = () => {\n        setIsDarkMode(!isDarkMode);\n        if (!isDarkMode) {\n            document.body.classList.add('dark-mode');\n            localStorage.setItem('theme', 'dark');\n        }\n        else {\n            document.body.classList.remove('dark-mode');\n            localStorage.setItem('theme', 'light');\n        }\n    };\n    return ((0, jsx_runtime_1.jsxs)(\"div\", { children: [(0, jsx_runtime_1.jsx)(\"h1\", { children: \"Change Layout\" }), (0, jsx_runtime_1.jsx)(\"div\", { className: \"theme-selector\", children: (0, jsx_runtime_1.jsxs)(\"button\", { onClick: toggleTheme, children: [\"Switch to \", isDarkMode ? 'Light' : 'Dark', \" Mode\"] }) })] }));\n};\nexports[\"default\"] = LayoutFeature;\n\n\n//# sourceURL=webpack://hello-react-typescript/./src/pages/LayoutFeature.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e4dcd91f62319f85e679")
/******/ })();
/******/ 
/******/ }
);