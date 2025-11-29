const cotacao = document.getElementById("cotacao");
const valorMoeda = document.getElementById("valorDolar");
const button = document.getElementById("btnConverter");
const resultadoArea = document.getElementById("resultadoArea");

async function converterMoeda() {
  const meuInput = document.getElementById("valorReal");
  const url = "https://economia.awesomeapi.com.br/last/USD-BRL";

  try {
    const reponse = await fetch(url);

    if (!reponse.ok) {
      throw new Error("Erro na conversão");
    }

    const data = await reponse.json();

    const valorDigitado = parseFloat(meuInput.value)
    const valorDolar = parseFloat(data.USDBRL.bid);
    const totalDolares = valorDigitado / valorDolar;

    resultadoArea.style.display = "block";
    cotacao.innerText = valorDolar.toFixed(2);
    valorMoeda.innerText = totalDolares.toFixed(2);
  } catch (error) {
    console.error("Ta foda, deu erro na requisição:", error);
    alert("Erro ao buscar. Verifique o console.");
  }
}

button.addEventListener("click", async function () {
  await converterMoeda();
});
