const jquery = require('jquery');

let showOnlyFailures = false;
const template =
    '<div id="mocha">' +
        '<div id="mocha-bar">' +
            '<a class="title" href="?">' + window.document.title + '</a>' +
            '<div class="stats"/>' +
            '<div class="progress"/>' +
        '</div>' +
    '</div>';
const $mocha = jquery(template);
const $mochaBar = $mocha.find('#mocha-bar');
const $mochaStats = $mochaBar.find('.stats');
const $mochaProgress = $mochaBar.find('.progress');

function toggleFailureFilter(ev) {
    ev.stopImmediatePropagation();

    showOnlyFailures = !showOnlyFailures;
    if (showOnlyFailures) {
        jquery('.suite, .test').hide();
        jquery('.suite.fail, .test.fail').show();
    } else {
        jquery('.suite, .test').show();
    }
}

function addSuiteStats() {
    const $suite = jquery(this); // eslint-disable-line no-invalid-this

    const tests = $suite.find('.test').length;
    const passed = $suite.find('.test.pass').length;
    const failed = tests - passed;

    const $header = $suite.find('> h1 a');
    const $list = $suite.find('> ul');
    const $count = jquery('<span class="count"><span class="passed">' + passed + '</span><span class="failed">' + failed + '</span></span>');
    const $toggle = jquery('<span class="toggle">-</span>');
    let visible = true;

    $toggle.on('click', ev => {
        ev.stopImmediatePropagation();

        visible = !visible;
        if (visible) {
            $toggle.text('-');
            $list.show();
        } else {
            $toggle.text('+');
            $list.hide();
        }
    });

    if (!failed) {
        $count.find('.failed').remove();
    }

    $suite.addClass(tests === passed ? 'pass' : 'fail');
    // $suite.append($toggle);
    $header.append($count);
}

function fixCodeFormatting() {
    const $code = jquery(this); // eslint-disable-line no-invalid-this
    $code.text($code.text().trim().replace(/;\n\s*/g, ';\n'));
}

function onEnd() {
    const runner = this; // eslint-disable-line no-invalid-this, consistent-this
    const failed = runner.stats.failures > 0;
    const stats = (runner.stats.duration / 1000.0).toFixed(3) + 's';

    if (failed) {
        $mochaStats.on('click', toggleFailureFilter);
    }

    $mochaBar.addClass(failed ? 'fail' : 'pass');
    $mochaProgress.hide();
    $mochaStats.text(stats);
    jquery('#mocha-report .suite').each(addSuiteStats);
    jquery('#mocha-report code').each(fixCodeFormatting);
    // jquery('#mocha-report .test').hide();
}

function onTest() {
    const runner = this; // eslint-disable-line no-invalid-this, consistent-this
    const percent = 100.0 * runner.stats.tests / runner.total;
    const stats = ((new Date().getTime() - runner.stats.start) / 1000.0).toFixed(3) + 's';

    if (runner.stats.failures) {
        $mochaBar.addClass('fail');
    }
    $mochaProgress.css('width', 100 - percent + '%');
    $mochaStats.text(stats);
}

function setupMocha() {
    $mocha.appendTo('body');
    window.mocha.setup('bdd');
}

function runMocha() {
    window.mocha.run().on('test', onTest).on('end', onEnd);
}

const pinner = (() => {
    let title;
    let htmlId;
    let htmlClasses;
    let bodyId;
    let bodyClasses;
    let $pinnedElements;

    function pin() {
        title = window.document.title;
        htmlId = jquery('html').attr('id');
        htmlClasses = jquery('html').attr('class');
        bodyId = jquery('body').attr('id');
        bodyClasses = jquery('body').attr('class');
        $pinnedElements = jquery('head,body').children();
    }

    function restore() {
        window.document.title = title;
        jquery('html').attr('id', htmlId).attr('class', htmlClasses);
        jquery('body').attr('id', bodyId).attr('class', bodyClasses);
        jquery('head,body').children().not($pinnedElements).remove();
        if (window.localStorage && window.localStorage.clear) {
            window.localStorage.clear();
        }
    }

    return {pin, restore};
})();

const run = fn => {
    window.pinHtml = pinner.pin;
    window.restoreHtml = pinner.restore;
    setupMocha();
    fn();
    pinner.pin();
    runMocha();
};

module.exports = run;
