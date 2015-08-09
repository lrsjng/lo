'use strict';

var insp = require('util').inspect;
var lodash = require('lodash');
var assert = require('chai').assert;
var lo = require('../..');

describe('.isString()', function () {

    it('is function', function () {

        assert.isFunction(lo.isString);
    });

    lodash.each([
        '',
        'abc',
        new String(), // jshint ignore: line
        new String('abc') // jshint ignore: line
    ], function (x) {

        it('isString(' + insp(x) + ') -> true', function () {

            assert.isTrue(lo.isString(x));
        });
    });

    lodash.each([
        true,
        false,
        undefined,
        null,
        0,
        1,
        {},
        /./,
        new Object(), // jshint ignore: line
        new Date()
    ], function (x) {

        it('isString(' + insp(x) + ') -> false', function () {

            assert.isFalse(lo.isString(x));
        });
    });
});
