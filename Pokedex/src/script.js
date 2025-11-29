const meuInput = document.getElementById("pokeInput")
const button = document.getElementById("btnBuscar");
const img = document.getElementById("pokeImg");
const name = document.getElementById("pokeName");

async function buscarPokemon() {
  const pokemonDigitado = meuInput.value.toLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonDigitado}`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Não encontrado");
    }

    const data = await response.json();

    img.src = data.sprites.front_default;
    name.innerText = data.name;
  } catch (error) {
    console.error("Ta foda, deu erro na requisição:", error);
    alert("Erro ao buscar. Verifique o console.");
  }
}

button.addEventListener("click", async function () {
  await buscarPokemon();
});

meuInput.addEventListener("keydown", async function (event) {
    if (event.key === "Enter") {
        await buscarPokemon();
    }
});
