module.exports = function(grunt) {

	grunt.initConfig({
		
	});

	grunt.registerTask('build', function() {
		console.log('building...');
	});

	grunt.registerTask('test', function() {
		console.log('testing...');
	});

	grunt.registerTask('upload', function() {
		console.log('uploading...');
	});

	// this is how you ALIAS a task name
	grunt.registerTask('deploy', ['build', 'test', 'upload']);

};