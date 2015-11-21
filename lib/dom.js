const core = require('./core');

const WIN = global.window || {document: {createElement: () => null}};
const DOC = WIN.document;

const createElement = name => DOC.createElement(name);
const CONTAINER_DIV = createElement('div');
const CONTAINER_TABLE = createElement('table');
const CONTAINER_TBODY = createElement('tbody');
const CONTAINER_TR = createElement('tr');
const CONTAINER_COLGROUP = createElement('colgroup');

const isInstanceOf = core.isInstanceOf;

function publish(obj, arr) {
    core.forEach(arr, (el, idx) => obj[idx] = el);
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
    const container = findContainer(str);
    container.innerHTML = str;
    const res = core.toArray(container.childNodes);
    core.each(res, el => container.removeChild(el));
    container.innerHTML = '';
    return res;
}

function queryAll(selector, context) {
    try {
        return core.toArray((context || DOC).querySelectorAll(selector));
    } catch (err) {/**/}
    return [];
}

const isElement = x => isInstanceOf(x, WIN.Element);
const isDocument = x => isInstanceOf(x, WIN.Document);
const isWindow = x => core.is(x) && x.window === x && isDocument(x.document);
const isElDocWin = x => isElement(x) || isDocument(x) || isWindow(x);

const addListener = (el, type, fn) => el.addEventListener(type, fn);
const removeListener = (el, type, fn) => el.removeEventListener(type, fn);

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
    WIN.matchMedia('print').addListener(mql => {
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

    let els;
    if (core.isString(arg)) {
        arg = arg.trim();
        els = arg[0] === '<' ? parseHtml(arg) : queryAll(arg);
    } else if (isElDocWin(arg)) {
        els = [arg];
    } else {
        els = core.hasLength(arg) ? arg : [arg];
    }
    els = core.filter(els, isElDocWin);

    const inst = Object.create(dom.prototype);
    publish(inst, els);
    return inst;
}

dom.prototype = {
    constructor: dom,

    each(fn) {
        core.each(this, fn);
        return this;
    },

    map(fn) {
        return core.map(this, fn);
    },

    find(selector) {
        let els = [];
        this.each(el => {
            els = els.concat(queryAll(selector, el));
        });
        return dom(els);
    },

    on(type, fn) {
        return this.each(el => addListener(el, type, fn));
    },

    off(type, fn) {
        return this.each(el => removeListener(el, type, fn));
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
            return this.length ? core.toArray(this[0].classList) : [];
        }
        this.each(el => el.className = '');
        return this.addCls(...names);
    },

    hasCls(name) {
        return core.all(this, el => el.classList.contains(name));
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
