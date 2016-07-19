const {test, assert} = require('scar');
const {lo} = require('../../util');

const win = global.window;

[
    'a',
    'address',
    'area',
    'article',
    'audio',
    'b',
    'button',
    'canvas',
    'caption',
    'code',
    'col',
    'colgroup',
    'content',
    'datalist',
    'dd',
    'decorator',
    'del',
    'details',
    'dialog',
    'div',
    'dl',
    'dt',
    'element',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'font',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'header',
    'hgroup',
    'hr',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'pre',
    'progress',
    'script',
    'section',
    'select',
    'shadow',
    'source',
    'span',
    'strong',
    'style',
    'summary',
    'table',
    'tbody',
    'td',
    'template',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'title',
    'tr',
    'track',
    'ul',
    'video'
].forEach(name => {
    const tag = `<${name}>`;
    test(`lo.dom('${tag}') - create html`, () => {
        const res = lo.dom(tag);
        assert.equal(typeof res, 'object');
        assert.equal(res.length, 1);
        assert.ok(res[0] instanceof win.Element);
        assert.equal(res[0].nodeName.toLowerCase(), name.toLowerCase());
        assert.equal(res[0].childNodes.length, 0);
        assert.equal(res[0].parentNode, null);
        assert.equal(res[0].innerHTML, '');
        assert.equal(res[0].textContent, '');
    });
});

[
    'body',
    'frame',
    'frameset',
    'head',
    'html'
].forEach(name => {
    const tag = `<${name}>`;
    test(`lo.dom('${tag}') returns empty instance - create html`, () => {
        const res = lo.dom(tag);
        assert.equal(typeof res, 'object');
        assert.equal(res.length, 0);
    });
});
