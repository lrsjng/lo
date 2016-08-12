const {each, every, filter, forEach, hasLength, is, isInstanceOf, isString, map, toArray} = require('./core');

const WIN = global.window;
const DOC = WIN.document;

const parseHtml = (() => {
    const create = name => DOC.createElement(name);
    const rules = [
        [/^<t(head|body|foot)|^<c(ap|olg)/i, create('table')],
        [/^<col/i, create('colgroup')],
        [/^<tr/i, create('tbody')],
        [/^<t[dh]/i, create('tr')]
    ];
    const div = create('div');

    const findContainer = str => {
        for (const [re, el] of rules) {
            if (re.test(str)) {
                return el;
            }
        }
        return div;
    };

    return str => {
        const container = findContainer(str);
        container.innerHTML = str;
        const res = toArray(container.childNodes);
        forEach(res, el => container.removeChild(el));
        container.innerHTML = '';
        return res;
    };
})();

const queryAll = (selector, context) => {
    try {
        return toArray((context || DOC).querySelectorAll(selector));
    } catch (err) {
        return [];
    }
};

const isElement = x => isInstanceOf(x, WIN.Element);
const isDocument = x => isInstanceOf(x, WIN.Document);
const isWindow = x => is(x) && x.window === x && isDocument(x.document);
const isElDocWin = x => isElement(x) || isDocument(x) || isWindow(x);

const on = (el, type, fn) => el.addEventListener(type, fn);
const off = (el, type, fn) => el.removeEventListener(type, fn);

const onReady = fn => {
    if (/^(i|c|loade)/.test(DOC.readyState)) {
        fn();
    } else {
        on(DOC, 'DOMContentLoaded', fn);
    }
};

const onResize = fn => {
    on(WIN, 'resize', fn);
};

const onPrint = (before, after) => {
    WIN.matchMedia('print').addListener(mql => {
        if (mql.matches) {
            before();
        } else {
            after();
        }
    });
};

const dom = arg => {
    if (isInstanceOf(arg, dom)) {
        return arg;
    }

    let els;
    if (isString(arg)) {
        arg = arg.trim();
        els = arg[0] === '<' ? parseHtml(arg) : queryAll(arg);
    } else if (isElDocWin(arg)) {
        els = [arg];
    } else {
        els = hasLength(arg) ? arg : [arg];
    }
    els = filter(els, isElDocWin);

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
        return dom([].concat(...this.map(el => queryAll(selector, el))));
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

    rmAttr(key) {
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

    appTo(arg) {
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

    preTo(arg) {
        dom(arg).pre(this);
        return this;
    },

    cls(...names) {
        if (!names.length) {
            return this.length ? toArray(this[0].classList) : [];
        }
        this.each(el => {el.className = '';});
        return this.addCls(...names);
    },

    hasCls(name) {
        return every(this, el => el.classList.contains(name));
    },

    addCls(...names) {
        return this.each(el => {
            for (const name of names) {
                el.classList.add(name);
            }
        });
    },

    rmCls(...names) {
        return this.each(el => {
            for (const name of names) {
                el.classList.remove(name);
            }
        });
    }
};

module.exports = {
    isElement,
    isDocument,
    isWindow,
    isElDocWin,
    onReady,
    onResize,
    onPrint,
    dom
};
