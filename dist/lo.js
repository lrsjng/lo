/*! lo v0.37.0 - https://larsjung.de/lo/ */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("lo", [], factory);
	else if(typeof exports === 'object')
		exports["lo"] = factory();
	else
		root["lo"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var WIN = window; // eslint-disable-line no-undef

var DOC = WIN.document;
var ATTR_KEY = 'data-bdg';
var INPUT_ELS = ['input', 'select', 'textarea'];
var RE_NAME = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
var RE_BDG = /\[([_a-zA-Z][_a-zA-Z0-9]*)\]/g;

var create_el = function create_el(name) {
  return DOC.createElement(name);
};

var is_fn = function is_fn(x) {
  return typeof x === 'function';
};

var is_str = function is_str(x) {
  return typeof x === 'string';
};

var is_name = function is_name(x) {
  return is_str(x) && RE_NAME.test(x);
};

var is_el = function is_el(x) {
  return x instanceof WIN.Element;
};

var is_doc = function is_doc(x) {
  return x instanceof WIN.Document;
};

var is_win = function is_win(x) {
  return x && x.window === x && is_doc(x.document);
};

var is_el_doc_win = function is_el_doc_win(x) {
  return is_el(x) || is_doc(x) || is_win(x);
};

var is_inp_el = function is_inp_el(el) {
  return is_el(el) && INPUT_ELS.includes(el.nodeName.toLowerCase());
};

var as_arr = function as_arr(x) {
  return Array.isArray(x) ? x : x ? Array.from(x) : [];
};

var _on = function on(el, type, fn) {
  return el.addEventListener(type, fn);
}; // dom


var parse_html = function () {
  var rules = [[/^<t(head|body|foot)|^<c(ap|olg)/i, create_el('table')], [/^<col/i, create_el('colgroup')], [/^<tr/i, create_el('tbody')], [/^<t[dh]/i, create_el('tr')]];
  var div = create_el('div');

  var find_container = function find_container(str) {
    for (var i = 0; i < rules.length; i += 1) {
      if (rules[i][0].test(str)) {
        return rules[i][1];
      }
    }

    return div;
  };

  return function (str) {
    var container = find_container(str);
    container.innerHTML = str;
    var res = as_arr(container.childNodes);
    res.forEach(function (el) {
      return container.removeChild(el);
    });
    container.innerHTML = '';
    return res;
  };
}();

var query_all = function query_all(selector, context) {
  try {
    return as_arr((context || DOC).querySelectorAll(selector));
  } catch (err) {
    return [];
  }
};

var on_ready = function on_ready(fn) {
  if (/^(i|c|loade)/.test(DOC.readyState)) {
    fn();
  } else {
    _on(DOC, 'DOMContentLoaded', fn);
  }
};

var dom = function dom(arg) {
  if (arg instanceof dom) {
    return arg;
  }

  if (is_fn(arg)) {
    return on_ready(arg);
  }

  var els;

  if (is_str(arg)) {
    arg = arg.trim();
    els = arg[0] === '<' ? parse_html(arg) : query_all(arg);
  } else if (is_el_doc_win(arg)) {
    els = [arg];
  } else {
    els = as_arr(arg);
  }

  els = els.filter(is_el_doc_win);
  return Object.assign(Object.create(dom.prototype), els, {
    length: els.length
  });
};

dom.prototype = {
  constructor: dom,
  each: function each(fn) {
    as_arr(this).forEach(fn);
    return this;
  },
  map: function map(fn) {
    return as_arr(this).map(fn);
  },
  find: function find(selector) {
    var _ref;

    return dom((_ref = []).concat.apply(_ref, _toConsumableArray(this.map(function (el) {
      return query_all(selector, el);
    }))));
  },
  on: function on(type, fn) {
    return this.each(function (el) {
      return _on(el, type, fn);
    });
  },
  off: function off(type, fn) {
    return this.each(function (el) {
      return el.removeEventListener(type, fn);
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
  rm_attr: function rm_attr(key) {
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
      el.outerHTML = dom(arg).map(function (rpl_el) {
        return rpl_el.outerHTML;
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
  app_to: function app_to(arg) {
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
  pre_to: function pre_to(arg) {
    dom(arg).pre(this);
    return this;
  },
  cls: function cls() {
    if (!arguments.length) {
      return this.length ? as_arr(this[0].classList) : [];
    }

    this.each(function (el) {
      el.className = '';
    });
    return this.add_cls.apply(this, arguments);
  },
  has_cls: function has_cls(name) {
    return Array.from(this).every(function (el) {
      return el.classList.contains(name);
    });
  },
  add_cls: function add_cls() {
    for (var _len = arguments.length, names = new Array(_len), _key = 0; _key < _len; _key++) {
      names[_key] = arguments[_key];
    }

    return this.each(function (el) {
      for (var _i = 0, _names = names; _i < _names.length; _i++) {
        var name = _names[_i];
        el.classList.add(name);
      }
    });
  },
  rm_cls: function rm_cls() {
    for (var _len2 = arguments.length, names = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      names[_key2] = arguments[_key2];
    }

    return this.each(function (el) {
      for (var _i2 = 0, _names2 = names; _i2 < _names2.length; _i2++) {
        var name = _names2[_i2];
        el.classList.remove(name);
      }
    });
  }
}; // binder

var update_els = function update_els(inst, name, els) {
  var bdg = inst._bdgs[name];
  var val = bdg.val;
  as_arr(els || bdg.els).forEach(function (el) {
    var prop = is_inp_el(el) ? 'value' : 'innerHTML';

    if (el[prop] !== val) {
      el[prop] = val;
    }
  });
};

var call_listeners = function call_listeners(inst, name) {
  var bdg = inst._bdgs[name];
  bdg.fns.forEach(function (fn) {
    if (is_fn(fn)) {
      fn(bdg.val, name, inst);
    }
  });
};

var find_all_text_nodes = function find_all_text_nodes(node) {
  var _ref2;

  var textnodes = (_ref2 = []).concat.apply(_ref2, _toConsumableArray(Array.from(node.childNodes, function (n) {
    return find_all_text_nodes(n);
  })));

  if (node.nodeType === WIN.Node.TEXT_NODE) {
    textnodes.push(node);
  }

  return textnodes;
};

var compile_text_node = function compile_text_node(node) {
  var div = create_el('div');
  div.innerHTML = node.nodeValue.replace(RE_BDG, function (match, name) {
    return "<span ".concat(ATTR_KEY, "='").concat(name, "'></span>");
  });

  if (div.childNodes.length) {
    var parent = node.parentNode;
    Array.from(div.childNodes).forEach(function (n) {
      parent.insertBefore(n, node);
    });
    parent.removeChild(node);
  }
};

var create_binding = function create_binding(inst, name) {
  var val = name;
  return {
    get val() {
      return val;
    },

    set val(x) {
      x = String(x);

      if (val !== x) {
        val = x;
        update_els(inst, name);
        call_listeners(inst, name);
      }
    },

    els: [],
    fns: []
  };
};

var ensure_name = function ensure_name(inst, name) {
  if (!is_name(name)) {
    return false;
  }

  if (!inst._bdgs[name]) {
    inst._bdgs[name] = create_binding(inst, name);
  }

  return true;
};

var binder = function binder() {
  return Object.assign(Object.create(binder.prototype), {
    _bdgs: {}
  });
};

binder.prototype = {
  constructor: binder,
  log: function log() {
    var _this = this;

    (console.table || console.log)(Object.keys(this._bdgs).map(function (name) {
      var bdg = _this._bdgs[name];
      return {
        name: name,
        val: bdg.val,
        els: bdg.els.length,
        fns: bdg.fns.length
      };
    }));
    return this;
  },
  add: function add(name) {
    if (ensure_name(this, name)) {
      var bdg = this._bdgs[name];

      for (var _len3 = arguments.length, els = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        els[_key3 - 1] = arguments[_key3];
      }

      update_els(this, name, els);
      as_arr(els).forEach(function (el) {
        if (!bdg.els.includes(el)) {
          bdg.els.push(el);

          if (is_inp_el(el)) {
            var set = function set() {
              bdg.val = el.value;
            };

            _on(el, 'input', set);

            _on(el, 'change', set);
          }
        }
      });
    }

    return this;
  },
  get: function get(name) {
    var bdg = this._bdgs[name];
    return bdg && bdg.val;
  },
  set: function set(name, val) {
    if (ensure_name(this, name)) {
      this._bdgs[name].val = val;
    }

    return this;
  },
  on: function on(name, fn) {
    if (ensure_name(this, name)) {
      var bdg = this._bdgs[name];

      if (!bdg.fns.includes(fn)) {
        bdg.fns.push(fn);
      }
    }

    return this;
  },
  collect: function collect(root_el, split) {
    var _this2 = this;

    if (!is_el(root_el) && !is_doc(root_el)) {
      return this;
    }

    if (split) {
      find_all_text_nodes(root_el).forEach(compile_text_node);
    }

    var els = query_all("[".concat(ATTR_KEY, "]"), root_el);
    els.unshift(root_el);
    els.forEach(function (el) {
      if (is_fn(el.getAttribute) && el.getAttribute(ATTR_KEY)) {
        _this2.add(el.getAttribute(ATTR_KEY), el);
      }
    });
    return this;
  }
};
module.exports = {
  dom: dom,
  binder: binder
};

/***/ })
/******/ ]);
});