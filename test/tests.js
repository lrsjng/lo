import lodash from 'lodash';
import {assert} from 'chai';
import * as lo from '..';

describe('lo', () => {
    it('is plain object', () => {
        assert.isTrue(lodash.isPlainObject(lo));
    });

    it('has the right properties', () => {
        // debounce
        // difference
        // intersection
        // sortBy
        // trim

        assert.deepEqual(lodash.keys(lo).sort(), [
            '__BABEL_FIX__',
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

    require('./sub/assign');
    require('./sub/compact');
    require('./sub/contains');
    require('./sub/each');
    require('./sub/filter');
    require('./sub/has');
    require('./sub/hasLength');
    require('./sub/isArguments');
    require('./sub/isArray');
    require('./sub/isBoolean');
    require('./sub/isDate');
    require('./sub/isError');
    require('./sub/isFunction');
    require('./sub/isInstanceOf');
    require('./sub/isNumber');
    require('./sub/isNumeric');
    require('./sub/isObject');
    require('./sub/isPlainObject');
    require('./sub/isRegExp');
    require('./sub/isString');
    require('./sub/isTypeOf');
    require('./sub/keys');
    require('./sub/map');
    require('./sub/size');
    require('./sub/pluck');
    require('./sub/uniq');
    require('./sub/values');
});
