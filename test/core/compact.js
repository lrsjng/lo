const lo = global.lo;
const insp = require('util').inspect;
const assert = require('chai').assert;

describe('.compact()', () => {
    it('is function', () => {
        assert.isFunction(lo.compact);
    });

    [
        [[], []],
        [[1], [1]],
        [[1, 1], [1, 1]],
        [[1, 2, 1], [1, 2, 1]],
        [[1, 0, 2], [1, 2]],
        [[1, null, 2], [1, 2]],
        [[1, undefined, 2], [1, 2]],
        [[1, '', 2], [1, 2]],
        [[0, null, undefined, ''], []],
        [undefined, []],
        [null, []],
        [0, []],
        [false, []],
        [true, []],
        ['abc', ['a', 'b', 'c']],
        ['aac', ['a', 'a', 'c']]
    ].forEach(x => {
        const [arg, res] = x;

        it('compact(' + insp(arg) + ') -> ' + insp(res), () => {
            assert.deepEqual(lo.compact(arg), res);
        });
    });
});
