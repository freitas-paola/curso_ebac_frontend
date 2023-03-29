const button = document.getElementById("button");

button.addEventListener("click", validNumber);

function validNumber(e) {
  const campoA = document.getElementById("campo-a");
  const campoB = document.getElementById("campo-b");

  const campoANumber = Number(campoA.value);
  const campoBNumber = Number(campoB.value);

  e.preventDefault();

  const containerMensagemErro = document.querySelector(".error");
  const containerMensagemSucesso = document.querySelector(".success");

  function error() {
    containerMensagemSucesso.classList.add("display");
    containerMensagemErro.classList.remove("display");
  }

  if (campoA.value === "" || campoB.value === "") {
    const mensagemErro = "Todos os campos devem ser preenchidos.";
    containerMensagemErro.innerHTML = mensagemErro;
    error();
  } else if (campoANumber >= campoBNumber) {
    const mensagemErro = "O Campo B deve conter um número maior que o Campo A";
    containerMensagemErro.innerHTML = mensagemErro;
    error();
  } else {
    containerMensagemErro.classList.add("display");
    containerMensagemSucesso.classList.remove("display");
  }
}
