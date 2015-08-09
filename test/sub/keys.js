'use strict';

var insp = require('util').inspect;
var lodash = require('lodash');
var assert = require('chai').assert;
var lo = require('../..');

describe('.keys()', function () {

    it('is function', function () {

        assert.isFunction(lo.keys);
    });

    lodash.each([
        [{}, []],
        [undefined, []],
        [null, []],
        ['abc', []],
        [0, []],
        [false, []],
        [true, []],
        [{a: 1}, ['a']],
        [{a: 1, b: 1}, ['a', 'b']],
        [{a: null}, ['a']],
        [{a: undefined}, ['a']],
        [{a: 0}, ['a']]
    ], function (x) {

        var arg = x[0];
        var res = x[1];

        it('keys(' + insp(arg) + ') -> ' + insp(res), function () {

            assert.deepEqual(lo.keys(arg).sort(), res.sort());
        });
    });
});
