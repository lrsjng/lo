const {test, assert, insp} = require('scar');
const {lo} = require('../../util');

test('lo.isInstanceOf()', () => {
    assert.equal(typeof lo.isInstanceOf, 'function', 'is function');

    [
        [{}, Object],
        [/./, RegExp],
        [() => null, Function],
        [new Boolean(), Boolean], // eslint-disable-line no-new-wrappers
        [new Number(), Number], // eslint-disable-line no-new-wrappers
        [new String(), String] // eslint-disable-line no-new-wrappers
    ].forEach(([arg, typ], idx) => {
        assert.equal(lo.isInstanceOf(arg, typ), true, `fix#${idx}: (${insp(arg)}, ${insp(typ)}) -> true`);
    });

    [
        [undefined, undefined],
        [true, Boolean],
        [false, Boolean],
        [1, Number],
        ['', String]
    ].forEach(([arg, typ], idx) => {
        assert.equal(lo.isInstanceOf(arg, typ), false, `fix#${idx}: (${insp(arg)}, ${insp(typ)}) -> false`);
    });
});
