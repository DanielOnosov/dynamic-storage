/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./lib/storage/index.js":
/*!******************************!*\
  !*** ./lib/storage/index.js ***!
  \******************************/
/***/ ((module) => {

eval("class DynamicStorage {\n    storage;\n\n    constructor(props) {\n        this.storage = {}\n    }\n\n    get(key) {\n        const res = localStorage.getItem(key)\n\n        this.storage[key] = res\n\n        return res\n    }\n\n    getObj(key) {\n        const obj = JSON.parse(localStorage.getItem(key))\n\n        this.storage[key] = obj\n\n        return obj\n    }\n\n    set(key, item) {\n        localStorage.setItem(key, item)\n\n        this.storage[key] = item\n    }\n\n    setObj(key, item) {\n        const str = JSON.stringify(item)\n\n        localStorage.setItem(key, str)\n        this.storage[key] = item;\n    }\n\n    get storage() {\n        return this.storage\n    }\n}\n\nmodule.exports = Storage\n\n//# sourceURL=webpack://dynamic-storage/./lib/storage/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./lib/storage/index.js");
/******/ 	
/******/ })()
;