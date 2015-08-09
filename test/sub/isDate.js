'use strict';

var insp = require('util').inspect;
var lodash = require('lodash');
var assert = require('chai').assert;
var lo = require('../..');

describe('.isDate()', function () {

    it('is function', function () {

        assert.isFunction(lo.isDate);
    });

    lodash.each([
        new Date(),
        new Date(0)
    ], function (x) {

        it('isDate(' + insp(x) + ') -> true', function () {

            assert.isTrue(lo.isDate(x));
        });
    });

    lodash.each([
        undefined,
        null,
        true,
        false,
        0,
        1,
        'a',
        {},
        /./,
        new Object(), // jshint ignore:line
        (function () { return arguments; }())
    ], function (x) {

        it('isDate(' + insp(x) + ') -> false', function () {

            assert.isFalse(lo.isDate(x));
        });
    });
});
