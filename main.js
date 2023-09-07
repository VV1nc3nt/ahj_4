/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validateCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validateCard */ "./src/js/validateCard.js");

new _validateCard__WEBPACK_IMPORTED_MODULE_0__["default"]().cardCheck();

/***/ }),

/***/ "./src/js/validateCard.js":
/*!********************************!*\
  !*** ./src/js/validateCard.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CardValidator; }
/* harmony export */ });
/* eslint-disable no-param-reassign */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-syntax */
/* eslint-disable class-methods-use-this */
/* eslint-disable prefer-const */
class CardValidator {
  constructor() {
    this.submitBtn = document.querySelector('.input_submit');
  }
  cardCheck() {
    this.submitBtn.addEventListener('click', event => {
      event.preventDefault();
      this.cardImgClear();
      let cardNumber = document.querySelector('.input_field').value;
      this.cardValid(cardNumber);
      let cardTypeChosen = this.cardType(cardNumber);
      this.cardImgChose(cardTypeChosen);
    });
  }
  cardValid(cardNumber) {
    let sum = 0;
    const numbers = cardNumber.split('').map(Number);
    for (const [index, num] of numbers.entries()) {
      if (index % 2 === 0) {
        let buffer = num * 2;
        buffer > 9 ? sum += buffer - 9 : sum += buffer;
      } else {
        sum += num;
      }
    }
    return sum % 10 === 0 ? true : false;
  }
  cardType(cardNumber) {
    if (cardNumber.startsWith('4')) {
      return 'Visa';
    }
    if (cardNumber.startsWith('34') || cardNumber.startsWith('37')) {
      return 'AmericanExpress';
    }
    if (cardNumber.startsWith('36')) {
      return 'DinnersClub';
    }
    if (cardNumber.startsWith('51') || cardNumber.startsWith('52') || cardNumber.startsWith('53') || cardNumber.startsWith('54') || cardNumber.startsWith('55')) {
      return 'MasterCard';
    }
    if (cardNumber.startsWith('6011') || cardNumber.startsWith('644') || cardNumber.startsWith('645') || cardNumber.startsWith('646') || cardNumber.startsWith('647') || cardNumber.startsWith('648') || cardNumber.startsWith('649') || cardNumber.startsWith('65')) {
      return 'Discover';
    }
    if (cardNumber.startsWith('5018') || cardNumber.startsWith('5020') || cardNumber.startsWith('5038') || cardNumber.startsWith('5893') || cardNumber.startsWith('6304') || cardNumber.startsWith('6759') || cardNumber.startsWith('6761') || cardNumber.startsWith('6762') || cardNumber.startsWith('6763')) {
      return 'Maestro';
    }
    if (cardNumber.startsWith('3528') || cardNumber.startsWith('3529') || cardNumber.startsWith('353') || cardNumber.startsWith('354') || cardNumber.startsWith('355') || cardNumber.startsWith('356') || cardNumber.startsWith('357') || cardNumber.startsWith('358')) {
      return 'JCB';
    }
    if (cardNumber.startsWith('2')) {
      return 'MIR';
    }
    return 'Card undefined';
  }
  cardImgChose(cardType) {
    if (cardType === 'Card undefined') {
      this.submitBtn.classList.add('invalid');
      this.submitBtn.style.backgroundColor = 'red';
    } else {
      let cardImg = document.getElementsByClassName(cardType)[0];
      cardImg.style.opacity = 1;
      this.submitBtn.classList.add('valid');
      this.submitBtn.style.backgroundColor = 'green';
    }
  }
  cardImgClear() {
    document.querySelectorAll('.card_img').forEach(el => {
      el.style.opacity = 0.2;
    });
  }
}

/***/ }),

/***/ "./src/assets/css/style.css":
/*!**********************************!*\
  !*** ./src/assets/css/style.css ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./licenses.txt":
/*!**********************!*\
  !*** ./licenses.txt ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("выплаты PNG разработан syedhassan, из https://ru.pngtree.com/freepng/payment-method-icons-set_3545536.html?sol=downref&id=bef");

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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/app */ "./src/js/app.js");
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/css/style.css */ "./src/assets/css/style.css");
/* harmony import */ var _licenses_txt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../licenses.txt */ "./licenses.txt");
/* eslint-disable no-unused-vars */



}();
/******/ })()
;
//# sourceMappingURL=main.js.map