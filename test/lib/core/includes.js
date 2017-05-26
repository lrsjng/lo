const {test, assert, insp} = require('scar');
const {lo} = require('../../util');

test('lo.includes()', () => {
    assert.equal(typeof lo.includes, 'function', 'is function');

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
    ].forEach(([arr, val], idx) => {
        test(`lo.includes(${insp(arr)}, ${insp(val)}) === true`, () => {
            assert.equal(lo.includes(arr, val), true, `fix#${idx}: (${insp(arr)}, ${insp(val)}) -> true`);
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
    ].forEach(([arr, val], idx) => {
        assert.equal(lo.includes(arr, val), false, `fix#${idx}: (${insp(arr)}, ${insp(val)}) -> false`);
    });
});
