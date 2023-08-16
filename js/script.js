// classe do "botao": hab-descricao-item, item1, item2...
// classe do texto: texto, texto1, texto2...

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

// const item1 = document.querySelector(".item1");
// const item2 = document.querySelector(".item2");
// const item3 = document.querySelector(".item3");
// const item4 = document.querySelector(".item4");
// const item5 = document.querySelector(".item5");

// item1
// function mostrar1() {
//   const texto1 = document.querySelector(".texto1");
//   texto1.classList.add("ativo");
//   const mouse = document.querySelector(".mouse");
//   mouse.classList.add("desativo");
// }

// function remover1() {
//   const texto1 = document.querySelector(".texto1");
//   texto1.classList.remove("ativo");
//   const mouse = document.querySelector(".mouse");
//   mouse.classList.remove("desativo");
// }

// item1.addEventListener("mouseover", mostrar1);
// item1.addEventListener("mouseout", remover1);

// item2
// function mostrar2() {
//   const texto2 = document.querySelector(".texto2");
//   texto2.classList.add("ativo");
//   const mouse = document.querySelector(".mouse");
//   mouse.classList.add("desativo");
// }

// function remover2() {
//   const texto2 = document.querySelector(".texto2");
//   texto2.classList.remove("ativo");
//   const mouse = document.querySelector(".mouse");
//   mouse.classList.remove("desativo");
// }

// item2.addEventListener("mouseover", mostrar2);
// item2.addEventListener("mouseout", remover2);

// item1
// function mostrar1() {
//   const texto1 = document.querySelector(".texto1");
//   texto1.classList.add("ativo");
//   const mouse = document.querySelector(".mouse");
//   mouse.classList.add("desativo");
// }

// function remover1() {
//   const texto1 = document.querySelector(".texto1");
//   texto1.classList.remove("ativo");
//   const mouse = document.querySelector(".mouse");
//   mouse.classList.remove("desativo");
// }

// item1.addEventListener("mouseover", mostrar1);
// item1.addEventListener("mouseout", remover1);
