const OBJ_PROTO = Object.prototype;
const OBJ_GET_PROTO = Object.getPrototypeOf;
const ARR_PROTO = Array.prototype;

const _apply = (fn, ctx, args) => fn.apply(ctx, args); // eslint-disable-line prefer-reflect
const _typeCheckFn = type => x => _apply(OBJ_PROTO.toString, x) === `[object ${type}]`;
const _is_obj = _typeCheckFn('Object');

const isObject = x => x !== null && typeof x === 'object';
const isPlainObject = x => _is_obj(x) && (OBJ_GET_PROTO(x) === OBJ_PROTO || OBJ_GET_PROTO(x) === null);
const isArray = Array.isArray;
const isArguments = _typeCheckFn('Arguments');
const isBoolean = _typeCheckFn('Boolean');
const isDate = _typeCheckFn('Date');
const isError = _typeCheckFn('Error');
const isFunction = _typeCheckFn('Function');
const isNumber = _typeCheckFn('Number');
const isRegExp = _typeCheckFn('RegExp');
const isString = _typeCheckFn('String');

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
const toArray = x => isArray(x) ? x : hasLength(x) ? _apply(ARR_PROTO.slice, x) : values(x);
const asFunction = x => isFunction(x) ? x : () => x;

const assign = (...exts) => Object.assign(exts.shift() || {}, ...exts);

const forEach = (x, fn, ctx) => _apply(ARR_PROTO.forEach, x, [fn, ctx]);
const forOwn = (x, fn, ctx) => keys(x).forEach(key => _apply(fn, ctx, [x[key], key, x]));
const each = (x, fn, ctx) => (hasLength(x) ? forEach : forOwn)(x, fn, ctx);

const map = (x, fn) => toArray(x).map(fn);
const filter = (x, fn) => toArray(x).filter(fn);
const every = (x, fn) => toArray(x).every(fn);
const some = (x, fn) => toArray(x).some(fn);
const reduce = (x, fn, init) => toArray(x).reduce(fn, init);
const indexOf = (x, el) => toArray(x).indexOf(el);
const contains = (x, el) => indexOf(x, el) >= 0;
const compact = x => filter(x, val => !!val);

const cmp = (a, b) => a < b ? -1 : a > b ? 1 : 0;
const sort = (x, fn) => toArray(x).sort(fn);
const sortBy = (x, fn) => sort(x, (a, b) => cmp(fn(a), fn(b)));

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

module.exports = {
    asArray,
    asFunction,
    assign,
    cmp,
    compact,
    contains,
    each,
    every,
    filter,
    forEach,
    forOwn,
    has,
    hasLength,
    indexOf,
    is,
    isArguments,
    isArray,
    isBoolean,
    isDate,
    isError,
    isFunction,
    isInstanceOf,
    isNumber,
    isNumeric,
    isObject,
    isPlainObject,
    isRegExp,
    isString,
    isTypeOf,
    keys,
    map,
    reduce,
    size,
    some,
    sort,
    sortBy,
    toArray,
    uniq,
    values
};
