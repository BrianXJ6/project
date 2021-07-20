(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/admin"],{

/***/ "./resources/js/admin/admin.js":
/*!*************************************!*\
  !*** ./resources/js/admin/admin.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config/environment */ "./resources/js/admin/config/environment/index.js");
/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config/axios */ "./resources/js/admin/config/axios/index.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ "./resources/js/admin/router/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ "./resources/js/admin/store/index.js");
// Environment
 // Config local

 // Router / Store


 // Start

var app = new Vue({
  router: _router__WEBPACK_IMPORTED_MODULE_2__.default,
  store: _store__WEBPACK_IMPORTED_MODULE_3__.default
}).$mount('#app');

/***/ }),

/***/ "./resources/js/admin/config/axios/index.js":
/*!**************************************************!*\
  !*** ./resources/js/admin/config/axios/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = __webpack_require__(/*! ../../store */ "./resources/js/admin/store/index.js"),
    store = _require["default"];

var environment = 'admin';
var rtLogout = '/admin/logout';
var rtLogin = '/admin/login';
if (!store.state.token) forceLogout();
window.axios.defaults.headers.common['Authorization'] = "Bearer ".concat(store.state.token); // Interceptors

window.axios.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});
window.axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (error.response.status === 401) forceLogout();
  return Promise.reject(error);
});

function forceLogout() {
  return _forceLogout.apply(this, arguments);
}

function _forceLogout() {
  _forceLogout = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return window.axios.post(rtLogout).then(function () {
              localStorage.removeItem("".concat(environment, "Obj"));
              localStorage.removeItem("".concat(environment, "Token"));
              delete window.axios.defaults.headers.common['Authorization'];
              location.href = rtLogin;
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _forceLogout.apply(this, arguments);
}

/***/ }),

/***/ "./resources/js/admin/config/environment/index.js":
/*!********************************************************!*\
  !*** ./resources/js/admin/config/environment/index.js ***!
  \********************************************************/
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

/***/ "./resources/js/admin/router/index.js":
/*!********************************************!*\
  !*** ./resources/js/admin/router/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");


vue__WEBPACK_IMPORTED_MODULE_0__.default.use(vue_router__WEBPACK_IMPORTED_MODULE_1__.default); // Url base do dashboard

var baseUrl = '/admin/dashboard'; // Routes

var routes = [{
  path: baseUrl,
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("resources_js_admin_views_layouts_App_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../views/layouts/App */ "./resources/js/admin/views/layouts/App.vue"));
  },
  children: [{
    path: '',
    name: 'dashboard',
    component: function component() {
      return Promise.all(/*! import() */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("resources_js_admin_views_pages_home_Home_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../views/pages/home/Home */ "./resources/js/admin/views/pages/home/Home.vue"));
    }
  }, {
    path: 'perfil',
    name: 'profile',
    component: function component() {
      return Promise.all(/*! import() */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("resources_js_admin_views_pages_profile_Profile_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../views/pages/profile/Profile */ "./resources/js/admin/views/pages/profile/Profile.vue"));
    }
  }]
}]; // Start

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new vue_router__WEBPACK_IMPORTED_MODULE_1__.default({
  routes: routes,
  mode: 'history'
})); // <router-link to="/bar">Go to Bar</router-link>
// <router-view></router-view>

/***/ }),

/***/ "./resources/js/admin/store/index.js":
/*!*******************************************!*\
  !*** ./resources/js/admin/store/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


vue__WEBPACK_IMPORTED_MODULE_0__.default.use(vuex__WEBPACK_IMPORTED_MODULE_1__.default);
var adminObj = localStorage.getItem('adminObj');
var adminToken = localStorage.getItem('adminToken');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new vuex__WEBPACK_IMPORTED_MODULE_1__.default.Store({
  state: function state() {
    return {
      laravelRoutes: null,
      user: adminObj ? JSON.parse(adminObj) : null,
      token: adminToken ? adminToken : null
    };
  },
  mutations: {
    setUser: function setUser(state, obj) {
      return state.user = obj;
    },
    setLaravelRoutes: function setLaravelRoutes(state, obj) {
      return state.laravelRoutes = obj;
    }
  },
  actions: {},
  getters: {
    getUser: function getUser(state) {
      return state.user;
    },
    getLaravelRoutes: function getLaravelRoutes(state) {
      return state.laravelRoutes;
    }
  }
}));

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["/js/vendor"], () => (__webpack_exec__("./resources/js/admin/admin.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);