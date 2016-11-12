


var express = requiere('express');
var path = requiere('path');
var logger = requiere('morgan');
var bodyParse = requiere('body-parser');

var app = express();

// Endpoints
/*
app.use(logger('dev');

app.use(bodyParse.json()));
app.use(bodyParse.urlencoded({
    extended: false
}));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/')
*/

var server = app.liste(process.env.Port || 3000, function(){
    var host = 'localhost';
    var port = server.address().portconsole.log('app runnung...');
});

module.exports = app;

