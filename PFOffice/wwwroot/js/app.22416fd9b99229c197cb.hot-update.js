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

/***/ "./src/pages/EventDetailsHome.tsx":
/*!****************************************!*\
  !*** ./src/pages/EventDetailsHome.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nconst react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\nconst EventDetailsHome = () => {\n    const { eventId } = (0, react_router_dom_1.useParams)();\n    const [event, setEvent] = (0, react_1.useState)(null);\n    const [loading, setLoading] = (0, react_1.useState)(true);\n    const [error, setError] = (0, react_1.useState)(null);\n    const navigate = (0, react_router_dom_1.useNavigate)();\n    (0, react_1.useEffect)(() => {\n        if (eventId) {\n            fetchEventDetails(eventId);\n        }\n    }, [eventId]);\n    const fetchEventDetails = async (id) => {\n        try {\n            console.log(`Fetching event details for ID: ${id}`); // Debugging\n            const response = await fetch(`/api/v1/Event/${id}`, {\n                headers: {\n                    Authorization: `Bearer ${localStorage.getItem('token')}`,\n                },\n            });\n            if (!response.ok) {\n                throw new Error('Failed to fetch event details');\n            }\n            const data = await response.json();\n            console.log('Event details response:', data); // Debugging\n            setEvent(data);\n        }\n        catch (error) {\n            console.error('Error fetching event details:', error);\n            setError('Failed to fetch event details');\n        }\n        finally {\n            setLoading(false);\n        }\n    };\n    const handleAttend = async () => {\n        try {\n            const response = await fetch('/api/v1/AttendanceModification/AddAttendance', {\n                method: 'POST',\n                headers: {\n                    'Content-Type': 'application/json',\n                    Authorization: `Bearer ${localStorage.getItem('token')}`,\n                },\n                body: JSON.stringify({\n                    eventId: parseInt(eventId),\n                }),\n            });\n            if (!response.ok) {\n                const errorData = await response.json();\n                throw new Error(errorData.message || 'Failed to attend event');\n            }\n            const data = await response.json();\n            alert(`You are now attending the event. Welcome, ${data.username}!`);\n        }\n        catch (error) {\n            console.error('Error attending event:', error);\n            alert(error.message); // Explicitly cast error to Error\n        }\n    };\n    const goBack = () => {\n        navigate(-1);\n    };\n    if (loading) {\n        return (0, jsx_runtime_1.jsx)(\"div\", { children: \"Loading...\" });\n    }\n    if (error) {\n        return (0, jsx_runtime_1.jsx)(\"div\", { children: error });\n    }\n    if (!event) {\n        return (0, jsx_runtime_1.jsx)(\"div\", { children: \"No event found\" });\n    }\n    return ((0, jsx_runtime_1.jsxs)(\"div\", { children: [(0, jsx_runtime_1.jsx)(\"h1\", { children: event.title }), (0, jsx_runtime_1.jsxs)(\"p\", { children: [(0, jsx_runtime_1.jsx)(\"strong\", { children: \"Description:\" }), \" \", event.description] }), (0, jsx_runtime_1.jsxs)(\"p\", { children: [(0, jsx_runtime_1.jsx)(\"strong\", { children: \"Location:\" }), \" \", event.location] }), (0, jsx_runtime_1.jsxs)(\"p\", { children: [(0, jsx_runtime_1.jsx)(\"strong\", { children: \"Event Date:\" }), \" \", new Date(event.eventDate).toLocaleDateString()] }), (0, jsx_runtime_1.jsxs)(\"p\", { children: [(0, jsx_runtime_1.jsx)(\"strong\", { children: \"Start Time:\" }), \" \", event.startTime] }), (0, jsx_runtime_1.jsxs)(\"p\", { children: [(0, jsx_runtime_1.jsx)(\"strong\", { children: \"End Time:\" }), \" \", event.endTime] }), (0, jsx_runtime_1.jsxs)(\"div\", { style: { marginTop: '20px' }, children: [(0, jsx_runtime_1.jsx)(\"button\", { style: { marginRight: '30px' }, onClick: goBack, children: \"Go Back\" }), (0, jsx_runtime_1.jsx)(\"button\", { onClick: handleAttend, children: \"Attend Event\" })] })] }));\n};\nexports[\"default\"] = EventDetailsHome;\n\n\n//# sourceURL=webpack://hello-react-typescript/./src/pages/EventDetailsHome.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e881e1fca3f5162e158b")
/******/ })();
/******/ 
/******/ }
);