module.exports = function(grunt) {

	grunt.initConfig({
		
	});

	grunt.registerTask('foo', function() {
		console.log('name: ' + this.name + ' arguments: ' + this.args);
	});
	
};