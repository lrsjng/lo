const insp = require('util').inspect;
const assert = require('chai').assert;
const lo = require('../..');

describe('.isString()', () => {
    it('is function', () => {
        assert.isFunction(lo.isString);
    });

    [
        '',
        'abc',
        new String(), // eslint-disable-line no-new-wrappers
        new String('abc') // eslint-disable-line no-new-wrappers
    ].forEach(x => {
        it('isString(' + insp(x) + ') -> true', () => {
            assert.isTrue(lo.isString(x));
        });
    });

    [
        true,
        false,
        undefined,
        null,
        0,
        1,
        {},
        /./,
        new Object(), // eslint-disable-line no-new-object
        new Date()
    ].forEach(x => {
        it('isString(' + insp(x) + ') -> false', () => {
            assert.isFalse(lo.isString(x));
        });
    });
});
