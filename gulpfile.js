var gulp = require('gulp');
var _ = require('lodash');

gulp.task('copy-dependency', function() {
    var assets = {
        js: [
            './node_modules/bootstrap/dist/js/bootstrap.js',
            './node_modules/bootstrap/dist/js/bootstrap.min.js'
        ],
        css: [
            './node_modules/bootstrap/dist/css/bootstrap.css',
            './node_modules/bootstrap/dist/css/bootstrap.css.map',
            './node_modules/bootstrap/dist/css/bootstrap.min.css',
            './node_modules/bootstrap/dist/css/bootstrap.min.css.map'
        ]
    };

    _(assets).forEach(function(assets, type) {
        //console.log(type);
        gulp.src(assets).pipe(gulp.dest('./' + type + '/'));
    });
});