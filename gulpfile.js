//加载插件

/**
 * 组件安装
 * npm install gulp-util gulp-imagemin gulp-ruby-sass gulp-minify-css gulp-jshint gulp-uglify gulp-rename gulp-concat gulp-clean gulp-livereload tiny-lr --save-dev
 */

// 引入 gulp及组件
var gulp    = require('gulp'),                 //基础库
    imagemin = require('gulp-imagemin'),       //图片压缩
    sass = require('gulp-ruby-sass'),          //sass
    minifycss = require('gulp-minify-css'),    //css压缩
    jshint = require('gulp-jshint'),           //js检查
    uglify  = require('gulp-uglify'),         //js压缩
    rename = require('gulp-rename'),           //重命名
    concat  = require('gulp-concat'),        //合并文件
    clean = require('gulp-clean');            //清空文件夹
    // tinylr = require('tiny-lr'),               //自动刷新
    // server = tinylr(),
    // port = 35729,
    // livereload = require('gulp-livereload');  



gulp.task('sass', function () {
  return sass('app/css/base.scss')
    // .on('error', sass.logError)
    // .pipe({style:'expact'})
    .pipe(gulp.dest('dist/css'));
});

gulp.task('default', ['sass']);