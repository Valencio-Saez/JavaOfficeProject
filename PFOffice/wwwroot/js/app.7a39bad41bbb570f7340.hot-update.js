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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\nconst react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nconst axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/dist/browser/axios.cjs\"));\nconst EventDetailsHome = () => {\n    const { eventId } = (0, react_router_dom_1.useParams)(); // Haal het eventId uit de route\n    const [event, setEvent] = (0, react_1.useState)(null);\n    const [loading, setLoading] = (0, react_1.useState)(true); // Nieuwe state om te beheren of we nog laden\n    const navigate = (0, react_router_dom_1.useNavigate)();\n    (0, react_1.useEffect)(() => {\n        if (eventId) {\n            fetchEventDetails(eventId);\n        }\n    }, [eventId]);\n    const fetchEventDetails = async (id) => {\n        try {\n            console.log(`Fetching event details for ID: ${id}`); // Debugging\n            const response = await axios_1.default.get(`/api/v1/Event/${id}`);\n            console.log('Event details response:', response.data); // Debugging\n            setEvent(response.data); // Stel het specifieke evenement in\n        }\n        catch (error) {\n            console.error('Error fetching event details:', error);\n            alert('Failed to fetch event details');\n        }\n        finally {\n            setLoading(false); // Stop met laden, ongeacht succes of fout\n        }\n    };\n    const goBack = () => {\n        navigate(-1); // Ga terug naar de vorige pagina\n    };\n    const goToAttendancePage = () => {\n        navigate(`/events/${eventId}/attend`); // Verwijst naar een nieuwe pagina voor aanwezigheid\n    };\n    if (loading) {\n        return (0, jsx_runtime_1.jsx)(\"p\", { children: \"Loading event details...\" }); // Tonen zolang we aan het laden zijn\n    }\n    if (!event) {\n        return (0, jsx_runtime_1.jsx)(\"p\", { children: \"No event details found for this ID.\" }); // Tonen als er geen data is\n    }\n    return ((0, jsx_runtime_1.jsxs)(\"div\", { children: [(0, jsx_runtime_1.jsx)(\"h1\", { children: \"Event Details\" }), (0, jsx_runtime_1.jsxs)(\"p\", { children: [(0, jsx_runtime_1.jsx)(\"strong\", { children: \"Title:\" }), \" \", event.title] }), (0, jsx_runtime_1.jsxs)(\"p\", { children: [(0, jsx_runtime_1.jsx)(\"strong\", { children: \"Description:\" }), \" \", event.description] }), (0, jsx_runtime_1.jsxs)(\"p\", { children: [(0, jsx_runtime_1.jsx)(\"strong\", { children: \"Location:\" }), \" \", event.location] }), (0, jsx_runtime_1.jsxs)(\"p\", { children: [(0, jsx_runtime_1.jsx)(\"strong\", { children: \"Event Date:\" }), \" \", new Date(event.eventDate).toLocaleDateString()] }), (0, jsx_runtime_1.jsxs)(\"p\", { children: [(0, jsx_runtime_1.jsx)(\"strong\", { children: \"Start Time:\" }), \" \", event.startTime] }), (0, jsx_runtime_1.jsxs)(\"p\", { children: [(0, jsx_runtime_1.jsx)(\"strong\", { children: \"End Time:\" }), \" \", event.endTime] }), (0, jsx_runtime_1.jsxs)(\"div\", { style: { marginTop: '20px' }, children: [(0, jsx_runtime_1.jsx)(\"button\", { style: { marginRight: '30px' }, onClick: goBack, children: \"Go Back\" }), (0, jsx_runtime_1.jsx)(\"button\", { onClick: goToAttendancePage, children: \"Attend Event\" })] })] }));\n};\nexports[\"default\"] = EventDetailsHome;\n\n\n//# sourceURL=webpack://hello-react-typescript/./src/pages/EventDetailsHome.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a2c572017d88fe34237f")
/******/ })();
/******/ 
/******/ }
);