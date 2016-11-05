var gulp = require('gulp');
var _ = require('lodash');
var clean = require('gulp-clean');

gulp.task('copy-dependency', function() {
    var assets = {
        js: [
            './node_modules/bootstrap/dist/js/bootstrap.js',
            './node_modules/bootstrap/dist/js/bootstrap.min.js',
            './node_modules/jquery/dist/jquery.js'
        ],
        css: [
            './node_modules/bootstrap/dist/css/bootstrap.css',
            './node_modules/bootstrap/dist/css/bootstrap.css.map',
            './node_modules/bootstrap/dist/css/bootstrap.min.css',
            './node_modules/bootstrap/dist/css/bootstrap.min.css.map',
            './node_modules/font-awesome/css/font-awesome.min.css'
        ]
    };

    _(assets).forEach(function(assets, type) {
        gulp.src(assets).pipe(gulp.dest('./' + type + '/'));
    });
});

gulp.task('copy-font', function() {
    gulp.src(['./node_modules/font-awesome/fonts/**/*'])
        .pipe(gulp.dest('./fonts/'));
});

gulp.task('clean', function() {
    return gulp.src('./fonts', { read: false })
                .pipe(clean());
});