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

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\nconst AccessibilityOptions_1 = __importDefault(__webpack_require__(/*! ./AccessibilityOptions */ \"./src/pages/AccessibilityOptions.tsx\"));\nfunction Home() {\n    const navigate = (0, react_router_dom_1.useNavigate)();\n    const goToAdminDashboard = () => {\n        navigate('/admin');\n    };\n    return ((0, jsx_runtime_1.jsxs)(\"div\", { children: [(0, jsx_runtime_1.jsx)(\"h1\", { children: \"Welcome to the Event Management System\" }), (0, jsx_runtime_1.jsxs)(\"p\", { children: [\"When you have decided as a group which practical case you're going to work on during the course you can uncomment the desired database model in the \", (0, jsx_runtime_1.jsx)(\"b\", { children: \"DatabaseContext.cs\" }), \" and add a new migration.\"] }), (0, jsx_runtime_1.jsx)(\"h2\", { children: \"Adding a new database migration\" }), (0, jsx_runtime_1.jsxs)(\"p\", { children: [\"Whenever you make a change to the \", (0, jsx_runtime_1.jsx)(\"b\", { children: \"DatabaseContext\" }), \" you will need to add a new migration. All the database changes are being managed from the \", (0, jsx_runtime_1.jsx)(\"i\", { children: \"/Migrations/\" }), \" folder, the content of this folder is automatically generated. Do not edit this file by hand. Entity Framework Core is used to map the C# classes to SQL tables.\"] }), (0, jsx_runtime_1.jsxs)(\"p\", { children: [\"To add a new migration after a database change run the following command: \", (0, jsx_runtime_1.jsx)(\"i\", { children: \"dotnet ef migrations add [[Migration name]]\" })] }), (0, jsx_runtime_1.jsxs)(\"p\", { children: [\"Inside the migrations folder you can already find a migration called \", (0, jsx_runtime_1.jsx)(\"i\", { children: \"InitialCreate\" }), \" containing the creation of the Admin entity.\"] }), (0, jsx_runtime_1.jsxs)(\"p\", { children: [\"The \", (0, jsx_runtime_1.jsx)(\"b\", { children: \"DatabaseContext.cs\" }), \" file contains two pre-configured databases for the practical cases. You can uncomment one of them and add a new migration to apply the model. Inside this file you will also find some data seeds that create a couple of admin users with a password.\"] }), (0, jsx_runtime_1.jsxs)(\"p\", { children: [\"After every migration you will also need to run \", (0, jsx_runtime_1.jsx)(\"i\", { children: \"dotnet ef database update\" }), \", this will apply the changes to the database.\"] }), (0, jsx_runtime_1.jsx)(\"button\", { onClick: goToAdminDashboard, children: \"Go to Admin Dashboard\" }), (0, jsx_runtime_1.jsx)(\"button\", { onClick: () => navigate('/login'), children: \"Go to Login\" }), (0, jsx_runtime_1.jsx)(AccessibilityOptions_1.default, {})] }));\n}\nexports[\"default\"] = Home;\n\n\n//# sourceURL=webpack://hello-react-typescript/./src/pages/Home.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b4a1eed4857e444fb9c4")
/******/ })();
/******/ 
/******/ }
);