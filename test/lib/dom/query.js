const {test, assert, insp} = require('scar');
const jquery = require('jquery');
const {lo, restore} = require('../../util');

const win = global.window;
const doc = win.document;

const html =
    '<x-base>' +
        '<x-block id="x-1"></x-block>' +
        '<x-block id="x-2"></x-block>' +
        '<x-block id="x-3"></x-block>' +
        '<x-block id="x-4" class="x-a x-b"></x-block>' +
        '<x-block id="x-5" class="x-b x-c"></x-block>' +
        '<x-block id="x-6" class="x-b" data-x="x-d"></x-block>' +
    '</x-base>';

test('lo.dom(window) - query', () => {
    const res = lo.dom(win);
    assert.equal(typeof res, 'object');
    assert.equal(res.length, 1);
    assert.equal(res[0], win);
});

test('lo.dom(document) - query', () => {
    const res = lo.dom(doc);
    assert.equal(typeof res, 'object');
    assert.equal(res.length, 1);
    assert.equal(res[0], doc);
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
    test(`lo.dom(${insp(selector)}) - query`, () => {
        restore();
        jquery(html).appendTo('body');

        const res = lo.dom(selector);
        const jq = jquery(selector);
        assert.equal(typeof res, 'object');
        assert.equal(res.length, jq.length);
        Array.from(res).forEach((el, idx) => {
            assert.ok(el instanceof win.Element);
            assert.ok(el.parentNode);
            assert.equal(el, jq[idx]);
        });

        restore();
    });
});
