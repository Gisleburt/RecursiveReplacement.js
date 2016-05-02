// Includes
var gulp = require('gulp');
var ts = require('gulp-typescript');
var minify = require('gulp-minify');

// Settings
var tsConfig = {
    src: 'ts/**/*.ts',
    dest: 'js',
    task: 'typescriptTask'
};

var minifyConfig = {
    dest: 'js'
};

// Convert the typescript source into javascript
gulp.task(tsConfig.task, function () {
    return gulp
        .src(tsConfig.src)
        .pipe(ts({
           noImplicitAny: true
        }))
        .pipe(minify())
        .pipe(gulp.dest(minifyConfig.dest));
});

// Set a watch task
gulp.task('watch', [tsConfig.task], function() {
    gulp.watch(tsConfig.src, [tsConfig.task]);
});
