const {test, assert, insp} = require('scar');
const {lo} = require('../../util');

test('lo.isTypeOf is function', () => {
    assert.equal(typeof lo.isTypeOf, 'function');
});

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
].forEach(x => {
    const [arg, typ] = x;

    test(`lo.isTypeOf(${insp(arg)}, ${insp(typ)}) === true`, () => {
        assert.equal(lo.isTypeOf(arg, typ), true);
    });
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
].forEach(x => {
    const [arg, typ] = x;

    test(`lo.isTypeOf(${insp(arg)}, ${insp(typ)}) === false`, () => {
        assert.equal(lo.isTypeOf(arg, typ), false);
    });
});
