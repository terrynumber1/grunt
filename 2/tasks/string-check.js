// this file contain code for the task

module.exports = function(grunt) {

grunt.registerTask('stringCheck', function() {
    
    // fail if configuration is not provided
    grunt.config.requires('stringCheck.fileName');
    grunt.config.requires('stringCheck.stringToCheck');
    
    var fileName = grunt.config('stringCheck.fileName');
    var fileContents = grunt.file.read(fileName);
    
    // retrieve string to search for
    var string = grunt.config('stringCheck.stringToCheck');
    
//    console.log(string);
//    console.log(fileContents.indexOf(string));
    
    if ( fileContents.indexOf(string) >= 0 )
        grunt.fail.warn(string + ' found in ' + fileName);
    });
    
};