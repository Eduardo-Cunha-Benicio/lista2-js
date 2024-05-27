let nota = document.querySelector("#number")
let btResultado = document.querySelector("#btResultado")

function Calcular (){
    let num = Number(number.value);
    let resultado;
    if (num % 2 === 0){
        resultado = (num +" é um número par.");
    } else {
        resultado = (num +" é um número ímpar.");
    }
    let h2Resultado = document.querySelector("#h2Resultado");
    h2Resultado.textContent = resultado; 
}

btResultado.onclick = function (){
    Calcular();
}