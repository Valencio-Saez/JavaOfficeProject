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

/***/ "./src/ProtectedRoute.tsx":
/*!********************************!*\
  !*** ./src/ProtectedRoute.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst ProtectedRoute = ({ children, allowedRole }) => {\n    // Simulating fetching role from session (you can replace this with a real API call or localStorage check)\n    const userRole = sessionStorage.getItem('role'); // Example: \"admin\" or \"user\"\n    if (userRole !== allowedRole) {\n        return navigate;\n    }\n    return children;\n};\nexports[\"default\"] = ProtectedRoute;\n\n\n//# sourceURL=webpack://hello-react-typescript/./src/ProtectedRoute.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ce60496dd8d78590e25a")
/******/ })();
/******/ 
/******/ }
);