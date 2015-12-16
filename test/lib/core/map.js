const {test, assert, insp} = require('scar');
const sinon = require('sinon');
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
    const spy = sinon.stub().returnsArg(0);
    test(`map(${insp(x)}, identity) works`, () => {
        let idx = 0;
        const res = lo.map(x, spy);
        assert.ok(Array.isArray(res));
        assert.equal(spy.callCount, Object.keys(x).length);
        Object.keys(x).forEach(key => {
            const val = x[key];
            assert.ok(spy.getCall(idx).calledOn(undefined));
            assert.equal(spy.args[idx][0], val);
            assert.equal(String(spy.args[idx][1]), key);
            assert.equal(spy.args[idx][2], x);
            assert.equal(res[idx], val);
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
    const spy = sinon.spy();
    const ctx = {somectx: true};
    lo.map([1, 2], spy, ctx);
    assert.ok(spy.alwaysCalledOn(ctx));
});
