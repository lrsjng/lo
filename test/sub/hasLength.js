'use strict';

var insp = require('util').inspect;
var lodash = require('lodash');
var assert = require('chai').assert;
var lo = require('../..');

describe('.hasLength()', function () {

    it('is function', function () {

        assert.isFunction(lo.hasLength);
    });

    lodash.each([
        [],
        [1, 2],
        new Array(), // jshint ignore:line
        '',
        'abc'
    ], function (x) {

        it('hasLength(' + insp(x) + ') -> true', function () {

            assert.isTrue(lo.hasLength(x));
        });
    });

    lodash.each([
        undefined,
        null,
        true,
        false,
        {},
        0,
        1,
        new Date(),
        new Object(), // jshint ignore:line
        /./
    ], function (x) {

        it('hasLength(' + insp(x) + ') -> false', function () {

            assert.isFalse(lo.hasLength(x));
        });
    });
});
