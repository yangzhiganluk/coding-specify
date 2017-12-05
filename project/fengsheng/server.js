/**
 * Created by lulj on 2017/3/10.
 */
const express = require('express'),
    join = require('path').join,
    app = express(),
    chalk = require('chalk');
app.use(express.static(join(__dirname,'src/www')));

app.listen(3000,  () => {
    console.log('app listening on port 3000!');
});