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
    imagem: "assets/imagens/Banana 1/1.jpg"
    
  },

  {
    nome: livroPincipal,
    nomeCompleto: "Diário de um banana A gota d'agua",
    variacao: "A gota d'agua",
    imagem: "assets/imagens/Banana 2/2.jpg"


  },

  {
    nome: livroPincipal,
    nomeCompleto: "Diário de um banana Dias de cão",
    variacao: "Dias de cão",
    imagem: "assets/imagens/Banana 3/3_.jpg"

  },

  {
    nome: livroPincipal,
    nomeCompleto: "Diário de um banana A verdade nua e crua",
    variacao: "A verdade nua e crua",
    imagem: "assets/imagens/Banana 4/4.jpg"


  },

  {
    nome: livroPincipal,
    nomeCompleto: "Diário de um banana Casa dos horores",
    variacao: "Casa dos horores",
    imagem: "assets/imagens/Banana 5/5.jpg"


  },

  {
    nome: livroPincipal,
    nomeCompleto: "Diário de um banana Segurando vela",
    variacao: "Segurando vela", 
    imagem: "assets/imagens/Banana 6/6.jpg"
    

  },

  {
    nome: livroPincipal,
    nomeCompleto: "Diário de um banana Maré de azar",
    variacao: "Maré de azar",
    imagem: "assets/imagens/Banana 7/7_.jpg"


  },

  {
    nome: livroPincipal,
    nomeCompleto: "Diário de um banana Caindo na estrada",
    variacao: "Caindo na estrada",
    imagem: "assets/imagens/Banana 8/8.jpg"


  },

  {
    nome: livroPincipal,
    nomeCompleto: "Diário de um banana Bons tempos",
    variacao: "Bons tempos",
    imagem: "assets/imagens/Banana 9/9.jpg"


  },

  // {
  //   nome: livroPincipal,
  //   nomeCompleto: "Diário de um banana Vai ou racha",
  //   variacao: "Vai ou racha",
  //   imagem: "assets/imagens/Banana 1/1.jpg"


  // },

  // {
  //   nome: livroPincipal,
  //   nomeCompleto: "Diário de um banana Apertem os Cintos",
  //   variacao: "Apertem os Cintos",
  //   imagem: "assets/imagens/Banana 1/1.jpg"


  // },

  // {
  //   nome: livroPincipal,
  //   nomeCompleto: "Diário de um banana Batalha Neval",
  //   variacao: "Batalha Neval",
  //   imagem: "assets/imagens/Banana 1/1.jpg"


  // },

  // {
  //   nome: livroPincipal,
  //   nomeCompleto: "Diário de um banana Quebra Tudo",
  //   variacao: "Quebra Tudo",
  //   imagem: "assets/imagens/Banana 1/1.jpg"


  // },

  // {
  //   nome: livroPincipal,
  //   nomeCompleto: "Diário de um banana Vai Fundo",
  //   variacao: "Vai Fundo", 
  //   imagem: "assets/imagens/Banana 1/1.jpg"


  // },

  // {
  //   nome: livroPincipal,
  //   nomeCompleto: "Diário de um banana Bola Fora",
  //   variacao: "Bola Fora",
  //   imagem: "assets/imagens/Banana 1/1.jpg"


  // },

  // {
  //   nome: livroPincipal,
  //   nomeCompleto: "Diário de um banana Fräwda Megaxeia",
  //   variacao: "Fräwda Megaxeia",
  //   imagem: "assets/imagens/Banana 1/1.jpg"


  // },

  // {
  //   nome: livroPincipal,
  //   nomeCompleto: "Diário de um banana Cabeça Oca",
  //   variacao: "Cabeça Oca",
  //   imagem: "assets/imagens/Banana 1/1.jpg"


  // },

];

function mostrarResultados() {
  const pesquisa = document.getElementById("pesquisar").value.toLowerCase();
  const suggestions = document.getElementById("suggestions");
  const modalResultados = document.getElementById("modal-resultados");
  modalResultados.innerHTML = "";

  if (pesquisa.length > 0) {
    const resultadosFiltrados = livros.filter(livro =>
      livro.nome.toLowerCase().includes(pesquisa) ||
      livro.variacao.toLowerCase().includes(pesquisa) ||
      livro.nomeCompleto.toLowerCase().includes(pesquisa)
    );

    modalResultados.innerHTML = ""; // Limpa os resultados anteriores

    resultadosFiltrados.forEach(livro => {
      const li = document.createElement("li");
      li.innerHTML = `<img src="${livro.imagem}" alt="Imagem do livro"> ${livro.nomeCompleto}`;
      li.onclick = () => {
        document.getElementById("pesquisar").value = livro.nomeCompleto;
        suggestions.style.display = "none";
      };
      modalResultados.appendChild(li);
    });

    if (resultadosFiltrados.length === 0) {
      modalResultados.innerHTML = "<li>Não encontrado...</li>";
    }

    suggestions.style.display = "block";
  } else {
    suggestions.style.display = "none";
  }
}

function fecharModal() {
  document.getElementById("suggestions").style.display = "none";
}

function Filtra() {
  const pesquisa = document.getElementById("pesquisar").value.toLowerCase();
  let resultado = false;

  for (let i = 0; i < livros.length; i++) {
    const nomeMinusculo = livros[i].nome.toLowerCase();
    const variacaoMunusculo = livros[i].variacao.toLowerCase();
    const nomeCompleto = livros[i].nomeCompleto.toLowerCase();

    if (nomeMinusculo.includes(pesquisa) || variacaoMunusculo.includes(pesquisa) || nomeCompleto.includes(pesquisa)) {
      resultado = true;
      break;
    }
  }

  if (resultado) {
    document.querySelector("#resultado").innerHTML = "Disponível " + pesquisa;
  } else {
    document.querySelector("#resultado").innerHTML = "Não encontrado...";
  }
}

// Fechar o modal se clicar fora dele
window.onclick = function(event) {
  const suggestions = document.getElementById("suggestions");
  if (event.target != suggestions && event.target != document.getElementById("pesquisar")) {
    suggestions.style.display = "none";
  }
}

// troca temas-----------------------------------------------------------------------------------------------------------------------
function trocarTema(tema) {
  document.body.className = '';

  if (tema) {
    document.body.classList.add(tema);
  }
}
