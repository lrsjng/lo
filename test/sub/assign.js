import {inspect} from 'util';
import lodash from 'lodash';
import {assert} from 'chai';
import * as lo from '../..';

describe('.assign()', () => {
    it('is function', () => {
        assert.isFunction(lo.assign);
    });

    lodash.each([
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
    ], x => {
        const [args, exp] = x;

        it(`assign(${inspect(args)}) -> ${inspect(exp)}`, () => {
            const res = lo.assign(...args);
            assert.deepEqual(res, exp);
            if (args.length > 0 && lodash.isObject(args[0])) {
                assert.strictEqual(res, args[0]);
            }
            if (args.length > 1) {
                assert.notStrictEqual(res, args[1]);
            }
        });
    });
});
