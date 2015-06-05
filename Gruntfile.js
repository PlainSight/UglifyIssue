module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        sourceMap: true
      },
      build: {
        src: 'src/testcase.js',
        dest: 'build/testcase.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');


  grunt.registerTask('default', ['uglify']);
};
