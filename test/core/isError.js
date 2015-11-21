const insp = require('util').inspect;
const assert = require('chai').assert;
const lo = require('../..');

describe('.isError()', () => {
    it('is function', () => {
        assert.isFunction(lo.isError);
    });

    [
        new Error(),
        new Error(null),
        new Error(undefined),
        new Error('msg'),
        new TypeError(),
        new SyntaxError()
    ].forEach(x => {
        it('isError(' + insp(x) + ') -> true', () => {
            assert.isTrue(lo.isError(x));
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
        (() => arguments)()
    ].forEach(x => {
        it('isError(' + insp(x) + ') -> false', () => {
            assert.isFalse(lo.isError(x));
        });
    });
});
