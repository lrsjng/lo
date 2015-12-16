const {test, assert, insp} = require('scar');
const {lo} = require('../../util');

test('lo.hasLength is function', () => {
    assert.equal(typeof lo.hasLength, 'function');
});

[
    [],
    [1, 2],
    new Array(), // eslint-disable-line no-array-constructor
    '',
    'abc'
].forEach(x => {
    test(`lo.hasLength(${insp(x)}) === true`, () => {
        assert.equal(lo.hasLength(x), true);
    });
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
].forEach(x => {
    test(`lo.hasLength(${insp(x)}) === false`, () => {
        assert.equal(lo.hasLength(x), false);
    });
});
