const OBJ_PROTO = Object.prototype;
const OBJ_GET_PROTO = Object.getPrototypeOf;

const ARR_PROTO = Array.prototype;
const ARR_INDEX_OF = ARR_PROTO.indexOf;

const ok = true;

const _apply = (fn, ctx, args) => fn.apply(ctx, args); // eslint-disable-line prefer-reflect
const _createTypeCheckFn = type => x => _apply(OBJ_PROTO.toString, x) === `[object ${type}]`;
const _is_obj = _createTypeCheckFn('Object');

const isObject = x => x !== null && typeof x === 'object';
const isPlainObject = x => _is_obj(x) && (OBJ_GET_PROTO(x) === OBJ_PROTO || OBJ_GET_PROTO(x) === null);
const isArray = Array.isArray;
const isArguments = _createTypeCheckFn('Arguments');
const isBoolean = _createTypeCheckFn('Boolean');
const isDate = _createTypeCheckFn('Date');
const isError = _createTypeCheckFn('Error');
const isFunction = _createTypeCheckFn('Function');
const isNumber = _createTypeCheckFn('Number');
const isRegExp = _createTypeCheckFn('RegExp');
const isString = _createTypeCheckFn('String');

const isNumeric = x => isNumber(x) && isFinite(x);
const isTypeOf = (x, typ) => typeof x === typ;
const isInstanceOf = (x, typ) => x ? x instanceof typ : false;
const is = x => x !== undefined && x !== null;
const has = (x, prop) => is(x) && _apply(OBJ_PROTO.hasOwnProperty, x, [prop]);
const keys = x => isObject(x) ? Object.keys(x) : [];
const values = x => keys(x).map(key => x[key]);
const hasLength = x => is(x) && isNumeric(x.length);
const size = x => hasLength(x) ? x.length : keys(x).length;
const asArray = x => hasLength(x) ? x : values(x);
const toArray = x => _apply(ARR_PROTO.slice, asArray(x));

const forEach = (x, fn, ctx) => {
    if (isFunction(fn)) {
        _apply(ARR_PROTO.forEach, x, [fn, ctx]);
    }
};

const forOwn = (x, fn, ctx) => {
    if (isFunction(fn)) {
        keys(x).forEach(key => _apply(fn, ctx, [x[key], key, x]));
    }
};

const each = (x, fn, ctx) => (hasLength(x) ? forEach : forOwn)(x, fn, ctx);

const assign = (...exts) => {
    const target = exts.shift() || {};

    each(exts, ext => {
        each(ext, (val, key) => {
            target[key] = val;
        });
    });

    return target;
};

const map = (x, fn, ctx) => {
    const res = [];
    if (isFunction(fn)) {
        each(x, (val, idx) => res.push(_apply(fn, ctx, [val, idx, x])));
    }
    return res;
};

const filter = (x, fn, ctx) => {
    const res = [];
    if (isFunction(fn)) {
        each(x, (val, idx) => {
            if (_apply(fn, ctx, [val, idx])) {
                res.push(val);
            }
        });
    }
    return res;
};

const reduce = (x, fn, init) => _apply(ARR_PROTO.reduce, asArray(x), [fn, init]);
const contains = (x, el) => _apply(ARR_INDEX_OF, asArray(x), [el]) >= 0;
const indexOf = (x, el) => _apply(ARR_INDEX_OF, hasLength(x) ? x : [], [el]);
const compact = x => filter(x, val => !!val);
const pluck = (x, prop) => map(x, val => val[prop]);
const cmp = (a, b) => a < b ? -1 : a > b ? 1 : 0;
const sortBy = (list, selector = x => x) => toArray(list).sort((a, b) => cmp(selector(a), selector(b)));

const uniq = x => {
    const cache = {};
    return filter(x, val => {
        if (!has(cache, val)) {
            cache[val] = 1;
            return true;
        }
        return false;
    });
};

const all = (x, fn) => {
    for (const xi of asArray(x)) {
        if (!fn(xi)) {
            return false;
        }
    }
    return true;
};

const any = (x, fn) => {
    for (const xi of asArray(x)) {
        if (fn(xi)) {
            return true;
        }
    }
    return false;
};

module.exports = {
    ok,
    isObject,
    isPlainObject,
    isArray,
    isArguments,
    isBoolean,
    isDate,
    isError,
    isFunction,
    isNumber,
    isRegExp,
    isString,
    isNumeric,
    isTypeOf,
    isInstanceOf,
    is,
    has,
    keys,
    values,
    hasLength,
    size,
    asArray,
    toArray,
    forEach,
    forOwn,
    each,
    assign,
    map,
    filter,
    reduce,
    contains,
    indexOf,
    compact,
    pluck,
    cmp,
    sortBy,
    uniq,
    all,
    any
};
