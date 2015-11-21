const insp = require('util').inspect;
const assert = require('chai').assert;
const lo = require('../..');

describe('.hasLength()', () => {
    it('is function', () => {
        assert.isFunction(lo.hasLength);
    });

    [
        [],
        [1, 2],
        new Array(), // eslint-disable-line no-array-constructor
        '',
        'abc'
    ].forEach(x => {
        it('hasLength(' + insp(x) + ') -> true', () => {
            assert.isTrue(lo.hasLength(x));
        });
    });

    [
        undefined,
        null,
        true,
        false,
        {},
        0,
        1,
        new Date(),
        new Object(), // eslint-disable-line no-new-object
        /./
    ].forEach(x => {
        it('hasLength(' + insp(x) + ') -> false', () => {
            assert.isFalse(lo.hasLength(x));
        });
    });
});
