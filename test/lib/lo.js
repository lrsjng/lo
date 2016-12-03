const {test, assert} = require('scar');
const {lo} = require('../util');

test('window', () => {
    // !!! call stack exceeded when asserting window
    // assert.ok(global.window);
    // assert.equal(global.window, global.window.window);
    assert.ok(!!global.window);
    assert.ok(global.window === global.window.window);
});

test('lo', () => {
    assert.ok(global.window.lo);

    // debounce
    // difference
    // intersection

    assert.deepEqual(Object.keys(lo).sort(), [
        'asArray',
        'asFunction',
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
