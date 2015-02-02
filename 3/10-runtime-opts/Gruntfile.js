// Code example 10-runtime-opts

module.exports = function(grunt) {
	
	// grunt.log.ok('task1');
	console.log(grunt.option('bar') );
	
	grunt.registerTask('foo', function() {
		// kdfkdjf
	});
	
};