function calcular (a, b, operacao) { // operacao é uma função em si.
console.log("Realizando uma operação. ")
const resultado = operacao(a, b)  // Foi passado a e b como parametros, mas poderia ser qualquer coisa como parametro.
return resultado                 // Cacular será uma high order function. 
}

function somar (x, y) {
    console.log("Realizar uma soma. ")
    return x + y
}

calcular(3, 5, somar) // Aqui queremos passar a própria função somar e não o resultado dela. assim, n utilzamos parenteses.

// High Order Function é uma função que recebe outra função como parâmetro.

// console.log(calcular(8, 4, function subtrair (x, y){ PODEMOS USASR FUNÇÕES ANONIMAS NESSE CASO !!! A função subtrair não existe fora.

console.log(calcular(8, 4, function (x, y) {
  console.log("Realizando uma subtração.")
  return x - y
}))

// Essas funções que são passadas como parâmetros geralmente são chamadas de callbacks
// Um exemplo comum de high-order function no javascript é a função .forEach() dos arrays
function exibirElemento(elemento, indice, array) {
    console.log({
      elemento,
      indice,
      array
    })
  }
  
  const lista = ["Maçã", "Banana", "Laranja", "Limão", "Uva"]
  // Forma tradicional
  for (let i = 0; i < lista.length; i++) {
    exibirElemento(lista[i], i, lista)
  }
  // Forma funcional
  lista.forEach(exibirElemento)
  // Também poderia ser feito: