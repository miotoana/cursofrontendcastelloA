// introdução para o estudo de dom

// selecionar e modificar elmentos

//getelementbyid => variavel simples

let titulo = document.getElementById("titulo");
console.log(titulo);
titulo.innerText = "outro titulo"

//getelementbyclassname - vetor (array)

let descricao = document.getElementsByClassName("descricao");
console.log(descricao[0]);
descricao[1].innerText = "outro titulo";
descricao[0].style.color = "red";

//getelementtagname  vetor array

let p = document.getElementsByTagName ("p");
console.log(p[1]);
p[1].style.fontWeight = "bold"

//queryselector -> varialvel simples

let paragrafo = document.querySelector("p");
console.log(paragrafo);
paragrafo.style.fontSize = "40px";

//queryselectorall -> vetor (array)

let descricaoall = document.querySelectorAll(".descricao");
descricaoall.forEach(Element => Element.style.color = green

    //lancamentos de eventos


function mudarcorfundo(){
    let body = document.querySelector("body");
   

}


