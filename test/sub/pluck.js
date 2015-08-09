'use strict';

var insp = require('util').inspect;
var lodash = require('lodash');
var assert = require('chai').assert;
var lo = require('../..');

describe('.pluck()', function () {

    it('is function', function () {
        assert.isFunction(lo.pluck);
    });

    lodash.each([
        [undefined, undefined, []],
        [[], 'a', []],
        [[1, 2, 3], 'a', [undefined, undefined, undefined]],
        [[{}], 'a', [undefined]],
        [[{a: 1}], 'a', [1]],
        [[{a: 1}, {a: 2}, {a: 3}], 'a', [1, 2, 3]]
    ], function (x) {
        var arr = x[0];
        var prop = x[1];
        var exp = x[2];
        var res = lo.pluck(arr, prop);

        it('pluck(' + insp(arr) + ', ' + insp(prop) + ') -> ' + insp(res), function () {
            assert.deepEqual(res, exp);
        });
    });
});
