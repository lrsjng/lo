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
    assert.ok(global.window.lo === lo);

    assert.deepEqual(Object.keys(lo).sort(), ['dom', 'binder'].sort());
});
