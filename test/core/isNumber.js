const insp = require('util').inspect;
const assert = require('chai').assert;
const lo = require('../..');

describe('.isNumber()', () => {
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
        NaN,
        Infinity,
        new Number(), // eslint-disable-line no-new-wrappers
        new Number(0) // eslint-disable-line no-new-wrappers
    ].forEach(x => {
        it('isNumber(' + insp(x) + ') -> true', () => {
            assert.isTrue(lo.isNumber(x));
        });
    });

    [
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
        it('isNumber(' + insp(x) + ') -> false', () => {
            assert.isFalse(lo.isNumber(x));
        });
    });
});
