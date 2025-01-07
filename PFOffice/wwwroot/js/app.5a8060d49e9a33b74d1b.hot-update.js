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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nconst react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\nconst AccessibilityOptions_1 = __importDefault(__webpack_require__(/*! ./AccessibilityOptions */ \"./src/pages/AccessibilityOptions.tsx\"));\nconst AdminDashboard = () => {\n    const [events, setEvents] = (0, react_1.useState)([]);\n    const navigate = (0, react_router_dom_1.useNavigate)();\n    (0, react_1.useEffect)(() => {\n        checkAdminLoggedIn();\n        fetchEvents();\n    }, []);\n    const checkAdminLoggedIn = async () => {\n        try {\n            const response = await fetch('/api/v1/Login/IsAdminLoggedIn');\n            if (response.ok) {\n                const data = await response.json();\n                if (!data) {\n                    setError('You are not authorized to access the admin dashboard. Redirecting to login...');\n                    setTimeout(() => {\n                        navigate('/login');\n                    }, 3000); // Redirect after 3 seconds\n                }\n            }\n            else {\n                navigate('/');\n            }\n        }\n        catch (error) {\n            console.error('Error checking admin login status:', error);\n            navigate('/');\n        }\n    };\n    const fetchEvents = async () => {\n        try {\n            const response = await fetch('/api/v1/Event/GetAllEvents');\n            if (response.ok) {\n                const data = await response.json();\n                console.log(data);\n                if (data && data.$values && Array.isArray(data.$values)) {\n                    setEvents(data.$values);\n                }\n                else {\n                    console.error('Error: API response is not in the expected format');\n                }\n            }\n            else {\n                console.error('Error fetching events:', response.statusText);\n            }\n        }\n        catch (error) {\n            console.error('Error fetching events:', error);\n        }\n    };\n    const handleEdit = (id) => {\n        navigate(`/edit-event/${id}`);\n    };\n    const handleDelete = async (id) => {\n        if (window.confirm('Are you sure you want to delete this event?')) {\n            try {\n                const response = await fetch(`/api/v1/Event/DeleteEvent/${id}`, {\n                    method: 'DELETE'\n                });\n                if (response.ok) {\n                    fetchEvents();\n                    alert('Event deleted successfully!');\n                }\n                else {\n                    const errorText = await response.text();\n                    alert('Error deleting event: ' + response.statusText + ' ' + response.status + ' ' + errorText);\n                }\n            }\n            catch (error) {\n                alert('Error deleting event: ' + error);\n            }\n        }\n    };\n    const viewAttendees = (id) => {\n        navigate(`/event/${id}/attendees`);\n    };\n    return ((0, jsx_runtime_1.jsxs)(\"div\", { children: [(0, jsx_runtime_1.jsx)(\"h1\", { children: \"Admin Dashboard\" }), (0, jsx_runtime_1.jsx)(\"h2\", { children: \"All Events\" }), (0, jsx_runtime_1.jsx)(\"div\", { className: \"text-right\", children: (0, jsx_runtime_1.jsx)(\"button\", { className: \"btn btn-primary\", onClick: () => navigate('/add-event'), children: \"Add new event\" }) }), (0, jsx_runtime_1.jsxs)(\"table\", { children: [(0, jsx_runtime_1.jsx)(\"thead\", { children: (0, jsx_runtime_1.jsxs)(\"tr\", { children: [(0, jsx_runtime_1.jsx)(\"th\", { children: \"Title\" }), (0, jsx_runtime_1.jsx)(\"th\", { children: \"Description\" }), (0, jsx_runtime_1.jsx)(\"th\", { children: \"Location\" }), (0, jsx_runtime_1.jsx)(\"th\", { children: \"Event Date\" }), (0, jsx_runtime_1.jsx)(\"th\", { children: \"Start Time\" }), (0, jsx_runtime_1.jsx)(\"th\", { children: \"End Time\" }), (0, jsx_runtime_1.jsx)(\"th\", { children: \"Actions\" })] }) }), (0, jsx_runtime_1.jsx)(\"tbody\", { children: events.map(event => ((0, jsx_runtime_1.jsxs)(\"tr\", { children: [(0, jsx_runtime_1.jsx)(\"td\", { children: event.title }), (0, jsx_runtime_1.jsx)(\"td\", { children: event.description }), (0, jsx_runtime_1.jsx)(\"td\", { children: event.location }), (0, jsx_runtime_1.jsx)(\"td\", { children: new Date(event.eventDate).toLocaleDateString() }), (0, jsx_runtime_1.jsx)(\"td\", { children: event.startTime }), (0, jsx_runtime_1.jsx)(\"td\", { children: event.endTime }), (0, jsx_runtime_1.jsxs)(\"td\", { children: [(0, jsx_runtime_1.jsx)(\"button\", { onClick: () => handleEdit(event.eventId), children: \"Edit\" }), (0, jsx_runtime_1.jsx)(\"button\", { onClick: () => handleDelete(event.eventId), children: \"Delete\" }), (0, jsx_runtime_1.jsx)(\"button\", { onClick: () => viewAttendees(event.eventId), children: \"View Attendees\" })] })] }, event.eventId))) })] }), (0, jsx_runtime_1.jsx)(AccessibilityOptions_1.default, {})] }));\n};\nexports[\"default\"] = AdminDashboard;\n\n\n//# sourceURL=webpack://hello-react-typescript/./src/pages/AdminDashboard.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1386d2d87eecb494d05c")
/******/ })();
/******/ 
/******/ }
);