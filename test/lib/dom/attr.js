const {test, assert, insp} = require('scar');
const jquery = require('jquery');
const {lo, restore} = require('../../util');

const html = '<x-block id="x-1" class="x-2" data-x="x-3"></x-block>';

[
    [undefined, null],
    ['none', null],
    ['id', 'x-1'],
    ['class', 'x-2'],
    ['data-x', 'x-3']
].forEach(args => {
    const [key, exp] = args;

    test(`lo.dom().attr('${key}') - getter`, () => {
        restore();
        jquery(html).appendTo('body');

        const res = lo.dom('x-block').attr(key);
        assert.equal(res, exp);

        restore();
    });
});

[
    ['key', null],
    ['key', 'a'],
    ['key', 1],
    ['key', true]
].forEach(args => {
    const [key, val] = args;

    test(`lo.dom().attr(${insp(key)}, ${insp(val)}) - setter`, () => {
        restore();
        jquery(html).appendTo('body');

        assert.equal(jquery('x-block').attr(key), undefined);
        const inst = lo.dom('x-block');
        const res = inst.attr(key, val);
        assert.equal(res, inst);
        assert.equal(jquery('x-block').attr(key), String(val));

        restore();
    });
});
