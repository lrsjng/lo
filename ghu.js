const {resolve, join} = require('path');
const {ghu, jszip, mapfn, read, remove, run, uglify, watch, babel, webpack, wrap, write} = require('ghu');

const NAME = 'lo';

const ROOT = resolve(__dirname);
const LIB = join(ROOT, 'lib');
const BUILD = join(ROOT, 'build');
const TEST = join(ROOT, 'test');
const DIST = join(ROOT, 'dist');

ghu.defaults('release');

ghu.before(runtime => {
    runtime.pkg = Object.assign({}, require('./package.json'));
    runtime.comment = `${runtime.pkg.name} v${runtime.pkg.version} - ${runtime.pkg.homepage}`;
    runtime.commentJs = `/*! ${runtime.comment} */\n`;
    runtime.commentHtml = `<!-- ${runtime.comment} -->`;

    console.log(runtime.comment);
});

ghu.task('clean', 'delete build folder', () => {
    return remove(`${BUILD}, ${DIST}`);
});

ghu.task('build:scripts', runtime => {
    return read(`${LIB}/index.js`)
        .then(babel({presets: ['@babel/preset-env']}))
        .then(wrap(runtime.commentJs))
        .then(write(`${DIST}/${NAME}.js`, {overwrite: true}))
        .then(write(`${BUILD}/${NAME}-${runtime.pkg.version}.js`, {overwrite: true}))
        .then(uglify())
        .then(wrap(runtime.commentJs))
        .then(write(`${DIST}/${NAME}.min.js`, {overwrite: true}))
        .then(write(`${BUILD}/${NAME}-${runtime.pkg.version}.min.js`, {overwrite: true}));
});

ghu.task('build:copy', () => {
    return read(`${ROOT}/*.md`)
        .then(write(mapfn.p(ROOT, BUILD), {overwrite: true}));
});

ghu.task('build:test', runtime => {
    const webpack_config = webpack.cfg([LIB, TEST]);
    webpack_config.module.rules.push({
        test: /jsdom/,
        loader: 'null-loader'
    });

    return Promise.all([
        read(`${TEST}/index.js`)
            .then(webpack(webpack_config, {showStats: false}))
            // .then(uglify())
            .then(wrap(runtime.commentJs))
            .then(write(`${BUILD}/test/index.js`, {overwrite: true})),

        read(`${TEST}/index.html`)
            .then(write(`${BUILD}/test/index.html`, {overwrite: true}))
    ]).then(() => console.log(`browse to file://${BUILD}/test/index.html`));
});

ghu.task('build', ['build:scripts', 'build:copy', 'build:test']);

ghu.task('zip', ['build'], runtime => {
    return read(`${BUILD}/**/*`)
        .then(jszip({dir: BUILD, level: 9}))
        .then(write(`${BUILD}/${NAME}-${runtime.pkg.version}.zip`, {overwrite: true}));
});

ghu.task('release', ['clean', 'zip']);

ghu.task('stats', ['clean', 'build:scripts'], () => {
    return run('local/size.sh', {stdio: 'inherit'});
});

ghu.task('watch', ['clean', 'build'], runtime => {
    return watch([LIB, TEST], () => ghu.run(['build'], runtime.args, true));
});
