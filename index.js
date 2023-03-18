import express from 'express';
import rotaLogin from './rotas/rotaLogin.js';

const hostname = 'localhost';
const porta = 4001;
const appexpress = express();

appexpress.use("./login", rotaLogin);          // ordem e importante para a logica de entrada do usuario
appexpress.use(express.static("./publico"));  //cria link deixando público acessível  http://localhost:4001/login.html
appexpress.use(express.urlencoded({extended:false}));

appexpress.listen(porta, hostname, ()=>{
    console.log('Ola estou escutando em: ' + hostname + ':' + porta)
});

