const dom = global.lo.dom;
const Element = global.Element;
const assert = require('chai').assert;

describe('dom() - parse HTML', () => {
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
        it(`dom('${tag}')`, () => {
            const res = dom(tag);
            assert.instanceOf(res, dom);
            assert.lengthOf(res, 1);
            assert.instanceOf(res[0], Element);
            assert.strictEqual(res[0].nodeName.toLowerCase(), name.toLowerCase());
            assert.lengthOf(res[0].childNodes, 0);
            assert.isNull(res[0].parentNode);
            assert.strictEqual(res[0].innerHTML, '');
            assert.strictEqual(res[0].textContent, '');
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
        it(`dom('${tag}') returns empty instance`, () => {
            const res = dom(tag);
            assert.lengthOf(res, 0);
        });
    });
});
