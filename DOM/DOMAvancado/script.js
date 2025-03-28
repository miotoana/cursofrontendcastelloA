// Manipulando Html e CSS pelo JavaScript -> DOM Avançado

// vamos criar um Header -> DOM

let header = document.createElement("header");
header.style.backgroundColor = "black";
header.style.color = "aliceblue";
header.style.textAlign = "center";
header.style.height = "8vh";
header.style.width = "100%";
document.body.appendChild(header);//adicionando header -> body
document.body.style.margin = 0;

//adicionar uma NavBar no Header

let navBar = document.createElement("div");
navBar.style.display = "flex";
navBar.style.justifyContent = "space-around";
navBar.style.alignItems = "center";
navBar.style.height = "100%";
navBar.style.width = "100%";
navBar.style.fontFamily = "Comic Sans MS";
navBar.style.fontSize = "4vh";
header.appendChild(navBar); //adicionar navBar -> header

//adicionar elementos a navBar

let menuItens = ["Home", "Sobre", "Produtos", "Contato"];

menuItens.forEach(item => {
    let a = document.createElement("a");
    a.innerText = item;
    navBar.appendChild(a);
});

// fazer o footer do site

let footer = document.createElement("footer");
footer.style.backgroundColor = "black";
footer.style.color = "aliceblue";
footer.style.textAlign = "center";
footer.style.height = "5vh";
footer.style.width = "100%";
footer.style.position = "fixed";
footer.style.bottom = "0";
document.body.appendChild(footer); 

let navBarFooter = document.createElement("div");
navBarFooter.style.display = "flex";
navBarFooter.style.justifyContent = "space-between";
navBarFooter.style.fontFamily = "Comic Sans MS";
navBarFooter.style.fontSize = "3vh";
navBarFooter.style.width = "100%";
navBarFooter.style.height = "100%";
footer.appendChild(navBarFooter);

let footerItens = ["CopyRight (c) 2025", "mioto Software", "Limeira/SP"];

ffooterItens.forEach(item =>{
    let p = document.createElement("p");
    p.innerText = item;
    navBarFooter.appendChild(p);
});

// clonagem de elementos com o dom

let btnclonar = document.createElement("button");
btnclonar.innerText = "clonar";
document.body.appendChild(btnclonar);

// criar os cards

let card = document.createElement("div");
card.style.width = "150px";
card.style.height = "200px";
card.style.backgroundColor = "black";
card.style.backgroundColor = "black";
card.style.Color = "aliceblue";
card.style.margin = "10px";

// container

let containerCards = document.createElement("div");
containerCards.style.display = "flex";
containerCards.style.justifyContent = "center";
containerCards.style.flexWrap = "wrap";
containerCards.style.width = "90%";
containerCards.style.margin = ("auto");

document.body.appendChild(containerCards);

// criar a função de clonagem

btnClonar.addEventListener("click", () =>{
    let cardClone = card.cloneNode(true);
    containerCards.appendChild(cardClone);
});

// modificação de classe com classList
let checkDarkMode = document.createElement("input");
checkDarkMode.type = "checkbox";
checkDarkMode.id = "darkmode";
let divDarkMode = document.createElement("div");
divDarkMode.style.display = "flex";
divDarkMode.style.justifyContent = "center";
divDarkMode.style.top = "10px";
divDarkMode.style.right = "10px";
divDarkMode.style.position = "absolute";;
let p = document.createElement("p");
p.innerText = "dark mode";
p.style.color = "aliceblue";
divDarkMode.appendChild(p);
divDarkMode.appendChild(checkDarkMode);
document.body.appendChild(divDarkMode);

// funcionalidade do darckmode

checkDarkMode.addEventListener("change", ()=>{
    document.body.classList.toggle("darkMode");
})

// enventos avançados

 // evento de teclado

 document.addEventListener("keydown", (Event)=>{
    console.log("tecla precionada:" + Event.key)
 });

 // eventos com o teclado - input com sugestão de pesquisa

 let input = document.createElement("input");
 input.type = "text";
 input.placeholder = "digite sua pesquisa";
 input.id = "inputpesquisa";
 document.bory.appendChild(input);
 let lista = document.createElement("ul");
 lista.style.listStyle = "none";
 lista.style.padding = "0";
 lista.style.margin = "0";
 lista.id = "listaPesquisa";
 lista.id = "listaPesquisa";
 document.body.appendChild(lista);

 let listaintem = ["javaScript", "html", "css", "React", "Angular", "Vue", "Node", "npm"];

 //método para sugestão de pesquisa

 input.addEventListener("keyup", ()=>{
    lista.innerHTML = "";
    listaItens.forEach(item =>{
        let termo = input.value.toLowerCase();
        if(item.toLowerCase().includes(termo)){
            let li = document.createElement("li");
            li.innerText = item;
            lista.appendChild(li);

            //adicionar a função de clicar na palavra

            li.style.cursor = "pointer";
            li.addEventListener("click",()=>{
                input.value = item;
                lista.innerHTML = "";
            })
        }
    })
})

// fazndo verificação de formularios

let form = document.createElement("form");
form.id = "formCadastro";
let inputNome = document.createElement("input");
inputNome.type = "text";
inputNome.placeholder = "Informe o Nome";
form.appendChild(inputNome);
let inputEmail = document.createElement("input");
inputEmail.type = "email";
inputEmail.placeholder = "Informe o Email";
form.appendChild(inputEmail);
let inputSenha = document.createElement("input");
inputSenha.type = "password";
inputSenha.placeholder = "Informe a Senha";
form.appendChild(inputSenha);
let btnEnviar =  document.createElement("button");
btnEnviar.innerText = "Enviar";
btnEnviar.type = "submit";
form.appendChild(btnEnviar);
document.body.appendChild(form);

// validação do formulario

let mensagem = document.createElement("p");
document.body.appendChild(mensagem);

form.addEventListener("submit", (event) =>{
    event.preventDefault();//não deixa o submit recarregar a tela
    let nome = inputNome.value;
    let email = inputEmail.value;
    let senha = inputSenha.value;
    if(nome ==="" || email === "" || senha === ""){
        mensagem.innerText = " Todos os Campos Devem Ser Preenchidos";
        mensagem.style.color = "red";
    }else{
        mensagem.innerText = "Cadastro Realizado com Sucesso";
        mensagem.style.color = "green";
        nome  = "";
        email = "";
        senha = "";
        form.reset();
    }
});