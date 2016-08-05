const {test, assert, insp} = require('scar');
const {lo} = require('../../util');

test('lo.filter()', () => {
    assert.equal(typeof lo.filter, 'function', 'is function');
    assert.throws(() => lo.filter(), /TypeError/, 'no args throws');
    assert.throws(() => lo.filter([1, 2]), /TypeError/, 'no fn throws');

    [
        [],
        [1],
        [1, 1],
        [1, 2, 1]
    ].forEach((x, idx) => {
        assert.deepEqual(lo.filter(x, () => true), x, `fix#${idx}: (${insp(x)}, ()=>true)`);
        assert.deepEqual(lo.filter(x, () => false), [], `fix#${idx}: (${insp(x)}, ()=>false)`);
    });
});
