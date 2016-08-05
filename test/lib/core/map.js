const {test, assert, insp, spy} = require('scar');
const {lo} = require('../../util');

test('lo.map()', () => {
    assert.equal(typeof lo.map, 'function', 'is function');
    assert.throws(() => lo.map(), /TypeError/, 'no args throws');
    assert.throws(() => lo.map([1, 2]), /TypeError/, 'no fn throws');

    [
        [],
        [null],
        [undefined],
        [1, 2, 3],
        [{}, false, true],
        {},
        {a: 1},
        {a: 11, b: 22, c: 33}
    ].forEach((x, idx) => {
        const msg = `fix#${idx}: ${insp(x)}`;

        const arr = Object.keys(x).map(k => x[k]);
        const fn = spy(call => call.args[0]);
        const res = lo.map(x, fn);
        assert.deepEqual(res, arr, msg);
        assert.equal(fn.calls.length, arr.length, msg);
        arr.forEach((val, valIdx) => {
            assert.equal(fn.calls[valIdx].ctx, undefined, msg);
            assert.deepEqual(fn.calls[valIdx].args, [val, valIdx, arr], msg);
            assert.equal(fn.calls[valIdx].ret, val, msg);
        });
    });
});
