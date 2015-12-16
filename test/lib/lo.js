const {test, assert} = require('scar');
const {lo} = require('../util');

test('window is the global object', () => {
    assert.ok(global);
    assert.ok(global.window);
    assert.equal(global, global.window);
    assert.ok(global.document);
});

test('lo is global object', () => {
    assert.equal(typeof lo, 'object');
});

test('works in this environment (lo.ok is true)', () => {
    assert.equal(lo.ok, true);
});

test('has the right properties', () => {
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
