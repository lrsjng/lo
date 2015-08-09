'use strict';

var insp = require('util').inspect;
var lodash = require('lodash');
var assert = require('chai').assert;
var lo = require('../..');

describe('.has()', function () {

    it('is function', function () {

        assert.isFunction(lo.has);
    });

    lodash.each([
        [{a: 1}, 'a'],
        [{a: null}, 'a'],
        [{a: undefined}, 'a'],
        [[], 'length'],
        ['a', 'length'],
        ['', 'length']
    ], function (x) {

        var obj = x[0];
        var key = x[1];

        it('has(' + insp(obj) + ', ' + insp(key) + ') -> true', function () {

            assert.isTrue(lo.has(obj, key));
        });
    });

    lodash.each([
        [undefined, 'a'],
        [null, 'a'],
        [true, 'a'],
        [false, 'a'],
        [{}, 'a'],
        [{}, undefined],
        [{}, null],
        [{}, true],
        [{}, false],
        ['a', 'a']
    ], function (x) {

        var obj = x[0];
        var key = x[1];

        it('has(' + insp(obj) + ', ' + insp(key) + ') -> false', function () {

            assert.isFalse(lo.has(obj, key));
        });
    });
});
