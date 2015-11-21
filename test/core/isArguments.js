const lo = global.lo;
const insp = require('util').inspect;
const assert = require('chai').assert;

describe('.isArguments()', () => {
    it('is function', () => {
        assert.isFunction(lo.isArguments);
    });

    [
        (() => arguments)(),
        (() => arguments)(undefined),
        (() => arguments)(null),
        (() => arguments)(1, 2, 3),
        (() => arguments)('a'),
        (() => arguments)(true)
    ].forEach(x => {
        it('isArguments(' + insp(x) + ') -> true', () => {
            assert.isTrue(lo.isArguments(x));
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
        new Date()
    ].forEach(x => {
        it('isArguments(' + insp(x) + ') -> false', () => {
            assert.isFalse(lo.isArguments(x));
        });
    });
});
