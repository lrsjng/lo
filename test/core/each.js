const insp = require('util').inspect;
const assert = require('chai').assert;
const sinon = require('sinon');
const lo = require('../..');

describe('.each()', () => {
    it('is function', () => {
        assert.isFunction(lo.each);
    });

    it('does not throw without arguments', () => {
        assert.isUndefined(lo.each());
    });

    it('does not throw without callback', () => {
        assert.isUndefined(lo.each([1, 2]));
    });

    [
        [],
        [null],
        [undefined],
        [1, 2, 3]
    ].forEach(x => {
        it('each(' + insp(x) + ', fn) works', () => {
            const spy = sinon.spy();

            assert.isUndefined(lo.each(x, spy));
            assert.strictEqual(spy.callCount, x.length);
            x.forEach((el, idx) => {
                assert.strictEqual(spy.args[idx][0], el);
                assert.equal(spy.args[idx][1], idx);
                assert.strictEqual(spy.args[idx][2], x);
            });
        });
    });

    [
        {},
        {a: 1}
    ].forEach(x => {
        it('each(' + insp(x) + ', fn) works', () => {
            const spy = sinon.spy();
            let idx = 0;

            assert.isUndefined(lo.each(x, spy));
            assert.strictEqual(spy.callCount, Object.keys(x).length);
            Object.keys(x).forEach(key => {
                assert.strictEqual(spy.args[idx][0], x[key]);
                assert.equal(spy.args[idx][1], key);
                assert.strictEqual(spy.args[idx][2], x);
                idx += 1;
            });
        });
    });
});
