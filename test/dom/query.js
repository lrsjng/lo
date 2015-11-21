const restoreHtml = window.restoreHtml;
const jquery = require('jquery');
const assert = require('chai').assert;
const dom = require('../..').dom;

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
        const res = dom(window);
        assert.instanceOf(res, dom);
        assert.lengthOf(res, 1);
        assert.strictEqual(res[0], window);
    });

    it('dom(document)', () => {
        const res = dom(window.document);
        assert.instanceOf(res, dom);
        assert.lengthOf(res, 1);
        assert.strictEqual(res[0], window.document);
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
                assert.instanceOf(el, window.Element);
                assert.isNotNull(el.parentNode);
                assert.strictEqual(el, jq[idx]);
            });
        });
    });
});
