function entrarSite (){
    var nome_usuario, senha_usuario;

    nome_usuario = document.getElementById('inpUsuario').value;
    senha_usuario = document.getElementById('inpSenha').value;

    if (nome_usuario === "Flávio" && senha_usuario === "123"){
        alert(" usuário logado com sucesso");
        window.location.href = "pagina_banco.html";
    }
    else{
        alert("usuário e/ ou senha incorretos. Tente novamente.");
    }
}