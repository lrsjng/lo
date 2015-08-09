'use strict';

var lodash = require('lodash');
var assert = require('chai').assert;
var lo = require('..');

describe('lo', function () {

    it('is plain object', function () {
        assert.isTrue(lodash.isPlainObject(lo));
    });

    it('has the right properties', function () {
        // debounce
        // difference
        // intersection
        // sortBy
        // trim

        assert.deepEqual(lodash.keys(lo).sort(), [
            'all',
            'any',
            'asArray',
            'assign',
            'compact',
            'contains',
            'each',
            'filter',
            'forEach',
            'forOwn',
            'has',
            'hasLength',
            'indexOf',
            'is',
            'isArguments',
            'isArray',
            'isBoolean',
            'isDate',
            'isError',
            'isFunction',
            'isInstanceOf',
            'isNumber',
            'isNumeric',
            'isObject',
            'isPlainObject',
            'isRegExp',
            'isString',
            'isTypeOf',
            'keys',
            'map',
            'ok',
            'pluck',
            'reduce',
            'size',
            'toArray',
            'uniq',
            'values'
        ].sort());
    });

    it('works in this environment (.ok is true)', function () {
        assert.isTrue(lo.ok);
    });

    require('./sub/assign');
    require('./sub/compact');
    require('./sub/contains');
    require('./sub/each');
    require('./sub/filter');
    require('./sub/has');
    require('./sub/hasLength');
    require('./sub/isArguments');
    require('./sub/isArray');
    require('./sub/isBoolean');
    require('./sub/isDate');
    require('./sub/isError');
    require('./sub/isFunction');
    require('./sub/isInstanceOf');
    require('./sub/isNumber');
    require('./sub/isNumeric');
    require('./sub/isObject');
    require('./sub/isPlainObject');
    require('./sub/isRegExp');
    require('./sub/isString');
    require('./sub/isTypeOf');
    require('./sub/keys');
    require('./sub/map');
    require('./sub/size');
    require('./sub/pluck');
    require('./sub/uniq');
    require('./sub/values');
});
