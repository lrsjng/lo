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

    assert.deepEqual(Object.keys(lo).sort(), [
        'for_each',
        'is_fn',
        'is_str',
        'to_arr',

        'on_ready',
        'on_resize',
        'on_print',
        'dom',

        'binder'
    ].sort());
});
