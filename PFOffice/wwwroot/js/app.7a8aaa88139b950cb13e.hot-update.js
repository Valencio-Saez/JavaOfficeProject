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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nconst react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\nconst AccessibilityOptions_1 = __importDefault(__webpack_require__(/*! ./AccessibilityOptions */ \"./src/pages/AccessibilityOptions.tsx\"));\nconst UserPage = () => {\n    const [events, setEvents] = (0, react_1.useState)([]);\n    const [pastEvents, setPastEvents] = (0, react_1.useState)([]);\n    const [userEvents, setUserEvents] = (0, react_1.useState)([]);\n    const [isAuthenticated, setIsAuthenticated] = (0, react_1.useState)(null);\n    const navigate = (0, react_router_dom_1.useNavigate)();\n    (0, react_1.useEffect)(() => {\n        checkUserLoggedIn();\n    }, []);\n    const checkUserLoggedIn = async () => {\n        try {\n            const response = await fetch('/api/v1/Login/IsUserLoggedIn', {\n                headers: {\n                    Authorization: `Bearer ${localStorage.getItem('token')}`,\n                },\n            });\n            const data = await response.json();\n            setIsAuthenticated(data);\n            if (!data) {\n                navigate('/');\n            }\n            else {\n                fetchEvents();\n                fetchUserEvents();\n            }\n        }\n        catch (error) {\n            console.error('Error checking user login status:', error);\n            navigate('/');\n        }\n    };\n    const fetchEvents = async () => {\n        try {\n            const response = await fetch('/api/v1/Event/GetAllEvents', {\n                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },\n            });\n            const data = await response.json();\n            if (data && data.$values && Array.isArray(data.$values)) {\n                const now = new Date();\n                const futureEvents = data.$values.filter((event) => {\n                    const eventDateTime = new Date(`${event.eventDate}T${event.startTime}`);\n                    return eventDateTime > now;\n                });\n                const pastEvents = data.$values.filter((event) => {\n                    const eventDateTime = new Date(`${event.eventDate}T${event.startTime}`);\n                    return eventDateTime <= now;\n                });\n                setEvents(futureEvents);\n                setPastEvents(pastEvents);\n            }\n            else {\n                console.error('Unexpected API response format:', data);\n            }\n        }\n        catch (error) {\n            console.error('Error fetching events:', error);\n        }\n    };\n    const fetchUserEvents = async () => {\n        try {\n            const response = await fetch('/api/v1/Event/GetUserEvents', {\n                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },\n            });\n            const data = await response.json();\n            if (data && data.$values && Array.isArray(data.$values)) {\n                setUserEvents(data.$values);\n            }\n            else {\n                console.error('Unexpected API response format:', data);\n            }\n        }\n        catch (error) {\n            console.error('Error fetching user events:', error);\n        }\n    };\n    const handleEventClick = (id) => {\n        navigate(`/events/${id}`);\n    };\n    const handleLogout = () => {\n        localStorage.removeItem('token');\n        navigate('/');\n    };\n    if (isAuthenticated === null) {\n        return (0, jsx_runtime_1.jsx)(\"div\", { children: \"Loading...\" });\n    }\n    return ((0, jsx_runtime_1.jsxs)(\"div\", { children: [(0, jsx_runtime_1.jsx)(\"h1\", { children: \"Events\" }), (0, jsx_runtime_1.jsx)(\"button\", { onClick: handleLogout, children: \"Log Out\" }), (0, jsx_runtime_1.jsxs)(\"div\", { style: { display: 'flex', justifyContent: 'space-between' }, children: [(0, jsx_runtime_1.jsxs)(\"div\", { style: { flex: 1, marginRight: '20px' }, children: [(0, jsx_runtime_1.jsx)(\"h2\", { children: \"All Events\" }), (0, jsx_runtime_1.jsxs)(\"table\", { children: [(0, jsx_runtime_1.jsx)(\"thead\", { children: (0, jsx_runtime_1.jsxs)(\"tr\", { children: [(0, jsx_runtime_1.jsx)(\"th\", { children: \"Title\" }), (0, jsx_runtime_1.jsx)(\"th\", { children: \"Event Date\" }), (0, jsx_runtime_1.jsx)(\"th\", { children: \"Start Time\" }), (0, jsx_runtime_1.jsx)(\"th\", { children: \"End Time\" }), (0, jsx_runtime_1.jsx)(\"th\", { children: \"Actions\" })] }) }), (0, jsx_runtime_1.jsx)(\"tbody\", { children: events.map((event) => ((0, jsx_runtime_1.jsxs)(\"tr\", { children: [(0, jsx_runtime_1.jsx)(\"td\", { children: event.title }), (0, jsx_runtime_1.jsx)(\"td\", { children: new Date(event.eventDate).toLocaleDateString() }), (0, jsx_runtime_1.jsx)(\"td\", { children: event.startTime }), (0, jsx_runtime_1.jsx)(\"td\", { children: event.endTime }), (0, jsx_runtime_1.jsx)(\"td\", { children: (0, jsx_runtime_1.jsx)(\"button\", { onClick: () => handleEventClick(event.eventId), children: \"View Details\" }) })] }, event.eventId))) })] })] }), (0, jsx_runtime_1.jsxs)(\"div\", { style: { flex: 1 }, children: [(0, jsx_runtime_1.jsx)(\"h2\", { children: \"Attended Events\" }), (0, jsx_runtime_1.jsxs)(\"table\", { children: [(0, jsx_runtime_1.jsx)(\"thead\", { children: (0, jsx_runtime_1.jsxs)(\"tr\", { children: [(0, jsx_runtime_1.jsx)(\"th\", { children: \"Title\" }), (0, jsx_runtime_1.jsx)(\"th\", { children: \"Event Date\" }), (0, jsx_runtime_1.jsx)(\"th\", { children: \"Start Time\" }), (0, jsx_runtime_1.jsx)(\"th\", { children: \"End Time\" }), (0, jsx_runtime_1.jsx)(\"th\", { children: \"Actions\" })] }) }), (0, jsx_runtime_1.jsx)(\"tbody\", { children: userEvents.map((event) => ((0, jsx_runtime_1.jsxs)(\"tr\", { children: [(0, jsx_runtime_1.jsx)(\"td\", { children: event.title }), (0, jsx_runtime_1.jsx)(\"td\", { children: new Date(event.eventDate).toLocaleDateString() }), (0, jsx_runtime_1.jsx)(\"td\", { children: event.startTime }), (0, jsx_runtime_1.jsx)(\"td\", { children: event.endTime }), (0, jsx_runtime_1.jsx)(\"td\", { children: (0, jsx_runtime_1.jsx)(\"button\", { onClick: () => handleEventClick(event.eventId), children: \"View Details\" }) })] }, event.eventId))) })] })] }), (0, jsx_runtime_1.jsxs)(\"div\", { style: { flex: 1, marginLeft: '20px' }, children: [(0, jsx_runtime_1.jsx)(\"h2\", { children: \"Past Events\" }), (0, jsx_runtime_1.jsxs)(\"table\", { children: [(0, jsx_runtime_1.jsx)(\"thead\", { children: (0, jsx_runtime_1.jsxs)(\"tr\", { children: [(0, jsx_runtime_1.jsx)(\"th\", { children: \"Title\" }), (0, jsx_runtime_1.jsx)(\"th\", { children: \"Event Date\" }), (0, jsx_runtime_1.jsx)(\"th\", { children: \"Start Time\" }), (0, jsx_runtime_1.jsx)(\"th\", { children: \"End Time\" }), (0, jsx_runtime_1.jsx)(\"th\", { children: \"Actions\" })] }) }), (0, jsx_runtime_1.jsx)(\"tbody\", { children: pastEvents.map((event) => ((0, jsx_runtime_1.jsxs)(\"tr\", { children: [(0, jsx_runtime_1.jsx)(\"td\", { children: event.title }), (0, jsx_runtime_1.jsx)(\"td\", { children: new Date(event.eventDate).toLocaleDateString() }), (0, jsx_runtime_1.jsx)(\"td\", { children: event.startTime }), (0, jsx_runtime_1.jsx)(\"td\", { children: event.endTime }), (0, jsx_runtime_1.jsx)(\"td\", { children: (0, jsx_runtime_1.jsx)(\"button\", { onClick: () => handleEventClick(event.eventId), children: \"View Details\" }) })] }, event.eventId))) })] })] })] }), (0, jsx_runtime_1.jsx)(AccessibilityOptions_1.default, {})] }));\n};\nexports[\"default\"] = UserPage;\n\n\n//# sourceURL=webpack://hello-react-typescript/./src/pages/UserPage.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b16e14da488f170fdb60")
/******/ })();
/******/ 
/******/ }
);