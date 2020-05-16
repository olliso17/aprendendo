const {app} = require('./costume-express');
const {conexao}= require('./conexao');

app.listen('3000', (req, res, err) => {
   if(err){
    console.log('erro')
   }else{
      console.log('servidor rodando') 
   }
    
});



