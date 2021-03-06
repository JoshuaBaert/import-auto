/**
 * Created by Joshua Baert on 11/3/2016.
 */

//babel-preset-es2015

var gulp = require('gulp'),
		del = require('del'),
		sass = require('gulp-sass'),
		sourcemaps = require('gulp-sourcemaps'),
		uglify = require('gulp-uglify'),
		concat = require('gulp-concat'),
		print = require('gulp-print'),
		babel = require('gulp-babel'),
		autoPrefixer = require('gulp-autoprefixer');


var CacheBuster = require('gulp-cachebust');
var cachebust = new CacheBuster();



gulp.task('clean', function (cb) {
	del([
		'dist'
	], cb);
});


gulp.task('build-css', function () {
	return gulp.src('./styles/*')
			.pipe(sourcemaps.init())
			.pipe(sass())
			.pipe(autoPrefixer({
				browsers: ['last 8 versions'],
				cascade: false
			}))
			.pipe(cachebust.resources())
			.pipe(concat('style.css'))
			.pipe(sourcemaps.write('./maps'))
			.pipe(gulp.dest('./dist'))
});


gulp.task('build-js', function () {
	return gulp.src('js/**/*.js')
			.pipe(sourcemaps.init())
			.pipe(print())
			.pipe(babel({presets: ['es2015']}))
			.pipe(concat('bundle.js'))
			//			.pipe(uglify())
			.pipe(sourcemaps.write('./maps'))
			.pipe(gulp.dest('./dist/js'));
});


gulp.task('build', ['clean', 'build-css', 'build-js'], function () {
	return gulp.src('index.html')
			.pipe(cachebust.references())
			.pipe(gulp.dest('dist'));
});



gulp.task('watch', function () {
	return gulp.watch(['./index.html', './styles/*.*css', './js/**/*.js'], ['build']);
});


// gulp.task('webserver', ['watch','build'], function() {
//     gulp.src('.')
//         .pipe(webserver({
//             livereload: false,
//             directoryListing: true,
//             open: "http://localhost:8000/dist/index.html"
//         }));
// });

// gulp.task('dev', ['watch', 'webserver']);