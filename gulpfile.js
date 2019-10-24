var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var scssFiles = './src/assets/scss/style.scss';
const assetPath = './src/assets/'

gulp.task('sassdev', function () {
  return gulp.src(scssFiles)
      .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
      .pipe(concat('style.css'))
      .pipe(sass({outputStyle: 'expanded'}))
      .pipe(gulp.dest(assetPath + '/css'))
});

gulp.task('sassprod', function () {
  return gulp.src(assetPath + 'scss/style.scss')
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(concat('style.min.css'))
      .pipe(sass({outputStyle: 'compressed'}))
      .pipe(gulp.dest(assetPath + '/css'));
});

gulp.task('default', function () {
  gulp.watch(scssFiles, gulp.series(['sassdev', 'sassprod']));
});



