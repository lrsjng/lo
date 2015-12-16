const {test, assert, insp} = require('scar');
const sinon = require('sinon');
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
    const alwaysTrue = sinon.stub().returns(true);
    test(`lo.filter(${insp(x)}, fn[always true]) === ${insp(x)}`, () => {
        assert.deepEqual(lo.filter(x, alwaysTrue), x);
    });

    const alwaysFalse = sinon.stub().returns(false);
    test(`lo.filter(${insp(x)}, fn[always false]) === ${insp([])}`, () => {
        assert.deepEqual(lo.filter(x, alwaysFalse), []);
    });
});
