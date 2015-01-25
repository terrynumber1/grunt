// Code example 01-deploy-log-task

var fs = require('fs'); // importing built-in Node.js file system module fs

module.exports = function(grunt) {
                      // task name is log-deploy
  grunt.registerTask('log-deploy', function() {
    var message = 'Deployment on' + new Date();
    // appendFileSync a method that append text to a file, creat the file if it does not exit
    fs.appendFileSync('deploy.log', message + '\n');
    grunt.log.writeln('Appended "' + message + '"');
  });
};
