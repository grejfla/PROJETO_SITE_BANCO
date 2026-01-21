function entrarSite (){
    var nome_usuario, senha_usuario;

    nome_usuario = document.getElementById('usuario').value;
    senha_usuario = document.getElementById('senha').value;

    if (nome_usuario === "Flávio" && senha_usuario === "123"){
        alert("logado com sucesso");
        window.location.href = "pagina_banco.html";
    }
    else{
        alert("usuário ou senha incorretos");
    }
}