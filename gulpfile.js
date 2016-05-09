// Includes
var gulp = require('gulp');
var ts = require('gulp-typescript');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

// Settings
var tsConfig = {
    src: 'src/**/*.ts',
    dest: 'js',
    task: 'typescriptTask'
};

var tsTestConfig = {
    src: 'tests/src/**/*.ts',
    dest: 'tests/js',
    task: 'typescriptTestsTask'
};


// Source files
gulp.task(tsConfig.task, function () {
    return gulp
        .src(tsConfig.src)
        .pipe(sourcemaps.init())
          .pipe(ts({
              noImplicitAny: true
          }))
          .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(tsConfig.dest));
});

// Tests
gulp.task(tsTestConfig.task, function () {
    return gulp
        .src(tsTestConfig.src)
        .pipe(sourcemaps.init())
          .pipe(ts({
             noImplicitAny: true
          }))
          .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(tsTestConfig.dest));
});

// Set a watch task
gulp.task('watch', [tsConfig.task, tsTestConfig.task], function() {
    gulp.watch(tsConfig.src, [tsConfig.task]);
    gulp.watch(tsTestConfig.src, [tsTestConfig.task]);
});
