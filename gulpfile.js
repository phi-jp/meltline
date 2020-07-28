
var gulp = require('gulp');
var less = require('gulp-less');
var rename = require("gulp-rename"); 
var cssmin = require('gulp-cssmin');
var header  = require('gulp-header');
var package = require('./package.json');
var banner = [
  "/*!",
  " * <%= pkg.name %> <%= pkg.version %>",
  " * <%= pkg.description %>",
  " * MIT Licensed",
  " * ",
  " * Copyright (C) 2016 phi, http://meltlinecss.com/",
  " */",
  "",
  "",
].join('\n');

gulp.task('less', function(done) {
  gulp
    .src(['src/index.less'])
    .pipe(less())
    .pipe(header(banner, { pkg: package, }))
    .pipe(rename('meltline.css'))
    .pipe(gulp.dest('./'))
    .pipe(cssmin())
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(gulp.dest('./'))
    ;
  done();
});

gulp.task('watch', function() {
  gulp.watch(['src/**/*.less'], gulp.task('less'));
});

gulp.task('default', gulp.series('less', 'watch'));
