const insp = require('util').inspect;
const isObject = require('util').isObject;
const assert = require('chai').assert;
const lo = require('../..');

describe('.assign()', () => {
    it('is function', () => {
        assert.isFunction(lo.assign);
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
        [[undefined, {a: 1}, {a: 2}, {a: 3}], {a: 3}]
    ].forEach(x => {
        const [args, exp] = x;

        it(`assign(${insp(args)}) -> ${insp(exp)}`, () => {
            const res = lo.assign(...args);
            assert.deepEqual(res, exp);
            if (args.length > 0 && isObject(args[0])) {
                assert.strictEqual(res, args[0]);
            }
            if (args.length > 1) {
                assert.notStrictEqual(res, args[1]);
            }
        });
    });
});
