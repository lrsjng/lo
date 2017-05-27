const WIN = global.window;
const DOC = WIN.document;

const _ARR_PROTO = Array.prototype;

const _apply = (fn, ctx, args) => fn.apply(ctx, args); // eslint-disable-line prefer-reflect

const is_type_of = (x, typ) => typeof x === typ;
const is_inst_of = (x, typ) => x ? x instanceof typ : false;
const is_obj = x => x !== null && is_type_of(x, 'object');
const is_fn = x => is_type_of(x, 'function');
const is_str = x => is_type_of(x, 'string');

const keys = x => is_obj(x) ? Object.keys(x) : [];
const vals = x => keys(x).map(key => x[key]);
const has_len = x => x && is_type_of(x.length, 'number');
const to_arr = x => Array.isArray(x) ? x : has_len(x) ? Array.from(x) : vals(x);

const for_each = (x, fn, ctx) => _apply(_ARR_PROTO.forEach, x, [fn, ctx]);
const for_own = (x, fn, ctx) => keys(x).forEach(key => _apply(fn, ctx, [x[key], key, x]));
const each = (x, fn, ctx) => (has_len(x) ? for_each : for_own)(x, fn, ctx);




// dom

const parse_html = (() => {
    const create = name => DOC.createElement(name);
    const rules = [
        [/^<t(head|body|foot)|^<c(ap|olg)/i, create('table')],
        [/^<col/i, create('colgroup')],
        [/^<tr/i, create('tbody')],
        [/^<t[dh]/i, create('tr')]
    ];
    const div = create('div');

    const find_container = str => {
        for (const [re, el] of rules) {
            if (re.test(str)) {
                return el;
            }
        }
        return div;
    };

    return str => {
        const container = find_container(str);
        container.innerHTML = str;
        const res = to_arr(container.childNodes);
        res.forEach(el => container.removeChild(el));
        container.innerHTML = '';
        return res;
    };
})();

const query_all = (selector, context) => {
    try {
        return to_arr((context || DOC).querySelectorAll(selector));
    } catch (err) {
        return [];
    }
};

const is_el = x => is_inst_of(x, WIN.Element);
const is_doc = x => is_inst_of(x, WIN.Document);
const is_win = x => x && x.window === x && is_doc(x.document);
const is_el_doc_win = x => is_el(x) || is_doc(x) || is_win(x);

const on = (el, type, fn) => el.addEventListener(type, fn);
const off = (el, type, fn) => el.removeEventListener(type, fn);

const on_ready = fn => {
    if (/^(i|c|loade)/.test(DOC.readyState)) {
        fn();
    } else {
        on(DOC, 'DOMContentLoaded', fn);
    }
};

const on_resize = fn => {
    on(WIN, 'resize', fn);
};

const on_print = (before, after) => {
    WIN.matchMedia('print').addListener(mql => {
        if (mql.matches) {
            before();
        } else {
            after();
        }
    });
};

const dom = arg => {
    if (is_inst_of(arg, dom)) {
        return arg;
    }

    let els;
    if (is_str(arg)) {
        arg = arg.trim();
        els = arg[0] === '<' ? parse_html(arg) : query_all(arg);
    } else if (is_el_doc_win(arg)) {
        els = [arg];
    } else {
        els = has_len(arg) ? arg : [arg];
    }
    els = els.filter(is_el_doc_win);

    return Object.assign(Object.create(dom.prototype), els, {length: els.length});
};

dom.prototype = {
    constructor: dom,

    each(fn) {
        each(this, fn);
        return this;
    },

    map(fn) {
        return Array.from(this, fn);
    },

    find(selector) {
        return dom([].concat(...this.map(el => query_all(selector, el))));
    },

    on(type, fn) {
        return this.each(el => on(el, type, fn));
    },

    off(type, fn) {
        return this.each(el => off(el, type, fn));
    },

    attr(key, value) {
        if (value === undefined) {
            return this.length ? this[0].getAttribute(key) : undefined;
        }
        return this.each(el => el.setAttribute(key, value));
    },

    rm_attr(key) {
        return this.each(el => el.removeAttribute(key));
    },

    val(value) {
        if (value === undefined) {
            return this.length ? this[0].value : undefined;
        }
        return this.each(el => {
            el.value = value;
        });
    },

    html(str) {
        if (str === undefined) {
            return this.map(el => el.innerHTML).join('');
        }
        return this.each(el => {
            el.innerHTML = str;
        });
    },

    text(str) {
        if (str === undefined) {
            return this.map(el => el.textContent).join('');
        }
        return this.each(el => {
            el.textContent = str;
        });
    },

    clr() {
        return this.html('');
    },

    rm() {
        return this.each(el => {
            const parent = el.parentNode;
            if (parent) {
                parent.removeChild(el);
            }
        });
    },

    rpl(arg) {
        return this.each(el => {
            el.outerHTML = dom(arg).map(rplEl => rplEl.outerHTML).join('');
        });
    },

    app(arg) {
        return this.each(el => {
            dom(arg).each(child => el.appendChild(child));
        });
    },

    app_to(arg) {
        dom(arg).app(this);
        return this;
    },

    pre(arg) {
        return this.each(el => {
            dom(arg).each(child => {
                const firstChild = el.firstChild;
                if (!firstChild) {
                    el.appendChild(child);
                } else {
                    el.insertBefore(child, firstChild);
                }
            });
        });
    },

    pre_to(arg) {
        dom(arg).pre(this);
        return this;
    },

    cls(...names) {
        if (!names.length) {
            return this.length ? to_arr(this[0].classList) : [];
        }
        this.each(el => {el.className = '';});
        return this.add_cls(...names);
    },

    has_cls(name) {
        return Array.from(this).every(el => el.classList.contains(name));
    },

    add_cls(...names) {
        return this.each(el => {
            for (const name of names) {
                el.classList.add(name);
            }
        });
    },

    rm_cls(...names) {
        return this.each(el => {
            for (const name of names) {
                el.classList.remove(name);
            }
        });
    }
};




// binder

const _INPUT_ELS = ['input', 'select', 'textarea'];
const _RE_NAME = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
const _RE_TEMPLATE = /\[([_a-zA-Z][_a-zA-Z0-9]*)\]/g;
const _ATTR_KEY = 'data-tpl';

const _create_obj = (proto = null) => Object.create(proto);
const _def_prop = Object._def_prop;
const _is_inp_el = el => _INPUT_ELS.includes(el.nodeName.toLowerCase());
const _is_name = x => is_str(x) && _RE_NAME.test(x);
const _def_const = (inst, name, value) => _def_prop(inst, name, {value});

const update_els = (inst, name, els) => {
    if (!els) {
        els = inst._els[name];
    }
    const value = inst.val[name];
    each(els, el => {
        const prop = _is_inp_el(el) ? 'value' : 'innerHTML';
        if (el[prop] !== value) {
            el[prop] = value;
        }
    });
};

const call_listeners = (inst, name) => {
    const value = inst.val[name];
    each(inst._fns[name], fn => {
        if (is_fn(fn)) {
            fn(value, name, inst);
        }
    });
};

const add_val = (inst, name) => {
    let value = name;

    _def_prop(inst.val, name, {
        enumerable: true,
        set: x => {
            x = String(x);
            if (x !== value) {
                value = x;
                update_els(inst, name);
                call_listeners(inst, name);
            }
        },
        get: () => value
    });
};

const ensure_name = (inst, name) => {
    if (!_is_name(name)) {
        return false;
    }
    if (!(name in inst.val)) {
        add_val(inst, name);
    }
    if (!(name in inst._els)) {
        _def_const(inst._els, name, []);
    }
    if (!(name in inst._fns)) {
        _def_const(inst._fns, name, []);
    }
    return true;
};

const find_all_text_nodes = node => {
    const textnodes = [].concat(...Array.from(node.childNodes, n => find_all_text_nodes(n)));
    if (node.nodeType === WIN.Node.TEXT_NODE) {
        textnodes.push(node);
    }
    return textnodes;
};

const compile_text_node = node => {
    const div = DOC.createElement('div');
    div.innerHTML = node.nodeValue.replace(_RE_TEMPLATE, (match, name) => `<span ${_ATTR_KEY}='${name}'></span>`);
    if (div.childNodes.length) {
        const parent = node.parentNode;
        each(div.childNodes, n => {
            parent.insertBefore(n, node);
        });
        parent.removeChild(node);
    }
};

const binder = () => {
    const inst = _create_obj(binder.prototype);
    _def_const(inst, '_els', _create_obj());
    _def_const(inst, '_fns', _create_obj());
    _def_const(inst, 'val', _create_obj());
    return inst;
};

binder.prototype = {
    constructor: binder,

    log() {
        const plain = _create_obj();
        each(this.val, (value, name) => {
            plain[name] = {
                val: value,
                els: this._els[name].length,
                fns: this._fns[name].length
            };
        });
        if (console.table) {
            console.table(plain);
        } else {
            console.log(plain);
        }
        return this;
    },

    add(obj) {
        each(obj, (els, name) => {
            if (ensure_name(this, name)) {
                update_els(this, name, els);
                each(els, el => {
                    if (!this._els[name].includes(el)) {
                        this._els[name].push(el);
                        if (_is_inp_el(el)) {
                            el.addEventListener('input', () => {this.val[name] = el.value;});
                            el.addEventListener('change', () => {this.val[name] = el.value;});
                        }
                    }
                });
            }
        });
        return this;
    },

    set(obj) {
        each(obj, (value, name) => {
            if (ensure_name(this, name)) {
                this.val[name] = value;
            }
        });
        return this;
    },

    on(name, fn) {
        if (ensure_name(this, name)) {
            this._fns[name].push(fn);
        }
        return this;
    },

    collect(containerEl, split) {
        if (!containerEl || !is_fn(containerEl.querySelectorAll)) {
            return this;
        }
        if (split) {
            each(find_all_text_nodes(containerEl), compile_text_node);
        }
        const els = to_arr(containerEl.querySelectorAll(`[${_ATTR_KEY}]`));
        els.unshift(containerEl);
        each(els, el => {
            if (is_fn(el.getAttribute) && el.getAttribute(_ATTR_KEY)) {
                this.add({[el.getAttribute(_ATTR_KEY)]: [el]});
            }
        });
        return this;
    }
};




module.exports = {
    each,
    for_each,
    for_own,
    is_fn,
    is_obj,
    is_str,
    keys,
    to_arr,
    vals,

    is_el,
    is_doc,
    is_win,
    on_ready,
    on_resize,
    on_print,
    dom,

    binder
};
