//Get elements
let searchBox = document.querySelector("#city");
let searchBTN = document.querySelector(".search");
let mainTemp = document.querySelector(".main-temp");
let minTemp = document.querySelector(".min");
let maxTemp = document.querySelector(".max");
let city = document.querySelector(".city");
let unit = document.querySelector(".unit");
let weatherIcon = document.querySelector(".weather-icon i");
let cels = document.querySelector(".cels");
let fahr = document.querySelector(".fahr");
let temperature;

const getCity = (e) => {
  e.preventDefault();
  city.innerText = searchBox.value;
  temperature = randomTemp(40);
  mainTemp.innerText = temperature;
  const minTempValue = Math.max(0, temperature - 5);
  const maxTempValue = temperature + 5;
  minTemp.innerText = minTempValue.toFixed(0);
  maxTemp.innerText = maxTempValue.toFixed(0);
  updateTemperatureUnit(); // Add this line to update temperature unit
  updateWeatherIcon(); // Add this line to update weather icon
};

const randomTemp = (max) => {
  return Math.floor(Math.random() * (max + 1));
};

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function updateTemperatureUnit() {
  if (unit.innerText === "°C") {
    mainTemp.innerText = temperature;
  } else {
    mainTemp.innerText = celsiusToFahrenheit(temperature);
  }
}

function updateWeatherIcon() {
  if (mainTemp.innerText >= 15) {
    weatherIcon.classList.add("fa-sun");
    weatherIcon.style.color = "#ffcc33";
  } else {
    weatherIcon.classList.remove("fa-sun");
    weatherIcon.style.color = "#8fe0ff";
  }
}

cels.addEventListener("click", () => {
  unit.innerText = "°C";
  updateTemperatureUnit();
  updateWeatherIcon();
});

fahr.addEventListener("click", () => {
  unit.innerText = "°F";
  updateTemperatureUnit();
  updateWeatherIcon();
});

searchBTN.addEventListener("click", getCity);
