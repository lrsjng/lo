const {test, assert} = require('scar');
const jquery = require('jquery');
const {lo, restore} = require('../../util');

const body = jquery('body')[0];

const html =
    '<x-base>' +
        '<x-block id="blk-1" data-bdg="name_1">x</x-block>' +
        '<x-block id="blk-2">some text [name-2] with [name_3] templates even in[name_4]side words</x-block>' +
    '</x-base>';

test('lo.binder()', () => {
    assert.equal(typeof lo.binder, 'function');
    assert.deepEqual(Object.keys(lo.binder.prototype).sort(), [
        'constructor',
        'log',
        'add',
        'get',
        'set',
        'on',
        'collect'
    ].sort());

    const binder = lo.binder();
    assert.equal(typeof binder, 'object');
    assert.equal(binder.constructor, lo.binder);
    // assert.ok(binder instanceof lo.binder);
    assert.deepEqual(Object.keys(binder._bdgs), []);
});

test('lo.binder().collect(el)', () => {
    restore();
    jquery(html).appendTo('body');

    const binder = lo.binder();

    assert.deepEqual(Object.keys(binder._bdgs), []);
    assert.equal(jquery('#blk-1').text(), 'x');

    binder.collect(body);

    assert.deepEqual(Object.keys(binder._bdgs).sort(), ['name_1'].sort());
    assert.equal(jquery('#blk-1').text(), 'name_1');
    assert.equal(jquery('#blk-2').text(), 'some text [name-2] with [name_3] templates even in[name_4]side words');

    restore();
});

test('lo.binder().collect(el, true)', () => {
    restore();
    jquery(html).appendTo('body');

    const binder = lo.binder();

    assert.deepEqual(Object.keys(binder._bdgs), []);
    assert.equal(jquery('#blk-1').text(), 'x');
    assert.equal(jquery('#blk-2').text(), 'some text [name-2] with [name_3] templates even in[name_4]side words');

    binder.collect(body, true);

    assert.deepEqual(Object.keys(binder._bdgs).sort(), ['name_1', 'name_3', 'name_4'].sort());
    assert.equal(jquery('#blk-1').text(), 'name_1');
    assert.equal(jquery('#blk-2').text(), 'some text [name-2] with name_3 templates even inname_4side words');

    restore();
});

test('lo.binder().collect(el) and set', () => {
    restore();
    jquery(html).appendTo('body');

    const binder = lo.binder();

    assert.deepEqual(Object.keys(binder._bdgs), []);
    assert.equal(jquery('#blk-1').text(), 'x');
    assert.equal(jquery('#blk-2').text(), 'some text [name-2] with [name_3] templates even in[name_4]side words');

    binder.collect(body);

    assert.deepEqual(Object.keys(binder._bdgs).sort(), ['name_1'].sort());
    assert.equal(binder._bdgs.name_1.val, 'name_1');
    assert.equal(jquery('#blk-1').text(), 'name_1');
    assert.equal(jquery('#blk-2').text(), 'some text [name-2] with [name_3] templates even in[name_4]side words');

    binder.set('name_1', 'bazinga');

    assert.deepEqual(Object.keys(binder._bdgs).sort(), ['name_1'].sort());
    assert.equal(binder._bdgs.name_1.val, 'bazinga');
    assert.equal(jquery('#blk-1').text(), 'bazinga');
    assert.equal(jquery('#blk-2').text(), 'some text [name-2] with [name_3] templates even in[name_4]side words');

    restore();
});

test('lo.binder().collect(el) and preset', () => {
    restore();
    jquery(html).appendTo('body');

    const binder = lo.binder();

    binder.set('name_1', 'bazinga');

    assert.deepEqual(Object.keys(binder._bdgs).sort(), ['name_1'].sort());
    assert.equal(binder._bdgs.name_1.val, 'bazinga');
    assert.equal(jquery('#blk-1').text(), 'x');
    assert.equal(jquery('#blk-2').text(), 'some text [name-2] with [name_3] templates even in[name_4]side words');

    binder.collect(body);

    assert.deepEqual(Object.keys(binder._bdgs).sort(), ['name_1'].sort());
    assert.equal(binder._bdgs.name_1.val, 'bazinga');
    assert.equal(jquery('#blk-1').text(), 'bazinga');
    assert.equal(jquery('#blk-2').text(), 'some text [name-2] with [name_3] templates even in[name_4]side words');

    binder.set('name_1', 'zong');

    assert.deepEqual(Object.keys(binder._bdgs).sort(), ['name_1'].sort());
    assert.equal(binder._bdgs.name_1.val, 'zong');
    assert.equal(jquery('#blk-1').text(), 'zong');
    assert.equal(jquery('#blk-2').text(), 'some text [name-2] with [name_3] templates even in[name_4]side words');

    restore();
});

test('lo.binder().add() and set', () => {
    restore();
    jquery(html).appendTo('body');

    const binder = lo.binder();

    binder.add('some_name', jquery('#blk-2')[0]);

    assert.deepEqual(Object.keys(binder._bdgs).sort(), ['some_name'].sort());
    assert.equal(binder._bdgs.some_name.val, 'some_name');
    assert.equal(jquery('#blk-1').text(), 'x');
    assert.equal(jquery('#blk-2').text(), 'some_name');

    binder.set('some_name', 'zong');

    assert.deepEqual(Object.keys(binder._bdgs).sort(), ['some_name'].sort());
    assert.equal(binder._bdgs.some_name.val, 'zong');
    assert.equal(jquery('#blk-1').text(), 'x');
    assert.equal(jquery('#blk-2').text(), 'zong');

    restore();
});

test('lo.binder().add() and preset', () => {
    restore();
    jquery(html).appendTo('body');

    const binder = lo.binder();

    binder.set('some_name', 'zong');

    assert.deepEqual(Object.keys(binder._bdgs).sort(), ['some_name'].sort());
    assert.equal(binder._bdgs.some_name.val, 'zong');

    binder.add('some_name', jquery('#blk-2')[0]);

    assert.deepEqual(Object.keys(binder._bdgs).sort(), ['some_name'].sort());
    assert.equal(binder._bdgs.some_name.val, 'zong');
    assert.equal(jquery('#blk-1').text(), 'x');
    assert.equal(jquery('#blk-2').text(), 'zong');

    restore();
});
