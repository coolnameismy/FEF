//加载插件

/**
 * 组件安装
 * npm install gulp-autoprefixer gulp-util gulp-sourcemaps gulp-imagemin gulp-ruby-sass gulp-minify-css gulp-jshint gulp-uglify gulp-rename gulp-concat gulp-clean gulp-livereload tiny-lr --save-dev
 */

// 引入 gulp及组件
var gulp    = require('gulp'),                 //基础库
    autoprefixer = require('gulp-autoprefixer') //浏览器前缀
    handlebars = require('gulp-handlebars')
    imagemin = require('gulp-imagemin'),       //图片压缩
    sass = require('gulp-ruby-sass'),          //sass
    minifycss = require('gulp-minify-css'),    //css压缩
    jshint = require('gulp-jshint'),           //js检查
    uglify  = require('gulp-uglify'),         //js压缩
    rename = require('gulp-rename'),           //重命名
    concat  = require('gulp-concat'),        //合并文件
    clean = require('gulp-clean'),            //清空文件夹
    sourcemaps = require('gulp-sourcemaps');  //生成maps文件
    // tinylr = require('tiny-lr'),               //自动刷新
    // server = tinylr(),
    // port = 35729,
    // livereload = require('gulp-livereload');  



gulp.task('css', function () {
  // return sass('app/css/base.scss')
  //   // .on('error', sass.logError)
  //   // .pipe({style:'expact'})
  //   .pipe(gulp.dest('dist/css'));

  var cssSrc = 'app/css/base.scss',
        cssDst = 'dist/css';

    sass(cssSrc)
       // gulp.src(cssSrc).pipe(sass())
        // .pipe(sass({ style: 'expanded'}))
        // .pipe(sourcemaps.write())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest(cssDst))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(gulp.dest(cssDst));

});

gulp.task('default', ['css']);