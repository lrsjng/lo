const insp = require('util').inspect;
const assert = require('chai').assert;
const lo = require('../..');

describe('.isDate()', () => {
    it('is function', () => {
        assert.isFunction(lo.isDate);
    });

    [
        new Date(),
        new Date(0)
    ].forEach(x => {
        it('isDate(' + insp(x) + ') -> true', () => {
            assert.isTrue(lo.isDate(x));
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
        (() => arguments)()
    ].forEach(x => {
        it('isDate(' + insp(x) + ') -> false', () => {
            assert.isFalse(lo.isDate(x));
        });
    });
});
