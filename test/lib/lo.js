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
        'binder',
        'dom',
        'each',
        'for_each',
        'for_own',
        'is_doc',
        'is_el',
        'is_fn',
        'is_obj',
        'is_str',
        'is_win',
        'keys',
        'on_print',
        'on_ready',
        'on_resize',
        'to_arr',
        'vals'
    ].sort());
});
