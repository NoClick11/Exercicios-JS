const grid = document.getElementById("grid-funcionarios");

async function buscarUsuarios() {
  const url = "https://jsonplaceholder.typicode.com/users";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Erro na busca");
    }

    const data = await response.json();

    console.log(data);

    data.forEach((user) => {
      const card = document.createElement("div");
      card.classList.add("card");
      const name = document.createElement("p");
      name.innerText = user.name;
      const email = document.createElement("p");
      email.innerText = user.email;
      const nameEmp = document.createElement("p");
      nameEmp.innerText = user.company.name;
      const button = document.createElement("button");
      button.classList.add("button");
      button.innerText = "Ver Endereço";

      button.addEventListener("click", async function () {
        const rua = user.address.street;
        const cidade = user.address.city;

        alert(`Cidade: ${cidade}\nRua: ${rua}`);
      });

      card.appendChild(name);
      card.appendChild(email);
      card.appendChild(nameEmp);
      card.appendChild(button);

      grid.appendChild(card);
    });
  } catch (error) {
    console.error("Erro:", error);
    document.getElementById("feedback").innerText = "Erro ao carregar funcionários.";
  }
}

buscarUsuarios();
