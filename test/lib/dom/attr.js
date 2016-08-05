const {test, assert, insp} = require('scar');
const jquery = require('jquery');
const {lo, restore} = require('../../util');

const html = '<x-block id="x-1" class="x-2" data-x="x-3"></x-block>';

test('lo.dom().attr()', () => {
    [
        [undefined, null],
        ['none', null],
        ['id', 'x-1'],
        ['class', 'x-2'],
        ['data-x', 'x-3']
    ].forEach(([key, exp], idx) => {
        const msg = `fix#1.${idx} - (${insp(key)}) -> ${insp(exp)}`;

        restore();
        jquery(html).appendTo('body');

        const res = lo.dom('x-block').attr(key);
        assert.equal(res, exp, msg);

        restore();
    });

    [
        ['key', null],
        ['key', 'a'],
        ['key', 1],
        ['key', true]
    ].forEach(([key, val], idx) => {
        const msg = `fix#2.${idx} - (${insp(key)}, ${insp(val)})`;

        restore();
        jquery(html).appendTo('body');

        assert.equal(jquery('x-block').attr(key), undefined, msg);
        const inst = lo.dom('x-block');
        const res = inst.attr(key, val);
        assert.equal(res, inst, msg);
        assert.equal(jquery('x-block').attr(key), String(val), msg);

        restore();
    });
});
