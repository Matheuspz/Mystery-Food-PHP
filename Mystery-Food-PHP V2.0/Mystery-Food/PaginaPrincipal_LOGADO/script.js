/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
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