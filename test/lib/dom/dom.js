const {test, assert} = require('scar');
const {lo} = require('../../util');

test('lo.dom is function', () => {
    assert.equal(typeof lo.dom, 'function');
});

test('lo.dom.prototype has the right properties', () => {
    assert.deepEqual(Object.keys(lo.dom.prototype).sort(), [
        'constructor',
        'each',
        'map',
        'find',
        'on',
        'off',
        'attr',
        'rmAttr',
        'val',
        'html',
        'text',
        'clr',
        'rm',
        'rpl',
        'app',
        'appTo',
        'pre',
        'preTo',
        'cls',
        'hasCls',
        'addCls',
        'rmCls'
    ].sort());
});
