// funcoes de texto (string)

let texto = "aula de java script";

// contar os carecteres ( lenght)

console.log(texto.length); 18

// maiuscula e minusculas

console.log(texto.toUpperCase()); //maiusculas
console.log(texto.toLowerCase()); // minuscula

// partes do texto

//subtring (inicio e fim)

console.log(texto.substring(0,4)); // aula

// slice (quantidade)
 console.log(texto.slice(-10)) // java script

 // subistituir parte do texto

 console.log(texto.replace("java", "type"));

 //tesoura (trim) - somente começo e fim da palavra

 let texto1 = "  javascript  ";
 console.log(texto1); //"  javascript  "
 console.log(texto1.trim());

 //separar texto (split) caracter comum

 let linguagens = "javascript, python, php, java, c#";
 let vetorlinguagens = linguagens.split(", ");

 console.log(linguagens);
 console.log(vetorlinguagens);

 // desafio

 let caracter = "bom dia com muita alegria"

 let caractersemespeco = caracter (" ","");

 console.log(caracter);
 console.log(caracter.length);
 console.log(caractersemespaco);
 console.log(caractersemespaco.length);