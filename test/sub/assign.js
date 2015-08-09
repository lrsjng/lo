'use strict';

var insp = require('util').inspect;
var lodash = require('lodash');
var assert = require('chai').assert;
var lo = require('../..');

describe('.assign()', function () {

    it('is function', function () {

        assert.isFunction(lo.assign);
    });

    lodash.each([
        [[], {}],
        [[{}], {}],
        [[{}, {}], {}],
        [[{a: 1}], {a: 1}],
        [[{a: 1}, {b: 2}], {a: 1, b: 2}],
        [[{a: 1}, {a: 2}], {a: 2}],
        [[{}, {a: 1}], {a: 1}],
        [[{a: 1}, {}], {a: 1}],
        [[{a: 1}, {a: 2}, {a: 3}], {a: 3}],
        [[undefined], {}],
        [[null], {}],
        [[0], {}],
        [[undefined, {a: 1}, {a: 2}, {a: 3}], {a: 3}]
    ], function (x) {

        var args = x[0];
        var exp = x[1];

        it('assign(' + insp(args) + ') -> ' + insp(exp), function () {

            var res = lo.assign.apply(undefined, args);
            assert.deepEqual(res, exp);
            if (args.length > 0 && lodash.isObject(args[0])) {
                assert.strictEqual(res, args[0]);
            }
            if (args.length > 1) {
                assert.notStrictEqual(res, args[1]);
            }
        });
    });
});
