'use strict';

var insp = require('util').inspect;
var lodash = require('lodash');
var assert = require('chai').assert;
var lo = require('../..');

describe('.isArray()', function () {

    it('is function', function () {

        assert.isFunction(lo.isArray);
    });

    lodash.each([
        [],
        [1],
        ['a'],
        new Array() // jshint ignore:line
    ], function (x) {

        it('isArray(' + insp(x) + ') -> true', function () {

            assert.isTrue(lo.isArray(x));
        });
    });

    lodash.each([
        undefined,
        null,
        true,
        false,
        0,
        'a',
        {},
        /./,
        new Object(), // jshint ignore:line
        new Date()
    ], function (x) {

        it('isArray(' + insp(x) + ') -> false', function () {

            assert.isFalse(lo.isArray(x));
        });
    });
});
