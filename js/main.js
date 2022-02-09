/* Requisitos sobre o jogo
    - Funcionamento é somente com letras maiúsculas
    - Não pode letras com acento, nem caracteres especiais
    - Não pode acrescentar números
*/

const tela = document.querySelector("canvas");
const pincel = tela.getContext("2d");
const marromClaro = "#cb997e";
const marromEscuro = "#582f0e";

function criarTroncoDaForca() {
    //Tronco da Forca
    pincel.fillStyle = marromEscuro;
    pincel.fillRect(50, 100, 50, 300);
    pincel.fillRect(100, 100, 150, 10);

    //Corda da Forca
    pincel.fillStyle = marromClaro;
    pincel.fillRect(240, 100, 10, 50);
}

function criarCabeca() {
    return null;
}

function criarTronco() {
    return null;
}

function criarBracoEsquerdo() {
    return null;
}

function criarBracoDireito() {
    return null;
}

function criarPernaEsquerda() {
    return null;
}

function criarPernaDireita() {
    return null;
}

function main() {
    criarTroncoDaForca();
}

main();