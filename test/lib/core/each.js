const {test, assert, insp} = require('scar');
const sinon = require('sinon');
const {lo} = require('../../util');

test('lo.each is function', () => {
    assert.equal(typeof lo.each, 'function');
});

test('does not throw without arguments', () => {
    assert.equal(lo.each(), undefined);
});

test('does not throw without callback', () => {
    assert.equal(lo.each([1, 2]), undefined);
});

[
    [],
    [null],
    [undefined],
    [1, 2, 3]
].forEach(x => {
    test(`each(${insp(x)}, fn) works`, () => {
        const spy = sinon.spy();

        assert.equal(lo.each(x, spy), undefined);
        assert.equal(spy.callCount, x.length);
        x.forEach((el, idx) => {
            assert.equal(spy.args[idx][0], el);
            assert.equal(spy.args[idx][1], idx);
            assert.equal(spy.args[idx][2], x);
        });
    });
});

[
    {},
    {a: 1}
].forEach(x => {
    test(`each(${insp(x)}, fn) works`, () => {
        const spy = sinon.spy();
        let idx = 0;

        assert.equal(lo.each(x, spy), undefined);
        assert.equal(spy.callCount, Object.keys(x).length);
        Object.keys(x).forEach(key => {
            assert.equal(spy.args[idx][0], x[key]);
            assert.equal(spy.args[idx][1], key);
            assert.equal(spy.args[idx][2], x);
            idx += 1;
        });
    });
});
