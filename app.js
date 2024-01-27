let numerosSorteados = [];
let limiteLista = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 0;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function mensagemInicial(){
exibirTextoNaTela('h1', 'Jogo do número secreto!');
exibirTextoNaTela('p', 'Escolha um número de 1 a 10.');
}
mensagemInicial()
function verificarChute() {
   let chute = document.querySelector('input').value;
    tentativa ++;
   if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Você acertou!');
        let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';

        let mensagemTentativa = `Parabéns! você acertou o numero secreto, o número ${numeroSecreto}, com um total de ${tentativa} ${palavraTentativa}`;

        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute ('disabled');
   } else {
        limparCampo()
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p','O número secreto é maior');
        } 
   }
}

function gerarNumeroAleatorio() {
     let numeroEscolhido = parseInt(Math.random() * limiteLista + 1);
     let quantidadeElementoLista = numerosSorteados.length;
     console.log (numerosSorteados);
     console.log (numeroEscolhido);
     if (quantidadeElementoLista == limiteLista) {
        numerosSorteados = [];
     }
     if (numerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else {
        numerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo () {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativa = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}