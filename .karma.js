module.exports = config => {
    const settings = {
        basePath: 'build/test',
        files: ['index.js'],
        reporters: ['dots'],
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
            browsers: ['Chrome_Travis', 'Firefox'],
            concurrency: 1,
            singleRun: true,
            browserNoActivityTimeout: 30000,
            customLaunchers: {Chrome_Travis: {base: 'Chrome', flags: ['--no-sandbox']}}
        });
    }

    config.set(settings);
};
