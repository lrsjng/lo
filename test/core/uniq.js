const lo = global.lo;
const insp = require('util').inspect;
const assert = require('chai').assert;

describe('.uniq()', () => {
    it('is function', () => {
        assert.isFunction(lo.uniq);
    });

    [
        [[], []],
        [[1], [1]],
        [[1, 1], [1]],
        [[1, 2, 1], [1, 2]],
        ['', []],
        ['aabcadd', ['a', 'b', 'c', 'd']],
        [null, []],
        [undefined, []],
        [0, []]
    ].forEach(x => {
        const [arg, res] = x;

        it('uniq(' + insp(arg) + ') -> ' + insp(res), () => {
            assert.deepEqual(lo.uniq(arg), res);
        });
    });
});
