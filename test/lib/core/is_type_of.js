const {test, assert, insp} = require('scar');
const {lo} = require('../../util');

test('lo.is_type_of()', () => {
    assert.equal(typeof lo.is_type_of, 'function', 'is function');

    [
        [null, 'object'],
        [undefined, 'undefined'],
        [0, 'number'],
        [1.1, 'number'],
        [NaN, 'number'],
        [Infinity, 'number'],
        [false, 'boolean'],
        [true, 'boolean'],
        [{}, 'object'],
        [/./, 'object'],
        [new Date(), 'object']
    ].forEach(([arg, typ], idx) => {
        assert.equal(lo.is_type_of(arg, typ), true, `fix#1.${idx}: (${insp(arg)}, ${insp(typ)}) -> true`);
    });

    [
        [undefined, undefined],
        [null, undefined],
        [null, undefined],
        [undefined, undefined],
        [0, undefined],
        [1.1, undefined],
        [NaN, undefined],
        [Infinity, undefined],
        [false, undefined],
        [true, undefined],
        [{}, undefined],
        [/./, undefined],
        [new Date(), undefined]
    ].forEach(([arg, typ], idx) => {
        assert.equal(lo.is_type_of(arg, typ), false, `fix#2.${idx}: (${insp(arg)}, ${insp(typ)}) -> false`);
    });
});