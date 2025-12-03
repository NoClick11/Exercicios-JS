const grid = document.getElementById("card-grid");
let dados = [];
const input = document.getElementById("input");

async function buscarDados() {
  const url = "https://jsonplaceholder.typicode.com/todos?_limit=18";
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Erro na busca");
    }

    const data = await response.json();

    dados = data;
    console.log(dados);
    mostrarDados(dados);
  } catch (error) {
    console.error("Deu erro: ", error);
    alert("Deu erro");
  }
}

async function mostrarDados(dados) {
  grid.innerHTML = "";
  dados.forEach((card) => {
    const cards = document.createElement("div");
    cards.classList.add("card");
    const id = document.createElement("p");
    id.innerText = card.id;
    const titulo = document.createElement("h2");
    titulo.innerText = card.title;
    titulo.classList.add("titulo");
    cards.appendChild(id);
    cards.appendChild(titulo);
    grid.appendChild(cards);

    if (dados.length === 0) {
      grid.innerHTML = "<p>Nenhum resultado encontrado.</p>";
      return;
    }

    if (card.completed === true) {
      cards.classList.add("completed");
    } else {
      cards.classList.add("uncompleted");
    }
  });
}

input.addEventListener("input", async function () {
  const inputDigitado = input.value.toLowerCase();

  const dadosFiltrados = dados.filter((card) => {
    return card.title.toLowerCase().includes(inputDigitado);
  });

  mostrarDados(dadosFiltrados);
});

buscarDados();
