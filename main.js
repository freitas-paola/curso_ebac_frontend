document.addEventListener("DOMContentLoaded", function () {
  const avatar = document.getElementById("avatar");
  const profileName = document.getElementById("name");
  const username = document.getElementById("username");
  const repNumber = document.getElementById("rep");
  const followersNumber = document.getElementById("followers");
  const followingNumber = document.getElementById("following");
  const linkGitHub = document.getElementById("link");

  fetch("https://api.github.com/users/freitas-paola")
    .then(function (res) {
      return res.json();
    })
    .then(function (json) {
      if (json.name !== undefined) {
        avatar.src = json.avatar_url;
        profileName.innerText = json.name;
        username.innerText = json.login;
        repNumber.innerText = json.public_repos;
        followersNumber.innerText = json.followers;
        followingNumber.innerText = json.following;
        linkGitHub.href = json.html_url;
      } else {
        throw Error("Usuário não encontrado");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      alert("Ocorreu um erro. Tente novamente mais tarde.");
    });
});
