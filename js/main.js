function recordInfo() {
  var usuario = document.getElementById("usuario").value;
  var senha = document.getElementById("senha").value;
  localStorage.setItem(user, usuario);
  localStorage.setItem(password, senha);
  alert("Dados salvos com sucesso!");

}
