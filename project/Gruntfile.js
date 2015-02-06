module.exports = function(grunt) {

	// load plugins
	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-jade');

	// project configuration
	grunt.initConfig({
		coffee: {
			build: {
				options: {
					join: true
				},
				src: 'src/scripts/**/*.coffee',
				dest: 'build/js/app.js'
			}
		},
		stylus: {
			build: {
				src: 'src/styles/app.styl',
				dest: 'build/css/app.css'
			}
		},
		jade: {
			build: {
				options: {
					pretty: true
				},
				src: 'src/views/app.jade',
				dest: 'build/app.html'
			}
		}
	});

	// assign default task
	grunt.registerTask('default', ['coffee', 'stylus', 'jade']);
	

};