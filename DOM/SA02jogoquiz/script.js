// DOM -> Jogo Quiz Interativo

let perguntas = [];
let proximaPergunta = 0;

//dom -> buscar elementos

let perguntaElement = document.getElementById("pergunta");
let opcoesElement = document.getElementById("opcoes");
let proximaElement = document.getElementById("proxima");
let respostaElement = document.getElementById("resposta");

//fetch para pegar as perguntas do arquivo json

fetch("pergunta.json")
    .then(Response =>Response.json())
    .then
    (data =>{
        perguntas = data;
        carregarPerguntas();
    })

    //dom => funções

    function carregarPerguntas(){}