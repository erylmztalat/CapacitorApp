"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcapacitorapp"] = self["webpackChunkcapacitorapp"] || []).push([["capacitor-restapi-plugin_dist_esm_web_js"],{

/***/ "./capacitor-restapi-plugin/dist/esm/web.js":
/*!**************************************************!*\
  !*** ./capacitor-restapi-plugin/dist/esm/web.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RestAPIWeb: () => (/* binding */ RestAPIWeb)\n/* harmony export */ });\n/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ \"./node_modules/@capacitor/core/dist/index.js\");\n\nclass RestAPIWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.WebPlugin {\n    constructor() {\n        super({\n            name: 'RestAPI',\n            platforms: ['web'],\n        });\n    }\n    async echo(options) {\n        console.log('ECHO', options);\n        return options;\n    }\n    async getLatestCover(options) {\n        const response = await fetch('https://public.softgames.com/code-challenge/manifest.json');\n        if (!response.ok) {\n            throw new Error('Network response was not ok');\n        }\n        const data = await response.json();\n        const covers = data.data.slice(0, options.amount).map((item) => item.cover);\n        return { covers: covers };\n    }\n}\n//# sourceMappingURL=web.js.map\n\n//# sourceURL=webpack://capacitorapp/./capacitor-restapi-plugin/dist/esm/web.js?");

/***/ })

}]);