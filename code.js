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

botonresta.addEventListener("click",calcular)


function calcular(){

    valor1resta=primervalorresta.value
    valor2resta=segundovalorresta.value

    resultadoresta= Number(valor1resta)-Number(valor2resta)

    resultadohtmlresta.innerHTML=resultadoresta


}

