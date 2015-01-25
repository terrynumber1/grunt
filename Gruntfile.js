function(grunt) {
  // Load all tasks in the tasks directory
  grunt.loadTasks('./tasks');

  // Project configuration
  grunt.initConfig({
      stringCheck: {
        file: './src/app.js',
        string: 'console.log'
      }
  });

  // HERE
  // https://github.com/terrynumber1/gswg-examples/blob/master/2/06-config-get-set/Gruntfile.js
}
