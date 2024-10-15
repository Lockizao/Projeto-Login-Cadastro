if (localStorage.getItem("token") === null) {
  alert("Você precisa estar logado para acessar essa página");
  window.location.href = "./assets/html/signin.html"; // Corrigido "singin" para "signin"
}

const userLogado = JSON.parse(localStorage.getItem("userLogado"));

const logado = document.querySelector("#logado");
if (userLogado && userLogado.nome) {
  logado.innerHTML = `Olá ${userLogado.nome}`;
} else {
  logado.innerHTML = "Olá, usuário"; // Mensagem padrão caso o nome não esteja disponível
}

function sair() {
  localStorage.removeItem("token");
  localStorage.removeItem("userLogado");
  window.location.href = "./assets/html/signin.html"; // Corrigido "singin" para "signin"
}
