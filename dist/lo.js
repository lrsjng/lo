/* lo v0.8.0 - © Lars Jung */
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
	
	module.exports = Object.assign({}, __webpack_require__(/*! ./core */ 1), __webpack_require__(/*! ./dom */ 2), __webpack_require__(/*! ./binder */ 3));

/***/ },
/* 1 */
/*!*****************!*\
  !*** ./core.js ***!
  \*****************/
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
	
	var isArray = EXPORT.isArray = _arr_isArray;
	var isArguments = EXPORT.isArguments = _is_x_fn('Arguments');
	var isBoolean = EXPORT.isBoolean = _is_x_fn('Boolean');
	var isDate = EXPORT.isDate = _is_x_fn('Date');
	var isError = EXPORT.isError = _is_x_fn('Error');
	var isFunction = EXPORT.isFunction = _is_x_fn('Function');
	var isNumber = EXPORT.isNumber = _is_x_fn('Number');
	var isObject = EXPORT.isObject = _is_x_fn('Object');
	var isRegExp = EXPORT.isRegExp = _is_x_fn('RegExp');
	var isString = EXPORT.isString = _is_x_fn('String');
	
	var isNumeric = EXPORT.isNumeric = function (x) {
	    return isNumber(x) && isFinite(x);
	};
	var isPlainObject = EXPORT.isPlainObject = function (x) {
	    return isObject(x) && _obj_getProto(x) === _obj_proto;
	};
	var isTypeOf = EXPORT.isTypeOf = function (x, typ) {
	    return (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === typ;
	};
	var isInstanceOf = EXPORT.isInstanceOf = function (x, typ) {
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
	var size = EXPORT.size = function (x) {
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
	
	var assign = EXPORT.assign = function () {
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
	
	var reduce = EXPORT.reduce = function (x, fn, init) {
	    return apply(_arr_reduce, asArray(x), [fn, init]);
	};
	var contains = EXPORT.contains = function (x, el) {
	    return apply(_arr_indexOf, asArray(x), [el]) >= 0;
	};
	var indexOf = EXPORT.indexOf = function (x, el) {
	    return apply(_arr_indexOf, hasLength(x) ? x : [], [el]);
	};
	var compact = EXPORT.compact = function (x) {
	    return filter(x, function (val) {
	        return !!val;
	    });
	};
	var pluck = EXPORT.pluck = function (x, prop) {
	    return map(x, function (val) {
	        return val[prop];
	    });
	};
	var cmp = EXPORT.cmp = function (a, b) {
	    return a < b ? -1 : a > b ? 1 : 0;
	};
	var sortBy = EXPORT.sortBy = function (list) {
	    var selector = arguments.length <= 1 || arguments[1] === undefined ? function (x) {
	        return x;
	    } : arguments[1];
	    return toArray(list).sort(function (a, b) {
	        return cmp(selector(a), selector(b));
	    });
	};
	
	var uniq = EXPORT.uniq = function (x) {
	    var cache = {};
	    return filter(x, function (val) {
	        if (!has(cache, val)) {
	            cache[val] = 1;
	            return true;
	        }
	    });
	};
	
	var all = EXPORT.all = function (x, fn) {
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
	
	var any = EXPORT.any = function (x, fn) {
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
/*!****************!*\
  !*** ./dom.js ***!
  \****************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var core = __webpack_require__(/*! ./core */ 1);
	
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
/*!*******************!*\
  !*** ./binder.js ***!
  \*******************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var core = __webpack_require__(/*! ./core */ 1);
	
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
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZThiYTA1YTQ1NTQ2ZWM4YjljYjgiLCJ3ZWJwYWNrOi8vLy4vX19UTVBfV0VCUEFDS19JTl9faW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9kb20uanMiLCJ3ZWJwYWNrOi8vLy4vYmluZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN0Q0EsT0FBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFDN0IsbUJBQU8sQ0FBQyxlQUFRLENBQUMsRUFDakIsbUJBQU8sQ0FBQyxjQUFPLENBQUMsRUFDaEIsbUJBQU8sQ0FBQyxpQkFBVSxDQUFDLENBQ3RCLEM7Ozs7Ozs7Ozs7Ozs7QUNKRCxLQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQzs7QUFFbkMsS0FBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztBQUM5QixLQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDO0FBQzVDLEtBQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7QUFDcEMsS0FBTSxhQUFhLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQztBQUMxQyxLQUFNLFFBQVEsR0FBRyxVQUFVLENBQUMsY0FBYyxDQUFDOztBQUUzQyxLQUFNLFlBQVksR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO0FBQ25DLEtBQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUM7QUFDbkMsS0FBTSxZQUFZLEdBQUcsVUFBVSxD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QUFDYixXQUFNLEVBQU4sTUFBTTtFQUNULEMiLCJmaWxlIjoiX19UTVBfV0VCUEFDS19PVVRfX2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBlOGJhMDVhNDU1NDZlYzhiOWNiOFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmFzc2lnbih7fSxcbiAgICByZXF1aXJlKCcuL2NvcmUnKSxcbiAgICByZXF1aXJlKCcuL2RvbScpLFxuICAgIHJlcXVpcmUoJy4vYmluZGVyJylcbik7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL19fVE1QX1dFQlBBQ0tfSU5fX2luZGV4LmpzXG4gKiovIiwiY29uc3QgRVhQT1JUID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuY29uc3QgX29ial9rZXlzID0gT2JqZWN0LmtleXM7XG5jb25zdCBfb2JqX2dldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuY29uc3QgX29ial9wcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5jb25zdCBfb2JqX3RvU3RyaW5nID0gX29ial9wcm90by50b1N0cmluZztcbmNvbnN0IF9vYmpfaGFzID0gX29ial9wcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuY29uc3QgX2Fycl9pc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcbmNvbnN0IF9hcnJfcHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5jb25zdCBfYXJyX2luZGV4T2YgPSBfYXJyX3Byb3RvLmluZGV4T2Y7XG5jb25zdCBfYXJyX2ZvckVhY2ggPSBfYXJyX3Byb3RvLmZvckVhY2g7XG5jb25zdCBfYXJyX3JlZHVjZSA9IF9hcnJfcHJvdG8ucmVkdWNlO1xuY29uc3QgX2Fycl9zbGljZSA9IF9hcnJfcHJvdG8uc2xpY2U7XG5cbmNvbnN0IG9rID0gRVhQT1JULm9rID0gKGZ1bmN0aW9uICgpIHsndXNlIHN0cmljdCc7IHJldHVybiAhdGhpczt9KCkpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGZ1bmMtbmFtZXMsIHN0cmljdCwgbm8taW52YWxpZC10aGlzXG5pZiAoIW9rKSB7XG4gICAgaWYgKGdsb2JhbC53aW5kb3cpIHtcbiAgICAgICAgZ2xvYmFsLndpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NOYW1lICs9ICcgbm8tbG8nO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ25vLWxvJyk7XG59XG5cbmNvbnN0IGFwcGx5ID0gKGZuLCBvYmosIGFyZ3MpID0+IGZuLmFwcGx5KG9iaiwgYXJncyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcHJlZmVyLXJlZmxlY3RcblxuZnVuY3Rpb24gX2lzX3hfZm4odHlwZSkge1xuICAgIHJldHVybiB4ID0+IGFwcGx5KF9vYmpfdG9TdHJpbmcsIHgpID09PSBgW29iamVjdCAke3R5cGV9XWA7XG59XG5cbmNvbnN0IGlzQXJyYXkgPSBFWFBPUlQuaXNBcnJheSA9IF9hcnJfaXNBcnJheTtcbmNvbnN0IGlzQXJndW1lbnRzID0gRVhQT1JULmlzQXJndW1lbnRzID0gX2lzX3hfZm4oJ0FyZ3VtZW50cycpO1xuY29uc3QgaXNCb29sZWFuID0gRVhQT1JULmlzQm9vbGVhbiA9IF9pc194X2ZuKCdCb29sZWFuJyk7XG5jb25zdCBpc0RhdGUgPSBFWFBPUlQuaXNEYXRlID0gX2lzX3hfZm4oJ0RhdGUnKTtcbmNvbnN0IGlzRXJyb3IgPSBFWFBPUlQuaXNFcnJvciA9IF9pc194X2ZuKCdFcnJvcicpO1xuY29uc3QgaXNGdW5jdGlvbiA9IEVYUE9SVC5pc0Z1bmN0aW9uID0gX2lzX3hfZm4oJ0Z1bmN0aW9uJyk7XG5jb25zdCBpc051bWJlciA9IEVYUE9SVC5pc051bWJlciA9IF9pc194X2ZuKCdOdW1iZXInKTtcbmNvbnN0IGlzT2JqZWN0ID0gRVhQT1JULmlzT2JqZWN0ID0gX2lzX3hfZm4oJ09iamVjdCcpO1xuY29uc3QgaXNSZWdFeHAgPSBFWFBPUlQuaXNSZWdFeHAgPSBfaXNfeF9mbignUmVnRXhwJyk7XG5jb25zdCBpc1N0cmluZyA9IEVYUE9SVC5pc1N0cmluZyA9IF9pc194X2ZuKCdTdHJpbmcnKTtcblxuY29uc3QgaXNOdW1lcmljID0gRVhQT1JULmlzTnVtZXJpYyA9IHggPT4gaXNOdW1iZXIoeCkgJiYgaXNGaW5pdGUoeCk7XG5jb25zdCBpc1BsYWluT2JqZWN0ID0gRVhQT1JULmlzUGxhaW5PYmplY3QgPSB4ID0+IGlzT2JqZWN0KHgpICYmIF9vYmpfZ2V0UHJvdG8oeCkgPT09IF9vYmpfcHJvdG87XG5jb25zdCBpc1R5cGVPZiA9IEVYUE9SVC5pc1R5cGVPZiA9ICh4LCB0eXApID0+IHR5cGVvZiB4ID09PSB0eXA7XG5jb25zdCBpc0luc3RhbmNlT2YgPSBFWFBPUlQuaXNJbnN0YW5jZU9mID0gKHgsIHR5cCkgPT4geCA/IHggaW5zdGFuY2VvZiB0eXAgOiBmYWxzZTtcbmNvbnN0IGlzID0gRVhQT1JULmlzID0geCA9PiB4ICE9PSB1bmRlZmluZWQgJiYgeCAhPT0gbnVsbDtcbmNvbnN0IGhhcyA9IEVYUE9SVC5oYXMgPSAoeCwgcHJvcCkgPT4gaXMoeCkgJiYgYXBwbHkoX29ial9oYXMsIHgsIFtwcm9wXSk7XG5jb25zdCBrZXlzID0gRVhQT1JULmtleXMgPSB4ID0+IGlzT2JqZWN0KHgpID8gX29ial9rZXlzKHgpIDogW107XG5jb25zdCB2YWx1ZXMgPSBFWFBPUlQudmFsdWVzID0geCA9PiBrZXlzKHgpLm1hcChrZXkgPT4geFtrZXldKTtcbmNvbnN0IGhhc0xlbmd0aCA9IEVYUE9SVC5oYXNMZW5ndGggPSB4ID0+IGlzKHgpICYmIGlzTnVtZXJpYyh4Lmxlbmd0aCk7XG5jb25zdCBzaXplID0gRVhQT1JULnNpemUgPSB4ID0+IGhhc0xlbmd0aCh4KSA/IHgubGVuZ3RoIDoga2V5cyh4KS5sZW5ndGg7XG5jb25zdCBhc0FycmF5ID0gRVhQT1JULmFzQXJyYXkgPSB4ID0+IGhhc0xlbmd0aCh4KSA/IHggOiB2YWx1ZXMoeCk7XG5jb25zdCB0b0FycmF5ID0gRVhQT1JULnRvQXJyYXkgPSB4ID0+IGFwcGx5KF9hcnJfc2xpY2UsIGFzQXJyYXkoeCkpO1xuXG5jb25zdCBmb3JFYWNoID0gRVhQT1JULmZvckVhY2ggPSAoeCwgZm4sIGN0eCkgPT4ge1xuICAgIGlmIChpc0Z1bmN0aW9uKGZuKSkge1xuICAgICAgICBhcHBseShfYXJyX2ZvckVhY2gsIHgsIFtmbiwgY3R4XSk7XG4gICAgfVxufTtcblxuY29uc3QgZm9yT3duID0gRVhQT1JULmZvck93biA9ICh4LCBmbiwgY3R4KSA9PiB7XG4gICAgaWYgKGlzRnVuY3Rpb24oZm4pKSB7XG4gICAgICAgIGtleXMoeCkuZm9yRWFjaChrZXkgPT4gYXBwbHkoZm4sIGN0eCwgW3hba2V5XSwga2V5LCB4XSkpO1xuICAgIH1cbn07XG5cbmNvbnN0IGVhY2ggPSBFWFBPUlQuZWFjaCA9ICh4LCBmbiwgY3R4KSA9PiB7XG4gICAgaWYgKGhhc0xlbmd0aCh4KSkge1xuICAgICAgICBmb3JFYWNoKHgsIGZuLCBjdHgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvck93bih4LCBmbiwgY3R4KTtcbiAgICB9XG59O1xuXG5jb25zdCBhc3NpZ24gPSBFWFBPUlQuYXNzaWduID0gKC4uLmV4dHMpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBleHRzLnNoaWZ0KCkgfHwge307XG5cbiAgICBlYWNoKGV4dHMsIGV4dCA9PiB7XG4gICAgICAgIGVhY2goZXh0LCAodmFsLCBrZXkpID0+IHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0YXJnZXQ7XG59O1xuXG5jb25zdCBtYXAgPSBFWFBPUlQubWFwID0gKHgsIGZuLCBjdHgpID0+IHtcbiAgICBjb25zdCByZXMgPSBbXTtcbiAgICBpZiAoaXNGdW5jdGlvbihmbikpIHtcbiAgICAgICAgZWFjaCh4LCAodmFsLCBpZHgpID0+IHJlcy5wdXNoKGFwcGx5KGZuLCBjdHgsIFt2YWwsIGlkeCwgeF0pKSk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59O1xuXG5jb25zdCBmaWx0ZXIgPSBFWFBPUlQuZmlsdGVyID0gKHgsIGZuLCBjdHgpID0+IHtcbiAgICBjb25zdCByZXMgPSBbXTtcbiAgICBpZiAoaXNGdW5jdGlvbihmbikpIHtcbiAgICAgICAgZWFjaCh4LCAodmFsLCBpZHgpID0+IHtcbiAgICAgICAgICAgIGlmIChhcHBseShmbiwgY3R4LCBbdmFsLCBpZHhdKSkge1xuICAgICAgICAgICAgICAgIHJlcy5wdXNoKHZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufTtcblxuY29uc3QgcmVkdWNlID0gRVhQT1JULnJlZHVjZSA9ICh4LCBmbiwgaW5pdCkgPT4gYXBwbHkoX2Fycl9yZWR1Y2UsIGFzQXJyYXkoeCksIFtmbiwgaW5pdF0pO1xuY29uc3QgY29udGFpbnMgPSBFWFBPUlQuY29udGFpbnMgPSAoeCwgZWwpID0+IGFwcGx5KF9hcnJfaW5kZXhPZiwgYXNBcnJheSh4KSwgW2VsXSkgPj0gMDtcbmNvbnN0IGluZGV4T2YgPSBFWFBPUlQuaW5kZXhPZiA9ICh4LCBlbCkgPT4gYXBwbHkoX2Fycl9pbmRleE9mLCBoYXNMZW5ndGgoeCkgPyB4IDogW10sIFtlbF0pO1xuY29uc3QgY29tcGFjdCA9IEVYUE9SVC5jb21wYWN0ID0geCA9PiBmaWx0ZXIoeCwgdmFsID0+ICEhdmFsKTtcbmNvbnN0IHBsdWNrID0gRVhQT1JULnBsdWNrID0gKHgsIHByb3ApID0+IG1hcCh4LCB2YWwgPT4gdmFsW3Byb3BdKTtcbmNvbnN0IGNtcCA9IEVYUE9SVC5jbXAgPSAoYSwgYikgPT4gYSA8IGIgPyAtMSA6IGEgPiBiID8gMSA6IDA7XG5jb25zdCBzb3J0QnkgPSBFWFBPUlQuc29ydEJ5ID0gKGxpc3QsIHNlbGVjdG9yID0geCA9PiB4KSA9PiB0b0FycmF5KGxpc3QpLnNvcnQoKGEsIGIpID0+IGNtcChzZWxlY3RvcihhKSwgc2VsZWN0b3IoYikpKTtcblxuY29uc3QgdW5pcSA9IEVYUE9SVC51bmlxID0geCA9PiB7XG4gICAgY29uc3QgY2FjaGUgPSB7fTtcbiAgICByZXR1cm4gZmlsdGVyKHgsIHZhbCA9PiB7XG4gICAgICAgIGlmICghaGFzKGNhY2hlLCB2YWwpKSB7XG4gICAgICAgICAgICBjYWNoZVt2YWxdID0gMTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG5jb25zdCBhbGwgPSBFWFBPUlQuYWxsID0gKHgsIGZuKSA9PiB7XG4gICAgZm9yIChjb25zdCB4aSBvZiBhc0FycmF5KHgpKSB7XG4gICAgICAgIGlmICghZm4oeGkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59O1xuXG5jb25zdCBhbnkgPSBFWFBPUlQuYW55ID0gKHgsIGZuKSA9PiB7XG4gICAgZm9yIChjb25zdCB4aSBvZiBhc0FycmF5KHgpKSB7XG4gICAgICAgIGlmIChmbih4aSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2NvcmUuanNcbiAqKi8iLCJjb25zdCBjb3JlID0gcmVxdWlyZSgnLi9jb3JlJyk7XG5cbmNvbnN0IFdJTiA9IGdsb2JhbC53aW5kb3cgfHwge2RvY3VtZW50OiB7Y3JlYXRlRWxlbWVudDogKCkgPT4gbnVsbH19O1xuY29uc3QgRE9DID0gV0lOLmRvY3VtZW50O1xuXG5jb25zdCBjcmVhdGVFbGVtZW50ID0gbmFtZSA9PiBET0MuY3JlYXRlRWxlbWVudChuYW1lKTtcbmNvbnN0IENPTlRBSU5FUl9ESVYgPSBjcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IENPTlRBSU5FUl9UQUJMRSA9IGNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG5jb25zdCBDT05UQUlORVJfVEJPRFkgPSBjcmVhdGVFbGVtZW50KCd0Ym9keScpO1xuY29uc3QgQ09OVEFJTkVSX1RSID0gY3JlYXRlRWxlbWVudCgndHInKTtcbmNvbnN0IENPTlRBSU5FUl9DT0xHUk9VUCA9IGNyZWF0ZUVsZW1lbnQoJ2NvbGdyb3VwJyk7XG5cbmNvbnN0IGlzSW5zdGFuY2VPZiA9IGNvcmUuaXNJbnN0YW5jZU9mO1xuXG5mdW5jdGlvbiBwdWJsaXNoKG9iaiwgYXJyKSB7XG4gICAgY29yZS5mb3JFYWNoKGFyciwgKGVsLCBpZHgpID0+IG9ialtpZHhdID0gZWwpO1xuICAgIG9iai5sZW5ndGggPSBhcnIubGVuZ3RoO1xufVxuXG5mdW5jdGlvbiBmaW5kQ29udGFpbmVyKHN0cikge1xuICAgIGlmICgvXjx0KGhlYWR8Ym9keXxmb290KXxePGMoYXB8b2xnKS9pLnRlc3Qoc3RyKSkge1xuICAgICAgICByZXR1cm4gQ09OVEFJTkVSX1RBQkxFO1xuICAgIH1cbiAgICBpZiAoL148Y29sL2kudGVzdChzdHIpKSB7XG4gICAgICAgIHJldHVybiBDT05UQUlORVJfQ09MR1JPVVA7XG4gICAgfVxuICAgIGlmICgvXjx0ci9pLnRlc3Qoc3RyKSkge1xuICAgICAgICByZXR1cm4gQ09OVEFJTkVSX1RCT0RZO1xuICAgIH1cbiAgICBpZiAoL148dFtkaF0vaS50ZXN0KHN0cikpIHtcbiAgICAgICAgcmV0dXJuIENPTlRBSU5FUl9UUjtcbiAgICB9XG4gICAgcmV0dXJuIENPTlRBSU5FUl9ESVY7XG59XG5cbmZ1bmN0aW9uIHBhcnNlSHRtbChzdHIpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBmaW5kQ29udGFpbmVyKHN0cik7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IHN0cjtcbiAgICBjb25zdCByZXMgPSBjb3JlLnRvQXJyYXkoY29udGFpbmVyLmNoaWxkTm9kZXMpO1xuICAgIGNvcmUuZWFjaChyZXMsIGVsID0+IGNvbnRhaW5lci5yZW1vdmVDaGlsZChlbCkpO1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICByZXR1cm4gcmVzO1xufVxuXG5mdW5jdGlvbiBxdWVyeUFsbChzZWxlY3RvciwgY29udGV4dCkge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBjb3JlLnRvQXJyYXkoKGNvbnRleHQgfHwgRE9DKS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7LyoqL31cbiAgICByZXR1cm4gW107XG59XG5cbmNvbnN0IGlzRWxlbWVudCA9IHggPT4gaXNJbnN0YW5jZU9mKHgsIFdJTi5FbGVtZW50KTtcbmNvbnN0IGlzRG9jdW1lbnQgPSB4ID0+IGlzSW5zdGFuY2VPZih4LCBXSU4uRG9jdW1lbnQpO1xuY29uc3QgaXNXaW5kb3cgPSB4ID0+IGNvcmUuaXMoeCkgJiYgeC53aW5kb3cgPT09IHggJiYgaXNEb2N1bWVudCh4LmRvY3VtZW50KTtcbmNvbnN0IGlzRWxEb2NXaW4gPSB4ID0+IGlzRWxlbWVudCh4KSB8fCBpc0RvY3VtZW50KHgpIHx8IGlzV2luZG93KHgpO1xuXG5jb25zdCBhZGRMaXN0ZW5lciA9IChlbCwgdHlwZSwgZm4pID0+IGVsLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZm4pO1xuY29uc3QgcmVtb3ZlTGlzdGVuZXIgPSAoZWwsIHR5cGUsIGZuKSA9PiBlbC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGZuKTtcblxuZnVuY3Rpb24gb25SZWFkeShmbikge1xuICAgIGlmICgvXihpfGN8bG9hZGUpLy50ZXN0KERPQy5yZWFkeVN0YXRlKSkge1xuICAgICAgICBmbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZExpc3RlbmVyKERPQywgJ0RPTUNvbnRlbnRMb2FkZWQnLCBmbik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBvblJlc2l6ZShmbikge1xuICAgIGFkZExpc3RlbmVyKFdJTiwgJ3Jlc2l6ZScsIGZuKTtcbn1cblxuZnVuY3Rpb24gb25QcmludChiZWZvcmUsIGFmdGVyKSB7XG4gICAgV0lOLm1hdGNoTWVkaWEoJ3ByaW50JykuYWRkTGlzdGVuZXIobXFsID0+IHtcbiAgICAgICAgaWYgKG1xbC5tYXRjaGVzKSB7XG4gICAgICAgICAgICBiZWZvcmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFmdGVyKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZG9tKGFyZykge1xuICAgIGlmIChpc0luc3RhbmNlT2YoYXJnLCBkb20pKSB7XG4gICAgICAgIHJldHVybiBhcmc7XG4gICAgfVxuXG4gICAgbGV0IGVscztcbiAgICBpZiAoY29yZS5pc1N0cmluZyhhcmcpKSB7XG4gICAgICAgIGFyZyA9IGFyZy50cmltKCk7XG4gICAgICAgIGVscyA9IGFyZ1swXSA9PT0gJzwnID8gcGFyc2VIdG1sKGFyZykgOiBxdWVyeUFsbChhcmcpO1xuICAgIH0gZWxzZSBpZiAoaXNFbERvY1dpbihhcmcpKSB7XG4gICAgICAgIGVscyA9IFthcmddO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGVscyA9IGNvcmUuaGFzTGVuZ3RoKGFyZykgPyBhcmcgOiBbYXJnXTtcbiAgICB9XG4gICAgZWxzID0gY29yZS5maWx0ZXIoZWxzLCBpc0VsRG9jV2luKTtcblxuICAgIGNvbnN0IGluc3QgPSBPYmplY3QuY3JlYXRlKGRvbS5wcm90b3R5cGUpO1xuICAgIHB1Ymxpc2goaW5zdCwgZWxzKTtcbiAgICByZXR1cm4gaW5zdDtcbn1cblxuZG9tLnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogZG9tLFxuXG4gICAgZWFjaChmbikge1xuICAgICAgICBjb3JlLmVhY2godGhpcywgZm4pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgbWFwKGZuKSB7XG4gICAgICAgIHJldHVybiBjb3JlLm1hcCh0aGlzLCBmbik7XG4gICAgfSxcblxuICAgIGZpbmQoc2VsZWN0b3IpIHtcbiAgICAgICAgbGV0IGVscyA9IFtdO1xuICAgICAgICB0aGlzLmVhY2goZWwgPT4ge1xuICAgICAgICAgICAgZWxzID0gZWxzLmNvbmNhdChxdWVyeUFsbChzZWxlY3RvciwgZWwpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBkb20oZWxzKTtcbiAgICB9LFxuXG4gICAgb24odHlwZSwgZm4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChlbCA9PiBhZGRMaXN0ZW5lcihlbCwgdHlwZSwgZm4pKTtcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGUsIGZuKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZWwgPT4gcmVtb3ZlTGlzdGVuZXIoZWwsIHR5cGUsIGZuKSk7XG4gICAgfSxcblxuICAgIGF0dHIoa2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGVuZ3RoID8gdGhpc1swXS5nZXRBdHRyaWJ1dGUoa2V5KSA6IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGVsID0+IGVsLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKSk7XG4gICAgfSxcblxuICAgIHJtQXR0cihrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChlbCA9PiBlbC5yZW1vdmVBdHRyaWJ1dGUoa2V5KSk7XG4gICAgfSxcblxuICAgIHZhbCh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGVuZ3RoID8gdGhpc1swXS52YWx1ZSA6IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGVsID0+IHtcbiAgICAgICAgICAgIGVsLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBodG1sKHN0cikge1xuICAgICAgICBpZiAoc3RyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hcChlbCA9PiBlbC5pbm5lckhUTUwpLmpvaW4oJycpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZWwgPT4ge1xuICAgICAgICAgICAgZWwuaW5uZXJIVE1MID0gc3RyO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgdGV4dChzdHIpIHtcbiAgICAgICAgaWYgKHN0ciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXAoZWwgPT4gZWwudGV4dENvbnRlbnQpLmpvaW4oJycpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZWwgPT4ge1xuICAgICAgICAgICAgZWwudGV4dENvbnRlbnQgPSBzdHI7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBjbHIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0bWwoJycpO1xuICAgIH0sXG5cbiAgICBybSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChlbCA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBlbC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAgICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBycGwoYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZWwgPT4ge1xuICAgICAgICAgICAgZWwub3V0ZXJIVE1MID0gZG9tKGFyZykubWFwKHJwbEVsID0+IHJwbEVsLm91dGVySFRNTCkuam9pbignJyk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBhcHAoYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZWwgPT4ge1xuICAgICAgICAgICAgZG9tKGFyZykuZWFjaChjaGlsZCA9PiBlbC5hcHBlbmRDaGlsZChjaGlsZCkpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgYXBwVG8oYXJnKSB7XG4gICAgICAgIGRvbShhcmcpLmFwcCh0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIHByZShhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChlbCA9PiB7XG4gICAgICAgICAgICBkb20oYXJnKS5lYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaXJzdENoaWxkID0gZWwuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgICAgICBpZiAoIWZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgZWwuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsLmluc2VydEJlZm9yZShjaGlsZCwgZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBwcmVUbyhhcmcpIHtcbiAgICAgICAgZG9tKGFyZykucHJlKHRoaXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgY2xzKC4uLm5hbWVzKSB7XG4gICAgICAgIGlmICghbmFtZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sZW5ndGggPyBjb3JlLnRvQXJyYXkodGhpc1swXS5jbGFzc0xpc3QpIDogW107XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lYWNoKGVsID0+IGVsLmNsYXNzTmFtZSA9ICcnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkQ2xzKC4uLm5hbWVzKTtcbiAgICB9LFxuXG4gICAgaGFzQ2xzKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGNvcmUuYWxsKHRoaXMsIGVsID0+IGVsLmNsYXNzTGlzdC5jb250YWlucyhuYW1lKSk7XG4gICAgfSxcblxuICAgIGFkZENscyguLi5uYW1lcykge1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGVsID0+IHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbmFtZSBvZiBuYW1lcykge1xuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBybUNscyguLi5uYW1lcykge1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGVsID0+IHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbmFtZSBvZiBuYW1lcykge1xuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGlzRWxlbWVudCxcbiAgICBpc0RvY3VtZW50LFxuICAgIGlzV2luZG93LFxuICAgIGlzRWxEb2NXaW4sXG4gICAgb25SZWFkeSxcbiAgICBvblJlc2l6ZSxcbiAgICBvblByaW50LFxuICAgIGRvbVxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZG9tLmpzXG4gKiovIiwiY29uc3QgY29yZSA9IHJlcXVpcmUoJy4vY29yZScpO1xuXG5jb25zdCBlYWNoID0gY29yZS5lYWNoO1xuY29uc3QgbWFwID0gY29yZS5tYXA7XG5jb25zdCBhc3NpZ24gPSBjb3JlLmFzc2lnbjtcbmNvbnN0IGNvbnRhaW5zID0gY29yZS5jb250YWlucztcbmNvbnN0IGlzRnVuY3Rpb24gPSBjb3JlLmlzRnVuY3Rpb247XG5jb25zdCBpc1N0cmluZyA9IGNvcmUuaXNTdHJpbmc7XG5jb25zdCB0b0FycmF5ID0gY29yZS50b0FycmF5O1xuXG5jb25zdCBXSU4gPSBnbG9iYWwud2luZG93IHx8IHt9O1xuY29uc3QgSU5QVVRfRUxTID0gWydpbnB1dCcsICdzZWxlY3QnLCAndGV4dGFyZWEnXTtcbmNvbnN0IFJFX05BTUUgPSAvXltfYS16QS1aXVtfYS16QS1aMC05XSokLztcbmNvbnN0IFJFX1RFTVBMQVRFID0gL1xcWyhbX2EtekEtWl1bX2EtekEtWjAtOV0qKVxcXS9nO1xuY29uc3QgQVRUUl9LRVkgPSAnZGF0YS10cGwnO1xuXG5jb25zdCBjcmVhdGVPYmogPSAocHJvdG8gPSBudWxsKSA9PiBPYmplY3QuY3JlYXRlKHByb3RvKTtcbmNvbnN0IGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuY29uc3QgaXNJbnB1dEVsID0gZWwgPT4gY29udGFpbnMoSU5QVVRfRUxTLCBlbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKTtcbmNvbnN0IGlzTmFtZSA9IHggPT4gaXNTdHJpbmcoeCkgJiYgUkVfTkFNRS50ZXN0KHgpO1xuXG5mdW5jdGlvbiBkZWZpbmVDb25zdChpbnN0LCBuYW1lLCB2YWx1ZSkge1xuICAgIGRlZmluZVByb3BlcnR5KGluc3QsIG5hbWUsIHt2YWx1ZX0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVFbHMoaW5zdCwgbmFtZSwgZWxzKSB7XG4gICAgaWYgKCFlbHMpIHtcbiAgICAgICAgZWxzID0gaW5zdC5fZWxzW25hbWVdO1xuICAgIH1cbiAgICBjb25zdCB2YWx1ZSA9IGluc3QudmFsW25hbWVdO1xuICAgIGVhY2goZWxzLCBlbCA9PiB7XG4gICAgICAgIGNvbnN0IHByb3AgPSBpc0lucHV0RWwoZWwpID8gJ3ZhbHVlJyA6ICdpbm5lckhUTUwnO1xuICAgICAgICBpZiAoZWxbcHJvcF0gIT09IHZhbHVlKSB7XG4gICAgICAgICAgICBlbFtwcm9wXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNhbGxMaXN0ZW5lcnMoaW5zdCwgbmFtZSkge1xuICAgIGNvbnN0IHZhbHVlID0gaW5zdC52YWxbbmFtZV07XG4gICAgZWFjaChpbnN0Ll9mbnNbbmFtZV0sIGZuID0+IHtcbiAgICAgICAgaWYgKGlzRnVuY3Rpb24oZm4pKSB7XG4gICAgICAgICAgICBmbih2YWx1ZSwgbmFtZSwgaW5zdCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkVmFsKGluc3QsIG5hbWUpIHtcbiAgICBsZXQgdmFsdWUgPSBuYW1lO1xuXG4gICAgZGVmaW5lUHJvcGVydHkoaW5zdC52YWwsIG5hbWUsIHtcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgc2V0OiB4ID0+IHtcbiAgICAgICAgICAgIHggPSBTdHJpbmcoeCk7XG4gICAgICAgICAgICBpZiAoeCAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHg7XG4gICAgICAgICAgICAgICAgdXBkYXRlRWxzKGluc3QsIG5hbWUpO1xuICAgICAgICAgICAgICAgIGNhbGxMaXN0ZW5lcnMoaW5zdCwgbmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGdldDogKCkgPT4gdmFsdWVcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZW5zdXJlTmFtZShpbnN0LCBuYW1lKSB7XG4gICAgaWYgKCFpc05hbWUobmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIShuYW1lIGluIGluc3QudmFsKSkge1xuICAgICAgICBhZGRWYWwoaW5zdCwgbmFtZSk7XG4gICAgfVxuICAgIGlmICghKG5hbWUgaW4gaW5zdC5fZWxzKSkge1xuICAgICAgICBkZWZpbmVDb25zdChpbnN0Ll9lbHMsIG5hbWUsIFtdKTtcbiAgICB9XG4gICAgaWYgKCEobmFtZSBpbiBpbnN0Ll9mbnMpKSB7XG4gICAgICAgIGRlZmluZUNvbnN0KGluc3QuX2ZucywgbmFtZSwgW10pO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gZmluZEFsbFRleHROb2Rlcyhub2RlKSB7XG4gICAgY29uc3QgdGV4dG5vZGVzID0gW10uY29uY2F0KC4uLm1hcChub2RlLmNoaWxkTm9kZXMsIG4gPT4gZmluZEFsbFRleHROb2RlcyhuKSkpO1xuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBXSU4uTm9kZS5URVhUX05PREUpIHtcbiAgICAgICAgdGV4dG5vZGVzLnB1c2gobm9kZSk7XG4gICAgfVxuICAgIHJldHVybiB0ZXh0bm9kZXM7XG59XG5cbmZ1bmN0aW9uIGNvbXBpbGVUZXh0Tm9kZShub2RlKSB7XG4gICAgY29uc3QgZGl2ID0gV0lOLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5pbm5lckhUTUwgPSBub2RlLm5vZGVWYWx1ZS5yZXBsYWNlKFJFX1RFTVBMQVRFLCAobWF0Y2gsIG5hbWUpID0+IGA8c3BhbiAke0FUVFJfS0VZfT0nJHtuYW1lfSc+PC9zcGFuPmApO1xuICAgIGlmIChkaXYuY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlO1xuICAgICAgICBlYWNoKHRvQXJyYXkoZGl2LmNoaWxkTm9kZXMpLCBuID0+IHtcbiAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUobiwgbm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBiaW5kZXIoKSB7XG4gICAgY29uc3QgaW5zdCA9IGNyZWF0ZU9iaihiaW5kZXIucHJvdG90eXBlKTtcbiAgICBkZWZpbmVDb25zdChpbnN0LCAnX2VscycsIGNyZWF0ZU9iaigpKTtcbiAgICBkZWZpbmVDb25zdChpbnN0LCAnX2ZucycsIGNyZWF0ZU9iaigpKTtcbiAgICBkZWZpbmVDb25zdChpbnN0LCAndmFsJywgY3JlYXRlT2JqKCkpO1xuICAgIHJldHVybiBpbnN0O1xufVxuXG5hc3NpZ24oYmluZGVyLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiBiaW5kZXIsXG5cbiAgICBsb2coKSB7XG4gICAgICAgIGNvbnN0IHBsYWluID0gY3JlYXRlT2JqKCk7XG4gICAgICAgIGVhY2godGhpcy52YWwsICh2YWx1ZSwgbmFtZSkgPT4ge1xuICAgICAgICAgICAgcGxhaW5bbmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgdmFsOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICBlbHM6IHRoaXMuX2Vsc1tuYW1lXS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgZm5zOiB0aGlzLl9mbnNbbmFtZV0ubGVuZ3RoXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGNvbnNvbGUudGFibGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUudGFibGUocGxhaW4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocGxhaW4pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBhZGQob2JqKSB7XG4gICAgICAgIGVhY2gob2JqLCAoZWxzLCBuYW1lKSA9PiB7XG4gICAgICAgICAgICBpZiAoZW5zdXJlTmFtZSh0aGlzLCBuYW1lKSkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZUVscyh0aGlzLCBuYW1lLCBlbHMpO1xuICAgICAgICAgICAgICAgIGVhY2goZWxzLCBlbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY29udGFpbnModGhpcy5fZWxzW25hbWVdLCBlbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Vsc1tuYW1lXS5wdXNoKGVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0lucHV0RWwoZWwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB0aGlzLnZhbFtuYW1lXSA9IGVsLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB0aGlzLnZhbFtuYW1lXSA9IGVsLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIHNldChvYmopIHtcbiAgICAgICAgZWFjaChvYmosICh2YWx1ZSwgbmFtZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVuc3VyZU5hbWUodGhpcywgbmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbFtuYW1lXSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIG9uKG5hbWUsIGZuKSB7XG4gICAgICAgIGlmIChlbnN1cmVOYW1lKHRoaXMsIG5hbWUpKSB7XG4gICAgICAgICAgICB0aGlzLl9mbnNbbmFtZV0ucHVzaChmbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGNvbGxlY3QoY29udGFpbmVyRWwsIHNwbGl0KSB7XG4gICAgICAgIGlmICghY29udGFpbmVyRWwgfHwgIWlzRnVuY3Rpb24oY29udGFpbmVyRWwucXVlcnlTZWxlY3RvckFsbCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzcGxpdCkge1xuICAgICAgICAgICAgZWFjaChmaW5kQWxsVGV4dE5vZGVzKGNvbnRhaW5lckVsKSwgY29tcGlsZVRleHROb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlbHMgPSB0b0FycmF5KGNvbnRhaW5lckVsLnF1ZXJ5U2VsZWN0b3JBbGwoYFske0FUVFJfS0VZfV1gKSk7XG4gICAgICAgIGVscy51bnNoaWZ0KGNvbnRhaW5lckVsKTtcbiAgICAgICAgZWFjaChlbHMsIGVsID0+IHtcbiAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKGVsLmdldEF0dHJpYnV0ZSkgJiYgZWwuZ2V0QXR0cmlidXRlKEFUVFJfS0VZKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkKHtbZWwuZ2V0QXR0cmlidXRlKEFUVFJfS0VZKV06IFtlbF19KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBiaW5kZXJcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2JpbmRlci5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=