module.exports = function(grunt) {

  // Load all tasks in the tasks directory.
  grunt.loadTasks('./tasks');

  // Project configuration.
  grunt.initConfig({
    stringCheck: {
      fileName: './src/app.js',
      stringToCheck: 'console.log 11'
    }
  });

  // Define the default task  
  grunt.registerTask('default', ['stringCheck']); // type in GRUNT in the console, it will run stringCheck
};