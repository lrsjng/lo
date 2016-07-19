const {test, assert, insp, spy} = require('scar');
const {lo} = require('../../util');

test('lo.each is function', () => {
    assert.equal(typeof lo.each, 'function');
});

test('lo.each() returns undefined', () => {
    assert.equal(lo.each(), undefined);
});

test('lo.each([1, 2]) throws without callback', () => {
    assert.throws(() => lo.each([1, 2]), /TypeError/);
});

[
    [],
    [null],
    [undefined],
    [1, 2, 3]
].forEach(x => {
    test(`lo.each(${insp(x)}, fn) works`, () => {
        const fn = spy();

        assert.equal(lo.each(x, fn), undefined);
        assert.equal(fn.calls.length, x.length);
        x.forEach((el, idx) => {
            assert.deepEqual(fn.calls[idx].args, [el, idx, x]);
        });
    });
});

[
    {},
    {a: 1}
].forEach(x => {
    test(`lo.each(${insp(x)}, fn) works`, () => {
        const fn = spy();
        let idx = 0;

        assert.equal(lo.each(x, fn), undefined);
        assert.equal(fn.calls.length, Object.keys(x).length);
        Object.keys(x).forEach(key => {
            assert.deepEqual(fn.calls[idx].args, [x[key], key, x]);
            idx += 1;
        });
    });
});
