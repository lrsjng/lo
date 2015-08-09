'use strict';

var insp = require('util').inspect;
var lodash = require('lodash');
var assert = require('chai').assert;
var lo = require('../..');

describe('.isObject()', function () {

    function A() {}
    function B() {}
    B.prototype.constructor = undefined;
    function C() {}
    C.prototype = undefined;
    function D() {}
    D.prototype = null;
    function E() {this.val = 1;}
    function F() {}
    F.prototype = {x: 1};

    it('is function', function () {

        assert.isFunction(lo.isObject);
    });

    lodash.each([
        {},
        {a: 1},
        new Object(), // jshint ignore:line
        Object.create(null),
        Object.create({}),
        new A(),
        new B(),
        new C(),
        new D(),
        new E(),
        new F(),
        Object.create(new A()),
        Object.create(new E())
    ], function (x) {

        it('isObject(' + insp(x) + ') -> true', function () {

            assert.isTrue(lo.isObject(x));
        });
    });

    lodash.each([
        undefined,
        null,
        true,
        false,
        0,
        'a',
        /./,
        [],
        new Date()
    ], function (x) {

        it('isObject(' + insp(x) + ') -> false', function () {

            assert.isFalse(lo.isObject(x));
        });
    });
});
