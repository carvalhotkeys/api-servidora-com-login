import { Router } from "express"; //modulo que fornece uma mmicro aplicacao express

const rotaLogin = new Router();

rotaLogin.get('/',(req,resp) => {
    resp.redirect("/login.html") //redirecionado quanndo acessar /login para login.html
})
.post('/',(req,resp) => {
    const usuario = req.body.usuario;
    const senha = req.body.senha;
    if (usuario && senha && usuario === 'cris' && senha === '123'){

    }
    else{
        resp.send("<p>falha no login </p><br><button onclick='history.back()'>Voltar </button>")
    }
});

export default rotaLogin;