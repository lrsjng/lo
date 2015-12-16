const {test, assert, insp} = require('scar');
const {lo} = require('../../util');

test('lo.size is function', () => {
    assert.equal(typeof lo.size, 'function');
});

[
    [undefined, 0],
    [null, 0],
    [true, 0],
    [false, 0],
    [[], 0],
    [[1], 1],
    [[1, 2], 2],
    [[1, 2, 3], 3],
    [[undefined], 1],
    [[null], 1],
    [{}, 0],
    [{a: 0}, 1],
    [{a: 0, b: 0}, 2],
    [{a: 0, b: 0, c: 0}, 3],
    ['', 0],
    ['a', 1],
    ['ab', 2],
    ['abc', 3]
].forEach(x => {
    const [obj, exp] = x;

    test(`lo.size(${insp(obj)}) === ${insp(exp)}`, () => {
        assert.equal(lo.size(obj), exp);
    });
});
