if (!global.window) {
    global.window = new (require('jsdom')).JSDOM().window;
}

const {test} = require('scar');
const {lo, pin} = require('./util');

pin();

require('./lib/lo');
require('./lib/dom/attr');
require('./lib/dom/cls');
require('./lib/dom/dom');
require('./lib/dom/find');
require('./lib/dom/parse');
require('./lib/dom/query');
require('./lib/binder/misc');

test.cli({sync: true});

global.window.lo = lo;
