const win = global.window;
const doc = global.document;
const dom = global.lo.dom;
const restoreHtml = global.restoreHtml;
const Element = global.Element;
const jquery = require('jquery');
const assert = require('chai').assert;

describe('dom() - query select', () => {
    const html =
        '<x-base>' +
            '<x-block id="x-1"></x-block>' +
            '<x-block id="x-2"></x-block>' +
            '<x-block id="x-3"></x-block>' +
            '<x-block id="x-4" class="x-a x-b"></x-block>' +
            '<x-block id="x-5" class="x-b x-c"></x-block>' +
            '<x-block id="x-6" class="x-b" data-x="x-d"></x-block>' +
        '</x-base>';

    after(() => {
        restoreHtml();
    });

    beforeEach(() => {
        restoreHtml();
        jquery(html).appendTo('body');
    });

    it('dom(window)', () => {
        const res = dom(win);
        assert.instanceOf(res, dom);
        assert.lengthOf(res, 1);
        assert.strictEqual(res[0], win);
    });

    it('dom(document)', () => {
        const res = dom(doc);
        assert.instanceOf(res, dom);
        assert.lengthOf(res, 1);
        assert.strictEqual(res[0], doc);
    });

    [
        'x-base',
        'x-block',
        'x-none',
        ' x-block',
        'x-block ',
        ' x-block ',
        '#x-1',
        '#x-2',
        '#x-3',
        '#x-4',
        '#x-5',
        '#x-6',
        '.x-a',
        '.x-b',
        '.x-c',
        '[data-x="x-d"]',
        'x-base x-block',
        'x-block.x-c',
        'x-base .x-c',
        '#x-1,#x-2',
        ' #x-1 , #x-2 '
    ].forEach(selector => {
        it('dom(\'' + selector + '\')', () => {
            const res = dom(selector);
            const jq = jquery(selector);
            assert.instanceOf(res, dom);
            assert.strictEqual(res.length, jq.length);
            Array.from(res).forEach((el, idx) => {
                assert.instanceOf(el, Element);
                assert.isNotNull(el.parentNode);
                assert.strictEqual(el, jq[idx]);
            });
        });
    });
});
