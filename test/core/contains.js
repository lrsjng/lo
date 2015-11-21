const lo = global.lo;
const insp = require('util').inspect;
const assert = require('chai').assert;

describe('.contains()', () => {
    it('is function', () => {
        assert.isFunction(lo.contains);
    });

    [
        [[undefined], undefined],
        [[null], null],
        [[1], 1],
        [[1, 2, 3], 1],
        [[2, 3, 1], 1],
        [[1, 1, 1], 1],
        ['abc', 'a'],
        ['a', 'a'],
        [{a: 1}, 1]
    ].forEach(x => {
        const [arr, val] = x;

        it('contains(' + insp(arr) + ', ' + insp(val) + ') -> true', () => {
            assert.isTrue(lo.contains(arr, val));
        });
    });

    [
        [undefined, undefined],
        [null, null],
        [true, true],
        [false, false],
        [undefined, 'a'],
        [null, 'a'],
        [true, 'a'],
        [false, 'a'],
        [[], 'a'],
        [[], undefined],
        [[], null],
        [[], true],
        [[], false],
        ['xyz', 'a'],
        ['', 'a'],
        [{}, undefined],
        [{}, null],
        [{a: 1}, 0]
    ].forEach(x => {
        const [arr, val] = x;

        it('contains(' + insp(arr) + ', ' + insp(val) + ') -> false', () => {
            assert.isFalse(lo.contains(arr, val));
        });
    });
});
