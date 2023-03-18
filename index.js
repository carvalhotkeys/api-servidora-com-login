import express from 'express';

const appexpress = express();

const hostname = 'localhost';
const porta = 4000;

appexpress.listen(porta, hostname, ()=>{
    console.log('Ola estou escutando em: ' + hostname + ':' + porta)
});

