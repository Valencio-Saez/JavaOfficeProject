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

/***/ "./src/pages/UserPage.tsx":
/*!********************************!*\
  !*** ./src/pages/UserPage.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nconst react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\nconst UserPage = () => {\n    const [events, setEvents] = (0, react_1.useState)([]);\n    const navigate = (0, react_router_dom_1.useNavigate)();\n    (0, react_1.useEffect)(() => {\n        fetchEvents();\n    }, []);\n    const fetchEvents = async () => {\n        try {\n            const response = await fetch('/api/v1/Event/GetAllEvents', {\n                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },\n            });\n            const data = await response.json();\n            console.log('API response:', data); // Debugging\n            if (data && data.$values && Array.isArray(data.$values)) {\n                const now = new Date();\n                const futureEvents = data.$values.filter((event) => {\n                    const eventDateTime = new Date(`${event.eventDate}T${event.startTime}`);\n                    return eventDateTime > now;\n                });\n                console.log('Filtered events:', futureEvents); // Debugging\n                setEvents(futureEvents);\n            }\n            else {\n                console.error('Unexpected API response format:', data);\n            }\n        }\n        catch (error) {\n            console.error('Error fetching events:', error);\n        }\n    };\n    const handleEventClick = (id) => {\n        console.log(`Navigating to event details for event ID: ${id}`); // Debugging\n        navigate(`/events/${id}`);\n    };\n    const handleLogout = () => {\n        console.log('Logging out'); // Debugging\n        localStorage.removeItem('token');\n        navigate('/');\n    };\n    return ((0, jsx_runtime_1.jsxs)(\"div\", { children: [(0, jsx_runtime_1.jsx)(\"h1\", { children: \"Events\" }), (0, jsx_runtime_1.jsx)(\"button\", { onClick: handleLogout, children: \"Log Out\" }), (0, jsx_runtime_1.jsxs)(\"table\", { children: [(0, jsx_runtime_1.jsx)(\"thead\", { children: (0, jsx_runtime_1.jsxs)(\"tr\", { children: [(0, jsx_runtime_1.jsx)(\"th\", { children: \"Title\" }), (0, jsx_runtime_1.jsx)(\"th\", { children: \"Event Date\" }), (0, jsx_runtime_1.jsx)(\"th\", { children: \"Start Time\" }), (0, jsx_runtime_1.jsx)(\"th\", { children: \"End Time\" }), (0, jsx_runtime_1.jsx)(\"th\", { children: \"Actions\" })] }) }), (0, jsx_runtime_1.jsx)(\"tbody\", { children: events.map((event) => ((0, jsx_runtime_1.jsxs)(\"tr\", { children: [(0, jsx_runtime_1.jsx)(\"td\", { children: event.title }), (0, jsx_runtime_1.jsx)(\"td\", { children: new Date(event.eventDate).toLocaleDateString() }), (0, jsx_runtime_1.jsx)(\"td\", { children: event.startTime }), (0, jsx_runtime_1.jsx)(\"td\", { children: event.endTime }), (0, jsx_runtime_1.jsx)(\"td\", { children: (0, jsx_runtime_1.jsx)(\"button\", { onClick: () => handleEventClick(event.eventId), children: \"View Details\" }) })] }, event.eventId))) })] })] }));\n};\nexports[\"default\"] = UserPage;\n\n\n//# sourceURL=webpack://hello-react-typescript/./src/pages/UserPage.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5a56b68bc35bd751b1d3")
/******/ })();
/******/ 
/******/ }
);