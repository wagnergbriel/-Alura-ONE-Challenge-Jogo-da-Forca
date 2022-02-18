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
    pincel.beginPath();
    pincel.fillStyle = "black";
    pincel.arc(245, 160, 40, 0, 2 * Math.PI);
    pincel.fill();
}

function criarTronco() {
    pincel.fillStyle = "black";
    pincel.fillRect(240, 160, 10, 150);
}

function criarBracoEsquerdo() {
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.moveTo(250, 220);
    pincel.lineTo(275, 265);
    pincel.lineWidth = 8;
    pincel.stroke();
}

function criarBracoDireito() {
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.moveTo(240, 220);
    pincel.lineTo(210, 260);
    pincel.lineWidth = 8;
    pincel.stroke();
}

function criarPernaEsquerda() {
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.moveTo(250, 300);
    pincel.lineTo(290, 345);
    pincel.lineWidth = 8;
    pincel.stroke();
}

function criarPernaDireita() {
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.moveTo(240, 300);
    pincel.lineTo(208, 345);
    pincel.lineWidth = 8;
    pincel.stroke();
}

function listaDePalavras() {
    return ["bola", "calça", "brasil", "amarelo", "tenis", "computador"];
}

function main() {
    const botaoInicarJogo = document.getElementById("iniciar-jogo");
    botaoInicarJogo.addEventListener("click", () => {
        criarTroncoDaForca();
        
        const entradaDasLetras = document.getElementById("entrada-letra");
        entradaDasLetras.addEventListener("input", () => {
            console.log(this.value);
            if(null){
                criarCabeca();
                criarTronco();
                criarBracoEsquerdo();
                criarBracoDireito();
                criarPernaEsquerda();
                criarPernaDireita();
            }
        });
    });
}

main();