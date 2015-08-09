'use strict';

var insp = require('util').inspect;
var lodash = require('lodash');
var assert = require('chai').assert;
var sinon = require('sinon');
var lo = require('../..');

describe('.each()', function () {

    it('is function', function () {

        assert.isFunction(lo.each);
    });

    it('does not throw without arguments', function () {

        assert.isUndefined(lo.each());
    });

    it('does not throw without callback', function () {

        assert.isUndefined(lo.each([1, 2]));
    });

    lodash.each([
        [],
        [null],
        [undefined],
        [1, 2, 3]
    ], function (x) {

        it('each(' + insp(x) + ', fn) works', function () {

            var spy = sinon.spy();

            assert.isUndefined(lo.each(x, spy));
            assert.strictEqual(spy.callCount, x.length);
            lodash.each(x, function (el, idx) {
                assert.strictEqual(spy.args[idx][0], el);
                assert.equal(spy.args[idx][1], idx);
                assert.strictEqual(spy.args[idx][2], x);
            });
        });
    });

    lodash.each([
        {},
        {a: 1}
    ], function (x) {

        it('each(' + insp(x) + ', fn) works', function () {

            var spy = sinon.spy();
            var idx = 0;

            assert.isUndefined(lo.each(x, spy));
            assert.strictEqual(spy.callCount, lodash.size(x));
            lodash.each(x, function (el, key) {
                assert.strictEqual(spy.args[idx][0], el);
                assert.equal(spy.args[idx][1], key);
                assert.strictEqual(spy.args[idx][2], x);
                idx += 1;
            });
        });
    });
});
