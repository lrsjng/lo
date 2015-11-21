const lo = global.lo;
const insp = require('util').inspect;
const assert = require('chai').assert;

describe('.isFunction()', () => {
    it('is function', () => {
        assert.isFunction(lo.isFunction);
    });

    [
        () => null,
        function a() {},
        describe,
        it,
        Object.prototype.toString
    ].forEach(x => {
        it('isFunction(' + insp(x) + ') -> true', () => {
            assert.isTrue(lo.isFunction(x));
        });
    });

    [
        undefined,
        null,
        true,
        false,
        0,
        1,
        'a',
        {},
        /./,
        new Object(), // eslint-disable-line no-new-object
        new Date(),
        new Error(),
        (() => arguments)()
    ].forEach(x => {
        it('isFunction(' + insp(x) + ') -> false', () => {
            assert.isFalse(lo.isFunction(x));
        });
    });
});
