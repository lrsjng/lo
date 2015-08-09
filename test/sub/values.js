'use strict';

var insp = require('util').inspect;
var lodash = require('lodash');
var assert = require('chai').assert;
var lo = require('../..');

describe('.values()', function () {

    it('is function', function () {

        assert.isFunction(lo.values);
    });

    lodash.each([
        [{}, []],
        [undefined, []],
        [null, []],
        ['abc', []],
        [0, []],
        [false, []],
        [true, []],
        [{a: 1}, [1]],
        [{a: 1, b: 1}, [1, 1]],
        [{a: 2, b: 1}, [2, 1]],
        [{a: null}, [null]],
        [{a: undefined}, [undefined]],
        [{a: 0}, [0]]
    ], function (x) {

        var arg = x[0];
        var res = x[1];

        it('values(' + insp(arg) + ') -> ' + insp(res), function () {

            assert.deepEqual(lo.values(arg).sort(), res.sort());
        });
    });
});
