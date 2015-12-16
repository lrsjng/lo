const {test, assert, insp} = require('scar');
const {lo} = require('../../util');

test('lo.contains is function', () => {
    assert.equal(typeof lo.contains, 'function');
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

    test(`lo.contains(${insp(arr)}, ${insp(val)}) === true`, () => {
        assert.equal(lo.contains(arr, val), true);
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

    test(`lo.contains(${insp(arr)}, ${insp(val)}) === false`, () => {
        assert.equal(lo.contains(arr, val), false);
    });
});
