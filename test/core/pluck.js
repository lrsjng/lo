const insp = require('util').inspect;
const assert = require('chai').assert;
const lo = require('../..');

describe('.pluck()', () => {
    it('is function', () => {
        assert.isFunction(lo.pluck);
    });

    [
        [undefined, undefined, []],
        [[], 'a', []],
        [[1, 2, 3], 'a', [undefined, undefined, undefined]],
        [[{}], 'a', [undefined]],
        [[{a: 1}], 'a', [1]],
        [[{a: 1}, {a: 2}, {a: 3}], 'a', [1, 2, 3]]
    ].forEach(x => {
        const [arr, prop, exp] = x;
        const res = lo.pluck(arr, prop);

        it('pluck(' + insp(arr) + ', ' + insp(prop) + ') -> ' + insp(res), () => {
            assert.deepEqual(res, exp);
        });
    });
});
