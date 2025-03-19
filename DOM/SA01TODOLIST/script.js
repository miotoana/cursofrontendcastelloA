// contruir a aplicação do todolist -> DOM (html/css)

//style do body

document.body.style.backgroundColor = "lightgray";
document.body.style.margin = "0";
document.body.style.textAlign ="center";
document.body.style.fontFamily = "Arial";

//style do conteiner

let container = document.querySelector(".container"); // varialvel simples
container.style.width = "50%";
container.style.backgroundColor = "aliceblue";
container.style.margin = "auto";
container.style.padding = "30px";
container.style.borderadius = "15px";

//logica do funcionamento da lista de tarefas

let tarefa = document.getElementById("tarefa") //pega as informações do input tarefa

document.getElementById("btnEnviar") .addEventListener(
    "click", criartarefa
); //ouvinte para o botão

function criartarefa(){ // criar ação apos aperta o botão
    let Texto = tarefa.value.trim();
    if(Texto ==="") return; //interrompe a function //

    // criar item da lista

    let li = document.createElement("li");
    li.innerHTML = Texto+'<button class="btnRemover" onclick="Removertarefa(this)">Remover</button';

    //adicionara tarefa na lsita de tarefa

    let ul = document.getElementById("listatarefas");
    ul.appendChild(li);

    tarefa.value = "";
}

// botão remover 

function Removertarefa(botao){
    botao.parentElement.remove();
    
}