// desafio 1 - verificar idade

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function verificarIdade(idade) {
    if (idade < 18) {
        return "Menor de idade";
    } else if (idade >= 18 && idade < 60) {
        return "Adulto";
    } else {
        return "Idoso";
    }
}

rl.question('Digite sua idade: ', (idade) => {
    const classificacao = verificarIdade(parseInt(idade));
    console.log(`Você é: ${classificacao}`);
    rl.close();
});


// desafio 2 - tabuada

var numero = 5;
for(let i = 0; i<=20; i++){
    console.log(numero+" x "+i+" = "+(numero*i));
}

//desafio 3 - numeros pares

for(let i = 1; i<=20; i++){
    if(i%2==0){
        console.log("N°"+i+" é par" )
    }
}