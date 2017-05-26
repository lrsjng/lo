const {test, assert, insp} = require('scar');
const {lo} = require('../../util');

/* eslint-disable no-new-wrappers, no-array-constructor, no-new-object */
function PlainA() {}
PlainA.prototype = undefined;
function PlainB() {}
PlainB.prototype.constructor.prototype = undefined;
const plainC = {};
plainC.prototype = {x: 1};

function NonPlainA() {}
function NonPlainB() {}
NonPlainB.prototype.constructor = undefined;
function NonPlainC() {this.val = 1;}
function NonPlainD() {}
NonPlainD.prototype = {x: 1};
function NonPlainE() {}
NonPlainE.prototype.x = 1;

const FIX_OTHER = [undefined, null];
const FIX_BOOLEAN = [false, true, new Boolean(true), new Boolean(0)];
const FIX_NUMERIC = [0, 1, -0, +0, new Number(0)];
const FIX_NUMBER = [...FIX_NUMERIC, NaN, Infinity, -Infinity];
const FIX_STRING = ['', ' ', 'a', '0', '/a/', 'null', 'undefined', 'NaN', 'Infinity'];
const FIX_ARRAY = [[], [undefined], [null], [0], [0, 1], new Array(), new Array(0), new Array(1), new Array(1, 2)];
const FIX_REGEXP = [/b/, new RegExp(), new RegExp('')];
const FIX_DATE = [new Date(), new Date(0), new Date(1)];
const FIX_FUNCTION = [() => {}, function a() {}, test];
const FIX_PLAIN_OBJECT = [
    {},
    {a: 1},
    new Object(),
    Object.create(null),
    new PlainA(),
    new PlainB(),
    plainC
];
const FIX_NON_PLAIN_OBJECT = [
    Object.create({}),
    new NonPlainA(),
    new NonPlainB(),
    new NonPlainC(),
    new NonPlainD(),
    new NonPlainE()
];
const FIX_ARGUMENTS = [
    (() => arguments)(),
    (() => arguments)(undefined),
    (() => arguments)(null),
    (() => arguments)(1, 2, 3),
    (() => arguments)('a'),
    (() => arguments)(true)
];
const FIX_ERROR = [
    new Error(),
    new Error(null),
    new Error(undefined),
    new Error('msg'),
    new TypeError(),
    new SyntaxError()
];
/* eslint-enable */

const FIXTURES = [
    ...FIX_OTHER,
    ...FIX_BOOLEAN,
    // ...FIX_NUMERIC,
    ...FIX_NUMBER,
    ...FIX_STRING,
    ...FIX_ARRAY,
    ...FIX_REGEXP,
    ...FIX_DATE,
    ...FIX_FUNCTION,
    ...FIX_PLAIN_OBJECT,
    ...FIX_NON_PLAIN_OBJECT,
    ...FIX_ARGUMENTS,
    ...FIX_ERROR
];

test('lo.is_bool()', () => {
    FIXTURES.forEach((x, idx) => {
        const exp = FIX_BOOLEAN.indexOf(x) >= 0;
        assert.equal(lo.is_bool(x), exp, `fix#${idx}: (${insp(x)}) -> ${insp(exp)}`);
    });
});

test('lo.is_num()', () => {
    FIXTURES.forEach((x, idx) => {
        const exp = FIX_NUMBER.indexOf(x) >= 0 || Number.isNaN(x);
        assert.equal(lo.is_num(x), exp, `fix#${idx}: (${insp(x)}) -> ${insp(exp)}`);
    });
});

test('lo.is_numeric()', () => {
    FIXTURES.forEach((x, idx) => {
        const exp = FIX_NUMERIC.indexOf(x) >= 0;
        assert.equal(lo.is_numeric(x), exp, `fix#${idx}: (${insp(x)}) -> ${insp(exp)}`);
    });
});

test('lo.is_str()', () => {
    FIXTURES.forEach((x, idx) => {
        const exp = FIX_STRING.indexOf(x) >= 0;
        assert.equal(lo.is_str(x), exp, `fix#${idx}: (${insp(x)}) -> ${insp(exp)}`);
    });
});

test('lo.is_arr()', () => {
    FIXTURES.forEach((x, idx) => {
        const exp = FIX_ARRAY.indexOf(x) >= 0;
        assert.equal(lo.is_arr(x), exp, `fix#${idx}: (${insp(x)}) -> ${insp(exp)}`);
    });
});

test('lo.is_re()', () => {
    FIXTURES.forEach((x, idx) => {
        const exp = FIX_REGEXP.indexOf(x) >= 0;
        assert.equal(lo.is_re(x), exp, `fix#${idx}: (${insp(x)}) -> ${insp(exp)}`);
    });
});

test('lo.is_fn()', () => {
    FIXTURES.forEach((x, idx) => {
        const exp = FIX_FUNCTION.indexOf(x) >= 0;
        assert.equal(lo.is_fn(x), exp, `fix#${idx}: (${insp(x)}) -> ${insp(exp)}`);
    });
});

test('lo.is_plain_obj()', () => {
    FIXTURES.forEach((x, idx) => {
        const exp = FIX_PLAIN_OBJECT.indexOf(x) >= 0;
        assert.equal(lo.is_plain_obj(x), exp, `fix#${idx}: (${insp(x)}) -> ${insp(exp)}`);
    });
});

test('lo.is_obj()', () => {
    FIXTURES.forEach((x, idx) => {
        const exp = x !== null && typeof x === 'object'; // :(
        assert.equal(lo.is_obj(x), exp, `fix#${idx}: (${insp(x)}) -> ${insp(exp)}`);
    });
});

test('lo.is_args()', () => {
    FIXTURES.forEach((x, idx) => {
        const exp = FIX_ARGUMENTS.indexOf(x) >= 0;
        assert.equal(lo.is_args(x), exp, `fix#${idx}: (${insp(x)}) -> ${insp(exp)}`);
    });
});

test('lo.is_err()', () => {
    FIXTURES.forEach((x, idx) => {
        const exp = FIX_ERROR.indexOf(x) >= 0;
        assert.equal(lo.is_err(x), exp, `fix#${idx}: (${insp(x)}) -> ${insp(exp)}`);
    });
});

test('lo.is_date()', () => {
    FIXTURES.forEach((x, idx) => {
        const exp = FIX_DATE.indexOf(x) >= 0;
        assert.equal(lo.is_date(x), exp, `fix#${idx}: (${insp(x)}) -> ${insp(exp)}`);
    });
});
