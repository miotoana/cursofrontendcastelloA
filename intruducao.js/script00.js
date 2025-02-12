// declaração de varialvel e constante

let nome = "João";
// let = nome "pedro" erro, umas vez declarada não pode alterar

var idade = 25;
const PI = 3.1415;
let teste = true; //boolean
var x = null; //null
var y = // undefined 

console.log ("nome: "+nome);
console.log ("idade: "+idade);
console.log ("PI: "+PI);
console.log ("teste: "+teste);
console.log ("undefined : "+y);
console.log ("null : "+x);

//-------------//-----------//--------------//-----------------//-----------//-------------------

// tipos de operadoras

//operadores ariteticos

var a = 10;
var b = 3;
console.log("soma: "+(a+b)); //13
console.log("sub: "+(a-b)); //7
console.log("mult: "+(a*b)); //30
console.log("div: "+(a/b)); //3.333
console.log("resto: "+(a%b)); //1

// operadores relacionais (>,<,>=,<=,==,===)

var a = 10; // var numeric
var b = 20; // var numeric
var c = "10"; // var string

console.log ("a>b: "+(a>b)); //comparação maior
console.log ("a==c: "+(a==c)); //igualdade simples
console.log ("a===c: "+(a===c)); //igualdade estrita
 
// operadores logicos (&& - E, || - OU, ! - não)
var nota1 = 5;
var nota2 = 8;

console.log("aprovação: "+ (nota1>7 && nota2>7)); //false
console.log("aprovação: "+ (nota1>7 || nota2>7)); //true
console.log(!true); // false   