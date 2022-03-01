/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/add */ \"./src/modules/add.js\");\n/* harmony import */ var _modules_opsegKruga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/opsegKruga */ \"./src/modules/opsegKruga.js\");\n/* harmony import */ var _modules_polygonArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/polygonArea */ \"./src/modules/polygonArea.js\");\n\r\n\r\n\r\n\r\n// const numbersAdd = add(2, 3)\r\n\r\n//const polygonArray = [4, 6, 3, 6, 7, 8]\r\n//const polygonAreaLocal = polygonArea(polygonArray)\r\n\r\nconst r = 3;\r\nconst opseg = (0,_modules_opsegKruga__WEBPACK_IMPORTED_MODULE_1__.opsegKruga)(r)\r\n\r\ndocument.body.innerText = opseg\n\n//# sourceURL=webpack://webpack-project/./src/main.js?");

/***/ }),

/***/ "./src/modules/add.js":
/*!****************************!*\
  !*** ./src/modules/add.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"add\": () => (/* binding */ add)\n/* harmony export */ });\nfunction add(a, b) {\r\n    let add = a + b;\r\n\r\n    return add\r\n}\r\n\r\n\n\n//# sourceURL=webpack://webpack-project/./src/modules/add.js?");

/***/ }),

/***/ "./src/modules/opsegKruga.js":
/*!***********************************!*\
  !*** ./src/modules/opsegKruga.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"opsegKruga\": () => (/* binding */ opsegKruga)\n/* harmony export */ });\nfunction opsegKruga(r) {\r\n    let opseg = 2 * r * Math.PI\r\n\r\n    return opseg.toFixed(2)\r\n}\r\n\r\n\n\n//# sourceURL=webpack://webpack-project/./src/modules/opsegKruga.js?");

/***/ }),

/***/ "./src/modules/polygonArea.js":
/*!************************************!*\
  !*** ./src/modules/polygonArea.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"polygonArea\": () => (/* binding */ polygonArea)\n/* harmony export */ });\nfunction polygonArea (polygonArray) {\r\n\r\n    let count = 0;\r\n\r\n    for(let i = 0; i < polygonArray.length; i++){\r\n        count += polygonArray[i]\r\n    }\r\n\r\n    return count;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://webpack-project/./src/modules/polygonArea.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;