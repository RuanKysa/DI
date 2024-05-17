
var body = document.getElementsByTagName("body")[0];// seleciona o primeiro e unico body do html para aplicar 
var zoomMin = 1.0;
var zoomMax = 2.0;

function Mais() {
  var zoom = parseFloat(window.getComputedStyle(body).zoom) || 1;// pega todos os estilos aplicado a variavel valorBody que recebe o 
  if (zoom < zoomMax) { // se zoom for menor que o valor de zoomMax, pode dar aumentar o zoom ate 2.0, mais que isso não diminui
    body.style.zoom = (zoom + 0.1 > zoomMax) ? zoomMax : zoom + 0.1;
  }
}

function Menos() {
  var zoom = parseFloat(window.getComputedStyle(body).zoom) || 1;
  if (zoom > zoomMin) {   // se zoom for maior que o valor de zoomMin, pode dar diminuir o zoom ate 0.5, menos que isso não diminui
    body.style.zoom = (zoom - 0.1 < zoomMin) ? zoomMin : zoom - 0.1;
  }
}