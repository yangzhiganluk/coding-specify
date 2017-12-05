/**
 * Created by lulj on 2017/3/7.
 */
'use strict';

const gulp = require('gulp'),
    fs = require('fs'),
    join = require('path').join,
    ejs = require("ejs"),
    sass = require('gulp-sass'),
    //src Folder
    srcDir = join(__dirname,'src'),
    //ejs Folder
    ejsDir = join(srcDir,'ejs'),
    //sass Folder
    sassDir = join(srcDir,'sass');

//compile ejs to html
gulp.task('tpl',() => {
    let indexTemplateStr = fs.readFileSync(join(ejsDir,'index.ejs'),'utf8'),
    indexHTML = ejs.render(indexTemplateStr,{
        //？？why start
        filename: join(ejsDir,'components/head.ejs'),
        data: require(join(srcDir,'data/data.js'))
    });
    fs.writeFile(join(srcDir,'www/index.html'),indexHTML,(err) => {
        if(err) throw new Error(err);
        console.log(`Index file is saved!`);
    });
});

//tpl watch
gulp.task('tpl: watch',() => {
    gulp.watch(join(srcDir,'**/*.ejs'),['tpl']);
});
//compile sass to css
gulp.task('sass',() => {
    return gulp.src(join(sassDir,'index.scss'))
        .pipe(sass({outputStyle: 'compressed'}).on('error',sass.logError))
        .pipe(gulp.dest(join(srcDir,'www/styles/')));
});
//compile sass to css
gulp.task('sass:mobile',() => {
    return gulp.src(join(sassDir,'index-m.scss'))
        .pipe(sass({outputStyle: 'compressed'}).on('error',sass.logError))
        .pipe(gulp.dest(join(srcDir,'www/styles/')));
});
//sass watch
gulp.task('sass:watch',() => {
    gulp.watch(join(sassDir,'**/*.scss'),['sass']);
    gulp.watch(join(sassDir,'**/*.scss'),['sass:mobile']);
});
//web server
gulp.task('ws',['sass:watch','tpl: watch'],(err) => {});



