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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_scrollUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scrollUp */ \"./src/modules/scrollUp.js\");\n/* harmony import */ var _modules_modalHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modalHeader */ \"./src/modules/modalHeader.js\");\n/* harmony import */ var _modules_modalServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modalServices */ \"./src/modules/modalServices.js\");\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://middle_diplom/./src/index.js?");

/***/ }),

/***/ "./src/modules/modalHeader.js":
/*!************************************!*\
  !*** ./src/modules/modalHeader.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//Модальное окно\r\nconst modalHeader = () => {\r\n    const modal = document.querySelector(\".header-modal\");\r\n    const btns = document.querySelectorAll(\"a[href^='#callback']\");\r\n    const modalContent = document.querySelector(\".header-modal--opened\");\r\n    const overlay = document.querySelector(\".overlay\");\r\n    \r\n    //Условие\r\n    btns.forEach((btn) => {\r\n        btn.addEventListener(\"click\", () => {\r\n            if (window.outerWidth > 768) {\r\n                modal.style.display = \"block\";\r\n                overlay.style.display = \"block\";\r\n                modalContent.animate(\r\n                    [\r\n                        {\r\n                            opacity: 0,\r\n                            transform: \"translate3D(0, -300px, 0)\",\r\n                        },\r\n                        {\r\n                            opacity: 1,\r\n                        },\r\n                    ],\r\n                    {\r\n                        duration: 500,\r\n                    }\r\n                );\r\n            } else {\r\n                modal.style.display = \"block\";\r\n            }\r\n        });\r\n    });\r\n    \r\n    // Событие по клику\r\n    modal.addEventListener(\"click\", (e) => {\r\n        if (/* !e.target.closest(\".overlay\") ||*/ e.target.classList.contains(\"header-modal__close\")) {\r\n            modal.style.display = \"none\";\r\n            overlay.style.display = \"none\";\r\n        }\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalHeader);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/modalHeader.js?");

/***/ }),

/***/ "./src/modules/modalServices.js":
/*!**************************************!*\
  !*** ./src/modules/modalServices.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//Модальное окно услуг\r\nconst modalServices = () => {\r\n    const modal = document.querySelector(\".services-modal\");\r\n    const btns = document.querySelectorAll(\"a[href^='#application']\");\r\n    const modalContent = document.querySelector(\".services-modal--opened\");\r\n    const overlay = document.querySelector(\".overlay\");\r\n    \r\n    \r\n    //Условие\r\n    btns.forEach((btn) => {\r\n        btn.addEventListener(\"click\", () => {\r\n            if (window.outerWidth > 768) {\r\n                modal.style.display = \"block\";\r\n                overlay.style.display = \"block\";\r\n                modalContent.animate(\r\n                    [\r\n                        {\r\n                            opacity: 0,\r\n                            transform: \"translate3D(0, -300px, 0)\",\r\n                        },\r\n                        {\r\n                            opacity: 1,\r\n                        },\r\n                    ],\r\n                    {\r\n                        duration: 500,\r\n                    }\r\n                );\r\n        }   else {\r\n                modal.style.display = \"block\";\r\n            }\r\n        });\r\n    });\r\n    \r\n    // Событие по клику\r\n    modal.addEventListener(\"click\", (e) => {\r\n        if (/* !e.target.closest(\".overlay\") ||*/ e.target.classList.contains(\"services-modal__close\")) {\r\n            modal.style.display = \"none\";\r\n            overlay.style.display = \"none\";\r\n        }\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalServices);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/modalServices.js?");

/***/ }),

/***/ "./src/modules/scrollUp.js":
/*!*********************************!*\
  !*** ./src/modules/scrollUp.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//Кнопка \"Наверх\"\r\nconst scrollUp = () => {\r\n    const btnScroll = document.querySelector('.smooth-scroll');\r\n    const hiddenScroll = () => {\r\n        btnScroll.style.display = 'none';\r\n    }\r\n    \r\n    hiddenScroll();\r\n    \r\n    window.onscroll = () => {\r\n        if (window.pageYOffset > 600) {\r\n            btnScroll.style.display = 'block'\r\n        } else {\r\n            btnScroll.style.display = 'none'\r\n        }\r\n    };\r\n    \r\n\r\n    \r\n    btnScroll.addEventListener('click', function (e) {\r\n        e.preventDefault();\r\n        const id = btnScroll.getAttribute('href');\r\n        \r\n        document.querySelector(id).scrollIntoView({\r\n            behavior: 'smooth',\r\n            block: 'start'\r\n        });\r\n        \r\n        return id;\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollUp);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/scrollUp.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Таймер\r\nconst timer = (deadline) => {\r\n    // Объявление переменных таймера\r\n    let timerDays = document.querySelectorAll(\".count_1 span\");\r\n    let timerHours = document.querySelectorAll(\".count_2 span\");\r\n    let timerMinutes = document.querySelectorAll(\".count_3 span\");\r\n    let timerSeconds = document.querySelectorAll(\".count_4 span\");\r\n\r\n    // Отсчёт таймера\r\n    const getTimeRemaining = () => {\r\n        let dateStop = new Date(deadline).getTime();\r\n        let dateNow = new Date().getTime();\r\n        let timeRemaining = (dateStop - dateNow) / 1000;\r\n        let days = Math.floor(timeRemaining / 60 / 60 / 24);\r\n        let hours = Math.floor((timeRemaining / 60 / 60) % 24);\r\n        let minutes = Math.floor((timeRemaining / 60) % 60);\r\n        let seconds = Math.floor(timeRemaining % 60);\r\n            \r\n        return { timeRemaining, days, hours, minutes, seconds };\r\n    };\r\n        \r\n    // Подстановка нуля для таймера\r\n    const addZero = (elem) => {\r\n        if (String(elem).length === 1) { return '0' + elem; } else { return String(elem); }\r\n    };\r\n        \r\n    // Присвоение значений элементам для каждого таймера\r\n    const updateClock = () => {\r\n        let getTime = getTimeRemaining();\r\n        timerDays.forEach(item => {item.textContent = addZero(getTime.days)});\r\n        timerHours.forEach(item => {item.textContent = addZero(getTime.hours)});\r\n        timerMinutes.forEach(item => {item.textContent = addZero(getTime.minutes)});\r\n        timerSeconds.forEach(item => {item.textContent = addZero(getTime.seconds)});\r\n    };\r\n\r\n    // Время вышло\r\n    setTimeout(() => {\r\n        let getTime = getTimeRemaining();\r\n        if (getTime.timeRemaining > 0) {\r\n            updateClock();\r\n        } else if (getTime.timeRemaining === 0) {\r\n            clearTimeout(updateClock);\r\n        }\r\n    });\r\n\r\n    // Обновление интервала\r\n    setInterval(() => {\r\n        let getTime = getTimeRemaining();\r\n        if (getTime.timeRemaining > 0) {\r\n            updateClock();\r\n        } else if (getTime.timeRemaining === 0) {\r\n            clearInterval(updateClock);\r\n        }\r\n    }, 1000);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/timer.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;