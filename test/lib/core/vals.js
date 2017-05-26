const {test, assert, insp} = require('scar');
const {lo} = require('../../util');

test('lo.vals()', () => {
    assert.equal(typeof lo.vals, 'function', 'is function');

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
    ].forEach(([arg, exp], idx) => {
        assert.deepEqual(lo.vals(arg).sort(), exp.sort(), `fix#${idx}: (${insp(arg)}) -> ${insp(exp)}`);
    });
});
