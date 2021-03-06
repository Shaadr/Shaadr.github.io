// REQUIRE DEPENDENCIES
// ============================================================
var gulp = require('gulp');
var concat = require('gulp-concat');
var annotate = require('gulp-ng-annotate');
// var uglify = require('gulp-uglify');
// var watch = require('gulp-watch');
// var css = require('gulp-sass');
// var babel = require('gulp-babel');
// DECLARE FILE PATHS
// ============================================================
var paths = {
  jsSource: ['./public/app/**/*.js', '!/public/bundle.js'],
  cssSource: ['./public/styles/**/*.css']
};
// DEFINE TASKS
// ============================================================
gulp.task('js', function() {
  return gulp.src(paths.jsSource)
  //.pipe(babel()) //Uncomment if using ES6
  .pipe(concat('bundle.js'))
  .pipe(annotate())
  //.pipe(uglify()) //Uncomment when code is production ready
  .pipe(gulp.dest('./public'));
});
gulp.task('css', function () {
  return gulp.src(paths.cssSource)
    .pipe(css())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./public'));
});

// WATCH TASK
// ============================================================
gulp.task('watch', function() {
  gulp.watch(paths.jsSource, ['js']);
  gulp.watch(paths.cssSource, ['css']);
});
// DEFAULT TASK - first thing to run when gulp is called
// ============================================================
gulp.task('default', ['watch', 'js', 'css']);
