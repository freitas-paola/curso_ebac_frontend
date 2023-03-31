$(document).ready(function () {
  $("form").on("submit", function (e) {
    e.preventDefault();

    const tarefa = $("#input-tarefa").val();

    const novaTarefa = $(
      `<li><ion-icon name="checkmark"></ion-icon>${tarefa}</li>`
    );

    novaTarefa.appendTo("ul");

    $("#input-tarefa").val("");

    $(novaTarefa).click(function () {
      $(this).addClass("item-completo");
    });
  });
});
