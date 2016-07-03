module.exports = config => {
    const settings = {
        basePath: 'build/test',
        files: ['tests.js'],
        reporters: ['dots', 'coverage'],
        coverageReporter: {type: 'html', dir: 'coverage'},
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['Chrome', 'Firefox'],
        concurrency: 1,
        singleRun: true
    };

    if (process.env.TRAVIS) {
        Object.assign(settings, {
            coverageReporter: {type: 'text'},
            browsers: ['Chrome_Travis', 'Firefox'],
            concurrency: 1,
            singleRun: true,
            browserNoActivityTimeout: 30000,
            customLaunchers: {Chrome_Travis: {base: 'Chrome', flags: ['--no-sandbox']}}
        });
    }

    config.set(settings);
};
