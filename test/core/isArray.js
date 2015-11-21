const lo = global.lo;
const insp = require('util').inspect;
const assert = require('chai').assert;

describe('.isArray()', () => {
    it('is function', () => {
        assert.isFunction(lo.isArray);
    });

    [
        [],
        [1],
        ['a'],
        new Array() // eslint-disable-line no-array-constructor
    ].forEach(x => {
        it('isArray(' + insp(x) + ') -> true', () => {
            assert.isTrue(lo.isArray(x));
        });
    });

    [
        undefined,
        null,
        true,
        false,
        0,
        'a',
        {},
        /./,
        new Object(), // eslint-disable-line no-new-object
        new Date()
    ].forEach(x => {
        it('isArray(' + insp(x) + ') -> false', () => {
            assert.isFalse(lo.isArray(x));
        });
    });
});
