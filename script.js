var input = document.querySelector("input");
var search = document.querySelector(".fa-magnifying-glass-location");
var weatherIcon = document.querySelector(".weather-icon img");
var weatherIconn = document.querySelector(".weather-icon");
var tempData = document.querySelector(".temp-data");
var windData = document.querySelector(".wind-data");
var city = document.querySelector(".city_name");
var temp = document.querySelector(".temp");
var wind = document.querySelector(".wind");
var description = document.querySelector(".description")

search.addEventListener("click", function () {
  var cityName = input.value;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=e253dc49f7b0804734aaa42db709e17b`
  )
    .then((res) => res.json())
    .then((json) => {
      weatherIcon.style.display = "block";
      weatherIconn.style.opacity = "1";
      document.querySelector(".container").classList.add("activeContainer");

      if ((json.cod = "404")) {
        city.innerText = "Are you sure you are from this world?";
        weatherIcon.src = "giphy.gif";
        tempData.style.display = "none";
        windData.style.display = "none";
        description.style.display = "none";
      }

      switch (json.weather[0].main) {
        case "Clear":
          weatherIcon.src = "sun.png";
          break;

        case "Rain":
          weatherIcon.src = "rain.png";
          break;

        case "Snow":
          weatherIcon.src = "snow.png";
          break;

        case "Clouds":
          weatherIcon.src = "clouds.png";
          break;

        case "Haze":
          weatherIcon.src = "haze.png";
          break;

        default:
          weatherIcon.src = "./thinking.png";
      }

      tempData.style.display = "flex";
      windData.style.display = "flex";
      description.style.display = "flex";

      temp.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
      wind.innerHTML = `${parseInt(json.wind.speed)}<span>Km/s</span>`;

      description.innerHTML = json.weather[0].main;
      city.innerText = json.name;
    });
});