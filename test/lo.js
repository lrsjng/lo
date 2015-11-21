const assert = require('chai').assert;

it('window is the global object', () => {
    assert.ok(global);
    assert.ok(global.window);
    assert.strictEqual(global, global.window);
    assert.ok(global.document);
});

it('lo is global object', () => {
    assert.isObject(global.lo);
});

it('works in this environment (lo.ok is true)', () => {
    assert.isTrue(global.lo.ok);
});

it('has the right properties', () => {
    // debounce
    // difference
    // intersection
    // sortBy
    // trim

    assert.deepEqual(Object.keys(global.lo).sort(), [
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
