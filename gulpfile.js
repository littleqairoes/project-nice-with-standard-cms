var gulp = require('gulp');
var shell = require('gulp-shell');

var paths = {
  scripts: ['src/**/**'],
};

gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['shorthand']);
});


gulp.task('shorthand', function() {
  try {
    shell.task([
      'echo starting...',
      'polymer lint'
    ])
  } catch(e) {
    console.log(e);
  }
});

gulp.task('default', ['watch', 'shorthand']);