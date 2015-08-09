'use strict';

var insp = require('util').inspect;
var lodash = require('lodash');
var assert = require('chai').assert;
var lo = require('../..');

describe('.compact()', function () {

    it('is function', function () {

        assert.isFunction(lo.compact);
    });

    lodash.each([
        [[], []],
        [[1], [1]],
        [[1, 1], [1, 1]],
        [[1, 2, 1], [1, 2, 1]],
        [[1, 0, 2], [1, 2]],
        [[1, null, 2], [1, 2]],
        [[1, undefined, 2], [1, 2]],
        [[1, '', 2], [1, 2]],
        [[0, null, undefined, ''], []],
        [undefined, []],
        [null, []],
        [0, []],
        [false, []],
        [true, []],
        ['abc', ['a', 'b', 'c']],
        ['aac', ['a', 'a', 'c']]
    ], function (x) {

        var arg = x[0];
        var res = x[1];

        it('compact(' + insp(arg) + ') -> ' + insp(res), function () {

            assert.deepEqual(lo.compact(arg), res);
        });
    });
});
