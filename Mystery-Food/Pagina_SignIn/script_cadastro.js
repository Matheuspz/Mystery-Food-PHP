function Validar()
{   
    expressao_e_mail = /^[a-z]+@gmail.com$/g;
    expressao_cpf = /^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$/g ;
    expressao_telefone = /^\([0-9]{2}\) [0-9] [0-9]{4}-[0-9]{4}$/g ;
    
    texto_cpf = cpf.value;
    texto_telefone = telefone.value;

    resposta_cpf = expressao_cpf.test(texto_cpf);
    resposta_telefone = expressao_telefone.test(texto_telefone);
}


var_senha = document.getElementById("senha");
var_conf_senha = document.getElementById("conf_senha");

function validarSenha() {
  if(senha.value != conf_senha.value) {
    conf_senha.classList.add('errado');
    conf_senha.classList.remove('certo');
  }
  else {
    conf_senha.classList.add('certo');
    conf_senha.classList.remove('errado');
  }
}


function Limpar() 
{
    document.getElementById("cpf").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("e-mail").value = "";
    document.getElementById("senha").value = "";
    document.getElementById("conf_senha").value = "";

    cpf.classList.remove('certo', 'errado')
    telefone.classList.remove('certo', 'errado')
    conf_senha.classList.remove('certo', 'errado') 
    senha.classList.remove('certo', 'errado')     
}