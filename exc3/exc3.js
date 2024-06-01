/*3-Faça uma página que peça ao usuário dois números inteiros. Depois exiba o resultado
das principais operações matemáticas, uma por linha. Principais operações: soma,
subtração, multiplicação, divisão.*/

let numero1 = document.querySelector("#numero1");
let numero2 = document.querySelector("#numero2");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function Operacoes(){
    let num1 = Number(numero1.value);
    let num2 = Number(numero2.value);
    let adicao = num1 + num2;
    let subt = num1 - num2;
    let multi = num1 * num2;
    let divis = num1 / num2;
    h3Resultado.innerHTML = "Soma: "+adicao+ "<br>"+ "Subtração: "+subt+ "<br>"+ "Multiplicação: "+multi+ "<br>"+ "Divisão: "+divis.toFixed(2);
}

btCalcular.onclick = function(){
    Operacoes();
}