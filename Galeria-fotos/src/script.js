const galeria = document.getElementById("galeria");
const button = document.getElementById("btnCarregar");

async function carregarFotos() {
  const url = "https://jsonplaceholder.typicode.com/photos?_limit=12";
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Erro ao carregar fotos");
    }

    const data = await response.json();


    data.forEach((foto) => {
      const card = document.createElement("div");
      card.classList.add("card");
      const img = document.createElement("img");
      img.src = foto.thumbnailUrl;
      const titulo = document.createElement("p");
      titulo.innerText = foto.title;

      card.appendChild(img);
      card.appendChild(titulo);
      galeria.appendChild(card);
    });

    console.log(data);
  } catch (error) {
    console.error("Deu erro", error);
    alert("Deu erro");
  }
}

button.addEventListener("click", async function () {
  carregarFotos();
});
