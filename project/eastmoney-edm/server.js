/**
 * Created by lulj on 2017/3/8.
 */
const express = require('express'),
    join = require('path').join,
    app = express(),
    chalk = require('chalk'),
    log = console.log,
    path = require('path');
app.use(express.static(join(__dirname,'src/www')));

    app.listen(3000,  () => {
        log(chalk.blue.bold('app listening on port 3000!'));
    });
