/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _les_knope_compliments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./les_knope/compliments.js */ \"./scripts/les_knope/compliments.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const tricky = document.getElementById('tricky-text');\n  tricky.addEventListener('mouseover', () => {\n    tricky.innerText = \"(not a photographer but i took this photo!)\";\n  });\n  tricky.addEventListener('mouseleave', () => {\n    tricky.innerText = \"Software Developer\";\n  });\n\n  Object(_les_knope_compliments_js__WEBPACK_IMPORTED_MODULE_0__[\"bindComplimentStuff\"])();\n});\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  document.getElementById('about-me-button').addEventListener('click', (e) => {\n    e.preventDefault();\n    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });\n  });\n  const $navDropdown = $(document.getElementById('nav-dropdown'));\n  $navDropdown.hide();\n  const navDropdownUl = document.getElementById('nav-dropdown-ul');\n  const dropdownButton = document.getElementById('nav-dropdown-button');\n  const closeModalButtons = document.getElementsByClassName('close-modal-button');\n  const projects = document.getElementsByClassName('project-div');\n  \n  for (let button of closeModalButtons) {\n    bindCloseModalButton(button);\n  }\n  for (let project of projects) {\n    bindOpenProjectModals(project);\n  }\n\n  addDropdownFunctionality(dropdownButton, $navDropdown, navDropdownUl);\n\n  const $lowerNav = $('.lower-nav');\n  window.scrollY > 550 && $lowerNav.show();\n  bindNavBar($lowerNav, $navDropdown);\n});\n\nfunction bindNavBar($el, navDropdown) {\n  document.addEventListener('scroll', () => {\n    if (window.scrollY > 550) {\n      $el.fadeIn(150);\n    } else {\n      $el.fadeOut(150);\n      navDropdown.is(':visible') && navDropdown.fadeOut(150);\n    }\n  });\n}\n\nfunction addDropdownFunctionality(dropdownButton, $navDropdown, dropdownUl) {\n  dropdownButton.addEventListener('click', (e) => {\n    $navDropdown.show();\n    e.stopPropagation();\n    document.addEventListener('click', (e) => {\n      $navDropdown.hide();\n    });\n  });\n  // dropdownButton.addEventListener('mouseleave', () => {\n  //   navDropdown.classList.add('hidden');\n  // });\n\n  const dropdownLis = Array.from(dropdownUl.children);\n  dropdownLis.forEach( li => {\n    new CoolScroll(li);\n    li.addEventListener('click', () => $navDropdown.hide());\n  });\n}\n\nfunction bindCloseModalButton(button) {\n  const $correspondent = $(document.getElementById(button.dataset.correspondent));\n  button.addEventListener('click', () => {\n    $correspondent.fadeOut(150);\n    document.getElementsByTagName('body')[0].classList.remove('noscroll');\n  });\n}\n\nfunction bindOpenProjectModals(project) {\n  const $correspondent = $(document.getElementById(project.dataset.correspondent));\n  project.addEventListener('click', () => {\n    $correspondent.fadeIn(150);\n    document.getElementsByTagName('body')[0].classList.add('noscroll');\n  });\n}\n\nclass CoolScroll {\n  constructor(el){\n    this.el = el;\n    this.correspondent = document.getElementById(el.dataset.correspondent);\n    this.bindEvents();\n  }\n\n  bindEvents() {\n    this.el.addEventListener('click', () => {\n      this.correspondent.scrollIntoView({ behavior: 'smooth', block: \"start\", inline: \"nearest\" });\n    });\n  }\n}\n\n\n//# sourceURL=webpack:///./scripts/index.js?");

/***/ }),

/***/ "./scripts/les_knope/compliments.js":
/*!******************************************!*\
  !*** ./scripts/les_knope/compliments.js ***!
  \******************************************/
/*! exports provided: bindComplimentStuff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bindComplimentStuff\", function() { return bindComplimentStuff; });\nconst leslieCompliments = [\n\"you beautiful, talented, brillinat, powerful musk ox!\",\n\"you opalescent tree shark.\",\n\"you poetic and noble land mermaid!\",\n\"you beautiful, tropical fish!\",\n\"you beautiful, naive, sophisticated new born baby!\",\n\"you rainbow-infused space shark!\",\n\"you cunning, pliable, chestnut-haired sunfish!\",\n\"you beautiful, rule-breaking moth.\",\n\"you beautiful spinster!\",\n\"you perfect sunflower.\",\n\"you tricky minx!\",\n\"you are the most beautiful, glowing sun goddess ever.\",\n\"you beautiful, sassy mannequin come to life!\"\n];\n\nclass KnopeComplimentGenerator {\n  constructor(button, nameInput, complimentEl) {\n    this.complimentTracker = new Set();\n    this.nameInput = nameInput;\n    this.complimentEl = complimentEl;\n    const complimentContainer = document.getElementById('compliment-container');\n    [nameInput, button, complimentContainer].forEach(el => {\n      el.addEventListener('click', e => e.stopPropagation());\n    });\n    button.addEventListener('click', this.compliment.bind(this));\n  }\n\n  compliment() {\n    const name = this.nameInput.value;\n    const compliment = this.getComplimentFromList();\n    this.complimentEl.innerHTML = (`${name}, ${compliment}`);\n  }\n\n  getComplimentFromList() {\n    if (this.complimentTracker.size === leslieCompliments.length) {\n      this.complimentTracker.clear();\n    }\n\n    let idx = Math.floor(Math.random() * leslieCompliments.length);\n    while (this.complimentTracker.has(idx)) {\n      idx = Math.floor(Math.random() * leslieCompliments.length);\n    }\n\n    this.complimentTracker.add(idx);\n    this.numComplimentsGiven ++;\n    return leslieCompliments[idx];\n  }\n\n  clear() {\n    this.complimentEl.innerHTML = \"\";\n    this.nameInput.value = \"\";\n  }\n\n}\n\nfunction bindCompButton(button, background) {\n  button.addEventListener('click', () => {\n    console.log(background);\n    $(background).fadeIn();\n    document.getElementsByTagName('body')[0].classList.add('noscroll');\n  });\n}\n\nconst createComplimentGenerator = () => {\n  const lesComplimentButton = document.getElementById('les-compliment-button');\n  const nameInput = document.getElementById('name');\n  const complimentEl = document.getElementById('compliment');\n  return new KnopeComplimentGenerator(lesComplimentButton, nameInput, complimentEl);\n};\n\nconst bindComplimentStuff = () => {\n  const buttons = document.getElementsByClassName('les-knope');\n  const background = document.getElementById('compliment-modal-background');\n  Array.from(buttons).forEach( (button) => bindCompButton(button, background));\n  const comp = createComplimentGenerator();\n  background.addEventListener('click', () => {\n    $(background).fadeOut();\n    document.getElementsByTagName('body')[0].classList.remove('noscroll');\n    comp.clear();\n  });\n};\n\n\n//# sourceURL=webpack:///./scripts/les_knope/compliments.js?");

/***/ })

/******/ });