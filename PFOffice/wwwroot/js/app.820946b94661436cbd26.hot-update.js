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

/***/ "./src/pages/Register.tsx":
/*!********************************!*\
  !*** ./src/pages/Register.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nconst react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\n__webpack_require__(/*! ../../../wwwroot/css/site.css */ \"../wwwroot/css/site.css\");\nconst Register = () => {\n    const [username, setUsername] = (0, react_1.useState)('');\n    const [firstname, setFirstName] = (0, react_1.useState)('');\n    const [lastname, setLastName] = (0, react_1.useState)('');\n    const [email, setEmail] = (0, react_1.useState)('');\n    const [password, setPassword] = (0, react_1.useState)('');\n    const [confirmPassword, setConfirmPassword] = (0, react_1.useState)('');\n    const [error, setError] = (0, react_1.useState)('');\n    const [success, setSuccess] = (0, react_1.useState)('');\n    const navigate = (0, react_router_dom_1.useNavigate)();\n    const handleSubmit = async (e) => {\n        e.preventDefault();\n        if (password !== confirmPassword) {\n            setError(\"Passwords do not match\");\n            return;\n        }\n        try {\n            const response = await fetch('/api/v1/Login/Register', {\n                method: 'POST',\n                headers: {\n                    'Content-Type': 'application/json',\n                },\n                body: JSON.stringify({\n                    username,\n                    email,\n                    firstname,\n                    lastname,\n                    password,\n                }),\n            });\n            if (response.ok) {\n                setSuccess('Registration successful! Redirecting to login...');\n                setError('');\n                setTimeout(() => navigate('/login'), 2000);\n            }\n            else {\n                const errorData = await response.json();\n                setError(errorData.message || 'Registration failed');\n                setSuccess('');\n            }\n        }\n        catch (error) {\n            setError('An error occurred. Please try again.');\n            setSuccess('');\n        }\n    };\n    return ((0, jsx_runtime_1.jsxs)(\"div\", { children: [(0, jsx_runtime_1.jsx)(\"h1\", { children: \"Register\" }), (0, jsx_runtime_1.jsxs)(\"form\", { onSubmit: handleSubmit, children: [(0, jsx_runtime_1.jsxs)(\"div\", { children: [(0, jsx_runtime_1.jsx)(\"label\", { htmlFor: \"username\", children: \"Username:\" }), (0, jsx_runtime_1.jsx)(\"input\", { type: \"text\", id: \"username\", value: username, onChange: (e) => setUsername(e.target.value), required: true })] }), (0, jsx_runtime_1.jsxs)(\"div\", { children: [(0, jsx_runtime_1.jsx)(\"label\", { htmlFor: \"First name\", children: \"First name:\" }), (0, jsx_runtime_1.jsx)(\"input\", { type: \"text\", id: \"Firstname\", value: firstname, onChange: (e) => setFirstName(e.target.value), required: true })] }), (0, jsx_runtime_1.jsxs)(\"div\", { children: [(0, jsx_runtime_1.jsx)(\"label\", { htmlFor: \"Last name\", children: \"Last name:\" }), (0, jsx_runtime_1.jsx)(\"input\", { type: \"text\", id: \"Last name\", value: lastname, onChange: (e) => setLastName(e.target.value), required: true })] }), (0, jsx_runtime_1.jsxs)(\"div\", { children: [(0, jsx_runtime_1.jsx)(\"label\", { htmlFor: \"email\", children: \"Email:\" }), (0, jsx_runtime_1.jsx)(\"input\", { type: \"email\", id: \"email\", value: email, onChange: (e) => setEmail(e.target.value), required: true })] }), (0, jsx_runtime_1.jsxs)(\"div\", { children: [(0, jsx_runtime_1.jsx)(\"label\", { htmlFor: \"password\", children: \"Password:\" }), (0, jsx_runtime_1.jsx)(\"input\", { type: \"password\", id: \"password\", value: password, onChange: (e) => setPassword(e.target.value), required: true })] }), (0, jsx_runtime_1.jsxs)(\"div\", { children: [(0, jsx_runtime_1.jsx)(\"label\", { htmlFor: \"confirmPassword\", children: \"Confirm Password:\" }), (0, jsx_runtime_1.jsx)(\"input\", { type: \"password\", id: \"confirmPassword\", value: confirmPassword, onChange: (e) => setConfirmPassword(e.target.value), required: true })] }), error && (0, jsx_runtime_1.jsx)(\"p\", { style: { color: 'red' }, children: error }), success && (0, jsx_runtime_1.jsx)(\"p\", { style: { color: 'green' }, children: success }), (0, jsx_runtime_1.jsx)(\"button\", { type: \"submit\", children: \"Register\" })] })] }));\n};\nexports[\"default\"] = Register;\n\n\n//# sourceURL=webpack://hello-react-typescript/./src/pages/Register.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("58c3e09b4e71a5469568")
/******/ })();
/******/ 
/******/ }
);