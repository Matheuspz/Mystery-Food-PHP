function mudar_pagina() {
    location.href = "../PaginaPrincipal_LOGADO/pagina_principal-user.html";
}

function Validar()
{

    var_senha = senha.value
    var_email = email.value



    if(var_senha.length != 0){
        if(var_senha.match(/123/g)){
            var_senha = true
        }
        else {
            var_senha = false
        }
    }

    if(var_email.length != 0){
        if(var_email.match(/@gmail.com/g)) {
            var_email = true
        }
        else {
            var_email = false
        }   
    }



    if (var_senha == false || var_email == false)
    {
        alert("DADOS INVALIDOS") ;
        if (var_senha == false) {
            senha.classList.remove('certo')
            senha.classList.add('errado')
        }  
        else {
            senha.classList.add('certo')
            senha.classList.remove('errado')
        }

        if (var_email == false) {
            email.classList.remove('certo')
            email.classList.add('errado')
        }
        else {
            email.classList.add('certo')
            email.classList.remove('errado')
        }
        
    }



    if (var_senha == true && var_email == true)
    {
        mudar_pagina();
    }
}


function Limpar() 
{
    document.getElementById("email").value = "";
    document.getElementById("senha").value = "";

    email.classList.remove('certo', 'errado')
    senha.classList.remove('certo', 'errado')
}