function salvarCadastro(dadosCadastro) {
    const dadosJSON = JSON.stringify(dadosCadastro);

    localStorage.setItem("cadastroRedeConectar", dadosJSON);
}

function buscarCadastro() {
    const dadosSalvos = localStorage.getItem("cadastroRedeConectar");

    if (dadosSalvos) {
        return JSON.parse(dadosSalvos);
    }

    return null;
}

export { salvarCadastro, buscarCadastro };