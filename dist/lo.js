/*! lo v0.26.0 - https://larsjung.de/lo/ */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["lo"] = factory();
	else
		root["lo"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = Object.assign({}, __webpack_require__(1), __webpack_require__(2), __webpack_require__(3));

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var OBJ_PROTO = Object.prototype;
	var OBJ_GET_PROTO = Object.getPrototypeOf;
	var ARR_PROTO = Array.prototype;

	var _apply = function _apply(fn, ctx, args) {
	    return fn.apply(ctx, args);
	}; // eslint-disable-line prefer-reflect
	var _typeCheckFn = function _typeCheckFn(type) {
	    return function (x) {
	        return _apply(OBJ_PROTO.toString, x) === '[object ' + type + ']';
	    };
	};
	var _is_obj = _typeCheckFn('Object');

	var isObject = function isObject(x) {
	    return x !== null && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object';
	};
	var isPlainObject = function isPlainObject(x) {
	    return _is_obj(x) && (OBJ_GET_PROTO(x) === OBJ_PROTO || OBJ_GET_PROTO(x) === null);
	};
	var isArray = Array.isArray;
	var isArguments = _typeCheckFn('Arguments');
	var isBoolean = _typeCheckFn('Boolean');
	var isDate = _typeCheckFn('Date');
	var isError = _typeCheckFn('Error');
	var isFunction = _typeCheckFn('Function');
	var isNumber = _typeCheckFn('Number');
	var isRegExp = _typeCheckFn('RegExp');
	var isString = _typeCheckFn('String');

	var isNumeric = function isNumeric(x) {
	    return isNumber(x) && isFinite(x);
	};
	var isTypeOf = function isTypeOf(x, typ) {
	    return (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === typ;
	};
	var isInstanceOf = function isInstanceOf(x, typ) {
	    return x ? x instanceof typ : false;
	};
	var is = function is(x) {
	    return x !== undefined && x !== null;
	};
	var has = function has(x, prop) {
	    return is(x) && _apply(OBJ_PROTO.hasOwnProperty, x, [prop]);
	};
	var keys = function keys(x) {
	    return isObject(x) ? Object.keys(x) : [];
	};
	var values = function values(x) {
	    return keys(x).map(function (key) {
	        return x[key];
	    });
	};
	var hasLength = function hasLength(x) {
	    return is(x) && isNumeric(x.length);
	};
	var size = function size(x) {
	    return hasLength(x) ? x.length : keys(x).length;
	};
	var asArray = function asArray(x) {
	    return hasLength(x) ? x : values(x);
	};
	var toArray = function toArray(x) {
	    return isArray(x) ? x : hasLength(x) ? _apply(ARR_PROTO.slice, x) : values(x);
	};
	var asFunction = function asFunction(x) {
	    return isFunction(x) ? x : function () {
	        return x;
	    };
	};

	var forEach = function forEach(x, fn, ctx) {
	    return _apply(ARR_PROTO.forEach, x, [fn, ctx]);
	};
	var forOwn = function forOwn(x, fn, ctx) {
	    return keys(x).forEach(function (key) {
	        return _apply(fn, ctx, [x[key], key, x]);
	    });
	};
	var each = function each(x, fn, ctx) {
	    return (hasLength(x) ? forEach : forOwn)(x, fn, ctx);
	};

	var map = function map(x, fn) {
	    return toArray(x).map(fn);
	};
	var filter = function filter(x, fn) {
	    return toArray(x).filter(fn);
	};
	var every = function every(x, fn) {
	    return toArray(x).every(fn);
	};
	var some = function some(x, fn) {
	    return toArray(x).some(fn);
	};
	var reduce = function reduce(x, fn, init) {
	    return toArray(x).reduce(fn, init);
	};
	var indexOf = function indexOf(x, el) {
	    return toArray(x).indexOf(el);
	};
	var contains = function contains(x, el) {
	    return indexOf(x, el) >= 0;
	};
	var compact = function compact(x) {
	    return filter(x, function (val) {
	        return !!val;
	    });
	};

	var cmp = function cmp(a, b) {
	    return a < b ? -1 : a > b ? 1 : 0;
	};
	var sort = function sort(x, fn) {
	    return toArray(x).sort(fn);
	};
	var sortBy = function sortBy(x, fn) {
	    return sort(x, function (a, b) {
	        return cmp(fn(a), fn(b));
	    });
	};

	var uniq = function uniq(x) {
	    var cache = {};
	    return filter(x, function (val) {
	        if (!has(cache, val)) {
	            cache[val] = 1;
	            return true;
	        }
	        return false;
	    });
	};

	module.exports = {
	    asArray: asArray,
	    asFunction: asFunction,
	    cmp: cmp,
	    compact: compact,
	    contains: contains,
	    each: each,
	    every: every,
	    filter: filter,
	    forEach: forEach,
	    forOwn: forOwn,
	    has: has,
	    hasLength: hasLength,
	    indexOf: indexOf,
	    is: is,
	    isArguments: isArguments,
	    isArray: isArray,
	    isBoolean: isBoolean,
	    isDate: isDate,
	    isError: isError,
	    isFunction: isFunction,
	    isInstanceOf: isInstanceOf,
	    isNumber: isNumber,
	    isNumeric: isNumeric,
	    isObject: isObject,
	    isPlainObject: isPlainObject,
	    isRegExp: isRegExp,
	    isString: isString,
	    isTypeOf: isTypeOf,
	    keys: keys,
	    map: map,
	    reduce: reduce,
	    size: size,
	    some: some,
	    sort: sort,
	    sortBy: sortBy,
	    toArray: toArray,
	    uniq: uniq,
	    values: values
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var _require = __webpack_require__(1),
	    _each = _require.each,
	    every = _require.every,
	    filter = _require.filter,
	    forEach = _require.forEach,
	    hasLength = _require.hasLength,
	    is = _require.is,
	    isInstanceOf = _require.isInstanceOf,
	    isString = _require.isString,
	    _map = _require.map,
	    toArray = _require.toArray;

	var WIN = global.window;
	var DOC = WIN.document;

	var parseHtml = function () {
	    var create = function create(name) {
	        return DOC.createElement(name);
	    };
	    var rules = [[/^<t(head|body|foot)|^<c(ap|olg)/i, create('table')], [/^<col/i, create('colgroup')], [/^<tr/i, create('tbody')], [/^<t[dh]/i, create('tr')]];
	    var div = create('div');

	    var findContainer = function findContainer(str) {
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	            for (var _iterator = rules[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var _step$value = _slicedToArray(_step.value, 2),
	                    re = _step$value[0],
	                    el = _step$value[1];

	                if (re.test(str)) {
	                    return el;
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

	        return div;
	    };

	    return function (str) {
	        var container = findContainer(str);
	        container.innerHTML = str;
	        var res = toArray(container.childNodes);
	        forEach(res, function (el) {
	            return container.removeChild(el);
	        });
	        container.innerHTML = '';
	        return res;
	    };
	}();

	var queryAll = function queryAll(selector, context) {
	    try {
	        return toArray((context || DOC).querySelectorAll(selector));
	    } catch (err) {
	        return [];
	    }
	};

	var isElement = function isElement(x) {
	    return isInstanceOf(x, WIN.Element);
	};
	var isDocument = function isDocument(x) {
	    return isInstanceOf(x, WIN.Document);
	};
	var isWindow = function isWindow(x) {
	    return is(x) && x.window === x && isDocument(x.document);
	};
	var isElDocWin = function isElDocWin(x) {
	    return isElement(x) || isDocument(x) || isWindow(x);
	};

	var _on = function _on(el, type, fn) {
	    return el.addEventListener(type, fn);
	};
	var _off = function _off(el, type, fn) {
	    return el.removeEventListener(type, fn);
	};

	var onReady = function onReady(fn) {
	    if (/^(i|c|loade)/.test(DOC.readyState)) {
	        fn();
	    } else {
	        _on(DOC, 'DOMContentLoaded', fn);
	    }
	};

	var onResize = function onResize(fn) {
	    _on(WIN, 'resize', fn);
	};

	var onPrint = function onPrint(before, after) {
	    WIN.matchMedia('print').addListener(function (mql) {
	        if (mql.matches) {
	            before();
	        } else {
	            after();
	        }
	    });
	};

	var dom = function dom(arg) {
	    if (isInstanceOf(arg, dom)) {
	        return arg;
	    }

	    var els = void 0;
	    if (isString(arg)) {
	        arg = arg.trim();
	        els = arg[0] === '<' ? parseHtml(arg) : queryAll(arg);
	    } else if (isElDocWin(arg)) {
	        els = [arg];
	    } else {
	        els = hasLength(arg) ? arg : [arg];
	    }
	    els = filter(els, isElDocWin);

	    return Object.assign(Object.create(dom.prototype), els, { length: els.length });
	};

	dom.prototype = {
	    constructor: dom,

	    each: function each(fn) {
	        _each(this, fn);
	        return this;
	    },
	    map: function map(fn) {
	        return _map(this, fn);
	    },
	    find: function find(selector) {
	        var _ref;

	        return dom((_ref = []).concat.apply(_ref, _toConsumableArray(this.map(function (el) {
	            return queryAll(selector, el);
	        }))));
	    },
	    on: function on(type, fn) {
	        return this.each(function (el) {
	            return _on(el, type, fn);
	        });
	    },
	    off: function off(type, fn) {
	        return this.each(function (el) {
	            return _off(el, type, fn);
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
	        if (!arguments.length) {
	            return this.length ? toArray(this[0].classList) : [];
	        }
	        this.each(function (el) {
	            el.className = '';
	        });
	        return this.addCls.apply(this, arguments);
	    },
	    hasCls: function hasCls(name) {
	        return every(this, function (el) {
	            return el.classList.contains(name);
	        });
	    },
	    addCls: function addCls() {
	        for (var _len = arguments.length, names = Array(_len), _key = 0; _key < _len; _key++) {
	            names[_key] = arguments[_key];
	        }

	        return this.each(function (el) {
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;

	            try {
	                for (var _iterator2 = names[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var name = _step2.value;

	                    el.classList.add(name);
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
	    },
	    rmCls: function rmCls() {
	        for (var _len2 = arguments.length, names = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	            names[_key2] = arguments[_key2];
	        }

	        return this.each(function (el) {
	            var _iteratorNormalCompletion3 = true;
	            var _didIteratorError3 = false;
	            var _iteratorError3 = undefined;

	            try {
	                for (var _iterator3 = names[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                    var name = _step3.value;

	                    el.classList.remove(name);
	                }
	            } catch (err) {
	                _didIteratorError3 = true;
	                _iteratorError3 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                        _iterator3.return();
	                    }
	                } finally {
	                    if (_didIteratorError3) {
	                        throw _iteratorError3;
	                    }
	                }
	            }
	        });
	    }
	};

	module.exports = {
	    isElement: isElement,
	    isDocument: isDocument,
	    isWindow: isWindow,
	    isElDocWin: isElDocWin,
	    onReady: onReady,
	    onResize: onResize,
	    onPrint: onPrint,
	    dom: dom
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var _require = __webpack_require__(1),
	    contains = _require.contains,
	    each = _require.each,
	    isFunction = _require.isFunction,
	    isString = _require.isString,
	    map = _require.map,
	    toArray = _require.toArray;

	var WIN = global.window;
	var INPUT_ELS = ['input', 'select', 'textarea'];
	var RE_NAME = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
	var RE_TEMPLATE = /\[([_a-zA-Z][_a-zA-Z0-9]*)\]/g;
	var ATTR_KEY = 'data-tpl';

	var createObj = function createObj() {
	    var proto = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	    return Object.create(proto);
	};
	var defineProperty = Object.defineProperty;
	var isInputEl = function isInputEl(el) {
	    return contains(INPUT_ELS, el.nodeName.toLowerCase());
	};
	var isName = function isName(x) {
	    return isString(x) && RE_NAME.test(x);
	};
	var defineConst = function defineConst(inst, name, value) {
	    return defineProperty(inst, name, { value: value });
	};

	var updateEls = function updateEls(inst, name, els) {
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
	};

	var callListeners = function callListeners(inst, name) {
	    var value = inst.val[name];
	    each(inst._fns[name], function (fn) {
	        if (isFunction(fn)) {
	            fn(value, name, inst);
	        }
	    });
	};

	var addVal = function addVal(inst, name) {
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
	};

	var ensureName = function ensureName(inst, name) {
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
	};

	var findAllTextNodes = function findAllTextNodes(node) {
	    var _ref;

	    var textnodes = (_ref = []).concat.apply(_ref, _toConsumableArray(map(node.childNodes, function (n) {
	        return findAllTextNodes(n);
	    })));
	    if (node.nodeType === WIN.Node.TEXT_NODE) {
	        textnodes.push(node);
	    }
	    return textnodes;
	};

	var compileTextNode = function compileTextNode(node) {
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
	};

	var binder = function binder() {
	    var inst = createObj(binder.prototype);
	    defineConst(inst, '_els', createObj());
	    defineConst(inst, '_fns', createObj());
	    defineConst(inst, 'val', createObj());
	    return inst;
	};

	binder.prototype = {
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
	                                _this2.val[name] = el.value;
	                            });
	                            el.addEventListener('change', function () {
	                                _this2.val[name] = el.value;
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
	};

	module.exports = {
	    binder: binder
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ])
});
;