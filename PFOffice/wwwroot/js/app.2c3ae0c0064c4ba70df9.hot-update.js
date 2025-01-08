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

/***/ "./src/pages/Home.tsx":
/*!****************************!*\
  !*** ./src/pages/Home.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\nconst Home = () => {\n    const navigate = (0, react_router_dom_1.useNavigate)();\n    const goToLogin = () => {\n        navigate('/login');\n    };\n    const goToRegister = () => {\n        navigate('/register');\n    };\n    return ((0, jsx_runtime_1.jsxs)(\"div\", { children: [(0, jsx_runtime_1.jsx)(\"h1\", { children: \"Welcome to the Event Management System\" }), (0, jsx_runtime_1.jsx)(\"button\", { onClick: goToLogin, children: \"Log In\" }), (0, jsx_runtime_1.jsx)(\"button\", { onClick: goToRegister, children: \"Register\" })] }));\n};\nexports[\"default\"] = Home;\n\n\n//# sourceURL=webpack://hello-react-typescript/./src/pages/Home.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("792d3ff9b8cd9253f657")
/******/ })();
/******/ 
/******/ }
);