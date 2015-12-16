const {test, assert, insp} = require('scar');
const {lo} = require('../../util');

test('lo.values is function', () => {
    assert.equal(typeof lo.values, 'function');
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
    const [arg, exp] = x;

    test(`lo.values(${insp(arg)}) === ${insp(exp)} (sorted)`, () => {
        assert.deepEqual(lo.values(arg).sort(), exp.sort());
    });
});
