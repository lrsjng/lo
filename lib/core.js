const _OBJ_PROTO = Object.prototype;
const _OBJ_GET_PROTO = Object.getPrototypeOf;
const _ARR_PROTO = Array.prototype;

const _apply = (fn, ctx, args) => fn.apply(ctx, args); // eslint-disable-line prefer-reflect
const _create_type_check_fn = type => x => _apply(_OBJ_PROTO.toString, x) === `[object ${type}]`;
const _is_obj = _create_type_check_fn('Object');

const is_obj = x => x !== null && typeof x === 'object';
const is_plain_obj = x => _is_obj(x) && (_OBJ_GET_PROTO(x) === _OBJ_PROTO || _OBJ_GET_PROTO(x) === null);
const is_arr = Array.isArray;
const is_args = _create_type_check_fn('Arguments');
const is_bool = _create_type_check_fn('Boolean');
const is_date = _create_type_check_fn('Date');
const is_err = _create_type_check_fn('Error');
const is_fn = _create_type_check_fn('Function');
const is_num = _create_type_check_fn('Number');
const is_re = _create_type_check_fn('RegExp');
const is_str = _create_type_check_fn('String');

const is_numeric = x => is_num(x) && isFinite(x);
const is_type_of = (x, typ) => typeof x === typ;
const is_inst_of = (x, typ) => x ? x instanceof typ : false;
const is = x => x !== undefined && x !== null;
const has = (x, prop) => is(x) && _apply(_OBJ_PROTO.hasOwnProperty, x, [prop]);
const keys = x => is_obj(x) ? Object.keys(x) : [];
const vals = x => keys(x).map(key => x[key]);
const has_len = x => is(x) && is_numeric(x.length);
const size = x => has_len(x) ? x.length : keys(x).length;
const as_arr = x => has_len(x) ? x : vals(x);
const to_arr = x => is_arr(x) ? x : has_len(x) ? _apply(_ARR_PROTO.slice, x) : vals(x);
const as_fn = x => is_fn(x) ? x : () => x;

const for_each = (x, fn, ctx) => _apply(_ARR_PROTO.forEach, x, [fn, ctx]);
const for_own = (x, fn, ctx) => keys(x).forEach(key => _apply(fn, ctx, [x[key], key, x]));
const each = (x, fn, ctx) => (has_len(x) ? for_each : for_own)(x, fn, ctx);

const map = (x, fn) => to_arr(x).map(fn);
const filter = (x, fn) => to_arr(x).filter(fn);
const every = (x, fn) => to_arr(x).every(fn);
const some = (x, fn) => to_arr(x).some(fn);
const reduce = (x, fn, init) => to_arr(x).reduce(fn, init);
const idx_of = (x, el) => to_arr(x).indexOf(el);
const includes = (x, el) => idx_of(x, el) >= 0;
const compact = x => filter(x, val => !!val);

const cmp = (a, b) => a < b ? -1 : a > b ? 1 : 0;
const sort = (x, fn) => to_arr(x).sort(fn);
const sort_by = (x, fn) => sort(x, (a, b) => cmp(fn(a), fn(b)));

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
    as_arr,
    as_fn,
    cmp,
    compact,
    includes,
    each,
    every,
    filter,
    for_each,
    for_own,
    has,
    has_len,
    idx_of,
    is,
    is_args,
    is_arr,
    is_bool,
    is_date,
    is_err,
    is_fn,
    is_inst_of,
    is_num,
    is_numeric,
    is_obj,
    is_plain_obj,
    is_re,
    is_str,
    is_type_of,
    keys,
    map,
    reduce,
    size,
    some,
    sort,
    sort_by,
    to_arr,
    uniq,
    vals
};
