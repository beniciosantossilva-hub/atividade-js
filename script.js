function revelarMensagem() {
    document.getElementById("mensagem").innerText = "Olá Mundo! Alterei a mensagem chamando uma função JS"
}

function mostrarNome() {
    let nome = document.getElementById("nomeUsuario").value;
    document.getElementById("resultadonome").innerText = "Bem Vindo, " + nome + "!";
}