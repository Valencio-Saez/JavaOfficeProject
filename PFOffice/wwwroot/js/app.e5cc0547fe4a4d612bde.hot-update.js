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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\nfunction Home() {\n    const navigate = (0, react_router_dom_1.useNavigate)();\n    const goToAdminDashboard = () => {\n        navigate('/admin');\n    };\n    return ((0, jsx_runtime_1.jsxs)(\"div\", { className: \"container px-5 my-5\", children: [(0, jsx_runtime_1.jsx)(\"h1\", { children: \"Welcome to the Web development Starter kit!\" }), (0, jsx_runtime_1.jsx)(\"p\", { children: \"This starter kit contains a basic setup that should help you get up to speed with developing your web application\" }), (0, jsx_runtime_1.jsxs)(\"p\", { children: [\"The code base of the starter kit contains the following;\", (0, jsx_runtime_1.jsxs)(\"ul\", { children: [(0, jsx_runtime_1.jsx)(\"li\", { children: \"Backend with .NET (C#)\" }), (0, jsx_runtime_1.jsx)(\"li\", { children: \"Frontend using React with Typescript\" }), (0, jsx_runtime_1.jsx)(\"li\", { children: \"Webpack with hot module reloading enabled\" }), (0, jsx_runtime_1.jsx)(\"li\", { children: \"A database using Sqlite, we might change this to Postgres later\" }), (0, jsx_runtime_1.jsx)(\"li\", { children: \"A sample database model for the two cases using Entity Framework core\" }), (0, jsx_runtime_1.jsx)(\"li\", { children: \"CSS stylesheet using Bootstrap\" })] })] }), (0, jsx_runtime_1.jsx)(\"h2\", { children: \"Chosing a practical case\" }), (0, jsx_runtime_1.jsxs)(\"p\", { children: [\"When you have decided as a group which practical case your going to work on during the course you can uncomment the desired database model in the \", (0, jsx_runtime_1.jsx)(\"b\", { children: \"DatabaseContext.cs\" }), \" and add a new migration.\"] }), (0, jsx_runtime_1.jsx)(\"h2\", { children: \"Adding a new database migrations\" }), (0, jsx_runtime_1.jsxs)(\"p\", { children: [\"Whenever you make a change to the \", (0, jsx_runtime_1.jsx)(\"b\", { children: \"DatabaseContext\" }), \" you will need to add a new migration. All the database changes are being managed from the \", (0, jsx_runtime_1.jsx)(\"i\", { children: \"/Migrations/\" }), \" folder, the content of this folder is automatically generated. Do not edit this file by hand. Entity Framework Core is used to map the C# classes to SQL tables.\"] }), (0, jsx_runtime_1.jsxs)(\"p\", { children: [\"To add a new migration after a database change run the following command: \", (0, jsx_runtime_1.jsx)(\"i\", { children: \"dotnet ef migrations add [[Migration name]]\" })] }), (0, jsx_runtime_1.jsxs)(\"p\", { children: [\"Inside the migrations folder you can allready find a migration called \", (0, jsx_runtime_1.jsx)(\"i\", { children: \"InitialCreate\" }), \" containing the creation of the Admin entity. The \", (0, jsx_runtime_1.jsx)(\"b\", { children: \"DatabaseContext.cs\" }), \" file contains two pre-configured databases for the practicall cases. You can uncomment one of them and add a new migration to apply the model. Inside this file you will also find some data seeds that creates a couple of admin users with a password. After every migration you will also need to run \", (0, jsx_runtime_1.jsx)(\"i\", { children: \"dotnet ef database update\" }), \", this will apply the changes to the database.\"] }), (0, jsx_runtime_1.jsx)(\"button\", { onClick: goToAdminDashboard, children: \"Go to Admin Dashboard\" })] }));\n}\nexports[\"default\"] = Home;\n\n\n//# sourceURL=webpack://hello-react-typescript/./src/pages/Home.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5e1db950bc81f4dd791a")
/******/ })();
/******/ 
/******/ }
);