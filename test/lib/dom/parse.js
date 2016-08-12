const {test, assert, insp} = require('scar');
const {lo} = require('../../util');

test('lo.dom() - create element', () => {
    'a address area article audio b button canvas caption code col colgroup content datalist dd decorator del details dialog div dl dt element em embed fieldset figcaption figure font footer form h1 h2 h3 h4 h5 h6 header hgroup hr i iframe img input ins label legend li link main map menu menuitem meta meter nav noscript object ol optgroup option output p param pre progress script section select shadow source span strong style summary table tbody td template textarea tfoot th thead title tr track ul video'.split(/\s+/).forEach((name, idx) => {
        const msg = `fix#${idx}: ${insp(name)}`;
        const tag = `<${name}>`;
        const res = lo.dom(tag);
        assert.ok(res, msg);
        assert.equal(typeof res, 'object', msg);
        assert.equal(res.constructor, lo.dom, msg);
        assert.equal(res.length, 1, msg);
        assert.ok(res[0] instanceof global.window.Element, msg);
        assert.equal(res[0].nodeName.toLowerCase(), name.toLowerCase(), msg);
        assert.equal(res[0].childNodes.length, 0, msg);
        assert.equal(res[0].parentNode, null, msg);
        assert.equal(res[0].innerHTML, '', msg);
        assert.equal(res[0].textContent, '', msg);
    });

    'body frame frameset head html'.split(/\s+/).forEach((name, idx) => {
        const msg = `fix#${idx}: ${insp(name)} returns empty list`;
        const tag = `<${name}>`;
        const res = lo.dom(tag);
        assert.ok(res, msg);
        assert.equal(typeof res, 'object', msg);
        assert.equal(res.constructor, lo.dom, msg);
        assert.equal(res.length, 0, msg);
    });
});
