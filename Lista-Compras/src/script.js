const listaUl = document.getElementById("lista-compras");
const botoes = document.getElementById("container-botoes");

const produtos = ["Arroz", "Feijão", "Batata", "Macarrão", "Carne"];
const marcas = ["Samsung", "Apple", "Xiaomi", "LG"];

produtos.forEach((produto) => {
  const novoItem = document.createElement("li");

  novoItem.innerText = produto;

  listaUl.appendChild(novoItem);
});

marcas.forEach((marca) => {
  const novaMarca = document.createElement("button");

  novaMarca.innerText = marca;

  botoes.appendChild(novaMarca);
});
