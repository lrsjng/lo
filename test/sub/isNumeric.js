'use strict';

var insp = require('util').inspect;
var lodash = require('lodash');
var assert = require('chai').assert;
var lo = require('../..');

describe('.isNumeric()', function () {

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
        new Number(), // jshint ignore:line
        new Number(0) // jshint ignore:line
    ], function (x) {

        it('isNumeric(' + insp(x) + ') -> true', function () {

            assert.isTrue(lo.isNumeric(x));
        });
    });

    lodash.each([
        NaN,
        Infinity,
        true,
        false,
        undefined,
        null,
        {},
        'a',
        /./,
        new Object(), // jshint ignore:line
        new Date()
    ], function (x) {

        it('isNumeric(' + insp(x) + ') -> false', function () {

            assert.isFalse(lo.isNumeric(x));
        });
    });
});
