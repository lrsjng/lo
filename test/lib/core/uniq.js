const {test, assert, insp} = require('scar');
const {lo} = require('../../util');

test('lo.uniq is function', () => {
    assert.equal(typeof lo.uniq, 'function');
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
    const [arg, exp] = x;

    test(`lo.uniq(${insp(arg)}) === ${insp(exp)}`, () => {
        assert.deepEqual(lo.uniq(arg), exp);
    });
});
