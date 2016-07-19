const {test, assert} = require('scar');
const {lo} = require('../util');

test('window is global object', () => {
    assert.ok(global.window);
    assert.equal(global.window, global.window.window);
});

test('lo is global object', () => {
    assert.ok(global.window.lo);
});

test('lo has the right properties', () => {
    // debounce
    // difference
    // intersection
    // sortBy
    // trim

    assert.deepEqual(Object.keys(lo).sort(), [
        'asArray',
        'asFunction',
        'assign',
        'binder',
        'cmp',
        'compact',
        'contains',
        'dom',
        'each',
        'every',
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
        'onPrint',
        'onReady',
        'onResize',
        'reduce',
        'size',
        'some',
        'sortBy',
        'sort',
        'toArray',
        'uniq',
        'values'
    ].sort());
});
