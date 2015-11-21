const assert = require('chai').assert;
const dom = require('../..').dom;

describe('dom() - parse HTML', () => {
    [
        'a',
        'acronym',
        'address',
        'applet',
        'area',
        'article',
        'audio',
        'b',
        'basefont',
        'big',
        'blink',
        'button',
        'canvas',
        'caption',
        'center',
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
        'dir',
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
        'isindex',
        'keygen',
        'label',
        'legend',
        'li',
        'link',
        'listing',
        'main',
        'map',
        'menu',
        'menuitem',
        'meta',
        'meter',
        'nav',
        'noembed',
        'noscript',
        'object',
        'ol',
        'optgroup',
        'option',
        'output',
        'p',
        'param',
        'plaintext',
        'pre',
        'progress',
        'script',
        'section',
        'select',
        'shadow',
        'source',
        'spacer',
        'span',
        'strike',
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
        'tt',
        'ul',
        'video',
        'xmp'
    ].forEach(name => {
        const tag = `<${name}>`;
        it(`dom('${tag}')`, () => {
            const res = dom(tag);
            assert.instanceOf(res, dom);
            assert.lengthOf(res, 1);
            assert.instanceOf(res[0], window.Element);
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
