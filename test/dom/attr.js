const restoreHtml = window.restoreHtml;
const jquery = require('jquery');
const assert = require('chai').assert;
const dom = require('../..').dom;

describe('.attr()', () => {
    const html = '<x-block id="x-1" class="x-2" data-x="x-3"></x-block>';

    after(() => {
        restoreHtml();
    });

    beforeEach(() => {
        restoreHtml();
        jquery(html).appendTo('body');
    });

    [
        [undefined, null],
        ['none', null],
        ['id', 'x-1'],
        ['class', 'x-2'],
        ['data-x', 'x-3']
    ].forEach(args => {
        const [key, exp] = args;

        it(`.attr('${key}') - getter`, () => {
            const res = dom('x-block').attr(key);
            assert.strictEqual(res, exp);
        });
    });

    [
        ['key', null],
        ['key', 'a'],
        ['key', 1],
        ['key', true]
    ].forEach(args => {
        const [key, val] = args;

        it(`.attr('${key}', '${val}') - setter`, () => {
            assert.isUndefined(jquery('x-block').attr(key));
            const inst = dom('x-block');
            const res = inst.attr(key, val);
            assert.strictEqual(res, inst);
            assert.strictEqual(jquery('x-block').attr(key), String(val));
        });
    });
});
