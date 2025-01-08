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

/***/ "./src/pages/AdminAddEvent.tsx":
/*!*************************************!*\
  !*** ./src/pages/AdminAddEvent.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nconst react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\nconst AccessibilityOptions_1 = __importDefault(__webpack_require__(/*! ./AccessibilityOptions */ \"./src/pages/AccessibilityOptions.tsx\"));\nconst AdminAddEvent = () => {\n    const [title, setTitle] = (0, react_1.useState)('');\n    const [description, setDescription] = (0, react_1.useState)('');\n    const [eventDate, setEventDate] = (0, react_1.useState)('');\n    const [startTime, setStartTime] = (0, react_1.useState)('');\n    const [endTime, setEndTime] = (0, react_1.useState)('');\n    const [location, setLocation] = (0, react_1.useState)('');\n    const [error, setError] = (0, react_1.useState)(null);\n    const [alertShown, setAlertShown] = (0, react_1.useState)(false);\n    const navigate = (0, react_router_dom_1.useNavigate)();\n    (0, react_1.useEffect)(() => {\n        checkAdminLoggedIn();\n    }, []);\n    const handleSubmit = async (e) => {\n        e.preventDefault();\n        try {\n            const response = await fetch('/api/v1/Event/events', {\n                method: 'POST',\n                headers: {\n                    'Content-Type': 'application/json'\n                },\n                body: JSON.stringify({\n                    title,\n                    description,\n                    eventDate,\n                    startTime,\n                    endTime,\n                    location\n                })\n            });\n            if (response.ok) {\n                navigate('/admin');\n                alert('Event added successfully!');\n            }\n            else {\n                console.error('Error adding event:', response.statusText);\n            }\n        }\n        catch (error) {\n            console.error('Error adding event:', error);\n        }\n    };\n    const checkAdminLoggedIn = async () => {\n        try {\n            const response = await fetch('/api/v1/Login/IsAdminLoggedIn');\n            if (response.ok) {\n                const data = await response.json();\n                if (!data && !alertShown) {\n                    setAlertShown(true);\n                    navigate('/login?error=Admin%20login%20required');\n                }\n            }\n            else {\n                if (!alertShown) {\n                    setAlertShown(true);\n                    navigate('/login?error=Admin%20login%20required');\n                }\n            }\n        }\n        catch (error) {\n            console.error('Error checking admin login status:', error);\n            if (!alertShown) {\n                setAlertShown(true);\n                navigate('/login?error=Admin%20login%20required');\n            }\n        }\n    };\n    return ((0, jsx_runtime_1.jsxs)(\"div\", { className: \"container\", children: [(0, jsx_runtime_1.jsx)(\"h1\", { children: \"Admin Dashboard\" }), (0, jsx_runtime_1.jsx)(\"h2\", { children: \"Add New Event\" }), (0, jsx_runtime_1.jsxs)(\"form\", { onSubmit: handleSubmit, children: [(0, jsx_runtime_1.jsxs)(\"div\", { className: \"form-group\", children: [(0, jsx_runtime_1.jsx)(\"label\", { htmlFor: \"title\", className: \"bold-label\", children: \"Title:\" }), (0, jsx_runtime_1.jsx)(\"input\", { type: \"text\", id: \"title\", name: \"title\", value: title, onChange: (e) => setTitle(e.target.value) })] }), (0, jsx_runtime_1.jsxs)(\"div\", { className: \"form-group\", children: [(0, jsx_runtime_1.jsx)(\"label\", { htmlFor: \"description\", className: \"bold-label\", children: \"Description:\" }), (0, jsx_runtime_1.jsx)(\"input\", { type: \"text\", id: \"description\", name: \"description\", value: description, onChange: (e) => setDescription(e.target.value) })] }), (0, jsx_runtime_1.jsxs)(\"div\", { className: \"form-group\", children: [(0, jsx_runtime_1.jsx)(\"label\", { htmlFor: \"eventDate\", className: \"bold-label\", children: \"Event Date:\" }), (0, jsx_runtime_1.jsx)(\"input\", { type: \"text\", id: \"eventDate\", name: \"eventDate\", value: eventDate, onChange: (e) => setEventDate(e.target.value), placeholder: \"YYYY-MM-DD\" })] }), (0, jsx_runtime_1.jsxs)(\"div\", { className: \"form-group\", children: [(0, jsx_runtime_1.jsx)(\"label\", { htmlFor: \"startTime\", className: \"bold-label\", children: \"Start Time:\" }), (0, jsx_runtime_1.jsx)(\"input\", { type: \"text\", id: \"startTime\", name: \"startTime\", value: startTime, onChange: (e) => setStartTime(e.target.value), placeholder: \"HH:MM:SS\" })] }), (0, jsx_runtime_1.jsxs)(\"div\", { className: \"form-group\", children: [(0, jsx_runtime_1.jsx)(\"label\", { htmlFor: \"endTime\", className: \"bold-label\", children: \"End Time:\" }), (0, jsx_runtime_1.jsx)(\"input\", { type: \"text\", id: \"endTime\", name: \"endTime\", value: endTime, onChange: (e) => setEndTime(e.target.value), placeholder: \"HH:MM:SS\" })] }), (0, jsx_runtime_1.jsxs)(\"div\", { className: \"form-group\", children: [(0, jsx_runtime_1.jsx)(\"label\", { htmlFor: \"location\", className: \"bold-label\", children: \"Location:\" }), (0, jsx_runtime_1.jsx)(\"input\", { type: \"text\", id: \"location\", name: \"location\", value: location, onChange: (e) => setLocation(e.target.value) })] }), (0, jsx_runtime_1.jsx)(\"button\", { type: \"submit\", className: \"btn btn-primary\", children: \"Add Event\" }), (0, jsx_runtime_1.jsx)(\"button\", { type: \"button\", className: \"btn btn-secondary\", onClick: () => navigate('/admin'), children: \"Back\" })] }), (0, jsx_runtime_1.jsx)(AccessibilityOptions_1.default, {})] }));\n};\nexports[\"default\"] = AdminAddEvent;\n\n\n//# sourceURL=webpack://hello-react-typescript/./src/pages/AdminAddEvent.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0453dbe47df8d1f61759")
/******/ })();
/******/ 
/******/ }
);