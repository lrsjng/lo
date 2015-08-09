'use strict';

var insp = require('util').inspect;
var lodash = require('lodash');
var assert = require('chai').assert;
var lo = require('../..');

describe('.isArguments()', function () {

    it('is function', function () {

        assert.isFunction(lo.isArguments);
    });

    lodash.each([
        (function () { return arguments; }()),
        (function () { return arguments; }(undefined)),
        (function () { return arguments; }(null)),
        (function () { return arguments; }(1, 2, 3)),
        (function () { return arguments; }('a')),
        (function () { return arguments; }(true))
    ], function (x) {

        it('isArguments(' + insp(x) + ') -> true', function () {

            assert.isTrue(lo.isArguments(x));
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
        new Date()
    ], function (x) {

        it('isArguments(' + insp(x) + ') -> false', function () {

            assert.isFalse(lo.isArguments(x));
        });
    });
});
