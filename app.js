let nomes = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    nomes.push(nome);
    atualizarListaAmigos();
    input.value = '';
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    
    listaAmigos.innerHTML = '';

    nomes.forEach(nome => {
        const listItem = document.createElement('li');
        listItem.textContent = nome;

        listaAmigos.appendChild(listItem);
    });
}

function sortearAmigo() {
    if (nomes.length === 0) {
        alert('A lista de amigos está vazia. Adicione amigos antes de sortear.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * nomes.length);

    const nomeSorteado = nomes[indiceAleatorio];

    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `Amigo sorteado: ${nomeSorteado}`;
}