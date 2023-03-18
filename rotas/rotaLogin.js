import { Router } from "express";

const rotalogin = new Router();

rotalogin.get('/', (req, resp) =>{
    resp.redirect("/login.html")
})
// enviar requisicao dados para o servidor tipo usuario e senha
.post('/', (req, resp) => {
    const usuario = req.body.usuario;
    const senha = req.body.senha;
    if (usuario && senha && usuario === 'cris' && senha === '123')
    {
        req.session.usuariologado=true;
        resp.redirect('/cadastroCliente.html');
    }
    else{
        resp.send("<p> Usuário ou senha invalida!! </p><br><button onclick='history.back()'>VOLTAR</button>")
    }
});

export default rotalogin;