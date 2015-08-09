'use strict';

var insp = require('util').inspect;
var lodash = require('lodash');
var assert = require('chai').assert;
var sinon = require('sinon');
var lo = require('../..');

describe('.map()', function () {

    it('is function', function () {
        assert.isFunction(lo.map);
    });

    lodash.each([
        [],
        [null],
        [undefined],
        [1, 2, 3],
        [{}, false, true],
        {},
        {a: 1},
        {a: 11, b: 22, c: 33}
    ], function (x) {
        var spy = sinon.stub().returnsArg(0);
        var res = lo.map(x, spy);
        it('map(' + insp(x) + ', identity) -> ' + insp(res), function () {
            var idx = 0;
            assert.isArray(res);
            assert.strictEqual(spy.callCount, lodash.size(x));
            lodash.each(x, function (val, key) {
                assert.isTrue(spy.getCall(idx).calledOn(undefined));
                assert.strictEqual(spy.args[idx][0], val);
                assert.strictEqual(spy.args[idx][1], key);
                assert.strictEqual(spy.args[idx][2], x);
                assert.strictEqual(res[idx], val);
                idx += 1;
            });
        });
    });

    it('returns [] when no arguments', function () {
        assert.deepEqual(lo.map(), []);
    });

    it('returns [] when no fn', function () {
        assert.deepEqual(lo.map([1, 2]), []);
    });

    it('sets context correct', function () {
        var spy = sinon.spy();
        var ctx = {somectx: true};
        lo.map([1, 2], spy, ctx);
        assert.isTrue(spy.alwaysCalledOn(ctx));
    });
});
