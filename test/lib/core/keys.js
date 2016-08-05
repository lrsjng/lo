const {test, assert, insp} = require('scar');
const {lo} = require('../../util');

test('lo.keys()', () => {
    assert.equal(typeof lo.keys, 'function', 'is function');

    [
        [{}, []],
        [undefined, []],
        [null, []],
        ['abc', []],
        [0, []],
        [false, []],
        [true, []],
        [{a: 1}, ['a']],
        [{a: 1, b: 1}, ['a', 'b']],
        [{a: null}, ['a']],
        [{a: undefined}, ['a']],
        [{a: 0}, ['a']]
    ].forEach(([arg, res], idx) => {
        assert.deepEqual(lo.keys(arg).sort(), res.sort(), `fix#${idx}: (${insp(arg)}) -> ${insp(res)}`);
    });
});
