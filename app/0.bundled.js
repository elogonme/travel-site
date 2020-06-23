(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./app/assets/scripts/modules/Modal.js":
/*!*********************************************!*\
  !*** ./app/assets/scripts/modules/Modal.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Modal {\r\n    constructor () {\r\n        this.injectHtml();\r\n        this.modal =  document.querySelector('.modal');\r\n        this.closeIcon = document.querySelector('.modal__close');\r\n        this.events();\r\n }\r\n\r\n events() {\r\n     // listen for close click\r\n     this.closeIcon.addEventListener('click', () => this.closeTheModal());\r\n\r\n     // pushes any key\r\n     document.addEventListener('keyup', event => this.keyPressHandler(event));\r\n }\r\n\r\n keyPressHandler(event) {\r\n     if (event.keyCode == 27) {\r\n        this.closeTheModal();\r\n     }\r\n }\r\n\r\n closeTheModal() {\r\n    this.modal.classList.remove('modal--is-visible');\r\n }\r\n\r\n openTheModal() {\r\n     this.modal.classList.add('modal--is-visible');\r\n }\r\n\r\n injectHtml() {\r\n    document.body.insertAdjacentHTML('beforeend', `\r\n    <div class=\"modal\">\r\n    <div class=\"modal__inner\">\r\n      <h2 class=\"section-title section-title--blue section-title--less-margin\"><img src=\"assets/images/icons/mail.svg\" class=\"section-title__icon\"> Get in <strong>Touch</strong></h2>\r\n      <div class=\"wrapper wrapper--narrow\">\r\n        <p class=\"modal__description\">We will have an online order system in place soon. Until then, connect with us on any of the platforms below!</p>\r\n      </div>\r\n\r\n      <div class=\"social-icons\">\r\n        <a href=\"#\" class=\"social-icons__icon\"><img src=\"assets/images/icons/facebook.svg\" alt=\"Facebook\"></a>\r\n        <a href=\"#\" class=\"social-icons__icon\"><img src=\"assets/images/icons/twitter.svg\" alt=\"Twitter\"></a>\r\n        <a href=\"#\" class=\"social-icons__icon\"><img src=\"assets/images/icons/instagram.svg\" alt=\"Instagram\"></a>\r\n        <a href=\"#\" class=\"social-icons__icon\"><img src=\"assets/images/icons/youtube.svg\" alt=\"YouTube\"></a>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal__close\">X</div>\r\n  </div>\r\n    `);\r\n }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\r\n\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/Modal.js?");

/***/ })

}]);