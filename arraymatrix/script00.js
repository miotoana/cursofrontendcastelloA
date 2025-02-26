// array and matrix ( vetores e matrizes)

// declarar um array

let array = [];
let numberarray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let textarray = ["sapato", "bola", "carro"];
let mixarray = [1, "nome", true];

// como para acessar os elementos // indice

console.log(textarray[1]); // bola
console.log(numberarray[8]) // 9

// contar elementos de array (length)

console.log(numberarray.length); // 9
console.log(textarray.length); // 3

//adicionar elementos em array

// no começo (0) - unshift

textarray.unshift("cachorro");

// no final push()

textarray.push("casa");

console.log(textarray)

// alterar o valor de uma array

 textarray[2] = "caixa";

 console.log(textarray);

 // remover elemenos array

 // do começo - shift 

textarray.shift();

console.log(textarray);

 // do meio - splice(indice, quantidade)

textarray.splice(1, 1); // carro

console.log(textarray);

 //do fim

 textarray.pop(); // casa

 console.log(textarray);

 //percorree um array

 // foreach

 numberarray.forEach(Element =>{
    console.log(Element)

 });

 // index off -- retorna o indice do elemento

console.log (mixarray.indexOf("nome"));
console.log (numberarray.indexOf(10));