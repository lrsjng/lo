const {test, assert, insp} = require('scar');
const {lo} = require('../../util');

test('lo.keys is function', () => {
    assert.equal(typeof lo.keys, 'function');
});

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
].forEach(x => {
    const [arg, res] = x;

    test('lo.keys(' + insp(arg) + ') === ' + insp(res), () => {
        assert.deepEqual(lo.keys(arg).sort(), res.sort());
    });
});
