// Includes
var gulp = require('gulp');
var ts = require('gulp-typescript');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var mocha = require('gulp-mocha');

// Settings
var tsConfig = {
    src: 'src/**/*.ts',
    dest: 'src',
    task: 'typescriptTask'
};


// Build Source
gulp.task(tsConfig.task, function () {
    return gulp
        .src(tsConfig.src)
        .pipe(sourcemaps.init())
          .pipe(ts({
              noImplicitAny: true
          }))
          .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(tsConfig.dest));
});

// Watching
gulp.task('watch', [tsConfig.task], function() {
    gulp.watch(tsConfig.src, [tsConfig.task]);
});

// Testing
gulp.task('test', [tsConfig.task], function() {
    return gulp
        .src('tests/**/*.js', {read: false})
        .pipe(mocha());
});
