const WIN = global.window;
const DOC = WIN.document;

const ATTR_KEY = 'data-bdg';
const INPUT_ELS = ['input', 'select', 'textarea'];
const RE_NAME = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
const RE_BDG = /\[([_a-zA-Z][_a-zA-Z0-9]*)\]/g;

const create_el = name => DOC.createElement(name);

const is_fn = x => typeof x === 'function';
const is_str = x => typeof x === 'string';
const is_name = x => is_str(x) && RE_NAME.test(x);
const is_el = x => x instanceof WIN.Element;
const is_doc = x => x instanceof WIN.Document;
const is_win = x => x && x.window === x && is_doc(x.document);
const is_el_doc_win = x => is_el(x) || is_doc(x) || is_win(x);
const is_inp_el = el => is_el(el) && INPUT_ELS.includes(el.nodeName.toLowerCase());

const as_arr = x => Array.isArray(x) ? x : x ? Array.from(x) : [];

const on = (el, type, fn) => el.addEventListener(type, fn);




// dom

const parse_html = (() => {
    const rules = [
        [/^<t(head|body|foot)|^<c(ap|olg)/i, create_el('table')],
        [/^<col/i, create_el('colgroup')],
        [/^<tr/i, create_el('tbody')],
        [/^<t[dh]/i, create_el('tr')]
    ];
    const div = create_el('div');

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
        const res = as_arr(container.childNodes);
        res.forEach(el => container.removeChild(el));
        container.innerHTML = '';
        return res;
    };
})();

const query_all = (selector, context) => {
    try {
        return as_arr((context || DOC).querySelectorAll(selector));
    } catch (err) {
        return [];
    }
};

const on_ready = fn => {
    if (/^(i|c|loade)/.test(DOC.readyState)) {
        fn();
    } else {
        on(DOC, 'DOMContentLoaded', fn);
    }
};

const dom = arg => {
    if (arg instanceof dom) {
        return arg;
    }

    if (is_fn(arg)) {
        return on_ready(arg);
    }

    let els;
    if (is_str(arg)) {
        arg = arg.trim();
        els = arg[0] === '<' ? parse_html(arg) : query_all(arg);
    } else if (is_el_doc_win(arg)) {
        els = [arg];
    } else {
        els = as_arr(arg);
    }
    els = els.filter(is_el_doc_win);

    return Object.assign(Object.create(dom.prototype), els, {length: els.length});
};

dom.prototype = {
    constructor: dom,

    each(fn) {
        as_arr(this).forEach(fn);
        return this;
    },

    map(fn) {
        return as_arr(this).map(fn);
    },

    find(selector) {
        return dom([].concat(...this.map(el => query_all(selector, el))));
    },

    on(type, fn) {
        return this.each(el => on(el, type, fn));
    },

    off(type, fn) {
        return this.each(el => el.removeEventListener(type, fn));
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
            el.outerHTML = dom(arg).map(rpl_el => rpl_el.outerHTML).join('');
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
            return this.length ? as_arr(this[0].classList) : [];
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

const update_els = (inst, name, els) => {
    const bdg = inst._bdgs[name];
    const val = bdg.val;
    as_arr(els || bdg.els).forEach(el => {
        const prop = is_inp_el(el) ? 'value' : 'innerHTML';
        if (el[prop] !== val) {
            el[prop] = val;
        }
    });
};

const call_listeners = (inst, name) => {
    const bdg = inst._bdgs[name];
    bdg.fns.forEach(fn => {
        if (is_fn(fn)) {
            fn(bdg.val, name, inst);
        }
    });
};

const find_all_text_nodes = node => {
    const textnodes = [].concat(...Array.from(node.childNodes, n => find_all_text_nodes(n)));
    if (node.nodeType === WIN.Node.TEXT_NODE) {
        textnodes.push(node);
    }
    return textnodes;
};

const compile_text_node = node => {
    const div = create_el('div');
    div.innerHTML = node.nodeValue.replace(RE_BDG, (match, name) => `<span ${ATTR_KEY}='${name}'></span>`);
    if (div.childNodes.length) {
        const parent = node.parentNode;
        Array.from(div.childNodes).forEach(n => {
            parent.insertBefore(n, node);
        });
        parent.removeChild(node);
    }
};

const create_binding = (inst, name) => {
    let val = name;
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

const ensure_name = (inst, name) => {
    if (!is_name(name)) {
        return false;
    }
    if (!inst._bdgs[name]) {
        inst._bdgs[name] = create_binding(inst, name);
    }
    return true;
};

const binder = () => Object.assign(Object.create(binder.prototype), {
    _bdgs: {}
});

binder.prototype = {
    constructor: binder,

    log() {
        (console.table || console.log)(Object.keys(this._bdgs).map(name => {
            const bdg = this._bdgs[name];
            return {
                name,
                val: bdg.val,
                els: bdg.els.length,
                fns: bdg.fns.length
            };
        }));
        return this;
    },

    add(name, ...els) {
        if (ensure_name(this, name)) {
            const bdg = this._bdgs[name];
            update_els(this, name, els);
            as_arr(els).forEach(el => {
                if (!bdg.els.includes(el)) {
                    bdg.els.push(el);
                    if (is_inp_el(el)) {
                        const set = () => {bdg.val = el.value;};
                        on(el, 'input', set);
                        on(el, 'change', set);
                    }
                }
            });
        }
        return this;
    },

    get(name) {
        const bdg = this._bdgs[name];
        return bdg && bdg.val;
    },

    set(name, val) {
        if (ensure_name(this, name)) {
            this._bdgs[name].val = val;
        }
        return this;
    },

    on(name, fn) {
        if (ensure_name(this, name)) {
            const bdg = this._bdgs[name];
            if (!bdg.fns.includes(fn)) {
                bdg.fns.push(fn);
            }
        }
        return this;
    },

    collect(root_el, split) {
        if (!is_el(root_el) && !is_doc(root_el)) {
            return this;
        }
        if (split) {
            find_all_text_nodes(root_el).forEach(compile_text_node);
        }
        const els = query_all(`[${ATTR_KEY}]`, root_el);
        els.unshift(root_el);
        els.forEach(el => {
            if (is_fn(el.getAttribute) && el.getAttribute(ATTR_KEY)) {
                this.add(el.getAttribute(ATTR_KEY), el);
            }
        });
        return this;
    }
};




module.exports = {
    dom,
    binder
};
