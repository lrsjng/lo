'use strict';

var insp = require('util').inspect;
var lodash = require('lodash');
var assert = require('chai').assert;
var lo = require('../..');

describe('.isInstanceOf()', function () {

    it('is function', function () {

        assert.isFunction(lo.isInstanceOf);
    });

    lodash.each([
        [{}, Object],
        [/./, RegExp],
        [function () {}, Function],
        [new Boolean(), Boolean], // jshint ignore:line
        [new Number(), Number], // jshint ignore:line
        [new String(), String] // jshint ignore:line
    ], function (x) {

        var arg = x[0];
        var typ = x[1];

        it('isInstanceOf(' + insp(arg) + ', ' + insp(typ) + ') -> true', function () {

            assert.isTrue(lo.isInstanceOf(arg, typ));
        });
    });

    lodash.each([
        [undefined, undefined],
        [true, Boolean],
        [false, Boolean],
        [1, Number],
        ['', String]
    ], function (x) {

        var arg = x[0];
        var typ = x[1];

        it('isInstanceOf(' + insp(arg) + ', ' + insp(typ) + ') -> false', function () {

            assert.isFalse(lo.isInstanceOf(arg, typ));
        });
    });
});
