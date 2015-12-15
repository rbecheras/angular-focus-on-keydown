
module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
      jshint: {
        all: ['gruntfile.js', 'angular-focus-on-keydown.js']
      },
      uglify: {
        dist: {
          files: {
            'angular-focus-on-keydown.min.js': ['angular-focus-on-keydown.js']
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

    grunt.registerTask('default', ['jshint','uglify']);
};
