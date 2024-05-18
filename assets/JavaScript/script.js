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
    // modal.style.display = "none"; 
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

// Pagination ------------------------------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
  const pages = document.querySelectorAll('.pagination .page');
  
  // Adiciona a classe 'active' à página 1 inicialmente
  pages[0].classList.add('active');

  pages.forEach(page => {
      page.addEventListener('click', function (event) {
          event.preventDefault();

          // Remove 'active' class from all pages
          pages.forEach(p => p.classList.remove('active'));
          
          // Add 'active' class to the clicked page
          this.classList.add('active');
      });
  });
});


// filtro pesquisa-------------------------------------------------------------------------------------------------------- 
const livroPincipal = "Diário de um banana";
const livros = [
  {
    nome: livroPincipal,
    nomeCompleto: "Diário de um banana Rodrick é o cara",
    variacao: "Rodrick é o cara",
  },
  {
    nome: livroPincipal,
    nomeCompleto: "Diário de um banana A gota d'agua",
    variacao: "A gota d'agua",
  },
  {
    nome: livroPincipal,
    nomeCompleto: "Diário de um banana Dias de cão",
    variacao: "Dias de cão",
  },
  {
    nome: livroPincipal,
    nomeCompleto: "Diário de um banana A verdade nua e crua",
    variacao: "A verdade nua e crua",
  },
  {
    nome: livroPincipal,
    nomeCompleto: "Diário de um banana Casa dos horores",
    variacao: "Casa dos horores",
  },
  {
    nome: livroPincipal,
    nomeCompleto: "Diário de um banana Segurando vela",
    variacao: "Segurando vela",
  },
  {
    nome: livroPincipal,
    nomeCompleto: "Diário de um banana Maré de azar",
    variacao: "Maré de azar",
  },
  {
    nome: livroPincipal,
    nomeCompleto: "Diário de um banana Caindo na estrada",
    variacao: "Caindo na estrada",
  },
  {
    nome: livroPincipal,
    nomeCompleto: "Diário de um banana Bons tempos",
    variacao: "Bons tempos",
  },
  {
    nome: livroPincipal,
    nomeCompleto: "Diário de um banana Vai ou racha",
    variacao: "Vai ou racha",
  },
  {
    nome: livroPincipal,
    nomeCompleto: "Diário de um banana Apertem os Cintos",
    variacao: "Apertem os Cintos",
  },
  {
    nome: livroPincipal,
    nomeCompleto: "Diário de um banana Batalha Neval",
    variacao: "Batalha Neval",
  },
  {
    nome: livroPincipal,
    nomeCompleto: "Diário de um banana Quebra Tudo",
    variacao: "Quebra Tudo",
  },
  {
    nome: livroPincipal,
    nomeCompleto: "Diário de um banana Vai Fundo",
    variacao: "Vai Fundo",
  },
  {
    nome: livroPincipal,
    nomeCompleto: "Diário de um banana Bola Fora",
    variacao: "Bola Fora",
  },
  {
    nome: livroPincipal,
    nomeCompleto: "Diário de um banana Fräwda Megaxeia",
    variacao: "Fräwda Megaxeia",
  },
  {
    nome: livroPincipal,
    nomeCompleto: "Diário de um banana Cabeça Oca",
    variacao: "Cabeça Oca",
  },
];

function Filtra() {
  const pesquisa = document.getElementById("pesquisar").value.toLowerCase()
  let resultado = false;

  for (let i = 0; i < livros.length; i++) {

    const nomeMinusculo = livros[i].nome.toLowerCase()
    const variacaoMunusculo = livros[i].variacao.toLowerCase()
    const nomeCompleto = livros[i].nomeCompleto.toLowerCase()

    console.log(pesquisa)

    if (nomeMinusculo.includes(pesquisa) || variacaoMunusculo.includes(pesquisa) || nomeCompleto.includes(pesquisa)) {
      resultado = true;
      break;
    }
  }

  if (resultado) {
    document.querySelector("#resultado").innerHTML = "Disponível " + pesquisa;
  } else {
    document.querySelector("#resultado").innerHTML = "Não encontrado Sory...";
  }
}