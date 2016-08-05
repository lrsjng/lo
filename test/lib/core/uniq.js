const {test, assert, insp} = require('scar');
const {lo} = require('../../util');

test('lo.uniq()', () => {
    assert.equal(typeof lo.uniq, 'function', 'is function');

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
    ].forEach(([arg, exp], idx) => {
        assert.deepEqual(lo.uniq(arg), exp, `fix#${idx}: (${insp(arg)}) -> ${insp(exp)}`);
    });
});
