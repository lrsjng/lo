'use strict';

var insp = require('util').inspect;
var lodash = require('lodash');
var assert = require('chai').assert;
var lo = require('../..');

describe('.isError()', function () {

    it('is function', function () {

        assert.isFunction(lo.isError);
    });

    lodash.each([
        new Error(),
        new Error(null),
        new Error(undefined),
        new Error('msg'),
        new TypeError(),
        new SyntaxError()
    ], function (x) {

        it('isError(' + insp(x) + ') -> true', function () {

            assert.isTrue(lo.isError(x));
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
        (function () { return arguments; }())
    ], function (x) {

        it('isError(' + insp(x) + ') -> false', function () {

            assert.isFalse(lo.isError(x));
        });
    });
});
