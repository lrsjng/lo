const EX = module.exports = {};

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

EX.ok = (function () {'use strict'; return !this;}()); // eslint-disable-line func-names, strict, no-invalid-this
if (!EX.ok) {
    global.window.document.documentElement.className += ' no-lo';
    throw new Error('no-lo');
}

const apply = (fn, obj, args) => fn.apply(obj, args); // eslint-disable-line prefer-reflect

function _is_x_fn(type) {
    return x => apply(_obj_toString, x) === `[object ${type}]`;
}

const _is_obj = _is_x_fn('Object');
const isObject = EX.isObject = x => x !== null && typeof x === 'object';
EX.isPlainObject = x => _is_obj(x) && (_obj_getProto(x) === _obj_proto || _obj_getProto(x) === null);

EX.isArray = _arr_isArray;
EX.isArguments = _is_x_fn('Arguments');
EX.isBoolean = _is_x_fn('Boolean');
EX.isDate = _is_x_fn('Date');
EX.isError = _is_x_fn('Error');
const isFunction = EX.isFunction = _is_x_fn('Function');
const isNumber = EX.isNumber = _is_x_fn('Number');
EX.isRegExp = _is_x_fn('RegExp');
EX.isString = _is_x_fn('String');

const isNumeric = EX.isNumeric = x => isNumber(x) && isFinite(x);
EX.isTypeOf = (x, typ) => typeof x === typ;
EX.isInstanceOf = (x, typ) => x ? x instanceof typ : false;
const is = EX.is = x => x !== undefined && x !== null;
const has = EX.has = (x, prop) => is(x) && apply(_obj_has, x, [prop]);
const keys = EX.keys = x => isObject(x) ? _obj_keys(x) : [];
const values = EX.values = x => keys(x).map(key => x[key]);
const hasLength = EX.hasLength = x => is(x) && isNumeric(x.length);
EX.size = x => hasLength(x) ? x.length : keys(x).length;
const asArray = EX.asArray = x => hasLength(x) ? x : values(x);
const toArray = EX.toArray = x => apply(_arr_slice, asArray(x));

const forEach = EX.forEach = (x, fn, ctx) => {
    if (isFunction(fn)) {
        apply(_arr_forEach, x, [fn, ctx]);
    }
};

const forOwn = EX.forOwn = (x, fn, ctx) => {
    if (isFunction(fn)) {
        keys(x).forEach(key => apply(fn, ctx, [x[key], key, x]));
    }
};

const each = EX.each = (x, fn, ctx) => {
    if (hasLength(x)) {
        forEach(x, fn, ctx);
    } else {
        forOwn(x, fn, ctx);
    }
};

EX.assign = (...exts) => {
    const target = exts.shift() || {};

    each(exts, ext => {
        each(ext, (val, key) => {
            target[key] = val;
        });
    });

    return target;
};

const map = EX.map = (x, fn, ctx) => {
    const res = [];
    if (isFunction(fn)) {
        each(x, (val, idx) => res.push(apply(fn, ctx, [val, idx, x])));
    }
    return res;
};

const filter = EX.filter = (x, fn, ctx) => {
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

EX.reduce = (x, fn, init) => apply(_arr_reduce, asArray(x), [fn, init]);
EX.contains = (x, el) => apply(_arr_indexOf, asArray(x), [el]) >= 0;
EX.indexOf = (x, el) => apply(_arr_indexOf, hasLength(x) ? x : [], [el]);
EX.compact = x => filter(x, val => !!val);
EX.pluck = (x, prop) => map(x, val => val[prop]);
const cmp = EX.cmp = (a, b) => a < b ? -1 : a > b ? 1 : 0;
EX.sortBy = (list, selector = x => x) => toArray(list).sort((a, b) => cmp(selector(a), selector(b)));

EX.uniq = x => {
    const cache = {};
    return filter(x, val => {
        if (!has(cache, val)) {
            cache[val] = 1;
            return true;
        }
    });
};

EX.all = (x, fn) => {
    for (const xi of asArray(x)) {
        if (!fn(xi)) {
            return false;
        }
    }
    return true;
};

EX.any = (x, fn) => {
    for (const xi of asArray(x)) {
        if (fn(xi)) {
            return true;
        }
    }
    return false;
};
