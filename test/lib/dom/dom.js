const {test, assert} = require('scar');
const {lo} = require('../../util');

test('lo.dom()', () => {
    assert.equal(typeof lo.dom, 'function', 'is function');

    assert.deepEqual(Object.keys(lo.dom.prototype).sort(), [
        'constructor',
        'each',
        'map',
        'find',
        'on',
        'off',
        'attr',
        'rm_attr',
        'val',
        'html',
        'text',
        'rm',
        'rpl',
        'app',
        'app_to',
        'pre',
        'pre_to',
        'cls',
        'has_cls',
        'add_cls',
        'rm_cls'
    ].sort(), 'props');

    const dom = lo.dom();
    assert.equal(typeof dom, 'object');
    assert.equal(dom.constructor, lo.dom);
    // assert.ok(dom instanceof lo.dom);
    assert.equal(dom.length, 0);
});
