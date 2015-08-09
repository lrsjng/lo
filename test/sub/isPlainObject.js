'use strict';

var insp = require('util').inspect;
var lodash = require('lodash');
var assert = require('chai').assert;
var lo = require('../..');

describe('.isPlainObject()', function () {

    function A() {}
    function B() {}
    B.prototype = undefined;
    function C() {}
    C.prototype.constructor = undefined;
    function D() {}
    D.prototype.constructor.prototype = undefined;
    function E() {this.val = 1;}
    function F() {}
    F.prototype = {x: 1};
    function G() {}
    G.prototype.x = 1;
    var h = {};
    h.prototype = {x: 1};

    it('is function', function () {

        assert.isFunction(lo.isPlainObject);
    });

    lodash.each([
        {},
        {a: 1},
        new Object(), // jshint ignore: line
        new B(),
        new D(),
        h
    ], function (x) {

        it('isPlainObject(' + insp(x) + ') -> true', function () {

            assert.isTrue(lo.isPlainObject(x));
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
        new Date(),
        Object.create(null),
        Object.create({}),
        Object.create(Object.create(null)),
        Object.create(Object.create({})),
        Object.create(new A()),
        Object.create(new E()),
        new A(),
        new C(),
        new E(),
        new F(),
        new G()
    ], function (x) {

        it('isPlainObject(' + insp(x) + ') -> false', function () {

            assert.isFalse(lo.isPlainObject(x));
        });
    });
});
