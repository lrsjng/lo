const dom = global.lo.dom;
const assert = require('chai').assert;

describe('dom()', () => {
    it('is function', () => {
        assert.isFunction(dom);
    });

    it('prototype has the right properties', () => {
        assert.deepEqual(Object.keys(dom.prototype).sort(), [
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
});
