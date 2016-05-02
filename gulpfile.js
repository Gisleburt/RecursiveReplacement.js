// Includes
var gulp = require('gulp');
var ts = require('gulp-typescript');

// Settings
var tsConfig = {
    src: 'ts/**/*.ts',
    dest: 'js',
    task: 'typescriptTask'
};

// Convert the typescript source into javascript
gulp.task(tsConfig.task, function () {
    return gulp.src(tsConfig.src)
               .pipe(ts({
                   noImplicitAny: true
               }))
               .pipe(gulp.dest(tsConfig.dest));
});

// By default, set a watch
gulp.task('default', [tsConfig.task], function() {
    gulp.watch(tsConfig.src, [tsConfig.task]);
});
