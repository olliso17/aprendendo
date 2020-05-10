const express= require('express')
const app= express()
/*pegar o css e js que definem a aparencia do arq html*/
const bodyParser = require('body-parser');
app.use(bodyParser.json());      
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
/*abrir a tela de login*/
app.get('/', function (req, res) {
    res.sendFile(__dirname +'/public/login/login.html'); 
})
/*pega o arquivo html e chama no localhost*/
app.get('/calendario', function (req, res) {
    res.sendFile(__dirname +'/public/calendario/janeiro.html'); 
})
app.listen('3000', (req,res)=>{
    console.log('servidor rodando')
});