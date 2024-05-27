let nota = document.querySelector("#nota")
let btResultado = document.querySelector("#btResultado")
let h2Resultado = document.querySelector("#h2Resultado")

function Calcular (){
    let notaf = Number(nota.value);
    if (notaf >= 6.0){
        alert("Aprovado");
    } else if (notaf >=4.0){
        alert("Precisa fazer prova substitutiva");
    } else {
        alert("Reprovado!");
    }
}

btResultado.onclick = function(){
    Calcular();
}

/*6-faça uma página que peça ao usuário qual foi sua nota final no ano letivo. Se a nota for menor que 6 e maior que 4 exiba "precisa fazer prova subtitutiva". Se for maior que 6 exiba "Aprovado". Senão exiba "reprovado"*/