var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');

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

gulp.task('image-min', function() {
    return gulp.src('./src/assets/*')
        .pipe(changed('./dist/assets/'))
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/assets/'));
});

gulp.task('fonts', function() {
    return gulp.src('./src/assets/fonts/*/*')
        .pipe(gulp.dest('./dist/fonts/'))
});

gulp.task('watch', function() {
    gulp.watch('./src/less', gulp.series('less'));
    gulp.watch('./src/js', gulp.series('scripts'));
    gulp.watch('./src/assets', gulp.series('image-min'));
});





gulp.task('default', gulp.parallel('less', 'scripts', 'image-min', 'fonts'));