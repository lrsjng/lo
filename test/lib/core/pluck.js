const {test, assert, insp} = require('scar');
const {lo} = require('../../util');

test('lo.pluck is function', () => {
    assert.equal(typeof lo.pluck, 'function');
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

    test(`lo.pluck(${insp(arr)}, ${insp(prop)}) === ${insp(exp)}`, () => {
        assert.deepEqual(lo.pluck(arr, prop), exp);
    });
});
