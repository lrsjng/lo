const lo = global.lo;
const insp = require('util').inspect;
const assert = require('chai').assert;
const sinon = require('sinon');

describe('.map()', () => {
    it('is function', () => {
        assert.isFunction(lo.map);
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
        const res = lo.map(x, spy);
        it('map(' + insp(x) + ', identity) -> ' + insp(res), () => {
            let idx = 0;
            assert.isArray(res);
            assert.strictEqual(spy.callCount, Object.keys(x).length);
            Object.keys(x).forEach(key => {
                const val = x[key];
                assert.isTrue(spy.getCall(idx).calledOn(undefined));
                assert.strictEqual(spy.args[idx][0], val);
                assert.strictEqual(String(spy.args[idx][1]), key);
                assert.strictEqual(spy.args[idx][2], x);
                assert.strictEqual(res[idx], val);
                idx += 1;
            });
        });
    });

    it('returns [] when no arguments', () => {
        assert.deepEqual(lo.map(), []);
    });

    it('returns [] when no fn', () => {
        assert.deepEqual(lo.map([1, 2]), []);
    });

    it('sets context correct', () => {
        const spy = sinon.spy();
        const ctx = {somectx: true};
        lo.map([1, 2], spy, ctx);
        assert.isTrue(spy.alwaysCalledOn(ctx));
    });
});
