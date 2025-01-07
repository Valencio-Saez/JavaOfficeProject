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

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\nconst AdminDashboard_1 = __importDefault(__webpack_require__(/*! ./pages/AdminDashboard */ \"./src/pages/AdminDashboard.tsx\"));\nconst Login_1 = __importDefault(__webpack_require__(/*! ./pages/Login */ \"./src/pages/Login.tsx\"));\nconst PrivateRoute_1 = __importDefault(__webpack_require__(/*! ./pages/PrivateRoute */ \"./src/pages/PrivateRoute.tsx\"));\n// import EditEvent from \"./pages/EditEvent\";\n// import EventAttendees from \"./pages/EventAttendees\";\nconst App = () => {\n    return ((0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: \"/login\", element: (0, jsx_runtime_1.jsx)(Login_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: \"/Home\", element: (0, jsx_runtime_1.jsx)(AdminDashboard_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: \"/admin\", element: (0, jsx_runtime_1.jsx)(PrivateRoute_1.default, { role: \"admin\", children: (0, jsx_runtime_1.jsx)(AdminDashboard_1.default, {}) }) })] }) }));\n};\n\n\n//# sourceURL=webpack://hello-react-typescript/./src/index.tsx?");

/***/ }),

/***/ "./src/pages/PrivateRoute.tsx":
/*!************************************!*\
  !*** ./src/pages/PrivateRoute.tsx ***!
  \************************************/
/***/ (() => {

eval("\n\n\n//# sourceURL=webpack://hello-react-typescript/./src/pages/PrivateRoute.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("794927f59007976e53c6")
/******/ })();
/******/ 
/******/ }
);