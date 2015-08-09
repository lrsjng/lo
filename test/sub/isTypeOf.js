'use strict';

var insp = require('util').inspect;
var lodash = require('lodash');
var assert = require('chai').assert;
var lo = require('../..');

describe('.isTypeOf()', function () {

    it('is function', function () {

        assert.isFunction(lo.isTypeOf);
    });

    lodash.each([
        [null, 'object'],
        [undefined, 'undefined'],
        [0, 'number'],
        [1.1, 'number'],
        [NaN, 'number'],
        [Infinity, 'number'],
        [false, 'boolean'],
        [true, 'boolean'],
        [{}, 'object'],
        [/./, 'object'],
        [new Date(), 'object']
    ], function (x) {

        var arg = x[0];
        var typ = x[1];

        it('isTypeOf(' + insp(arg) + ', ' + insp(typ) + ') -> true', function () {

            assert.isTrue(lo.isTypeOf(arg, typ));
        });
    });

    lodash.each([
        [undefined, undefined],
        [null, undefined],
        [null, undefined],
        [undefined, undefined],
        [0, undefined],
        [1.1, undefined],
        [NaN, undefined],
        [Infinity, undefined],
        [false, undefined],
        [true, undefined],
        [{}, undefined],
        [/./, undefined],
        [new Date(), undefined]
    ], function (x) {

        var arg = x[0];
        var typ = x[1];

        it('isTypeOf(' + insp(arg) + ', ' + insp(typ) + ') -> false', function () {

            assert.isFalse(lo.isTypeOf(arg, typ));
        });
    });
});
