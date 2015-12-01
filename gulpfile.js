//加载插件

/**
 * 组件安装
 * npm install gulp-autoprefixer gulp-util gulp-sourcemaps gulp-imagemin gulp-ruby-sass gulp-minify-css gulp-jshint gulp-uglify gulp-rename gulp-concat gulp-clean gulp-livereload tiny-lr --save-dev
 */

// 引入 gulp及组件
var gulp    = require('gulp'),                //基础库
    autoprefixer = require('gulp-autoprefixer'),  //浏览器前缀
    handlebars = require('gulp-handlebars') ,
    imagemin = require('gulp-imagemin') ,     //图片压缩
    sass = require('gulp-ruby-sass'),        //sass
    minifycss = require('gulp-minify-css'),   //css压缩
    jshint = require('gulp-jshint'),           //js检查
    uglify  = require('gulp-uglify'),         //js压缩
    rename = require('gulp-rename'),           //重命名
    concat  = require('gulp-concat'),        //合并文件
    clean = require('gulp-clean'),            //清空文件夹
    notify = require('gulp-notify'),
    sourcemaps = require('gulp-sourcemaps');  //生成maps文件
    // tinylr = require('tiny-lr'),               //自动刷新
    // server = tinylr(),
    // port = 35729,
    // livereload = require('gulp-livereload');  

var jsSrc = 'app/js/*.js',
    jsDst ='app/dist/js',
    cssSrc = 'app/css/*.scss',
    cssDst = 'app/dist/css';


//css构建任务
gulp.task('css', function () {
  // return sass('app/css/base.scss')
  //   // .on('error', sass.logError)
  //   // .pipe({style:'expact'})
  //   .pipe(gulp.dest('dist/css'));



  //   gulp.src(cssSrc)
  //       .pipe(sourcemaps.init())
  //       .pipe(sourcemaps.write())
  //       .pipe(gulp.dest(cssDst)) 

    sass(cssSrc)
        
       // gulp.src(cssSrc).pipe(sass())
       // .pipe(sass({ style: 'expanded'})) 
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest(cssDst))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(gulp.dest(cssDst)) 
        .pipe(notify({ message: '<%= file.relative %> task complete' }));

});


// js构建任务
gulp.task('js', function () {

    gulp.src(jsSrc)
        // .pipe(jshint('.jshintrc'))
        // .pipe(jshint.reporter('default'))
        // .pipe(concat('main.js'))
        .pipe(gulp.dest(jsDst))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        // .pipe(livereload(server))
        .pipe(gulp.dest(jsDst))
        .pipe(notify({ message: '<%= file.relative %> task complete' }));

});

// clean 任务 如 清空图片、样式
gulp.task('clean', function() {
    gulp.src([jsDst,cssDst], {read: false})
        .pipe(clean())
        .pipe(notify({ message: '<%= file.relative %> folder has been clean' }));

});

// 监听任务 运行语句 gulp watch
gulp.task('watch',function(){

    // server.listen(port, function(err){
    //     if (err) {
    //         return console.log(err);
    //     }

        // // 监听html
        // gulp.watch('./src/*.html', function(event){
        //     gulp.run('html');
        // })

        // 监听css
        gulp.watch(cssSrc, function(){
            gulp.run('css');
        });

        // 监听js
        gulp.watch(jsSrc, function(){
            gulp.run('js');
        });

        // 监听images
        // gulp.watch('./src/images/**/*', function(){
        //     gulp.run('images');
        // });

        
     
});
 

//默认任务
gulp.task('default',['css','js']);

