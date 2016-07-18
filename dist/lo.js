/*! lo v0.22.0 - https://larsjung.de/lo/ */
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

	var _require = __webpack_require__(1);

	var assign = _require.assign;


	module.exports = assign({}, __webpack_require__(1), __webpack_require__(2), __webpack_require__(3));

/***/ },
/* 1 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var EX = module.exports = {};

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

	EX.ok = function () {
	    'use strict';
	    return !this;
	}(); // eslint-disable-line func-names, strict, no-invalid-this
	if (!EX.ok) {
	    global.window.document.documentElement.className += ' no-lo';
	    throw new Error('no-lo');
	}

	var apply = function apply(fn, obj, args) {
	    return fn.apply(obj, args);
	}; // eslint-disable-line prefer-reflect

	var _is_x_fn = function _is_x_fn(type) {
	    return function (x) {
	        return apply(_obj_toString, x) === '[object ' + type + ']';
	    };
	};

	var _is_obj = _is_x_fn('Object');
	var isObject = EX.isObject = function (x) {
	    return x !== null && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object';
	};
	EX.isPlainObject = function (x) {
	    return _is_obj(x) && (_obj_getProto(x) === _obj_proto || _obj_getProto(x) === null);
	};

	EX.isArray = _arr_isArray;
	EX.isArguments = _is_x_fn('Arguments');
	EX.isBoolean = _is_x_fn('Boolean');
	EX.isDate = _is_x_fn('Date');
	EX.isError = _is_x_fn('Error');
	var isFunction = EX.isFunction = _is_x_fn('Function');
	var isNumber = EX.isNumber = _is_x_fn('Number');
	EX.isRegExp = _is_x_fn('RegExp');
	EX.isString = _is_x_fn('String');

	var isNumeric = EX.isNumeric = function (x) {
	    return isNumber(x) && isFinite(x);
	};
	EX.isTypeOf = function (x, typ) {
	    return (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === typ;
	};
	EX.isInstanceOf = function (x, typ) {
	    return x ? x instanceof typ : false;
	};
	var is = EX.is = function (x) {
	    return x !== undefined && x !== null;
	};
	var has = EX.has = function (x, prop) {
	    return is(x) && apply(_obj_has, x, [prop]);
	};
	var keys = EX.keys = function (x) {
	    return isObject(x) ? _obj_keys(x) : [];
	};
	var values = EX.values = function (x) {
	    return keys(x).map(function (key) {
	        return x[key];
	    });
	};
	var hasLength = EX.hasLength = function (x) {
	    return is(x) && isNumeric(x.length);
	};
	EX.size = function (x) {
	    return hasLength(x) ? x.length : keys(x).length;
	};
	var asArray = EX.asArray = function (x) {
	    return hasLength(x) ? x : values(x);
	};
	var toArray = EX.toArray = function (x) {
	    return apply(_arr_slice, asArray(x));
	};

	var forEach = EX.forEach = function (x, fn, ctx) {
	    if (isFunction(fn)) {
	        apply(_arr_forEach, x, [fn, ctx]);
	    }
	};

	var forOwn = EX.forOwn = function (x, fn, ctx) {
	    if (isFunction(fn)) {
	        keys(x).forEach(function (key) {
	            return apply(fn, ctx, [x[key], key, x]);
	        });
	    }
	};

	var each = EX.each = function (x, fn, ctx) {
	    if (hasLength(x)) {
	        forEach(x, fn, ctx);
	    } else {
	        forOwn(x, fn, ctx);
	    }
	};

	EX.assign = function () {
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
	};

	var map = EX.map = function (x, fn, ctx) {
	    var res = [];
	    if (isFunction(fn)) {
	        each(x, function (val, idx) {
	            return res.push(apply(fn, ctx, [val, idx, x]));
	        });
	    }
	    return res;
	};

	var filter = EX.filter = function (x, fn, ctx) {
	    var res = [];
	    if (isFunction(fn)) {
	        each(x, function (val, idx) {
	            if (apply(fn, ctx, [val, idx])) {
	                res.push(val);
	            }
	        });
	    }
	    return res;
	};

	EX.reduce = function (x, fn, init) {
	    return apply(_arr_reduce, asArray(x), [fn, init]);
	};
	EX.contains = function (x, el) {
	    return apply(_arr_indexOf, asArray(x), [el]) >= 0;
	};
	EX.indexOf = function (x, el) {
	    return apply(_arr_indexOf, hasLength(x) ? x : [], [el]);
	};
	EX.compact = function (x) {
	    return filter(x, function (val) {
	        return !!val;
	    });
	};
	EX.pluck = function (x, prop) {
	    return map(x, function (val) {
	        return val[prop];
	    });
	};
	var cmp = EX.cmp = function (a, b) {
	    return a < b ? -1 : a > b ? 1 : 0;
	};
	EX.sortBy = function (list) {
	    var selector = arguments.length <= 1 || arguments[1] === undefined ? function (x) {
	        return x;
	    } : arguments[1];
	    return toArray(list).sort(function (a, b) {
	        return cmp(selector(a), selector(b));
	    });
	};

	EX.uniq = function (x) {
	    var cache = {};
	    return filter(x, function (val) {
	        if (!has(cache, val)) {
	            cache[val] = 1;
	            return true;
	        }
	        return false;
	    });
	};

	EX.all = function (x, fn) {
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
	};

	EX.any = function (x, fn) {
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
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var _require = __webpack_require__(1);

	var all = _require.all;
	var _each = _require.each;
	var filter = _require.filter;
	var forEach = _require.forEach;
	var hasLength = _require.hasLength;
	var is = _require.is;
	var isInstanceOf = _require.isInstanceOf;
	var isString = _require.isString;
	var _map = _require.map;
	var toArray = _require.toArray;


	var WIN = global.window;
	var DOC = WIN.document;

	var createElement = function createElement(name) {
	    return DOC.createElement(name);
	};
	var CONTAINER_DIV = createElement('div');
	var CONTAINER_TABLE = createElement('table');
	var CONTAINER_TBODY = createElement('tbody');
	var CONTAINER_TR = createElement('tr');
	var CONTAINER_COLGROUP = createElement('colgroup');

	var publish = function publish(obj, arr) {
	    forEach(arr, function (el, idx) {
	        obj[idx] = el;
	    });
	    obj.length = arr.length;
	};

	var findContainer = function findContainer(str) {
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
	};

	var parseHtml = function parseHtml(str) {
	    var container = findContainer(str);
	    container.innerHTML = str;
	    var res = toArray(container.childNodes);
	    _each(res, function (el) {
	        return container.removeChild(el);
	    });
	    container.innerHTML = '';
	    return res;
	};

	var queryAll = function queryAll(selector, context) {
	    try {
	        return toArray((context || DOC).querySelectorAll(selector));
	    } catch (err) {/* ignore */}
	    return [];
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

	var addListener = function addListener(el, type, fn) {
	    return el.addEventListener(type, fn);
	};
	var removeListener = function removeListener(el, type, fn) {
	    return el.removeEventListener(type, fn);
	};

	var onReady = function onReady(fn) {
	    if (/^(i|c|loade)/.test(DOC.readyState)) {
	        fn();
	    } else {
	        addListener(DOC, 'DOMContentLoaded', fn);
	    }
	};

	var onResize = function onResize(fn) {
	    addListener(WIN, 'resize', fn);
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

	    var inst = Object.create(dom.prototype);
	    publish(inst, els);
	    return inst;
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
	        if (!arguments.length) {
	            return this.length ? toArray(this[0].classList) : [];
	        }
	        this.each(function (el) {
	            el.className = '';
	        });
	        return this.addCls.apply(this, arguments);
	    },
	    hasCls: function hasCls(name) {
	        return all(this, function (el) {
	            return el.classList.contains(name);
	        });
	    },
	    addCls: function addCls() {
	        for (var _len = arguments.length, names = Array(_len), _key = 0; _key < _len; _key++) {
	            names[_key] = arguments[_key];
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
	        for (var _len2 = arguments.length, names = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	            names[_key2] = arguments[_key2];
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

	var _require = __webpack_require__(1);

	var assign = _require.assign;
	var contains = _require.contains;
	var each = _require.each;
	var isFunction = _require.isFunction;
	var isString = _require.isString;
	var map = _require.map;
	var toArray = _require.toArray;


	var WIN = global.window;
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

	var defineConst = function defineConst(inst, name, value) {
	    defineProperty(inst, name, { value: value });
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
	});

	module.exports = {
	    binder: binder
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ])
});
;