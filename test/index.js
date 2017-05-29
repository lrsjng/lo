if (!global.window) {
    global.window = new (require('jsdom')).JSDOM().window;
}

const {test} = require('scar');
const {lo, pin} = require('./util');

pin();

require('./lib/lo');
require('./lib/util/misc');
require('./lib/dom/attr');
require('./lib/dom/dom');
require('./lib/dom/find');
require('./lib/dom/parse');
require('./lib/dom/query');
require('./lib/binder/misc');

const karma = global.window.__karma__;

const create_karma_reporter = k => {
    return (type, suite, t) => {
        if (type === 'beforeAll') {
            k.info({total: suite.total});
        }
        if (type === 'afterTest') {
            k.result({
                suite: [],
                description: t.desc,
                success: t.status === 'PASSED',
                skipped: t.status === 'SKIPPED',
                time: t.duration,
                log: [String(t.err)]
            });
        }
        if (type === 'afterAll') {
            k.complete({
                coverage: global.window.__coverage__
            });
        }
    };
};

if (karma) {
    karma.start = () => {
        test.run({
            sync: true,
            reporter: create_karma_reporter(karma)
        });
    };
} else {
    test.cli({sync: true});
}

global.window.lo = lo;
