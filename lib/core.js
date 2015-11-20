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

export const ok = (function () {'use strict'; return !this;}()); // eslint-disable-line func-names, strict, no-invalid-this
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

export const isArray = _arr_isArray;
export const isArguments = _is_x_fn('Arguments');
export const isBoolean = _is_x_fn('Boolean');
export const isDate = _is_x_fn('Date');
export const isError = _is_x_fn('Error');
export const isFunction = _is_x_fn('Function');
export const isNumber = _is_x_fn('Number');
export const isObject = _is_x_fn('Object');
export const isRegExp = _is_x_fn('RegExp');
export const isString = _is_x_fn('String');


export const isNumeric = x => isNumber(x) && isFinite(x);
export const isPlainObject = x => isObject(x) && _obj_getProto(x) === _obj_proto;
export const isTypeOf = (x, typ) => typeof x === typ;
export const isInstanceOf = (x, typ) => x ? x instanceof typ : false;
export const is = x => x !== undefined && x !== null;
export const has = (x, prop) => is(x) && apply(_obj_has, x, [prop]);
export const keys = x => isObject(x) ? _obj_keys(x) : [];
export const values = x => keys(x).map(key => x[key]);
export const hasLength = x => is(x) && isNumeric(x.length);
export const size = x => hasLength(x) ? x.length : keys(x).length;
export const asArray = x => hasLength(x) ? x : values(x);
export const toArray = x => apply(_arr_slice, asArray(x));


export function forEach(x, fn, ctx) {
    if (isFunction(fn)) {
        apply(_arr_forEach, x, [fn, ctx]);
    }
}

export function forOwn(x, fn, ctx) {
    if (isFunction(fn)) {
        keys(x).forEach(key => apply(fn, ctx, [x[key], key, x]));
    }
}

export function each(x, fn, ctx) {
    if (hasLength(x)) {
        forEach(x, fn, ctx);
    } else {
        forOwn(x, fn, ctx);
    }
}

export function assign(...exts) {
    const target = exts.shift() || {};

    each(exts, ext => {
        each(ext, (val, key) => {
            target[key] = val;
        });
    });

    return target;
}

export function map(x, fn, ctx) {
    const res = [];
    if (isFunction(fn)) {
        each(x, (val, idx) => res.push(apply(fn, ctx, [val, idx, x])));
    }
    return res;
}

export function filter(x, fn, ctx) {
    const res = [];
    if (isFunction(fn)) {
        each(x, (val, idx) => {
            if (apply(fn, ctx, [val, idx])) {
                res.push(val);
            }
        });
    }
    return res;
}

export const reduce = (x, fn, init) => apply(_arr_reduce, asArray(x), [fn, init]);
export const contains = (x, el) => apply(_arr_indexOf, asArray(x), [el]) >= 0;
export const indexOf = (x, el) => apply(_arr_indexOf, hasLength(x) ? x : [], [el]);
export const compact = x => filter(x, val => !!val);
export const pluck = (x, prop) => map(x, val => val[prop]);
export const cmp = (a, b) => a < b ? -1 : a > b ? 1 : 0;
export const sortBy = (list, selector = x => x) => toArray(list).sort((a, b) => cmp(selector(a), selector(b)));

export function uniq(x) {
    const cache = {};
    return filter(x, val => {
        if (!has(cache, val)) {
            cache[val] = 1;
            return true;
        }
    });
}

export function all(x, fn) {
    for (const xi of asArray(x)) {
        if (!fn(xi)) {
            return false;
        }
    }
    return true;
}

export function any(x, fn) {
    for (const xi of asArray(x)) {
        if (fn(xi)) {
            return true;
        }
    }
    return false;
}
