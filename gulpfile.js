var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('less', function(){
    return gulp.src('./src/less/style.less')
        .pipe(less())
        .pipe(gulp.dest('./dist'))
});

gulp.task('scripts', function() {
    return gulp.src('./src/js/*.js')
        .pipe(concat('index.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
    gulp.watch('./src/less', gulp.series('less'));
    gulp.watch('./src/js', gulp.series('scripts'));
});