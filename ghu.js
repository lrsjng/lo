import {resolve, join} from 'path';
import dateformat from 'dateformat';
import ghu from 'ghu';
import {
    hash, jszip, mapfn, read, remove, run, uglify, watch,
    webpack, wrap, write
} from 'ghu';

const ROOT = resolve(__dirname);
const LIB = join(ROOT, 'lib');
const BUILD = join(ROOT, 'build');
const DIST = join(ROOT, 'dist');
const COVERAGE = join(ROOT, 'coverage');

ghu.defaults('build');

ghu.before(runtime => {
    runtime.pkg = Object.assign({}, require('./package.json'));
    runtime.stamp = dateformat(Date.now(), 'yyyy-mm-dd-HH-MM-ss');
    runtime.hash = hash.string(runtime.stamp);

    const res = run.sync(`git rev-list v${runtime.pkg.version}..HEAD`, {silent: true});
    if (res.code === 0) {
        const hashes = res.stdout.split(/\r?\n/).filter(x => x);
        if (hashes.length) {
            const counter = hashes.length;
            const githash = hashes[0].substr(0, 7);
            runtime.pkg.version += `+${counter}~${githash}~${runtime.stamp}`;
        }
    }

    runtime.comment = `${runtime.pkg.name} v${runtime.pkg.version} - © Lars Jung`;
    runtime.commentJs = `/* ${runtime.comment} */\n`;
    runtime.commentHtml = `<!-- ${runtime.comment} -->`;

    console.log(runtime.comment);
});

ghu.task('clean', 'delete build folder', () => {
    return remove(`${BUILD}, ${DIST}, ${COVERAGE}`);
});

ghu.task('lint', () => {
    return run('eslint .', {stdio: 'inherit'});
});

ghu.task('build:scripts', ['clean'], runtime => {
    const webpackConfig = {
        output: {},
        module: {
            loaders: [
                {
                    include: [LIB],
                    loader: 'babel',
                    query: {cacheDirectory: true}
                }
            ]
        }
    };

    if (!runtime.args.production) {
        webpackConfig.output.pathinfo = true;
        webpackConfig.devtool = '#inline-source-map';
    }

    return read(`${LIB}/index.js`)
        .then(webpack(webpackConfig, {showStats: false}))
        .then(wrap(runtime.commentJs))
        .then(write(`${DIST}/lo.js`, {overwrite: true}))
        .then(write(`${BUILD}/lo-${runtime.pkg.version}.js`, {overwrite: true}))
        .then(uglify())
        .then(wrap(runtime.commentJs))
        .then(write(`${DIST}/lo.min.js`, {overwrite: true}))
        .then(write(`${BUILD}/lo-${runtime.pkg.version}.min.js`, {overwrite: true}));
});

ghu.task('build:copy', () => {
    return read(`${ROOT}/*.md`)
        .then(write(mapfn.p(ROOT, BUILD), {overwrite: true}));
});

ghu.task('build:zip', ['build:scripts', 'build:copy'], runtime => {
    return read(`${BUILD}/*`)
        .then(jszip({dir: BUILD, level: 9}))
        .then(write(`${BUILD}/lo-${runtime.pkg.version}.zip`, {overwrite: true}));
});

ghu.task('build:stats', () => {
    return run(`local/size.sh`, {stdio: 'inherit'});
});

ghu.task('build', ['build:zip', 'build:stats']);

ghu.task('watch', runtime => {
    return watch([LIB], () => ghu.run(['build'], runtime.args, true));
});
