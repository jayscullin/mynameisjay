var autoprefixer = require('autoprefixer');
var babelify = require('babelify');
var browserify = require('browserify');
var concat = require('gulp-concat');
var del = require('del');
var gulp = require('gulp');
var gzip = require('gulp-gzip');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var postcss = require('gulp-postcss');
var path = require('path');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var streamify = require('gulp-streamify');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');

// Error Handling
function handleErrors() {
	var args = Array.prototype.slice.call(arguments);
	notify.onError({
		title: "FFFFFFFUUUUUUUUU!",
		message: "<%= error.message %>",
		icon: path.join(__dirname, "./inc/e.png")
	}).apply(this, args);
	this.emit('end');
}

// Vendor Scripts
gulp.task('vendor', function () {
	del(['./dist/js/vendor.min.js']);
	gulp.src([
			'./node_modules/jquery/dist/jquery.js',
			'./vendor/jquery.particleground.js',
			'./node_modules/imagesloaded/imagesloaded.pkgd.min.js',
			'./node_modules/classnames/index.js',
		])
		//.pipe(sourcemaps.init())
		.pipe(concat("vendor.min.js"))
		//.pipe(uglify())
		//.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./dist/js'));
});

// React
gulp.task('react', function(){
	del(['./dist/js/main.min.js']);
	return browserify({
			entries: './dev/js/main.jsx',
			extensions: ['.jsx'],
			debug: true,
			paths: [
				'./node_modules',
				'./dev',
				'./dev/js',
				'./dev/js/components',
				'./dev/js/mixins',
			]
		})
		.transform('babelify', {presets: ['es2015', 'react']})
		.bundle()
		.on('error', handleErrors)
		.pipe(source('main.min.js'))
		.pipe(gulp.dest('./dist/js'))
		.pipe(notify({
			title: "Wow just wow",
			message: "That's a nice fuckin build right there.",
			icon: path.join(__dirname, "./inc/b.png"),
			onLast: true
		}));
});

// HTML
gulp.task('html',function(){
	gulp.src(['./dev/index.html','./dev/.htaccess'])
		.pipe(gulp.dest('./dist'))
});

// Fonts
gulp.task('fonts', function(){
	del(['./dist/css/fonts/**/*.*']);
	gulp.src('./dev/sass/vendor/fonts/*.*', { base: './dev/sass/vendor/fonts' })
		.pipe(gulp.dest('./dist/css/fonts'))
});

// Images
gulp.task('images', function(){
	del(['./dist/img']);
	gulp.src('./dev/img/**/*.*', { base: './dev/img' })
		.pipe(gulp.dest('./dist/img'))
});

// Sass
gulp.task('sass', function () {
  gulp.src('./dev/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(postcss([autoprefixer]))
	.pipe(concat("styles.min.css"))
	.pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dist/css'));
});

// Watch
gulp.task('watch', function(){
	gulp.watch(['./dev/**/*.*'],['update'])
});

gulp.task('build', ['vendor','fonts','update','watch']);
gulp.task('update',['react','sass','images','html']);
gulp.task('default',['update', 'watch']);


