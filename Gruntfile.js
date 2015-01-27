module.exports = function(grunt) {
    // load all tasks in the task folder
    grunt.loadTasks('./tasks');
    
    // project configuration
    grunt.initConfig(
        {
            stringCheck: {
                fileName: './src/app.js',
                stringToCheck: 'console.log'
            }
        }
    );
    
    // define the default task
    grunt.registerTask('default', ['stringCheck']);
    // type in GRUNT in the console, it will run stringCheck
};