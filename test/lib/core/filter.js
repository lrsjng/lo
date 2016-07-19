const {test, assert, insp} = require('scar');
const {lo} = require('../../util');

test('lo.filter is function', () => {
    assert.equal(typeof lo.filter, 'function');
});

test('lo.filter() throws without callback', () => {
    assert.throws(() => lo.filter(), /TypeError/);
});

test('lo.filter([1, 2]) throws without callback', () => {
    assert.throws(() => lo.filter([1, 2]), /TypeError/);
});

[
    [],
    [1],
    [1, 1],
    [1, 2, 1]
].forEach(x => {
    test(`lo.filter(${insp(x)}, fn[always true]) === ${insp(x)}`, () => {
        assert.deepEqual(lo.filter(x, () => true), x);
    });

    test(`lo.filter(${insp(x)}, fn[always false]) === ${insp([])}`, () => {
        assert.deepEqual(lo.filter(x, () => false), []);
    });
});
