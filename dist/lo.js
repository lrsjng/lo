/* lo 0.4.0 - http://larsjung.de/lo/ */
(function (root, factory) {
    'use strict';
    // istanbul ignore else
    if (typeof module === 'object') {
        module.exports = factory();
    } else {
        root.lo = factory();
    }
}(this, function () {
    'use strict';

    var lo = {};

    var _obj_keys = Object.keys;
    var _obj_getProto = Object.getPrototypeOf;
    var _obj_proto = Object.prototype;
    var _obj_toString = _obj_proto.toString;
    var _obj_has = _obj_proto.hasOwnProperty;

    var _arr_isArray = Array.isArray;
    var _arr_proto = Array.prototype;
    var _arr_indexOf = _arr_proto.indexOf;
    var _arr_forEach = _arr_proto.forEach;
    var _arr_reduce = _arr_proto.reduce;
    var _arr_slice = _arr_proto.slice;


    lo.ok = !!_obj_keys;


    function _is_x_fn(type) {
        return function (x) {
            return _obj_toString.call(x) === '[object ' + type + ']';
        };
    }

    lo.isArguments = _is_x_fn('Arguments');
    lo.isArray = _arr_isArray;
    lo.isBoolean = _is_x_fn('Boolean');
    lo.isDate = _is_x_fn('Date');
    lo.isError = _is_x_fn('Error');
    lo.isRegExp = _is_x_fn('RegExp');
    lo.isString = _is_x_fn('String');

    var isFunction = _is_x_fn('Function');
    lo.isFunction = isFunction;

    var isNumber = _is_x_fn('Number');
    lo.isNumber = isNumber;

    function isNumeric(x) {
        return isNumber(x) && isFinite(x);
    }
    lo.isNumeric = isNumeric;

    var isObject = _is_x_fn('Object');
    lo.isObject = isObject;

    function isPlainObject(x) {
        return isObject(x) && _obj_getProto(x) === _obj_proto;
    }
    lo.isPlainObject = isPlainObject;


    function isTypeOf(x, typ) {
        return typeof x === typ;
    }
    lo.isTypeOf = isTypeOf;


    function isInstanceOf(x, typ) {
        return isFunction(typ) && x instanceof typ;
    }
    lo.isInstanceOf = isInstanceOf;


    function is(x) {
        return x !== undefined && x !== null;
    }
    lo.is = is;


    function has(x, prop) {
        return is(x) && _obj_has.call(x, prop);
    }
    lo.has = has;


    function hasLength(x) {
        return has(x, 'length') && isNumeric(x.length);
    }
    lo.hasLength = hasLength;


    function keys(x) {
        return isObject(x) ? _obj_keys(x) : [];
    }
    lo.keys = keys;


    function size(x) {
        return hasLength(x) ? x.length : keys(x).length;
    }
    lo.size = size;


    function asArray(x) {
        return hasLength(x) ? x : values(x);
    }
    lo.asArray = asArray;


    function toArray(x) {
        return _arr_slice.call(asArray(x));
    }
    lo.toArray = toArray;


    function forEach(x, fn, ctx) {
        if (isFunction(fn)) {
            _arr_forEach.call(x, fn, ctx);
        }
    }
    lo.forEach = forEach;


    function forOwn(x, fn, ctx) {
        if (isFunction(fn)) {
            keys(x).forEach(function (key) {
                fn.call(ctx, x[key], key, x);
            });
        }
    }
    lo.forOwn = forOwn;


    function each(x, fn, ctx) {
        if (hasLength(x)) {
            forEach(x, fn, ctx);
        } else {
            forOwn(x, fn, ctx);
        }
    }
    lo.each = each;


    function assign() {
        var exts = _arr_slice.call(arguments);
        var target = exts.shift() || {};

        each(exts, function (ext) {
            each(ext, function (val, key) {
                target[key] = val;
            });
        });

        return target;
    }
    lo.assign = assign;


    function map(x, fn, ctx) {
        var res = [];
        if (isFunction(fn)) {
            each(x, function (val, idx) {
                res.push(fn.call(ctx, val, idx, x));
            });
        }
        return res;
    }
    lo.map = map;


    function filter(x, fn, ctx) {
        var res = [];
        if (isFunction(fn)) {
            each(x, function (val, idx) {
                if (fn.call(ctx, val, idx)) {
                    res.push(val);
                }
            });
        }
        return res;
    }
    lo.filter = filter;


    function reduce(x, fn, init) {
        return _arr_reduce.call(asArray(x), fn, init);
    }
    lo.reduce = reduce;


    function values(x) {
        return map(keys(x), function (key) {
            return x[key];
        });
    }
    lo.values = values;


    function contains(x, el) {
        return _arr_indexOf.call(asArray(x), el) >= 0;
    }
    lo.contains = contains;


    function indexOf(x, el) {
        return _arr_indexOf.call(hasLength(x) ? x : [], el);
    }
    lo.indexOf = indexOf;


    function compact(x) {
        return filter(x, function (val) {
            return val;
        });
    }
    lo.compact = compact;


    function uniq(x) {
        var cache = {};
        return filter(x, function (val) {
            if (!has(cache, val)) {
                cache[val] = 1;
                return true;
            }
        });
    }
    lo.uniq = uniq;


    function pluck(x, prop) {
        return map(x, function (val) {
            return val[prop];
        });
    }
    lo.pluck = pluck;


    function all(x, fn) {
        x = asArray(x);
        var len = x.length;
        var i = 0;
        for (; i < len; i += 1) {
            if (!fn(x[i])) {
                return false;
            }
        }
        return true;
    }
    lo.all = all;


    function any(x, fn) {
        x = asArray(x);
        var len = x.length;
        var i = 0;
        for (; i < len; i += 1) {
            if (fn(x[i])) {
                return true;
            }
        }
        return false;
    }
    lo.any = any;


    return lo;
}));
