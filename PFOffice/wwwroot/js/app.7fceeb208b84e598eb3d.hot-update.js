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

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nconst React = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst client_1 = __webpack_require__(/*! react-dom/client */ \"./node_modules/react-dom/client.js\");\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\nconst Home_1 = __importDefault(__webpack_require__(/*! ./pages/Home */ \"./src/pages/Home.tsx\"));\nconst AdminDashboard_1 = __importDefault(__webpack_require__(/*! ./pages/AdminDashboard */ \"./src/pages/AdminDashboard.tsx\"));\nconst Login_1 = __importDefault(__webpack_require__(/*! ./pages/Login */ \"./src/pages/Login.tsx\"));\nconst AdminAddEvent_1 = __importDefault(__webpack_require__(/*! ./pages/AdminAddEvent */ \"./src/pages/AdminAddEvent.tsx\"));\nconst PrivateRoute_1 = __importDefault(__webpack_require__(/*! ./pages/PrivateRoute */ \"./src/pages/PrivateRoute.tsx\"));\n// import EditEvent from \"./pages/EditEvent\";\n// import EventAttendees from \"./pages/EventAttendees\";\n(0, client_1.createRoot)(document.getElementById('root'))\n    .render((0, jsx_runtime_1.jsx)(React.StrictMode, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: \"/\", element: (0, jsx_runtime_1.jsx)(Home_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: \"/admin\", element: (0, jsx_runtime_1.jsx)(AdminDashboard_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: \"/add-event\", element: (0, jsx_runtime_1.jsx)(AdminAddEvent_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: \"/login\", element: (0, jsx_runtime_1.jsx)(Login_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: \"/admin\", element: (0, jsx_runtime_1.jsx)(PrivateRoute_1.default, { role: \"admin\", children: (0, jsx_runtime_1.jsx)(AdminPage, {}) }) })] }) }) }));\n\n\n//# sourceURL=webpack://hello-react-typescript/./src/index.tsx?");

/***/ }),

/***/ "./src/pages/PrivateRoute.tsx":
/*!************************************!*\
  !*** ./src/pages/PrivateRoute.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\nconst PrivateRoute = ({ children, role }) => {\n    const token = localStorage.getItem('token');\n    // Decode token to check the role (use a library like jwt-decode)\n    const userRole = token ? JSON.parse(atob(token.split('.')[1])).role : null;\n    if (!token || userRole !== role) {\n        // Redirect unauthorized users to /Home\n        return (0, jsx_runtime_1.jsx)(react_router_dom_1.Navigate, { to: \"/Home\", replace: true });\n    }\n    return children;\n};\nexports[\"default\"] = PrivateRoute;\n\n\n//# sourceURL=webpack://hello-react-typescript/./src/pages/PrivateRoute.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("cdae82f13b29a57506bc")
/******/ })();
/******/ 
/******/ }
);