let listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');

function searchUser() {
    // O Axios encapsula o XMLHttpRequest
    let user = inputElement.value;
    if (user.length === 0)
        alert('Digite um usuário válido do GitHub!');
    else {
        renderList();
        axios.get(`https://api.github.com/user/${user}/repos`)
            .then(function (response) {
                renderList(response.data);
            })
            .catch(function (error) {
                listElement.innerHTML = '';
                if (error.message.includes('404'))
                    alert('Usuário não existe!');
            });
    }
}

function renderList(data) {
    listElement.innerHTML = '';
    if (data) {
        for (repo of data) {
            var repoElement = document.createElement('li');
            var repoText = document.createTextNode(repo['name']);

            repoElement.appendChild(repoText);
            listElement.appendChild(repoElement);
        }
    }
    else {
        var repoElement = document.createElement('li');
        var repoText = document.createTextNode('Carregando...');

        repoElement.appendChild(repoText);
        listElement.appendChild(repoElement);
    }
}
