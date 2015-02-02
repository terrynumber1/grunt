module.exports = function(grunt) {

	grunt.initConfig({
		copy: {
			target1: {
				files: {
					'dest/file11.txt': 'src/file1.txt',
					'dest/file22.txt': 'src/file2.txt',
					'dest/file33.txt': 'src/file3.txt',
					'dest/file44.txt': 'src/file4.txt'
				}
			}
		}
});

	
	grunt.registerMultiTask('copy', function() {

		this.files.forEach(function(file) {
			grunt.file.copy(file.src, file.dest);
		});

		// grunt.file.copy('src/file1.txt', 'dest/file111.txt');

		console.log(grunt.current.task);
		console.log('Copied ' + this.files.length + ' files');
	});

}; // module.exports