'use strict';

var insp = require('util').inspect;
var lodash = require('lodash');
var assert = require('chai').assert;
var lo = require('../..');

describe('.isBoolean()', function () {

    it('is function', function () {

        assert.isFunction(lo.isBoolean);
    });

    lodash.each([
        true,
        false,
        new Boolean(true), // jshint ignore:line
        new Boolean(false), // jshint ignore:line
        new Boolean() // jshint ignore:line
    ], function (x) {

        it('isBoolean(' + insp(x) + ') -> true', function () {

            assert.isTrue(lo.isBoolean(x));
        });
    });

    lodash.each([
        undefined,
        null,
        0,
        1,
        'a',
        {},
        /./,
        new Object(), // jshint ignore:line
        new Date()
    ], function (x) {

        it('isBoolean(' + insp(x) + ') -> false', function () {

            assert.isFalse(lo.isBoolean(x));
        });
    });
});
