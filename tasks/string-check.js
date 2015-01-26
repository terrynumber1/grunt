module.exports = function(grunt) {
    grunt.registerTask('stringCheck', function() {
    
        // fail if configuration is not provided
        grunt.config.requires('stringCheck.fileName');
        grunt.config.requires('stringCheck.stringToCheck');

        // retrieve file name and load it
        var file1 = grunt.config('stringCheck.fileName');
        var fileContents = grunt.file.read(file1);

        // retrieve string to search for
        var string = grunt.config('stringCheck.stringToCheck');

        if( fileContents.indexOf(string >= 0) )
            grunt.fail.warn(string + ' found in ' + file1);
    });
};