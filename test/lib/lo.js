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
        'as_arr',
        'as_fn',
        'binder',
        'cmp',
        'compact',
        'includes',
        'dom',
        'each',
        'every',
        'filter',
        'for_each',
        'for_own',
        'has',
        'has_len',
        'idx_of',
        'is',
        'is_args',
        'is_arr',
        'is_bool',
        'is_date',
        'is_doc',
        'is_el_doc_win',
        'is_el',
        'is_err',
        'is_fn',
        'is_inst_of',
        'is_num',
        'is_numeric',
        'is_obj',
        'is_plain_obj',
        'is_re',
        'is_str',
        'is_type_of',
        'is_win',
        'keys',
        'map',
        'on_print',
        'on_ready',
        'on_resize',
        'reduce',
        'size',
        'some',
        'sort_by',
        'sort',
        'to_arr',
        'uniq',
        'vals'
    ].sort());
});
