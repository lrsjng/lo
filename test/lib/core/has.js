const {test, assert, insp} = require('scar');
const {lo} = require('../../util');

test('lo.has is function', () => {
    assert.equal(typeof lo.has, 'function');
});

[
    [{a: 1}, 'a'],
    [{a: null}, 'a'],
    [{a: undefined}, 'a'],
    [[], 'length'],
    ['a', 'length'],
    ['', 'length']
].forEach(x => {
    const [obj, val] = x;

    test(`lo.has(${insp(obj)}, ${insp(val)}) === true`, () => {
        assert.equal(lo.has(obj, val), true);
    });
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
].forEach(x => {
    const [obj, val] = x;

    test(`lo.has(${insp(obj)}, ${insp(val)}) === false`, () => {
        assert.equal(lo.has(obj, val), false);
    });
});
