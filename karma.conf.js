module.exports = function (config) {
    config.set({

        basePath: './app',

        files: [
            { pattern: 'vendor/threejs/build/three.js', included: false },
            { pattern: 'vendor/requirejs-text/text.js', included: false },
            { pattern: 'scripts/{app,cameras,lights,materials,meshes,scenes}/**/*.js', included: false },
            { pattern: 'scripts/main.js', included: false },
            { pattern: 'scripts/**/*-test.js', included: false },
            { pattern: 'scripts/**/*-fixture.{html,json}', included: false },
            'scripts/config.test.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine', 'requirejs'],
        
        /**
         * Firefox is currently the one of the only alternatives
         * that supporting WebGL properly.
         * 
         * TODO: try SlimerJS
         */
        browsers: ['Firefox'],

        plugins: [
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-requirejs',
            'karma-junit-reporter'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }
    });
};