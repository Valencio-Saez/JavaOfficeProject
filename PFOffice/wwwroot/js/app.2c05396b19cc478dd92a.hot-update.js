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

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nconst React = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst client_1 = __webpack_require__(/*! react-dom/client */ \"./node_modules/react-dom/client.js\");\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\nconst Home_1 = __importDefault(__webpack_require__(/*! ./pages/Home */ \"./src/pages/Home.tsx\"));\nconst AdminDashboard_1 = __importDefault(__webpack_require__(/*! ./pages/AdminDashboard */ \"./src/pages/AdminDashboard.tsx\"));\nconst AdminAddEvent_1 = __importDefault(__webpack_require__(/*! ./pages/AdminAddEvent */ \"./src/pages/AdminAddEvent.tsx\"));\n// import EditEvent from \"./pages/EditEvent\";\n// import EventAttendees from \"./pages/EventAttendees\";\nconst EventDetailsHome_1 = __importDefault(__webpack_require__(/*! ./pages/EventDetailsHome */ \"./src/pages/EventDetailsHome.tsx\"));\n(0, client_1.createRoot)(document.getElementById('root'))\n    .render((0, jsx_runtime_1.jsx)(React.StrictMode, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: \"/\", element: (0, jsx_runtime_1.jsx)(Home_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: \"/events/:id\", element: (0, jsx_runtime_1.jsx)(EventDetailsHome_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: \"/admin\", element: (0, jsx_runtime_1.jsx)(AdminDashboard_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: \"/add-event\", element: (0, jsx_runtime_1.jsx)(AdminAddEvent_1.default, {}) })] }) }) }));\n\n\n//# sourceURL=webpack://hello-react-typescript/./src/index.tsx?");

/***/ }),

/***/ "./src/pages/EventDetailsHome.tsx":
/*!****************************************!*\
  !*** ./src/pages/EventDetailsHome.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nconst react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\nconst axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/dist/browser/axios.cjs\"));\nconst EventDetails = () => {\n    const { id } = (0, react_router_dom_1.useParams)();\n    const [event, setEvent] = (0, react_1.useState)(null);\n    (0, react_1.useEffect)(() => {\n        // Haal details van het evenement op\n        axios_1.default.get(`/api/v1/event/${id}`)\n            .then((response) => {\n            setEvent(response.data);\n        })\n            .catch((error) => {\n            console.error('Error fetching event details:', error);\n        });\n    }, [id]);\n    if (!event) {\n        return (0, jsx_runtime_1.jsx)(\"p\", { children: \"Loading...\" });\n    }\n    return ((0, jsx_runtime_1.jsxs)(\"div\", { className: \"container\", children: [(0, jsx_runtime_1.jsx)(\"h1\", { children: event.title }), (0, jsx_runtime_1.jsx)(\"p\", { children: event.description }), (0, jsx_runtime_1.jsx)(\"p\", { children: new Date(event.startDate).toLocaleString() }), (0, jsx_runtime_1.jsxs)(\"p\", { children: [\"Location: \", event.location] })] }));\n};\nexports[\"default\"] = EventDetails;\n\n\n//# sourceURL=webpack://hello-react-typescript/./src/pages/EventDetailsHome.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("48d0b50d069d2f5251ab")
/******/ })();
/******/ 
/******/ }
);