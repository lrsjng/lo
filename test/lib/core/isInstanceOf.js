const {test, assert, insp} = require('scar');
const {lo} = require('../../util');

test('lo.isInstanceOf is function', () => {
    assert.equal(typeof lo.isInstanceOf, 'function');
});

[
    [{}, Object],
    [/./, RegExp],
    [() => null, Function],
    [new Boolean(), Boolean], // eslint-disable-line no-new-wrappers
    [new Number(), Number], // eslint-disable-line no-new-wrappers
    [new String(), String] // eslint-disable-line no-new-wrappers
].forEach(x => {
    const [arg, typ] = x;

    test(`lo.isInstanceOf(${insp(arg)}, ${insp(typ)}) === true`, () => {
        assert.equal(lo.isInstanceOf(arg, typ), true);
    });
});

[
    [undefined, undefined],
    [true, Boolean],
    [false, Boolean],
    [1, Number],
    ['', String]
].forEach(x => {
    const [arg, typ] = x;

    test(`lo.isInstanceOf(${insp(arg)}, ${insp(typ)}) === false`, () => {
        assert.equal(lo.isInstanceOf(arg, typ), false);
    });
});
