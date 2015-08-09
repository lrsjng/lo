'use strict';

var insp = require('util').inspect;
var lodash = require('lodash');
var assert = require('chai').assert;
var lo = require('../..');

describe('.uniq()', function () {

    it('is function', function () {

        assert.isFunction(lo.uniq);
    });

    lodash.each([
        [[], []],
        [[1], [1]],
        [[1, 1], [1]],
        [[1, 2, 1], [1, 2]],
        ['', []],
        ['aabcadd', ['a', 'b', 'c', 'd']],
        [null, []],
        [undefined, []],
        [0, []]
    ], function (x) {

        var arg = x[0];
        var res = x[1];

        it('uniq(' + insp(arg) + ') -> ' + insp(res), function () {

            assert.deepEqual(lo.uniq(arg), res);
        });
    });
});
