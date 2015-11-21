const EXPORT = module.exports = {};

const _obj_keys = Object.keys;
const _obj_getProto = Object.getPrototypeOf;
const _obj_proto = Object.prototype;
const _obj_toString = _obj_proto.toString;
const _obj_has = _obj_proto.hasOwnProperty;

const _arr_isArray = Array.isArray;
const _arr_proto = Array.prototype;
const _arr_indexOf = _arr_proto.indexOf;
const _arr_forEach = _arr_proto.forEach;
const _arr_reduce = _arr_proto.reduce;
const _arr_slice = _arr_proto.slice;

const ok = EXPORT.ok = (function () {'use strict'; return !this;}()); // eslint-disable-line func-names, strict, no-invalid-this
if (!ok) {
    if (global.window) {
        global.window.document.documentElement.className += ' no-lo';
    }
    throw new Error('no-lo');
}

const apply = (fn, obj, args) => fn.apply(obj, args); // eslint-disable-line prefer-reflect

function _is_x_fn(type) {
    return x => apply(_obj_toString, x) === `[object ${type}]`;
}

const isArray = EXPORT.isArray = _arr_isArray;
const isArguments = EXPORT.isArguments = _is_x_fn('Arguments');
const isBoolean = EXPORT.isBoolean = _is_x_fn('Boolean');
const isDate = EXPORT.isDate = _is_x_fn('Date');
const isError = EXPORT.isError = _is_x_fn('Error');
const isFunction = EXPORT.isFunction = _is_x_fn('Function');
const isNumber = EXPORT.isNumber = _is_x_fn('Number');
const isObject = EXPORT.isObject = _is_x_fn('Object');
const isRegExp = EXPORT.isRegExp = _is_x_fn('RegExp');
const isString = EXPORT.isString = _is_x_fn('String');

const isNumeric = EXPORT.isNumeric = x => isNumber(x) && isFinite(x);
const isPlainObject = EXPORT.isPlainObject = x => isObject(x) && _obj_getProto(x) === _obj_proto;
const isTypeOf = EXPORT.isTypeOf = (x, typ) => typeof x === typ;
const isInstanceOf = EXPORT.isInstanceOf = (x, typ) => x ? x instanceof typ : false;
const is = EXPORT.is = x => x !== undefined && x !== null;
const has = EXPORT.has = (x, prop) => is(x) && apply(_obj_has, x, [prop]);
const keys = EXPORT.keys = x => isObject(x) ? _obj_keys(x) : [];
const values = EXPORT.values = x => keys(x).map(key => x[key]);
const hasLength = EXPORT.hasLength = x => is(x) && isNumeric(x.length);
const size = EXPORT.size = x => hasLength(x) ? x.length : keys(x).length;
const asArray = EXPORT.asArray = x => hasLength(x) ? x : values(x);
const toArray = EXPORT.toArray = x => apply(_arr_slice, asArray(x));

const forEach = EXPORT.forEach = (x, fn, ctx) => {
    if (isFunction(fn)) {
        apply(_arr_forEach, x, [fn, ctx]);
    }
};

const forOwn = EXPORT.forOwn = (x, fn, ctx) => {
    if (isFunction(fn)) {
        keys(x).forEach(key => apply(fn, ctx, [x[key], key, x]));
    }
};

const each = EXPORT.each = (x, fn, ctx) => {
    if (hasLength(x)) {
        forEach(x, fn, ctx);
    } else {
        forOwn(x, fn, ctx);
    }
};

const assign = EXPORT.assign = (...exts) => {
    const target = exts.shift() || {};

    each(exts, ext => {
        each(ext, (val, key) => {
            target[key] = val;
        });
    });

    return target;
};

const map = EXPORT.map = (x, fn, ctx) => {
    const res = [];
    if (isFunction(fn)) {
        each(x, (val, idx) => res.push(apply(fn, ctx, [val, idx, x])));
    }
    return res;
};

const filter = EXPORT.filter = (x, fn, ctx) => {
    const res = [];
    if (isFunction(fn)) {
        each(x, (val, idx) => {
            if (apply(fn, ctx, [val, idx])) {
                res.push(val);
            }
        });
    }
    return res;
};

const reduce = EXPORT.reduce = (x, fn, init) => apply(_arr_reduce, asArray(x), [fn, init]);
const contains = EXPORT.contains = (x, el) => apply(_arr_indexOf, asArray(x), [el]) >= 0;
const indexOf = EXPORT.indexOf = (x, el) => apply(_arr_indexOf, hasLength(x) ? x : [], [el]);
const compact = EXPORT.compact = x => filter(x, val => !!val);
const pluck = EXPORT.pluck = (x, prop) => map(x, val => val[prop]);
const cmp = EXPORT.cmp = (a, b) => a < b ? -1 : a > b ? 1 : 0;
const sortBy = EXPORT.sortBy = (list, selector = x => x) => toArray(list).sort((a, b) => cmp(selector(a), selector(b)));

const uniq = EXPORT.uniq = x => {
    const cache = {};
    return filter(x, val => {
        if (!has(cache, val)) {
            cache[val] = 1;
            return true;
        }
    });
};

const all = EXPORT.all = (x, fn) => {
    for (const xi of asArray(x)) {
        if (!fn(xi)) {
            return false;
        }
    }
    return true;
};

const any = EXPORT.any = (x, fn) => {
    for (const xi of asArray(x)) {
        if (fn(xi)) {
            return true;
        }
    }
    return false;
};
