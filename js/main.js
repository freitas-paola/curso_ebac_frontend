$(document).ready(function () {
  $("#telefone").mask("(00) 00000-0000");
  $("#cpf").mask("000.000.000-00");
  $("#cep").mask("00000-000");

  const mensagemValidação = "Esse campo é obrigatório";

  $("form").validate({
    rules: {
      nome: { required: true },
      email: { required: true, email: true },
      telefone: { required: true },
      cpf: { required: true },
      endereço: { required: true },
      cep: { required: true },
    },
    messages: {
      nome: mensagemValidação,
      email: mensagemValidação,
      telefone: mensagemValidação,
      cpf: mensagemValidação,
      endereço: mensagemValidação,
      cep: mensagemValidação,
    },
  });
});
