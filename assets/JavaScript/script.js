// alert livro--------------------------------------------------------------------------------------------------------------------------------------------------
function openModal(title, imageSrc, summary) {
    var modal = document.getElementById("modal");
    var modalImage = document.getElementById("modal-image");
    var modalTitle = document.getElementById("modal-title");
    var modalSummary = document.getElementById("modal-summary");
    var lerLivroButton = document.getElementById("ler-livro-modal");

    modalImage.src = imageSrc;
    modalTitle.textContent = title;
    modalSummary.textContent = summary;

    modal.style.display = "block"; 

    };


function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none"; 
}

// aumentar fonte || diminuir fonte ---------------------------------------------------------------------------------------------------------------------------

var body = document.getElementsByTagName("body")[0];
var zoomMin = 1.0;
var zoomMax = 2.0;

function Mais() {
  var zoom = parseFloat(window.getComputedStyle(body).zoom) || 1;
  if (zoom < zoomMax) { 
    body.style.zoom = (zoom + 0.1 > zoomMax) ? zoomMax : zoom + 0.1;
  }
}

function Menos() {
  var zoom = parseFloat(window.getComputedStyle(body).zoom) || 1;
  if (zoom > zoomMin) {  
    body.style.zoom = (zoom - 0.1 < zoomMin) ? zoomMin : zoom - 0.1;
  }
}

// proxima pagina-----------------------------------------------------------------------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const paginasLeitura = document.querySelectorAll(".pagina-leitura");
  const btnPaginaAnterior = document.getElementById("pagina-anterior");
  const btnPaginaSeguinte = document.getElementById("pagina-seguinte");
  let paginaAtual = 0;

  // Função para mostrar a página atual e ocultar as outras
  function mostrarPagina(pagina) {
      paginasLeitura.forEach((pagina, index) => {
          if (index === paginaAtual) {
              pagina.style.display = "block";
          } else {
              pagina.style.display = "none";
          }
      });
  }

  btnPaginaAnterior.addEventListener("click", function () {
      if (paginaAtual > 0) {
          paginaAtual--;
          mostrarPagina(paginaAtual);
      }
  });

  btnPaginaSeguinte.addEventListener("click", function () {
      if (paginaAtual < paginasLeitura.length - 1) {
          paginaAtual++;
          mostrarPagina(paginaAtual);
      }
  });

  mostrarPagina(paginaAtual);
});


