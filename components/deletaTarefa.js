const BotaoDeleta = () =>{
    //cria um botao no html
    const botaoDeleta = document.createElement('button');

    botaoDeleta.innerText = "deletar";
    botaoDeleta.addEventListener('click', deletarTarefa);
    return botaoDeleta
}
const deletarTarefa = (evento) =>{
    const botaoDeleta = evento.target;
    const tarefaCompleta = botaoDeleta.parentElement;
    //remove deleta o elemento do html
    tarefaCompleta.remove();

    return botaoDeleta;
}

export default BotaoDeleta;