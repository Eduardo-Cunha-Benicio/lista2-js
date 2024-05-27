/*Faça uma página que peça ao usuário quantas pessoas irão comer omelete, Depois exiba ao usuário quantos ovos e quantas gramas de queijo serãp necessários p/ fazer a acomida. Considere 2 ovos e 50 gramas de queijo por pessoa*/
let npessoa = document.querySelector("#npessoa");
let btCalcular = document.querySelector("#btCalcular");
let h2Resultado = document.querySelector("#h2Resultado");

function CalcularOmelete(){
    let npessoa1 = Number(npessoa.value);
    let ovo = 2;
    let queijo = 50;
    h2Resultado.innerHTML ="Serão necessários "+ovo * npessoa1+" ovos e "+queijo * npessoa1+" gramas de queijo para este omelete vos servir."
}

btCalcular.onclick = function(){
    CalcularOmelete();
}