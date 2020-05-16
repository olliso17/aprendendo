
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const consign= require('consign');

consign()
    .include('./routes.js')
    .then('./conexao.js')
    .into(app)
   
app.engine('html', require('ejs').renderFile)
app.set('views', __dirname + '/public')
app.set('views engine', 'ejs')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname + '/public')));


module.exports={app,express, bodyParser,cookieParser,path};