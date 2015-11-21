const lo = global.lo;
const insp = require('util').inspect;
const assert = require('chai').assert;

describe('.isObject()', () => {
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

    it('is function', () => {
        assert.isFunction(lo.isObject);
    });

    [
        {},
        {a: 1},
        new Object(), // eslint-disable-line no-new-object
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
    ].forEach(x => {
        it('isObject(' + insp(x) + ') -> true', () => {
            assert.isTrue(lo.isObject(x));
        });
    });

    [
        undefined,
        null,
        true,
        false,
        0,
        'a',
        /./,
        [],
        new Date()
    ].forEach(x => {
        it('isObject(' + insp(x) + ') -> false', () => {
            assert.isFalse(lo.isObject(x));
        });
    });
});
