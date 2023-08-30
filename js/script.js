// habilidades hover
const lista = [
  document.querySelector(".item1"),
  document.querySelector(".item2"),
  document.querySelector(".item3"),
  document.querySelector(".item4"),
  document.querySelector(".item5"),
];

function a() {
  for (let i = 0; i < lista.length; i++) {
    const item = lista[i];

    function mostrar() {
      const texto = document.querySelector(".texto" + [i + 1]);
      texto.classList.add("ativo");
      const mouse = document.querySelector(".mouse");
      mouse.classList.add("desativo");
      const habDescricao = document.querySelector(".hab-descricao");
      habDescricao.classList.remove("margin");
    }

    function remover() {
      const texto = document.querySelector(".texto" + [i + 1]);
      texto.classList.remove("ativo");
      const mouse = document.querySelector(".mouse");
      // mouse.classList.remove("desativo");
      const habDescricao = document.querySelector(".hab-descricao");
      habDescricao.classList.add("margin");
    }

    item.addEventListener("mouseover", mostrar);
    item.addEventListener("mouseout", remover);
  }
}
lista.forEach(a);

// tecnologias -> botao
const botao = document.querySelector(".tecnologias");

function ativarBotao() {
  const elementos = document.querySelector(".hab-descricao");
  elementos.classList.toggle("none");
  const elementos2 = document.querySelector(".hab-descricao-2");
  elementos2.classList.toggle("none");

  botao.classList.toggle("inverter");
}

botao.addEventListener("click", ativarBotao);

// texto de habilidades -> tecnologias
if (screen.width <= 800) {
  let mouse = document.querySelector(".mouse");
  mouse.textContent = "Aperte nos ícones para ler a descrição.";
}
