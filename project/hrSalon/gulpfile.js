/**
 * Created by juanl on 2017/7/14.
 */
/*
 * module dependencies
 */
const join = require('path').join,
    fs = require('fs'),
    pump = require('pump'),
    minimist = require('minimist');

//argv
const parseArgv = minimist(process.argv.slice(2)),
    jsFileName = parseArgv.flie || 'index';

/*
 *plugins
 */
const gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    $ = require('gulp-load-plugins')();

//dist folder
const distDir = join(__dirname,'dist');
//src folder
const srcDir = join(__dirname,'src');
//views folder
const viewDir = join(srcDir, 'views');
//www folder
const wwwDir = join(srcDir, 'www');
//sass folder
const sassDir = join(srcDir, 'sass');

//compile pug template file to html
gulp.task('compile:pug', () => {
    return gulp.src(join(viewDir, 'index.pug'))
        .pipe($.pug({
            locals: require(join(srcDir, 'data'))
        }))
        .pipe(gulp.dest(wwwDir))
});

//compile pug watch
gulp.task('compile:pug:watch', () => {
    gulp.watch(join(viewDir, '**/*.pug'), ['compile:pug']);
    gulp.watch(join(srcDir, 'data'),['compile:pug']);
});

//compile sass to css
gulp.task('complie:sass', () => {
    return gulp.src(join(sassDir, 'index.scss'))
        .pipe(sourcemaps.init())
        .pipe($.sass({outputStyle: 'compressed'}).on('error', $.sass.logError))
        .pipe($.autoprefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(join(wwwDir,'styles')))
});

//compile sass watch
gulp.task('compile:sass:watch', () => {
    gulp.watch(join(sassDir, '**/*.scss'), ['complie:sass'])
});

//web server
gulp.task('ws', ['compile:pug:watch', 'compile:sass:watch'], err => {});



