var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('sass/framework.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('dist/css/'))
});
