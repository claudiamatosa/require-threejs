module.exports = function(grunt) {

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 9001,
                    hostname: 'localhost',
                    base: 'dist',
                    keepalive: true,
                    livereload: true
                }
            }
        },

        copy: {
            main: {
                files: [
                    // includes files within path
                    {
                        expand: true,
                        cwd: 'app/',
                        src: ['**/*.*',
                             '!**/*.less'],
                        dest: 'dist/'
                    }
                ]
            }
        },

        less: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: 'app/',
                        src: ['css/**/*.less',
                              '!**/_*.less'],
                        dest: 'dist/',
                        ext: '.css'
                    }
                ]
            }
        },

        clean: ['dist']
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('build', [
        'clean',
        'less',
        'copy'
    ]);
    
    grunt.registerTask('default', [
        'build',
        'connect'
    ]);

};
