var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var users = require('./routes/users');
var AlunoRoute = require('./routes/AlunoRoutes')

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use(function (req, res, next){
    res.header("Acess-Control-Allow-Origin", "*");
    res.header("Acess-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Acess-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

app.use('/users', users);
app.use('/alunos',AlunoRoute)

module.exports = app;
