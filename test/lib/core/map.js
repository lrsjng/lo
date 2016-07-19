const {test, assert, insp, spy} = require('scar');
const {lo} = require('../../util');

test('lo.map is function', () => {
    assert.equal(typeof lo.map, 'function');
});

[
    [],
    [null],
    [undefined],
    [1, 2, 3],
    [{}, false, true],
    {},
    {a: 1},
    {a: 11, b: 22, c: 33}
].forEach(x => {
    test(`lo.map(${insp(x)}, identity) works`, () => {
        const arr = Object.keys(x).map(k => x[k]);
        const fn = spy(call => call.args[0]);
        const res = lo.map(x, fn);
        assert.deepEqual(res, arr);
        assert.equal(fn.calls.length, arr.length);
        arr.forEach((val, idx) => {
            assert.equal(fn.calls[idx].ctx, undefined);
            assert.deepEqual(fn.calls[idx].args, [val, idx, arr]);
            assert.equal(fn.calls[idx].ret, val);
        });
    });
});

test('lo.map() === []', () => {
    assert.throws(() => lo.map(), /TypeError/);
});

test('lo.map([1, 2]) === [undefined, undefined]', () => {
    assert.throws(() => lo.map([1, 2]), /TypeError/);
});
