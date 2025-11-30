const post = document.getElementById("idPost");
const titulo = document.getElementById("tituloPost");
const texto = document.getElementById("textoPost");
const button = document.getElementById("btnEditar");
const msg = document.getElementById("mensagem")

async function atualizarPost(id) {
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
  
  const dados = {
    title: titulo.value,
    body: texto.value,
    userId: 1, 
    id: id 
  };

  try {
    const response = await fetch(url, {
      method: "PUT",
      
      headers: {
        "Content-Type": "application/json",
      },
      
      body: JSON.stringify(dados),
    });

    if(!response.ok) {
        throw new Error("Erro ao atualizar")
    }

    const data = await response.json()

    console.log(data)

    msg.style.display = "block"
    msg.style.backgroundColor = "#d4edda"; 
    msg.style.color = "#155724";
    msg.innerText = "Post atualizado com sucesso!"

  } catch (error) {
    console.error("Deu erro", error)
    alert("Deu erro ao atualizar.")
  }
}

button.addEventListener("click", async function () {
    const id = post.value
    if(id) {
        await atualizarPost(id);
    } else {
        alert("Digite um id")
    }
})