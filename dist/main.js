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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_scrollUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scrollUp */ \"./src/modules/scrollUp.js\");\n/* harmony import */ var _modules_modalHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modalHeader */ \"./src/modules/modalHeader.js\");\n/* harmony import */ var _modules_modalServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modalServices */ \"./src/modules/modalServices.js\");\n/* harmony import */ var _modules_modalSert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modalSert */ \"./src/modules/modalSert.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/calculator */ \"./src/modules/calculator.js\");\n/* harmony import */ var _modules_formSend__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/formSend */ \"./src/modules/formSend.js\");\n/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/validation */ \"./src/modules/validation.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('28 february 2022');\r\n(0,_modules_scrollUp__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modalHeader__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_modalServices__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_modalSert__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_calculator__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n(0,_modules_formSend__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\r\n    idForm: ('#actionForm1, #actionForm2, #actionFormModal1, #actionFormModal2'),\r\n    someElem: [\r\n        {\r\n            type: 'input',\r\n            id: 'calc-total'\r\n        }\r\n    ]\r\n});\r\n(0,_modules_validation__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n\n\n//# sourceURL=webpack://middle_diplom/./src/index.js?");

/***/ }),

/***/ "./src/modules/calculator.js":
/*!***********************************!*\
  !*** ./src/modules/calculator.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\n//Калькулятор\r\nconst calculator = () => {\r\n    if (document.body.className == 'balkony') {\r\n        const calculatorSection = document.getElementById('calc');\r\n        const calcType = calculatorSection.querySelector('#calc-type');\r\n        const calcMaterial = calculatorSection.querySelector('#calc-type-material');\r\n        const calcInput = calculatorSection.querySelector('#calc-input');\r\n        const calcTotal = calculatorSection.querySelector('#calc-total');\r\n\r\n        const getValue = () => {\r\n            const calcTypeValue = +calcType.options[calcType.selectedIndex].value;\r\n            const calcMaterialValue = +calcMaterial.options[calcMaterial.selectedIndex].value;\r\n            let calcInputValue = calcInput.value;\r\n\r\n            // console.log(calcInputValue);\r\n\r\n            if (calcInput.value == 0) {\r\n                calcInputValue = 1;\r\n            }\r\n\r\n            return {\r\n                calcTypeValue,\r\n                calcMaterialValue,\r\n                calcInputValue\r\n            };\r\n        };\r\n\r\n        const getCalc =() => {\r\n            let values = getValue();\r\n            \r\n            let sum = values.calcInputValue * values.calcTypeValue * values.calcMaterialValue;\r\n\r\n            return {sum}\r\n        };\r\n\r\n        const calcValue = () => {\r\n            let value = getCalc();\r\n            calcTotal.value = Math.round(value.sum);\r\n        };\r\n\r\n        calculatorSection.addEventListener('input', (e) => {\r\n            if (calcType.options[calcType.selectedIndex].value != '--' && calcMaterial.options[calcMaterial.selectedIndex].value != '--') {\r\n                calcValue();\r\n            }\r\n        });\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/calculator.js?");

/***/ }),

/***/ "./src/modules/formSend.js":
/*!*********************************!*\
  !*** ./src/modules/formSend.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//Отправка формы\r\nconst formSend = ({ idForm , someElem = [] }) => {\r\n    const forms = document.querySelectorAll(idForm);\r\n\r\n    //Валидация\r\n    const validate = (list) => {\r\n        let success = true;\r\n\r\n        list.forEach(input => {\r\n            if (input.value === \"\") {\r\n                success = false;\r\n                \r\n            }\r\n        });\r\n        \r\n        return success;\r\n    }\r\n\r\n    //Отправка данных\r\n    const sendData = (data) => {\r\n        return fetch('https://jsonplaceholder.typicode.com/posts', {\r\n            method: 'POST',\r\n            body: JSON.stringify(data),\r\n            headers: {\r\n                \"Content-Type\": \"application/json\"\r\n            }\r\n        }).then(res => res.json());\r\n    }\r\n    \r\n    forms.forEach(form => form.addEventListener('submit', (event) => {\r\n        event.preventDefault();\r\n\r\n        const formElements = form.querySelectorAll('input');\r\n        const formData = new FormData(form);\r\n        const formBody = {};\r\n\r\n        formData.forEach((val, key) => {\r\n            formBody[key] = val;\r\n        })\r\n\r\n        try {\r\n            someElem.forEach(elem => {\r\n                const element = document.getElementById(elem.id);\r\n    \r\n                if(elem.type === 'input') {\r\n                    formBody[elem.id] = element.placeholder;\r\n                }\r\n            })\r\n        } catch (error) {};\r\n\r\n        if(validate(formElements)) {\r\n            sendData(formBody);\r\n        } else {\r\n            alert('Данные не валидны');\r\n        }\r\n    \r\n    }))\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formSend);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/formSend.js?");

/***/ }),

/***/ "./src/modules/modalHeader.js":
/*!************************************!*\
  !*** ./src/modules/modalHeader.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//Модальное окно в шапке сайта\r\nconst modalHeader = () => {\r\n    const modal = document.querySelector(\".header-modal\");\r\n    const btns = document.querySelectorAll(\"a[href^='#callback']\");\r\n    const modalContent = document.querySelector(\".header-modal--opened\");\r\n    const overlay = document.querySelector(\".overlay\");\r\n    \r\n    //Условие\r\n    btns.forEach((btn) => {\r\n        btn.addEventListener(\"click\", () => {\r\n            if (window.outerWidth > 768) {\r\n                modal.style.display = \"block\";\r\n                overlay.style.display = \"block\";\r\n                modalContent.animate(\r\n                    [\r\n                        {\r\n                            opacity: 0,\r\n                            transform: \"translate3D(0, -300px, 0)\",\r\n                        },\r\n                        {\r\n                            opacity: 1,\r\n                        },\r\n                    ],\r\n                    {\r\n                        duration: 500,\r\n                    }\r\n                );\r\n            } else {\r\n                modal.style.display = \"block\";\r\n            }\r\n        });\r\n    });\r\n    \r\n    // Событие по клику\r\n    modal.addEventListener(\"click\", (e) => {\r\n        if (/* !e.target.closest(\".overlay\") ||*/ e.target.classList.contains(\"header-modal__close\")) {\r\n            modal.style.display = \"none\";\r\n            overlay.style.display = \"none\";\r\n        }\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalHeader);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/modalHeader.js?");

/***/ }),

/***/ "./src/modules/modalSert.js":
/*!**********************************!*\
  !*** ./src/modules/modalSert.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//Модальное окно сертификата\r\nconst modalSert = () => {\r\n    const sertificateImages = document.querySelectorAll('.sertificate-document');\r\n    const overlay = document.querySelector('.overlay');\r\n    const hideImages = document.querySelector('.hide_sertificate');\r\n    const closeServiceModal = document.querySelector('.sertificate-modal__close');\r\n\r\n    sertificateImages.forEach(sertificateImage => sertificateImage.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n        hideImages.style.display = 'block';\r\n        overlay.style.display = 'block';\r\n        \r\n    }))\r\n    closeServiceModal.addEventListener('click', () => {\r\n        hideImages.style.display = 'none';\r\n        overlay.style.display = 'none';\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalSert);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/modalSert.js?");

/***/ }),

/***/ "./src/modules/modalServices.js":
/*!**************************************!*\
  !*** ./src/modules/modalServices.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//Модальное окно услуг (вызова замерщика)\r\nconst modalServices = () => {\r\n    const modal = document.querySelector(\".services-modal\");\r\n    const btns = document.querySelectorAll(\"a[href^='#application']\");\r\n    const modalContent = document.querySelector(\".services-modal--opened\");\r\n    const overlay = document.querySelector(\".overlay\"); \r\n    \r\n    //Условие\r\n    btns.forEach((btn) => {\r\n        btn.addEventListener(\"click\", () => {\r\n            if (window.outerWidth > 768) {\r\n                modal.style.display = \"block\";\r\n                overlay.style.display = \"block\";\r\n                modalContent.animate(\r\n                    [\r\n                        {\r\n                            opacity: 0,\r\n                            transform: \"translate3D(0, -300px, 0)\",\r\n                        },\r\n                        {\r\n                            opacity: 1,\r\n                        },\r\n                    ],\r\n                    {\r\n                        duration: 500,\r\n                    }\r\n                );\r\n            } else {\r\n                modal.style.display = \"block\";\r\n            }\r\n        });\r\n    });\r\n    \r\n    // Клик\r\n    modal.addEventListener(\"click\", (e) => {\r\n        if (/* !e.target.closest(\".overlay\") ||*/ e.target.classList.contains(\"services-modal__close\")) {\r\n            modal.style.display = \"none\";\r\n            overlay.style.display = \"none\";\r\n        }\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalServices);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/modalServices.js?");

/***/ }),

/***/ "./src/modules/scrollUp.js":
/*!*********************************!*\
  !*** ./src/modules/scrollUp.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//Кнопка \"Наверх\"\r\nconst scrollUp = () => {\r\n    const btnScroll = document.querySelector('.smooth-scroll');\r\n    const hiddenScroll = () => {\r\n        btnScroll.style.display = 'none';\r\n    }\r\n    \r\n    hiddenScroll();\r\n    \r\n    window.onscroll = () => {\r\n        if (window.pageYOffset > 600) {\r\n            btnScroll.style.display = 'block'\r\n        } else {\r\n            btnScroll.style.display = 'none'\r\n        }\r\n    };\r\n    \r\n\r\n    \r\n    btnScroll.addEventListener('click', function (e) {\r\n        e.preventDefault();\r\n        const id = btnScroll.getAttribute('href');\r\n        \r\n        document.querySelector(id).scrollIntoView({\r\n            behavior: 'smooth',\r\n            block: 'start'\r\n        });\r\n        \r\n        return id;\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollUp);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/scrollUp.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//Слайдер\r\nconst slider = () => {\r\n    const sliderBlocks = document.querySelectorAll('.slider-block');\r\n\r\n    const getToSlide = (sliderBlock) => {\r\n        const allSlides = document.querySelectorAll(`.${sliderBlock.id}__item`);\r\n        let slides = [];\r\n        let slide1 = [];\r\n        let slide2 = [];\r\n  \r\n        allSlides.forEach(slide => {\r\n            if (slide.classList.contains('not-active')) {\r\n                slide2.push(slide);\r\n            } else slide1.push(slide)\r\n        })\r\n        slides.push(slide1);\r\n        slides.push(slide2);\r\n        return {slides};\r\n    };\r\n  \r\n    const prevSlide = (slides, index, strClass) => {\r\n        slides[index].forEach(slide => {\r\n            slide.classList.add(strClass);\r\n        })\r\n    };\r\n  \r\n    const nextSlide = (slides, index, strClass) => {\r\n        slides[index].forEach(slide => {\r\n            slide.classList.remove(strClass);\r\n        });\r\n    };\r\n  \r\n    sliderBlocks.forEach(sliderBlock => sliderBlock.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n  \r\n        let slides = getToSlide(sliderBlock).slides; \r\n        let currentSlide = 0;\r\n  \r\n        if (!e.target.closest('.arrows')) {\r\n            return;\r\n        }\r\n           \r\n        prevSlide(slides, currentSlide, 'not-active');\r\n  \r\n        if (e.target.closest('.benefits__arrow--right') || e.target.closest('.services__arrow--right')) {\r\n            currentSlide++;\r\n        } else if (e.target.closest('.benefits__arrow--left') || e.target.closest('.services__arrow--left')) {\r\n            currentSlide--;\r\n        }\r\n        if (currentSlide >= slides.length) {\r\n            currentSlide = 0;\r\n        }\r\n        if (currentSlide < 0) {\r\n            currentSlide = slides.length - 1;\r\n        }        \r\n            \r\n        nextSlide(slides, currentSlide, 'not-active');\r\n    }))\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Таймер\r\nconst timer = (deadline) => {\r\n    // Объявление переменных таймера\r\n    let timeDays = document.querySelectorAll(\".count_1 span\");\r\n    let timeHours = document.querySelectorAll(\".count_2 span\");\r\n    let timeMinutes = document.querySelectorAll(\".count_3 span\");\r\n    let timeSeconds = document.querySelectorAll(\".count_4 span\");\r\n\r\n    // Отсчёт таймера\r\n    const getTimeRemaining = () => {\r\n        let dateStop = new Date(deadline).getTime();\r\n        let dateNow = new Date().getTime();\r\n        let timeRemaining = (dateStop - dateNow) / 1000;\r\n        let days = Math.floor(timeRemaining / 60 / 60 / 24);\r\n        let hours = Math.floor((timeRemaining / 60 / 60) % 24);\r\n        let minutes = Math.floor((timeRemaining / 60) % 60);\r\n        let seconds = Math.floor(timeRemaining % 60);\r\n            \r\n        return { timeRemaining, days, hours, minutes, seconds };\r\n    };\r\n        \r\n    // Подстановка нуля для таймера\r\n    const addZero = (elem) => {\r\n        if (String(elem).length === 1) { return '0' + elem; } else { return String(elem); }\r\n    };\r\n        \r\n    // Присвоение значений элементам для каждого таймера\r\n    const updateClock = () => {\r\n        let getTime = getTimeRemaining();\r\n        timeDays.forEach(item => {item.textContent = addZero(getTime.days)});\r\n        timeHours.forEach(item => {item.textContent = addZero(getTime.hours)});\r\n        timeMinutes.forEach(item => {item.textContent = addZero(getTime.minutes)});\r\n        timeSeconds.forEach(item => {item.textContent = addZero(getTime.seconds)});\r\n    };\r\n\r\n    // Время вышло\r\n    setTimeout(() => {\r\n        let getTime = getTimeRemaining();\r\n        if (getTime.timeRemaining > 0) {\r\n            updateClock();\r\n        } else if (getTime.timeRemaining === 0) {\r\n            clearTimeout(updateClock);\r\n        }\r\n    });\r\n\r\n    // Обновление интервала\r\n    setInterval(() => {\r\n        let getTime = getTimeRemaining();\r\n        if (getTime.timeRemaining > 0) {\r\n            updateClock();\r\n        } else if (getTime.timeRemaining === 0) {\r\n            clearInterval(updateClock);\r\n        }\r\n    }, 1000);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/timer.js?");

/***/ }),

/***/ "./src/modules/validation.js":
/*!***********************************!*\
  !*** ./src/modules/validation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//Валидация\r\nconst validation = () => {\r\n    const formNames = document.querySelectorAll('.form-fio');\r\n    const formPhones = document.querySelectorAll('.form-phone');\r\n\r\n    formNames.forEach(formName => formName.addEventListener('input', (e) => {\r\n        e.target.value = e.target.value.replace(/[^а-яА-Яa-zA-Z ]/, \"\");\r\n    }));\r\n\r\n    formPhones.forEach(formPhone => formPhone.addEventListener('input', (e) => {\r\n        formPhone.value = formPhone.value.substring(0, 16);\r\n        e.target.value = e.target.value.replace(/[^0-9+]/, \"\");\r\n        \r\n    }));\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validation);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/validation.js?");

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