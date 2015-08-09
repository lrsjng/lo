'use strict';

var insp = require('util').inspect;
var lodash = require('lodash');
var assert = require('chai').assert;
var lo = require('../..');

describe('.contains()', function () {

    it('is function', function () {

        assert.isFunction(lo.contains);
    });

    lodash.each([
        [[undefined], undefined],
        [[null], null],
        [[1], 1],
        [[1, 2, 3], 1],
        [[2, 3, 1], 1],
        [[1, 1, 1], 1],
        ['abc', 'a'],
        ['a', 'a'],
        [{a: 1}, 1]
    ], function (x) {

        var arr = x[0];
        var val = x[1];

        it('contains(' + insp(arr) + ', ' + insp(val) + ') -> true', function () {

            assert.isTrue(lo.contains(arr, val));
        });
    });

    lodash.each([
        [undefined, undefined],
        [null, null],
        [true, true],
        [false, false],
        [undefined, 'a'],
        [null, 'a'],
        [true, 'a'],
        [false, 'a'],
        [[], 'a'],
        [[], undefined],
        [[], null],
        [[], true],
        [[], false],
        ['xyz', 'a'],
        ['', 'a'],
        [{}, undefined],
        [{}, null],
        [{a: 1}, 0]
    ], function (x) {

        var arr = x[0];
        var val = x[1];

        it('contains(' + insp(arr) + ', ' + insp(val) + ') -> false', function () {

            assert.isFalse(lo.contains(arr, val));
        });
    });
});
