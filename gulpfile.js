var gulp = require('gulp');
var uglify = require('gulp-uglify');
gulp.task('uglify', function(){
  return gulp.src('main.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});


gulp.task('default', [ 'uglify' ]);