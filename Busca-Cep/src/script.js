const button = document.getElementById("btnBuscar");
const logradouro = document.getElementById("logradouro");
const bairro = document.getElementById("bairro");
const localidade = document.getElementById("localidade");
const uf = document.getElementById("uf");

async function buscarCep() {
  const cep = document.getElementById("cep").value;
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  try {
    const response = await fetch(url);
    
    const data = await response.json(); 
    
    console.log(data); 

    if (data.erro) {
        alert("CEP não encontrado!");
        return; 
    }

    logradouro.innerText = data.logradouro;
    bairro.innerText = data.bairro;
    localidade.innerText = data.localidade;
    uf.innerText = data.uf;
    
    document.getElementById("resultado").style.display = "block";

  } catch (error) {
    console.error("Ta foda, deu erro na requisição:", error);
    alert("Erro ao buscar. Verifique o console.");
  }
}

button.addEventListener("click", async function () {
  await buscarCep();
});