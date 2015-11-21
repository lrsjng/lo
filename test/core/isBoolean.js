const insp = require('util').inspect;
const assert = require('chai').assert;
const lo = require('../..');

describe('.isBoolean()', () => {
    it('is function', () => {
        assert.isFunction(lo.isBoolean);
    });

    [
        true,
        false,
        new Boolean(true), // eslint-disable-line no-new-wrappers
        new Boolean(false), // eslint-disable-line no-new-wrappers
        new Boolean() // eslint-disable-line no-new-wrappers
    ].forEach(x => {
        it('isBoolean(' + insp(x) + ') -> true', () => {
            assert.isTrue(lo.isBoolean(x));
        });
    });

    [
        undefined,
        null,
        0,
        1,
        'a',
        {},
        /./,
        new Object(), // eslint-disable-line no-new-object
        new Date()
    ].forEach(x => {
        it('isBoolean(' + insp(x) + ') -> false', () => {
            assert.isFalse(lo.isBoolean(x));
        });
    });
});
