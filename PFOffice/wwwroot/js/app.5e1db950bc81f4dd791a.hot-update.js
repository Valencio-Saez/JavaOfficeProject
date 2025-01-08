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

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nconst React = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst client_1 = __webpack_require__(/*! react-dom/client */ \"./node_modules/react-dom/client.js\");\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\nconst Home_1 = __importDefault(__webpack_require__(/*! ./pages/Home */ \"./src/pages/Home.tsx\"));\nconst AdminDashboard_1 = __importDefault(__webpack_require__(/*! ./pages/AdminDashboard */ \"./src/pages/AdminDashboard.tsx\"));\n// import AdminAddEvent from \"./pages/AdminAddEvent\";\n// import EditEvent from \"./pages/EditEvent\";\n// import EventAttendees from \"./pages/EventAttendees\";\n(0, client_1.createRoot)(document.getElementById('root'))\n    .render((0, jsx_runtime_1.jsx)(React.StrictMode, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: \"/\", element: (0, jsx_runtime_1.jsx)(Home_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: \"/admin\", element: (0, jsx_runtime_1.jsx)(AdminDashboard_1.default, {}) })] }) }) }));\n\n\n//# sourceURL=webpack://hello-react-typescript/./src/index.tsx?");

/***/ }),

/***/ "./src/pages/AdminDashboard.tsx":
/*!**************************************!*\
  !*** ./src/pages/AdminDashboard.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nconst react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\nconst AdminDashboard = () => {\n    const [events, setEvents] = (0, react_1.useState)([]);\n    const [newEvent, setNewEvent] = (0, react_1.useState)({\n        title: '',\n        description: '',\n        eventDate: '',\n        startTime: '',\n        endTime: '',\n        location: ''\n    });\n    const navigate = (0, react_router_dom_1.useNavigate)();\n    (0, react_1.useEffect)(() => {\n        fetchEvents();\n    }, []);\n    const fetchEvents = async () => {\n        try {\n            const response = await fetch('/api/v1/Event/GetAllEvents');\n            if (response.ok) {\n                const data = await response.json();\n                setEvents(data);\n            }\n            else {\n                console.error('Error fetching events:', response.statusText);\n            }\n        }\n        catch (error) {\n            console.error('Error fetching events:', error);\n        }\n    };\n    const handleInputChange = (e) => {\n        const { name, value } = e.target;\n        setNewEvent({ ...newEvent, [name]: value });\n    };\n    const handleSubmit = async (e) => {\n        e.preventDefault();\n        try {\n            const response = await fetch('/api/v1/Event/events', {\n                method: 'POST',\n                headers: {\n                    'Content-Type': 'application/json'\n                },\n                body: JSON.stringify(newEvent)\n            });\n            if (response.ok) {\n                fetchEvents();\n            }\n            else {\n                console.error('Error adding event:', response.statusText);\n            }\n        }\n        catch (error) {\n            console.error('Error adding event:', error);\n        }\n    };\n    return ((0, jsx_runtime_1.jsxs)(\"div\", { children: [(0, jsx_runtime_1.jsx)(\"h1\", { children: \"Admin Dashboard\" }), (0, jsx_runtime_1.jsxs)(\"form\", { onSubmit: handleSubmit, children: [(0, jsx_runtime_1.jsx)(\"input\", { type: \"text\", name: \"title\", value: newEvent.title, onChange: handleInputChange, placeholder: \"Title\" }), (0, jsx_runtime_1.jsx)(\"textarea\", { name: \"description\", value: newEvent.description, onChange: handleInputChange, placeholder: \"Description\" }), (0, jsx_runtime_1.jsx)(\"input\", { type: \"date\", name: \"eventDate\", value: newEvent.eventDate, onChange: handleInputChange }), (0, jsx_runtime_1.jsx)(\"input\", { type: \"time\", name: \"startTime\", value: newEvent.startTime, onChange: handleInputChange }), (0, jsx_runtime_1.jsx)(\"input\", { type: \"time\", name: \"endTime\", value: newEvent.endTime, onChange: handleInputChange }), (0, jsx_runtime_1.jsx)(\"input\", { type: \"text\", name: \"location\", value: newEvent.location, onChange: handleInputChange, placeholder: \"Location\" }), (0, jsx_runtime_1.jsx)(\"button\", { type: \"submit\", children: \"Add Event\" })] }), (0, jsx_runtime_1.jsx)(\"ul\", { children: events.map((event) => ((0, jsx_runtime_1.jsx)(\"li\", { children: event.title }, event.id))) })] }));\n};\nexports[\"default\"] = AdminDashboard;\n\n\n//# sourceURL=webpack://hello-react-typescript/./src/pages/AdminDashboard.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3e991ff0b4577054ffae")
/******/ })();
/******/ 
/******/ }
);