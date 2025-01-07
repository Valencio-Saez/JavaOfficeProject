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

/***/ "./src/pages/Login.tsx":
/*!*****************************!*\
  !*** ./src/pages/Login.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nconst react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\n__webpack_require__(/*! ../../../wwwroot/css/site.css */ \"../wwwroot/css/site.css\");\nconst Login = () => {\n    const [username, setUsername] = (0, react_1.useState)('');\n    const [password, setPassword] = (0, react_1.useState)('');\n    const [error, setError] = (0, react_1.useState)(null);\n    const [alertShown, setAlertShown] = (0, react_1.useState)(false); // Prevent multiple alerts\n    const navigate = (0, react_router_dom_1.useNavigate)();\n    const location = (0, react_router_dom_1.useLocation)();\n    (0, react_1.useEffect)(() => {\n        // Extract error message from query parameters\n        const queryParams = new URLSearchParams(location.search);\n        const errorMessage = queryParams.get('error');\n        if (errorMessage && !alertShown) {\n            alert(decodeURIComponent(errorMessage)); // Show the alert\n            setAlertShown(true); // Mark alert as shown\n            setError(decodeURIComponent(errorMessage)); // Optional: Set the error state\n            // Remove the query parameter from the URL\n            const newSearchParams = new URLSearchParams(location.search);\n            newSearchParams.delete('error');\n            navigate({\n                pathname: location.pathname,\n                search: newSearchParams.toString(),\n            }, { replace: true }); // Replace history to prevent re-triggering\n        }\n    }, [location, alertShown, navigate]);\n    const handleSubmit = async (e) => {\n        e.preventDefault();\n        try {\n            const response = await fetch('/api/v1/Login/Login', {\n                method: 'POST',\n                headers: {\n                    'Content-Type': 'application/json',\n                },\n                body: JSON.stringify({ username, password }),\n            });\n            if (response.ok) {\n                const data = await response.json();\n                if (username === 'admin1') {\n                    navigate('/admin');\n                }\n                else {\n                    navigate('/');\n                }\n            }\n            else {\n                const errorData = await response.json();\n                setError(errorData.message || 'Login failed');\n            }\n        }\n        catch (error) {\n            setError('An unexpected error occurred. Please try again.');\n        }\n    };\n    return ((0, jsx_runtime_1.jsxs)(\"div\", { children: [(0, jsx_runtime_1.jsx)(\"h1\", { children: \"Login\" }), error && (0, jsx_runtime_1.jsx)(\"p\", { style: { color: 'red' }, children: error }), (0, jsx_runtime_1.jsxs)(\"form\", { onSubmit: handleSubmit, children: [(0, jsx_runtime_1.jsxs)(\"div\", { children: [(0, jsx_runtime_1.jsx)(\"label\", { htmlFor: \"username\", children: \"Username:\" }), (0, jsx_runtime_1.jsx)(\"input\", { type: \"text\", id: \"username\", value: username, onChange: (e) => setUsername(e.target.value), required: true })] }), (0, jsx_runtime_1.jsxs)(\"div\", { children: [(0, jsx_runtime_1.jsx)(\"label\", { htmlFor: \"password\", children: \"Password:\" }), (0, jsx_runtime_1.jsx)(\"input\", { type: \"password\", id: \"password\", value: password, onChange: (e) => setPassword(e.target.value), required: true })] }), (0, jsx_runtime_1.jsx)(\"button\", { type: \"submit\", children: \"Login\" })] })] }));\n};\nexports[\"default\"] = Login;\n\n\n//# sourceURL=webpack://hello-react-typescript/./src/pages/Login.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1ef93e0e4bafa190c22e")
/******/ })();
/******/ 
/******/ }
);