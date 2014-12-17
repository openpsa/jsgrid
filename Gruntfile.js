module.exports = function ( grunt ) {

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-bump');
    grunt.loadNpmTasks('assemble');

    var userConfig = require( './build.config.js' );

    var taskConfig = {
        pkg: grunt.file.readJSON("package.json"),

        meta: {
            banner:
            '/**\n' +
                ' * <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
                ' * <%= pkg.homepage %>\n' +
                ' *\n' +
                ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
                ' */\n'
        },

        bump: {
            options: {
                files: [
                    "package.json",
                    "bower.json"
                ],
                commit: true,
                commitMessage: 'release v%VERSION%',
                commitFiles: [
                    "package.json",
                    "bower.json"
                ],
                createTag: true,
                tagName: 'v%VERSION%',
                tagMessage: 'Version %VERSION%',
                push: true,
                pushTo: 'origin'
            }
        },

        clean: {
            build: [
            '<%= build_dir %>',
            '<%= compile_dir %>'
            ],
            docs: [
            '<%= build_dir %>/docs'
            ],
        },

        copy: {
            build_appjs: {
                files: [
                    {
                        src: [ '<%= app_files.js %>' ],
                        dest: '<%= build_dir %>/',
                        cwd: '.',
                        expand: true
                    }
                ]
            },
            build_i18n: {
                files: [
                    {
                        src: [ '<%= app_files.i18n %>' ],
                        dest: '<%= build_dir %>/',
                        cwd: '.',
                        expand: true
                    }
                ]
            },
            build_vendorjs: {
                files: [
                    {
                        src: [ '**/*.js' ],
                        dest: '<%= build_dir %>/vendor',
                        cwd: 'bower_components/jquery/dist/',
                        expand: true
                    }
                ]
            },
            compile_vendorjs: {
                files: [
                    {
                        src: [ '**/*.js' ],
                        dest: '<%= compile_dir %>/vendor',
                        cwd: 'bower_components/jquery/dist/',
                        expand: true
                    }
                ]
            },
            build_external: {
                files: [
                    {
                        src: [ '<%= app_files.external %>' ],
                        dest: '<%= build_dir %>/src/',
                        cwd: '.',
                        expand: true
                    }
                ]
            },
            doc_assets: {
                files: [
                    {
                        src: [ '**/*' ],
                        dest: '<%= build_dir %>/docs/bootstrap',
                        cwd: 'bower_components/bootstrap/dist/',
                        expand: true
                    },
                    {
                        src: [ '**/*' ],
                        dest: '<%= build_dir %>/docs',
                        cwd: '<%= compile_dir %>/',
                        expand: true
                    }
                ]
            }
        },

        concat: {
            compile_css: {
                src: [
                    '<%= vendor_files.css %>',
                    '<%= build_dir %>/<%= pkg.name %>-<%= pkg.version %>.css'
                ],
                dest: '<%= compile_dir %>/<%= pkg.name %>-<%= pkg.version %>.min.css'
            },
            compile_js: {
                options: {
                    banner: '<%= meta.banner %>'
                },
                src: [
                    '<%= build_dir %>/src/**/*.js',
                ],
                dest: '<%= build_dir %>/<%= pkg.name %>-<%= pkg.version %>.js'
            }
        },

        uglify: {
            compile: {
                options: {
                    banner: '<%= meta.banner %>'
                },
                files: {
                    '<%= compile_dir %>/<%= pkg.name %>-<%= pkg.version %>.min.js': '<%= concat.compile_js.dest %>'
                }
            },
            compile_i18n: {
                options: {
                    banner: '<%= meta.banner %>'
                },
                files: [{
                    expand: true,
                    cwd: '<%= build_dir %>/i18n/',
                    src: '*.js',
                    dest: '<%= compile_dir %>/i18n',
                    rename: function(dest, src)
                    {
                        return dest + '/' + src.replace(/js$/, 'min.js');
                    }
                }]
            }
        },

        less: {
            build: {
                files: {
                    '<%= build_dir %>/<%= pkg.name %>-<%= pkg.version %>.css': '<%= app_files.less %>'
                }
            },
            compile: {
                files: {
                    '<%= build_dir %>/<%= pkg.name %>-<%= pkg.version %>.css': '<%= app_files.less %>'
                },
                options: {
                    cleancss: true,
                    compress: true
                }
            }
        },

        jshint: {
            src: [
                '<%= app_files.js %>'
            ],
            test: [
                '<%= app_files.jsunit %>'
            ],
            gruntfile: [
                'Gruntfile.js'
            ],
            options: {
                curly: true,
                immed: true,
                newcap: true,
                noarg: true,
                sub: true,
                boss: true,
                eqnull: true
            },
            globals: {}
        },

        delta: {
            develop: {
                options: {
                    livereload: true
                },

                gruntfile: {
                    files: 'Gruntfile.js',
                    tasks: [ 'jshint:gruntfile' ],
                    options: {
                        livereload: false
                    }
                },

                jssrc: {
                    files: [
                        '<%= app_files.js %>'
                    ],
                    tasks: [ 'jshint:src', 'copy:build_i18n' ]
                },

                less: {
                    files: [ 'less/*.less' ],
                    tasks: [ 'less:build' ]
                },

                jsunit: {
                    files: [
                        '<%= app_files.jsunit %>'
                    ],
                    tasks: [ 'jshint:test' ],
                    options: {
                        livereload: false
                    }
                }
            },
            docs: {
                files: [
                    '<%= doc_files.content %>',
                    '<%= doc_files.template %>'
                ],
                tasks: [ 'assemble' ]
            }
        },
        assemble: {
            options: {
                layoutdir: '<%= doc_files.layoutdir %>',
                layout: '<%= doc_files.layout %>',
                assets: '<%= build_dir %>/docs',
            },
            site: {
                src: ['<%= doc_files.content %>'],
                dest: '<%= build_dir %>/'
            }
        },
    };

    grunt.initConfig( grunt.util._.extend( taskConfig, userConfig ) );

    grunt.renameTask( 'watch', 'delta' );
    grunt.registerTask( 'watch', [ 'build', 'delta:develop' ] );

    grunt.registerTask( 'default', [ 'build', 'compile' ] );

    grunt.registerTask( 'build', [
        'clean:build', 'jshint', 'less:build',
        'copy:build_appjs', 'copy:build_i18n', 'copy:build_external', 'copy:build_vendorjs'
    ]);

    grunt.registerTask( 'compile', [
        'less:compile', 'concat:compile_css', 'concat:compile_js', 'copy:compile_vendorjs', 'uglify:compile', 'uglify:compile_i18n'
    ]);

    grunt.registerTask( 'docs', [
        'clean:docs', 'assemble', 'copy:doc_assets'
    ]);
    grunt.registerTask( 'watch-docs', [ 'docs', 'delta:docs' ] );
};
