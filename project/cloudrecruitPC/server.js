/**
 * Created by juanl on 2017/4/9.
 */
const express = require('express'),
    join = require('path').join,
    app = express();
var proxy = require('http-proxy-middleware');
var apiProxy = proxy('/hrmanage', {target: 'http://printserver:66'});
app.use(apiProxy);
app.use(express.static(join(__dirname,'src/www')));
app.listen(8000,()=>{
    console.log('app listening on port 8000');
})