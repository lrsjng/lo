const lo = global.lo;
const insp = require('util').inspect;
const assert = require('chai').assert;

describe('.values()', () => {
    it('is function', () => {
        assert.isFunction(lo.values);
    });

    [
        [{}, []],
        [undefined, []],
        [null, []],
        ['abc', []],
        [0, []],
        [false, []],
        [true, []],
        [{a: 1}, [1]],
        [{a: 1, b: 1}, [1, 1]],
        [{a: 2, b: 1}, [2, 1]],
        [{a: null}, [null]],
        [{a: undefined}, [undefined]],
        [{a: 0}, [0]]
    ].forEach(x => {
        const [arg, res] = x;

        it('values(' + insp(arg) + ') -> ' + insp(res), () => {
            assert.deepEqual(lo.values(arg).sort(), res.sort());
        });
    });
});
