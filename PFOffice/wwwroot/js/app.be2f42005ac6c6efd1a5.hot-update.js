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

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nconst react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\nconst Login = () => {\n    const [username, setUsername] = (0, react_1.useState)('');\n    const [password, setPassword] = (0, react_1.useState)('');\n    const [error, setError] = (0, react_1.useState)('');\n    const navigate = (0, react_router_dom_1.useNavigate)();\n    const handleSubmit = async (e) => {\n        e.preventDefault();\n        try {\n            const response = await fetch('/api/v1/Login/Login', {\n                method: 'POST',\n                headers: {\n                    'Content-Type': 'application/json',\n                },\n                body: JSON.stringify({ username, password }),\n            });\n            if (response.ok) {\n                // Redirect based on the username\n                if (username === 'admin') {\n                    navigate('/admin');\n                }\n                else {\n                    navigate('/ '); // Unauthorized user redirect\n                }\n            }\n            else {\n                const errorData = await response.json();\n                setError(errorData.message || 'Login failed');\n            }\n        }\n        catch (error) {\n            setError('An error occurred. Please try again.');\n        }\n    };\n    return ((0, jsx_runtime_1.jsxs)(\"div\", { children: [(0, jsx_runtime_1.jsx)(\"h1\", { children: \"Login\" }), (0, jsx_runtime_1.jsxs)(\"form\", { onSubmit: handleSubmit, children: [(0, jsx_runtime_1.jsxs)(\"div\", { children: [(0, jsx_runtime_1.jsx)(\"label\", { htmlFor: \"username\", children: \"Username:\" }), (0, jsx_runtime_1.jsx)(\"input\", { type: \"text\", id: \"username\", value: username, onChange: (e) => setUsername(e.target.value) })] }), (0, jsx_runtime_1.jsxs)(\"div\", { children: [(0, jsx_runtime_1.jsx)(\"label\", { htmlFor: \"password\", children: \"Password:\" }), (0, jsx_runtime_1.jsx)(\"input\", { type: \"password\", id: \"password\", value: password, onChange: (e) => setPassword(e.target.value) })] }), error && (0, jsx_runtime_1.jsx)(\"p\", { style: { color: 'red' }, children: error }), (0, jsx_runtime_1.jsx)(\"button\", { type: \"submit\", children: \"Login\" })] })] }));\n};\nexports[\"default\"] = Login;\n\n\n//# sourceURL=webpack://hello-react-typescript/./src/pages/Login.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a8d17c58d5d26ceba573")
/******/ })();
/******/ 
/******/ }
);