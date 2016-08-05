const {test, assert, insp, spy} = require('scar');
const {lo} = require('../../util');

test('lo.each()', () => {
    assert.equal(typeof lo.each, 'function', 'is function');
    assert.equal(lo.each(), undefined, 'returns undefined');
    assert.throws(() => lo.each([1, 2]), /TypeError/, 'no fn throws');

    [
        [],
        [null],
        [undefined],
        [1, 2, 3]
    ].forEach((x, idx) => {
        const msg = `fix#1.${idx}: ${insp(x)}`;
        const fn = spy();

        assert.equal(lo.each(x, fn), undefined, msg);
        assert.equal(fn.calls.length, x.length, msg);
        x.forEach((el, elIdx) => {
            assert.deepEqual(fn.calls[elIdx].args, [el, elIdx, x], msg);
        });
    });

    [
        {},
        {a: 1}
    ].forEach((x, idx) => {
        const msg = `fix#1.${idx}: ${insp(x)}`;
        const fn = spy();

        assert.equal(lo.each(x, fn), undefined, msg);
        assert.equal(fn.calls.length, Object.keys(x).length, msg);
        Object.keys(x).forEach((key, keyIdx) => {
            assert.deepEqual(fn.calls[keyIdx].args, [x[key], key, x], msg);
        });
    });
});
