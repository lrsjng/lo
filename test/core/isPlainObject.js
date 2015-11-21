const insp = require('util').inspect;
const assert = require('chai').assert;
const lo = require('../..');

describe('.isPlainObject()', () => {
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
    const h = {};
    h.prototype = {x: 1};

    it('is function', () => {
        assert.isFunction(lo.isPlainObject);
    });

    [
        {},
        {a: 1},
        new Object(), // eslint-disable-line no-new-object
        new B(),
        new D(),
        h
    ].forEach(x => {
        it('isPlainObject(' + insp(x) + ') -> true', () => {
            assert.isTrue(lo.isPlainObject(x));
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
    ].forEach(x => {
        it('isPlainObject(' + insp(x) + ') -> false', () => {
            assert.isFalse(lo.isPlainObject(x));
        });
    });
});
