var gulp    = require('gulp');
var compass = require('gulp-compass');
var concat  = require('gulp-concat');
var shell   = require('gulp-shell');
var util    = require('gulp-util');

var fs           = require('fs');
var sass         = require('gulp-sass');
var ext_replace  = require('gulp-ext-replace');
var globSass     = require('gulp-sass-glob');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps   = require('gulp-sourcemaps');

gulp.task('watch', function() {
  gulp.watch([
    'src/assets/**/**/*.+(scss)',
    'src/styles/*.+(scss)',
    'src/app.scss'
  ], ['app:css']);
});

gulp.task('default', ['app']);

gulp.task('app', ['app:css']);
gulp.task('all', ['bundle', 'app']);

gulp.task('app:css', function() {
  gulp.src(['src/app.scss'])
    .pipe(globSass())
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('src'));
});

// runs npm bundle script -> webpack -p
gulp.task('bundle', shell.task('npm run bundle'));
// runs npm bundle script watcher -> webpack -w -p
gulp.task('bundle-watch', function () {
  shell.task('npm run bundle-watch');
});