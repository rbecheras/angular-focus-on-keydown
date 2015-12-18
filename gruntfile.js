
module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
      jshint: {
        all: ['gruntfile.js', 'src/angular-focus-on-keydown.js']
      },
      ngAnnotate: {
        dist: {
          files: {
            'dist/angular-focus-on-keydown.js': 'src/angular-focus-on-keydown.js'
          }
        }
      },
      uglify: {
        dist: {
          files: {
            'dist/angular-focus-on-keydown.min.js': ['dist/angular-focus-on-keydown.js']
          }
        }
      },
      bump: {
        options: {
          files: ['package.json','bower.json'],
          updateConfigs: [],
          commit: true,
          commitMessage: 'Release v%VERSION%',
          commitFiles: ['package.json','bower.json'],
          createTag: true,
          tagName: 'v%VERSION%',
          tagMessage: 'Version %VERSION%',
          push: true,
          pushTo: 'origin',
          gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
          globalReplace: false,
          prereleaseName: false,
          regExp: false
        }
      },
    });

    grunt.registerTask('default', ['jshint','ngAnnotate','uglify']);
};
