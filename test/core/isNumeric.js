const lo = global.lo;
const insp = require('util').inspect;
const assert = require('chai').assert;

describe('.isNumeric()', () => {
    it('is function', () => {
        assert.isFunction(lo.isNumber);
    });

    [
        0,
        1,
        0.0,
        -0,
        -1,
        1 / 3,
        new Number(), // eslint-disable-line no-new-wrappers
        new Number(0) // eslint-disable-line no-new-wrappers
    ].forEach(x => {
        it('isNumeric(' + insp(x) + ') -> true', () => {
            assert.isTrue(lo.isNumeric(x));
        });
    });

    [
        NaN,
        Infinity,
        true,
        false,
        undefined,
        null,
        {},
        'a',
        /./,
        new Object(), // eslint-disable-line no-new-object
        new Date()
    ].forEach(x => {
        it('isNumeric(' + insp(x) + ') -> false', () => {
            assert.isFalse(lo.isNumeric(x));
        });
    });
});
