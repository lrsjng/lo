'use strict';

var insp = require('util').inspect;
var lodash = require('lodash');
var assert = require('chai').assert;
var lo = require('../..');

describe('.isRegExp()', function () {

    it('is function', function () {

        assert.isFunction(lo.isRegExp);
    });

    lodash.each([
        / /,
        /./,
        new RegExp(),
        new RegExp('.')
    ], function (x) {

        it('isRegExp(' + insp(x) + ') -> true', function () {

            assert.isTrue(lo.isRegExp(x));
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
        'a',
        new Object(), // jshint ignore:line
        new Date()
    ], function (x) {

        it('isRegExp(' + insp(x) + ') -> false', function () {

            assert.isFalse(lo.isRegExp(x));
        });
    });
});
