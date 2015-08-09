'use strict';

module.exports = function (suite) {
    var path = require('path');

    var pkg = require('./package.json');

    var root = path.resolve(__dirname);
    var lib = path.join(root, 'lib');
    var dist = path.join(root, 'dist');
    var build = path.join(root, 'build');
    var coverage = path.join(root, 'coverage');

    var $ = require('fquery');
    $.plugin('fquery-jshint');
    $.plugin('fquery-jszip');
    $.plugin('fquery-uglifyjs');

    suite.defaults('release');

    suite.target('clean', [], 'delete build folder').task(function () {
        $([dist, build, coverage], {dirs: true}).delete();
    });

    suite.target('lint', [], 'lint all JavaScript files with JSHint').task(function () {
        $(lib + ': **/*.js').jshint();
    });

    suite.target('release', ['clean', 'lint'], 'build all files and create a zipball').task(function () {
        var header = '/* ' + pkg.displayName + ' ' + pkg.version + ' - ' + pkg.homepage + ' */\n';
        var target = path.join(build, pkg.name + '-' + pkg.version + '.zip');

        $(lib + ': *.js')
            .wrap(header)
            .write($.map.p(lib, dist), true)
            .write($.map.p(lib, build).s('.js', '-' + pkg.version + '.js'), true)
            .uglifyjs()
            .wrap(header)
            .write($.map.p(lib, dist).s('.js', '.min.js'), true)
            .write($.map.p(lib, build).s('.js', '-' + pkg.version + '.min.js'), true);

        $(root + ': *.md')
            .write($.map.p(root, build), true);

        $(build + ': **')
            .jszip({dir: build, level: 9})
            .write(target, true);
    });
};
