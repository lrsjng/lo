const {test, assert, insp} = require('scar');
const {lo} = require('../../util');

test('lo.filter is function', () => {
    assert.equal(typeof lo.filter, 'function');
});

test('lo.filter() does not throw', () => {
    assert.deepEqual(lo.filter(), []);
});

test('lo.filter([...]) does not throw', () => {
    assert.deepEqual(lo.filter([1, 2]), []);
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
