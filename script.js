"use strict";

let numeroSorteado = 0;
let chances = 3;
let ganhou = false;
let botao = document.getElementsByClassName("botao")[0];
console.log(botao);

function sorteiaNumero(){
    numeroSorteado = Math.round((Math.random() * 10));
   console.log(numeroSorteado);
}

window.onload = sorteiaNumero();

function atualizaDadosDoJogo(acerto , opcao){
    if(opcao == "Chutar"){
        if(acerto == true){
            ganhou = true;
            chances = 3;
        }
        else{
            chances--;
        }
    }
    else{
        chances = 3;
        sorteiaNumero();
        ganhou = false;
    }
}

function atualizaTela(opcao){
    
    let numeroChutado = document.getElementsByClassName("campo-de-numero")[0].value;
    let texto = document.getElementsByClassName("texto-normal")[0];

    if(opcao == "Reiniciar"){
        texto.innerText = "Digite um numero de 0 a 10:";
        botao.value = "Chutar";
    }
    else{
        if(chances == 0){
            texto.innerText = "Infelizmente voce zerou suas chances!\nO numero era: " + numeroSorteado;
            botao.value = "Reiniciar";
        }
        else if(ganhou == true){
            texto.innerText = "Parabens voce ganhou !!!";
            botao.value = "Reiniciar";
        }
        else if(numeroChutado < numeroSorteado){
            texto.innerText = "O numero é MAIOR que esse; voce ainda tem " + chances + " chance";
        }
        else if(numeroChutado > numeroSorteado){
            texto.innerText = "O numero é MENOR que esse; voce ainda tem " + chances + " chance";
        }
        else{
            texto.innerText = "Infelizmente voce zerou suas chances\nO numero era: " + numeroSorteado;
            botao.value = "Reiniciar";

        }
    }
}


function verificaAcerto(){
    if(botao.value == "Chutar"){
        let numeroChutado = document.getElementsByClassName("campo-de-numero")[0].value;
        if(numeroSorteado == numeroChutado){
            atualizaDadosDoJogo(true , botao.value);
            console.log(numeroSorteado);
        }
        else{
            atualizaDadosDoJogo(false , botao.value);
            console.log(numeroSorteado);
        }
    }
    else{
            atualizaDadosDoJogo(false , botao.value);
           /* let texto = document.getElementsByClassName("texto-normal")[0];
            botao.value = "Chutar";
            sorteiaNumero();
            chances = 3;
            texto.innerText = " Voce tem " + chances + ".";
        */
        }
    setTimeout(atualizaTela(botao.value) , 1000);
}
