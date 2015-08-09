'use strict';

var insp = require('util').inspect;
var lodash = require('lodash');
var assert = require('chai').assert;
var sinon = require('sinon');
var lo = require('../..');

describe('.filter()', function () {

    it('is function', function () {

        assert.isFunction(lo.filter);
    });

    it('does not throw without arguments', function () {

        assert.deepEqual(lo.filter(), []);
    });

    it('does not throw without callback', function () {

        assert.deepEqual(lo.filter([1, 2]), []);
    });

    lodash.each([
        [],
        [1],
        [1, 1],
        [1, 2, 1]
    ], function (x) {

        var alwaysTrue = sinon.stub().returns(true);
        it('filter(' + insp(x) + ', fn[always true]) -> ' + insp(x), function () {

            assert.deepEqual(lo.filter(x, alwaysTrue), x);
        });

        var alwaysFalse = sinon.stub().returns(false);
        it('filter(' + insp(x) + ', fn[always false]) -> ' + insp([]), function () {

            assert.deepEqual(lo.filter(x, alwaysFalse), []);
        });
    });
});
