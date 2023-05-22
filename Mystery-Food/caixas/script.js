/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function Dropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/* -------------------------------------------------------------------------- */

function AbrirCarrinho() {
  var carrinho = document.getElementById("mySidenav");
  var widthAtual = carrinho.style.width;

  if (widthAtual === "0px" || widthAtual === "") {
    document.getElementById("mySidenav").style.width = "315px";
  }
  else {
    carrinho.style.width = "0";
  }
}
function FecharCarrinho() {
  document.getElementById("mySidenav").style.width = "0px";
}

/* -------------------------------------------------------------------------- */

var img_caixa = document.getElementById("foto_caixa");
var text_box = document.getElementById("texto_caixa");

function AbrirCaixa(x) {

  if(x == 1) {
    document.getElementById("foto_caixa").src = "../caixas/uma_caixa.svg";
    document.getElementById("texto_caixa").textContent = "CAIXA PEQUENA";

    document.getElementById("foto_caixa").style.width = "30%"
    document.getElementById("foto_caixa").style.height = "50%"

    document.getElementById("text_infos").textContent = "Comprimento: 0.20m \n\n Largura: 0.15m \n\n Altura: 0.10m \n\n Volume: 2250cm³"
  }
  else if(x == 2) {
    document.getElementById("foto_caixa").src = "../caixas/duas_caixa.svg";
    document.getElementById("texto_caixa").textContent = "CAIXA MÉDIA";

    document.getElementById("foto_caixa").style.width = "50%"
    document.getElementById("foto_caixa").style.height = "50%"

    document.getElementById("text_infos").textContent = "Comprimento: 0.25m \n\n Largura: 0.20m \n\n Altura: 0.10m \n\n Volume: 5000cm³"
  }
    else if(x == 3) {
      document.getElementById("foto_caixa").src = "../caixas/tres_caixa.svg";
      document.getElementById("texto_caixa").textContent = "CAIXA GRANDE";

      document.getElementById("foto_caixa").style.width = "50%"
      document.getElementById("foto_caixa").style.height = "50%"

      document.getElementById("text_infos").textContent = "Comprimento: 0.30m \n\n Largura: 0.25m \n\n Altura: 0.15m \n\n Volume: 11250m"
    }

  switch (x) {
    case (1):
      document.getElementById("Compra_caixas_pos_cima").style.display = "none";
      document.getElementById("Compra_caixas_pos_baixo").style.display = "none";
      document.getElementById("caixa_compra_exp").style.display = "inline-flex";

    case (2):
      document.getElementById("Compra_caixas_pos_cima").style.display = "none";
      document.getElementById("Compra_caixas_pos_baixo").style.display = "none";
      document.getElementById("caixa_compra_exp").style.display = "inline-flex";

    case (3):
      document.getElementById("Compra_caixas_pos_cima").style.display = "none";
      document.getElementById("Compra_caixas_pos_baixo").style.display = "none";
      document.getElementById("caixa_compra_exp").style.display = "inline-flex";
      
  }
}
function FecharCaixa() {
  document.getElementById("Compra_caixas_pos_cima").style.display = "";
  document.getElementById("Compra_caixas_pos_baixo").style.display = "";

  document.getElementById("caixa_compra_exp").style.display = "none";

  document.getElementById("foto_caixa").src = "";
  document.getElementById("texto_caixa").textContent += "";
  document.getElementById("text_infos").textContent = ""
}

function CalcularFrete() {

  var sel_main = document.getElementById("sel_main").value;

  if(sel_main == "none") {
    document.getElementById("preco_frete").innerHTML = "Preço Frete: Selecione uma cidade";
  }
  else if(sel_main == "es") {
    document.getElementById("preco_frete").innerHTML = "Preço Frete: R$ 30,00";
    var frete = 30.00;
  }
  else if(sel_main == "mg") {
    document.getElementById("preco_frete").innerHTML = "Preço Frete: R$ 25,00";
    var frete = 25.00;
  }
  else if(sel_main == "pr") {
    document.getElementById("preco_frete").innerHTML = "Preço Frete: R$ 15,00";
    var frete = 15.00;
  }
  else if(sel_main == "rs") {
    document.getElementById("preco_frete").innerHTML = "Preço Frete: R$ 10,00";
    var frete = 10.00;
  }
  else if(sel_main == "rj") {
    document.getElementById("preco_frete").innerHTML = "Preço Frete: R$ 35,00";
    var frete = 35.00;
  }
  else if(sel_main == "sc") {
    document.getElementById("preco_frete").innerHTML = "Preço Frete: R$ 5,00";
    var frete = 5.00;
  }
  else if (sel_main == "sp") {
    document.getElementById("preco_frete").innerHTML = "Preço Frete: R$ 35,00";
    var frete = 35.00;
  }
}





var preco_peq = 30
var preco_med = 50
var preco_gran = 90


if(document.getElementById("texto_caixa") == "CAIXA PEQUENA")
{
  document,getElementById(preco)
  document.getElementById("preco_final").textContent = "R$" + preco_peq+frete;
}


