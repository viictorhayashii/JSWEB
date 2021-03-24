const BotaoConclui = () =>{
    //captura botao do DOM
    const botaoConclui = document.createElement('button');
    //adiciona uma classe ao elemento
    botaoConclui.classList.add('check-button');
    //adiciona texto ao elemento
    botaoConclui.innerText = 'concluir';
    //adiciona um evento de click no elemento
    botaoConclui.addEventListener('click', concluirTarefa)
    return botaoConclui;
}

const concluirTarefa = (evento) =>{
    //target quer saber o alvo do evento
    const botaoConclui = evento.target;
    //parentEllement pega o pai do elemento
    const tarefaCompleta = botaoConclui.parentElement;
    // Classlista pega a classe do elemento
    //toggle altera a classe do css que voce quer
    tarefaCompleta.classList.toggle('done');
}

export default BotaoConclui;