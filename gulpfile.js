var gulp = require('gulp');
var shell = require('gulp-shell');
var exec = require('child_process').exec;

var paths = {
  scripts: ['src/**/**'],
};

gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['task']);
});


// gulp.task('shorthand',
//   shell.task([
//     'echo starting...',
//     'polymer lint'
//   ])
// );

gulp.task('task', function (cb) {
  exec('polymer lint', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})

gulp.task('default', ['watch', 'task']);