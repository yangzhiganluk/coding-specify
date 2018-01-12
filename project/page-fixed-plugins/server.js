/**
 * Created by lollipop on 2018/1/11
 */
const express = require('express'),
    app = express(),
    join = require('path').join,
    proxy = require('http-proxy-middleware');

app.use(express.static(join(__dirname, 'src/www')));
app.listen(3000,()=>{
    console.log('app listen on 3000');
});