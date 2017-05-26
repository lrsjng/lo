const {test, assert, insp} = require('scar');
const {lo} = require('../../util');

test('lo.is_inst_of()', () => {
    assert.equal(typeof lo.is_inst_of, 'function', 'is function');

    [
        [{}, Object],
        [/./, RegExp],
        [() => null, Function],
        [new Boolean(), Boolean], // eslint-disable-line no-new-wrappers
        [new Number(), Number], // eslint-disable-line no-new-wrappers
        [new String(), String] // eslint-disable-line no-new-wrappers
    ].forEach(([arg, typ], idx) => {
        assert.equal(lo.is_inst_of(arg, typ), true, `fix#${idx}: (${insp(arg)}, ${insp(typ)}) -> true`);
    });

    [
        [undefined, undefined],
        [true, Boolean],
        [false, Boolean],
        [1, Number],
        ['', String]
    ].forEach(([arg, typ], idx) => {
        assert.equal(lo.is_inst_of(arg, typ), false, `fix#${idx}: (${insp(arg)}, ${insp(typ)}) -> false`);
    });
});
