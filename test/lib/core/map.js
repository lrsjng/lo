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
    const fn = spy(call => call.args[0]);
    test(`map(${insp(x)}, identity) works`, () => {
        let idx = 0;
        const res = lo.map(x, fn);
        assert.ok(Array.isArray(res));
        assert.equal(fn.calls.length, Object.keys(x).length);
        Object.keys(x).forEach(key => {
            if (Array.isArray(x)) {
                key = parseInt(key, 10);
            }
            const val = x[key];
            assert.equal(fn.calls[idx].ctx, undefined);
            assert.deepEqual(fn.calls[idx].args, [val, key, x]);
            assert.equal(fn.calls[idx].ret, val);
            idx += 1;
        });
    });
});

test('lo.map() === []', () => {
    assert.deepEqual(lo.map(), []);
});

test('lo.map([...]) === []', () => {
    assert.deepEqual(lo.map([1, 2]), []);
});

test('lo.map() sets context correct', () => {
    const fn = spy();
    const ctx = {somectx: true};
    lo.map([1, 2], fn, ctx);
    assert.equal(fn.calls.length, 2);
    fn.calls.forEach(call => {
        assert.equal(call.ctx, ctx);
    });
});
