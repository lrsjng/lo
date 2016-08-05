const {test, assert, insp} = require('scar');
const {lo} = require('../../util');

test('lo.compact()', () => {
    assert.equal(typeof lo.compact, 'function');

    [
        [[], []],
        [[1], [1]],
        [[1, 1], [1, 1]],
        [[1, 2, 1], [1, 2, 1]],
        [[1, 0, 2], [1, 2]],
        [[1, null, 2], [1, 2]],
        [[1, undefined, 2], [1, 2]],
        [[1, '', 2], [1, 2]],
        [[0, null, undefined, ''], []],
        [undefined, []],
        [null, []],
        [0, []],
        [false, []],
        [true, []],
        ['abc', ['a', 'b', 'c']],
        ['aac', ['a', 'a', 'c']]
    ].forEach(([arg, exp], idx) => {
        assert.deepEqual(lo.compact(arg), exp, `fix#${idx}: (${insp(arg)}) -> ${insp(exp)}`);
    });
});
