const {test, assert, insp} = require('scar');
const {lo} = require('../../util');
const isObject = require('util').isObject;

test('lo.assign is function', () => {
    assert.equal(typeof lo.assign, 'function');
});

[
    [[], {}],
    [[{}], {}],
    [[{}, {}], {}],
    [[{a: 1}], {a: 1}],
    [[{a: 1}, {b: 2}], {a: 1, b: 2}],
    [[{a: 1}, {a: 2}], {a: 2}],
    [[{}, {a: 1}], {a: 1}],
    [[{a: 1}, {}], {a: 1}],
    [[{a: 1}, {a: 2}, {a: 3}], {a: 3}],
    [[undefined], {}],
    [[null], {}],
    [[0], {}],
    [[undefined, {a: 1}, {a: 2}, {a: 3}], {a: 3}],
    [[{}, [11, 22], {x: 3}], {0: 11, 1: 22, x: 3}]
].forEach(x => {
    const [args, exp] = x;

    test(`lo.assign(${insp(args)}) === ${insp(exp)}`, () => {
        const res = lo.assign(...args);
        assert.deepEqual(res, exp);
        if (args.length > 0 && isObject(args[0])) {
            assert.equal(res, args[0]);
        }
        if (args.length > 1) {
            assert.notEqual(res, args[1]);
        }
    });
});
