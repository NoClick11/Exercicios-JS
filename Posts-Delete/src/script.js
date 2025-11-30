const post = document.getElementById("idPost");
const button = document.getElementById("btnDeletar");
const statusPost = document.getElementById("status");

async function deletarPost(id) {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`
    
    try {
        const response = await fetch(url, {
            method: "DELETE",
        })

        if (!response.ok) {
            throw new Error("Erro ao deletar")
        }

        statusPost.style.display = "block"
        statusPost.innerText = `Post ${id} deletado com sucesso!`
        statusPost.style.backgroundColor = "#d4edda"
        statusPost.style.color = "#155724"
        
        post.value = ""

    } catch (error) {
        console.error(error)
        alert("Não foi possível deletar.")
    }
}

button.addEventListener("click", async function () {
  const id = post.value;
  if (id) {
    await deletarPost(id);
  } else {
    alert("Digite um id");
  }
});
