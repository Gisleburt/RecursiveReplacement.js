// Includes
var gulp = require('gulp');
var ts = require('gulp-typescript');
var minify = require('gulp-minify');

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
        .pipe(ts({
           noImplicitAny: true
        }))
        .pipe(minify())
        .pipe(gulp.dest(tsConfig.dest));
});

// Tests
gulp.task(tsTestConfig.task, function () {
    return gulp
        .src(tsTestConfig.src)
        .pipe(ts({
           noImplicitAny: true
        }))
        .pipe(minify())
        .pipe(gulp.dest(tsTestConfig.dest));
});

// Set a watch task
gulp.task('watch', [tsConfig.task, tsTestConfig.task], function() {
    gulp.watch(tsConfig.src, [tsConfig.task]);
    gulp.watch(tsTestConfig.src, [tsTestConfig.task]);
});
