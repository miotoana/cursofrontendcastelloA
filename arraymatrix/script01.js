// metados avançados de array

let numeros = [10,20,30,40,50];

// map - percorre o array e realiza operaçoes

let numerosdobro = numeros.map(x => x*2);
console.log(numerosdobro);

//filter - percorrer o array e filtrar

let numerosfiltro = numeros.filter(x => x>25);
console.log(numerosfiltro);

//combinar filter com o map

let numfiltrodobro = numeros.filter(x => x<35).map(x => x/10);
console.log(numfiltrodobro);

//reduce - array - simples
//soma dos valores de um array

let soma = numeros.reduce((x,y) => (x+y));
console.log(soma);