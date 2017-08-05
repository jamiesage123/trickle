var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var watch = require('gulp-watch');

gulp.task('sass', function(){
  return gulp.src('sass/framework.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('dist/css/'))
});

gulp.task('sassmin', function(){
  return gulp.src('sass/framework.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename('framework.min.css'))
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('default', function () {
    gulp.start('sass');
    gulp.start('sassmin');
});
