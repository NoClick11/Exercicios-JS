let usuarios = [];
const lista = document.getElementById("listaUsuarios");
const inputBusca = document.getElementById("inputBusca");

async function buscarDados() {
  const url = "https://jsonplaceholder.typicode.com/users";
  try {
    const response = await fetch(url);

    if(!response.ok) {
        throw new Error("Erro na busca")
    }

    const data = await response.json();

    usuarios = data;

    renderizarUsuarios(usuarios);
  } catch (error) {
    console.error("Erro na busca", error)
    alert("Deu erro")
  }
}

async function renderizarUsuarios(usuarios) {
  lista.innerHTML = "";
  usuarios.forEach((usuario) => {
    const dados = document.createElement("li");
    const nome = usuario.name;
    const email = usuario.email;
    dados.innerText = `Nome:${nome} Email:${email}`;

    lista.appendChild(dados);
  });
}

inputBusca.addEventListener("input", async function () {
  const buscaDigitada = inputBusca.value.toLowerCase();

  const listaFiltrada = usuarios.filter((usuario) => {
    return usuario.name.toLowerCase().includes(buscaDigitada);
  });

  renderizarUsuarios(listaFiltrada);
});

buscarDados();
