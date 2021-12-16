'use strict';
 
var gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
 
gulp.task('scss', function (cb) {
    gulp.src('./scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
    cb();
});
 
gulp.task('scss:watch', function (cb) {
    gulp.watch('./scss/**/*.scss', gulp.series(['scss']));
    cb();
});