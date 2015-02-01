var fs = require('fs');

module.exports = function(grunt) {

	// defining the default task
	// type grunt in the console, and the defalt task will run

	grunt.registerTask('default', function() {
		var message = 'Deployment on ' + new Date();
		fs.appendFileSync('deploy.log', message + '\n');
		console.log('Appended "' + message + '"');
	});

	


};