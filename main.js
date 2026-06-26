function geraSenha() {
    // Captura os elementos do HTML
    const usarMaiusculas = document.getElementById('maiusculas').checked;
    const usarMinusculas = document.getElementById('minusculas').checked;
    const usarNumeros = document.getElementById('numeros').checked;
    const usarSimbolos = document.getElementById('simbolos').checked;
    const tamanho = parseInt(document.getElementById('tamanhoSenha').value);

    // Grupos de caracteres
    const maiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const minusculas = "abcdefghijklmnopqrstuvwxyz";
    const numeros = "0123456789";
    const simbolos = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let caracteresDisponiveis = "";
    let tiposSelecionados = 0;

    // Monta o banco de caracteres com base no que foi marcado
    if (usarMaiusculas) { caracteresDisponiveis += maiusculas; tiposSelecionados++; }
    if (usarMinusculas) { caracteresDisponiveis += minusculas; tiposSelecionados++; }
    if (usarNumeros) { caracteresDisponiveis += numeros; tiposSelecionados++; }
    if (usarSimbolos) { caracteresDisponiveis += simbolos; tiposSelecionados++; }

    // Validação caso nenhum checkbox esteja marcado
    if (caracteresDisponiveis === "") {
        alert("Por favor, selecione pelo menos uma opção!");
        return;
    }

    // Gera a senha aleatória
    let senhaGerada = "";
    for (let i = 0; i < tamanho; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteresDisponiveis.length);
        senhaGerada += caracteresDisponiveis[indiceAleatorio];
    }

    // Exibe a senha na tela
    document.getElementById('campoSenha').value = senhaGerada;

    // Atualiza a barra de força da senha
    atualizaForca(tamanho, tiposSelecionados);
}

function updateForca(tamanho, tipos) {
    const barra = document.getElementById('forcaBarra');
    const texto = document.getElementById('textoForca');
    
    let pontuacao = tamanho * tipos;

    if (pontuacao < 15) {
        barra.style.width = "30%";
        barra.style.background = "red";
        texto.innerText = "Fraca";
        texto.style.color = "red";
    } else if (pontuacao >= 15 && pontuacao < 25) {
        barra.style.width = "60%";
        barra.style.background = "orange";
        texto.innerText = "Média";
        texto.style.color = "orange";
    } else {
        barra.style.width = "100%";
        barra.style.background = "green";
        texto.innerText = "Forte";
        texto.style.color = "green";
    }
}

// Correção para mapear o nome correto da função interna
function atualizaForca(tamanho, tipos) {
    updateForca(tamanho, tipos);
}