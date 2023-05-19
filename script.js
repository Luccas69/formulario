const formulario = document.querySelector("#formulario");
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const curso = document.querySelector("#curso");
const atendimento = document.querySelector("#atendimento");
const termos = document.querySelector("#termos");

formulario.addEventListener("submit", e => {
    e.preventDefault();
    //Imprimindo no console
    // console.log(email.value);
    // console.log(nome.value);
    
    const inscricao = {
        nome: nome.value,
        email: email.value,
        curso: curso.value,
        atendimento : atendimento.value,
        termos: termos.checked
    }
    
    console.table(inscricao);
    
    //Limpando o console
    email.value = "";
    nome.value = "";
    atendimento.value = "";
    curso.selectedIndex = 0; // Seleciona a 1ª opção da lista
    termos.checked = false;
    
    //Redirecionando o foco
    nome.focus();
});

/*botão de mensagem
const mensagem = document.querySelector("#mensagem");

mensagem.addEventListener("mouseover", e => {
    console.log("Passou o mouse no botão")
});

mensagem.addEventListener("click", e =>{
    alert("Clicou no botão!")
});
*/
