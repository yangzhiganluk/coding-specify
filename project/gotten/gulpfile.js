/**
 * Created by lulj on 2017/3/9.
 */
const fs = require('fs'),
    join = require('path').join,
    gulp = require('gulp'),
    ejs = require('ejs'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    babel = require("gulp-babel"),
    //src folder
    srcDir = join(__dirname,'src'),
    //ejs folder
    ejsDir = join(srcDir,'ejs'),
    //scss folder
    sassDir = join(srcDir,'sass'),
    _ = require('lodash');

// config
let ejsFileName = 'index';
/*
 process.argv是返回的一个数组，使用process.argv[2]获取的就是下表是2的some。
 process.argv.slice首先需要理解slice，process.argv.slice(2)获取的就是下表从2开始拷贝出来的一个数组['some', 'param']。
 */
/*
 process.argv
 返回当前命令行指令参数 ，但不包括node特殊(node-specific) 的命令行选项（参数）。
 常规第一个元素会是 'node'， 第二个元素将是 .Js 文件的名称。接下来的元素依次是命令行传入的参数：
 */
let fileArray = ['index','leaderShip','coHonor','joinUs'];
//compile ejs to html
gulp.task('tpl',() => {
    _.each(fileArray,ejsFileName=>{
        let templateStr = fs.readFileSync(join(ejsDir,`${ejsFileName}/${ejsFileName}.ejs`),'utf8'),
            htmlTemplate = ejs.render(templateStr,{
                filename:join(ejsDir,`${ejsFileName}/head.ejs`),
                data:_.extend({},require(join(srcDir,`data/data.js`)),{filename:ejsFileName})
            });
        fs.writeFile(join(srcDir,`www/${ejsFileName}.html`),htmlTemplate,err => {
            if(err) throw new Error(err);
            console.log(`${ejsFileName} is saved`);
        });
    });

});
//compile watch
gulp.task('tpl:watch', () => {
   gulp.watch(join(ejsDir,`**/*.ejs`),['tpl']);
});
//compile sass to css
gulp.task('sass',() => {
    fileArray.forEach(ejsFileName=>{
        return gulp.src(join(sassDir,`${ejsFileName}/${ejsFileName}.scss`))
        //初始化
            .pipe(sourcemaps.init())
            .pipe(sass().on('error',sass.logError))
            //生成sourcemap文件
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(join(srcDir,'www/styles/')));
    });
});
//sass watch
gulp.task('sass:watch',()=> {
    gulp.watch(join(sassDir,'**/*.scss'),['sass']);
});
//js
gulp.task('js',()=> {
    return gulp.src(join(srcDir,'script/bundle.js'))
        .pipe(babel())
        .pipe(gulp.dest(join(srcDir,'www/js/')));
    console.log(`js is saved`);
});
//sass watch
gulp.task('js:watch',()=> {
    gulp.watch(join(srcDir,'script/*.js'),['js']);
});
//web server
gulp.task('ws',['sass:watch','tpl:watch','js:watch'],() => {

});




