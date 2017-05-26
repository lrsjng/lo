const {test, assert, insp} = require('scar');
const {lo} = require('../../util');

test('lo.has_len()', () => {
    assert.equal(typeof lo.has_len, 'function', 'is function');

    [
        [],
        [1, 2],
        new Array(), // eslint-disable-line no-array-constructor
        '',
        'abc'
    ].forEach((x, idx) => {
        assert.equal(lo.has_len(x), true, `fix#1.${idx}: (${insp(x)}) -> true`);
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
        assert.equal(lo.has_len(x), false, `fix#1.${idx}: (${insp(x)}) -> false`);
    });
});
