// Triangulo Mágico

let lado1 = 7
let lado2 = 15
let lado3 = 9

let resultadoLado1MaisLado2 = lado1 + lado2
let resultadoLado2MaisLado3 = lado2 + lado3
let resultadoLado3MaisLado1 = lado3 + lado1

let produto1 = resultadoLado1MaisLado2 + lado3
let produto2 = resultadoLado2MaisLado3 + lado1
let produto3 = resultadoLado3MaisLado1 + lado2

console.log(produto1, produto2, produto3)