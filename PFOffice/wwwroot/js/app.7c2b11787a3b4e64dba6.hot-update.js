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

/***/ "./src/pages/Home.tsx":
/*!****************************!*\
  !*** ./src/pages/Home.tsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\nconst react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nconst axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/dist/browser/axios.cjs\"));\nconst Home = () => {\n    const [events, setEvents] = (0, react_1.useState)([]);\n    const navigate = (0, react_router_dom_1.useNavigate)();\n    (0, react_1.useEffect)(() => {\n        checkLoginStatus();\n    }, []);\n    const checkLoginStatus = async () => {\n        try {\n            const response = await axios_1.default.get('/api/v1/Login/IsUserLoggedIn', {\n                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },\n            });\n            if (!response.data.IsLoggedIn) {\n                navigate('/login'); // Niet-ingelogd: doorsturen naar de loginpagina\n            }\n            else {\n                fetchEvents(); // Ingelogd: haal evenementen op\n            }\n        }\n        catch (error) {\n            console.error('Error checking login status:', error);\n            navigate('/login'); // Bij een fout: doorsturen naar de loginpagina\n        }\n    };\n    const fetchEvents = async () => {\n        try {\n            const response = await axios_1.default.get('/api/v1/Event/GetAllEvents');\n            const futureEvents = response.data.filter((event) => new Date(event.startDate) > new Date());\n            setEvents(futureEvents);\n        }\n        catch (error) {\n            console.error('Error fetching events:', error);\n        }\n    };\n    const handleEventClick = (id) => {\n        navigate(`/events/${id}`); // Navigeren naar de detailpagina van een evenement\n    };\n    const goToAdminDashboard = () => {\n        navigate('/admin');\n    };\n    return ((0, jsx_runtime_1.jsxs)(\"div\", { children: [(0, jsx_runtime_1.jsx)(\"h1\", { children: \"Upcoming Events\" }), (0, jsx_runtime_1.jsxs)(\"table\", { children: [(0, jsx_runtime_1.jsx)(\"thead\", { children: (0, jsx_runtime_1.jsxs)(\"tr\", { children: [(0, jsx_runtime_1.jsx)(\"th\", { children: \"Title\" }), (0, jsx_runtime_1.jsx)(\"th\", { children: \"Description\" }), (0, jsx_runtime_1.jsx)(\"th\", { children: \"Date\" }), (0, jsx_runtime_1.jsx)(\"th\", { children: \"Actions\" })] }) }), (0, jsx_runtime_1.jsx)(\"tbody\", { children: events.map((event) => ((0, jsx_runtime_1.jsxs)(\"tr\", { children: [(0, jsx_runtime_1.jsx)(\"td\", { children: event.title }), (0, jsx_runtime_1.jsx)(\"td\", { children: event.description }), (0, jsx_runtime_1.jsx)(\"td\", { children: new Date(event.startDate).toLocaleString() }), (0, jsx_runtime_1.jsx)(\"td\", { children: (0, jsx_runtime_1.jsx)(\"button\", { onClick: () => handleEventClick(event.id), children: \"View Details\" }) })] }, event.id))) })] })] }));\n};\nexports[\"default\"] = Home;\n\n\n//# sourceURL=webpack://hello-react-typescript/./src/pages/Home.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b501c36256d87749dbe2")
/******/ })();
/******/ 
/******/ }
);