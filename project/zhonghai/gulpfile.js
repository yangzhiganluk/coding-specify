/**
 * Created by juanl on 2017/4/9.
 */
const fs = require('fs'),
    join = require('path').join,
    gulp = require('gulp'),
    ejs = require('ejs'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    babel = require('gulp-babel'),
    //src folder
    srcDir = join(__dirname,'src'),
    //ejs folder
    ejsDir = join(srcDir,'ejs'),
    //scss folder
    sassDir = join(srcDir,'sass'),
    _ = require('lodash');

//config
let ejsFileName = 'index';
let fileArray = ['index','product'];
//conpile ejs to html
gulp.task('tpl',()=>{
    _.each(fileArray,ejsFileName=>{
        let templateStr = fs.readFileSync(join(ejsDir,`${ejsFileName}/${ejsFileName}.ejs`),'utf8'),
            htmlTemplate = ejs.render(templateStr,{
                filename: join(ejsDir,`${ejsFileName}/head.ejs`),
                data:_.extend({},require(join(srcDir,`data/data.js`)),{filename:ejsFileName})
            });
        fs.writeFile(join(srcDir,`www/${ejsFileName}.html`),htmlTemplate,err=>{
            if(err) throw new Error(err);
            console.log(`${ejsFileName} is saved`);
        });
    });
});
//compile watch
gulp.task('tpl:watch',()=>{
    gulp.watch(join(ejsDir,`**/*.ejs`),['tpl']);
});
//compile sass to css
gulp.task('sass',()=>{
    fileArray.forEach(ejsFileName=>{
        return gulp.src(join(sassDir,`${ejsFileName}/${ejsFileName}.scss`))
        //初始化
            .pipe(sourcemaps.init())
            .pipe(sass({outputStyle: 'compressed'}).on('error',sass.logError))
        //生成sourcemap文件
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(join(srcDir,'www/styles/')));
    });
});
//sass watch
gulp.task('sass:watch',()=>{
    gulp.watch(join(sassDir,'**/*scss'),['sass']);
});
//compile js
gulp.task('js',()=>{
    return gulp.src(join(srcDir,'script/*.js'))
        .pipe(babel())
        .pipe(gulp.dest(join(srcDir,'www/js/')));
});
//js watch
gulp.task('js:watch',()=>{
    gulp.watch(join(srcDir,'script/*.js'),['js']);
});
//web server
gulp.task('ws',['sass:watch','tpl:watch','js:watch'],()=>{});