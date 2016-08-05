const {test, assert, insp} = require('scar');
const {lo} = require('../../util');

test('lo.hasLength()', () => {
    assert.equal(typeof lo.hasLength, 'function', 'is function');

    [
        [],
        [1, 2],
        new Array(), // eslint-disable-line no-array-constructor
        '',
        'abc'
    ].forEach((x, idx) => {
        assert.equal(lo.hasLength(x), true, `fix#1.${idx}: (${insp(x)}) -> true`);
    });

    [
        undefined,
        null,
        true,
        false,
        {},
        0,
        1,
        new Date(),
        new Object(), // eslint-disable-line no-new-object
        /./
    ].forEach((x, idx) => {
        assert.equal(lo.hasLength(x), false, `fix#1.${idx}: (${insp(x)}) -> false`);
    });
});
