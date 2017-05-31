/*! lo v0.30.0 - https://larsjung.de/lo/ */
(function () {
'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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

var _on = function _on(el, type, fn) {
    return el.addEventListener(type, fn);
};

// dom

var parse_html = function () {
    var rules = [[/^<t(head|body|foot)|^<c(ap|olg)/i, create_el('table')], [/^<col/i, create_el('colgroup')], [/^<tr/i, create_el('tbody')], [/^<t[dh]/i, create_el('tr')]];
    var div = create_el('div');

    var find_container = function find_container(str) {
        // for (const [re, el] of rules) {
        //     if (re.test(str)) {
        //         return el;
        //     }
        // }
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

    var els = void 0;
    if (is_str(arg)) {
        arg = arg.trim();
        els = arg[0] === '<' ? parse_html(arg) : query_all(arg);
    } else if (is_el_doc_win(arg)) {
        els = [arg];
    } else {
        els = as_arr(arg);
    }
    els = els.filter(is_el_doc_win);

    return Object.assign(Object.create(dom.prototype), els, { length: els.length });
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
    rm_cls: function rm_cls() {
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

// binder

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
        return '<span ' + ATTR_KEY + '=\'' + name + '\'></span>';
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

            for (var _len3 = arguments.length, els = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
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
        var els = query_all('[' + ATTR_KEY + ']', root_el);
        els.unshift(root_el);
        els.forEach(function (el) {
            if (is_fn(el.getAttribute) && el.getAttribute(ATTR_KEY)) {
                _this2.add(el.getAttribute(ATTR_KEY), el);
            }
        });
        return this;
    }
};

window.lo = {
    dom: dom,
    binder: binder
};
}())