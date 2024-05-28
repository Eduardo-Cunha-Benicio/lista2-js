/*1-Faça uma página que peça ao usuário a cotação do dólar atual. Calcule quanto ficaria
esse valor se subisse 1%, 2%, 5% e 10% e exiba ao usuário os valores calculados*/
let cotacao = document.querySelector("#cotacao");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function CalcCot(){
    let cotacao1 = Number(cotacao.value);
    let pct1 = (cotacao1/100)*101;
    let pct2 = (cotacao1/100)*102;
    let pct5 = (cotacao1/100)*105;
    let pct10 = (cotacao1/100)*110;
    h3Resultado.innerHTML = "Se subir 1%, fica R$: "+pct1.toFixed(2)+ "<br>"+ "Se subir 2%, fica R$: "+pct2.toFixed(2)+ "<br>" +"Se subir 5%, fica R$: "+pct5.toFixed(2)+ "<br>" +"E se subir 10%, fica R$: "+pct10.toFixed(2);
}

btCalcular.onclick = function(){
    CalcCot();
}