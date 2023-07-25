const primervalor=document.querySelector("#primervalor")
const segundovalor=document.querySelector("#segundovalor")
const resultadohtml= document.getElementById("resultado")
const boton=document.getElementById("boton")


const primervalorresta=document.querySelector("#primervalorresta")
const segundovalorresta=document.querySelector("#segundovalorresta")
const resultadohtmlresta= document.getElementById("resultadoresta")
const botonresta=document.getElementById("botonresta")

let valor1resta;
let valor2resta;
let resultadoresta;

let valor1;
let valor2;
let resultado;

botonresta.addEventListener("click",calcular)


function calcular(){

    valor1resta=primervalorresta.value
    valor2resta=segundovalorresta.value

    resultadoresta= Number(valor1resta)-Number(valor2resta)

    resultadohtmlresta.innerHTML=resultadoresta


}


boton.addEventListener("click",calcularsuma)


function calcularsuma(){

    valor1=primervalor.value
    valor2=segundovalor.value

    resultado= Number(valor1)+Number(valor2)

    resultadohtml.innerHTML=resultado


}

