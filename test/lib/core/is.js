const {test, assert, insp} = require('scar');
const {lo} = require('../../util');

/* eslint-disable no-new-wrappers, no-array-constructor, no-new-object */
const FIX_OTHER = [undefined, null, false, true];
const FIX_NUMBER = [0, 1, -0, +0, NaN, Infinity, -Infinity];
const FIX_STRING = ['', ' ', 'a', '0', '/a/', 'null', 'undefined', 'NaN', 'Infinity'];
const FIX_ARRAY = [[], [undefined], [null], [0], [0, 1], new Array(), new Array(0), new Array(1), new Array(1, 2)];
const FIX_REGEXP = [/b/, new RegExp(), new RegExp('')];
const FIX_FUNCTION = [() => {}, function a() {}, test];
const FIX_OBJECT = [
    {},
    {a: 1},
    Object.create(null),
    Object.create({}),
    new Object(),
    new Number(0),
    new String(''),
    new Boolean(true),
    new Boolean(0),
    new Date(),
    new Date(0),
    new Date(1),
    new Error(),
    new Error(null),
    new Error(undefined),
    new Error('msg'),
    new TypeError(),
    new SyntaxError()
];
const FIX_ARGUMENTS = [
    (() => arguments)(),
    (() => arguments)(undefined),
    (() => arguments)(null),
    (() => arguments)(1, 2, 3),
    (() => arguments)('a'),
    (() => arguments)(true)
];
/* eslint-enable */

const FIXTURES = [
    ...FIX_OTHER,
    ...FIX_NUMBER,
    ...FIX_STRING,
    ...FIX_ARRAY,
    ...FIX_REGEXP,
    ...FIX_FUNCTION,
    ...FIX_OBJECT,
    ...FIX_ARGUMENTS
];

test('lo.is_str()', () => {
    FIXTURES.forEach((x, idx) => {
        const exp = FIX_STRING.includes(x);
        assert.equal(lo.is_str(x), exp, `fix#${idx}: (${insp(x)}) -> ${insp(exp)}`);
    });
});

test('lo.is_fn()', () => {
    FIXTURES.forEach((x, idx) => {
        const exp = FIX_FUNCTION.includes(x);
        assert.equal(lo.is_fn(x), exp, `fix#${idx}: (${insp(x)}) -> ${insp(exp)}`);
    });
});

test('lo.is_obj()', () => {
    FIXTURES.forEach((x, idx) => {
        const exp = x !== null && typeof x === 'object'; // :(
        assert.equal(lo.is_obj(x), exp, `fix#${idx}: (${insp(x)}) -> ${insp(exp)}`);
    });
});
