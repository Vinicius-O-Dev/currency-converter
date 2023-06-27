const button = document.getElementById("convert-button");
const select = document.getElementById("currency-select");

const dolar = 5.2;
const euro = 5.3;

const convertValues = () => {
  const input = document.getElementById("input-real").value;
  const realValueText = document.getElementById("real-value-text");
  const currencyValueText = document.getElementById("currency-value-text");

  realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(input);

  if (select.value == "US$ Dolar Americano") {
    currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(input / dolar);
  }

  if (select.value == "€ Euro Europeu") {
    currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(input / euro);
  }
};

const changeCurrency = () => {
  const currencyName = document.getElementById("currency-name");
  const currencyImage = document.getElementById("currency-image");

  if (select.value == "€ Euro Europeu") {
    currencyName.innerHTML = "Euro";
    currencyImage.src = "./assets/Euro.png";
  }

  if (select.value == "US$ Dolar Americano") {
    currencyName.innerHTML = "Dolar Americano";
    currencyImage.src = "./assets/USA.png";
  }
  convertValues();
};

button.addEventListener("click", convertValues);
select.addEventListener("change", changeCurrency);
