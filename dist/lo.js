/*! lo v0.9.0 - https://larsjung.de/lo/ */
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
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = Object.assign({}, __webpack_require__(1), __webpack_require__(2), __webpack_require__(3));

/***/ },
/* 1 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	var EXPORT = module.exports = {};
	
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
	
	var ok = EXPORT.ok = (function () {
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
	
	EXPORT.isArray = _arr_isArray;
	EXPORT.isArguments = _is_x_fn('Arguments');
	EXPORT.isBoolean = _is_x_fn('Boolean');
	EXPORT.isDate = _is_x_fn('Date');
	EXPORT.isError = _is_x_fn('Error');
	var isFunction = EXPORT.isFunction = _is_x_fn('Function');
	var isNumber = EXPORT.isNumber = _is_x_fn('Number');
	var isObject = EXPORT.isObject = _is_x_fn('Object');
	EXPORT.isRegExp = _is_x_fn('RegExp');
	EXPORT.isString = _is_x_fn('String');
	
	var isNumeric = EXPORT.isNumeric = function (x) {
	    return isNumber(x) && isFinite(x);
	};
	EXPORT.isPlainObject = function (x) {
	    return isObject(x) && _obj_getProto(x) === _obj_proto;
	};
	EXPORT.isTypeOf = function (x, typ) {
	    return (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === typ;
	};
	EXPORT.isInstanceOf = function (x, typ) {
	    return x ? x instanceof typ : false;
	};
	var is = EXPORT.is = function (x) {
	    return x !== undefined && x !== null;
	};
	var has = EXPORT.has = function (x, prop) {
	    return is(x) && apply(_obj_has, x, [prop]);
	};
	var keys = EXPORT.keys = function (x) {
	    return isObject(x) ? _obj_keys(x) : [];
	};
	var values = EXPORT.values = function (x) {
	    return keys(x).map(function (key) {
	        return x[key];
	    });
	};
	var hasLength = EXPORT.hasLength = function (x) {
	    return is(x) && isNumeric(x.length);
	};
	EXPORT.size = function (x) {
	    return hasLength(x) ? x.length : keys(x).length;
	};
	var asArray = EXPORT.asArray = function (x) {
	    return hasLength(x) ? x : values(x);
	};
	var toArray = EXPORT.toArray = function (x) {
	    return apply(_arr_slice, asArray(x));
	};
	
	var forEach = EXPORT.forEach = function (x, fn, ctx) {
	    if (isFunction(fn)) {
	        apply(_arr_forEach, x, [fn, ctx]);
	    }
	};
	
	var forOwn = EXPORT.forOwn = function (x, fn, ctx) {
	    if (isFunction(fn)) {
	        keys(x).forEach(function (key) {
	            return apply(fn, ctx, [x[key], key, x]);
	        });
	    }
	};
	
	var each = EXPORT.each = function (x, fn, ctx) {
	    if (hasLength(x)) {
	        forEach(x, fn, ctx);
	    } else {
	        forOwn(x, fn, ctx);
	    }
	};
	
	EXPORT.assign = function () {
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
	
	var map = EXPORT.map = function (x, fn, ctx) {
	    var res = [];
	    if (isFunction(fn)) {
	        each(x, function (val, idx) {
	            return res.push(apply(fn, ctx, [val, idx, x]));
	        });
	    }
	    return res;
	};
	
	var filter = EXPORT.filter = function (x, fn, ctx) {
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
	
	EXPORT.reduce = function (x, fn, init) {
	    return apply(_arr_reduce, asArray(x), [fn, init]);
	};
	EXPORT.contains = function (x, el) {
	    return apply(_arr_indexOf, asArray(x), [el]) >= 0;
	};
	EXPORT.indexOf = function (x, el) {
	    return apply(_arr_indexOf, hasLength(x) ? x : [], [el]);
	};
	EXPORT.compact = function (x) {
	    return filter(x, function (val) {
	        return !!val;
	    });
	};
	EXPORT.pluck = function (x, prop) {
	    return map(x, function (val) {
	        return val[prop];
	    });
	};
	var cmp = EXPORT.cmp = function (a, b) {
	    return a < b ? -1 : a > b ? 1 : 0;
	};
	EXPORT.sortBy = function (list) {
	    var selector = arguments.length <= 1 || arguments[1] === undefined ? function (x) {
	        return x;
	    } : arguments[1];
	    return toArray(list).sort(function (a, b) {
	        return cmp(selector(a), selector(b));
	    });
	};
	
	EXPORT.uniq = function (x) {
	    var cache = {};
	    return filter(x, function (val) {
	        if (!has(cache, val)) {
	            cache[val] = 1;
	            return true;
	        }
	    });
	};
	
	EXPORT.all = function (x, fn) {
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
	
	EXPORT.any = function (x, fn) {
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
	
	var core = __webpack_require__(1);
	
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
	
	var isElement = function isElement(x) {
	    return isInstanceOf(x, WIN.Element);
	};
	var isDocument = function isDocument(x) {
	    return isInstanceOf(x, WIN.Document);
	};
	var isWindow = function isWindow(x) {
	    return core.is(x) && x.window === x && isDocument(x.document);
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
	
	var core = __webpack_require__(1);
	
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
	
	module.exports = {
	    binder: binder
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiNWU1OThlOTliNmE3M2U5ZWE4OSIsIndlYnBhY2s6Ly8vLi9fX1RNUF9XRUJQQUNLX0lOX19pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlLmpzIiwid2VicGFjazovLy8uL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi9iaW5kZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0EsT0FBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFDN0IsbUJBQU8sQ0FBQyxDQUFRLENBQUMsRUFDakIsbUJBQU8sQ0FBQyxDQUFPLENBQUMsRUFDaEIsbUJBQU8sQ0FBQyxDQUFVLENBQUMsQ0FDdEIsQzs7Ozs7Ozs7OztBQ0pELEtBQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDOztBQUVuQyxLQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO0FBQzlCLEtBQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUM7QUFDNUMsS0FBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztBQUNwQyxLQUFNLGFBQWEsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDO0FBQzFDLEtBQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQyxjQUFjLENBQUM7O0FBRTNDLEtBQU0sWUFBWSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7QUFDbkMsS0FBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztBQUNuQyxLQUFNLFlBQVksR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDO0FBQ3hDLEtBQU0sWUFBWSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUM7QUFDeEMsS0FBTSxXQUFXLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQztBQUN0QyxLQUFNLFVBQVUsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDOztBQUVwQyxLQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsRUFBRSxHQUFJLGFBQVk7QUFBQyxpQkFBWSxDQUFDO0FBQUMsWUFBTyxDQUFDLElBQUksQ0FBQztFQUFDLEdBQUc7QUFDcEUsS0FBSSxDQUFDLEVBQUUsRUFBRTtBQUNMLFNBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtBQUNmLGVBQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxTQUFTLElBQUksUUFBUSxDQUFDO01BQ2hFO0FBQ0QsV0FBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztFQUM1Qjs7QUFFRCxLQUFNLEtBQUssR0FBRyxTQUFSLEtBQUssQ0FBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUk7WUFBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUM7RUFBQTs7QUFFcEQsVUFBUyxRQUFRLENBQUMsSUFBSSxFQUFFO0FBQ3BCLFlBQU8sV0FBQztnQkFBSSxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxrQkFBZ0IsSUFBSSxNQUFHO01BQUEsQ0FBQztFQUM5RDs7QUFFRCxPQUFNLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQztBQUM5QixPQUFNLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUMzQyxPQUFNLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN2QyxPQUFNLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNqQyxPQUFNLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNuQyxLQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUM1RCxLQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN0RCxLQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN0RCxPQUFNLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNyQyxPQUFNLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7QUFFckMsS0FBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsR0FBRyxXQUFDO1lBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUM7RUFBQSxDQUFDO0FBQ3JFLE9BQU0sQ0FBQyxhQUFhLEdBQUcsV0FBQztZQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLEtBQUssVUFBVTtFQUFBLENBQUM7QUFDM0UsT0FBTSxDQUFDLFFBQVEsR0FBRyxVQUFDLENBQUMsRUFBRSxHQUFHO1lBQUssUUFBTyxDQUFDLHlDQUFELENBQUMsT0FBSyxHQUFHO0VBQUEsQ0FBQztBQUMvQyxPQUFNLENBQUMsWUFBWSxHQUFHLFVBQUMsQ0FBQyxFQUFFLEdBQUc7WUFBSyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsR0FBRyxLQUFLO0VBQUEsQ0FBQztBQUMvRCxLQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsRUFBRSxHQUFHLFdBQUM7WUFBSSxDQUFDLEtBQUssU0FBUyxJQUFJLENBQUMsS0FBSyxJQUFJO0VBQUEsQ0FBQztBQUMxRCxLQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxHQUFHLFVBQUMsQ0FBQyxFQUFFLElBQUk7WUFBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUFBLENBQUM7QUFDMUUsS0FBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksR0FBRyxXQUFDO1lBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFO0VBQUEsQ0FBQztBQUNoRSxLQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLFdBQUM7WUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLGFBQUc7Z0JBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztNQUFBLENBQUM7RUFBQSxDQUFDO0FBQy9ELEtBQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLEdBQUcsV0FBQztZQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztFQUFBLENBQUM7QUFDdkUsT0FBTSxDQUFDLElBQUksR0FBRyxXQUFDO1lBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU07RUFBQSxDQUFDO0FBQzVELEtBQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLEdBQUcsV0FBQztZQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztFQUFBLENBQUM7QUFDbkUsS0FBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sR0FBRyxXQUFDO1lBQUksS0FBSyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFBQSxDQUFDOztBQUVwRSxLQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxHQUFHLFVBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxH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QUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztVQUM1QjtBQUNELGdCQUFPLElBQUksQ0FBQztNQUNmO0FBRUQsWUFBTyxtQkFBQyxXQUFXLEVBQUUsS0FBSyxFQUFFOzs7QUFDeEIsYUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtBQUMzRCxvQkFBTyxJQUFJLENBQUM7VUFDZjtBQUNELGFBQUksS0FBSyxFQUFFO0FBQ1AsaUJBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsRUFBRSxlQUFlLENBQUMsQ0FBQztVQUN4RDtBQUNELGFBQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLE9BQUssUUFBUSxPQUFJLENBQUMsQ0FBQztBQUNuRSxZQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3pCLGFBQUksQ0FBQyxHQUFHLEVBQUUsWUFBRSxFQUFJO0FBQ1osaUJBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxFQUFFO0FBQzFELHdCQUFLLEdBQUcscUJBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsRUFBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7Y0FDakQ7VUFDSixDQUFDLENBQUM7QUFDSCxnQkFBTyxJQUFJLENBQUM7TUFDZjtFQUNKLENBQUMsQ0FBQzs7QUFFSCxPQUFNLENBQUMsT0FBTyxHQUFHO0FBQ2IsV0FBTSxFQUFOLE1BQU07RUFDVCxDIiwiZmlsZSI6Il9fVE1QX1dFQlBBQ0tfT1VUX19pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImxvXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImxvXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uXG4gKiovIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBiNWU1OThlOTliNmE3M2U5ZWE4OVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmFzc2lnbih7fSxcbiAgICByZXF1aXJlKCcuL2NvcmUnKSxcbiAgICByZXF1aXJlKCcuL2RvbScpLFxuICAgIHJlcXVpcmUoJy4vYmluZGVyJylcbik7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL19fVE1QX1dFQlBBQ0tfSU5fX2luZGV4LmpzXG4gKiovIiwiY29uc3QgRVhQT1JUID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuY29uc3QgX29ial9rZXlzID0gT2JqZWN0LmtleXM7XG5jb25zdCBfb2JqX2dldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuY29uc3QgX29ial9wcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5jb25zdCBfb2JqX3RvU3RyaW5nID0gX29ial9wcm90by50b1N0cmluZztcbmNvbnN0IF9vYmpfaGFzID0gX29ial9wcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuY29uc3QgX2Fycl9pc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcbmNvbnN0IF9hcnJfcHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5jb25zdCBfYXJyX2luZGV4T2YgPSBfYXJyX3Byb3RvLmluZGV4T2Y7XG5jb25zdCBfYXJyX2ZvckVhY2ggPSBfYXJyX3Byb3RvLmZvckVhY2g7XG5jb25zdCBfYXJyX3JlZHVjZSA9IF9hcnJfcHJvdG8ucmVkdWNlO1xuY29uc3QgX2Fycl9zbGljZSA9IF9hcnJfcHJvdG8uc2xpY2U7XG5cbmNvbnN0IG9rID0gRVhQT1JULm9rID0gKGZ1bmN0aW9uICgpIHsndXNlIHN0cmljdCc7IHJldHVybiAhdGhpczt9KCkpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGZ1bmMtbmFtZXMsIHN0cmljdCwgbm8taW52YWxpZC10aGlzXG5pZiAoIW9rKSB7XG4gICAgaWYgKGdsb2JhbC53aW5kb3cpIHtcbiAgICAgICAgZ2xvYmFsLndpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NOYW1lICs9ICcgbm8tbG8nO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ25vLWxvJyk7XG59XG5cbmNvbnN0IGFwcGx5ID0gKGZuLCBvYmosIGFyZ3MpID0+IGZuLmFwcGx5KG9iaiwgYXJncyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcHJlZmVyLXJlZmxlY3RcblxuZnVuY3Rpb24gX2lzX3hfZm4odHlwZSkge1xuICAgIHJldHVybiB4ID0+IGFwcGx5KF9vYmpfdG9TdHJpbmcsIHgpID09PSBgW29iamVjdCAke3R5cGV9XWA7XG59XG5cbkVYUE9SVC5pc0FycmF5ID0gX2Fycl9pc0FycmF5O1xuRVhQT1JULmlzQXJndW1lbnRzID0gX2lzX3hfZm4oJ0FyZ3VtZW50cycpO1xuRVhQT1JULmlzQm9vbGVhbiA9IF9pc194X2ZuKCdCb29sZWFuJyk7XG5FWFBPUlQuaXNEYXRlID0gX2lzX3hfZm4oJ0RhdGUnKTtcbkVYUE9SVC5pc0Vycm9yID0gX2lzX3hfZm4oJ0Vycm9yJyk7XG5jb25zdCBpc0Z1bmN0aW9uID0gRVhQT1JULmlzRnVuY3Rpb24gPSBfaXNfeF9mbignRnVuY3Rpb24nKTtcbmNvbnN0IGlzTnVtYmVyID0gRVhQT1JULmlzTnVtYmVyID0gX2lzX3hfZm4oJ051bWJlcicpO1xuY29uc3QgaXNPYmplY3QgPSBFWFBPUlQuaXNPYmplY3QgPSBfaXNfeF9mbignT2JqZWN0Jyk7XG5FWFBPUlQuaXNSZWdFeHAgPSBfaXNfeF9mbignUmVnRXhwJyk7XG5FWFBPUlQuaXNTdHJpbmcgPSBfaXNfeF9mbignU3RyaW5nJyk7XG5cbmNvbnN0IGlzTnVtZXJpYyA9IEVYUE9SVC5pc051bWVyaWMgPSB4ID0+IGlzTnVtYmVyKHgpICYmIGlzRmluaXRlKHgpO1xuRVhQT1JULmlzUGxhaW5PYmplY3QgPSB4ID0+IGlzT2JqZWN0KHgpICYmIF9vYmpfZ2V0UHJvdG8oeCkgPT09IF9vYmpfcHJvdG87XG5FWFBPUlQuaXNUeXBlT2YgPSAoeCwgdHlwKSA9PiB0eXBlb2YgeCA9PT0gdHlwO1xuRVhQT1JULmlzSW5zdGFuY2VPZiA9ICh4LCB0eXApID0+IHggPyB4IGluc3RhbmNlb2YgdHlwIDogZmFsc2U7XG5jb25zdCBpcyA9IEVYUE9SVC5pcyA9IHggPT4geCAhPT0gdW5kZWZpbmVkICYmIHggIT09IG51bGw7XG5jb25zdCBoYXMgPSBFWFBPUlQuaGFzID0gKHgsIHByb3ApID0+IGlzKHgpICYmIGFwcGx5KF9vYmpfaGFzLCB4LCBbcHJvcF0pO1xuY29uc3Qga2V5cyA9IEVYUE9SVC5rZXlzID0geCA9PiBpc09iamVjdCh4KSA/IF9vYmpfa2V5cyh4KSA6IFtdO1xuY29uc3QgdmFsdWVzID0gRVhQT1JULnZhbHVlcyA9IHggPT4ga2V5cyh4KS5tYXAoa2V5ID0+IHhba2V5XSk7XG5jb25zdCBoYXNMZW5ndGggPSBFWFBPUlQuaGFzTGVuZ3RoID0geCA9PiBpcyh4KSAmJiBpc051bWVyaWMoeC5sZW5ndGgpO1xuRVhQT1JULnNpemUgPSB4ID0+IGhhc0xlbmd0aCh4KSA/IHgubGVuZ3RoIDoga2V5cyh4KS5sZW5ndGg7XG5jb25zdCBhc0FycmF5ID0gRVhQT1JULmFzQXJyYXkgPSB4ID0+IGhhc0xlbmd0aCh4KSA/IHggOiB2YWx1ZXMoeCk7XG5jb25zdCB0b0FycmF5ID0gRVhQT1JULnRvQXJyYXkgPSB4ID0+IGFwcGx5KF9hcnJfc2xpY2UsIGFzQXJyYXkoeCkpO1xuXG5jb25zdCBmb3JFYWNoID0gRVhQT1JULmZvckVhY2ggPSAoeCwgZm4sIGN0eCkgPT4ge1xuICAgIGlmIChpc0Z1bmN0aW9uKGZuKSkge1xuICAgICAgICBhcHBseShfYXJyX2ZvckVhY2gsIHgsIFtmbiwgY3R4XSk7XG4gICAgfVxufTtcblxuY29uc3QgZm9yT3duID0gRVhQT1JULmZvck93biA9ICh4LCBmbiwgY3R4KSA9PiB7XG4gICAgaWYgKGlzRnVuY3Rpb24oZm4pKSB7XG4gICAgICAgIGtleXMoeCkuZm9yRWFjaChrZXkgPT4gYXBwbHkoZm4sIGN0eCwgW3hba2V5XSwga2V5LCB4XSkpO1xuICAgIH1cbn07XG5cbmNvbnN0IGVhY2ggPSBFWFBPUlQuZWFjaCA9ICh4LCBmbiwgY3R4KSA9PiB7XG4gICAgaWYgKGhhc0xlbmd0aCh4KSkge1xuICAgICAgICBmb3JFYWNoKHgsIGZuLCBjdHgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvck93bih4LCBmbiwgY3R4KTtcbiAgICB9XG59O1xuXG5FWFBPUlQuYXNzaWduID0gKC4uLmV4dHMpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBleHRzLnNoaWZ0KCkgfHwge307XG5cbiAgICBlYWNoKGV4dHMsIGV4dCA9PiB7XG4gICAgICAgIGVhY2goZXh0LCAodmFsLCBrZXkpID0+IHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0YXJnZXQ7XG59O1xuXG5jb25zdCBtYXAgPSBFWFBPUlQubWFwID0gKHgsIGZuLCBjdHgpID0+IHtcbiAgICBjb25zdCByZXMgPSBbXTtcbiAgICBpZiAoaXNGdW5jdGlvbihmbikpIHtcbiAgICAgICAgZWFjaCh4LCAodmFsLCBpZHgpID0+IHJlcy5wdXNoKGFwcGx5KGZuLCBjdHgsIFt2YWwsIGlkeCwgeF0pKSk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59O1xuXG5jb25zdCBmaWx0ZXIgPSBFWFBPUlQuZmlsdGVyID0gKHgsIGZuLCBjdHgpID0+IHtcbiAgICBjb25zdCByZXMgPSBbXTtcbiAgICBpZiAoaXNGdW5jdGlvbihmbikpIHtcbiAgICAgICAgZWFjaCh4LCAodmFsLCBpZHgpID0+IHtcbiAgICAgICAgICAgIGlmIChhcHBseShmbiwgY3R4LCBbdmFsLCBpZHhdKSkge1xuICAgICAgICAgICAgICAgIHJlcy5wdXNoKHZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufTtcblxuRVhQT1JULnJlZHVjZSA9ICh4LCBmbiwgaW5pdCkgPT4gYXBwbHkoX2Fycl9yZWR1Y2UsIGFzQXJyYXkoeCksIFtmbiwgaW5pdF0pO1xuRVhQT1JULmNvbnRhaW5zID0gKHgsIGVsKSA9PiBhcHBseShfYXJyX2luZGV4T2YsIGFzQXJyYXkoeCksIFtlbF0pID49IDA7XG5FWFBPUlQuaW5kZXhPZiA9ICh4LCBlbCkgPT4gYXBwbHkoX2Fycl9pbmRleE9mLCBoYXNMZW5ndGgoeCkgPyB4IDogW10sIFtlbF0pO1xuRVhQT1JULmNvbXBhY3QgPSB4ID0+IGZpbHRlcih4LCB2YWwgPT4gISF2YWwpO1xuRVhQT1JULnBsdWNrID0gKHgsIHByb3ApID0+IG1hcCh4LCB2YWwgPT4gdmFsW3Byb3BdKTtcbmNvbnN0IGNtcCA9IEVYUE9SVC5jbXAgPSAoYSwgYikgPT4gYSA8IGIgPyAtMSA6IGEgPiBiID8gMSA6IDA7XG5FWFBPUlQuc29ydEJ5ID0gKGxpc3QsIHNlbGVjdG9yID0geCA9PiB4KSA9PiB0b0FycmF5KGxpc3QpLnNvcnQoKGEsIGIpID0+IGNtcChzZWxlY3RvcihhKSwgc2VsZWN0b3IoYikpKTtcblxuRVhQT1JULnVuaXEgPSB4ID0+IHtcbiAgICBjb25zdCBjYWNoZSA9IHt9O1xuICAgIHJldHVybiBmaWx0ZXIoeCwgdmFsID0+IHtcbiAgICAgICAgaWYgKCFoYXMoY2FjaGUsIHZhbCkpIHtcbiAgICAgICAgICAgIGNhY2hlW3ZhbF0gPSAxO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbkVYUE9SVC5hbGwgPSAoeCwgZm4pID0+IHtcbiAgICBmb3IgKGNvbnN0IHhpIG9mIGFzQXJyYXkoeCkpIHtcbiAgICAgICAgaWYgKCFmbih4aSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5cbkVYUE9SVC5hbnkgPSAoeCwgZm4pID0+IHtcbiAgICBmb3IgKGNvbnN0IHhpIG9mIGFzQXJyYXkoeCkpIHtcbiAgICAgICAgaWYgKGZuKHhpKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY29yZS5qc1xuICoqLyIsImNvbnN0IGNvcmUgPSByZXF1aXJlKCcuL2NvcmUnKTtcblxuY29uc3QgV0lOID0gZ2xvYmFsLndpbmRvdyB8fCB7ZG9jdW1lbnQ6IHtjcmVhdGVFbGVtZW50OiAoKSA9PiBudWxsfX07XG5jb25zdCBET0MgPSBXSU4uZG9jdW1lbnQ7XG5cbmNvbnN0IGNyZWF0ZUVsZW1lbnQgPSBuYW1lID0+IERPQy5jcmVhdGVFbGVtZW50KG5hbWUpO1xuY29uc3QgQ09OVEFJTkVSX0RJViA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgQ09OVEFJTkVSX1RBQkxFID0gY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbmNvbnN0IENPTlRBSU5FUl9UQk9EWSA9IGNyZWF0ZUVsZW1lbnQoJ3Rib2R5Jyk7XG5jb25zdCBDT05UQUlORVJfVFIgPSBjcmVhdGVFbGVtZW50KCd0cicpO1xuY29uc3QgQ09OVEFJTkVSX0NPTEdST1VQID0gY3JlYXRlRWxlbWVudCgnY29sZ3JvdXAnKTtcblxuY29uc3QgaXNJbnN0YW5jZU9mID0gY29yZS5pc0luc3RhbmNlT2Y7XG5cbmZ1bmN0aW9uIHB1Ymxpc2gob2JqLCBhcnIpIHtcbiAgICBjb3JlLmZvckVhY2goYXJyLCAoZWwsIGlkeCkgPT4gb2JqW2lkeF0gPSBlbCk7XG4gICAgb2JqLmxlbmd0aCA9IGFyci5sZW5ndGg7XG59XG5cbmZ1bmN0aW9uIGZpbmRDb250YWluZXIoc3RyKSB7XG4gICAgaWYgKC9ePHQoaGVhZHxib2R5fGZvb3QpfF48YyhhcHxvbGcpL2kudGVzdChzdHIpKSB7XG4gICAgICAgIHJldHVybiBDT05UQUlORVJfVEFCTEU7XG4gICAgfVxuICAgIGlmICgvXjxjb2wvaS50ZXN0KHN0cikpIHtcbiAgICAgICAgcmV0dXJuIENPTlRBSU5FUl9DT0xHUk9VUDtcbiAgICB9XG4gICAgaWYgKC9ePHRyL2kudGVzdChzdHIpKSB7XG4gICAgICAgIHJldHVybiBDT05UQUlORVJfVEJPRFk7XG4gICAgfVxuICAgIGlmICgvXjx0W2RoXS9pLnRlc3Qoc3RyKSkge1xuICAgICAgICByZXR1cm4gQ09OVEFJTkVSX1RSO1xuICAgIH1cbiAgICByZXR1cm4gQ09OVEFJTkVSX0RJVjtcbn1cblxuZnVuY3Rpb24gcGFyc2VIdG1sKHN0cikge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGZpbmRDb250YWluZXIoc3RyKTtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gc3RyO1xuICAgIGNvbnN0IHJlcyA9IGNvcmUudG9BcnJheShjb250YWluZXIuY2hpbGROb2Rlcyk7XG4gICAgY29yZS5lYWNoKHJlcywgZWwgPT4gY29udGFpbmVyLnJlbW92ZUNoaWxkKGVsKSk7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIHJldHVybiByZXM7XG59XG5cbmZ1bmN0aW9uIHF1ZXJ5QWxsKHNlbGVjdG9yLCBjb250ZXh0KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGNvcmUudG9BcnJheSgoY29udGV4dCB8fCBET0MpLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcbiAgICB9IGNhdGNoIChlcnIpIHsvKiovfVxuICAgIHJldHVybiBbXTtcbn1cblxuY29uc3QgaXNFbGVtZW50ID0geCA9PiBpc0luc3RhbmNlT2YoeCwgV0lOLkVsZW1lbnQpO1xuY29uc3QgaXNEb2N1bWVudCA9IHggPT4gaXNJbnN0YW5jZU9mKHgsIFdJTi5Eb2N1bWVudCk7XG5jb25zdCBpc1dpbmRvdyA9IHggPT4gY29yZS5pcyh4KSAmJiB4LndpbmRvdyA9PT0geCAmJiBpc0RvY3VtZW50KHguZG9jdW1lbnQpO1xuY29uc3QgaXNFbERvY1dpbiA9IHggPT4gaXNFbGVtZW50KHgpIHx8IGlzRG9jdW1lbnQoeCkgfHwgaXNXaW5kb3coeCk7XG5cbmNvbnN0IGFkZExpc3RlbmVyID0gKGVsLCB0eXBlLCBmbikgPT4gZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBmbik7XG5jb25zdCByZW1vdmVMaXN0ZW5lciA9IChlbCwgdHlwZSwgZm4pID0+IGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgZm4pO1xuXG5mdW5jdGlvbiBvblJlYWR5KGZuKSB7XG4gICAgaWYgKC9eKGl8Y3xsb2FkZSkvLnRlc3QoRE9DLnJlYWR5U3RhdGUpKSB7XG4gICAgICAgIGZuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYWRkTGlzdGVuZXIoRE9DLCAnRE9NQ29udGVudExvYWRlZCcsIGZuKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG9uUmVzaXplKGZuKSB7XG4gICAgYWRkTGlzdGVuZXIoV0lOLCAncmVzaXplJywgZm4pO1xufVxuXG5mdW5jdGlvbiBvblByaW50KGJlZm9yZSwgYWZ0ZXIpIHtcbiAgICBXSU4ubWF0Y2hNZWRpYSgncHJpbnQnKS5hZGRMaXN0ZW5lcihtcWwgPT4ge1xuICAgICAgICBpZiAobXFsLm1hdGNoZXMpIHtcbiAgICAgICAgICAgIGJlZm9yZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWZ0ZXIoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBkb20oYXJnKSB7XG4gICAgaWYgKGlzSW5zdGFuY2VPZihhcmcsIGRvbSkpIHtcbiAgICAgICAgcmV0dXJuIGFyZztcbiAgICB9XG5cbiAgICBsZXQgZWxzO1xuICAgIGlmIChjb3JlLmlzU3RyaW5nKGFyZykpIHtcbiAgICAgICAgYXJnID0gYXJnLnRyaW0oKTtcbiAgICAgICAgZWxzID0gYXJnWzBdID09PSAnPCcgPyBwYXJzZUh0bWwoYXJnKSA6IHF1ZXJ5QWxsKGFyZyk7XG4gICAgfSBlbHNlIGlmIChpc0VsRG9jV2luKGFyZykpIHtcbiAgICAgICAgZWxzID0gW2FyZ107XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZWxzID0gY29yZS5oYXNMZW5ndGgoYXJnKSA/IGFyZyA6IFthcmddO1xuICAgIH1cbiAgICBlbHMgPSBjb3JlLmZpbHRlcihlbHMsIGlzRWxEb2NXaW4pO1xuXG4gICAgY29uc3QgaW5zdCA9IE9iamVjdC5jcmVhdGUoZG9tLnByb3RvdHlwZSk7XG4gICAgcHVibGlzaChpbnN0LCBlbHMpO1xuICAgIHJldHVybiBpbnN0O1xufVxuXG5kb20ucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBkb20sXG5cbiAgICBlYWNoKGZuKSB7XG4gICAgICAgIGNvcmUuZWFjaCh0aGlzLCBmbik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBtYXAoZm4pIHtcbiAgICAgICAgcmV0dXJuIGNvcmUubWFwKHRoaXMsIGZuKTtcbiAgICB9LFxuXG4gICAgZmluZChzZWxlY3Rvcikge1xuICAgICAgICBsZXQgZWxzID0gW107XG4gICAgICAgIHRoaXMuZWFjaChlbCA9PiB7XG4gICAgICAgICAgICBlbHMgPSBlbHMuY29uY2F0KHF1ZXJ5QWxsKHNlbGVjdG9yLCBlbCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGRvbShlbHMpO1xuICAgIH0sXG5cbiAgICBvbih0eXBlLCBmbikge1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGVsID0+IGFkZExpc3RlbmVyKGVsLCB0eXBlLCBmbikpO1xuICAgIH0sXG5cbiAgICBvZmYodHlwZSwgZm4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChlbCA9PiByZW1vdmVMaXN0ZW5lcihlbCwgdHlwZSwgZm4pKTtcbiAgICB9LFxuXG4gICAgYXR0cihrZXksIHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sZW5ndGggPyB0aGlzWzBdLmdldEF0dHJpYnV0ZShrZXkpIDogdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZWwgPT4gZWwuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpKTtcbiAgICB9LFxuXG4gICAgcm1BdHRyKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGVsID0+IGVsLnJlbW92ZUF0dHJpYnV0ZShrZXkpKTtcbiAgICB9LFxuXG4gICAgdmFsKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sZW5ndGggPyB0aGlzWzBdLnZhbHVlIDogdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZWwgPT4ge1xuICAgICAgICAgICAgZWwudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGh0bWwoc3RyKSB7XG4gICAgICAgIGlmIChzdHIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFwKGVsID0+IGVsLmlubmVySFRNTCkuam9pbignJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChlbCA9PiB7XG4gICAgICAgICAgICBlbC5pbm5lckhUTUwgPSBzdHI7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICB0ZXh0KHN0cikge1xuICAgICAgICBpZiAoc3RyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hcChlbCA9PiBlbC50ZXh0Q29udGVudCkuam9pbignJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChlbCA9PiB7XG4gICAgICAgICAgICBlbC50ZXh0Q29udGVudCA9IHN0cjtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGNscigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHRtbCgnJyk7XG4gICAgfSxcblxuICAgIHJtKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGVsID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGVsLnBhcmVudE5vZGU7XG4gICAgICAgICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgICAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKGVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIHJwbChhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChlbCA9PiB7XG4gICAgICAgICAgICBlbC5vdXRlckhUTUwgPSBkb20oYXJnKS5tYXAocnBsRWwgPT4gcnBsRWwub3V0ZXJIVE1MKS5qb2luKCcnKTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGFwcChhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChlbCA9PiB7XG4gICAgICAgICAgICBkb20oYXJnKS5lYWNoKGNoaWxkID0+IGVsLmFwcGVuZENoaWxkKGNoaWxkKSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBhcHBUbyhhcmcpIHtcbiAgICAgICAgZG9tKGFyZykuYXBwKHRoaXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgcHJlKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGVsID0+IHtcbiAgICAgICAgICAgIGRvbShhcmcpLmVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0Q2hpbGQgPSBlbC5maXJzdENoaWxkO1xuICAgICAgICAgICAgICAgIGlmICghZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICBlbC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWwuaW5zZXJ0QmVmb3JlKGNoaWxkLCBmaXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIHByZVRvKGFyZykge1xuICAgICAgICBkb20oYXJnKS5wcmUodGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBjbHMoLi4ubmFtZXMpIHtcbiAgICAgICAgaWYgKCFuYW1lcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxlbmd0aCA/IGNvcmUudG9BcnJheSh0aGlzWzBdLmNsYXNzTGlzdCkgOiBbXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVhY2goZWwgPT4gZWwuY2xhc3NOYW1lID0gJycpO1xuICAgICAgICByZXR1cm4gdGhpcy5hZGRDbHMoLi4ubmFtZXMpO1xuICAgIH0sXG5cbiAgICBoYXNDbHMobmFtZSkge1xuICAgICAgICByZXR1cm4gY29yZS5hbGwodGhpcywgZWwgPT4gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKG5hbWUpKTtcbiAgICB9LFxuXG4gICAgYWRkQ2xzKC4uLm5hbWVzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZWwgPT4ge1xuICAgICAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIG5hbWVzKSB7XG4gICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIHJtQ2xzKC4uLm5hbWVzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZWwgPT4ge1xuICAgICAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIG5hbWVzKSB7XG4gICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgaXNFbGVtZW50LFxuICAgIGlzRG9jdW1lbnQsXG4gICAgaXNXaW5kb3csXG4gICAgaXNFbERvY1dpbixcbiAgICBvblJlYWR5LFxuICAgIG9uUmVzaXplLFxuICAgIG9uUHJpbnQsXG4gICAgZG9tXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9kb20uanNcbiAqKi8iLCJjb25zdCBjb3JlID0gcmVxdWlyZSgnLi9jb3JlJyk7XG5cbmNvbnN0IGVhY2ggPSBjb3JlLmVhY2g7XG5jb25zdCBtYXAgPSBjb3JlLm1hcDtcbmNvbnN0IGFzc2lnbiA9IGNvcmUuYXNzaWduO1xuY29uc3QgY29udGFpbnMgPSBjb3JlLmNvbnRhaW5zO1xuY29uc3QgaXNGdW5jdGlvbiA9IGNvcmUuaXNGdW5jdGlvbjtcbmNvbnN0IGlzU3RyaW5nID0gY29yZS5pc1N0cmluZztcbmNvbnN0IHRvQXJyYXkgPSBjb3JlLnRvQXJyYXk7XG5cbmNvbnN0IFdJTiA9IGdsb2JhbC53aW5kb3cgfHwge307XG5jb25zdCBJTlBVVF9FTFMgPSBbJ2lucHV0JywgJ3NlbGVjdCcsICd0ZXh0YXJlYSddO1xuY29uc3QgUkVfTkFNRSA9IC9eW19hLXpBLVpdW19hLXpBLVowLTldKiQvO1xuY29uc3QgUkVfVEVNUExBVEUgPSAvXFxbKFtfYS16QS1aXVtfYS16QS1aMC05XSopXFxdL2c7XG5jb25zdCBBVFRSX0tFWSA9ICdkYXRhLXRwbCc7XG5cbmNvbnN0IGNyZWF0ZU9iaiA9IChwcm90byA9IG51bGwpID0+IE9iamVjdC5jcmVhdGUocHJvdG8pO1xuY29uc3QgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5jb25zdCBpc0lucHV0RWwgPSBlbCA9PiBjb250YWlucyhJTlBVVF9FTFMsIGVsLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpO1xuY29uc3QgaXNOYW1lID0geCA9PiBpc1N0cmluZyh4KSAmJiBSRV9OQU1FLnRlc3QoeCk7XG5cbmZ1bmN0aW9uIGRlZmluZUNvbnN0KGluc3QsIG5hbWUsIHZhbHVlKSB7XG4gICAgZGVmaW5lUHJvcGVydHkoaW5zdCwgbmFtZSwge3ZhbHVlfSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUVscyhpbnN0LCBuYW1lLCBlbHMpIHtcbiAgICBpZiAoIWVscykge1xuICAgICAgICBlbHMgPSBpbnN0Ll9lbHNbbmFtZV07XG4gICAgfVxuICAgIGNvbnN0IHZhbHVlID0gaW5zdC52YWxbbmFtZV07XG4gICAgZWFjaChlbHMsIGVsID0+IHtcbiAgICAgICAgY29uc3QgcHJvcCA9IGlzSW5wdXRFbChlbCkgPyAndmFsdWUnIDogJ2lubmVySFRNTCc7XG4gICAgICAgIGlmIChlbFtwcm9wXSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIGVsW3Byb3BdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY2FsbExpc3RlbmVycyhpbnN0LCBuYW1lKSB7XG4gICAgY29uc3QgdmFsdWUgPSBpbnN0LnZhbFtuYW1lXTtcbiAgICBlYWNoKGluc3QuX2Zuc1tuYW1lXSwgZm4gPT4ge1xuICAgICAgICBpZiAoaXNGdW5jdGlvbihmbikpIHtcbiAgICAgICAgICAgIGZuKHZhbHVlLCBuYW1lLCBpbnN0KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRWYWwoaW5zdCwgbmFtZSkge1xuICAgIGxldCB2YWx1ZSA9IG5hbWU7XG5cbiAgICBkZWZpbmVQcm9wZXJ0eShpbnN0LnZhbCwgbmFtZSwge1xuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBzZXQ6IHggPT4ge1xuICAgICAgICAgICAgeCA9IFN0cmluZyh4KTtcbiAgICAgICAgICAgIGlmICh4ICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0geDtcbiAgICAgICAgICAgICAgICB1cGRhdGVFbHMoaW5zdCwgbmFtZSk7XG4gICAgICAgICAgICAgICAgY2FsbExpc3RlbmVycyhpbnN0LCBuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZ2V0OiAoKSA9PiB2YWx1ZVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBlbnN1cmVOYW1lKGluc3QsIG5hbWUpIHtcbiAgICBpZiAoIWlzTmFtZShuYW1lKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICghKG5hbWUgaW4gaW5zdC52YWwpKSB7XG4gICAgICAgIGFkZFZhbChpbnN0LCBuYW1lKTtcbiAgICB9XG4gICAgaWYgKCEobmFtZSBpbiBpbnN0Ll9lbHMpKSB7XG4gICAgICAgIGRlZmluZUNvbnN0KGluc3QuX2VscywgbmFtZSwgW10pO1xuICAgIH1cbiAgICBpZiAoIShuYW1lIGluIGluc3QuX2ZucykpIHtcbiAgICAgICAgZGVmaW5lQ29uc3QoaW5zdC5fZm5zLCBuYW1lLCBbXSk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBmaW5kQWxsVGV4dE5vZGVzKG5vZGUpIHtcbiAgICBjb25zdCB0ZXh0bm9kZXMgPSBbXS5jb25jYXQoLi4ubWFwKG5vZGUuY2hpbGROb2RlcywgbiA9PiBmaW5kQWxsVGV4dE5vZGVzKG4pKSk7XG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IFdJTi5Ob2RlLlRFWFRfTk9ERSkge1xuICAgICAgICB0ZXh0bm9kZXMucHVzaChub2RlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRleHRub2Rlcztcbn1cblxuZnVuY3Rpb24gY29tcGlsZVRleHROb2RlKG5vZGUpIHtcbiAgICBjb25zdCBkaXYgPSBXSU4uZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmlubmVySFRNTCA9IG5vZGUubm9kZVZhbHVlLnJlcGxhY2UoUkVfVEVNUExBVEUsIChtYXRjaCwgbmFtZSkgPT4gYDxzcGFuICR7QVRUUl9LRVl9PScke25hbWV9Jz48L3NwYW4+YCk7XG4gICAgaWYgKGRpdi5jaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgICAgIGVhY2godG9BcnJheShkaXYuY2hpbGROb2RlcyksIG4gPT4ge1xuICAgICAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShuLCBub2RlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChub2RlKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGJpbmRlcigpIHtcbiAgICBjb25zdCBpbnN0ID0gY3JlYXRlT2JqKGJpbmRlci5wcm90b3R5cGUpO1xuICAgIGRlZmluZUNvbnN0KGluc3QsICdfZWxzJywgY3JlYXRlT2JqKCkpO1xuICAgIGRlZmluZUNvbnN0KGluc3QsICdfZm5zJywgY3JlYXRlT2JqKCkpO1xuICAgIGRlZmluZUNvbnN0KGluc3QsICd2YWwnLCBjcmVhdGVPYmooKSk7XG4gICAgcmV0dXJuIGluc3Q7XG59XG5cbmFzc2lnbihiaW5kZXIucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IGJpbmRlcixcblxuICAgIGxvZygpIHtcbiAgICAgICAgY29uc3QgcGxhaW4gPSBjcmVhdGVPYmooKTtcbiAgICAgICAgZWFjaCh0aGlzLnZhbCwgKHZhbHVlLCBuYW1lKSA9PiB7XG4gICAgICAgICAgICBwbGFpbltuYW1lXSA9IHtcbiAgICAgICAgICAgICAgICB2YWw6IHZhbHVlLFxuICAgICAgICAgICAgICAgIGVsczogdGhpcy5fZWxzW25hbWVdLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBmbnM6IHRoaXMuX2Zuc1tuYW1lXS5sZW5ndGhcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoY29uc29sZS50YWJsZSkge1xuICAgICAgICAgICAgY29uc29sZS50YWJsZShwbGFpbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwbGFpbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGFkZChvYmopIHtcbiAgICAgICAgZWFjaChvYmosIChlbHMsIG5hbWUpID0+IHtcbiAgICAgICAgICAgIGlmIChlbnN1cmVOYW1lKHRoaXMsIG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlRWxzKHRoaXMsIG5hbWUsIGVscyk7XG4gICAgICAgICAgICAgICAgZWFjaChlbHMsIGVsID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb250YWlucyh0aGlzLl9lbHNbbmFtZV0sIGVsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZWxzW25hbWVdLnB1c2goZWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzSW5wdXRFbChlbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHRoaXMudmFsW25hbWVdID0gZWwudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHRoaXMudmFsW25hbWVdID0gZWwudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgc2V0KG9iaikge1xuICAgICAgICBlYWNoKG9iaiwgKHZhbHVlLCBuYW1lKSA9PiB7XG4gICAgICAgICAgICBpZiAoZW5zdXJlTmFtZSh0aGlzLCBuYW1lKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsW25hbWVdID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgb24obmFtZSwgZm4pIHtcbiAgICAgICAgaWYgKGVuc3VyZU5hbWUodGhpcywgbmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMuX2Zuc1tuYW1lXS5wdXNoKGZuKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgY29sbGVjdChjb250YWluZXJFbCwgc3BsaXQpIHtcbiAgICAgICAgaWYgKCFjb250YWluZXJFbCB8fCAhaXNGdW5jdGlvbihjb250YWluZXJFbC5xdWVyeVNlbGVjdG9yQWxsKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNwbGl0KSB7XG4gICAgICAgICAgICBlYWNoKGZpbmRBbGxUZXh0Tm9kZXMoY29udGFpbmVyRWwpLCBjb21waWxlVGV4dE5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVscyA9IHRvQXJyYXkoY29udGFpbmVyRWwucXVlcnlTZWxlY3RvckFsbChgWyR7QVRUUl9LRVl9XWApKTtcbiAgICAgICAgZWxzLnVuc2hpZnQoY29udGFpbmVyRWwpO1xuICAgICAgICBlYWNoKGVscywgZWwgPT4ge1xuICAgICAgICAgICAgaWYgKGlzRnVuY3Rpb24oZWwuZ2V0QXR0cmlidXRlKSAmJiBlbC5nZXRBdHRyaWJ1dGUoQVRUUl9LRVkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGQoe1tlbC5nZXRBdHRyaWJ1dGUoQVRUUl9LRVkpXTogW2VsXX0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGJpbmRlclxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYmluZGVyLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==