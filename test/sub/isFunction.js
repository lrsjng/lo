'use strict';

var insp = require('util').inspect;
var lodash = require('lodash');
var assert = require('chai').assert;
var lo = require('../..');

describe('.isFunction()', function () {

    it('is function', function () {

        assert.isFunction(lo.isFunction);
    });

    lodash.each([
        function () {},
        function a() {},
        describe,
        it,
        Object.prototype.toString
    ], function (x) {

        it('isFunction(' + insp(x) + ') -> true', function () {

            assert.isTrue(lo.isFunction(x));
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
        new Date(),
        new Error(),
        (function () { return arguments; }())
    ], function (x) {

        it('isFunction(' + insp(x) + ') -> false', function () {

            assert.isFalse(lo.isFunction(x));
        });
    });
});
