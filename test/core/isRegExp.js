const lo = global.lo;
const insp = require('util').inspect;
const assert = require('chai').assert;

describe('.isRegExp()', () => {
    it('is function', () => {
        assert.isFunction(lo.isRegExp);
    });

    [
        / /,
        /./,
        new RegExp(),
        new RegExp('.')
    ].forEach(x => {
        it('isRegExp(' + insp(x) + ') -> true', () => {
            assert.isTrue(lo.isRegExp(x));
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
        'a',
        new Object(), // eslint-disable-line no-new-object
        new Date()
    ].forEach(x => {
        it('isRegExp(' + insp(x) + ') -> false', () => {
            assert.isFalse(lo.isRegExp(x));
        });
    });
});
