(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/web"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/web/components/user/UserLogin.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/web/components/user/UserLogin.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    laravelRoutes: {
      required: true,
      type: Object
    }
  },
  data: function data() {
    return {
      userLoginLoader: false,
      userLogin: {
        email: 'brianferreira15@hotmail.com',
        password: '321321321'
      }
    };
  },
  methods: {
    sendUserLoginForm: function sendUserLoginForm() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var response, _response$data, user, token, redirect;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.userLoginLoader = true;
                _context.prev = 1;
                _context.next = 4;
                return axios.post(_this.laravelRoutes['user.login'], _this.userLogin);

              case 4:
                response = _context.sent;
                _response$data = response.data, user = _response$data.user, token = _response$data.token, redirect = _response$data.redirect;
                localStorage.setItem('userObj', JSON.stringify(user));
                localStorage.setItem('userToken', token);

                _this.$snotify.success("Aguarde...").on(location.href = redirect);

                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](1);

                _this.$showErrors(_context.t0, _this.$snotify);

              case 14:
                _this.userLoginLoader = false;

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 11]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/web/components/user/UserLogout.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/web/components/user/UserLogout.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    laravelRoutes: {
      required: true,
      type: Object
    },
    label: {
      required: false,
      type: String,
      "default": 'Sair'
    }
  },
  data: function data() {
    return {
      spinerHtml: '<div class="spinner-border text-light mx-auto"></div>'
    };
  },
  methods: {
    processLogout: function processLogout() {
      var _this = this;

      this.$snotify.confirm('Deseja realmente sair?', {
        backdrop: 0.7,
        buttons: [{
          text: 'Sim',
          action: function action(toast) {
            return _this.logout(toast);
          }
        }, {
          text: 'Não',
          action: function action(toast) {
            return _this.$snotify.remove(toast.id);
          }
        }]
      });
    },
    logout: function logout(toast) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                toast.config.html = _this2.spinerHtml;
                _context.prev = 1;
                _context.next = 4;
                return axios.post(_this2.laravelRoutes['user.logout']);

              case 4:
                localStorage.removeItem('userObj');
                localStorage.removeItem('userToken');
                location.href = '/';
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](1);

                _this2.$showErrors(_context.t0, _this2.$snotify);

              case 12:
                _this2.$snotify.remove(toast.id);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 9]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/global/plugins/axios/index.js":
/*!****************************************************!*\
  !*** ./resources/js/global/plugins/axios/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// Axios
window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['Accept'] = 'application/json';

/***/ }),

/***/ "./resources/js/global/plugins/bootstrap/index.js":
/*!********************************************************!*\
  !*** ./resources/js/global/plugins/bootstrap/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_0__);
// Bootstrap
window.Popper = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js").default;


/***/ }),

/***/ "./resources/js/global/plugins/errors/index.js":
/*!*****************************************************!*\
  !*** ./resources/js/global/plugins/errors/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


vue__WEBPACK_IMPORTED_MODULE_0__.default.use({
  install: function install(Vue) {
    Vue.prototype.$showErrors = function (err, snotify) {
      if (!err) return;
      var _err$response$data = err.response.data,
          errors = _err$response$data.errors,
          message = _err$response$data.message;
      if (errors) Object.entries(errors).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            k = _ref2[0],
            v = _ref2[1];

        return v.forEach(function (msg) {
          return snotify.error(msg);
        });
      });else snotify.error(message);
      return err;
    };
  }
});

/***/ }),

/***/ "./resources/js/global/plugins/jquery/index.js":
/*!*****************************************************!*\
  !*** ./resources/js/global/plugins/jquery/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// Bootstrap and jQuery
window.$ = window.jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

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

/***/ "./resources/js/global/plugins/vue/index.js":
/*!**************************************************!*\
  !*** ./resources/js/global/plugins/vue/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// Vue
window.Vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js").default;

/***/ }),

/***/ "./resources/js/web/config/axios/index.js":
/*!************************************************!*\
  !*** ./resources/js/web/config/axios/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global_plugins_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../global/plugins/axios */ "./resources/js/global/plugins/axios/index.js");
/* harmony import */ var _global_plugins_axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_global_plugins_axios__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./resources/js/web/config/environment/index.js":
/*!******************************************************!*\
  !*** ./resources/js/web/config/environment/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global_plugins_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../global/plugins/vue */ "./resources/js/global/plugins/vue/index.js");
/* harmony import */ var _global_plugins_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_global_plugins_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _global_plugins_jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../global/plugins/jquery */ "./resources/js/global/plugins/jquery/index.js");
/* harmony import */ var _global_plugins_jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_global_plugins_jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _global_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../global/plugins/bootstrap */ "./resources/js/global/plugins/bootstrap/index.js");
/* harmony import */ var _global_plugins_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../global/plugins/axios */ "./resources/js/global/plugins/axios/index.js");
/* harmony import */ var _global_plugins_axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_global_plugins_axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _global_plugins_snotify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../global/plugins/snotify */ "./resources/js/global/plugins/snotify/index.js");
/* harmony import */ var _global_plugins_errors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../global/plugins/errors */ "./resources/js/global/plugins/errors/index.js");







/***/ }),

/***/ "./resources/js/web/web.js":
/*!*********************************!*\
  !*** ./resources/js/web/web.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config/environment */ "./resources/js/web/config/environment/index.js");
/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config/axios */ "./resources/js/web/config/axios/index.js");
// Environment
 // Config local

 // Vue auto components

var files = __webpack_require__("./resources/js/web/components sync recursive \\.vue$/");

files.keys().map(function (key) {
  return Vue.component(key.split('/').pop().split('.')[0], files(key)["default"]);
}); // Start

var app = new Vue().$mount('#app');

/***/ }),

/***/ "./resources/sass/web.scss":
/*!*********************************!*\
  !*** ./resources/sass/web.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/sass/user.scss":
/*!**********************************!*\
  !*** ./resources/sass/user.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/js/web/components/user/UserLogin.vue":
/*!********************************************************!*\
  !*** ./resources/js/web/components/user/UserLogin.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserLogin_vue_vue_type_template_id_38ae1eec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserLogin.vue?vue&type=template&id=38ae1eec& */ "./resources/js/web/components/user/UserLogin.vue?vue&type=template&id=38ae1eec&");
/* harmony import */ var _UserLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserLogin.vue?vue&type=script&lang=js& */ "./resources/js/web/components/user/UserLogin.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _UserLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _UserLogin_vue_vue_type_template_id_38ae1eec___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserLogin_vue_vue_type_template_id_38ae1eec___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/web/components/user/UserLogin.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/web/components/user/UserLogout.vue":
/*!*********************************************************!*\
  !*** ./resources/js/web/components/user/UserLogout.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserLogout_vue_vue_type_template_id_42f3ad8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserLogout.vue?vue&type=template&id=42f3ad8e& */ "./resources/js/web/components/user/UserLogout.vue?vue&type=template&id=42f3ad8e&");
/* harmony import */ var _UserLogout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserLogout.vue?vue&type=script&lang=js& */ "./resources/js/web/components/user/UserLogout.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _UserLogout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _UserLogout_vue_vue_type_template_id_42f3ad8e___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserLogout_vue_vue_type_template_id_42f3ad8e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/web/components/user/UserLogout.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/web/components/user/UserLogin.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/web/components/user/UserLogin.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserLogin.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/web/components/user/UserLogin.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/web/components/user/UserLogout.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/web/components/user/UserLogout.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserLogout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserLogout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/web/components/user/UserLogout.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserLogout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/web/components/user/UserLogin.vue?vue&type=template&id=38ae1eec&":
/*!***************************************************************************************!*\
  !*** ./resources/js/web/components/user/UserLogin.vue?vue&type=template&id=38ae1eec& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserLogin_vue_vue_type_template_id_38ae1eec___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserLogin_vue_vue_type_template_id_38ae1eec___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserLogin_vue_vue_type_template_id_38ae1eec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserLogin.vue?vue&type=template&id=38ae1eec& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/web/components/user/UserLogin.vue?vue&type=template&id=38ae1eec&");


/***/ }),

/***/ "./resources/js/web/components/user/UserLogout.vue?vue&type=template&id=42f3ad8e&":
/*!****************************************************************************************!*\
  !*** ./resources/js/web/components/user/UserLogout.vue?vue&type=template&id=42f3ad8e& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserLogout_vue_vue_type_template_id_42f3ad8e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserLogout_vue_vue_type_template_id_42f3ad8e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserLogout_vue_vue_type_template_id_42f3ad8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserLogout.vue?vue&type=template&id=42f3ad8e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/web/components/user/UserLogout.vue?vue&type=template&id=42f3ad8e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/web/components/user/UserLogin.vue?vue&type=template&id=38ae1eec&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/web/components/user/UserLogin.vue?vue&type=template&id=38ae1eec& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "form",
    {
      on: {
        submit: function($event) {
          $event.preventDefault()
          return _vm.sendUserLoginForm.apply(null, arguments)
        }
      }
    },
    [
      _c("div", { staticClass: "form-group" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.userLogin.email,
              expression: "userLogin.email"
            }
          ],
          staticClass: "form-control form-control-sm",
          attrs: {
            id: "userLogin.email",
            autofocus: "",
            type: "email",
            autocomplete: "email",
            placeholder: "exemplo@email.com",
            required: "",
            maxlength: "100"
          },
          domProps: { value: _vm.userLogin.email },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.userLogin, "email", $event.target.value)
            }
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _vm._m(1),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.userLogin.password,
              expression: "userLogin.password"
            }
          ],
          staticClass: "form-control form-control-sm",
          attrs: {
            id: "userLogin.password",
            type: "password",
            placeholder: "********",
            required: "",
            minlength: "8"
          },
          domProps: { value: _vm.userLogin.password },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.userLogin, "password", $event.target.value)
            }
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "text-right" }, [
        _vm.userLoginLoader
          ? _c("div", { staticClass: "spinner-border align-middle mr-2" })
          : _vm._e(),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-sm btn-outline-dark rounded-pill",
            attrs: { type: "submit", disabled: _vm.userLoginLoader }
          },
          [_vm._v("Logar")]
        )
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      {
        staticClass: "m-0 d-flex justify-content-between align-items-baseline",
        attrs: { for: "userLogin.email" }
      },
      [
        _c("span", [_vm._v("E-mail")]),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "small text-muted",
            attrs: { href: "#", tabindex: "-1", title: "Criar nova conta" }
          },
          [_vm._v("Criar conta")]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      {
        staticClass: "m-0 d-flex justify-content-between align-items-baseline",
        attrs: { for: "userLogin.password" }
      },
      [
        _c("span", [_vm._v("Senha")]),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "small text-muted",
            attrs: {
              href: "#",
              tabindex: "-1",
              title: "Solicitar recuperação de senha"
            }
          },
          [_vm._v("Esqueci a senha")]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/web/components/user/UserLogout.vue?vue&type=template&id=42f3ad8e&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/web/components/user/UserLogout.vue?vue&type=template&id=42f3ad8e& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "a",
    {
      staticClass: "pointer",
      on: {
        click: function($event) {
          $event.preventDefault()
          return _vm.processLogout.apply(null, arguments)
        }
      }
    },
    [_vm._v(_vm._s(_vm.label))]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/web/components sync recursive \\.vue$/":
/*!***************************************************!*\
  !*** ./resources/js/web/components/ sync \.vue$/ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./user/UserLogin.vue": "./resources/js/web/components/user/UserLogin.vue",
	"./user/UserLogout.vue": "./resources/js/web/components/user/UserLogout.vue"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/js/web/components sync recursive \\.vue$/";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/user","css/web","/js/vendor"], () => (__webpack_exec__("./resources/js/web/web.js"), __webpack_exec__("./resources/sass/web.scss"), __webpack_exec__("./resources/sass/user.scss")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);