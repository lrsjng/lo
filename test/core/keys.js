const lo = global.lo;
const insp = require('util').inspect;
const assert = require('chai').assert;

describe('.keys()', () => {
    it('is function', () => {
        assert.isFunction(lo.keys);
    });

    [
        [{}, []],
        [undefined, []],
        [null, []],
        ['abc', []],
        [0, []],
        [false, []],
        [true, []],
        [{a: 1}, ['a']],
        [{a: 1, b: 1}, ['a', 'b']],
        [{a: null}, ['a']],
        [{a: undefined}, ['a']],
        [{a: 0}, ['a']]
    ].forEach(x => {
        const [arg, res] = x;

        it('keys(' + insp(arg) + ') -> ' + insp(res), () => {
            assert.deepEqual(lo.keys(arg).sort(), res.sort());
        });
    });
});
