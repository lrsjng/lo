const lo = global.lo;
const insp = require('util').inspect;
const assert = require('chai').assert;

describe('.has()', () => {
    it('is function', () => {
        assert.isFunction(lo.has);
    });

    [
        [{a: 1}, 'a'],
        [{a: null}, 'a'],
        [{a: undefined}, 'a'],
        [[], 'length'],
        ['a', 'length'],
        ['', 'length']
    ].forEach(x => {
        const[obj, key] = x;

        it('has(' + insp(obj) + ', ' + insp(key) + ') -> true', () => {
            assert.isTrue(lo.has(obj, key));
        });
    });

    [
        [undefined, 'a'],
        [null, 'a'],
        [true, 'a'],
        [false, 'a'],
        [{}, 'a'],
        [{}, undefined],
        [{}, null],
        [{}, true],
        [{}, false],
        ['a', 'a']
    ].forEach(x => {
        const [obj, key] = x;

        it('has(' + insp(obj) + ', ' + insp(key) + ') -> false', () => {
            assert.isFalse(lo.has(obj, key));
        });
    });
});
