if (!global.window) {
    global.window = require('jsdom').jsdom().defaultView;
}

const {test} = require('scar');
const {lo, pin} = require('./util');

pin();

require('./lib/lo');
require('./lib/core/compact');
require('./lib/core/contains');
require('./lib/core/each');
require('./lib/core/filter');
require('./lib/core/has');
require('./lib/core/hasLength');
require('./lib/core/is');
require('./lib/core/isInstanceOf');
require('./lib/core/isTypeOf');
require('./lib/core/keys');
require('./lib/core/map');
require('./lib/core/size');
require('./lib/core/uniq');
require('./lib/core/values');
require('./lib/dom/dom');
require('./lib/dom/parse');
require('./lib/dom/query');
require('./lib/dom/attr');
require('./lib/dom/find');

const karma = global.window.__karma__;

const karmaReporter = k => {
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
            reporter: karmaReporter(karma)
        });
    };
} else {
    test.cli({sync: true});
}

global.window.lo = lo;
