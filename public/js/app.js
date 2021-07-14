(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/app"],{

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global_plugins_snotify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global/plugins/snotify */ "./resources/js/global/plugins/snotify/index.js");
// Vue
window.Vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js").default; // Bootstrap and jQuery

window.$ = window.jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
window.Popper = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js").default;

__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js"); // Axios


window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['Accept'] = 'application/json'; // Global plugins

 // Vue auto components
// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));
// Vue single components
// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
// Start

var app = new Vue().$mount('#app');

/***/ }),

/***/ "./resources/js/global/plugins/snotify/index.js":
/*!******************************************************!*\
  !*** ./resources/js/global/plugins/snotify/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vue_snotify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-snotify */ "./node_modules/vue-snotify/vue-snotify.esm.js");


var options = {
  toast: {
    timeout: 3000,
    position: vue_snotify__WEBPACK_IMPORTED_MODULE_0__.SnotifyPosition.rightTop
  }
};
vue__WEBPACK_IMPORTED_MODULE_1__.default.use(vue_snotify__WEBPACK_IMPORTED_MODULE_0__.default, options); // <vue-snotify></vue-snotify>

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/app","/js/vendor"], () => (__webpack_exec__("./resources/js/app.js"), __webpack_exec__("./resources/sass/app.scss")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);