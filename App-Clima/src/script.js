const button = document.getElementById("btnBuscar");
const errorContainer = document.querySelector(".error");
const climaTela = document.getElementById("weatherData")
const meuInput = document.getElementById("cidadeInput");
const temperatura = document.getElementById("temperatura");
const cidadeTela = document.getElementById("cidade");
const umidade = document.getElementById("umidade");
const vento = document.getElementById("vento");
const imagemIcone = document.getElementById("icone");

async function buscarCidade(cidade) {
  try {
    const key = "aa375eb6a8818ce0c678830c3fa5c2e2";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${key}&lang=pt_br`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Cidade não encontrada");
    }

    const data = await response.json();

    console.log(data);

    mostrarDadosTela(data);
  } catch (error) {
    errorContainer.style.display = "block";
    climaTela.style.display = "none";
    console.error("Deu erro", error);
  }
}

async function mostrarDadosTela(data) {

  errorContainer.style.display = "none"
  climaTela.style.display = "block"
  umidade.innerText = data.main.humidity
  cidadeTela.innerText = data.name
  temperatura.innerText = Math.floor(data.main.temp);
  vento.innerText = data.wind.speed
  imagemIcone.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
}

button.addEventListener("click", async function () {
  const cidade = meuInput.value;

  if (cidade) {
    await buscarCidade(cidade);
  }
});

meuInput.addEventListener("keydown", async function(event) {
    if (event.key === "Enter") {
        const cidade = meuInput.value;
        if (cidade) {
            await buscarCidade(cidade);
        }
    }
});
