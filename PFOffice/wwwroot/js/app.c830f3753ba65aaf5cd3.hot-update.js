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

/***/ "./src/pages/PrivateRoute.tsx":
/*!************************************!*\
  !*** ./src/pages/PrivateRoute.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\nconst PrivateRoute = ({ children, role }) => {\n    const token = localStorage.getItem('token');\n    // Decode token to check the role (use a library like jwt-decode)\n    const userRole = token ? JSON.parse(atob(token.split('.')[1])).role : null;\n    // console.log(userRole);\n    if (!token || userRole !== role) {\n        // Redirect unauthorized users to /Home\n        return (0, jsx_runtime_1.jsx)(react_router_dom_1.Navigate, { to: \"/\", replace: true });\n    }\n    return children;\n};\nexports[\"default\"] = PrivateRoute;\n\n\n//# sourceURL=webpack://hello-react-typescript/./src/pages/PrivateRoute.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c2581a328c5c2022675b")
/******/ })();
/******/ 
/******/ }
);