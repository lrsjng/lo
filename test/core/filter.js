const lo = global.lo;
const insp = require('util').inspect;
const assert = require('chai').assert;
const sinon = require('sinon');

describe('.filter()', () => {
    it('is function', () => {
        assert.isFunction(lo.filter);
    });

    it('does not throw without arguments', () => {
        assert.deepEqual(lo.filter(), []);
    });

    it('does not throw without callback', () => {
        assert.deepEqual(lo.filter([1, 2]), []);
    });

    [
        [],
        [1],
        [1, 1],
        [1, 2, 1]
    ].forEach(x => {
        const alwaysTrue = sinon.stub().returns(true);
        it('filter(' + insp(x) + ', fn[always true]) -> ' + insp(x), () => {
            assert.deepEqual(lo.filter(x, alwaysTrue), x);
        });

        const alwaysFalse = sinon.stub().returns(false);
        it('filter(' + insp(x) + ', fn[always false]) -> ' + insp([]), () => {
            assert.deepEqual(lo.filter(x, alwaysFalse), []);
        });
    });
});
