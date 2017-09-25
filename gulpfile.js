'use strict';

var gulp = require('gulp'),
  clean = require('gulp-clean'),
  sass = require('gulp-sass'),
  livereload = require('gulp-livereload'),
  zip = require('gulp-zip'),
  manifest = require('gulp-chrome-manifest');

// gulp.task('clean', function (cb) {
//   return gulp.src('dist/*', { read: false })
//     .pipe(clean());
//   // cb();
// });

// gulp.task('copy', function () {
//   gulp.src('_locales/**')
//     .pipe(gulp.dest('dist/_locales'));
//   gulp.src('icons/**')
//     .pipe(gulp.dest('icons'));
//   return gulp.src('manifest.json')
//     .pipe(gulp.dest('dist'));
// });

gulp.task('sass', function () {
  gulp.src(['./src/inject/*.scss'])
    .pipe(sass({ style: 'expanded' }))
    .on('error', sass.logError)
    .pipe(gulp.dest('./src/inject'));
});

// gulp.task('version', function () {
//
// });

gulp.task('manifest', function () {
  gulp.src('manifest.json')
    .pipe(manifest({
      buildnumber: true,
      background: {
        target: 'src/bg/background.html'
      }
    }))
    .pipe(gulp.dest('dist'))
});

gulp.task('build', function (cb) {

  cb();
});

gulp.task('package', ['build'], function () {
  return gulp.src('dist/**')
    .pipe(zip('archive.zip'))
    .pipe(gulp.dest('package'));
});

gulp.task('watch', function () {
  return gulp.watch('./src/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);
