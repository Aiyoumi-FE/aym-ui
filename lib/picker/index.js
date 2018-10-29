module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 188);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(5)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 3 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(26)('wks');
var uid = __webpack_require__(21);
var Symbol = __webpack_require__(0).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(16);
var defined = __webpack_require__(13);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(10);
var createDesc = __webpack_require__(18);
module.exports = __webpack_require__(2) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(8);
var IE8_DOM_DEFINE = __webpack_require__(35);
var toPrimitive = __webpack_require__(28);
var dP = Object.defineProperty;

exports.f = __webpack_require__(2) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(3);
var ctx = __webpack_require__(19);
var hide = __webpack_require__(9);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(38), __esModule: true };

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(17);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(22);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(36);
var enumBugKeys = __webpack_require__(27);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(26)('keys');
var uid = __webpack_require__(21);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
var document = __webpack_require__(0).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(4);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(13);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            isVisible: false
        };
    },

    watch: {
        isShow: function isShow(to, from) {
            // this.isVisible = to
            to ? this.show() : this.hide();
        }
    },
    methods: {
        show: function show() {
            this.isVisible = true;
        },
        hide: function hide() {
            this.isVisible = false;
        }
    }
});

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = camelize;
var camelizeRE = /-(\w)/g;
function camelize(str) {
    str = String(str);
    return str.replace(camelizeRE, function (m, c) {
        return c ? c.toUpperCase() : '';
    });
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(14);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(15);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(2) && !__webpack_require__(5)(function () {
  return Object.defineProperty(__webpack_require__(25)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(11);
var toIObject = __webpack_require__(7);
var arrayIndexOf = __webpack_require__(41)(false);
var IE_PROTO = __webpack_require__(23)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_mixins_api__ = __webpack_require__(31);
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


var EVENT_MASK_CLICK = 'mask-click';
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'm-popup',
    mixins: [__WEBPACK_IMPORTED_MODULE_0__common_mixins_api__["a" /* default */]],
    props: {
        type: {
            type: String,
            default: ''
        },
        mask: {
            type: Boolean,
            default: true
        },
        transparent: {
            type: Boolean,
            default: false
        },
        content: {
            type: String,
            default: ''
        }
    },
    data: function data() {
        return {};
    },

    computed: {
        typeClass: function typeClass() {
            return this.type ? 'mui-' + this.type : '';
        },
        transparentStyle: function transparentStyle() {
            return 'background-color:rgba(0,0,0,0)';
        }
    },
    methods: {
        maskClick: function maskClick(e) {
            this.$emit(EVENT_MASK_CLICK, e);
        }
    }
});

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(39);
module.exports = __webpack_require__(3).Object.assign;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(12);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(40) });


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(20);
var gOPS = __webpack_require__(29);
var pIE = __webpack_require__(24);
var toObject = __webpack_require__(30);
var IObject = __webpack_require__(16);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(5)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(7);
var toLength = __webpack_require__(33);
var toAbsoluteIndex = __webpack_require__(42);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(14);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_src_libs_iconfont__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_src_libs_iconfont___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_src_libs_iconfont__);
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'm-icon',
    props: {
        type: {
            type: String,
            default: ''
        }
    },
    computed: {}
});

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createAPI;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lang_string__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__create_api_component__ = __webpack_require__(46);



function createAPI(Vue, Component, events, single) {
    var api = __WEBPACK_IMPORTED_MODULE_1__create_api_component__["a" /* default */].apply(this, arguments);
    var name = Component.name; // 组件名 m-xx
    var pureName = name.replace(/^m-/i, ''); // 去掉m- 的组件名
    var createName = '$' + Object(__WEBPACK_IMPORTED_MODULE_0__lang_string__["a" /* camelize */])('create-' + pureName); // 加上create的驼峰命名
    Vue.prototype[createName] = api.create;
    return api;
}

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createAPIComponent;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__instantiate_component__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parse_render_data__ = __webpack_require__(48);



function createAPIComponent(Vue, Component) {
    var events = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var single = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    var singleComponent = void 0;
    var singleInstance = void 0;
    var beforeFns = [];
    var api = {
        before: function before(fn) {
            beforeFns.push(fn);
        },
        open: function open(data, renderFn, instanceSingle) {
            if (typeof renderFn !== 'function') {
                instanceSingle = renderFn;
                renderFn = null;
            }
            beforeFns.forEach(function (before) {
                before(data, renderFn, instanceSingle);
            });
            if (instanceSingle === undefined) {
                instanceSingle = single;
            }
            if (instanceSingle && singleComponent) {
                singleInstance.updateRenderData(data, renderFn);
                singleInstance.$forceUpdate();
                return singleComponent;
            }

            var component = Object(__WEBPACK_IMPORTED_MODULE_0__instantiate_component__["a" /* default */])(Vue, Component, data, renderFn);
            var instance = component.$parent;
            var originRemove = component.remove;

            component.remove = function () {
                originRemove && originRemove.call(this);
                instance.destroy();
                if (instanceSingle) {
                    singleComponent = null;
                    singleInstance = null;
                }
            };
            var originShow = component.show;
            component.show = function () {
                originShow && originShow.call(this);
                return this;
            };
            var originHide = component.hide;
            component.hide = function () {
                originHide && originHide.call(this);
                return this;
            };

            if (single) {
                singleComponent = component;
                singleInstance = instance;
            }
            // component.show && component.show()
            return component;
        },
        create: function create(config, renderFn, single) {
            var ownerInstance = this;
            var component = api.open(Object(__WEBPACK_IMPORTED_MODULE_1__parse_render_data__["a" /* default */])(config, events), renderFn, single);
            if (component.__parent !== ownerInstance) {
                component.__parent = ownerInstance;
                var beforeDestroy = function beforeDestroy() {
                    if (component.__parent === ownerInstance) {
                        component.remove();
                    }
                    ownerInstance.$off('hook:beforeDestroy', beforeDestroy);
                    component.__parent = null;
                };
                ownerInstance.$on('hook:beforeDestroy', beforeDestroy);
            }
            return component;
        }
        // create(config, renderFn) {
        //     return api.open(parseRenderData(config, events), renderFn)
        // }

    };
    return api;
}

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = instantiateComponent;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);


function instantiateComponent(Vue, Component, data, renderFn) {
    var renderData = void 0;
    var childrenRenderFn = void 0;
    var instance = new Vue({
        render: function render(createElement, context) {
            var children = childrenRenderFn && childrenRenderFn(createElement);
            if (children && !Array.isArray(children)) {
                children = [children];
            }
            return createElement(Component, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, renderData), children || []);
        },

        methods: {
            init: function init() {
                document.body.appendChild(this.$el);
            },
            destroy: function destroy() {
                this.$destroy();
                document.body.removeChild(this.$el);
            }
        }
    });
    instance.updateRenderData = function (data, render) {
        renderData = data;
        childrenRenderFn = render;
    };
    instance.updateRenderData(data, renderFn);
    instance.$mount();
    instance.init();
    var component = instance.$children[0];
    component.$updateProps = function (props) {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(renderData.props, props);
        instance.$forceUpdate();
    };
    return component;
}

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = parseRenderData;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lang_string__ = __webpack_require__(32);


function parseRenderData() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var events = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    events = parseEvents(events);
    var props = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, data);
    var on = {};
    for (var name in events) {
        if (events.hasOwnProperty(name)) {
            var handlerName = events[name];
            if (props[handlerName]) {
                on[name] = props[handlerName];
                delete props[handlerName];
            }
        }
    }
    return {
        props: props,
        on: on
    };
}

function parseEvents(events) {
    var parsedEvents = {};
    events.forEach(function (name) {
        parsedEvents[name] = Object(__WEBPACK_IMPORTED_MODULE_1__lang_string__["a" /* camelize */])('on-' + name);
    });
    return parsedEvents;
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(10).f;
var has = __webpack_require__(11);
var TAG = __webpack_require__(6)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_popup_vue__ = __webpack_require__(37);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3dd7cefe_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_popup_vue__ = __webpack_require__(52);
function injectStyle (ssrContext) {
  __webpack_require__(51)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_popup_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3dd7cefe_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_popup_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 51 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isVisible),expression:"isVisible"}],staticClass:"mui-popup",class:_vm.typeClass},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.mask),expression:"mask"}],staticClass:"mui-mask",style:(_vm.transparent? _vm.transparentStyle :''),on:{"click":_vm.maskClick}}),_vm._v(" "),_c('div',{staticClass:"mui-popup__container"},[(_vm.$slots.default)?_c('div',{staticClass:"mui-popup__content"},[_vm._t("default")],2):_c('div',{staticClass:"mui-popup__content",domProps:{"innerHTML":_vm._s(_vm.content)}})])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_icon_vue__ = __webpack_require__(44);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_57b6d73b_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_icon_vue__ = __webpack_require__(57);
function injectStyle (ssrContext) {
  __webpack_require__(55)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_icon_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_57b6d73b_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_icon_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 55 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 56 */
/***/ (function(module, exports) {

(function (window) {
  var svgSprite = '<svg><symbol id="icon-arrow2" viewBox="0 0 1024 1024"><path d="M238.933333 29.866667c-34.133333 34.133333-34.133333 85.333333 0 119.466666L601.6 512 238.933333 874.666667c-34.133333 34.133333-34.133333 85.333333 0 119.466666 34.133333 34.133333 85.333333 34.133333 119.466667 0l422.4-422.4c17.066667-17.066667 25.6-38.4 25.6-59.733333s-8.533333-42.666667-25.6-59.733333L362.666667 29.866667C328.533333-4.266667 273.066667-4.266667 238.933333 29.866667z"  ></path></symbol><symbol id="icon-back" viewBox="0 0 1024 1024"><path d="M131.2 512L553.6 89.6c19.2-19.2 19.2-48 0-67.2-19.2-19.2-48-19.2-67.2 0L28.8 476.8c-19.2 19.2-19.2 48 0 67.2l454.4 454.4c9.6 9.6 22.4 12.8 35.2 12.8s25.6-3.2 35.2-12.8c19.2-19.2 19.2-48 0-67.2L131.2 512z"  ></path></symbol><symbol id="icon-ask" viewBox="0 0 1024 1024"><path d="M512 23.272727C242.036364 23.272727 23.272727 242.036364 23.272727 512s218.763636 488.727273 488.727273 488.727273 488.727273-218.763636 488.727273-488.727273S781.963636 23.272727 512 23.272727z m0 930.909091C267.636364 954.181818 69.818182 756.363636 69.818182 512S267.636364 69.818182 512 69.818182s442.181818 197.818182 442.181818 442.181818-197.818182 442.181818-442.181818 442.181818z"  ></path><path d="M500.363636 693.527273c-13.963636 0-25.6 4.654545-34.909091 13.963636-9.309091 9.309091-13.963636 20.945455-13.963636 34.909091s4.654545 25.6 13.963636 34.909091c9.309091 9.309091 20.945455 13.963636 34.909091 13.963636s25.6-4.654545 34.909091-13.963636c9.309091-9.309091 13.963636-20.945455 13.963637-34.909091s-4.654545-25.6-13.963637-34.909091c-9.309091-9.309091-20.945455-13.963636-34.909091-13.963636zM516.654545 232.727273c-44.218182 0-81.454545 13.963636-109.381818 41.890909-27.927273 27.927273-41.890909 60.509091-41.890909 97.745454 0 18.618182 9.309091 27.927273 27.927273 27.927273 18.618182 0 27.927273-9.309091 27.927273-30.254545 2.327273-23.272727 11.636364-44.218182 27.927272-60.509091 16.290909-16.290909 39.563636-23.272727 67.490909-23.272728s51.2 6.981818 65.163637 20.945455c16.290909 13.963636 23.272727 34.909091 23.272727 60.509091 0 20.945455-2.327273 34.909091-9.309091 46.545454-2.327273 4.654545-9.309091 13.963636-16.290909 23.272728-9.309091 9.309091-18.618182 20.945455-34.909091 34.909091-48.872727 46.545455-72.145455 93.090909-72.145454 139.636363 0 11.636364 2.327273 20.945455 4.654545 25.6 2.327273 4.654545 11.636364 6.981818 25.6 6.981818 16.290909 0 25.6-11.636364 25.6-32.581818 0-11.636364 2.327273-23.272727 4.654546-34.909091 2.327273-9.309091 9.309091-20.945455 18.618181-34.909091s25.6-30.254545 46.545455-51.2c23.272727-23.272727 39.563636-41.890909 48.872727-60.50909 11.636364-18.618182 16.290909-37.236364 16.290909-60.509091 0-44.218182-11.636364-79.127273-37.236363-104.727273-30.254545-20.945455-65.163636-32.581818-109.381819-32.581818z"  ></path></symbol><symbol id="icon-back1" viewBox="0 0 1024 1024"><path d="M79.127273 507.345455L493.381818 95.418182c9.309091-9.309091 9.309091-23.272727 0-32.581818s-23.272727-9.309091-32.581818 0L30.254545 491.054545c-9.309091 9.309091-9.309091 23.272727 0 32.581819L460.8 954.181818c4.654545 4.654545 11.636364 6.981818 16.290909 6.981818s11.636364-2.327273 16.290909-6.981818c9.309091-9.309091 9.309091-23.272727 0-32.581818L79.127273 507.345455z"  ></path></symbol><symbol id="icon-attetion" viewBox="0 0 1024 1024"><path d="M512 96c230.4 0 416 185.6 416 416s-185.6 416-416 416S96 742.4 96 512 281.6 96 512 96m0-64C246.4 32 32 246.4 32 512s214.4 480 480 480 480-214.4 480-480S774.4 32 512 32z"  ></path><path d="M512 675.2c-19.2 0-32-12.8-32-32V243.2c0-19.2 12.8-32 32-32s32 12.8 32 32v400c0 16-16 32-32 32zM512 812.8c-19.2 0-32-12.8-32-32v-28.8c0-19.2 12.8-32 32-32s32 12.8 32 32v28.8c0 19.2-16 32-32 32z"  ></path></symbol><symbol id="icon-bakctop" viewBox="0 0 1024 1024"><path d="M512 0C228.693333 0 0 228.693333 0 512s228.693333 512 512 512 512-228.693333 512-512S795.306667 0 512 0z m0 989.866667C249.173333 989.866667 34.133333 774.826667 34.133333 512S249.173333 34.133333 512 34.133333s477.866667 215.04 477.866667 477.866667-215.04 477.866667-477.866667 477.866667z m11.946667-605.866667c-1.706667-1.706667-3.413333-1.706667-5.12-3.413333-1.706667 0-3.413333-1.706667-5.12-1.706667h-6.826667c-1.706667 0-3.413333 1.706667-5.12 3.413333L310.613333 573.44c-6.826667 6.826667-6.826667 17.066667 0 23.893333 6.826667 6.826667 17.066667 6.826667 23.893334 0l160.426666-160.426666v395.946666c0 10.24 6.826667 17.066667 17.066667 17.066667s17.066667-6.826667 17.066667-17.066667V436.906667l160.426666 160.426666c3.413333 3.413333 8.533333 5.12 11.946667 5.12 3.413333 0 8.533333-1.706667 11.946667-5.12 6.826667-6.826667 6.826667-17.066667 0-23.893333L523.946667 384z m215.04-117.76H285.013333c-10.24 0-17.066667 6.826667-17.066666 17.066667s6.826667 17.066667 17.066666 17.066666h453.973334c10.24 0 17.066667-6.826667 17.066666-17.066666s-6.826667-17.066667-17.066666-17.066667z"  ></path></symbol><symbol id="icon-check" viewBox="0 0 1024 1024"><path d="M15.753846 571.076923c-7.876923-7.876923-7.876923-19.692308-3.938461-31.507692l27.56923-31.507693c7.876923-7.876923 19.692308-11.815385 27.569231-3.938461l228.430769 153.6c19.692308 15.753846 47.261538 11.815385 63.015385 0L968.861538 153.6c7.876923-7.876923 19.692308-3.938462 27.569231 0l11.815385 11.815385c7.876923 7.876923 7.876923 19.692308 0 27.56923L354.461538 862.523077c-15.753846 15.753846-39.384615 15.753846-55.138461 0l-283.569231-291.446154z"  ></path></symbol><symbol id="icon-checkbox_unchecked" viewBox="0 0 1024 1024"><path d="M512 995.555556C244.622222 995.555556 28.444444 779.377778 28.444444 512S244.622222 28.444444 512 28.444444s483.555556 216.177778 483.555556 483.555556-216.177778 483.555556-483.555556 483.555556z m0-910.222223C275.911111 85.333333 85.333333 275.911111 85.333333 512s190.577778 426.666667 426.666667 426.666667 426.666667-190.577778 426.666667-426.666667S748.088889 85.333333 512 85.333333z"  ></path></symbol><symbol id="icon-check1" viewBox="0 0 1024 1024"><path d="M948.705882 234.917647c-12.047059-12.047059-30.117647-12.047059-42.164706 0L391.529412 749.929412l-274.070588-274.070588c-12.047059-12.047059-30.117647-12.047059-42.164706 0s-12.047059 30.117647 0 42.164705l295.152941 295.152942c6.023529 6.023529 15.058824 9.035294 21.082353 9.035294s15.058824-3.011765 21.082353-9.035294L948.705882 277.082353c12.047059-12.047059 12.047059-33.129412 0-42.164706z"  ></path></symbol><symbol id="icon-close" viewBox="0 0 1024 1024"><path d="M579.2 512l384-384c19.2-19.2 19.2-48 0-67.2-19.2-19.2-48-19.2-67.2 0l-384 384-384-384c-19.2-19.2-48-19.2-67.2 0-19.2 16-19.2 48 0 67.2l384 384-384 384c-19.2 19.2-19.2 48 0 67.2 9.6 9.6 22.4 12.8 35.2 12.8s25.6-3.2 35.2-12.8l384-384 384 384c9.6 9.6 22.4 12.8 35.2 12.8s25.6-3.2 35.2-12.8c19.2-19.2 19.2-48 0-67.2L579.2 512z"  ></path></symbol><symbol id="icon-close1" viewBox="0 0 1024 1024"><path d="M544.581818 512L919.272727 137.309091c9.309091-9.309091 9.309091-23.272727 0-32.581818s-23.272727-9.309091-32.581818 0L512 479.418182 137.309091 104.727273c-9.309091-9.309091-23.272727-9.309091-32.581818 0s-9.309091 23.272727 0 32.581818L479.418182 512 104.727273 886.690909c-9.309091 9.309091-9.309091 23.272727 0 32.581818 4.654545 4.654545 11.636364 6.981818 16.290909 6.981818s11.636364-2.327273 16.290909-6.981818L512 544.581818l374.690909 374.690909c4.654545 4.654545 11.636364 6.981818 16.290909 6.981818s11.636364-2.327273 16.290909-6.981818c9.309091-9.309091 9.309091-23.272727 0-32.581818L544.581818 512z"  ></path></symbol><symbol id="icon-collect" viewBox="0 0 1024 1024"><path d="M512 85.333333c17.066667 0 34.133333 10.666667 42.666667 25.6l100.266666 206.933334c6.4 12.8 19.2 21.333333 32 23.466666l232.533334 34.133334c17.066667 2.133333 32 14.933333 36.266666 29.866666 6.4 14.933333 2.133333 32-10.666666 44.8l-170.666667 168.533334c-10.666667 10.666667-14.933333 23.466667-12.8 38.4l40.533333 232.533333c2.133333 17.066667-4.266667 32-19.2 42.666667-6.4 4.266667-14.933333 6.4-25.6 6.4-8.533333 0-14.933333-2.133333-23.466666-6.4l-202.666667-106.666667c-6.4-4.266667-12.8-4.266667-19.2-4.266667-6.4 0-12.8 2.133333-19.2 4.266667l-202.666667 106.666667c-6.4 4.266667-14.933333 6.4-23.466666 6.4-10.666667 0-19.2-2.133333-27.733334-8.533334-14.933333-10.666667-21.333333-25.6-19.2-42.666666l40.533334-232.533334c2.133333-12.8-2.133333-27.733333-12.8-38.4l-170.666667-168.533333c-12.8-10.666667-14.933333-27.733333-10.666667-42.666667 6.4-14.933333 19.2-27.733333 36.266667-29.866666l234.666667-34.133334c14.933333-2.133333 25.6-10.666667 32-23.466666L469.333333 110.933333c8.533333-14.933333 25.6-25.6 42.666667-25.6m0-42.666666c-34.133333 0-66.133333 19.2-81.066667 49.066666L330.666667 298.666667 98.133333 332.8c-32 4.266667-59.733333 27.733333-70.4 57.6-10.666667 32-2.133333 64 21.333334 87.466667l170.666666 168.533333-40.533333 234.666667c-6.4 32 8.533333 66.133333 36.266667 85.333333 14.933333 10.666667 34.133333 14.933333 51.2 14.933333 14.933333 0 29.866667-4.266667 42.666666-10.666666l202.666667-106.666667 202.666667 106.666667c12.8 6.4 27.733333 10.666667 42.666666 10.666666 19.2 0 36.266667-6.4 51.2-14.933333 27.733333-19.2 42.666667-53.333333 36.266667-85.333333l-40.533333-232.533334 170.666666-168.533333c23.466667-23.466667 32-57.6 21.333334-87.466667-10.666667-29.866667-38.4-53.333333-70.4-57.6L693.333333 298.666667l-100.266666-206.933334C578.133333 61.866667 546.133333 42.666667 512 42.666667z"  ></path></symbol><symbol id="icon-find_nor" viewBox="0 0 1024 1024"><path d="M512 981.333333C253.866667 981.333333 42.666667 770.133333 42.666667 512S253.866667 42.666667 512 42.666667s469.333333 211.2 469.333333 469.333333-211.2 469.333333-469.333333 469.333333z m0-876.8C288 104.533333 104.533333 288 104.533333 512c0 224 183.466667 407.466667 407.466667 407.466667 224 0 407.466667-183.466667 407.466667-407.466667 0-224-183.466667-407.466667-407.466667-407.466667z"  ></path><path d="M644.266667 262.4l-192 196.266667c-8.533333 8.533333-12.8 17.066667-14.933334 27.733333L362.666667 750.933333c-2.133333 10.666667 10.666667 17.066667 17.066666 10.666667l192-196.266667c8.533333-8.533333 12.8-17.066667 14.933334-27.733333L661.333333 273.066667c2.133333-10.666667-10.666667-17.066667-17.066666-10.666667z"  ></path></symbol><symbol id="icon-fail" viewBox="0 0 1024 1024"><path d="M512 1024C229.993651 1024 0 794.006349 0 512S229.993651 0 512 0s512 229.993651 512 512-229.993651 512-512 512zM512 48.761905C256.812698 48.761905 48.761905 256.812698 48.761905 512s208.050794 463.238095 463.238095 463.238095 463.238095-208.050794 463.238095-463.238095S767.187302 48.761905 512 48.761905z"  ></path><path d="M325.079365 507.936508c-13.815873 0-24.380952-10.565079-24.380952-24.380952v-105.650794c0-13.815873 10.565079-24.380952 24.380952-24.380952s24.380952 10.565079 24.380952 24.380952v105.650794c0 13.815873-10.565079 24.380952-24.380952 24.380952zM682.666667 512c-13.815873 0-24.380952-10.565079-24.380953-24.380952V381.968254c0-13.815873 10.565079-24.380952 24.380953-24.380952s24.380952 10.565079 24.380952 24.380952v105.650794c0 13.815873-10.565079 24.380952-24.380952 24.380952zM344.584127 809.447619c-5.688889 0-11.377778-1.625397-15.44127-5.688889-10.565079-8.939683-11.377778-24.380952-3.250794-34.133333 38.196825-45.511111 110.526984-73.955556 190.171429-73.955556 78.019048 0 149.536508 27.631746 187.733333 71.517461 8.939683 9.752381 8.126984 25.193651-2.438095 34.133333-9.752381 8.939683-25.193651 8.126984-34.133333-2.438095-29.257143-33.320635-88.584127-54.450794-151.161905-54.450794-64.203175 0-124.342857 21.942857-152.787302 56.076191-4.87619 5.688889-12.190476 8.939683-18.692063 8.939682z"  ></path></symbol><symbol id="icon-find_sel" viewBox="0 0 1024 1024"><path d="M512 981.333333C253.866667 981.333333 42.666667 770.133333 42.666667 512S253.866667 42.666667 512 42.666667s469.333333 211.2 469.333333 469.333333-211.2 469.333333-469.333333 469.333333z"  ></path><path d="M644.266667 262.4l-192 196.266667c-8.533333 8.533333-12.8 17.066667-14.933334 27.733333L362.666667 750.933333c-2.133333 10.666667 10.666667 17.066667 17.066666 10.666667l192-196.266667c8.533333-8.533333 12.8-17.066667 14.933334-27.733333L661.333333 273.066667c2.133333-10.666667-10.666667-17.066667-17.066666-10.666667z" fill="#ffffff" ></path></symbol><symbol id="icon-home_nor" viewBox="0 0 1024 1024"><path d="M791.466667 1002.666667h-149.333334c-40.533333 0-72.533333-32-72.533333-72.533334V710.4c0-4.266667-4.266667-6.4-6.4-6.4h-100.266667c-4.266667 0-6.4 4.266667-6.4 6.4v219.733333c0 40.533333-32 72.533333-72.533333 72.533334h-149.333333c-61.866667 0-113.066667-51.2-113.066667-113.066667v-362.666667H53.333333c-12.8 0-25.6-8.533333-29.866666-21.333333-4.266667-12.8-2.133333-27.733333 8.533333-36.266667L488.533333 32c12.8-12.8 32-12.8 44.8 0L992 469.333333c10.666667 8.533333 12.8 23.466667 8.533333 36.266667-4.266667 12.8-17.066667 21.333333-29.866666 21.333333h-66.133334v364.8c-2.133333 59.733333-51.2 110.933333-113.066666 110.933334zM462.933333 637.866667h100.266667c40.533333 0 72.533333 32 72.533333 72.533333v219.733333c0 4.266667 2.133333 6.4 6.4 6.4h149.333334c25.6 0 46.933333-21.333333 46.933333-46.933333V492.8c0-17.066667 14.933333-32 32-32h17.066667L512 102.4 136.533333 460.8h17.066667c17.066667 0 32 14.933333 32 32v396.8c0 25.6 21.333333 46.933333 46.933333 46.933333h149.333334c4.266667 0 6.4-2.133333 6.4-6.4V710.4c2.133333-38.4 34.133333-72.533333 74.666666-72.533333z"  ></path></symbol><symbol id="icon-home_sel" viewBox="0 0 1024 1024"><path d="M497.066667 38.4L40.533333 473.6c-6.4 6.4-2.133333 19.2 6.4 19.2H128V917.333333c0 46.933333 38.4 85.333333 85.333333 85.333334h160c23.466667 0 42.666667-19.2 42.666667-42.666667V725.333333c0-23.466667 19.2-42.666667 42.666667-42.666666h106.666666c23.466667 0 42.666667 19.2 42.666667 42.666666v234.666667c0 23.466667 19.2 42.666667 42.666667 42.666667H810.666667c46.933333 0 85.333333-38.4 85.333333-85.333334V492.8h81.066667c10.666667 0 14.933333-12.8 6.4-19.2L526.933333 38.4c-8.533333-8.533333-21.333333-8.533333-29.866666 0z"  ></path></symbol><symbol id="icon-market" viewBox="0 0 1024 1024"><path d="M917.333333 603.733333c-12.8 0-21.333333 8.533333-21.333333 21.333334v238.933333c0 12.8-21.333333 27.733333-49.066667 27.733333H177.066667C149.333333 891.733333 128 876.8 128 864V625.066667c0-12.8-8.533333-21.333333-21.333333-21.333334s-21.333333 8.533333-21.333334 21.333334v238.933333c0 40.533333 40.533333 70.4 91.733334 70.4h667.733333c51.2 0 91.733333-32 91.733333-70.4V625.066667c2.133333-10.666667-8.533333-21.333333-19.2-21.333334zM994.133333 334.933333c0-2.133333 0-2.133333 0 0 0-4.266667-2.133333-6.4-2.133333-6.4l-83.2-206.933333c-14.933333-42.666667-55.466667-68.266667-104.533333-68.266667H221.866667c-49.066667 0-87.466667 25.6-100.266667 66.133334l-89.6 211.2c0 2.133333 0 2.133333-2.133333 4.266666-4.266667 19.2-8.533333 38.4-8.533334 59.733334 0 72.533333 40.533333 138.666667 102.4 170.666666 25.6 14.933333 57.6 21.333333 91.733334 21.333334 57.6 0 110.933333-25.6 149.333333-70.4 36.266667 42.666667 89.6 68.266667 147.2 68.266666s110.933333-25.6 147.2-68.266666c36.266667 42.666667 89.6 68.266667 149.333333 68.266666 36.266667 0 66.133333-8.533333 93.866667-21.333333 61.866667-34.133333 102.4-100.266667 102.4-170.666667-2.133333-19.2-6.4-40.533333-10.666667-57.6z m-113.066666 192c-19.2 10.666667-44.8 17.066667-72.533334 17.066667-44.8 0-87.466667-19.2-115.2-53.333333-8.533333-10.666667-19.2-14.933333-32-14.933334s-25.6 6.4-32 14.933334c-27.733333 34.133333-70.4 53.333333-113.066666 53.333333-44.8 0-87.466667-19.2-115.2-53.333333-8.533333-10.666667-19.2-14.933333-32-14.933334s-25.6 6.4-32 14.933334c-27.733333 34.133333-70.4 53.333333-115.2 53.333333-27.733333 0-51.2-4.266667-70.4-14.933333H149.333333c-55.466667-27.733333-85.333333-78.933333-85.333333-134.4 0-17.066667 2.133333-32 8.533333-46.933334 0-2.133333 0-2.133333 2.133334-4.266666l87.466666-206.933334s0-2.133333 2.133334-2.133333C170.666667 106.666667 192 93.866667 221.866667 93.866667h582.4c29.866667 0 55.466667 14.933333 64 40.533333v2.133333l83.2 204.8c0 2.133333 0 4.266667 2.133333 6.4 4.266667 14.933333 6.4 29.866667 6.4 46.933334 0 55.466667-29.866667 106.666667-78.933333 132.266666z"  ></path><path d="M776.533333 285.866667H247.466667c-12.8 0-21.333333 8.533333-21.333334 21.333333s8.533333 21.333333 21.333334 21.333333h529.066666c12.8 0 21.333333-8.533333 21.333334-21.333333s-10.666667-21.333333-21.333334-21.333333z"  ></path></symbol><symbol id="icon-message" viewBox="0 0 1024 1024"><path d="M870.4 58.181818H153.6c-69.818182 0-121.018182 55.854545-121.018182 128v525.963637c0 72.145455 48.872727 121.018182 121.018182 121.018181h200.145455l118.690909 114.036364c11.636364 11.636364 25.6 16.290909 41.890909 16.290909s30.254545-6.981818 41.890909-16.290909l116.363636-114.036364h197.818182c72.145455 0 121.018182-48.872727 121.018182-121.018181V186.181818c0-72.145455-51.2-128-121.018182-128z m74.472727 653.963637c0 46.545455-30.254545 74.472727-74.472727 74.472727h-209.454545c-6.981818 0-11.636364 2.327273-16.29091 6.981818l-123.345454 121.018182c-2.327273 2.327273-4.654545 4.654545-9.309091 4.654545-2.327273 0-4.654545 0-9.309091-4.654545l-125.672727-121.018182c-4.654545-4.654545-9.309091-6.981818-16.290909-6.981818h-209.454546c-46.545455 0-74.472727-27.927273-74.472727-74.472727V186.181818c0-48.872727 30.254545-81.454545 74.472727-81.454545h716.8c44.218182 0 74.472727 32.581818 74.472728 81.454545v525.963637z"  ></path><path d="M286.254545 442.181818m-53.527272 0a53.527273 53.527273 0 1 0 107.054545 0 53.527273 53.527273 0 1 0-107.054545 0Z"  ></path><path d="M512 442.181818m-53.527273 0a53.527273 53.527273 0 1 0 107.054546 0 53.527273 53.527273 0 1 0-107.054546 0Z"  ></path><path d="M737.745455 442.181818m-53.527273 0a53.527273 53.527273 0 1 0 107.054545 0 53.527273 53.527273 0 1 0-107.054545 0Z"  ></path></symbol><symbol id="icon-mine1_nor" viewBox="0 0 1024 1024"><path d="M898.133333 972.8H110.933333c-19.2 0-36.266667-8.533333-49.066666-23.466667-10.666667-12.8-14.933333-27.733333-14.933334-42.666666 0-64 19.2-108.8 59.733334-140.8 34.133333-25.6 78.933333-38.4 125.866666-49.066667 38.4-8.533333 70.4-25.6 100.266667-46.933333 19.2-14.933333 29.866667-27.733333 34.133333-32v-17.066667-2.133333l-6.4-14.933334c-2.133333-6.4-12.8-32-21.333333-53.333333l-2.133333-4.266667c-10.666667-8.533333-25.6-23.466667-40.533334-44.8l-2.133333-2.133333c-14.933333-27.733333-21.333333-57.6-17.066667-87.466667 2.133333-17.066667 8.533333-32 14.933334-44.8-10.666667-36.266667-12.8-78.933333-10.666667-123.733333 2.133333-46.933333 23.466667-91.733333 57.6-125.866667 27.733333-27.733333 81.066667-61.866667 166.4-61.866666 157.866667 0 219.733333 113.066667 224 187.733333 2.133333 46.933333 0 87.466667-10.666667 125.866667 21.333333 34.133333 27.733333 83.2-2.133333 132.266666l-2.133333 4.266667c-14.933333 21.333333-27.733333 32-38.4 42.666667l-2.133334 4.266666c-6.4 10.666667-12.8 29.866667-17.066666 40.533334-4.266667 8.533333-6.4 14.933333-6.4 17.066666l-4.266667 6.4s0 2.133333-2.133333 2.133334v17.066666c2.133333 4.266667 14.933333 17.066667 34.133333 34.133334 27.733333 21.333333 61.866667 38.4 98.133333 46.933333 53.333333 12.8 93.866667 23.466667 128 49.066667 38.4 29.866667 57.6 76.8 55.466667 140.8 2.133333 34.133333-25.6 66.133333-61.866667 66.133333zM420.266667 582.4l6.4 14.933333c2.133333 6.4 4.266667 12.8 4.266666 19.2 0 17.066667 0 40.533333-10.666666 55.466667-8.533333 10.666667-25.6 29.866667-49.066667 49.066667-36.266667 27.733333-76.8 46.933333-121.6 57.6-40.533333 10.666667-78.933333 19.2-102.4 38.4-17.066667 12.8-34.133333 34.133333-34.133333 89.6 0 0 0 2.133333 2.133333 2.133333h787.2l2.133333-2.133333c2.133333-55.466667-14.933333-76.8-32-89.6-21.333333-17.066667-57.6-25.6-102.4-38.4C725.333333 768 682.666667 746.666667 648.533333 721.066667c-32-23.466667-46.933333-46.933333-49.066666-49.066667-10.666667-17.066667-10.666667-34.133333-10.666667-55.466667 0-10.666667 4.266667-21.333333 6.4-27.733333l2.133333-6.4c0-2.133333 2.133333-6.4 6.4-14.933333 6.4-14.933333 12.8-29.866667 17.066667-42.666667v-2.133333l4.266667-8.533334c2.133333-4.266667 6.4-8.533333 8.533333-12.8l4.266667-4.266666c6.4-6.4 14.933333-14.933333 27.733333-32 19.2-29.866667 10.666667-57.6-2.133333-70.4l-12.8-12.8 6.4-17.066667c10.666667-36.266667 14.933333-74.666667 12.8-119.466667-2.133333-51.2-46.933333-128-160-128-64 0-102.4 23.466667-121.6 42.666667a130.986667 130.986667 0 0 0-38.4 83.2c-2.133333 44.8 2.133333 83.2 12.8 115.2l6.4 17.066667-10.666667 12.8c-6.4 8.533333-10.666667 17.066667-12.8 27.733333-2.133333 14.933333 2.133333 32 10.666667 46.933333 10.666667 14.933333 19.2 25.6 27.733333 29.866667l4.266667 4.266667c4.266667 4.266667 6.4 8.533333 10.666666 12.8l4.266667 6.4v2.133333c2.133333 25.6 12.8 53.333333 17.066667 64z m226.133333 32s0 2.133333 0 0c0 2.133333 0 0 0 0z"  ></path></symbol><symbol id="icon-mine_nor" viewBox="0 0 1024 1024"><path d="M636.928 481.28c-12.288 0-20.48 8.192-20.48 20.48 0 57.344-47.104 104.448-104.448 104.448s-104.448-47.104-104.448-104.448c0-12.288-8.192-20.48-20.48-20.48s-20.48 8.192-20.48 20.48c0 79.872 65.536 145.408 145.408 145.408s145.408-65.536 145.408-145.408c0-10.24-8.192-20.48-20.48-20.48z"  ></path><path d="M737.28 743.424c98.304-71.68 163.84-188.416 163.84-319.488 0-215.04-174.08-391.168-391.168-391.168-215.04 0-391.168 174.08-391.168 391.168 0 141.312 75.776 264.192 186.368 331.776L184.32 958.464c-6.144 10.24-2.048 22.528 6.144 28.672 4.096 2.048 6.144 2.048 10.24 2.048 6.144 0 14.336-4.096 18.432-10.24l122.88-204.8c51.2 24.576 108.544 38.912 167.936 38.912 69.632 0 135.168-18.432 190.464-49.152l129.024 215.04c4.096 6.144 10.24 10.24 18.432 10.24 4.096 0 8.192 0 10.24-2.048 10.24-6.144 12.288-18.432 6.144-28.672L737.28 743.424zM161.792 423.936c0-192.512 157.696-350.208 350.208-350.208 192.512 0 350.208 157.696 350.208 350.208 0 192.512-157.696 350.208-350.208 350.208-192.512 0-350.208-157.696-350.208-350.208z"  ></path></symbol><symbol id="icon-delete" viewBox="0 0 1024 1024"><path d="M512 36.571429C248.685714 36.571429 36.571429 248.685714 36.571429 512s212.114286 475.428571 475.428571 475.428571 475.428571-212.114286 475.428571-475.428571S775.314286 36.571429 512 36.571429z m252.342857 676.571428c14.628571 14.628571 14.628571 36.571429 0 51.2-7.314286 7.314286-18.285714 10.971429-25.6 10.971429s-18.285714-3.657143-25.6-10.971429L512 563.2l-201.142857 201.142857c-7.314286 7.314286-18.285714 10.971429-25.6 10.971429s-18.285714-3.657143-25.6-10.971429c-14.628571-14.628571-14.628571-36.571429 0-51.2l201.142857-201.142857-201.142857-201.142857c-14.628571-14.628571-14.628571-36.571429 0-51.2s36.571429-14.628571 51.2 0l201.142857 201.142857 201.142857-201.142857c14.628571-14.628571 36.571429-14.628571 51.2 0s14.628571 36.571429 0 51.2L563.2 512l201.142857 201.142857z"  ></path></symbol><symbol id="icon-money_nor" viewBox="0 0 1024 1024"><path d="M872.448 114.688H151.552c-57.344 0-102.4 45.056-102.4 102.4v589.824c0 57.344 45.056 102.4 102.4 102.4h720.896c57.344 0 102.4-45.056 102.4-102.4V217.088c0-57.344-45.056-102.4-102.4-102.4z m0 753.664H151.552c-34.816 0-61.44-26.624-61.44-61.44V217.088c0-34.816 26.624-61.44 61.44-61.44h720.896c34.816 0 61.44 26.624 61.44 61.44v159.744H530.432c-49.152 0-88.064 38.912-88.064 88.064v77.824c0 49.152 38.912 88.064 88.064 88.064h403.456v176.128c0 34.816-26.624 61.44-61.44 61.44z m61.44-278.528H530.432c-26.624 0-47.104-20.48-47.104-47.104v-77.824c0-26.624 20.48-47.104 47.104-47.104h403.456v172.032z"  ></path><path d="M831.488 569.344c18.432 0 32.768-14.336 32.768-32.768V471.04c0-18.432-14.336-32.768-32.768-32.768h-2.048c-18.432 0-32.768 14.336-32.768 32.768v67.584c2.048 16.384 16.384 30.72 34.816 30.72z"  ></path></symbol><symbol id="icon-more" viewBox="0 0 1024 1024"><path d="M283.927273 202.472727h605.090909c13.963636 0 23.272727-9.309091 23.272727-23.272727s-9.309091-23.272727-23.272727-23.272727h-605.090909c-13.963636 0-23.272727 9.309091-23.272728 23.272727s9.309091 23.272727 23.272728 23.272727z"  ></path><path d="M148.945455 181.527273m-37.236364 0a37.236364 37.236364 0 1 0 74.472727 0 37.236364 37.236364 0 1 0-74.472727 0Z"  ></path><path d="M889.018182 488.727273h-605.090909c-13.963636 0-23.272727 9.309091-23.272728 23.272727s9.309091 23.272727 23.272728 23.272727h605.090909c13.963636 0 23.272727-9.309091 23.272727-23.272727s-11.636364-23.272727-23.272727-23.272727z"  ></path><path d="M148.945455 512m-37.236364 0a37.236364 37.236364 0 1 0 74.472727 0 37.236364 37.236364 0 1 0-74.472727 0Z"  ></path><path d="M889.018182 821.527273h-605.090909c-13.963636 0-23.272727 9.309091-23.272728 23.272727s9.309091 23.272727 23.272728 23.272727h605.090909c13.963636 0 23.272727-9.309091 23.272727-23.272727s-11.636364-23.272727-23.272727-23.272727z"  ></path><path d="M148.945455 842.472727m-37.236364 0a37.236364 37.236364 0 1 0 74.472727 0 37.236364 37.236364 0 1 0-74.472727 0Z"  ></path></symbol><symbol id="icon-mine1_sel" viewBox="0 0 1024 1024"><path d="M898.133333 972.8H110.933333c-19.2 0-36.266667-8.533333-49.066666-23.466667-10.666667-12.8-14.933333-27.733333-14.933334-42.666666 0-64 19.2-108.8 59.733334-140.8 34.133333-25.6 78.933333-38.4 125.866666-49.066667 38.4-8.533333 70.4-25.6 100.266667-46.933333 19.2-14.933333 29.866667-27.733333 34.133333-32v-17.066667-2.133333l-6.4-14.933334c-2.133333-6.4-12.8-32-21.333333-53.333333l-2.133333-4.266667c-10.666667-8.533333-25.6-23.466667-40.533334-44.8l-2.133333-2.133333c-14.933333-27.733333-21.333333-57.6-17.066667-87.466667 2.133333-17.066667 8.533333-32 14.933334-44.8-10.666667-36.266667-12.8-78.933333-10.666667-123.733333 2.133333-46.933333 23.466667-91.733333 57.6-125.866667 27.733333-27.733333 81.066667-61.866667 166.4-61.866666 157.866667 0 219.733333 113.066667 224 187.733333 2.133333 46.933333 0 87.466667-10.666667 125.866667 21.333333 34.133333 27.733333 83.2-2.133333 132.266666l-2.133333 4.266667c-14.933333 21.333333-27.733333 32-38.4 42.666667l-2.133334 4.266666c-6.4 10.666667-12.8 29.866667-17.066666 40.533334-4.266667 8.533333-6.4 14.933333-6.4 17.066666l-4.266667 6.4s0 2.133333-2.133333 2.133334v17.066666c2.133333 4.266667 14.933333 17.066667 34.133333 34.133334 27.733333 21.333333 61.866667 38.4 98.133333 46.933333 53.333333 12.8 93.866667 23.466667 128 49.066667 38.4 29.866667 57.6 76.8 55.466667 140.8 2.133333 34.133333-25.6 66.133333-61.866667 66.133333z"  ></path></symbol><symbol id="icon-order_nor" viewBox="0 0 1024 1024"><path d="M753.066667 968.533333h-576c-44.8 0-78.933333-34.133333-78.933334-78.933333V134.4c0-44.8 34.133333-78.933333 78.933334-78.933333h674.133333c44.8 0 78.933333 34.133333 78.933333 78.933333v661.333333c-4.266667 96-81.066667 172.8-177.066666 172.8zM177.066667 119.466667c-8.533333 0-14.933333 6.4-14.933334 14.933333v755.2c0 8.533333 6.4 14.933333 14.933334 14.933333h578.133333c61.866667 0 110.933333-49.066667 110.933333-110.933333V134.4c0-8.533333-6.4-14.933333-14.933333-14.933333H177.066667z"  ></path><path d="M740.266667 392.533333H283.733333c-14.933333 0-27.733333-12.8-27.733333-27.733333s12.8-27.733333 27.733333-27.733333h456.533334c14.933333 0 27.733333 12.8 27.733333 27.733333s-12.8 27.733333-27.733333 27.733333zM501.333333 631.466667h-213.333333c-17.066667 0-32-14.933333-32-32s14.933333-32 32-32h213.333333c17.066667 0 32 14.933333 32 32s-14.933333 32-32 32z"  ></path></symbol><symbol id="icon-normal" viewBox="0 0 1024 1024"><path d="M512 1024C229.993651 1024 0 794.006349 0 512S229.993651 0 512 0s512 229.993651 512 512-229.993651 512-512 512zM512 48.761905C256.812698 48.761905 48.761905 256.812698 48.761905 512s208.050794 463.238095 463.238095 463.238095 463.238095-208.050794 463.238095-463.238095S767.187302 48.761905 512 48.761905z"  ></path><path d="M325.079365 507.936508c-13.815873 0-24.380952-10.565079-24.380952-24.380952v-105.650794c0-13.815873 10.565079-24.380952 24.380952-24.380952s24.380952 10.565079 24.380952 24.380952v105.650794c0 13.815873-10.565079 24.380952-24.380952 24.380952zM682.666667 512c-13.815873 0-24.380952-10.565079-24.380953-24.380952V381.968254c0-13.815873 10.565079-24.380952 24.380953-24.380952s24.380952 10.565079 24.380952 24.380952v105.650794c0 13.815873-10.565079 24.380952-24.380952 24.380952zM363.27619 704.609524c28.444444 34.133333 88.584127 56.07619 152.787302 56.07619 62.577778 0 121.904762-21.130159 151.161905-54.450793 8.939683-10.565079 24.380952-11.377778 34.133333-2.438096 10.565079 8.939683 11.377778 24.380952 2.438095 34.133334-38.196825 43.885714-109.714286 71.51746-187.733333 71.51746-79.644444 0-151.974603-28.444444-190.171429-73.955556-8.126984-9.752381-7.314286-25.193651 3.250794-34.133333 4.063492-4.063492 9.752381-5.688889 15.44127-5.688889 6.501587 0 13.815873 3.250794 18.692063 8.939683z"  ></path></symbol><symbol id="icon-repay_nor" viewBox="0 0 1024 1024"><path d="M874.666667 96H149.333333C85.333333 96 32 149.333333 32 213.333333v597.333334c0 64 53.333333 117.333333 117.333333 117.333333h725.333334c64 0 117.333333-53.333333 117.333333-117.333333V213.333333c0-64-53.333333-117.333333-117.333333-117.333333z m-725.333334 64h725.333334c29.866667 0 53.333333 23.466667 53.333333 53.333333v138.666667h-832V213.333333c0-29.866667 23.466667-53.333333 53.333333-53.333333z m725.333334 704H149.333333c-29.866667 0-53.333333-23.466667-53.333333-53.333333V416h832V810.666667c0 29.866667-23.466667 53.333333-53.333333 53.333333z"  ></path><path d="M352 629.333333h-128c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h128c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32z"  ></path></symbol><symbol id="icon-order_sel" viewBox="0 0 1024 1024"><path d="M849.066667 55.466667H174.933333c-44.8 0-78.933333 34.133333-78.933333 78.933333v755.2c0 44.8 34.133333 78.933333 78.933333 78.933333h576c96 0 172.8-76.8 177.066667-172.8v-661.333333c0-44.8-34.133333-78.933333-78.933333-78.933333z m-349.866667 576h-213.333333c-17.066667 0-32-14.933333-32-32s14.933333-32 32-32h213.333333c17.066667 0 32 14.933333 32 32s-14.933333 32-32 32z m238.933333-238.933334H281.6c-14.933333 0-27.733333-12.8-27.733333-27.733333s12.8-27.733333 27.733333-27.733333h456.533333c14.933333 0 27.733333 12.8 27.733334 27.733333s-12.8 27.733333-27.733334 27.733333z"  ></path></symbol><symbol id="icon-repay_sel" viewBox="0 0 1024 1024"><path d="M874.666667 96H149.333333C85.333333 96 32 149.333333 32 213.333333v597.333334c0 64 53.333333 117.333333 117.333333 117.333333h725.333334c64 0 117.333333-53.333333 117.333333-117.333333V213.333333c0-64-53.333333-117.333333-117.333333-117.333333z m-522.666667 597.333333h-128c-17.066667 0-32-14.933333-32-32s14.933333-32 32-32h128c17.066667 0 32 14.933333 32 32s-14.933333 32-32 32z m554.666667-298.666666h-789.333334c-17.066667 0-32-14.933333-32-32s14.933333-32 32-32h789.333334c17.066667 0 32 14.933333 32 32s-14.933333 32-32 32z"  ></path><path d="M352 629.333333h-128c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h128c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32zM906.666667 330.666667h-789.333334c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h789.333334c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32z" fill="#ffffff" ></path></symbol><symbol id="icon-search" viewBox="0 0 1024 1024"><path d="M932.571429 881.371429L746.057143 694.857143c51.2-65.828571 84.114286-146.285714 84.114286-237.714286 0-208.457143-168.228571-376.685714-376.685715-376.685714-204.8 0-373.028571 168.228571-373.028571 376.685714 0 208.457143 168.228571 376.685714 376.685714 376.685714 91.428571 0 175.542857-32.914286 241.371429-87.771428l186.514285 186.514286c7.314286 7.314286 18.285714 10.971429 25.6 10.971428s18.285714-3.657143 25.6-10.971428c10.971429-14.628571 10.971429-36.571429-3.657142-51.2z m-475.428572-120.685715c-168.228571 0-303.542857-135.314286-303.542857-303.542857s135.314286-303.542857 303.542857-303.542857 303.542857 135.314286 303.542857 303.542857-138.971429 303.542857-303.542857 303.542857z"  ></path></symbol><symbol id="icon-service" viewBox="0 0 1024 1024"><path d="M981.333333 490.666667c0-253.866667-204.8-458.666667-456.533333-458.666667h-27.733333C245.333333 34.133333 40.533333 238.933333 40.533333 490.666667v49.066666c0 2.133333 0 4.266667 2.133334 6.4v117.333334c0 53.333333 44.8 98.133333 98.133333 98.133333 53.333333 0 98.133333-44.8 98.133333-98.133333V554.666667c0-53.333333-44.8-98.133333-98.133333-98.133334-21.333333 0-38.4 6.4-55.466667 17.066667 6.4-219.733333 189.866667-396.8 411.733334-396.8h27.733333c221.866667 0 405.333333 177.066667 413.866667 396.8-14.933333-10.666667-34.133333-14.933333-53.333334-14.933333-53.333333 0-98.133333 44.8-98.133333 98.133333v108.8c0 38.4 21.333333 70.4 51.2 85.333333l-136.533333 108.8c-12.8-12.8-29.866667-23.466667-49.066667-23.466666h-128c-36.266667 0-64 27.733333-64 64v25.6c0 36.266667 27.733333 64 64 64h128c36.266667 0 64-27.733333 64-64v-25.6l177.066667-138.666667c51.2-4.266667 89.6-46.933333 89.6-98.133333V499.2c0-2.133333 0-4.266667-2.133334-8.533333z m-842.666666 8.533333c29.866667 0 55.466667 25.6 55.466666 55.466667v108.8c0 29.866667-25.6 55.466667-55.466666 55.466666s-55.466667-25.6-55.466667-55.466666V554.666667c0-29.866667 25.6-55.466667 55.466667-55.466667z m535.466666 426.666667c0 12.8-8.533333 21.333333-21.333333 21.333333h-128c-12.8 0-21.333333-8.533333-21.333333-21.333333v-25.6c0-12.8 8.533333-21.333333 21.333333-21.333334h128c12.8 0 21.333333 8.533333 21.333333 21.333334v25.6z m266.666667-260.266667c0 29.866667-25.6 55.466667-55.466667 55.466667-29.866667 0-55.466667-25.6-55.466666-55.466667V554.666667c0-29.866667 25.6-55.466667 55.466666-55.466667 29.866667 0 55.466667 25.6 55.466667 55.466667v110.933333z"  ></path></symbol><symbol id="icon-scan" viewBox="0 0 1024 1024"><path d="M81.454545 377.018182c13.963636 0 23.272727-9.309091 23.272728-23.272727V179.2c0-30.254545 25.6-55.854545 55.854545-55.854545h193.163637c13.963636 0 23.272727-9.309091 23.272727-23.272728s-9.309091-23.272727-23.272727-23.272727H158.254545c-55.854545 0-102.4 46.545455-102.4 102.4v174.545455c2.327273 11.636364 11.636364 23.272727 25.6 23.272727zM353.745455 900.654545H158.254545c-30.254545 0-55.854545-25.6-55.854545-55.854545v-174.545455c0-13.963636-9.309091-23.272727-23.272727-23.272727s-23.272727 9.309091-23.272728 23.272727v174.545455c0 55.854545 46.545455 102.4 102.4 102.4h193.163637c13.963636 0 23.272727-9.309091 23.272727-23.272727s-9.309091-23.272727-20.945454-23.272728zM942.545455 646.981818c-13.963636 0-23.272727 9.309091-23.272728 23.272727v174.545455c0 30.254545-25.6 55.854545-55.854545 55.854545h-193.163637c-13.963636 0-23.272727 9.309091-23.272727 23.272728s9.309091 23.272727 23.272727 23.272727h193.163637c55.854545 0 102.4-46.545455 102.4-102.4v-174.545455c0-11.636364-9.309091-23.272727-23.272727-23.272727zM865.745455 76.8h-193.163637c-13.963636 0-23.272727 9.309091-23.272727 23.272727s9.309091 23.272727 23.272727 23.272728h193.163637c30.254545 0 55.854545 25.6 55.854545 55.854545v174.545455c0 13.963636 9.309091 23.272727 23.272727 23.272727s23.272727-9.309091 23.272728-23.272727V179.2c-2.327273-55.854545-46.545455-102.4-102.4-102.4zM942.545455 498.036364h-861.09091c-13.963636 0-23.272727 9.309091-23.272727 23.272727s9.309091 23.272727 23.272727 23.272727h861.09091c13.963636 0 23.272727-9.309091 23.272727-23.272727 0-11.636364-9.309091-23.272727-23.272727-23.272727z"  ></path></symbol><symbol id="icon-share" viewBox="0 0 1024 1024"><path d="M812.8 669.866667c-51.2 0-96 27.733333-121.6 66.133333l-364.8-194.133333c4.266667-12.8 6.4-25.6 6.4-40.533334s-2.133333-27.733333-6.4-40.533333l364.8-194.133333c25.6 40.533333 70.4 66.133333 121.6 66.133333a142.933333 142.933333 0 1 0-142.933333-142.933333c0 12.8 2.133333 25.6 4.266666 38.4l-364.8 194.133333c-25.6-38.4-70.4-64-119.466666-64a142.933333 142.933333 0 0 0 0 285.866667c49.066667 0 93.866667-25.6 119.466666-64l364.8 194.133333c-4.266667 12.8-4.266667 23.466667-4.266666 38.4a142.933333 142.933333 0 1 0 142.933333-142.933333z m0-578.133334c55.466667 0 100.266667 44.8 100.266667 100.266667s-44.8 100.266667-100.266667 100.266667-100.266667-44.8-100.266667-100.266667 44.8-100.266667 100.266667-100.266667z m-622.933333 512c-55.466667 0-100.266667-44.8-100.266667-100.266666s44.8-100.266667 100.266667-100.266667 100.266667 44.8 100.266666 100.266667c2.133333 55.466667-44.8 100.266667-100.266666 100.266666z m622.933333 311.466667c-55.466667 0-100.266667-44.8-100.266667-100.266667s44.8-100.266667 100.266667-100.266666 100.266667 44.8 100.266667 100.266666c2.133333 55.466667-44.8 100.266667-100.266667 100.266667z"  ></path></symbol><symbol id="icon-shop_nor" viewBox="0 0 1024 1024"><path d="M956.416 872.448l-69.632-512c0-49.152-40.96-88.064-90.112-88.064h-63.488c-6.144-118.784-102.4-212.992-223.232-212.992S294.912 153.6 288.768 272.384H225.28c-49.152 0-88.064 38.912-90.112 88.064l-69.632 512v2.048c0 49.152 40.96 90.112 90.112 90.112h708.608c49.152 0 90.112-40.96 90.112-90.112 2.048 0 2.048 0 2.048-2.048zM512 100.352c96.256 0 176.128 75.776 182.272 172.032H329.728c6.144-96.256 86.016-172.032 182.272-172.032z m-40.96 512c-4.096-4.096-10.24-8.192-16.384-8.192h-81.92c-38.912 0-71.68-32.768-71.68-71.68s32.768-71.68 71.68-71.68h196.608c4.096 0 8.192 0 12.288 2.048 8.192 2.048 14.336 4.096 22.528 6.144 20.48 10.24 32.768 24.576 38.912 47.104l77.824 409.6H419.84l55.296-294.912c2.048-8.192 0-14.336-4.096-18.432z m395.264 311.296h-106.496l-77.824-417.792c-12.288-43.008-38.912-63.488-61.44-73.728-10.24-6.144-22.528-8.192-32.768-10.24-6.144-2.048-12.288-2.048-18.432-2.048H372.736c-61.44 0-112.64 51.2-112.64 112.64s51.2 112.64 112.64 112.64h59.392L378.88 923.648H157.696c-26.624 0-47.104-20.48-49.152-47.104l69.632-512v-2.048c0-26.624 22.528-49.152 49.152-49.152H798.72c26.624 0 49.152 22.528 49.152 49.152v2.048l69.632 512c-2.048 26.624-24.576 47.104-51.2 47.104z"  ></path></symbol><symbol id="icon-school_nor" viewBox="0 0 1024 1024"><path d="M843.776 131.072c-8.192-8.192-20.48-6.144-28.672 2.048-8.192 8.192-6.144 20.48 2.048 28.672 102.4 88.064 159.744 217.088 159.744 352.256 0 133.12-57.344 260.096-157.696 350.208-8.192 8.192-10.24 20.48-2.048 28.672 4.096 4.096 10.24 6.144 16.384 6.144 4.096 0 10.24-2.048 14.336-4.096 108.544-96.256 172.032-235.52 172.032-380.928-2.048-147.456-65.536-286.72-176.128-382.976zM47.104 514.048c0-135.168 59.392-262.144 159.744-352.256 8.192-8.192 10.24-20.48 2.048-28.672-8.192-8.192-20.48-10.24-28.672-2.048-110.592 96.256-174.08 235.52-174.08 382.976 0 145.408 63.488 284.672 172.032 380.928 4.096 4.096 8.192 4.096 14.336 4.096 6.144 0 12.288-2.048 16.384-6.144 8.192-8.192 6.144-20.48-2.048-28.672-102.4-90.112-159.744-217.088-159.744-350.208z"  ></path><path d="M747.52 241.664c-8.192-8.192-20.48-6.144-28.672 2.048-8.192 8.192-6.144 20.48 2.048 28.672 69.632 61.44 110.592 147.456 110.592 239.616 0 90.112-38.912 178.176-106.496 237.568-8.192 8.192-10.24 20.48-2.048 28.672 4.096 4.096 10.24 6.144 14.336 6.144 4.096 0 10.24-2.048 14.336-6.144 77.824-67.584 120.832-165.888 120.832-268.288-2.048-100.352-47.104-200.704-124.928-268.288zM194.56 514.048c0-92.16 40.96-180.224 110.592-239.616 8.192-8.192 10.24-20.48 2.048-28.672-8.192-8.192-20.48-10.24-28.672-2.048-77.824 67.584-122.88 167.936-122.88 270.336s45.056 200.704 120.832 268.288c4.096 4.096 8.192 6.144 14.336 6.144 6.144 0 12.288-2.048 14.336-6.144 8.192-8.192 6.144-20.48-2.048-28.672-69.632-63.488-108.544-149.504-108.544-239.616z"  ></path><path d="M512 311.296c-110.592 0-200.704 90.112-200.704 200.704s90.112 200.704 200.704 200.704 200.704-90.112 200.704-200.704-90.112-200.704-200.704-200.704z m0 362.496c-88.064 0-159.744-71.68-159.744-159.744s71.68-159.744 159.744-159.744 159.744 71.68 159.744 159.744-71.68 159.744-159.744 159.744z"  ></path></symbol><symbol id="icon-success" viewBox="0 0 1024 1024"><path d="M512 1024C229.993651 1024 0 794.006349 0 512S229.993651 0 512 0s512 229.993651 512 512-229.993651 512-512 512zM512 48.761905C256.812698 48.761905 48.761905 256.812698 48.761905 512s208.050794 463.238095 463.238095 463.238095 463.238095-208.050794 463.238095-463.238095S767.187302 48.761905 512 48.761905z"  ></path><path d="M455.111111 723.301587h-0.812698c-6.501587 0-13.003175-3.250794-17.066667-8.126984l-154.412698-178.793651c-8.939683-10.565079-7.314286-25.193651 2.438095-34.133333 10.565079-8.939683 25.193651-7.314286 34.133333 2.438095l137.346032 159.288889 298.260317-282.819047c9.752381-8.939683 25.193651-8.939683 34.133334 0.812698 8.939683 9.752381 8.939683 25.193651-0.812699 34.133333l-316.952381 300.698413c-4.063492 4.063492-9.752381 6.501587-16.253968 6.501587z"  ></path></symbol><symbol id="icon-topic_nor" viewBox="0 0 1024 1024"><path d="M587.776 393.216h-4.096c-18.432 0-32.768 14.336-32.768 32.768v73.728c0 18.432 14.336 32.768 32.768 32.768h4.096c18.432 0 32.768-14.336 32.768-32.768v-73.728c0-18.432-14.336-32.768-32.768-32.768z"  ></path><path d="M1011.712 505.856c-2.048-4.096-129.024-397.312-499.712-397.312-370.688 0-497.664 393.216-499.712 397.312-2.048 4.096-2.048 8.192 0 12.288 2.048 4.096 129.024 397.312 499.712 397.312 370.688 0 497.664-393.216 499.712-397.312 2.048-4.096 2.048-8.192 0-12.288zM512 874.496C196.608 874.496 71.68 561.152 53.248 512c16.384-49.152 143.36-362.496 458.752-362.496S952.32 462.848 970.752 512c-18.432 49.152-143.36 362.496-458.752 362.496z"  ></path><path d="M524.288 235.52C393.216 235.52 286.72 348.16 286.72 485.376c0 137.216 106.496 249.856 237.568 249.856 131.072 0 237.568-112.64 237.568-249.856 0-137.216-106.496-249.856-237.568-249.856z m0 458.752C415.744 694.272 327.68 600.064 327.68 485.376s88.064-208.896 196.608-208.896 196.608 94.208 196.608 208.896-88.064 208.896-196.608 208.896z"  ></path></symbol><symbol id="icon-shop" viewBox="0 0 1024 1024"><path d="M916.945455 202.472727c-23.272727-13.963636-48.872727-20.945455-74.472728-20.945454H183.854545V137.309091C183.854545 74.472727 132.654545 23.272727 69.818182 23.272727c-13.963636 0-23.272727 9.309091-23.272727 23.272728s9.309091 23.272727 23.272727 23.272727c37.236364 0 67.490909 30.254545 67.490909 67.490909v591.127273c0 76.8 62.836364 139.636364 139.636364 139.636363h544.581818c13.963636 0 23.272727-9.309091 23.272727-23.272727s-9.309091-23.272727-23.272727-23.272727H276.945455c-51.2 0-93.090909-41.890909-93.09091-93.090909v-32.581819h591.127273c83.781818 0 114.036364-62.836364 137.309091-132.654545l60.509091-209.454545c16.290909-55.854545-4.654545-121.018182-55.854545-151.272728z m11.636363 141.963637l-60.509091 207.127272c-23.272727 72.145455-48.872727 97.745455-93.090909 97.745455H183.854545V228.072727h660.945455c16.290909 0 34.909091 4.654545 48.872727 13.963637 30.254545 20.945455 44.218182 62.836364 34.909091 102.4z"  ></path><path d="M304.872727 954.181818m-46.545454 0a46.545455 46.545455 0 1 0 93.090909 0 46.545455 46.545455 0 1 0-93.090909 0Z"  ></path><path d="M712.145455 954.181818m-46.545455 0a46.545455 46.545455 0 1 0 93.090909 0 46.545455 46.545455 0 1 0-93.090909 0Z"  ></path></symbol><symbol id="icon-mine_sel" viewBox="0 0 1024 1024"><path d="M141.312 509.952s-40.96-301.056 174.08-399.36 387.072-30.72 450.56 45.056 147.456 227.328 94.208 391.168S651.264 796.672 512 798.72 161.792 663.552 141.312 509.952z" fill="" ></path><path d="M636.928 481.28c-12.288 0-20.48 8.192-20.48 20.48 0 57.344-47.104 104.448-104.448 104.448s-104.448-47.104-104.448-104.448c0-12.288-8.192-20.48-20.48-20.48s-20.48 8.192-20.48 20.48c0 79.872 65.536 145.408 145.408 145.408s145.408-65.536 145.408-145.408c0-10.24-8.192-20.48-20.48-20.48z" fill="#333333" ></path><path d="M737.28 743.424c98.304-71.68 163.84-188.416 163.84-319.488 0-215.04-174.08-391.168-391.168-391.168-215.04 0-391.168 174.08-391.168 391.168 0 141.312 75.776 264.192 186.368 331.776L184.32 958.464c-6.144 10.24-2.048 22.528 6.144 28.672 4.096 2.048 6.144 2.048 10.24 2.048 6.144 0 14.336-4.096 18.432-10.24l122.88-204.8c51.2 24.576 108.544 38.912 167.936 38.912 69.632 0 135.168-18.432 190.464-49.152l129.024 215.04c4.096 6.144 10.24 10.24 18.432 10.24 4.096 0 8.192 0 10.24-2.048 10.24-6.144 12.288-18.432 6.144-28.672L737.28 743.424zM161.792 423.936c0-192.512 157.696-350.208 350.208-350.208 192.512 0 350.208 157.696 350.208 350.208 0 192.512-157.696 350.208-350.208 350.208-192.512 0-350.208-157.696-350.208-350.208z" fill="#333333" ></path></symbol><symbol id="icon-checkbox_disabled" viewBox="0 0 1024 1024"><path d="M512 512m-455.111111 0a455.111111 455.111111 0 1 0 910.222222 0 455.111111 455.111111 0 1 0-910.222222 0Z" fill="#F2F2F2" ></path><path d="M512 995.555556C244.622222 995.555556 28.444444 779.377778 28.444444 512S244.622222 28.444444 512 28.444444s483.555556 216.177778 483.555556 483.555556-216.177778 483.555556-483.555556 483.555556z m0-910.222223C275.911111 85.333333 85.333333 275.911111 85.333333 512s190.577778 426.666667 426.666667 426.666667 426.666667-190.577778 426.666667-426.666667S748.088889 85.333333 512 85.333333z" fill="#CCCCCC" ></path></symbol><symbol id="icon-school_sel" viewBox="0 0 1024 1024"><path d="M512 514.048m-180.224 0a180.224 180.224 0 1 0 360.448 0 180.224 180.224 0 1 0-360.448 0Z" fill="" ></path><path d="M843.776 131.072c-8.192-8.192-20.48-6.144-28.672 2.048-8.192 8.192-6.144 20.48 2.048 28.672 102.4 88.064 159.744 217.088 159.744 352.256 0 133.12-57.344 260.096-157.696 350.208-8.192 8.192-10.24 20.48-2.048 28.672 4.096 4.096 10.24 6.144 16.384 6.144 4.096 0 10.24-2.048 14.336-4.096 108.544-96.256 172.032-235.52 172.032-380.928-2.048-147.456-65.536-286.72-176.128-382.976zM47.104 514.048c0-135.168 59.392-262.144 159.744-352.256 8.192-8.192 10.24-20.48 2.048-28.672-6.144-8.192-20.48-10.24-28.672-2.048C69.632 227.328 6.144 366.592 6.144 514.048c0 145.408 63.488 284.672 172.032 380.928 4.096 4.096 8.192 4.096 14.336 4.096 6.144 0 12.288-2.048 16.384-6.144 8.192-8.192 6.144-20.48-2.048-28.672-102.4-90.112-159.744-217.088-159.744-350.208z" fill="#333333" ></path><path d="M747.52 241.664c-8.192-8.192-20.48-6.144-28.672 2.048-8.192 8.192-6.144 20.48 2.048 28.672 69.632 61.44 110.592 147.456 110.592 239.616 0 90.112-38.912 178.176-106.496 237.568-8.192 8.192-10.24 20.48-2.048 28.672 4.096 4.096 10.24 6.144 14.336 6.144 4.096 0 10.24-2.048 14.336-6.144 77.824-67.584 120.832-165.888 120.832-268.288-2.048-100.352-47.104-200.704-124.928-268.288zM194.56 514.048c0-92.16 40.96-180.224 110.592-239.616 8.192-8.192 10.24-20.48 2.048-28.672-8.192-8.192-20.48-10.24-28.672-2.048-77.824 67.584-122.88 167.936-122.88 272.384 0 102.4 45.056 200.704 120.832 268.288 4.096 4.096 8.192 6.144 14.336 6.144 6.144 0 12.288-2.048 14.336-6.144 8.192-8.192 6.144-20.48-2.048-28.672-69.632-65.536-108.544-151.552-108.544-241.664z" fill="#333333" ></path><path d="M512 311.296c-110.592 0-200.704 90.112-200.704 200.704s90.112 200.704 200.704 200.704 200.704-90.112 200.704-200.704-90.112-200.704-200.704-200.704z m0 362.496c-88.064 0-159.744-71.68-159.744-159.744s71.68-159.744 159.744-159.744 159.744 71.68 159.744 159.744-71.68 159.744-159.744 159.744z" fill="#333333" ></path></symbol><symbol id="icon-money_sel" viewBox="0 0 1024 1024"><path d="M872.448 888.832H151.552c-45.056 0-81.92-36.864-81.92-81.92V217.088c0-45.056 36.864-81.92 81.92-81.92h720.896c45.056 0 81.92 36.864 81.92 81.92v589.824c0 45.056-36.864 81.92-81.92 81.92z" fill="" ></path><path d="M935.936 610.304H530.432c-36.864 0-67.584-30.72-67.584-67.584v-77.824c0-36.864 30.72-67.584 67.584-67.584h405.504c10.24 0 18.432 8.192 18.432 18.432v176.128c0 10.24-8.192 18.432-18.432 18.432z" fill="#FFFFFF" ></path><path d="M872.448 114.688H151.552c-57.344 0-102.4 45.056-102.4 102.4v589.824c0 57.344 45.056 102.4 102.4 102.4h720.896c57.344 0 102.4-45.056 102.4-102.4V217.088c0-57.344-45.056-102.4-102.4-102.4z m0 753.664H151.552c-34.816 0-61.44-26.624-61.44-61.44V217.088c0-34.816 26.624-61.44 61.44-61.44h720.896c34.816 0 61.44 26.624 61.44 61.44v159.744H530.432c-49.152 0-88.064 38.912-88.064 88.064v77.824c0 49.152 38.912 88.064 88.064 88.064h403.456v176.128c0 34.816-26.624 61.44-61.44 61.44z m61.44-278.528H530.432c-26.624 0-47.104-20.48-47.104-47.104v-77.824c0-26.624 20.48-47.104 47.104-47.104h403.456v172.032z" fill="#333333" ></path><path d="M831.488 569.344c18.432 0 32.768-14.336 32.768-32.768V471.04c0-18.432-14.336-32.768-32.768-32.768h-2.048c-18.432 0-32.768 14.336-32.768 32.768v67.584c2.048 16.384 16.384 30.72 34.816 30.72z" fill="#333333" ></path></symbol><symbol id="icon-shop_sel" viewBox="0 0 1024 1024"><path d="M90.112 862.208l67.584-499.712 12.288-40.96 36.864-26.624 86.016-2.048h503.808l43.008 14.336 24.576 32.768 47.104 352.256 24.576 190.464-14.336 34.816-34.816 26.624h-143.36l-28.672-112.64-53.248-321.536-22.528-40.96-38.912-28.672H344.064l-63.488 49.152v69.632l28.672 51.2 63.488 14.336h83.968l-10.24 45.056-51.2 274.432h-245.76L104.448 921.6l-14.336-53.248z" fill="" ></path><path d="M956.416 872.448l-69.632-512c0-49.152-40.96-88.064-90.112-88.064h-63.488c-4.096-118.784-102.4-212.992-221.184-212.992S294.912 153.6 288.768 272.384H225.28c-49.152 0-88.064 38.912-90.112 88.064l-69.632 512v2.048c0 49.152 40.96 90.112 90.112 90.112h708.608c49.152 0 90.112-40.96 90.112-90.112 2.048 0 2.048 0 2.048-2.048zM512 100.352c96.256 0 176.128 75.776 182.272 172.032H329.728c6.144-96.256 86.016-172.032 182.272-172.032z m-40.96 512c-4.096-4.096-10.24-8.192-16.384-8.192h-83.968c-38.912 0-71.68-32.768-71.68-71.68s32.768-71.68 71.68-71.68h196.608c4.096 0 8.192 0 12.288 2.048 8.192 2.048 14.336 4.096 22.528 6.144 20.48 10.24 32.768 24.576 38.912 47.104l77.824 409.6H419.84l55.296-294.912c2.048-8.192 0-14.336-4.096-18.432z m395.264 311.296h-106.496l-77.824-417.792c-12.288-43.008-38.912-63.488-61.44-73.728-10.24-6.144-22.528-8.192-32.768-10.24-6.144-2.048-12.288-2.048-18.432-2.048h-196.608c-61.44 0-112.64 51.2-112.64 112.64s51.2 112.64 112.64 112.64h59.392l-53.248 278.528H157.696c-26.624 0-47.104-20.48-49.152-47.104l69.632-512v-2.048c0-26.624 22.528-49.152 49.152-49.152H798.72c26.624 0 49.152 22.528 49.152 49.152v2.048l69.632 512c-2.048 26.624-24.576 47.104-51.2 47.104z" fill="#333333" ></path></symbol><symbol id="icon-topic_sel" viewBox="0 0 1024 1024"><path d="M34.816 518.144s83.968-309.248 352.256-372.736 446.464 112.64 522.24 204.8 81.92 178.176 81.92 178.176-122.88 276.48-280.576 319.488C552.96 890.88 335.872 935.936 167.936 741.376s-133.12-223.232-133.12-223.232z" fill="" ></path><path d="M315.392 503.808S327.68 253.952 512 253.952s233.472 184.32 229.376 256c-4.096 71.68-79.872 184.32-202.752 198.656s-221.184-112.64-223.232-204.8z" fill="#FFFFFF" ></path><path d="M587.776 393.216h-4.096c-18.432 0-32.768 14.336-32.768 32.768v73.728c0 18.432 14.336 32.768 32.768 32.768h4.096c18.432 0 32.768-14.336 32.768-32.768v-73.728c0-18.432-14.336-32.768-32.768-32.768z" fill="#333333" ></path><path d="M1011.712 505.856c-2.048-4.096-129.024-397.312-499.712-397.312-370.688 0-497.664 393.216-499.712 397.312-2.048 4.096-2.048 8.192 0 12.288 2.048 4.096 129.024 397.312 499.712 397.312 370.688 0 497.664-393.216 499.712-397.312 2.048-4.096 2.048-8.192 0-12.288zM512 874.496C196.608 874.496 71.68 561.152 53.248 512c16.384-49.152 143.36-362.496 458.752-362.496S952.32 462.848 970.752 512c-18.432 49.152-143.36 362.496-458.752 362.496z" fill="#333333" ></path><path d="M524.288 235.52C393.216 235.52 286.72 348.16 286.72 485.376c0 137.216 106.496 249.856 237.568 249.856 131.072 0 237.568-112.64 237.568-249.856 0-137.216-106.496-249.856-237.568-249.856z m0 458.752C415.744 694.272 327.68 600.064 327.68 485.376s88.064-208.896 196.608-208.896 196.608 94.208 196.608 208.896-88.064 208.896-196.608 208.896z" fill="#333333" ></path></symbol><symbol id="icon-checkbox_checked" viewBox="0 0 1024 1024"><path d="M512 512m-455.111111 0a455.111111 455.111111 0 1 0 910.222222 0 455.111111 455.111111 0 1 0-910.222222 0Z" fill="" ></path><path d="M426.666667 711.111111c-8.533333 0-14.222222-2.844444-19.911111-8.533333l-142.222223-142.222222c-11.377778-11.377778-11.377778-28.444444 0-39.822223s28.444444-11.377778 39.822223 0l122.311111 122.311111 321.422222-295.822222c11.377778-11.377778 28.444444-8.533333 39.822222 2.844445s8.533333 28.444444-2.844444 39.822222l-341.333334 312.888889c-2.844444 5.688889-11.377778 8.533333-17.066666 8.533333z" fill="#FFFFFF" ></path></symbol><symbol id="icon-plus" viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="" ></path><path d="M801.28 486.4H537.6V222.72c0-15.36-10.24-25.6-25.6-25.6s-25.6 10.24-25.6 25.6V486.4H222.72c-15.36 0-25.6 10.24-25.6 25.6s10.24 25.6 25.6 25.6H486.4v263.68c0 15.36 10.24 25.6 25.6 25.6s25.6-10.24 25.6-25.6V537.6h263.68c15.36 0 25.6-10.24 25.6-25.6s-10.24-25.6-25.6-25.6z" fill="#FFFFFF" ></path></symbol><symbol id="icon-minus" viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="" ></path><path d="M801.28 537.6H222.72c-12.8 0-25.6-10.24-25.6-25.6 0-12.8 10.24-25.6 25.6-25.6h581.12c12.8 0 25.6 10.24 25.6 25.6-2.56 12.8-12.8 25.6-28.16 25.6z" fill="#FFFFFF" ></path></symbol></svg>';var script = function () {
    var scripts = document.getElementsByTagName("script");return scripts[scripts.length - 1];
  }();var shouldInjectCss = script.getAttribute("data-injectcss");var ready = function ready(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0);
      } else {
        var loadFn = function loadFn() {
          document.removeEventListener("DOMContentLoaded", loadFn, false);fn();
        };document.addEventListener("DOMContentLoaded", loadFn, false);
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn);
    }function IEContentLoaded(w, fn) {
      var d = w.document,
          done = false,
          init = function init() {
        if (!done) {
          done = true;fn();
        }
      };var polling = function polling() {
        try {
          d.documentElement.doScroll("left");
        } catch (e) {
          setTimeout(polling, 50);return;
        }init();
      };polling();d.onreadystatechange = function () {
        if (d.readyState == "complete") {
          d.onreadystatechange = null;init();
        }
      };
    }
  };var before = function before(el, target) {
    target.parentNode.insertBefore(el, target);
  };var prepend = function prepend(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild);
    } else {
      target.appendChild(el);
    }
  };function appendSvg() {
    var div, svg;div = document.createElement("div");div.innerHTML = svgSprite;svgSprite = null;svg = div.getElementsByTagName("svg")[0];if (svg) {
      svg.setAttribute("aria-hidden", "true");svg.style.position = "absolute";svg.style.width = 0;svg.style.height = 0;svg.style.overflow = "hidden";prepend(svg, document.body);
    }
  }if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true;try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e);
    }
  }ready(appendSvg);
})(window);

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"mui-icon",attrs:{"aria-hidden":"true"}},[_c('use',{attrs:{"xlink:href":'#icon-'+_vm.type}})])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(53);
var $export = __webpack_require__(12);
var redefine = __webpack_require__(60);
var hide = __webpack_require__(9);
var has = __webpack_require__(11);
var Iterators = __webpack_require__(43);
var $iterCreate = __webpack_require__(71);
var setToStringTag = __webpack_require__(49);
var getPrototypeOf = __webpack_require__(73);
var ITERATOR = __webpack_require__(6)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(70)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(58)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(8);
var dPs = __webpack_require__(72);
var enumBugKeys = __webpack_require__(27);
var IE_PROTO = __webpack_require__(23)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(25)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(62).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(0).document;
module.exports = document && document.documentElement;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(6);


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(3);
var LIBRARY = __webpack_require__(53);
var wksExt = __webpack_require__(63);
var defineProperty = __webpack_require__(10).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(17);
var TAG = __webpack_require__(6)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 66 */,
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(74);
var global = __webpack_require__(0);
var hide = __webpack_require__(9);
var Iterators = __webpack_require__(43);
var TO_STRING_TAG = __webpack_require__(6)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 68 */
/***/ (function(module, exports) {



/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//

/**
 * mui-nutton
 * param {String} [htmlType=button] button表单类型,默认type=button 可选选button submit reset
 * param {String} [type=primary] 控制按钮的样式,默认primary可选plain warn  border  full
 * param {String} [size=large] 控制按钮尺寸, 默认large 可选middle small
 * param {Boolean} [disabled=false] 控制按钮是否禁用状态, 默认false
 *
 * event 定义按钮事件 click
 */
var prefixCls = 'mui-btn';
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'm-button',
    props: {
        htmlType: {
            default: 'button',
            validator: function validator(value) {
                return ['button', 'submit', 'reset'].indexOf(value) > -1;
            }
        },
        type: {
            default: 'primary',
            validator: function validator(value) {
                return ['primary', 'plain', 'warn', 'border', 'full'].indexOf(value) > -1;
            }
        },
        size: {
            default: 'large',
            validator: function validator(value) {
                return ['large', 'middle', 'small'].indexOf(value) > -1;
            }
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        classType: function classType() {
            return prefixCls + '_' + this.type;
        },
        classSize: function classSize() {
            if (this.type !== 'full') {
                return prefixCls + '_' + this.size;
            }
        },
        classes: function classes() {
            return ['' + prefixCls, this.classType, this.classSize, { 'disabled': this.disabled }];
        }
    },
    methods: {
        handleClick: function handleClick(event) {
            if (this.disabled) {
                event.preventDefault();
                event.stopPropagation();
                return;
            }
            this.$emit('click', event);
        }
    },
    mounted: function mounted() {}
});

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(14);
var defined = __webpack_require__(13);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(61);
var descriptor = __webpack_require__(18);
var setToStringTag = __webpack_require__(49);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(9)(IteratorPrototype, __webpack_require__(6)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(10);
var anObject = __webpack_require__(8);
var getKeys = __webpack_require__(20);

module.exports = __webpack_require__(2) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(11);
var toObject = __webpack_require__(30);
var IE_PROTO = __webpack_require__(23)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(75);
var step = __webpack_require__(76);
var Iterators = __webpack_require__(43);
var toIObject = __webpack_require__(7);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(58)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(36);
var hiddenKeys = __webpack_require__(27).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(8);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(43);
var ITERATOR = __webpack_require__(6)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(65);
var ITERATOR = __webpack_require__(6)('iterator');
var Iterators = __webpack_require__(43);
module.exports = __webpack_require__(3).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(6)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 86 */,
/* 87 */,
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_vue__ = __webpack_require__(69);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2e184df0_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_button_vue__ = __webpack_require__(90);
function injectStyle (ssrContext) {
  __webpack_require__(89)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2e184df0_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_button_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 89 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{class:_vm.classes,attrs:{"type":_vm.htmlType,"disabled":_vm.disabled},on:{"click":_vm.handleClick}},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(92);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(94);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(93), __esModule: true };

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(59);
__webpack_require__(67);
module.exports = __webpack_require__(63).f('iterator');


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(95), __esModule: true };

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(96);
__webpack_require__(68);
__webpack_require__(102);
__webpack_require__(103);
module.exports = __webpack_require__(3).Symbol;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(0);
var has = __webpack_require__(11);
var DESCRIPTORS = __webpack_require__(2);
var $export = __webpack_require__(12);
var redefine = __webpack_require__(60);
var META = __webpack_require__(97).KEY;
var $fails = __webpack_require__(5);
var shared = __webpack_require__(26);
var setToStringTag = __webpack_require__(49);
var uid = __webpack_require__(21);
var wks = __webpack_require__(6);
var wksExt = __webpack_require__(63);
var wksDefine = __webpack_require__(64);
var enumKeys = __webpack_require__(98);
var isArray = __webpack_require__(99);
var anObject = __webpack_require__(8);
var toIObject = __webpack_require__(7);
var toPrimitive = __webpack_require__(28);
var createDesc = __webpack_require__(18);
var _create = __webpack_require__(61);
var gOPNExt = __webpack_require__(100);
var $GOPD = __webpack_require__(101);
var $DP = __webpack_require__(10);
var $keys = __webpack_require__(20);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(77).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(24).f = $propertyIsEnumerable;
  __webpack_require__(29).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(53)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    replacer = args[1];
    if (typeof replacer == 'function') $replacer = replacer;
    if ($replacer || !isArray(replacer)) replacer = function (key, value) {
      if ($replacer) value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(9)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(21)('meta');
var isObject = __webpack_require__(4);
var has = __webpack_require__(11);
var setDesc = __webpack_require__(10).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(5)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(20);
var gOPS = __webpack_require__(29);
var pIE = __webpack_require__(24);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(17);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(7);
var gOPN = __webpack_require__(77).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(24);
var createDesc = __webpack_require__(18);
var toIObject = __webpack_require__(7);
var toPrimitive = __webpack_require__(28);
var has = __webpack_require__(11);
var IE8_DOM_DEFINE = __webpack_require__(35);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(2) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(64)('asyncIterator');


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(64)('observable');


/***/ }),
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_better_scroll__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__button_button__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popup_popup__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_icon_icon__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_mixins_api__ = __webpack_require__(31);


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







var EVENT_SELECT = 'select';
var EVENT_VALUE_CHANGE = 'value-change';
var EVENT_CANCEL = 'cancel';
var EVENT_CHANGE = 'change';
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'm-picker',
    mixins: [__WEBPACK_IMPORTED_MODULE_6__common_mixins_api__["a" /* default */]],
    props: {
        data: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        title: {
            type: String
        },
        confirmTxt: {
            type: String,
            default: '确定'
        },
        selectedIndex: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        textKey: {
            type: String,
            default: 'text'
        },
        isShow: {
            type: Boolean,
            default: false
        }
    },
    filters: {
        showText: function showText(value, textKey) {
            var typeValue = typeof value === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default()(value);
            return typeValue === 'string' || typeValue === 'number' ? value : value[textKey];
        }
    },
    data: function data() {
        return {
            pickerData: this.data.slice(),
            pickerSelectedIndex: this.selectedIndex,
            pickerSelectedItem: []
        };
    },

    computed: {},
    watch: {
        data: function data(newData) {
            this.setData(newData, this.selectedIndex);
        }
    },
    components: {
        mPopup: __WEBPACK_IMPORTED_MODULE_4__popup_popup__["a" /* default */],
        mButton: __WEBPACK_IMPORTED_MODULE_3__button_button__["a" /* default */],
        mIcon: __WEBPACK_IMPORTED_MODULE_5__components_icon_icon__["a" /* default */]
    },
    created: function created() {
        if (!this.pickerSelectedIndex.length) {
            this.pickerSelectedIndex = [];
            for (var i = 0; i < this.pickerData.length; i++) {
                this.pickerSelectedIndex[i] = 0;
            }
        }
    },

    methods: {
        confirm: function confirm() {
            if (!this._canConfirm()) {
                return;
            }
            this.hide();

            var changed = false;
            var isEqualArr = [];
            var selectObj = [];
            for (var i = 0; i < this.pickerData.length; i++) {
                var index = this.wheels[i].getSelectedIndex();
                this.pickerSelectedIndex[i] = index;
                if (this.pickerData[i].length) {
                    selectObj[i] = this.pickerData[i][index];
                }
                isEqualArr.push(this.pickerSelectedItem[i] === selectObj[i]);
                this.pickerSelectedItem[i] = selectObj[i];
            }
            changed = isEqualArr.some(function (element) {
                return !element;
            });
            this.$emit(EVENT_SELECT, this.pickerSelectedItem, this.pickerSelectedIndex);

            if (changed) {
                this.$emit(EVENT_VALUE_CHANGE, this.pickerSelectedItem, this.pickerSelectedIndex);
            }
        },
        cancel: function cancel() {
            this.hide();
            this.$emit(EVENT_CANCEL);
        },
        show: function show() {
            var _this = this;

            if (this.isVisible) {
                return;
            }
            this.isVisible = true;
            if (!this.wheels || this.dirty) {
                this.$nextTick(function () {
                    _this.wheels = [];
                    var wheelWrapper = _this.$refs.wheelWrapper;
                    for (var i = 0; i < _this.pickerData.length; i++) {
                        _this._createWheel(wheelWrapper, i);
                    }
                    _this.dirty = false;
                });
            } else {
                for (var i = 0; i < this.pickerData.length; i++) {
                    this.wheels[i].enable();
                    this.wheels[i].wheelTo(this.pickerSelectedIndex[i]);
                }
            }
        },
        hide: function hide() {
            if (!this.isVisible) {
                return;
            }
            this.isVisible = false;

            for (var i = 0; i < this.pickerData.length; i++) {
                this.wheels[i].disable();
            }
        },
        setData: function setData(data, selectedIndex) {
            this.pickerSelectedIndex = selectedIndex ? [].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(selectedIndex)) : [];
            this.pickerData = data.slice();
            this.dirty = true;
        },

        // refill(datas) {
        //     let ret = []
        //     if (!datas.length) {
        //         return ret
        //     }
        //     datas.forEach((data, index) => {
        //         ret[index] = this.refillColumn(index, data)
        //     })
        //     return ret
        // },
        // refillColumn(index, data) {
        //     const wheelWrapper = this.$refs.wheelWrapper
        //     let scroll = wheelWrapper.children[index].querySelector('.wheel-scroll')
        //     let wheel = this.wheels ? this.wheels[index] : false
        //     let dist = 0
        //     if (scroll && wheel) {
        //         let oldData = this.pickerData[index]
        //         this.$set(this.pickerData, index, data)
        //         let selectedIndex = wheel.getSelectedIndex()
        //         if (oldData.length) {
        //             let oldValue = oldData[selectedIndex].value
        //             for (let i = 0; i < data.length; i++) {
        //                 if (data[i].value === oldValue) {
        //                     dist = i
        //                     break
        //                 }
        //             }
        //         }
        //         this.pickerSelectedIndex[index] = dist
        //         wheel.destroy()
        //         this.$nextTick(() => {
        //             // recreate wheel so that the wrapperHeight will be correct.
        //             wheel = this._createWheel(wheelWrapper, index)
        //             wheel.wheelTo(dist)
        //         })
        //     }
        //     return dist
        // },
        scrollTo: function scrollTo(index, dist) {
            var wheel = this.wheels[index];
            this.pickerSelectedIndex[index] = dist;
            wheel.wheelTo(dist);
        },
        refresh: function refresh() {
            var _this2 = this;

            setTimeout(function () {
                _this2.wheels.forEach(function (wheel) {
                    wheel.refresh();
                });
            }, 200);
        },
        _createWheel: function _createWheel(wheelWrapper, i) {
            var _this3 = this;

            var wheel = this.wheels[i] = new __WEBPACK_IMPORTED_MODULE_2_better_scroll__["a" /* default */](wheelWrapper.children[i], {
                wheel: {
                    selectedIndex: this.pickerSelectedIndex[i] || 0,
                    rotate: 16
                }
            });
            wheel.on('scrollEnd', function () {
                _this3.$emit(EVENT_CHANGE, i, wheel.getSelectedIndex());
            });
            return wheel;
        },
        _canConfirm: function _canConfirm() {
            return this.wheels.every(function (wheel) {
                return !wheel.isInTransition;
            });
        }
    }
});

/***/ }),
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__picker_vue__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api__ = __webpack_require__(198);



__WEBPACK_IMPORTED_MODULE_0__picker_vue__["a" /* default */].install = function (Vue) {
    Vue.component(__WEBPACK_IMPORTED_MODULE_0__picker_vue__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__picker_vue__["a" /* default */]);
    Object(__WEBPACK_IMPORTED_MODULE_1__api__["a" /* default */])(Vue, __WEBPACK_IMPORTED_MODULE_0__picker_vue__["a" /* default */]);
};

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__picker_vue__["a" /* default */]);

/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_picker_vue__ = __webpack_require__(131);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_52405b68_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_picker_vue__ = __webpack_require__(197);
function injectStyle (ssrContext) {
  __webpack_require__(190)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_picker_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_52405b68_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_picker_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 190 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(192);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(193), __esModule: true };

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(59);
__webpack_require__(194);
module.exports = __webpack_require__(3).Array.from;


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(19);
var $export = __webpack_require__(12);
var toObject = __webpack_require__(30);
var call = __webpack_require__(78);
var isArrayIter = __webpack_require__(79);
var toLength = __webpack_require__(33);
var createProperty = __webpack_require__(195);
var getIterFn = __webpack_require__(80);

$export($export.S + $export.F * !__webpack_require__(85)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(10);
var createDesc = __webpack_require__(18);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*!
 * better-normal-scroll v1.9.1
 * (c) 2016-2018 ustbhuangyi
 * Released under the MIT License.
 */
var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();













var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

function eventMixin(BScroll) {
  BScroll.prototype.on = function (type, fn) {
    var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;

    if (!this._events[type]) {
      this._events[type] = [];
    }

    this._events[type].push([fn, context]);
  };

  BScroll.prototype.once = function (type, fn) {
    var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;

    function magic() {
      this.off(type, magic);

      fn.apply(context, arguments);
    }
    // To expose the corresponding function method in order to execute the off method
    magic.fn = fn;

    this.on(type, magic);
  };

  BScroll.prototype.off = function (type, fn) {
    var _events = this._events[type];
    if (!_events) {
      return;
    }

    var count = _events.length;
    while (count--) {
      if (_events[count][0] === fn || _events[count][0] && _events[count][0].fn === fn) {
        _events[count][0] = undefined;
      }
    }
  };

  BScroll.prototype.trigger = function (type) {
    var events = this._events[type];
    if (!events) {
      return;
    }

    var len = events.length;
    var eventsCopy = [].concat(toConsumableArray(events));
    for (var i = 0; i < len; i++) {
      var event = eventsCopy[i];

      var _event = slicedToArray(event, 2),
          fn = _event[0],
          context = _event[1];

      if (fn) {
        fn.apply(context, [].slice.call(arguments, 1));
      }
    }
  };
}

// ssr support
var inBrowser = typeof window !== 'undefined';
var ua = inBrowser && navigator.userAgent.toLowerCase();
var isWeChatDevTools = ua && /wechatdevtools/.test(ua);
var isAndroid = ua && ua.indexOf('android') > 0;

function getNow() {
  return window.performance && window.performance.now ? window.performance.now() + window.performance.timing.navigationStart : +new Date();
}

function extend(target) {
  for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  for (var i = 0; i < rest.length; i++) {
    var source = rest[i];
    for (var key in source) {
      target[key] = source[key];
    }
  }
  return target;
}

function isUndef(v) {
  return v === undefined || v === null;
}

var elementStyle = inBrowser && document.createElement('div').style;

var vendor = function () {
  if (!inBrowser) {
    return false;
  }
  var transformNames = {
    webkit: 'webkitTransform',
    Moz: 'MozTransform',
    O: 'OTransform',
    ms: 'msTransform',
    standard: 'transform'
  };

  for (var key in transformNames) {
    if (elementStyle[transformNames[key]] !== undefined) {
      return key;
    }
  }

  return false;
}();

function prefixStyle(style) {
  if (vendor === false) {
    return false;
  }

  if (vendor === 'standard') {
    if (style === 'transitionEnd') {
      return 'transitionend';
    }
    return style;
  }

  return vendor + style.charAt(0).toUpperCase() + style.substr(1);
}

function addEvent(el, type, fn, capture) {
  el.addEventListener(type, fn, { passive: false, capture: !!capture });
}

function removeEvent(el, type, fn, capture) {
  el.removeEventListener(type, fn, { passive: false, capture: !!capture });
}

function offset(el) {
  var left = 0;
  var top = 0;

  while (el) {
    left -= el.offsetLeft;
    top -= el.offsetTop;
    el = el.offsetParent;
  }

  return {
    left: left,
    top: top
  };
}

var transform = prefixStyle('transform');

var hasPerspective = inBrowser && prefixStyle('perspective') in elementStyle;
// fix issue #361
var hasTouch = inBrowser && ('ontouchstart' in window || isWeChatDevTools);
var hasTransform = transform !== false;
var hasTransition = inBrowser && prefixStyle('transition') in elementStyle;

var style = {
  transform: transform,
  transitionTimingFunction: prefixStyle('transitionTimingFunction'),
  transitionDuration: prefixStyle('transitionDuration'),
  transitionProperty: prefixStyle('transitionProperty'),
  transitionDelay: prefixStyle('transitionDelay'),
  transformOrigin: prefixStyle('transformOrigin'),
  transitionEnd: prefixStyle('transitionEnd')
};

var TOUCH_EVENT = 1;
var MOUSE_EVENT = 2;

var eventType = {
  touchstart: TOUCH_EVENT,
  touchmove: TOUCH_EVENT,
  touchend: TOUCH_EVENT,

  mousedown: MOUSE_EVENT,
  mousemove: MOUSE_EVENT,
  mouseup: MOUSE_EVENT
};

function getRect(el) {
  if (el instanceof window.SVGElement) {
    var rect = el.getBoundingClientRect();
    return {
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height
    };
  } else {
    return {
      top: el.offsetTop,
      left: el.offsetLeft,
      width: el.offsetWidth,
      height: el.offsetHeight
    };
  }
}

function preventDefaultException(el, exceptions) {
  for (var i in exceptions) {
    if (exceptions[i].test(el[i])) {
      return true;
    }
  }
  return false;
}

function tap(e, eventName) {
  var ev = document.createEvent('Event');
  ev.initEvent(eventName, true, true);
  ev.pageX = e.pageX;
  ev.pageY = e.pageY;
  e.target.dispatchEvent(ev);
}

function click(e) {
  var eventSource = void 0;
  if (e.type === 'mouseup' || e.type === 'mousecancel') {
    eventSource = e;
  } else if (e.type === 'touchend' || e.type === 'touchcancel') {
    eventSource = e.changedTouches[0];
  }
  var posSrc = {};
  if (eventSource) {
    posSrc.screenX = eventSource.screenX || 0;
    posSrc.screenY = eventSource.screenY || 0;
    posSrc.clientX = eventSource.clientX || 0;
    posSrc.clientY = eventSource.clientY || 0;
  }
  var ev = void 0;
  var event = 'click';
  var bubbles = true;
  var cancelable = true;
  if (typeof MouseEvent !== 'undefined') {
    try {
      ev = new MouseEvent(event, extend({
        bubbles: bubbles,
        cancelable: cancelable
      }, posSrc));
    } catch (e) {
      createEvent();
    }
  } else {
    createEvent();
  }

  function createEvent() {
    ev = document.createEvent('Event');
    ev.initEvent(event, bubbles, cancelable);
    extend(ev, posSrc);
  }

  // forwardedTouchEvent set to true in case of the conflict with fastclick
  ev.forwardedTouchEvent = true;
  ev._constructed = true;
  e.target.dispatchEvent(ev);
}

function prepend(el, target) {
  if (target.firstChild) {
    before(el, target.firstChild);
  } else {
    target.appendChild(el);
  }
}

function before(el, target) {
  target.parentNode.insertBefore(el, target);
}

function removeChild(el, child) {
  el.removeChild(child);
}

var DEFAULT_OPTIONS = {
  startX: 0,
  startY: 0,
  scrollX: false,
  scrollY: true,
  freeScroll: false,
  directionLockThreshold: 5,
  eventPassthrough: '',
  click: false,
  tap: false,
  bounce: true,
  bounceTime: 800,
  momentum: true,
  momentumLimitTime: 300,
  momentumLimitDistance: 15,
  swipeTime: 2500,
  swipeBounceTime: 500,
  deceleration: 0.001,
  flickLimitTime: 200,
  flickLimitDistance: 100,
  resizePolling: 60,
  probeType: 0,
  preventDefault: true,
  preventDefaultException: {
    tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
  },
  HWCompositing: true,
  useTransition: true,
  useTransform: true,
  bindToWrapper: false,
  disableMouse: hasTouch,
  disableTouch: !hasTouch,
  observeDOM: true,
  autoBlur: true,
  /**
   * for picker
   * wheel: {
   *   selectedIndex: 0,
   *   rotate: 25,
   *   adjustTime: 400
   *   wheelWrapperClass: 'wheel-scroll',
   *   wheelItemClass: 'wheel-item'
   * }
   */
  wheel: false,
  /**
   * for slide
   * snap: {
   *   loop: false,
   *   el: domEl,
   *   threshold: 0.1,
   *   stepX: 100,
   *   stepY: 100,
   *   speed: 400,
   *   easing: {
   *     style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
   *     fn: function (t) {
   *       return t * (2 - t)
   *     }
   *   }
   *   listenFlick: true
   * }
   */
  snap: false,
  /**
   * for scrollbar
   * scrollbar: {
   *   fade: true,
   *   interactive: false
   * }
   */
  scrollbar: false,
  /**
   * for pull down and refresh
   * pullDownRefresh: {
   *   threshold: 50,
   *   stop: 20
   * }
   */
  pullDownRefresh: false,
  /**
   * for pull up and load
   * pullUpLoad: {
   *   threshold: 50
   * }
   */
  pullUpLoad: false,
  /**
   * for mouse wheel
   * mouseWheel:{
   *   speed: 20,
   *   invert: false
   * }
   */
  mouseWheel: false,
  stopPropagation: false
};

function initMixin(BScroll) {
  BScroll.prototype._init = function (el, options) {
    this._handleOptions(options);

    // init private custom events
    this._events = {};

    this.x = 0;
    this.y = 0;
    this.directionX = 0;
    this.directionY = 0;

    this._addDOMEvents();

    this._initExtFeatures();

    this._watchTransition();

    if (this.options.observeDOM) {
      this._initDOMObserver();
    }

    if (this.options.autoBlur) {
      this._handleAutoBlur();
    }

    this.refresh();

    if (!this.options.snap) {
      this.scrollTo(this.options.startX, this.options.startY);
    }

    this.enable();
  };

  BScroll.prototype._handleOptions = function (options) {
    this.options = extend({}, DEFAULT_OPTIONS, options);

    this.translateZ = this.options.HWCompositing && hasPerspective ? ' translateZ(0)' : '';

    this.options.useTransition = this.options.useTransition && hasTransition;
    this.options.useTransform = this.options.useTransform && hasTransform;

    this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;

    // If you want eventPassthrough I have to lock one of the axes
    this.options.scrollX = this.options.eventPassthrough === 'horizontal' ? false : this.options.scrollX;
    this.options.scrollY = this.options.eventPassthrough === 'vertical' ? false : this.options.scrollY;

    // With eventPassthrough we also need lockDirection mechanism
    this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
    this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;

    if (this.options.tap === true) {
      this.options.tap = 'tap';
    }
  };

  BScroll.prototype._addDOMEvents = function () {
    var eventOperation = addEvent;
    this._handleDOMEvents(eventOperation);
  };

  BScroll.prototype._removeDOMEvents = function () {
    var eventOperation = removeEvent;
    this._handleDOMEvents(eventOperation);
  };

  BScroll.prototype._handleDOMEvents = function (eventOperation) {
    var target = this.options.bindToWrapper ? this.wrapper : window;
    eventOperation(window, 'orientationchange', this);
    eventOperation(window, 'resize', this);

    if (this.options.click) {
      eventOperation(this.wrapper, 'click', this, true);
    }

    if (!this.options.disableMouse) {
      eventOperation(this.wrapper, 'mousedown', this);
      eventOperation(target, 'mousemove', this);
      eventOperation(target, 'mousecancel', this);
      eventOperation(target, 'mouseup', this);
    }

    if (hasTouch && !this.options.disableTouch) {
      eventOperation(this.wrapper, 'touchstart', this);
      eventOperation(target, 'touchmove', this);
      eventOperation(target, 'touchcancel', this);
      eventOperation(target, 'touchend', this);
    }

    eventOperation(this.scroller, style.transitionEnd, this);
  };

  BScroll.prototype._initExtFeatures = function () {
    if (this.options.snap) {
      this._initSnap();
    }
    if (this.options.scrollbar) {
      this._initScrollbar();
    }
    if (this.options.pullUpLoad) {
      this._initPullUp();
    }
    if (this.options.pullDownRefresh) {
      this._initPullDown();
    }
    if (this.options.wheel) {
      this._initWheel();
    }
    if (this.options.mouseWheel) {
      this._initMouseWheel();
    }
  };

  BScroll.prototype._watchTransition = function () {
    if (typeof Object.defineProperty !== 'function') {
      return;
    }
    var me = this;
    var isInTransition = false;
    Object.defineProperty(this, 'isInTransition', {
      get: function get() {
        return isInTransition;
      },
      set: function set(newVal) {
        isInTransition = newVal;
        // fix issue #359
        var el = me.scroller.children.length ? me.scroller.children : [me.scroller];
        var pointerEvents = isInTransition && !me.pulling ? 'none' : 'auto';
        for (var i = 0; i < el.length; i++) {
          el[i].style.pointerEvents = pointerEvents;
        }
      }
    });
  };

  BScroll.prototype._handleAutoBlur = function () {
    this.on('beforeScrollStart', function () {
      var activeElement = document.activeElement;
      if (activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA')) {
        activeElement.blur();
      }
    });
  };

  BScroll.prototype._initDOMObserver = function () {
    var _this = this;

    if (typeof MutationObserver !== 'undefined') {
      var timer = void 0;
      var observer = new MutationObserver(function (mutations) {
        // don't do any refresh during the transition, or outside of the boundaries
        if (_this._shouldNotRefresh()) {
          return;
        }
        var immediateRefresh = false;
        var deferredRefresh = false;
        for (var i = 0; i < mutations.length; i++) {
          var mutation = mutations[i];
          if (mutation.type !== 'attributes') {
            immediateRefresh = true;
            break;
          } else {
            if (mutation.target !== _this.scroller) {
              deferredRefresh = true;
              break;
            }
          }
        }
        if (immediateRefresh) {
          _this.refresh();
        } else if (deferredRefresh) {
          // attributes changes too often
          clearTimeout(timer);
          timer = setTimeout(function () {
            if (!_this._shouldNotRefresh()) {
              _this.refresh();
            }
          }, 60);
        }
      });
      var config = {
        attributes: true,
        childList: true,
        subtree: true
      };
      observer.observe(this.scroller, config);

      this.on('destroy', function () {
        observer.disconnect();
      });
    } else {
      this._checkDOMUpdate();
    }
  };

  BScroll.prototype._shouldNotRefresh = function () {
    var outsideBoundaries = this.x > 0 || this.x < this.maxScrollX || this.y > 0 || this.y < this.maxScrollY;

    return this.isInTransition || this.stopFromTransition || outsideBoundaries;
  };

  BScroll.prototype._checkDOMUpdate = function () {
    var scrollerRect = getRect(this.scroller);
    var oldWidth = scrollerRect.width;
    var oldHeight = scrollerRect.height;

    function check() {
      if (this.destroyed) {
        return;
      }
      scrollerRect = getRect(this.scroller);
      var newWidth = scrollerRect.width;
      var newHeight = scrollerRect.height;

      if (oldWidth !== newWidth || oldHeight !== newHeight) {
        this.refresh();
      }
      oldWidth = newWidth;
      oldHeight = newHeight;

      next.call(this);
    }

    function next() {
      var _this2 = this;

      setTimeout(function () {
        check.call(_this2);
      }, 1000);
    }

    next.call(this);
  };

  BScroll.prototype.handleEvent = function (e) {
    switch (e.type) {
      case 'touchstart':
      case 'mousedown':
        this._start(e);
        break;
      case 'touchmove':
      case 'mousemove':
        this._move(e);
        break;
      case 'touchend':
      case 'mouseup':
      case 'touchcancel':
      case 'mousecancel':
        this._end(e);
        break;
      case 'orientationchange':
      case 'resize':
        this._resize();
        break;
      case 'transitionend':
      case 'webkitTransitionEnd':
      case 'oTransitionEnd':
      case 'MSTransitionEnd':
        this._transitionEnd(e);
        break;
      case 'click':
        if (this.enabled && !e._constructed) {
          if (!preventDefaultException(e.target, this.options.preventDefaultException)) {
            e.preventDefault();
            e.stopPropagation();
          }
        }
        break;
      case 'wheel':
      case 'DOMMouseScroll':
      case 'mousewheel':
        this._onMouseWheel(e);
        break;
    }
  };

  BScroll.prototype.refresh = function () {
    var wrapperRect = getRect(this.wrapper);
    this.wrapperWidth = wrapperRect.width;
    this.wrapperHeight = wrapperRect.height;

    var scrollerRect = getRect(this.scroller);
    this.scrollerWidth = scrollerRect.width;
    this.scrollerHeight = scrollerRect.height;

    var wheel = this.options.wheel;
    if (wheel) {
      this.items = this.scroller.children;
      this.options.itemHeight = this.itemHeight = this.items.length ? this.scrollerHeight / this.items.length : 0;
      if (this.selectedIndex === undefined) {
        this.selectedIndex = wheel.selectedIndex || 0;
      }
      this.options.startY = -this.selectedIndex * this.itemHeight;
      this.maxScrollX = 0;
      this.maxScrollY = -this.itemHeight * (this.items.length - 1);
    } else {
      this.maxScrollX = this.wrapperWidth - this.scrollerWidth;
      this.maxScrollY = this.wrapperHeight - this.scrollerHeight;
    }

    this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0;
    this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0;

    if (!this.hasHorizontalScroll) {
      this.maxScrollX = 0;
      this.scrollerWidth = this.wrapperWidth;
    }

    if (!this.hasVerticalScroll) {
      this.maxScrollY = 0;
      this.scrollerHeight = this.wrapperHeight;
    }

    this.endTime = 0;
    this.directionX = 0;
    this.directionY = 0;
    this.wrapperOffset = offset(this.wrapper);

    this.trigger('refresh');

    this.resetPosition();
  };

  BScroll.prototype.enable = function () {
    this.enabled = true;
  };

  BScroll.prototype.disable = function () {
    this.enabled = false;
  };
}

var ease = {
	// easeOutQuint
	swipe: {
		style: 'cubic-bezier(0.23, 1, 0.32, 1)',
		fn: function fn(t) {
			return 1 + --t * t * t * t * t;
		}
	},
	// easeOutQuard
	swipeBounce: {
		style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
		fn: function fn(t) {
			return t * (2 - t);
		}
	},
	// easeOutQuart
	bounce: {
		style: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
		fn: function fn(t) {
			return 1 - --t * t * t * t;
		}
	}
};

function momentum(current, start, time, lowerMargin, wrapperSize, options) {
  var distance = current - start;
  var speed = Math.abs(distance) / time;

  var deceleration = options.deceleration,
      itemHeight = options.itemHeight,
      swipeBounceTime = options.swipeBounceTime,
      wheel = options.wheel,
      swipeTime = options.swipeTime;

  var duration = swipeTime;
  var rate = wheel ? 4 : 15;

  var destination = current + speed / deceleration * (distance < 0 ? -1 : 1);

  if (wheel && itemHeight) {
    destination = Math.round(destination / itemHeight) * itemHeight;
  }

  if (destination < lowerMargin) {
    destination = wrapperSize ? Math.max(lowerMargin - wrapperSize / 4, lowerMargin - wrapperSize / rate * speed) : lowerMargin;
    duration = swipeBounceTime;
  } else if (destination > 0) {
    destination = wrapperSize ? Math.min(wrapperSize / 4, wrapperSize / rate * speed) : 0;
    duration = swipeBounceTime;
  }

  return {
    destination: Math.round(destination),
    duration: duration
  };
}

var DEFAULT_INTERVAL = 100 / 60;

function noop() {}

var requestAnimationFrame = function () {
  if (!inBrowser) {
    /* istanbul ignore if */
    return noop;
  }
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame ||
  // if all else fails, use setTimeout
  function (callback) {
    return window.setTimeout(callback, (callback.interval || DEFAULT_INTERVAL) / 2); // make interval as precise as possible.
  };
}();

var cancelAnimationFrame = function () {
  if (!inBrowser) {
    /* istanbul ignore if */
    return noop;
  }
  return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || function (id) {
    window.clearTimeout(id);
  };
}();

var DIRECTION_UP = 1;
var DIRECTION_DOWN = -1;
var DIRECTION_LEFT = 1;
var DIRECTION_RIGHT = -1;

var PROBE_DEBOUNCE = 1;

var PROBE_REALTIME = 3;

function warn(msg) {
  console.error('[BScroll warn]: ' + msg);
}

function assert(condition, msg) {
  if (!condition) {
    throw new Error('[BScroll] ' + msg);
  }
}

function coreMixin(BScroll) {
  BScroll.prototype._start = function (e) {
    var _eventType = eventType[e.type];
    if (_eventType !== TOUCH_EVENT) {
      if (e.button !== 0) {
        return;
      }
    }
    if (!this.enabled || this.destroyed || this.initiated && this.initiated !== _eventType) {
      return;
    }
    this.initiated = _eventType;

    if (this.options.preventDefault && !preventDefaultException(e.target, this.options.preventDefaultException)) {
      e.preventDefault();
    }
    if (this.options.stopPropagation) {
      e.stopPropagation();
    }

    this.moved = false;
    this.distX = 0;
    this.distY = 0;
    this.directionX = 0;
    this.directionY = 0;
    this.movingDirectionX = 0;
    this.movingDirectionY = 0;
    this.directionLocked = 0;

    this._transitionTime();
    this.startTime = getNow();

    if (this.options.wheel) {
      this.target = e.target;
    }

    this.stop();

    var point = e.touches ? e.touches[0] : e;

    this.startX = this.x;
    this.startY = this.y;
    this.absStartX = this.x;
    this.absStartY = this.y;
    this.pointX = point.pageX;
    this.pointY = point.pageY;

    this.trigger('beforeScrollStart');
  };

  BScroll.prototype._move = function (e) {
    if (!this.enabled || this.destroyed || eventType[e.type] !== this.initiated) {
      return;
    }

    if (this.options.preventDefault) {
      e.preventDefault();
    }
    if (this.options.stopPropagation) {
      e.stopPropagation();
    }

    var point = e.touches ? e.touches[0] : e;
    var deltaX = point.pageX - this.pointX;
    var deltaY = point.pageY - this.pointY;

    this.pointX = point.pageX;
    this.pointY = point.pageY;

    this.distX += deltaX;
    this.distY += deltaY;

    var absDistX = Math.abs(this.distX);
    var absDistY = Math.abs(this.distY);

    var timestamp = getNow();

    // We need to move at least momentumLimitDistance pixels for the scrolling to initiate
    if (timestamp - this.endTime > this.options.momentumLimitTime && absDistY < this.options.momentumLimitDistance && absDistX < this.options.momentumLimitDistance) {
      return;
    }

    // If you are scrolling in one direction lock the other
    if (!this.directionLocked && !this.options.freeScroll) {
      if (absDistX > absDistY + this.options.directionLockThreshold) {
        this.directionLocked = 'h'; // lock horizontally
      } else if (absDistY >= absDistX + this.options.directionLockThreshold) {
        this.directionLocked = 'v'; // lock vertically
      } else {
        this.directionLocked = 'n'; // no lock
      }
    }

    if (this.directionLocked === 'h') {
      if (this.options.eventPassthrough === 'vertical') {
        e.preventDefault();
      } else if (this.options.eventPassthrough === 'horizontal') {
        this.initiated = false;
        return;
      }
      deltaY = 0;
    } else if (this.directionLocked === 'v') {
      if (this.options.eventPassthrough === 'horizontal') {
        e.preventDefault();
      } else if (this.options.eventPassthrough === 'vertical') {
        this.initiated = false;
        return;
      }
      deltaX = 0;
    }

    deltaX = this.hasHorizontalScroll ? deltaX : 0;
    deltaY = this.hasVerticalScroll ? deltaY : 0;
    this.movingDirectionX = deltaX > 0 ? DIRECTION_RIGHT : deltaX < 0 ? DIRECTION_LEFT : 0;
    this.movingDirectionY = deltaY > 0 ? DIRECTION_DOWN : deltaY < 0 ? DIRECTION_UP : 0;

    var newX = this.x + deltaX;
    var newY = this.y + deltaY;

    // Slow down or stop if outside of the boundaries
    if (newX > 0 || newX < this.maxScrollX) {
      if (this.options.bounce) {
        newX = this.x + deltaX / 3;
      } else {
        newX = newX > 0 ? 0 : this.maxScrollX;
      }
    }
    if (newY > 0 || newY < this.maxScrollY) {
      if (this.options.bounce) {
        newY = this.y + deltaY / 3;
      } else {
        newY = newY > 0 ? 0 : this.maxScrollY;
      }
    }

    if (!this.moved) {
      this.moved = true;
      this.trigger('scrollStart');
    }

    this._translate(newX, newY);

    if (timestamp - this.startTime > this.options.momentumLimitTime) {
      this.startTime = timestamp;
      this.startX = this.x;
      this.startY = this.y;

      if (this.options.probeType === PROBE_DEBOUNCE) {
        this.trigger('scroll', {
          x: this.x,
          y: this.y
        });
      }
    }

    if (this.options.probeType > PROBE_DEBOUNCE) {
      this.trigger('scroll', {
        x: this.x,
        y: this.y
      });
    }

    var scrollLeft = document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft;
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;

    var pX = this.pointX - scrollLeft;
    var pY = this.pointY - scrollTop;

    if (pX > document.documentElement.clientWidth - this.options.momentumLimitDistance || pX < this.options.momentumLimitDistance || pY < this.options.momentumLimitDistance || pY > document.documentElement.clientHeight - this.options.momentumLimitDistance) {
      this._end(e);
    }
  };

  BScroll.prototype._end = function (e) {
    if (!this.enabled || this.destroyed || eventType[e.type] !== this.initiated) {
      return;
    }
    this.initiated = false;

    if (this.options.preventDefault && !preventDefaultException(e.target, this.options.preventDefaultException)) {
      e.preventDefault();
    }
    if (this.options.stopPropagation) {
      e.stopPropagation();
    }

    this.trigger('touchEnd', {
      x: this.x,
      y: this.y
    });

    this.isInTransition = false;

    // ensures that the last position is rounded
    var newX = Math.round(this.x);
    var newY = Math.round(this.y);

    var deltaX = newX - this.absStartX;
    var deltaY = newY - this.absStartY;
    this.directionX = deltaX > 0 ? DIRECTION_RIGHT : deltaX < 0 ? DIRECTION_LEFT : 0;
    this.directionY = deltaY > 0 ? DIRECTION_DOWN : deltaY < 0 ? DIRECTION_UP : 0;

    // if configure pull down refresh, check it first
    if (this.options.pullDownRefresh && this._checkPullDown()) {
      return;
    }

    // check if it is a click operation
    if (this._checkClick(e)) {
      this.trigger('scrollCancel');
      return;
    }

    // reset if we are outside of the boundaries
    if (this.resetPosition(this.options.bounceTime, ease.bounce)) {
      return;
    }

    this.scrollTo(newX, newY);

    this.endTime = getNow();
    var duration = this.endTime - this.startTime;
    var absDistX = Math.abs(newX - this.startX);
    var absDistY = Math.abs(newY - this.startY);

    // flick
    if (this._events.flick && duration < this.options.flickLimitTime && absDistX < this.options.flickLimitDistance && absDistY < this.options.flickLimitDistance) {
      this.trigger('flick');
      return;
    }

    var time = 0;
    // start momentum animation if needed
    if (this.options.momentum && duration < this.options.momentumLimitTime && (absDistY > this.options.momentumLimitDistance || absDistX > this.options.momentumLimitDistance)) {
      var momentumX = this.hasHorizontalScroll ? momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options) : { destination: newX, duration: 0 };
      var momentumY = this.hasVerticalScroll ? momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options) : { destination: newY, duration: 0 };
      newX = momentumX.destination;
      newY = momentumY.destination;
      time = Math.max(momentumX.duration, momentumY.duration);
      this.isInTransition = true;
    } else {
      if (this.options.wheel) {
        newY = Math.round(newY / this.itemHeight) * this.itemHeight;
        time = this.options.wheel.adjustTime || 400;
      }
    }

    var easing = ease.swipe;
    if (this.options.snap) {
      var snap = this._nearestSnap(newX, newY);
      this.currentPage = snap;
      time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(newX - snap.x), 1000), Math.min(Math.abs(newY - snap.y), 1000)), 300);
      newX = snap.x;
      newY = snap.y;

      this.directionX = 0;
      this.directionY = 0;
      easing = this.options.snap.easing || ease.bounce;
    }

    if (newX !== this.x || newY !== this.y) {
      // change easing function when scroller goes out of the boundaries
      if (newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY) {
        easing = ease.swipeBounce;
      }
      this.scrollTo(newX, newY, time, easing);
      return;
    }

    if (this.options.wheel) {
      this.selectedIndex = Math.round(Math.abs(this.y / this.itemHeight));
    }
    this.trigger('scrollEnd', {
      x: this.x,
      y: this.y
    });
  };

  BScroll.prototype._checkClick = function (e) {
    // when in the process of pulling down, it should not prevent click
    var preventClick = this.stopFromTransition && !this.pulling;
    this.stopFromTransition = false;

    // we scrolled less than 15 pixels
    if (!this.moved) {
      if (this.options.wheel) {
        if (this.target && this.target.className === this.options.wheel.wheelWrapperClass) {
          var index = Math.abs(Math.round(this.y / this.itemHeight));
          var _offset = Math.round((this.pointY + offset(this.target).top - this.itemHeight / 2) / this.itemHeight);
          this.target = this.items[index + _offset];
        }
        this.scrollToElement(this.target, this.options.wheel.adjustTime || 400, true, true, ease.swipe);
        return true;
      } else {
        if (!preventClick) {
          if (this.options.tap) {
            tap(e, this.options.tap);
          }

          if (this.options.click && !preventDefaultException(e.target, this.options.preventDefaultException)) {
            click(e);
          }
          return true;
        }
        return false;
      }
    }
    return false;
  };

  BScroll.prototype._resize = function () {
    var _this = this;

    if (!this.enabled) {
      return;
    }
    // fix a scroll problem under Android condition
    if (isAndroid) {
      this.wrapper.scrollTop = 0;
    }
    clearTimeout(this.resizeTimeout);
    this.resizeTimeout = setTimeout(function () {
      _this.refresh();
    }, this.options.resizePolling);
  };

  BScroll.prototype._startProbe = function () {
    cancelAnimationFrame(this.probeTimer);
    this.probeTimer = requestAnimationFrame(probe);

    var me = this;

    function probe() {
      var pos = me.getComputedPosition();
      me.trigger('scroll', pos);
      if (!me.isInTransition) {
        me.trigger('scrollEnd', pos);
        return;
      }
      me.probeTimer = requestAnimationFrame(probe);
    }
  };

  BScroll.prototype._transitionProperty = function () {
    var property = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'transform';

    this.scrollerStyle[style.transitionProperty] = property;
  };

  BScroll.prototype._transitionTime = function () {
    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    this.scrollerStyle[style.transitionDuration] = time + 'ms';

    if (this.options.wheel) {
      for (var i = 0; i < this.items.length; i++) {
        this.items[i].style[style.transitionDuration] = time + 'ms';
      }
    }

    if (this.indicators) {
      for (var _i = 0; _i < this.indicators.length; _i++) {
        this.indicators[_i].transitionTime(time);
      }
    }
  };

  BScroll.prototype._transitionTimingFunction = function (easing) {
    this.scrollerStyle[style.transitionTimingFunction] = easing;

    if (this.options.wheel) {
      for (var i = 0; i < this.items.length; i++) {
        this.items[i].style[style.transitionTimingFunction] = easing;
      }
    }

    if (this.indicators) {
      for (var _i2 = 0; _i2 < this.indicators.length; _i2++) {
        this.indicators[_i2].transitionTimingFunction(easing);
      }
    }
  };

  BScroll.prototype._transitionEnd = function (e) {
    if (e.target !== this.scroller || !this.isInTransition) {
      return;
    }

    this._transitionTime();
    if (!this.pulling && !this.resetPosition(this.options.bounceTime, ease.bounce)) {
      this.isInTransition = false;
      if (this.options.probeType !== PROBE_REALTIME) {
        this.trigger('scrollEnd', {
          x: this.x,
          y: this.y
        });
      }
    }
  };

  BScroll.prototype._translate = function (x, y) {
    assert(!isUndef(x) && !isUndef(y), 'Oops! translate x or y is null or undefined. please check your code.');
    if (this.options.useTransform) {
      this.scrollerStyle[style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.translateZ;
    } else {
      x = Math.round(x);
      y = Math.round(y);
      this.scrollerStyle.left = x + 'px';
      this.scrollerStyle.top = y + 'px';
    }

    if (this.options.wheel) {
      var _options$wheel$rotate = this.options.wheel.rotate,
          rotate = _options$wheel$rotate === undefined ? 25 : _options$wheel$rotate;

      for (var i = 0; i < this.items.length; i++) {
        var deg = rotate * (y / this.itemHeight + i);
        this.items[i].style[style.transform] = 'rotateX(' + deg + 'deg)';
      }
    }

    this.x = x;
    this.y = y;

    if (this.indicators) {
      for (var _i3 = 0; _i3 < this.indicators.length; _i3++) {
        this.indicators[_i3].updatePosition();
      }
    }
  };

  BScroll.prototype._animate = function (destX, destY, duration, easingFn) {
    var me = this;
    var startX = this.x;
    var startY = this.y;
    var startTime = getNow();
    var destTime = startTime + duration;

    function step() {
      var now = getNow();

      if (now >= destTime) {
        me.isAnimating = false;
        me._translate(destX, destY);

        if (!me.pulling && !me.resetPosition(me.options.bounceTime)) {
          me.trigger('scrollEnd', {
            x: me.x,
            y: me.y
          });
        }
        return;
      }
      now = (now - startTime) / duration;
      var easing = easingFn(now);
      var newX = (destX - startX) * easing + startX;
      var newY = (destY - startY) * easing + startY;

      me._translate(newX, newY);

      if (me.isAnimating) {
        me.animateTimer = requestAnimationFrame(step);
      }

      if (me.options.probeType === PROBE_REALTIME) {
        me.trigger('scroll', {
          x: me.x,
          y: me.y
        });
      }
    }

    this.isAnimating = true;
    cancelAnimationFrame(this.animateTimer);
    step();
  };

  BScroll.prototype.scrollBy = function (x, y) {
    var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var easing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ease.bounce;

    x = this.x + x;
    y = this.y + y;

    this.scrollTo(x, y, time, easing);
  };

  BScroll.prototype.scrollTo = function (x, y) {
    var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var easing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ease.bounce;

    this.isInTransition = this.options.useTransition && time > 0 && (x !== this.x || y !== this.y);

    if (!time || this.options.useTransition) {
      this._transitionProperty();
      this._transitionTimingFunction(easing.style);
      this._transitionTime(time);
      this._translate(x, y);

      if (time && this.options.probeType === PROBE_REALTIME) {
        this._startProbe();
      }

      if (this.options.wheel) {
        if (y > 0) {
          this.selectedIndex = 0;
        } else if (y < this.maxScrollY) {
          this.selectedIndex = this.items.length - 1;
        } else {
          this.selectedIndex = Math.round(Math.abs(y / this.itemHeight));
        }
      }
    } else {
      this._animate(x, y, time, easing.fn);
    }
  };

  BScroll.prototype.scrollToElement = function (el, time, offsetX, offsetY, easing) {
    if (!el) {
      return;
    }
    el = el.nodeType ? el : this.scroller.querySelector(el);

    if (this.options.wheel && el.className !== this.options.wheel.wheelItemClass) {
      return;
    }

    var pos = offset(el);
    pos.left -= this.wrapperOffset.left;
    pos.top -= this.wrapperOffset.top;

    // if offsetX/Y are true we center the element to the screen
    if (offsetX === true) {
      offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
    }
    if (offsetY === true) {
      offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
    }

    pos.left -= offsetX || 0;
    pos.top -= offsetY || 0;
    pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
    pos.top = pos.top > 0 ? 0 : pos.top < this.maxScrollY ? this.maxScrollY : pos.top;

    if (this.options.wheel) {
      pos.top = Math.round(pos.top / this.itemHeight) * this.itemHeight;
    }

    this.scrollTo(pos.left, pos.top, time, easing);
  };

  BScroll.prototype.resetPosition = function () {
    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var easeing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ease.bounce;

    var x = this.x;
    var roundX = Math.round(x);
    if (!this.hasHorizontalScroll || roundX > 0) {
      x = 0;
    } else if (roundX < this.maxScrollX) {
      x = this.maxScrollX;
    }

    var y = this.y;
    var roundY = Math.round(y);
    if (!this.hasVerticalScroll || roundY > 0) {
      y = 0;
    } else if (roundY < this.maxScrollY) {
      y = this.maxScrollY;
    }

    if (x === this.x && y === this.y) {
      return false;
    }

    this.scrollTo(x, y, time, easeing);

    return true;
  };

  BScroll.prototype.getComputedPosition = function () {
    var matrix = window.getComputedStyle(this.scroller, null);
    var x = void 0;
    var y = void 0;

    if (this.options.useTransform) {
      matrix = matrix[style.transform].split(')')[0].split(', ');
      x = +(matrix[12] || matrix[4]);
      y = +(matrix[13] || matrix[5]);
    } else {
      x = +matrix.left.replace(/[^-\d.]/g, '');
      y = +matrix.top.replace(/[^-\d.]/g, '');
    }

    return {
      x: x,
      y: y
    };
  };

  BScroll.prototype.stop = function () {
    if (this.options.useTransition && this.isInTransition) {
      this.isInTransition = false;
      var pos = this.getComputedPosition();
      this._translate(pos.x, pos.y);
      if (this.options.wheel) {
        this.target = this.items[Math.round(-pos.y / this.itemHeight)];
      } else {
        this.trigger('scrollEnd', {
          x: this.x,
          y: this.y
        });
      }
      this.stopFromTransition = true;
    } else if (!this.options.useTransition && this.isAnimating) {
      this.isAnimating = false;
      this.trigger('scrollEnd', {
        x: this.x,
        y: this.y
      });
      this.stopFromTransition = true;
    }
  };

  BScroll.prototype.destroy = function () {
    this.destroyed = true;
    this.trigger('destroy');

    this._removeDOMEvents();
    // remove custom events
    this._events = {};
  };
}

function snapMixin(BScroll) {
  BScroll.prototype._initSnap = function () {
    var _this = this;

    this.currentPage = {};
    var snap = this.options.snap;

    if (snap.loop) {
      var children = this.scroller.children;
      if (children.length > 1) {
        prepend(children[children.length - 1].cloneNode(true), this.scroller);
        this.scroller.appendChild(children[1].cloneNode(true));
      } else {
        // Loop does not make any sense if there is only one child.
        snap.loop = false;
      }
    }

    var el = snap.el;
    if (typeof el === 'string') {
      el = this.scroller.querySelectorAll(el);
    }

    this.on('refresh', function () {
      _this.pages = [];

      if (!_this.wrapperWidth || !_this.wrapperHeight || !_this.scrollerWidth || !_this.scrollerHeight) {
        return;
      }

      var stepX = snap.stepX || _this.wrapperWidth;
      var stepY = snap.stepY || _this.wrapperHeight;

      var x = 0;
      var y = void 0;
      var cx = void 0;
      var cy = void 0;
      var i = 0;
      var l = void 0;
      var m = 0;
      var n = void 0;
      var rect = void 0;
      if (!el) {
        cx = Math.round(stepX / 2);
        cy = Math.round(stepY / 2);

        while (x > -_this.scrollerWidth) {
          _this.pages[i] = [];
          l = 0;
          y = 0;

          while (y > -_this.scrollerHeight) {
            _this.pages[i][l] = {
              x: Math.max(x, _this.maxScrollX),
              y: Math.max(y, _this.maxScrollY),
              width: stepX,
              height: stepY,
              cx: x - cx,
              cy: y - cy
            };

            y -= stepY;
            l++;
          }

          x -= stepX;
          i++;
        }
      } else {
        l = el.length;
        n = -1;

        for (; i < l; i++) {
          rect = getRect(el[i]);
          if (i === 0 || rect.left <= getRect(el[i - 1]).left) {
            m = 0;
            n++;
          }

          if (!_this.pages[m]) {
            _this.pages[m] = [];
          }

          x = Math.max(-rect.left, _this.maxScrollX);
          y = Math.max(-rect.top, _this.maxScrollY);
          cx = x - Math.round(rect.width / 2);
          cy = y - Math.round(rect.height / 2);

          _this.pages[m][n] = {
            x: x,
            y: y,
            width: rect.width,
            height: rect.height,
            cx: cx,
            cy: cy
          };

          if (x > _this.maxScrollX) {
            m++;
          }
        }
      }

      _this._checkSnapLoop();

      var initPageX = snap._loopX ? 1 : 0;
      var initPageY = snap._loopY ? 1 : 0;
      _this._goToPage(_this.currentPage.pageX || initPageX, _this.currentPage.pageY || initPageY, 0);

      // Update snap threshold if needed.
      var snapThreshold = snap.threshold;
      if (snapThreshold % 1 === 0) {
        _this.snapThresholdX = snapThreshold;
        _this.snapThresholdY = snapThreshold;
      } else {
        _this.snapThresholdX = Math.round(_this.pages[_this.currentPage.pageX][_this.currentPage.pageY].width * snapThreshold);
        _this.snapThresholdY = Math.round(_this.pages[_this.currentPage.pageX][_this.currentPage.pageY].height * snapThreshold);
      }
    });

    this.on('scrollEnd', function () {
      if (snap.loop) {
        if (snap._loopX) {
          if (_this.currentPage.pageX === 0) {
            _this._goToPage(_this.pages.length - 2, _this.currentPage.pageY, 0);
          }
          if (_this.currentPage.pageX === _this.pages.length - 1) {
            _this._goToPage(1, _this.currentPage.pageY, 0);
          }
        } else {
          if (_this.currentPage.pageY === 0) {
            _this._goToPage(_this.currentPage.pageX, _this.pages[0].length - 2, 0);
          }
          if (_this.currentPage.pageY === _this.pages[0].length - 1) {
            _this._goToPage(_this.currentPage.pageX, 1, 0);
          }
        }
      }
    });

    if (snap.listenFlick !== false) {
      this.on('flick', function () {
        var time = snap.speed || Math.max(Math.max(Math.min(Math.abs(_this.x - _this.startX), 1000), Math.min(Math.abs(_this.y - _this.startY), 1000)), 300);

        _this._goToPage(_this.currentPage.pageX + _this.directionX, _this.currentPage.pageY + _this.directionY, time);
      });
    }

    this.on('destroy', function () {
      if (snap.loop) {
        var _children = _this.scroller.children;
        if (_children.length > 2) {
          removeChild(_this.scroller, _children[_children.length - 1]);
          removeChild(_this.scroller, _children[0]);
        }
      }
    });
  };

  BScroll.prototype._checkSnapLoop = function () {
    var snap = this.options.snap;

    if (!snap.loop || !this.pages) {
      return;
    }

    if (this.pages.length > 1) {
      snap._loopX = true;
    }
    if (this.pages[0] && this.pages[0].length > 1) {
      snap._loopY = true;
    }
    if (snap._loopX && snap._loopY) {
      warn('Loop does not support two direction at the same time.');
    }
  };

  BScroll.prototype._nearestSnap = function (x, y) {
    if (!this.pages.length) {
      return { x: 0, y: 0, pageX: 0, pageY: 0 };
    }

    var i = 0;
    // Check if we exceeded the snap threshold
    if (Math.abs(x - this.absStartX) <= this.snapThresholdX && Math.abs(y - this.absStartY) <= this.snapThresholdY) {
      return this.currentPage;
    }

    if (x > 0) {
      x = 0;
    } else if (x < this.maxScrollX) {
      x = this.maxScrollX;
    }

    if (y > 0) {
      y = 0;
    } else if (y < this.maxScrollY) {
      y = this.maxScrollY;
    }

    var l = this.pages.length;
    for (; i < l; i++) {
      if (x >= this.pages[i][0].cx) {
        x = this.pages[i][0].x;
        break;
      }
    }

    l = this.pages[i].length;

    var m = 0;
    for (; m < l; m++) {
      if (y >= this.pages[0][m].cy) {
        y = this.pages[0][m].y;
        break;
      }
    }

    if (i === this.currentPage.pageX) {
      i += this.directionX;

      if (i < 0) {
        i = 0;
      } else if (i >= this.pages.length) {
        i = this.pages.length - 1;
      }

      x = this.pages[i][0].x;
    }

    if (m === this.currentPage.pageY) {
      m += this.directionY;

      if (m < 0) {
        m = 0;
      } else if (m >= this.pages[0].length) {
        m = this.pages[0].length - 1;
      }

      y = this.pages[0][m].y;
    }

    return {
      x: x,
      y: y,
      pageX: i,
      pageY: m
    };
  };

  BScroll.prototype._goToPage = function (x) {
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var time = arguments[2];
    var easing = arguments[3];

    var snap = this.options.snap;

    if (!snap || !this.pages) {
      return;
    }

    easing = easing || snap.easing || ease.bounce;

    if (x >= this.pages.length) {
      x = this.pages.length - 1;
    } else if (x < 0) {
      x = 0;
    }

    if (!this.pages[x]) {
      return;
    }

    if (y >= this.pages[x].length) {
      y = this.pages[x].length - 1;
    } else if (y < 0) {
      y = 0;
    }

    var posX = this.pages[x][y].x;
    var posY = this.pages[x][y].y;

    time = time === undefined ? snap.speed || Math.max(Math.max(Math.min(Math.abs(posX - this.x), 1000), Math.min(Math.abs(posY - this.y), 1000)), 300) : time;

    this.currentPage = {
      x: posX,
      y: posY,
      pageX: x,
      pageY: y
    };
    this.scrollTo(posX, posY, time, easing);
  };

  BScroll.prototype.goToPage = function (x, y, time, easing) {
    var snap = this.options.snap;
    if (!snap) {
      return;
    }

    if (snap.loop) {
      var len = void 0;
      if (snap._loopX) {
        len = this.pages.length - 2;
        if (x >= len) {
          x = len - 1;
        } else if (x < 0) {
          x = 0;
        }
        x += 1;
      } else {
        len = this.pages[0].length - 2;
        if (y >= len) {
          y = len - 1;
        } else if (y < 0) {
          y = 0;
        }
        y += 1;
      }
    }
    this._goToPage(x, y, time, easing);
  };

  BScroll.prototype.next = function (time, easing) {
    var snap = this.options.snap;
    if (!snap) {
      return;
    }

    var x = this.currentPage.pageX;
    var y = this.currentPage.pageY;

    x++;
    if (x >= this.pages.length && this.hasVerticalScroll) {
      x = 0;
      y++;
    }

    this._goToPage(x, y, time, easing);
  };

  BScroll.prototype.prev = function (time, easing) {
    var snap = this.options.snap;
    if (!snap) {
      return;
    }

    var x = this.currentPage.pageX;
    var y = this.currentPage.pageY;

    x--;
    if (x < 0 && this.hasVerticalScroll) {
      x = 0;
      y--;
    }

    this._goToPage(x, y, time, easing);
  };

  BScroll.prototype.getCurrentPage = function () {
    var snap = this.options.snap;
    if (!snap) {
      return null;
    }

    if (snap.loop) {
      var currentPage = void 0;
      if (snap._loopX) {
        currentPage = extend({}, this.currentPage, {
          pageX: this.currentPage.pageX - 1
        });
      } else {
        currentPage = extend({}, this.currentPage, {
          pageY: this.currentPage.pageY - 1
        });
      }
      return currentPage;
    }
    return this.currentPage;
  };
}

function wheelMixin(BScroll) {
  BScroll.prototype.wheelTo = function () {
    var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    if (this.options.wheel) {
      this.y = -index * this.itemHeight;
      this.scrollTo(0, this.y);
    }
  };

  BScroll.prototype.getSelectedIndex = function () {
    return this.options.wheel && this.selectedIndex;
  };

  BScroll.prototype._initWheel = function () {
    var wheel = this.options.wheel;
    if (!wheel.wheelWrapperClass) {
      wheel.wheelWrapperClass = 'wheel-scroll';
    }
    if (!wheel.wheelItemClass) {
      wheel.wheelItemClass = 'wheel-item';
    }
    if (wheel.selectedIndex === undefined) {
      wheel.selectedIndex = 0;
      warn('wheel option selectedIndex is required!');
    }
  };
}

var INDICATOR_MIN_LEN = 8;

function scrollbarMixin(BScroll) {
  BScroll.prototype._initScrollbar = function () {
    var _this = this;

    var _options$scrollbar = this.options.scrollbar,
        _options$scrollbar$fa = _options$scrollbar.fade,
        fade = _options$scrollbar$fa === undefined ? true : _options$scrollbar$fa,
        _options$scrollbar$in = _options$scrollbar.interactive,
        interactive = _options$scrollbar$in === undefined ? false : _options$scrollbar$in;

    this.indicators = [];
    var indicator = void 0;

    if (this.options.scrollX) {
      indicator = {
        el: createScrollbar('horizontal'),
        direction: 'horizontal',
        fade: fade,
        interactive: interactive
      };
      this._insertScrollBar(indicator.el);

      this.indicators.push(new Indicator(this, indicator));
    }

    if (this.options.scrollY) {
      indicator = {
        el: createScrollbar('vertical'),
        direction: 'vertical',
        fade: fade,
        interactive: interactive
      };
      this._insertScrollBar(indicator.el);
      this.indicators.push(new Indicator(this, indicator));
    }

    this.on('refresh', function () {
      for (var i = 0; i < _this.indicators.length; i++) {
        _this.indicators[i].refresh();
      }
    });

    if (fade) {
      this.on('scrollEnd', function () {
        for (var i = 0; i < _this.indicators.length; i++) {
          _this.indicators[i].fade();
        }
      });

      this.on('scrollCancel', function () {
        for (var i = 0; i < _this.indicators.length; i++) {
          _this.indicators[i].fade();
        }
      });

      this.on('scrollStart', function () {
        for (var i = 0; i < _this.indicators.length; i++) {
          _this.indicators[i].fade(true);
        }
      });

      this.on('beforeScrollStart', function () {
        for (var i = 0; i < _this.indicators.length; i++) {
          _this.indicators[i].fade(true, true);
        }
      });
    }

    this.on('destroy', function () {
      _this._removeScrollBars();
    });
  };

  BScroll.prototype._insertScrollBar = function (scrollbar) {
    this.wrapper.appendChild(scrollbar);
  };

  BScroll.prototype._removeScrollBars = function () {
    for (var i = 0; i < this.indicators.length; i++) {
      this.indicators[i].destroy();
    }
  };
}

function createScrollbar(direction) {
  var scrollbar = document.createElement('div');
  var indicator = document.createElement('div');

  scrollbar.style.cssText = 'position:absolute;z-index:9999;pointerEvents:none';
  indicator.style.cssText = 'box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px;';

  indicator.className = 'bscroll-indicator';

  if (direction === 'horizontal') {
    scrollbar.style.cssText += ';height:7px;left:2px;right:2px;bottom:0';
    indicator.style.height = '100%';
    scrollbar.className = 'bscroll-horizontal-scrollbar';
  } else {
    scrollbar.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px';
    indicator.style.width = '100%';
    scrollbar.className = 'bscroll-vertical-scrollbar';
  }

  scrollbar.style.cssText += ';overflow:hidden';
  scrollbar.appendChild(indicator);

  return scrollbar;
}

function Indicator(scroller, options) {
  this.wrapper = options.el;
  this.wrapperStyle = this.wrapper.style;
  this.indicator = this.wrapper.children[0];
  this.indicatorStyle = this.indicator.style;
  this.scroller = scroller;
  this.direction = options.direction;
  if (options.fade) {
    this.visible = 0;
    this.wrapperStyle.opacity = '0';
  } else {
    this.visible = 1;
  }

  this.sizeRatioX = 1;
  this.sizeRatioY = 1;
  this.maxPosX = 0;
  this.maxPosY = 0;
  this.x = 0;
  this.y = 0;

  if (options.interactive) {
    this._addDOMEvents();
  }
}

Indicator.prototype.handleEvent = function (e) {
  switch (e.type) {
    case 'touchstart':
    case 'mousedown':
      this._start(e);
      break;
    case 'touchmove':
    case 'mousemove':
      this._move(e);
      break;
    case 'touchend':
    case 'mouseup':
    case 'touchcancel':
    case 'mousecancel':
      this._end(e);
      break;
  }
};

Indicator.prototype.refresh = function () {
  this.transitionTime();
  this._calculate();
  this.updatePosition();
};

Indicator.prototype.fade = function (visible, hold) {
  var _this2 = this;

  if (hold && !this.visible) {
    return;
  }

  var time = visible ? 250 : 500;

  visible = visible ? '1' : '0';

  this.wrapperStyle[style.transitionDuration] = time + 'ms';

  clearTimeout(this.fadeTimeout);
  this.fadeTimeout = setTimeout(function () {
    _this2.wrapperStyle.opacity = visible;
    _this2.visible = +visible;
  }, 0);
};

Indicator.prototype.updatePosition = function () {
  if (this.direction === 'vertical') {
    var y = Math.round(this.sizeRatioY * this.scroller.y);

    if (y < 0) {
      this.transitionTime(500);
      var height = Math.max(this.indicatorHeight + y * 3, INDICATOR_MIN_LEN);
      this.indicatorStyle.height = height + 'px';
      y = 0;
    } else if (y > this.maxPosY) {
      this.transitionTime(500);
      var _height = Math.max(this.indicatorHeight - (y - this.maxPosY) * 3, INDICATOR_MIN_LEN);
      this.indicatorStyle.height = _height + 'px';
      y = this.maxPosY + this.indicatorHeight - _height;
    } else {
      this.indicatorStyle.height = this.indicatorHeight + 'px';
    }
    this.y = y;

    if (this.scroller.options.useTransform) {
      this.indicatorStyle[style.transform] = 'translateY(' + y + 'px)' + this.scroller.translateZ;
    } else {
      this.indicatorStyle.top = y + 'px';
    }
  } else {
    var x = Math.round(this.sizeRatioX * this.scroller.x);

    if (x < 0) {
      this.transitionTime(500);
      var width = Math.max(this.indicatorWidth + x * 3, INDICATOR_MIN_LEN);
      this.indicatorStyle.width = width + 'px';
      x = 0;
    } else if (x > this.maxPosX) {
      this.transitionTime(500);
      var _width = Math.max(this.indicatorWidth - (x - this.maxPosX) * 3, INDICATOR_MIN_LEN);
      this.indicatorStyle.width = _width + 'px';
      x = this.maxPosX + this.indicatorWidth - _width;
    } else {
      this.indicatorStyle.width = this.indicatorWidth + 'px';
    }

    this.x = x;

    if (this.scroller.options.useTransform) {
      this.indicatorStyle[style.transform] = 'translateX(' + x + 'px)' + this.scroller.translateZ;
    } else {
      this.indicatorStyle.left = x + 'px';
    }
  }
};

Indicator.prototype.transitionTime = function () {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  this.indicatorStyle[style.transitionDuration] = time + 'ms';
};

Indicator.prototype.transitionTimingFunction = function (easing) {
  this.indicatorStyle[style.transitionTimingFunction] = easing;
};

Indicator.prototype.destroy = function () {
  this._removeDOMEvents();
  this.wrapper.parentNode.removeChild(this.wrapper);
};

Indicator.prototype._start = function (e) {
  var point = e.touches ? e.touches[0] : e;

  e.preventDefault();
  e.stopPropagation();

  this.transitionTime();

  this.initiated = true;
  this.moved = false;
  this.lastPointX = point.pageX;
  this.lastPointY = point.pageY;

  this.startTime = getNow();

  this._handleMoveEvents(addEvent);
  this.scroller.trigger('beforeScrollStart');
};

Indicator.prototype._move = function (e) {
  var point = e.touches ? e.touches[0] : e;

  e.preventDefault();
  e.stopPropagation();

  if (!this.moved) {
    this.scroller.trigger('scrollStart');
  }

  this.moved = true;

  var deltaX = point.pageX - this.lastPointX;
  this.lastPointX = point.pageX;

  var deltaY = point.pageY - this.lastPointY;
  this.lastPointY = point.pageY;

  var newX = this.x + deltaX;
  var newY = this.y + deltaY;

  this._pos(newX, newY);
};

Indicator.prototype._end = function (e) {
  if (!this.initiated) {
    return;
  }
  this.initiated = false;

  e.preventDefault();
  e.stopPropagation();

  this._handleMoveEvents(removeEvent);

  var snapOption = this.scroller.options.snap;
  if (snapOption) {
    var speed = snapOption.speed,
        _snapOption$easing = snapOption.easing,
        easing = _snapOption$easing === undefined ? ease.bounce : _snapOption$easing;

    var snap = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);

    var time = speed || Math.max(Math.max(Math.min(Math.abs(this.scroller.x - snap.x), 1000), Math.min(Math.abs(this.scroller.y - snap.y), 1000)), 300);

    if (this.scroller.x !== snap.x || this.scroller.y !== snap.y) {
      this.scroller.directionX = 0;
      this.scroller.directionY = 0;
      this.scroller.currentPage = snap;
      this.scroller.scrollTo(snap.x, snap.y, time, easing);
    }
  }

  if (this.moved) {
    this.scroller.trigger('scrollEnd', {
      x: this.scroller.x,
      y: this.scroller.y
    });
  }
};

Indicator.prototype._pos = function (x, y) {
  if (x < 0) {
    x = 0;
  } else if (x > this.maxPosX) {
    x = this.maxPosX;
  }

  if (y < 0) {
    y = 0;
  } else if (y > this.maxPosY) {
    y = this.maxPosY;
  }

  x = Math.round(x / this.sizeRatioX);
  y = Math.round(y / this.sizeRatioY);

  this.scroller.scrollTo(x, y);
  this.scroller.trigger('scroll', {
    x: this.scroller.x,
    y: this.scroller.y
  });
};

Indicator.prototype._calculate = function () {
  if (this.direction === 'vertical') {
    var wrapperHeight = this.wrapper.clientHeight;
    this.indicatorHeight = Math.max(Math.round(wrapperHeight * wrapperHeight / (this.scroller.scrollerHeight || wrapperHeight || 1)), INDICATOR_MIN_LEN);
    this.indicatorStyle.height = this.indicatorHeight + 'px';

    this.maxPosY = wrapperHeight - this.indicatorHeight;

    this.sizeRatioY = this.maxPosY / this.scroller.maxScrollY;
  } else {
    var wrapperWidth = this.wrapper.clientWidth;
    this.indicatorWidth = Math.max(Math.round(wrapperWidth * wrapperWidth / (this.scroller.scrollerWidth || wrapperWidth || 1)), INDICATOR_MIN_LEN);
    this.indicatorStyle.width = this.indicatorWidth + 'px';

    this.maxPosX = wrapperWidth - this.indicatorWidth;

    this.sizeRatioX = this.maxPosX / this.scroller.maxScrollX;
  }
};

Indicator.prototype._addDOMEvents = function () {
  var eventOperation = addEvent;
  this._handleDOMEvents(eventOperation);
};

Indicator.prototype._removeDOMEvents = function () {
  var eventOperation = removeEvent;
  this._handleDOMEvents(eventOperation);
  this._handleMoveEvents(eventOperation);
};

Indicator.prototype._handleMoveEvents = function (eventOperation) {
  if (!this.scroller.options.disableTouch) {
    eventOperation(window, 'touchmove', this);
  }
  if (!this.scroller.options.disableMouse) {
    eventOperation(window, 'mousemove', this);
  }
};

Indicator.prototype._handleDOMEvents = function (eventOperation) {
  if (!this.scroller.options.disableTouch) {
    eventOperation(this.indicator, 'touchstart', this);
    eventOperation(window, 'touchend', this);
  }
  if (!this.scroller.options.disableMouse) {
    eventOperation(this.indicator, 'mousedown', this);
    eventOperation(window, 'mouseup', this);
  }
};

function pullDownMixin(BScroll) {
  BScroll.prototype._initPullDown = function () {
    // must watch scroll in real time
    this.options.probeType = PROBE_REALTIME;
  };

  BScroll.prototype._checkPullDown = function () {
    var _options$pullDownRefr = this.options.pullDownRefresh,
        _options$pullDownRefr2 = _options$pullDownRefr.threshold,
        threshold = _options$pullDownRefr2 === undefined ? 90 : _options$pullDownRefr2,
        _options$pullDownRefr3 = _options$pullDownRefr.stop,
        stop = _options$pullDownRefr3 === undefined ? 40 : _options$pullDownRefr3;

    // check if a real pull down action

    if (this.directionY !== DIRECTION_DOWN || this.y < threshold) {
      return false;
    }

    if (!this.pulling) {
      this.pulling = true;
      this.trigger('pullingDown');
    }
    this.scrollTo(this.x, stop, this.options.bounceTime, ease.bounce);

    return this.pulling;
  };

  BScroll.prototype.finishPullDown = function () {
    this.pulling = false;
    this.resetPosition(this.options.bounceTime, ease.bounce);
  };

  BScroll.prototype.openPullDown = function () {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    this.options.pullDownRefresh = config;
    this._initPullDown();
  };

  BScroll.prototype.closePullDown = function () {
    this.options.pullDownRefresh = false;
  };
}

function pullUpMixin(BScroll) {
  BScroll.prototype._initPullUp = function () {
    // must watch scroll in real time
    this.options.probeType = PROBE_REALTIME;

    this.pullupWatching = false;
    this._watchPullUp();
  };

  BScroll.prototype._watchPullUp = function () {
    if (this.pullupWatching) {
      return;
    }
    this.pullupWatching = true;
    this.on('scroll', this._checkToEnd);
  };

  BScroll.prototype._checkToEnd = function (pos) {
    var _this = this;

    var _options$pullUpLoad$t = this.options.pullUpLoad.threshold,
        threshold = _options$pullUpLoad$t === undefined ? 0 : _options$pullUpLoad$t;

    if (this.movingDirectionY === DIRECTION_UP && pos.y <= this.maxScrollY + threshold) {
      // reset pullupWatching status after scroll end.
      this.once('scrollEnd', function () {
        _this.pullupWatching = false;
      });
      this.trigger('pullingUp');
      this.off('scroll', this._checkToEnd);
    }
  };

  BScroll.prototype.finishPullUp = function () {
    var _this2 = this;

    if (this.pullupWatching) {
      this.once('scrollEnd', function () {
        _this2._watchPullUp();
      });
    } else {
      this._watchPullUp();
    }
  };

  BScroll.prototype.openPullUp = function () {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    this.options.pullUpLoad = config;
    this._initPullUp();
  };

  BScroll.prototype.closePullUp = function () {
    this.options.pullUpLoad = false;
    if (!this.pullupWatching) {
      return;
    }
    this.pullupWatching = false;
    this.off('scroll', this._checkToEnd);
  };
}

function mouseWheelMixin(BScroll) {
  BScroll.prototype._initMouseWheel = function () {
    var _this = this;

    this._handleMouseWheelEvent(addEvent);

    this.on('destroy', function () {
      clearTimeout(_this.mouseWheelTimer);
      _this._handleMouseWheelEvent(removeEvent);
    });

    this.firstWheelOpreation = true;
  };

  BScroll.prototype._handleMouseWheelEvent = function (eventOperation) {
    eventOperation(this.wrapper, 'wheel', this);
    eventOperation(this.wrapper, 'mousewheel', this);
    eventOperation(this.wrapper, 'DOMMouseScroll', this);
  };

  BScroll.prototype._onMouseWheel = function (e) {
    var _this2 = this;

    if (!this.enabled) {
      return;
    }
    e.preventDefault();

    if (this.firstWheelOpreation) {
      this.trigger('scrollStart');
    }
    this.firstWheelOpreation = false;

    clearTimeout(this.mouseWheelTimer);
    this.mouseWheelTimer = setTimeout(function () {
      if (!_this2.options.snap) {
        _this2.trigger('scrollEnd', {
          x: _this2.x,
          y: _this2.y
        });
      }
      _this2.firstWheelOpreation = true;
    }, 400);

    var _options$mouseWheel = this.options.mouseWheel,
        _options$mouseWheel$s = _options$mouseWheel.speed,
        speed = _options$mouseWheel$s === undefined ? 20 : _options$mouseWheel$s,
        _options$mouseWheel$i = _options$mouseWheel.invert,
        invert = _options$mouseWheel$i === undefined ? false : _options$mouseWheel$i;

    var wheelDeltaX = void 0;
    var wheelDeltaY = void 0;

    switch (true) {
      case 'deltaX' in e:
        if (e.deltaMode === 1) {
          wheelDeltaX = -e.deltaX * speed;
          wheelDeltaY = -e.deltaY * speed;
        } else {
          wheelDeltaX = -e.deltaX;
          wheelDeltaY = -e.deltaY;
        }
        break;
      case 'wheelDeltaX' in e:
        wheelDeltaX = e.wheelDeltaX / 120 * speed;
        wheelDeltaY = e.wheelDeltaY / 120 * speed;
        break;
      case 'wheelDelta' in e:
        wheelDeltaX = wheelDeltaY = e.wheelDelta / 120 * speed;
        break;
      case 'detail' in e:
        wheelDeltaX = wheelDeltaY = -e.detail / 3 * speed;
        break;
      default:
        return;
    }

    var direction = invert ? -1 : 1;
    wheelDeltaX *= direction;
    wheelDeltaY *= direction;

    if (!this.hasVerticalScroll) {
      wheelDeltaX = wheelDeltaY;
      wheelDeltaY = 0;
    }

    var newX = void 0;
    var newY = void 0;
    if (this.options.snap) {
      newX = this.currentPage.pageX;
      newY = this.currentPage.pageY;

      if (wheelDeltaX > 0) {
        newX--;
      } else if (wheelDeltaX < 0) {
        newX++;
      }

      if (wheelDeltaY > 0) {
        newY--;
      } else if (wheelDeltaY < 0) {
        newY++;
      }

      this._goToPage(newX, newY);
      return;
    }

    newX = this.x + Math.round(this.hasHorizontalScroll ? wheelDeltaX : 0);
    newY = this.y + Math.round(this.hasVerticalScroll ? wheelDeltaY : 0);

    this.directionX = wheelDeltaX > 0 ? -1 : wheelDeltaX < 0 ? 1 : 0;
    this.directionY = wheelDeltaY > 0 ? -1 : wheelDeltaY < 0 ? 1 : 0;

    if (newX > 0) {
      newX = 0;
    } else if (newX < this.maxScrollX) {
      newX = this.maxScrollX;
    }

    if (newY > 0) {
      newY = 0;
    } else if (newY < this.maxScrollY) {
      newY = this.maxScrollY;
    }

    this.scrollTo(newX, newY);
    this.trigger('scroll', {
      x: this.x,
      y: this.y
    });
  };
}

function BScroll(el, options) {
  this.wrapper = typeof el === 'string' ? document.querySelector(el) : el;
  if (!this.wrapper) {
    warn('Can not resolve the wrapper DOM.');
  }
  this.scroller = this.wrapper.children[0];
  if (!this.scroller) {
    warn('The wrapper need at least one child element to be scroller.');
  }
  // cache style for better performance
  this.scrollerStyle = this.scroller.style;

  this._init(el, options);
}

initMixin(BScroll);
coreMixin(BScroll);
eventMixin(BScroll);
snapMixin(BScroll);
wheelMixin(BScroll);
scrollbarMixin(BScroll);
pullDownMixin(BScroll);
pullUpMixin(BScroll);
mouseWheelMixin(BScroll);

BScroll.Version = '1.9.1';

/* harmony default export */ __webpack_exports__["a"] = (BScroll);


/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"fade"}},[_c('m-popup',{directives:[{name:"show",rawName:"v-show",value:(_vm.isVisible),expression:"isVisible"}],attrs:{"type":"picker"}},[_c('transition',{attrs:{"name":"slide-up"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isVisible),expression:"isVisible"}],staticClass:"mui-picker-panel"},[_c('div',{staticClass:"mui-picker__hd"},[_c('a',{staticClass:"close",attrs:{"href":"javascript:;","data-action":"cancel"},on:{"click":_vm.cancel}},[_c('m-icon',{attrs:{"type":"close"}})],1),_vm._v(" "),_c('h3',[_vm._v(_vm._s(_vm.title))])]),_vm._v(" "),_c('div',{staticClass:"mui-picker__bd"},[_c('i',{staticClass:"mui-picker__bottom-1px"}),_vm._v(" "),_c('i',{staticClass:"mui-picker__top-1px"}),_vm._v(" "),_c('div',{ref:"wheelWrapper",staticClass:"mui-picker__wheel-wrapper"},_vm._l((_vm.pickerData),function(data,index){return _c('div',[_c('ul',{staticClass:"wheel-scroll"},_vm._l((data),function(item,itemIndex){return _c('li',{staticClass:"wheel-item",class:{'active':itemIndex == _vm.pickerSelectedIndex[index]}},[_vm._v("\n                                    "+_vm._s(_vm._f("showText")(item,_vm.textKey))+"\n                                ")])}))])}))]),_vm._v(" "),_c('div',{staticClass:"mui-picker__ft"},[_c('m-button',{attrs:{"type":"full"},on:{"click":_vm.confirm}},[_vm._v(_vm._s(_vm.confirmTxt))])],1)])])],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addPicker;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_helpers_create_api__ = __webpack_require__(45);


function addPicker(Vue, Picker) {
    Object(__WEBPACK_IMPORTED_MODULE_0__common_helpers_create_api__["a" /* default */])(Vue, Picker, ['select', 'value-change', 'cancel', 'change']);
}

/***/ })
/******/ ]);