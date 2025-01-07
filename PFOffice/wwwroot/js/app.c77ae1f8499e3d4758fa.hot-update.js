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

/***/ "./src/pages/AdminDashboard.tsx":
/*!**************************************!*\
  !*** ./src/pages/AdminDashboard.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nconst react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\n__webpack_require__(/*! ../../../wwwroot/css/site.css */ \"../wwwroot/css/site.css\");\nconst AdminDashboard = () => {\n    const [events, setEvents] = (0, react_1.useState)([]);\n    const [error, setError] = (0, react_1.useState)(null);\n    const navigate = (0, react_router_dom_1.useNavigate)();\n    (0, react_1.useEffect)(() => {\n        checkAdminLoggedIn();\n        fetchEvents();\n    }, []);\n    const checkAdminLoggedIn = async () => {\n        try {\n            const response = await fetch('/api/v1/Login/IsAdminLoggedIn');\n            if (response.ok) {\n                const data = await response.json();\n                if (!data) {\n                    setError('You are not authorized to access the admin dashboard. Redirecting to login...');\n                    navigate('/login');\n                }\n            }\n            else {\n                setError('You are not authorized to access the admin dashboard. Redirecting to home...');\n                navigate('/');\n            }\n        }\n        catch (error) {\n            console.error('Error checking admin login status:', error);\n            setError('An unexpected error occurred. Redirecting to home...');\n            navigate('/');\n        }\n    };\n    const fetchEvents = async () => {\n        try {\n            const response = await fetch('/api/v1/Event/GetAllEvents');\n            if (response.ok) {\n                const data = await response.json();\n                setEvents(data);\n            }\n            else {\n                console.error('Error fetching events:', response.statusText);\n            }\n        }\n        catch (error) {\n            console.error('Error fetching events:', error);\n        }\n    };\n    return ((0, jsx_runtime_1.jsxs)(\"div\", { children: [(0, jsx_runtime_1.jsx)(\"h1\", { children: \"Admin Dashboard\" }), error && (0, jsx_runtime_1.jsx)(\"p\", { style: { color: 'red' }, children: error }), (0, jsx_runtime_1.jsx)(\"ul\", { children: events.map((event) => ((0, jsx_runtime_1.jsxs)(\"li\", { children: [event.title, \" - \", event.description] }, event.eventId))) })] }));\n};\nexports[\"default\"] = AdminDashboard;\n\n\n//# sourceURL=webpack://hello-react-typescript/./src/pages/AdminDashboard.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7a8ddefa42c10ea9a4b5")
/******/ })();
/******/ 
/******/ }
);