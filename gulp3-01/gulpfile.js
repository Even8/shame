// **切记node版本为v10.15.0**

// 获取 gulp
var gulp = require('gulp');
// 开启服务器插件
const connect = require('gulp-connect');
// 合并js文件插件
const concat =  require('gulp-concat');
// 编译代码插件
const babel =   require('gulp-babel');
// 重新命名插件
const rename =  require('gulp-rename');
// 压缩插件
var uglify = require('gulp-uglify')

// 创建服务器 当前配置文件为根目录
gulp.task('webserver', () =>
    connect.server({
        livereload: true,
        port: 2333
    })
);

// 压缩 js 文件
// 在命令行使用 gulp script 启动此任务
gulp.task('script', function() {
    // 入口文件
    return gulp.src('js/*.js')
        // 合并为 luckyDraw.js  
        .pipe(concat('all.js'))  
        // 编译为 ES5 
        .pipe(babel({
            presets: ['env']
        }))
        // 压缩文件
        .pipe(uglify())
        // 重命名
        .pipe(rename({suffix: '.min'})) 
        // 另存压缩后的文件
        .pipe(gulp.dest('dist/js'))
})

// 在命令行使用 gulp auto 启动此任务
gulp.task('auto', function () {
    // 监听文件修改，当文件被修改则执行 script 任务
    gulp.watch('js/*.js', ['script'])
})


// 使用 gulp.task('default') 定义默认任务
// 在命令行使用 gulp 启动 script 任务和 auto 任务
gulp.task('default', ['webserver', 'script', 'auto'])

// gulp.task('default', ['webserver'], () => {
//     // gulp.watch('./src/ES6/*.js', ['minifyjs'])
//     gulp.watch('js/*.js', ['script'])
// });
