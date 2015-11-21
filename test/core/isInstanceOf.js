const lo = global.lo;
const insp = require('util').inspect;
const assert = require('chai').assert;

describe('.isInstanceOf()', () => {
    it('is function', () => {
        assert.isFunction(lo.isInstanceOf);
    });

    [
        [{}, Object],
        [/./, RegExp],
        [() => null, Function],
        [new Boolean(), Boolean], // eslint-disable-line no-new-wrappers
        [new Number(), Number], // eslint-disable-line no-new-wrappers
        [new String(), String] // eslint-disable-line no-new-wrappers
    ].forEach(x => {
        const [arg, typ] = x;

        it('isInstanceOf(' + insp(arg) + ', ' + insp(typ) + ') -> true', () => {
            assert.isTrue(lo.isInstanceOf(arg, typ));
        });
    });

    [
        [undefined, undefined],
        [true, Boolean],
        [false, Boolean],
        [1, Number],
        ['', String]
    ].forEach(x => {
        const [arg, typ] = x;

        it('isInstanceOf(' + insp(arg) + ', ' + insp(typ) + ') -> false', () => {
            assert.isFalse(lo.isInstanceOf(arg, typ));
        });
    });
});
