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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nconst ProtectedRoute = ({ children, allowedRole }) => {\n    // Simulating fetching role from session (you can replace this with a real API call or localStorage check)\n    const userRole = sessionStorage.getItem('role'); // Example: \"admin\" or \"user\"\n    if (userRole !== allowedRole) {\n        return (0, jsx_runtime_1.jsx)(\"navigate\", { to: \"/\", replace: true });\n    }\n    return children;\n};\nexports[\"default\"] = ProtectedRoute;\n\n\n//# sourceURL=webpack://hello-react-typescript/./src/ProtectedRoute.tsx?");

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nconst client_1 = __webpack_require__(/*! react-dom/client */ \"./node_modules/react-dom/client.js\");\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\nconst Home_1 = __importDefault(__webpack_require__(/*! ./pages/Home */ \"./src/pages/Home.tsx\"));\nconst AdminDashboard_1 = __importDefault(__webpack_require__(/*! ./pages/AdminDashboard */ \"./src/pages/AdminDashboard.tsx\"));\nconst Login_1 = __importDefault(__webpack_require__(/*! ./pages/Login */ \"./src/pages/Login.tsx\"));\nconst Register_1 = __importDefault(__webpack_require__(/*! ./pages/Register */ \"./src/pages/Register.tsx\"));\nconst ProtectedRoute_1 = __importDefault(__webpack_require__(/*! ./ProtectedRoute */ \"./src/ProtectedRoute.tsx\"));\n(0, client_1.createRoot)(document.getElementById('root'))\n    .render((0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: \"/\", element: (0, jsx_runtime_1.jsx)(Home_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: \"/login\", element: (0, jsx_runtime_1.jsx)(Login_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: \"/register\", element: (0, jsx_runtime_1.jsx)(Register_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: \"/admin\", element: (0, jsx_runtime_1.jsx)(ProtectedRoute_1.default, { allowedRole: \"admin\", children: (0, jsx_runtime_1.jsx)(AdminDashboard_1.default, {}) }) })] }) }));\n\n\n//# sourceURL=webpack://hello-react-typescript/./src/index.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("797d9eede2a41a60b4b0")
/******/ })();
/******/ 
/******/ }
);