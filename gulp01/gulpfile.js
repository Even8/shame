// 获取 gulp
var gulp = require('gulp')
// 开启服务器插件
const connect = require('gulp-connect');
// 合并js文件插件
// const concat =  require('gulp-concat');
// 编译代码插件
// const babel =   require('gulp-babel');
// 重新命名插件
// const rename =  require('gulp-rename');

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
    // 1. 找到文件
    gulp.src('js/*.js')
    // 2. 压缩文件
        .pipe(uglify())
    // 3. 另存压缩后的文件
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
