const assert = require('chai').assert;
const lo = require('../..');

describe('core', () => {
    it('is object', () => {
        assert.isTrue(typeof lo === 'object');
    });

    it('has the right properties', () => {
        // debounce
        // difference
        // intersection
        // sortBy
        // trim

        assert.deepEqual(Object.keys(lo).sort(), [
            'all',
            'any',
            'asArray',
            'assign',
            'binder',
            'cmp',
            'compact',
            'contains',
            'dom',
            'each',
            'filter',
            'forEach',
            'forOwn',
            'has',
            'hasLength',
            'indexOf',
            'is',
            'isArguments',
            'isArray',
            'isBoolean',
            'isDate',
            'isDocument',
            'isElDocWin',
            'isElement',
            'isError',
            'isFunction',
            'isInstanceOf',
            'isNumber',
            'isNumeric',
            'isObject',
            'isPlainObject',
            'isRegExp',
            'isString',
            'isTypeOf',
            'isWindow',
            'keys',
            'map',
            'ok',
            'onPrint',
            'onReady',
            'onResize',
            'pluck',
            'reduce',
            'size',
            'sortBy',
            'toArray',
            'uniq',
            'values'
        ].sort());
    });

    it('works in this environment (.ok is true)', () => {
        assert.isTrue(lo.ok);
    });

    require('./assign');
    require('./compact');
    require('./contains');
    require('./each');
    require('./filter');
    require('./has');
    require('./hasLength');
    require('./isArguments');
    require('./isArray');
    require('./isBoolean');
    require('./isDate');
    require('./isError');
    require('./isFunction');
    require('./isInstanceOf');
    require('./isNumber');
    require('./isNumeric');
    require('./isObject');
    require('./isPlainObject');
    require('./isRegExp');
    require('./isString');
    require('./isTypeOf');
    require('./keys');
    require('./map');
    require('./size');
    require('./pluck');
    require('./uniq');
    require('./values');
});
