function Validar()
{
    expressao_cpf = /^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$/g ;
    expressao_telefone = /^\([0-9]{2}\) [0-9] [0-9]{4}-[0-9]{4}$/g ;
    
    texto_cpf = cpf.value
    texto_telefone = telefone.value
    
    var_senha = document.getElementById("senha").value
    var_conf_senha = document.getElementById("conf_senha").value

    resposta_cpf = expressao_cpf.test(texto_cpf)
    resposta_telefone = expressao_telefone.test(texto_telefone)

    if(var_senha.length != 0){
        if(var_senha == var_conf_senha){
            senha_confirmada = true
        }
        else {
            senha_confirmada = false
        }
    }

    if (resposta_cpf == false || resposta_telefone == false || senha_confirmada == false)
    {
        alert("DADOS INVALIDOS") ;

        if (resposta_cpf == false) {
            cpf.classList.remove('certo')
            cpf.classList.add('errado')
        }
        if (resposta_telefone == false) {
            telefone.classList.remove('certo')
            telefone.classList.add('errado')
        }
        if (senha_confirmada == false) {
            conf_senha.classList.remove('certo')
            conf_senha.classList.add('errado')
        }   
    }

    if (resposta_cpf == true || resposta_telefone == true || senha_confirmada == true)
    {
        if (resposta_cpf == true) {
            cpf.classList.remove('errado')
            cpf.classList.add('certo')
        }
        if (resposta_telefone == true) {
            cpf.classList.remove('errado')
            telefone.classList.add('certo')
        }
        if (senha_confirmada == true) {
            conf_senha.classList.remove('errado')
            conf_senha.classList.add('certo')
        }  
        if (senha_confirmada == true) {
            senha.classList.remove('errado')
            senha.classList.add('certo')
        }  
        
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