/* lo v0.7.0 - © Lars Jung */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************************!*\
  !*** ./__TMP_WEBPACK_IN__index.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _core = __webpack_require__(/*! ./core */ 1);
	
	var _loop = function _loop(_key4) {
	  if (_key4 === "default") return 'continue';
	  Object.defineProperty(exports, _key4, {
	    enumerable: true,
	    get: function get() {
	      return _core[_key4];
	    }
	  });
	};
	
	for (var _key4 in _core) {
	  var _ret = _loop(_key4);
	
	  if (_ret === 'continue') continue;
	}
	
	var _dom = __webpack_require__(/*! ./dom */ 2);
	
	var _loop2 = function _loop2(_key5) {
	  if (_key5 === "default") return 'continue';
	  Object.defineProperty(exports, _key5, {
	    enumerable: true,
	    get: function get() {
	      return _dom[_key5];
	    }
	  });
	};
	
	for (var _key5 in _dom) {
	  var _ret2 = _loop2(_key5);
	
	  if (_ret2 === 'continue') continue;
	}
	
	var _binder = __webpack_require__(/*! ./binder */ 3);
	
	var _loop3 = function _loop3(_key6) {
	  if (_key6 === "default") return 'continue';
	  Object.defineProperty(exports, _key6, {
	    enumerable: true,
	    get: function get() {
	      return _binder[_key6];
	    }
	  });
	};
	
	for (var _key6 in _binder) {
	  var _ret3 = _loop3(_key6);
	
	  if (_ret3 === 'continue') continue;
	}
	
	var __BABEL_FIX__ = exports.__BABEL_FIX__ = null;

/***/ },
/* 1 */
/*!*****************!*\
  !*** ./core.js ***!
  \*****************/
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.forEach = forEach;
	exports.forOwn = forOwn;
	exports.each = each;
	exports.assign = assign;
	exports.map = map;
	exports.filter = filter;
	exports.uniq = uniq;
	exports.all = all;
	exports.any = any;
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	var _obj_keys = Object.keys;
	var _obj_getProto = Object.getPrototypeOf;
	var _obj_proto = Object.prototype;
	var _obj_toString = _obj_proto.toString;
	var _obj_has = _obj_proto.hasOwnProperty;
	
	var _arr_isArray = Array.isArray;
	var _arr_proto = Array.prototype;
	var _arr_indexOf = _arr_proto.indexOf;
	var _arr_forEach = _arr_proto.forEach;
	var _arr_reduce = _arr_proto.reduce;
	var _arr_slice = _arr_proto.slice;
	
	var ok = exports.ok = (function () {
	    'use strict';
	    return !this;
	})(); // eslint-disable-line func-names, strict, no-invalid-this
	if (!ok) {
	    if (global.window) {
	        global.window.document.documentElement.className += ' no-lo';
	    }
	    throw new Error('no-lo');
	}
	
	var apply = function apply(fn, obj, args) {
	    return fn.apply(obj, args);
	}; // eslint-disable-line prefer-reflect
	
	function _is_x_fn(type) {
	    return function (x) {
	        return apply(_obj_toString, x) === '[object ' + type + ']';
	    };
	}
	
	var isArray = exports.isArray = _arr_isArray;
	var isArguments = exports.isArguments = _is_x_fn('Arguments');
	var isBoolean = exports.isBoolean = _is_x_fn('Boolean');
	var isDate = exports.isDate = _is_x_fn('Date');
	var isError = exports.isError = _is_x_fn('Error');
	var isFunction = exports.isFunction = _is_x_fn('Function');
	var isNumber = exports.isNumber = _is_x_fn('Number');
	var isObject = exports.isObject = _is_x_fn('Object');
	var isRegExp = exports.isRegExp = _is_x_fn('RegExp');
	var isString = exports.isString = _is_x_fn('String');
	
	var isNumeric = exports.isNumeric = function isNumeric(x) {
	    return isNumber(x) && isFinite(x);
	};
	var isPlainObject = exports.isPlainObject = function isPlainObject(x) {
	    return isObject(x) && _obj_getProto(x) === _obj_proto;
	};
	var isTypeOf = exports.isTypeOf = function isTypeOf(x, typ) {
	    return (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === typ;
	};
	var isInstanceOf = exports.isInstanceOf = function isInstanceOf(x, typ) {
	    return x ? x instanceof typ : false;
	};
	var is = exports.is = function is(x) {
	    return x !== undefined && x !== null;
	};
	var has = exports.has = function has(x, prop) {
	    return is(x) && apply(_obj_has, x, [prop]);
	};
	var keys = exports.keys = function keys(x) {
	    return isObject(x) ? _obj_keys(x) : [];
	};
	var values = exports.values = function values(x) {
	    return keys(x).map(function (key) {
	        return x[key];
	    });
	};
	var hasLength = exports.hasLength = function hasLength(x) {
	    return is(x) && isNumeric(x.length);
	};
	var size = exports.size = function size(x) {
	    return hasLength(x) ? x.length : keys(x).length;
	};
	var asArray = exports.asArray = function asArray(x) {
	    return hasLength(x) ? x : values(x);
	};
	var toArray = exports.toArray = function toArray(x) {
	    return apply(_arr_slice, asArray(x));
	};
	
	function forEach(x, fn, ctx) {
	    if (isFunction(fn)) {
	        apply(_arr_forEach, x, [fn, ctx]);
	    }
	}
	
	function forOwn(x, fn, ctx) {
	    if (isFunction(fn)) {
	        keys(x).forEach(function (key) {
	            return apply(fn, ctx, [x[key], key, x]);
	        });
	    }
	}
	
	function each(x, fn, ctx) {
	    if (hasLength(x)) {
	        forEach(x, fn, ctx);
	    } else {
	        forOwn(x, fn, ctx);
	    }
	}
	
	function assign() {
	    for (var _len = arguments.length, exts = Array(_len), _key = 0; _key < _len; _key++) {
	        exts[_key] = arguments[_key];
	    }
	
	    var target = exts.shift() || {};
	
	    each(exts, function (ext) {
	        each(ext, function (val, key) {
	            target[key] = val;
	        });
	    });
	
	    return target;
	}
	
	function map(x, fn, ctx) {
	    var res = [];
	    if (isFunction(fn)) {
	        each(x, function (val, idx) {
	            return res.push(apply(fn, ctx, [val, idx, x]));
	        });
	    }
	    return res;
	}
	
	function filter(x, fn, ctx) {
	    var res = [];
	    if (isFunction(fn)) {
	        each(x, function (val, idx) {
	            if (apply(fn, ctx, [val, idx])) {
	                res.push(val);
	            }
	        });
	    }
	    return res;
	}
	
	var reduce = exports.reduce = function reduce(x, fn, init) {
	    return apply(_arr_reduce, asArray(x), [fn, init]);
	};
	var contains = exports.contains = function contains(x, el) {
	    return apply(_arr_indexOf, asArray(x), [el]) >= 0;
	};
	var indexOf = exports.indexOf = function indexOf(x, el) {
	    return apply(_arr_indexOf, hasLength(x) ? x : [], [el]);
	};
	var compact = exports.compact = function compact(x) {
	    return filter(x, function (val) {
	        return !!val;
	    });
	};
	var pluck = exports.pluck = function pluck(x, prop) {
	    return map(x, function (val) {
	        return val[prop];
	    });
	};
	var cmp = exports.cmp = function cmp(a, b) {
	    return a < b ? -1 : a > b ? 1 : 0;
	};
	var sortBy = exports.sortBy = function sortBy(list) {
	    var selector = arguments.length <= 1 || arguments[1] === undefined ? function (x) {
	        return x;
	    } : arguments[1];
	    return toArray(list).sort(function (a, b) {
	        return cmp(selector(a), selector(b));
	    });
	};
	
	function uniq(x) {
	    var cache = {};
	    return filter(x, function (val) {
	        if (!has(cache, val)) {
	            cache[val] = 1;
	            return true;
	        }
	    });
	}
	
	function all(x, fn) {
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;
	
	    try {
	        for (var _iterator = asArray(x)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var xi = _step.value;
	
	            if (!fn(xi)) {
	                return false;
	            }
	        }
	    } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	            }
	        } finally {
	            if (_didIteratorError) {
	                throw _iteratorError;
	            }
	        }
	    }
	
	    return true;
	}
	
	function any(x, fn) {
	    var _iteratorNormalCompletion2 = true;
	    var _didIteratorError2 = false;
	    var _iteratorError2 = undefined;
	
	    try {
	        for (var _iterator2 = asArray(x)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	            var xi = _step2.value;
	
	            if (fn(xi)) {
	                return true;
	            }
	        }
	    } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                _iterator2.return();
	            }
	        } finally {
	            if (_didIteratorError2) {
	                throw _iteratorError2;
	            }
	        }
	    }
	
	    return false;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/*!****************!*\
  !*** ./dom.js ***!
  \****************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.isElDocWin = exports.isWindow = exports.isDocument = exports.isElement = undefined;
	exports.onReady = onReady;
	exports.onResize = onResize;
	exports.onPrint = onPrint;
	exports.dom = dom;
	
	var _core = __webpack_require__(/*! ./core */ 1);
	
	var core = _interopRequireWildcard(_core);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var WIN = global.window || { document: { createElement: function createElement() {
	            return null;
	        } } };
	var DOC = WIN.document;
	
	var createElement = function createElement(name) {
	    return DOC.createElement(name);
	};
	var CONTAINER_DIV = createElement('div');
	var CONTAINER_TABLE = createElement('table');
	var CONTAINER_TBODY = createElement('tbody');
	var CONTAINER_TR = createElement('tr');
	var CONTAINER_COLGROUP = createElement('colgroup');
	
	var isInstanceOf = core.isInstanceOf;
	
	function publish(obj, arr) {
	    core.forEach(arr, function (el, idx) {
	        return obj[idx] = el;
	    });
	    obj.length = arr.length;
	}
	
	function findContainer(str) {
	    if (/^<t(head|body|foot)|^<c(ap|olg)/i.test(str)) {
	        return CONTAINER_TABLE;
	    }
	    if (/^<col/i.test(str)) {
	        return CONTAINER_COLGROUP;
	    }
	    if (/^<tr/i.test(str)) {
	        return CONTAINER_TBODY;
	    }
	    if (/^<t[dh]/i.test(str)) {
	        return CONTAINER_TR;
	    }
	    return CONTAINER_DIV;
	}
	
	function parseHtml(str) {
	    var container = findContainer(str);
	    container.innerHTML = str;
	    var res = core.toArray(container.childNodes);
	    core.each(res, function (el) {
	        return container.removeChild(el);
	    });
	    container.innerHTML = '';
	    return res;
	}
	
	function queryAll(selector, context) {
	    try {
	        return core.toArray((context || DOC).querySelectorAll(selector));
	    } catch (err) {/**/}
	    return [];
	}
	
	var isElement = exports.isElement = function isElement(x) {
	    return isInstanceOf(x, WIN.Element);
	};
	var isDocument = exports.isDocument = function isDocument(x) {
	    return isInstanceOf(x, WIN.Document);
	};
	var isWindow = exports.isWindow = function isWindow(x) {
	    return core.is(x) && x.window === x && isDocument(x.document);
	};
	var isElDocWin = exports.isElDocWin = function isElDocWin(x) {
	    return isElement(x) || isDocument(x) || isWindow(x);
	};
	
	var addListener = function addListener(el, type, fn) {
	    return el.addEventListener(type, fn);
	};
	var removeListener = function removeListener(el, type, fn) {
	    return el.removeEventListener(type, fn);
	};
	
	function onReady(fn) {
	    if (/^(i|c|loade)/.test(DOC.readyState)) {
	        fn();
	    } else {
	        addListener(DOC, 'DOMContentLoaded', fn);
	    }
	}
	
	function onResize(fn) {
	    addListener(WIN, 'resize', fn);
	}
	
	function onPrint(before, after) {
	    WIN.matchMedia('print').addListener(function (mql) {
	        if (mql.matches) {
	            before();
	        } else {
	            after();
	        }
	    });
	}
	
	function dom(arg) {
	    if (isInstanceOf(arg, dom)) {
	        return arg;
	    }
	
	    var els = undefined;
	    if (core.isString(arg)) {
	        arg = arg.trim();
	        els = arg[0] === '<' ? parseHtml(arg) : queryAll(arg);
	    } else if (isElDocWin(arg)) {
	        els = [arg];
	    } else {
	        els = core.hasLength(arg) ? arg : [arg];
	    }
	    els = core.filter(els, isElDocWin);
	
	    var inst = Object.create(dom.prototype);
	    publish(inst, els);
	    return inst;
	}
	
	dom.prototype = {
	    constructor: dom,
	
	    each: function each(fn) {
	        core.each(this, fn);
	        return this;
	    },
	    map: function map(fn) {
	        return core.map(this, fn);
	    },
	    find: function find(selector) {
	        var els = [];
	        this.each(function (el) {
	            els = els.concat(queryAll(selector, el));
	        });
	        return dom(els);
	    },
	    on: function on(type, fn) {
	        return this.each(function (el) {
	            return addListener(el, type, fn);
	        });
	    },
	    off: function off(type, fn) {
	        return this.each(function (el) {
	            return removeListener(el, type, fn);
	        });
	    },
	    attr: function attr(key, value) {
	        if (value === undefined) {
	            return this.length ? this[0].getAttribute(key) : undefined;
	        }
	        return this.each(function (el) {
	            return el.setAttribute(key, value);
	        });
	    },
	    rmAttr: function rmAttr(key) {
	        return this.each(function (el) {
	            return el.removeAttribute(key);
	        });
	    },
	    val: function val(value) {
	        if (value === undefined) {
	            return this.length ? this[0].value : undefined;
	        }
	        return this.each(function (el) {
	            el.value = value;
	        });
	    },
	    html: function html(str) {
	        if (str === undefined) {
	            return this.map(function (el) {
	                return el.innerHTML;
	            }).join('');
	        }
	        return this.each(function (el) {
	            el.innerHTML = str;
	        });
	    },
	    text: function text(str) {
	        if (str === undefined) {
	            return this.map(function (el) {
	                return el.textContent;
	            }).join('');
	        }
	        return this.each(function (el) {
	            el.textContent = str;
	        });
	    },
	    clr: function clr() {
	        return this.html('');
	    },
	    rm: function rm() {
	        return this.each(function (el) {
	            var parent = el.parentNode;
	            if (parent) {
	                parent.removeChild(el);
	            }
	        });
	    },
	    rpl: function rpl(arg) {
	        return this.each(function (el) {
	            el.outerHTML = dom(arg).map(function (rplEl) {
	                return rplEl.outerHTML;
	            }).join('');
	        });
	    },
	    app: function app(arg) {
	        return this.each(function (el) {
	            dom(arg).each(function (child) {
	                return el.appendChild(child);
	            });
	        });
	    },
	    appTo: function appTo(arg) {
	        dom(arg).app(this);
	        return this;
	    },
	    pre: function pre(arg) {
	        return this.each(function (el) {
	            dom(arg).each(function (child) {
	                var firstChild = el.firstChild;
	                if (!firstChild) {
	                    el.appendChild(child);
	                } else {
	                    el.insertBefore(child, firstChild);
	                }
	            });
	        });
	    },
	    preTo: function preTo(arg) {
	        dom(arg).pre(this);
	        return this;
	    },
	    cls: function cls() {
	        for (var _len = arguments.length, names = Array(_len), _key = 0; _key < _len; _key++) {
	            names[_key] = arguments[_key];
	        }
	
	        if (!names.length) {
	            return this.length ? core.toArray(this[0].classList) : [];
	        }
	        this.each(function (el) {
	            return el.className = '';
	        });
	        return this.addCls.apply(this, names);
	    },
	    hasCls: function hasCls(name) {
	        return core.all(this, function (el) {
	            return el.classList.contains(name);
	        });
	    },
	    addCls: function addCls() {
	        for (var _len2 = arguments.length, names = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	            names[_key2] = arguments[_key2];
	        }
	
	        return this.each(function (el) {
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	                for (var _iterator = names[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var name = _step.value;
	
	                    el.classList.add(name);
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	        });
	    },
	    rmCls: function rmCls() {
	        for (var _len3 = arguments.length, names = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	            names[_key3] = arguments[_key3];
	        }
	
	        return this.each(function (el) {
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;
	
	            try {
	                for (var _iterator2 = names[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var name = _step2.value;
	
	                    el.classList.remove(name);
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                        _iterator2.return();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }
	        });
	    }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 3 */
/*!*******************!*\
  !*** ./binder.js ***!
  \*******************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.binder = binder;
	
	var _core = __webpack_require__(/*! ./core */ 1);
	
	var core = _interopRequireWildcard(_core);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var each = core.each;
	var map = core.map;
	var assign = core.assign;
	var contains = core.contains;
	var isFunction = core.isFunction;
	var isString = core.isString;
	var toArray = core.toArray;
	
	var WIN = global.window || {};
	var INPUT_ELS = ['input', 'select', 'textarea'];
	var RE_NAME = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
	var RE_TEMPLATE = /\[([_a-zA-Z][_a-zA-Z0-9]*)\]/g;
	var ATTR_KEY = 'data-tpl';
	
	var createObj = function createObj() {
	    var proto = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
	    return Object.create(proto);
	};
	var defineProperty = Object.defineProperty;
	var isInputEl = function isInputEl(el) {
	    return contains(INPUT_ELS, el.nodeName.toLowerCase());
	};
	var isName = function isName(x) {
	    return isString(x) && RE_NAME.test(x);
	};
	
	function defineConst(inst, name, value) {
	    defineProperty(inst, name, { value: value });
	}
	
	function updateEls(inst, name, els) {
	    if (!els) {
	        els = inst._els[name];
	    }
	    var value = inst.val[name];
	    each(els, function (el) {
	        var prop = isInputEl(el) ? 'value' : 'innerHTML';
	        if (el[prop] !== value) {
	            el[prop] = value;
	        }
	    });
	}
	
	function callListeners(inst, name) {
	    var value = inst.val[name];
	    each(inst._fns[name], function (fn) {
	        if (isFunction(fn)) {
	            fn(value, name, inst);
	        }
	    });
	}
	
	function addVal(inst, name) {
	    var value = name;
	
	    defineProperty(inst.val, name, {
	        enumerable: true,
	        set: function set(x) {
	            x = String(x);
	            if (x !== value) {
	                value = x;
	                updateEls(inst, name);
	                callListeners(inst, name);
	            }
	        },
	        get: function get() {
	            return value;
	        }
	    });
	}
	
	function ensureName(inst, name) {
	    if (!isName(name)) {
	        return false;
	    }
	    if (!(name in inst.val)) {
	        addVal(inst, name);
	    }
	    if (!(name in inst._els)) {
	        defineConst(inst._els, name, []);
	    }
	    if (!(name in inst._fns)) {
	        defineConst(inst._fns, name, []);
	    }
	    return true;
	}
	
	function findAllTextNodes(node) {
	    var _ref;
	
	    var textnodes = (_ref = []).concat.apply(_ref, _toConsumableArray(map(node.childNodes, function (n) {
	        return findAllTextNodes(n);
	    })));
	    if (node.nodeType === WIN.Node.TEXT_NODE) {
	        textnodes.push(node);
	    }
	    return textnodes;
	}
	
	function compileTextNode(node) {
	    var div = WIN.document.createElement('div');
	    div.innerHTML = node.nodeValue.replace(RE_TEMPLATE, function (match, name) {
	        return '<span ' + ATTR_KEY + '=\'' + name + '\'></span>';
	    });
	    if (div.childNodes.length) {
	        (function () {
	            var parent = node.parentNode;
	            each(toArray(div.childNodes), function (n) {
	                parent.insertBefore(n, node);
	            });
	            parent.removeChild(node);
	        })();
	    }
	}
	
	function binder() {
	    var inst = createObj(binder.prototype);
	    defineConst(inst, '_els', createObj());
	    defineConst(inst, '_fns', createObj());
	    defineConst(inst, 'val', createObj());
	    return inst;
	}
	
	assign(binder.prototype, {
	    constructor: binder,
	
	    log: function log() {
	        var _this = this;
	
	        var plain = createObj();
	        each(this.val, function (value, name) {
	            plain[name] = {
	                val: value,
	                els: _this._els[name].length,
	                fns: _this._fns[name].length
	            };
	        });
	        if (console.table) {
	            console.table(plain);
	        } else {
	            console.log(plain);
	        }
	        return this;
	    },
	    add: function add(obj) {
	        var _this2 = this;
	
	        each(obj, function (els, name) {
	            if (ensureName(_this2, name)) {
	                updateEls(_this2, name, els);
	                each(els, function (el) {
	                    if (!contains(_this2._els[name], el)) {
	                        _this2._els[name].push(el);
	                        if (isInputEl(el)) {
	                            el.addEventListener('input', function () {
	                                return _this2.val[name] = el.value;
	                            });
	                            el.addEventListener('change', function () {
	                                return _this2.val[name] = el.value;
	                            });
	                        }
	                    }
	                });
	            }
	        });
	        return this;
	    },
	    set: function set(obj) {
	        var _this3 = this;
	
	        each(obj, function (value, name) {
	            if (ensureName(_this3, name)) {
	                _this3.val[name] = value;
	            }
	        });
	        return this;
	    },
	    on: function on(name, fn) {
	        if (ensureName(this, name)) {
	            this._fns[name].push(fn);
	        }
	        return this;
	    },
	    collect: function collect(containerEl, split) {
	        var _this4 = this;
	
	        if (!containerEl || !isFunction(containerEl.querySelectorAll)) {
	            return this;
	        }
	        if (split) {
	            each(findAllTextNodes(containerEl), compileTextNode);
	        }
	        var els = toArray(containerEl.querySelectorAll('[' + ATTR_KEY + ']'));
	        els.unshift(containerEl);
	        each(els, function (el) {
	            if (isFunction(el.getAttribute) && el.getAttribute(ATTR_KEY)) {
	                _this4.add(_defineProperty({}, el.getAttribute(ATTR_KEY), [el]));
	            }
	        });
	        return this;
	    }
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2FmOWYzNGU4ZTE5YmU1MzI2NjUiLCJ3ZWJwYWNrOi8vLy4vX19UTVBfV0VCUEFDS19JTl9faW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9kb20uanMiLCJ3ZWJwYWNrOi8vLy4vYmluZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENPLEtBQU0sYUFBYSxXQUFiLGFBQWEsR0FBRyxJQUFJLEM7Ozs7Ozs7Ozs7Ozs7O1NDaURqQixPQUFPLEdBQVAsT0FBTztTQU1QLE1BQU0sR0FBTixNQUFNO1NBTU4sSUFBSSxHQUFKLElBQUk7U0FRSixNQUFNLEdBQU4sTUFBTTtTQVlOLEdBQUcsR0FBSCxHQUFHO1NBUUgsTUFBTSxHQUFOLE1BQU07U0FvQk4sSUFBSSxHQUFKLElBQUk7U0FVSixHQUFHLEdBQUgsR0FBRztTQVNILEdBQUcsR0FBSCxHQUFHOzs7O0FBcEluQixLQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO0FBQzlCLEtBQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUM7QUFDNUMsS0FBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztBQUNwQyxLQUFNLGFBQWEsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDO0FBQzFDLEtBQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQyxjQUFjLENBQUM7O0FBRTNDLEtBQU0sWUFBWSxH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SUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtBQUMzRCxvQkFBTyxJQUFJLENBQUM7VUFDZjtBQUNELGFBQUksS0FBSyxFQUFFO0FBQ1AsaUJBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsRUFBRSxlQUFlLENBQUMsQ0FBQztVQUN4RDtBQUNELGFBQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLE9BQUssUUFBUSxPQUFJLENBQUMsQ0FBQztBQUNuRSxZQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3pCLGFBQUksQ0FBQyxHQUFHLEVBQUUsWUFBRSxFQUFJO0FBQ1osaUJBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxFQUFFO0FBQzFELHdCQUFLLEdBQUcscUJBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsRUFBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7Y0FDakQ7VUFDSixDQUFDLENBQUM7QUFDSCxnQkFBTyxJQUFJLENBQUM7TUFDZjtFQUNKLENBQUMsQyIsImZpbGUiOiJfX1RNUF9XRUJQQUNLX09VVF9faW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDdhZjlmMzRlOGUxOWJlNTMyNjY1XG4gKiovIiwiZXhwb3J0ICogZnJvbSAnLi9jb3JlJztcbmV4cG9ydCAqIGZyb20gJy4vZG9tJztcbmV4cG9ydCAqIGZyb20gJy4vYmluZGVyJztcblxuZXhwb3J0IGNvbnN0IF9fQkFCRUxfRklYX18gPSBudWxsO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9fX1RNUF9XRUJQQUNLX0lOX19pbmRleC5qc1xuICoqLyIsImNvbnN0IF9vYmpfa2V5cyA9IE9iamVjdC5rZXlzO1xuY29uc3QgX29ial9nZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbmNvbnN0IF9vYmpfcHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuY29uc3QgX29ial90b1N0cmluZyA9IF9vYmpfcHJvdG8udG9TdHJpbmc7XG5jb25zdCBfb2JqX2hhcyA9IF9vYmpfcHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbmNvbnN0IF9hcnJfaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5jb25zdCBfYXJyX3Byb3RvID0gQXJyYXkucHJvdG90eXBlO1xuY29uc3QgX2Fycl9pbmRleE9mID0gX2Fycl9wcm90by5pbmRleE9mO1xuY29uc3QgX2Fycl9mb3JFYWNoID0gX2Fycl9wcm90by5mb3JFYWNoO1xuY29uc3QgX2Fycl9yZWR1Y2UgPSBfYXJyX3Byb3RvLnJlZHVjZTtcbmNvbnN0IF9hcnJfc2xpY2UgPSBfYXJyX3Byb3RvLnNsaWNlO1xuXG5leHBvcnQgY29uc3Qgb2sgPSAoZnVuY3Rpb24gKCkgeyd1c2Ugc3RyaWN0JzsgcmV0dXJuICF0aGlzO30oKSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZnVuYy1uYW1lcywgc3RyaWN0LCBuby1pbnZhbGlkLXRoaXNcbmlmICghb2spIHtcbiAgICBpZiAoZ2xvYmFsLndpbmRvdykge1xuICAgICAgICBnbG9iYWwud2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc05hbWUgKz0gJyBuby1sbyc7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignbm8tbG8nKTtcbn1cblxuY29uc3QgYXBwbHkgPSAoZm4sIG9iaiwgYXJncykgPT4gZm4uYXBwbHkob2JqLCBhcmdzKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBwcmVmZXItcmVmbGVjdFxuXG5mdW5jdGlvbiBfaXNfeF9mbih0eXBlKSB7XG4gICAgcmV0dXJuIHggPT4gYXBwbHkoX29ial90b1N0cmluZywgeCkgPT09IGBbb2JqZWN0ICR7dHlwZX1dYDtcbn1cblxuZXhwb3J0IGNvbnN0IGlzQXJyYXkgPSBfYXJyX2lzQXJyYXk7XG5leHBvcnQgY29uc3QgaXNBcmd1bWVudHMgPSBfaXNfeF9mbignQXJndW1lbnRzJyk7XG5leHBvcnQgY29uc3QgaXNCb29sZWFuID0gX2lzX3hfZm4oJ0Jvb2xlYW4nKTtcbmV4cG9ydCBjb25zdCBpc0RhdGUgPSBfaXNfeF9mbignRGF0ZScpO1xuZXhwb3J0IGNvbnN0IGlzRXJyb3IgPSBfaXNfeF9mbignRXJyb3InKTtcbmV4cG9ydCBjb25zdCBpc0Z1bmN0aW9uID0gX2lzX3hfZm4oJ0Z1bmN0aW9uJyk7XG5leHBvcnQgY29uc3QgaXNOdW1iZXIgPSBfaXNfeF9mbignTnVtYmVyJyk7XG5leHBvcnQgY29uc3QgaXNPYmplY3QgPSBfaXNfeF9mbignT2JqZWN0Jyk7XG5leHBvcnQgY29uc3QgaXNSZWdFeHAgPSBfaXNfeF9mbignUmVnRXhwJyk7XG5leHBvcnQgY29uc3QgaXNTdHJpbmcgPSBfaXNfeF9mbignU3RyaW5nJyk7XG5cblxuZXhwb3J0IGNvbnN0IGlzTnVtZXJpYyA9IHggPT4gaXNOdW1iZXIoeCkgJiYgaXNGaW5pdGUoeCk7XG5leHBvcnQgY29uc3QgaXNQbGFpbk9iamVjdCA9IHggPT4gaXNPYmplY3QoeCkgJiYgX29ial9nZXRQcm90byh4KSA9PT0gX29ial9wcm90bztcbmV4cG9ydCBjb25zdCBpc1R5cGVPZiA9ICh4LCB0eXApID0+IHR5cGVvZiB4ID09PSB0eXA7XG5leHBvcnQgY29uc3QgaXNJbnN0YW5jZU9mID0gKHgsIHR5cCkgPT4geCA/IHggaW5zdGFuY2VvZiB0eXAgOiBmYWxzZTtcbmV4cG9ydCBjb25zdCBpcyA9IHggPT4geCAhPT0gdW5kZWZpbmVkICYmIHggIT09IG51bGw7XG5leHBvcnQgY29uc3QgaGFzID0gKHgsIHByb3ApID0+IGlzKHgpICYmIGFwcGx5KF9vYmpfaGFzLCB4LCBbcHJvcF0pO1xuZXhwb3J0IGNvbnN0IGtleXMgPSB4ID0+IGlzT2JqZWN0KHgpID8gX29ial9rZXlzKHgpIDogW107XG5leHBvcnQgY29uc3QgdmFsdWVzID0geCA9PiBrZXlzKHgpLm1hcChrZXkgPT4geFtrZXldKTtcbmV4cG9ydCBjb25zdCBoYXNMZW5ndGggPSB4ID0+IGlzKHgpICYmIGlzTnVtZXJpYyh4Lmxlbmd0aCk7XG5leHBvcnQgY29uc3Qgc2l6ZSA9IHggPT4gaGFzTGVuZ3RoKHgpID8geC5sZW5ndGggOiBrZXlzKHgpLmxlbmd0aDtcbmV4cG9ydCBjb25zdCBhc0FycmF5ID0geCA9PiBoYXNMZW5ndGgoeCkgPyB4IDogdmFsdWVzKHgpO1xuZXhwb3J0IGNvbnN0IHRvQXJyYXkgPSB4ID0+IGFwcGx5KF9hcnJfc2xpY2UsIGFzQXJyYXkoeCkpO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JFYWNoKHgsIGZuLCBjdHgpIHtcbiAgICBpZiAoaXNGdW5jdGlvbihmbikpIHtcbiAgICAgICAgYXBwbHkoX2Fycl9mb3JFYWNoLCB4LCBbZm4sIGN0eF0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvck93bih4LCBmbiwgY3R4KSB7XG4gICAgaWYgKGlzRnVuY3Rpb24oZm4pKSB7XG4gICAgICAgIGtleXMoeCkuZm9yRWFjaChrZXkgPT4gYXBwbHkoZm4sIGN0eCwgW3hba2V5XSwga2V5LCB4XSkpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVhY2goeCwgZm4sIGN0eCkge1xuICAgIGlmIChoYXNMZW5ndGgoeCkpIHtcbiAgICAgICAgZm9yRWFjaCh4LCBmbiwgY3R4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBmb3JPd24oeCwgZm4sIGN0eCk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKC4uLmV4dHMpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBleHRzLnNoaWZ0KCkgfHwge307XG5cbiAgICBlYWNoKGV4dHMsIGV4dCA9PiB7XG4gICAgICAgIGVhY2goZXh0LCAodmFsLCBrZXkpID0+IHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXAoeCwgZm4sIGN0eCkge1xuICAgIGNvbnN0IHJlcyA9IFtdO1xuICAgIGlmIChpc0Z1bmN0aW9uKGZuKSkge1xuICAgICAgICBlYWNoKHgsICh2YWwsIGlkeCkgPT4gcmVzLnB1c2goYXBwbHkoZm4sIGN0eCwgW3ZhbCwgaWR4LCB4XSkpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlcih4LCBmbiwgY3R4KSB7XG4gICAgY29uc3QgcmVzID0gW107XG4gICAgaWYgKGlzRnVuY3Rpb24oZm4pKSB7XG4gICAgICAgIGVhY2goeCwgKHZhbCwgaWR4KSA9PiB7XG4gICAgICAgICAgICBpZiAoYXBwbHkoZm4sIGN0eCwgW3ZhbCwgaWR4XSkpIHtcbiAgICAgICAgICAgICAgICByZXMucHVzaCh2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cblxuZXhwb3J0IGNvbnN0IHJlZHVjZSA9ICh4LCBmbiwgaW5pdCkgPT4gYXBwbHkoX2Fycl9yZWR1Y2UsIGFzQXJyYXkoeCksIFtmbiwgaW5pdF0pO1xuZXhwb3J0IGNvbnN0IGNvbnRhaW5zID0gKHgsIGVsKSA9PiBhcHBseShfYXJyX2luZGV4T2YsIGFzQXJyYXkoeCksIFtlbF0pID49IDA7XG5leHBvcnQgY29uc3QgaW5kZXhPZiA9ICh4LCBlbCkgPT4gYXBwbHkoX2Fycl9pbmRleE9mLCBoYXNMZW5ndGgoeCkgPyB4IDogW10sIFtlbF0pO1xuZXhwb3J0IGNvbnN0IGNvbXBhY3QgPSB4ID0+IGZpbHRlcih4LCB2YWwgPT4gISF2YWwpO1xuZXhwb3J0IGNvbnN0IHBsdWNrID0gKHgsIHByb3ApID0+IG1hcCh4LCB2YWwgPT4gdmFsW3Byb3BdKTtcbmV4cG9ydCBjb25zdCBjbXAgPSAoYSwgYikgPT4gYSA8IGIgPyAtMSA6IGEgPiBiID8gMSA6IDA7XG5leHBvcnQgY29uc3Qgc29ydEJ5ID0gKGxpc3QsIHNlbGVjdG9yID0geCA9PiB4KSA9PiB0b0FycmF5KGxpc3QpLnNvcnQoKGEsIGIpID0+IGNtcChzZWxlY3RvcihhKSwgc2VsZWN0b3IoYikpKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVuaXEoeCkge1xuICAgIGNvbnN0IGNhY2hlID0ge307XG4gICAgcmV0dXJuIGZpbHRlcih4LCB2YWwgPT4ge1xuICAgICAgICBpZiAoIWhhcyhjYWNoZSwgdmFsKSkge1xuICAgICAgICAgICAgY2FjaGVbdmFsXSA9IDE7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWxsKHgsIGZuKSB7XG4gICAgZm9yIChjb25zdCB4aSBvZiBhc0FycmF5KHgpKSB7XG4gICAgICAgIGlmICghZm4oeGkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbnkoeCwgZm4pIHtcbiAgICBmb3IgKGNvbnN0IHhpIG9mIGFzQXJyYXkoeCkpIHtcbiAgICAgICAgaWYgKGZuKHhpKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9jb3JlLmpzXG4gKiovIiwiaW1wb3J0ICogYXMgY29yZSBmcm9tICcuL2NvcmUnO1xuXG5jb25zdCBXSU4gPSBnbG9iYWwud2luZG93IHx8IHtkb2N1bWVudDoge2NyZWF0ZUVsZW1lbnQ6ICgpID0+IG51bGx9fTtcbmNvbnN0IERPQyA9IFdJTi5kb2N1bWVudDtcblxuY29uc3QgY3JlYXRlRWxlbWVudCA9IG5hbWUgPT4gRE9DLmNyZWF0ZUVsZW1lbnQobmFtZSk7XG5jb25zdCBDT05UQUlORVJfRElWID0gY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBDT05UQUlORVJfVEFCTEUgPSBjcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuY29uc3QgQ09OVEFJTkVSX1RCT0RZID0gY3JlYXRlRWxlbWVudCgndGJvZHknKTtcbmNvbnN0IENPTlRBSU5FUl9UUiA9IGNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG5jb25zdCBDT05UQUlORVJfQ09MR1JPVVAgPSBjcmVhdGVFbGVtZW50KCdjb2xncm91cCcpO1xuXG5jb25zdCBpc0luc3RhbmNlT2YgPSBjb3JlLmlzSW5zdGFuY2VPZjtcblxuZnVuY3Rpb24gcHVibGlzaChvYmosIGFycikge1xuICAgIGNvcmUuZm9yRWFjaChhcnIsIChlbCwgaWR4KSA9PiBvYmpbaWR4XSA9IGVsKTtcbiAgICBvYmoubGVuZ3RoID0gYXJyLmxlbmd0aDtcbn1cblxuZnVuY3Rpb24gZmluZENvbnRhaW5lcihzdHIpIHtcbiAgICBpZiAoL148dChoZWFkfGJvZHl8Zm9vdCl8XjxjKGFwfG9sZykvaS50ZXN0KHN0cikpIHtcbiAgICAgICAgcmV0dXJuIENPTlRBSU5FUl9UQUJMRTtcbiAgICB9XG4gICAgaWYgKC9ePGNvbC9pLnRlc3Qoc3RyKSkge1xuICAgICAgICByZXR1cm4gQ09OVEFJTkVSX0NPTEdST1VQO1xuICAgIH1cbiAgICBpZiAoL148dHIvaS50ZXN0KHN0cikpIHtcbiAgICAgICAgcmV0dXJuIENPTlRBSU5FUl9UQk9EWTtcbiAgICB9XG4gICAgaWYgKC9ePHRbZGhdL2kudGVzdChzdHIpKSB7XG4gICAgICAgIHJldHVybiBDT05UQUlORVJfVFI7XG4gICAgfVxuICAgIHJldHVybiBDT05UQUlORVJfRElWO1xufVxuXG5mdW5jdGlvbiBwYXJzZUh0bWwoc3RyKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZmluZENvbnRhaW5lcihzdHIpO1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBzdHI7XG4gICAgY29uc3QgcmVzID0gY29yZS50b0FycmF5KGNvbnRhaW5lci5jaGlsZE5vZGVzKTtcbiAgICBjb3JlLmVhY2gocmVzLCBlbCA9PiBjb250YWluZXIucmVtb3ZlQ2hpbGQoZWwpKTtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgcmV0dXJuIHJlcztcbn1cblxuZnVuY3Rpb24gcXVlcnlBbGwoc2VsZWN0b3IsIGNvbnRleHQpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gY29yZS50b0FycmF5KChjb250ZXh0IHx8IERPQykucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xuICAgIH0gY2F0Y2ggKGVycikgey8qKi99XG4gICAgcmV0dXJuIFtdO1xufVxuXG5leHBvcnQgY29uc3QgaXNFbGVtZW50ID0geCA9PiBpc0luc3RhbmNlT2YoeCwgV0lOLkVsZW1lbnQpO1xuZXhwb3J0IGNvbnN0IGlzRG9jdW1lbnQgPSB4ID0+IGlzSW5zdGFuY2VPZih4LCBXSU4uRG9jdW1lbnQpO1xuZXhwb3J0IGNvbnN0IGlzV2luZG93ID0geCA9PiBjb3JlLmlzKHgpICYmIHgud2luZG93ID09PSB4ICYmIGlzRG9jdW1lbnQoeC5kb2N1bWVudCk7XG5leHBvcnQgY29uc3QgaXNFbERvY1dpbiA9IHggPT4gaXNFbGVtZW50KHgpIHx8IGlzRG9jdW1lbnQoeCkgfHwgaXNXaW5kb3coeCk7XG5cbmNvbnN0IGFkZExpc3RlbmVyID0gKGVsLCB0eXBlLCBmbikgPT4gZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBmbik7XG5jb25zdCByZW1vdmVMaXN0ZW5lciA9IChlbCwgdHlwZSwgZm4pID0+IGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgZm4pO1xuXG5leHBvcnQgZnVuY3Rpb24gb25SZWFkeShmbikge1xuICAgIGlmICgvXihpfGN8bG9hZGUpLy50ZXN0KERPQy5yZWFkeVN0YXRlKSkge1xuICAgICAgICBmbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZExpc3RlbmVyKERPQywgJ0RPTUNvbnRlbnRMb2FkZWQnLCBmbik7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25SZXNpemUoZm4pIHtcbiAgICBhZGRMaXN0ZW5lcihXSU4sICdyZXNpemUnLCBmbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvblByaW50KGJlZm9yZSwgYWZ0ZXIpIHtcbiAgICBXSU4ubWF0Y2hNZWRpYSgncHJpbnQnKS5hZGRMaXN0ZW5lcihtcWwgPT4ge1xuICAgICAgICBpZiAobXFsLm1hdGNoZXMpIHtcbiAgICAgICAgICAgIGJlZm9yZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWZ0ZXIoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZG9tKGFyZykge1xuICAgIGlmIChpc0luc3RhbmNlT2YoYXJnLCBkb20pKSB7XG4gICAgICAgIHJldHVybiBhcmc7XG4gICAgfVxuXG4gICAgbGV0IGVscztcbiAgICBpZiAoY29yZS5pc1N0cmluZyhhcmcpKSB7XG4gICAgICAgIGFyZyA9IGFyZy50cmltKCk7XG4gICAgICAgIGVscyA9IGFyZ1swXSA9PT0gJzwnID8gcGFyc2VIdG1sKGFyZykgOiBxdWVyeUFsbChhcmcpO1xuICAgIH0gZWxzZSBpZiAoaXNFbERvY1dpbihhcmcpKSB7XG4gICAgICAgIGVscyA9IFthcmddO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGVscyA9IGNvcmUuaGFzTGVuZ3RoKGFyZykgPyBhcmcgOiBbYXJnXTtcbiAgICB9XG4gICAgZWxzID0gY29yZS5maWx0ZXIoZWxzLCBpc0VsRG9jV2luKTtcblxuICAgIGNvbnN0IGluc3QgPSBPYmplY3QuY3JlYXRlKGRvbS5wcm90b3R5cGUpO1xuICAgIHB1Ymxpc2goaW5zdCwgZWxzKTtcbiAgICByZXR1cm4gaW5zdDtcbn1cblxuZG9tLnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogZG9tLFxuXG4gICAgZWFjaChmbikge1xuICAgICAgICBjb3JlLmVhY2godGhpcywgZm4pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgbWFwKGZuKSB7XG4gICAgICAgIHJldHVybiBjb3JlLm1hcCh0aGlzLCBmbik7XG4gICAgfSxcblxuICAgIGZpbmQoc2VsZWN0b3IpIHtcbiAgICAgICAgbGV0IGVscyA9IFtdO1xuICAgICAgICB0aGlzLmVhY2goZWwgPT4ge1xuICAgICAgICAgICAgZWxzID0gZWxzLmNvbmNhdChxdWVyeUFsbChzZWxlY3RvciwgZWwpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBkb20oZWxzKTtcbiAgICB9LFxuXG4gICAgb24odHlwZSwgZm4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChlbCA9PiBhZGRMaXN0ZW5lcihlbCwgdHlwZSwgZm4pKTtcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGUsIGZuKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZWwgPT4gcmVtb3ZlTGlzdGVuZXIoZWwsIHR5cGUsIGZuKSk7XG4gICAgfSxcblxuICAgIGF0dHIoa2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGVuZ3RoID8gdGhpc1swXS5nZXRBdHRyaWJ1dGUoa2V5KSA6IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGVsID0+IGVsLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKSk7XG4gICAgfSxcblxuICAgIHJtQXR0cihrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChlbCA9PiBlbC5yZW1vdmVBdHRyaWJ1dGUoa2V5KSk7XG4gICAgfSxcblxuICAgIHZhbCh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGVuZ3RoID8gdGhpc1swXS52YWx1ZSA6IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGVsID0+IHtcbiAgICAgICAgICAgIGVsLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBodG1sKHN0cikge1xuICAgICAgICBpZiAoc3RyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hcChlbCA9PiBlbC5pbm5lckhUTUwpLmpvaW4oJycpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZWwgPT4ge1xuICAgICAgICAgICAgZWwuaW5uZXJIVE1MID0gc3RyO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgdGV4dChzdHIpIHtcbiAgICAgICAgaWYgKHN0ciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXAoZWwgPT4gZWwudGV4dENvbnRlbnQpLmpvaW4oJycpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZWwgPT4ge1xuICAgICAgICAgICAgZWwudGV4dENvbnRlbnQgPSBzdHI7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBjbHIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0bWwoJycpO1xuICAgIH0sXG5cbiAgICBybSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChlbCA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBlbC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAgICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBycGwoYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZWwgPT4ge1xuICAgICAgICAgICAgZWwub3V0ZXJIVE1MID0gZG9tKGFyZykubWFwKHJwbEVsID0+IHJwbEVsLm91dGVySFRNTCkuam9pbignJyk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBhcHAoYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZWwgPT4ge1xuICAgICAgICAgICAgZG9tKGFyZykuZWFjaChjaGlsZCA9PiBlbC5hcHBlbmRDaGlsZChjaGlsZCkpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgYXBwVG8oYXJnKSB7XG4gICAgICAgIGRvbShhcmcpLmFwcCh0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIHByZShhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChlbCA9PiB7XG4gICAgICAgICAgICBkb20oYXJnKS5lYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaXJzdENoaWxkID0gZWwuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgICAgICBpZiAoIWZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgZWwuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsLmluc2VydEJlZm9yZShjaGlsZCwgZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBwcmVUbyhhcmcpIHtcbiAgICAgICAgZG9tKGFyZykucHJlKHRoaXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgY2xzKC4uLm5hbWVzKSB7XG4gICAgICAgIGlmICghbmFtZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sZW5ndGggPyBjb3JlLnRvQXJyYXkodGhpc1swXS5jbGFzc0xpc3QpIDogW107XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lYWNoKGVsID0+IGVsLmNsYXNzTmFtZSA9ICcnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkQ2xzKC4uLm5hbWVzKTtcbiAgICB9LFxuXG4gICAgaGFzQ2xzKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGNvcmUuYWxsKHRoaXMsIGVsID0+IGVsLmNsYXNzTGlzdC5jb250YWlucyhuYW1lKSk7XG4gICAgfSxcblxuICAgIGFkZENscyguLi5uYW1lcykge1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGVsID0+IHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbmFtZSBvZiBuYW1lcykge1xuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBybUNscyguLi5uYW1lcykge1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGVsID0+IHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbmFtZSBvZiBuYW1lcykge1xuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2RvbS5qc1xuICoqLyIsImltcG9ydCAqIGFzIGNvcmUgZnJvbSAnLi9jb3JlJztcblxuY29uc3QgZWFjaCA9IGNvcmUuZWFjaDtcbmNvbnN0IG1hcCA9IGNvcmUubWFwO1xuY29uc3QgYXNzaWduID0gY29yZS5hc3NpZ247XG5jb25zdCBjb250YWlucyA9IGNvcmUuY29udGFpbnM7XG5jb25zdCBpc0Z1bmN0aW9uID0gY29yZS5pc0Z1bmN0aW9uO1xuY29uc3QgaXNTdHJpbmcgPSBjb3JlLmlzU3RyaW5nO1xuY29uc3QgdG9BcnJheSA9IGNvcmUudG9BcnJheTtcblxuY29uc3QgV0lOID0gZ2xvYmFsLndpbmRvdyB8fCB7fTtcbmNvbnN0IElOUFVUX0VMUyA9IFsnaW5wdXQnLCAnc2VsZWN0JywgJ3RleHRhcmVhJ107XG5jb25zdCBSRV9OQU1FID0gL15bX2EtekEtWl1bX2EtekEtWjAtOV0qJC87XG5jb25zdCBSRV9URU1QTEFURSA9IC9cXFsoW19hLXpBLVpdW19hLXpBLVowLTldKilcXF0vZztcbmNvbnN0IEFUVFJfS0VZID0gJ2RhdGEtdHBsJztcblxuY29uc3QgY3JlYXRlT2JqID0gKHByb3RvID0gbnVsbCkgPT4gT2JqZWN0LmNyZWF0ZShwcm90byk7XG5jb25zdCBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbmNvbnN0IGlzSW5wdXRFbCA9IGVsID0+IGNvbnRhaW5zKElOUFVUX0VMUywgZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKSk7XG5jb25zdCBpc05hbWUgPSB4ID0+IGlzU3RyaW5nKHgpICYmIFJFX05BTUUudGVzdCh4KTtcblxuZnVuY3Rpb24gZGVmaW5lQ29uc3QoaW5zdCwgbmFtZSwgdmFsdWUpIHtcbiAgICBkZWZpbmVQcm9wZXJ0eShpbnN0LCBuYW1lLCB7dmFsdWV9KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlRWxzKGluc3QsIG5hbWUsIGVscykge1xuICAgIGlmICghZWxzKSB7XG4gICAgICAgIGVscyA9IGluc3QuX2Vsc1tuYW1lXTtcbiAgICB9XG4gICAgY29uc3QgdmFsdWUgPSBpbnN0LnZhbFtuYW1lXTtcbiAgICBlYWNoKGVscywgZWwgPT4ge1xuICAgICAgICBjb25zdCBwcm9wID0gaXNJbnB1dEVsKGVsKSA/ICd2YWx1ZScgOiAnaW5uZXJIVE1MJztcbiAgICAgICAgaWYgKGVsW3Byb3BdICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgZWxbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjYWxsTGlzdGVuZXJzKGluc3QsIG5hbWUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGluc3QudmFsW25hbWVdO1xuICAgIGVhY2goaW5zdC5fZm5zW25hbWVdLCBmbiA9PiB7XG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKGZuKSkge1xuICAgICAgICAgICAgZm4odmFsdWUsIG5hbWUsIGluc3QpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZFZhbChpbnN0LCBuYW1lKSB7XG4gICAgbGV0IHZhbHVlID0gbmFtZTtcblxuICAgIGRlZmluZVByb3BlcnR5KGluc3QudmFsLCBuYW1lLCB7XG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHNldDogeCA9PiB7XG4gICAgICAgICAgICB4ID0gU3RyaW5nKHgpO1xuICAgICAgICAgICAgaWYgKHggIT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB4O1xuICAgICAgICAgICAgICAgIHVwZGF0ZUVscyhpbnN0LCBuYW1lKTtcbiAgICAgICAgICAgICAgICBjYWxsTGlzdGVuZXJzKGluc3QsIG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBnZXQ6ICgpID0+IHZhbHVlXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGVuc3VyZU5hbWUoaW5zdCwgbmFtZSkge1xuICAgIGlmICghaXNOYW1lKG5hbWUpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCEobmFtZSBpbiBpbnN0LnZhbCkpIHtcbiAgICAgICAgYWRkVmFsKGluc3QsIG5hbWUpO1xuICAgIH1cbiAgICBpZiAoIShuYW1lIGluIGluc3QuX2VscykpIHtcbiAgICAgICAgZGVmaW5lQ29uc3QoaW5zdC5fZWxzLCBuYW1lLCBbXSk7XG4gICAgfVxuICAgIGlmICghKG5hbWUgaW4gaW5zdC5fZm5zKSkge1xuICAgICAgICBkZWZpbmVDb25zdChpbnN0Ll9mbnMsIG5hbWUsIFtdKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGZpbmRBbGxUZXh0Tm9kZXMobm9kZSkge1xuICAgIGNvbnN0IHRleHRub2RlcyA9IFtdLmNvbmNhdCguLi5tYXAobm9kZS5jaGlsZE5vZGVzLCBuID0+IGZpbmRBbGxUZXh0Tm9kZXMobikpKTtcbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gV0lOLk5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICAgIHRleHRub2Rlcy5wdXNoKG5vZGUpO1xuICAgIH1cbiAgICByZXR1cm4gdGV4dG5vZGVzO1xufVxuXG5mdW5jdGlvbiBjb21waWxlVGV4dE5vZGUobm9kZSkge1xuICAgIGNvbnN0IGRpdiA9IFdJTi5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuaW5uZXJIVE1MID0gbm9kZS5ub2RlVmFsdWUucmVwbGFjZShSRV9URU1QTEFURSwgKG1hdGNoLCBuYW1lKSA9PiBgPHNwYW4gJHtBVFRSX0tFWX09JyR7bmFtZX0nPjwvc3Bhbj5gKTtcbiAgICBpZiAoZGl2LmNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgZWFjaCh0b0FycmF5KGRpdi5jaGlsZE5vZGVzKSwgbiA9PiB7XG4gICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKG4sIG5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJpbmRlcigpIHtcbiAgICBjb25zdCBpbnN0ID0gY3JlYXRlT2JqKGJpbmRlci5wcm90b3R5cGUpO1xuICAgIGRlZmluZUNvbnN0KGluc3QsICdfZWxzJywgY3JlYXRlT2JqKCkpO1xuICAgIGRlZmluZUNvbnN0KGluc3QsICdfZm5zJywgY3JlYXRlT2JqKCkpO1xuICAgIGRlZmluZUNvbnN0KGluc3QsICd2YWwnLCBjcmVhdGVPYmooKSk7XG4gICAgcmV0dXJuIGluc3Q7XG59XG5cbmFzc2lnbihiaW5kZXIucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IGJpbmRlcixcblxuICAgIGxvZygpIHtcbiAgICAgICAgY29uc3QgcGxhaW4gPSBjcmVhdGVPYmooKTtcbiAgICAgICAgZWFjaCh0aGlzLnZhbCwgKHZhbHVlLCBuYW1lKSA9PiB7XG4gICAgICAgICAgICBwbGFpbltuYW1lXSA9IHtcbiAgICAgICAgICAgICAgICB2YWw6IHZhbHVlLFxuICAgICAgICAgICAgICAgIGVsczogdGhpcy5fZWxzW25hbWVdLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBmbnM6IHRoaXMuX2Zuc1tuYW1lXS5sZW5ndGhcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoY29uc29sZS50YWJsZSkge1xuICAgICAgICAgICAgY29uc29sZS50YWJsZShwbGFpbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwbGFpbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGFkZChvYmopIHtcbiAgICAgICAgZWFjaChvYmosIChlbHMsIG5hbWUpID0+IHtcbiAgICAgICAgICAgIGlmIChlbnN1cmVOYW1lKHRoaXMsIG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlRWxzKHRoaXMsIG5hbWUsIGVscyk7XG4gICAgICAgICAgICAgICAgZWFjaChlbHMsIGVsID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb250YWlucyh0aGlzLl9lbHNbbmFtZV0sIGVsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZWxzW25hbWVdLnB1c2goZWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzSW5wdXRFbChlbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHRoaXMudmFsW25hbWVdID0gZWwudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHRoaXMudmFsW25hbWVdID0gZWwudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgc2V0KG9iaikge1xuICAgICAgICBlYWNoKG9iaiwgKHZhbHVlLCBuYW1lKSA9PiB7XG4gICAgICAgICAgICBpZiAoZW5zdXJlTmFtZSh0aGlzLCBuYW1lKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsW25hbWVdID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgb24obmFtZSwgZm4pIHtcbiAgICAgICAgaWYgKGVuc3VyZU5hbWUodGhpcywgbmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMuX2Zuc1tuYW1lXS5wdXNoKGZuKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgY29sbGVjdChjb250YWluZXJFbCwgc3BsaXQpIHtcbiAgICAgICAgaWYgKCFjb250YWluZXJFbCB8fCAhaXNGdW5jdGlvbihjb250YWluZXJFbC5xdWVyeVNlbGVjdG9yQWxsKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNwbGl0KSB7XG4gICAgICAgICAgICBlYWNoKGZpbmRBbGxUZXh0Tm9kZXMoY29udGFpbmVyRWwpLCBjb21waWxlVGV4dE5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVscyA9IHRvQXJyYXkoY29udGFpbmVyRWwucXVlcnlTZWxlY3RvckFsbChgWyR7QVRUUl9LRVl9XWApKTtcbiAgICAgICAgZWxzLnVuc2hpZnQoY29udGFpbmVyRWwpO1xuICAgICAgICBlYWNoKGVscywgZWwgPT4ge1xuICAgICAgICAgICAgaWYgKGlzRnVuY3Rpb24oZWwuZ2V0QXR0cmlidXRlKSAmJiBlbC5nZXRBdHRyaWJ1dGUoQVRUUl9LRVkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGQoe1tlbC5nZXRBdHRyaWJ1dGUoQVRUUl9LRVkpXTogW2VsXX0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2JpbmRlci5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=