const {
    each,
    every,
    filter,
    for_each,
    has_len,
    is,
    is_inst_of,
    is_str,
    map,
    to_arr
} = require('./core');

const WIN = global.window;
const DOC = WIN.document;

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
        for_each(res, el => container.removeChild(el));
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
const is_win = x => is(x) && x.window === x && is_doc(x.document);
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
    els = filter(els, is_el_doc_win);

    return Object.assign(Object.create(dom.prototype), els, {length: els.length});
};

dom.prototype = {
    constructor: dom,

    each(fn) {
        each(this, fn);
        return this;
    },

    map(fn) {
        return map(this, fn);
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
        return every(this, el => el.classList.contains(name));
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

module.exports = {
    is_el,
    is_doc,
    is_win,
    is_el_doc_win,
    on_ready,
    on_resize,
    on_print,
    dom
};
