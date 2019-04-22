const {test, assert, insp} = require('scar');
const jquery = require('jquery');
const {lo, restore} = require('../../util');

const html = `
    <div>
        <div id="a"></div>
        <div id="b" class=""></div>
        <div id="c" class="c0"></div>
        <div id="d" class="c0 c1 c2"></div>
    </div>
`;

test('lo.dom().cls()', () => {
    [
        [undefined, []],
        ['none', []],
        ['a', []],
        ['b', []],
        ['c', ['c0']],
        ['d', ['c0', 'c1', 'c2']]
    ].forEach(([id, exp], idx) => {
        const msg = `fix#1.${idx} - (${insp(id)}) -> ${insp(exp)}`;

        restore();
        jquery(html).appendTo('body');

        const res = lo.dom(`#${id}`).cls();
        assert.deepEqual(res, exp, msg);

        restore();
    });

    restore();
    jquery(html).appendTo('body');

    const inst = lo.dom('#a, #b, #c, #d');
    assert.equal(inst.cls('n0'), inst);
    assert.ok(jquery('#a').hasClass('n0'));
    assert.ok(jquery('#b').hasClass('n0'));
    assert.ok(jquery('#c').hasClass('n0'));
    assert.ok(jquery('#d').hasClass('n0'));
    assert.ok(!jquery('#c').hasClass('c0'));
    assert.ok(!jquery('#d').hasClass('c0'));

    restore();
});

test('lo.dom().has_cls()', () => {
    [
        [undefined, 'c0', true],
        ['none', 'c0', true],
        ['a', 'c0', false],
        ['b', 'c0', false],
        ['c', 'c0', true],
        ['d', 'c0', true]
    ].forEach(([id, cls, exp], idx) => {
        const msg = `fix#1.${idx} - (${insp(id)}) -> ${insp(exp)}`;

        restore();
        jquery(html).appendTo('body');

        const res = lo.dom(`#${id}`).has_cls(cls);
        assert.equal(res, exp, msg);

        restore();
    });
});

test('lo.dom().add_cls()', () => {
    restore();
    jquery(html).appendTo('body');

    const inst = lo.dom('#a, #b, #c, #d');
    assert.equal(inst.add_cls('n0'), inst);
    assert.ok(jquery('#a').hasClass('n0'));
    assert.ok(jquery('#b').hasClass('n0'));
    assert.ok(jquery('#c').hasClass('n0'));
    assert.ok(jquery('#d').hasClass('n0'));
    assert.ok(jquery('#c').hasClass('c0'));
    assert.ok(jquery('#d').hasClass('c0'));

    restore();
});

test('lo.dom().rm_cls()', () => {
    restore();
    jquery(html).appendTo('body');

    const inst = lo.dom('#a, #b, #c, #d');
    assert.equal(inst.rm_cls('c0'), inst);
    assert.ok(!jquery('#a').hasClass('c0'));
    assert.ok(!jquery('#b').hasClass('c0'));
    assert.ok(!jquery('#c').hasClass('c0'));
    assert.ok(!jquery('#d').hasClass('c0'));
    assert.ok(jquery('#d').hasClass('c1'));

    restore();
});
