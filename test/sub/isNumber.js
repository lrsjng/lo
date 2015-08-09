'use strict';

var insp = require('util').inspect;
var lodash = require('lodash');
var assert = require('chai').assert;
var lo = require('../..');

describe('.isNumber()', function () {

    it('is function', function () {

        assert.isFunction(lo.isNumber);
    });

    lodash.each([
        0,
        1,
        0.0,
        -0,
        -1,
        1 / 3,
        NaN,
        Infinity,
        new Number(), // jshint ignore: line
        new Number(0) // jshint ignore: line
    ], function (x) {

        it('isNumber(' + insp(x) + ') -> true', function () {

            assert.isTrue(lo.isNumber(x));
        });
    });

    lodash.each([
        true,
        false,
        undefined,
        null,
        {},
        'a',
        /./,
        new Object(), // jshint ignore: line
        new Date()
    ], function (x) {

        it('isNumber(' + insp(x) + ') -> false', function () {

            assert.isFalse(lo.isNumber(x));
        });
    });
});
