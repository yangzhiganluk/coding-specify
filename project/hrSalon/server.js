/**
 * Created by juanl on 2017/7/14.
 */
const express = require('express'),
    join = require('path').join,
    app = express(),
    chalk = require('chalk'),
    log = console.log,
    fs = require('fs'),
    bodyParser = require('body-parser'),
    compression = require('compression');

app.use(compression());
app.use(bodyParser.urlencoded({ limit: '50mb',extended: false }));
app.use(bodyParser.json());
app.use(express.static(join(__dirname, 'src/www')));
app.listen(3000, () => {
    log(chalk.blue.bold('app listen on port 3000'));
});