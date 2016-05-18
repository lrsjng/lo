const {
    assign,
    contains,
    each,
    isFunction,
    isString,
    map,
    toArray
} = require('./core');

const WIN = global.window;
const INPUT_ELS = ['input', 'select', 'textarea'];
const RE_NAME = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
const RE_TEMPLATE = /\[([_a-zA-Z][_a-zA-Z0-9]*)\]/g;
const ATTR_KEY = 'data-tpl';

const createObj = (proto = null) => Object.create(proto);
const defineProperty = Object.defineProperty;
const isInputEl = el => contains(INPUT_ELS, el.nodeName.toLowerCase());
const isName = x => isString(x) && RE_NAME.test(x);

const defineConst = (inst, name, value) => {
    defineProperty(inst, name, {value});
};

const updateEls = (inst, name, els) => {
    if (!els) {
        els = inst._els[name];
    }
    const value = inst.val[name];
    each(els, el => {
        const prop = isInputEl(el) ? 'value' : 'innerHTML';
        if (el[prop] !== value) {
            el[prop] = value;
        }
    });
};

const callListeners = (inst, name) => {
    const value = inst.val[name];
    each(inst._fns[name], fn => {
        if (isFunction(fn)) {
            fn(value, name, inst);
        }
    });
};

const addVal = (inst, name) => {
    let value = name;

    defineProperty(inst.val, name, {
        enumerable: true,
        set: x => {
            x = String(x);
            if (x !== value) {
                value = x;
                updateEls(inst, name);
                callListeners(inst, name);
            }
        },
        get: () => value
    });
};

const ensureName = (inst, name) => {
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

const findAllTextNodes = node => {
    const textnodes = [].concat(...map(node.childNodes, n => findAllTextNodes(n)));
    if (node.nodeType === WIN.Node.TEXT_NODE) {
        textnodes.push(node);
    }
    return textnodes;
};

const compileTextNode = node => {
    const div = WIN.document.createElement('div');
    div.innerHTML = node.nodeValue.replace(RE_TEMPLATE, (match, name) => `<span ${ATTR_KEY}='${name}'></span>`);
    if (div.childNodes.length) {
        const parent = node.parentNode;
        each(toArray(div.childNodes), n => {
            parent.insertBefore(n, node);
        });
        parent.removeChild(node);
    }
};

const binder = () => {
    const inst = createObj(binder.prototype);
    defineConst(inst, '_els', createObj());
    defineConst(inst, '_fns', createObj());
    defineConst(inst, 'val', createObj());
    return inst;
};

assign(binder.prototype, {
    constructor: binder,

    log() {
        const plain = createObj();
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
            if (ensureName(this, name)) {
                updateEls(this, name, els);
                each(els, el => {
                    if (!contains(this._els[name], el)) {
                        this._els[name].push(el);
                        if (isInputEl(el)) {
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
            if (ensureName(this, name)) {
                this.val[name] = value;
            }
        });
        return this;
    },

    on(name, fn) {
        if (ensureName(this, name)) {
            this._fns[name].push(fn);
        }
        return this;
    },

    collect(containerEl, split) {
        if (!containerEl || !isFunction(containerEl.querySelectorAll)) {
            return this;
        }
        if (split) {
            each(findAllTextNodes(containerEl), compileTextNode);
        }
        const els = toArray(containerEl.querySelectorAll(`[${ATTR_KEY}]`));
        els.unshift(containerEl);
        each(els, el => {
            if (isFunction(el.getAttribute) && el.getAttribute(ATTR_KEY)) {
                this.add({[el.getAttribute(ATTR_KEY)]: [el]});
            }
        });
        return this;
    }
});

module.exports = {
    binder
};
