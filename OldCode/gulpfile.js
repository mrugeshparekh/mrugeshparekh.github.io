var gulp = require('gulp');
var clean = require('gulp-clean');
var nodemon = require('gulp-nodemon');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var rename = require('gulp-rename');

gulp.task('copy-css', function() {
    gulp.src(['./node_modules/bootstrap/dist/css/bootstrap.min.css'])
        .pipe(gulp.dest('./css/'));
});

gulp.task('copy-js', function() {
    gulp.src(['./node_modules/bootstrap/dist/js/bootstrap.min.js'])
        .pipe(gulp.dest('./js/'));
});

gulp.task('copy-font', function() {
    gulp.src(['./node_modules/font-awesome/fonts/**/*'])
        .pipe(gulp.dest('./fonts/'));
});

gulp.task('post-css', function() {
    var processor = [
        autoprefixer({browsers: ['last 4 version']}),
        cssnano
    ];

    gulp.src('./src/*.css')
        .pipe(postcss(processor))
        .pipe(rename('freelancer.min.css'))
        .pipe(gulp.dest('./css/'));
});

gulp.task('dev-server', function(){
    nodemon({
        script: 'server.js',
        ext: 'js',
        ignore: ['js*']
    });
});

gulp.task('clean', function() {
    return gulp.src('./fonts', { read: false })
                .pipe(clean());
});