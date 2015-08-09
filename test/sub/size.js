'use strict';

var insp = require('util').inspect;
var lodash = require('lodash');
var assert = require('chai').assert;
var lo = require('../..');

describe('.size()', function () {

    it('is function', function () {

        assert.isFunction(lo.size);
    });

    lodash.each([
        [undefined, 0],
        [null, 0],
        [true, 0],
        [false, 0],
        [[], 0],
        [[1], 1],
        [[1, 2], 2],
        [[1, 2, 3], 3],
        [[undefined], 1],
        [[null], 1],
        [{}, 0],
        [{a: 0}, 1],
        [{a: 0, b: 0}, 2],
        [{a: 0, b: 0, c: 0}, 3],
        ['', 0],
        ['a', 1],
        ['ab', 2],
        ['abc', 3]
    ], function (x) {

        var obj = x[0];
        var exp = x[1];

        it('size(' + insp(obj) + ') -> ' + insp(exp), function () {

            assert.strictEqual(lo.size(obj), exp);
        });
    });
});
