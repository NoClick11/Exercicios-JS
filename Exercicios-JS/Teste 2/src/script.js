const grid = document.getElementById("grid");

async function mostrarFotos() {
  const url = "https://randomuser.me/api/?results=12";
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Falha na busca", error);
    }

    const data = await response.json();

    const array = data.results;

    array.forEach((foto) => {
      const card = document.createElement("div");
      card.classList.add("card");
      const firstName = foto.name.first;
      const lastName = foto.name.last;

      const imagem = document.createElement("img");
      imagem.src = foto.picture.large;
      imagem.alt = "Foto Usuário"
      const local = document.createElement("p");
      local.classList.add("local")
      local.innerText = foto.location.city;
      const nome = document.createElement("p");
      nome.classList.add("nome")
      nome.innerText = `${firstName} ${lastName}`;

      card.appendChild(imagem);
      card.appendChild(local);
      card.appendChild(nome);

      grid.appendChild(card)
    });

    console.log(data);
  } catch (error) {
    console.error("Deu erro", error);
    alert("Deu erro");
  }
}

mostrarFotos();
