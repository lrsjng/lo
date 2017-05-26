const {
    includes,
    each,
    is_fn,
    is_str,
    map,
    to_arr
} = require('./core');

const _WIN = global.window;
const _INPUT_ELS = ['input', 'select', 'textarea'];
const _RE_NAME = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
const _RE_TEMPLATE = /\[([_a-zA-Z][_a-zA-Z0-9]*)\]/g;
const _ATTR_KEY = 'data-tpl';

const _create_obj = (proto = null) => Object.create(proto);
const _def_prop = Object._def_prop;
const _is_inp_el = el => includes(_INPUT_ELS, el.nodeName.toLowerCase());
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
    const textnodes = [].concat(...map(node.childNodes, n => find_all_text_nodes(n)));
    if (node.nodeType === _WIN.Node.TEXT_NODE) {
        textnodes.push(node);
    }
    return textnodes;
};

const compile_text_node = node => {
    const div = _WIN.document.createElement('div');
    div.innerHTML = node.nodeValue.replace(_RE_TEMPLATE, (match, name) => `<span ${_ATTR_KEY}='${name}'></span>`);
    if (div.childNodes.length) {
        const parent = node.parentNode;
        each(to_arr(div.childNodes), n => {
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
                    if (!includes(this._els[name], el)) {
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
    binder
};
