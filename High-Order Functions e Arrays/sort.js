const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
  ]

  // Método SORT
  // Sort significa ordenar em inglês.
  // sort: ordena os elementos de um array a partir de comparações entre duplas de elementos

  /*
  personagens.sort(function (a, b) { // dois elementos do array.
  return a.nivel - b.nivel // Queremos comparar os níveis. Se a maior que b retorna positivo, a será mantido antes do b. 
})

console.log(personagens)
*/
personagensOrdenados = personagens.slice().sort(function (a, b) { // dois elementos do array.
  return a.nivel - b.nivel // Queremos comparar os níveis. Se a maior que b retorna positivo, a será mantido antes do b. 
})

console.log(personagens)
console.log(personagensOrdenados)


// filter, map, reduce não altera o array original.
// O SORT ele é o único método que altera o array original. 
// Slice retorna uma copia de uma parte do array e é criado um novo array com essa parte.