const insp = require('util').inspect;
const assert = require('chai').assert;
const lo = require('../..');

describe('.isTypeOf()', () => {
    it('is function', () => {
        assert.isFunction(lo.isTypeOf);
    });

    [
        [null, 'object'],
        [undefined, 'undefined'],
        [0, 'number'],
        [1.1, 'number'],
        [NaN, 'number'],
        [Infinity, 'number'],
        [false, 'boolean'],
        [true, 'boolean'],
        [{}, 'object'],
        [/./, 'object'],
        [new Date(), 'object']
    ].forEach(x => {
        const [arg, typ] = x;

        it('isTypeOf(' + insp(arg) + ', ' + insp(typ) + ') -> true', () => {
            assert.isTrue(lo.isTypeOf(arg, typ));
        });
    });

    [
        [undefined, undefined],
        [null, undefined],
        [null, undefined],
        [undefined, undefined],
        [0, undefined],
        [1.1, undefined],
        [NaN, undefined],
        [Infinity, undefined],
        [false, undefined],
        [true, undefined],
        [{}, undefined],
        [/./, undefined],
        [new Date(), undefined]
    ].forEach(x => {
        const [arg, typ] = x;

        it('isTypeOf(' + insp(arg) + ', ' + insp(typ) + ') -> false', () => {
            assert.isFalse(lo.isTypeOf(arg, typ));
        });
    });
});
