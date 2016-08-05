const {test, assert, insp} = require('scar');
const {lo} = require('../../util');

test('lo.has()', () => {
    assert.equal(typeof lo.has, 'function', 'is function');

    [
        [{a: 1}, 'a'],
        [{a: null}, 'a'],
        [{a: undefined}, 'a'],
        [[], 'length'],
        ['a', 'length'],
        ['', 'length']
    ].forEach(([obj, val], idx) => {
        assert.equal(lo.has(obj, val), true, `fix#1.${idx}: (${insp(obj)}, ${insp(val)}) -> true`);
    });

    [
        [undefined, 'a'],
        [null, 'a'],
        [true, 'a'],
        [false, 'a'],
        [{}, 'a'],
        [{}, undefined],
        [{}, null],
        [{}, true],
        [{}, false],
        ['a', 'a']
    ].forEach(([obj, val], idx) => {
        assert.equal(lo.has(obj, val), false, `fix#2.${idx}: (${insp(obj)}, ${insp(val)}) -> false`);
    });
});
