document.addEventListener('DOMContentLoaded', function () {
    const nomeId = document.querySelector('#nome');
    const usuarioId = document.querySelector('#usuario');
    const repositorioId = document.querySelector('#repositorio');
    const seguidoresId = document.querySelector('#seguidores');
    const seguindoId = document.querySelector('#seguindo');
    const linkId = document.querySelector('#link');
    const fotoId = document.querySelector('#foto');


    fetch('https://api.github.com/users/yanresende')
        .then(function (resposta) {
            return resposta.json();
        })
        .then(function (json) {
            nomeId.innerText = json.name;
            usuarioId.innerText = json.login;
            fotoId.src = json.avatar_url;
            seguidoresId.innerText = json.following;
            seguindoId.innerText = json.followers;
            repositorioId.innerText = json.public_repos;
            linkId.href = json.html_url;

        })
})