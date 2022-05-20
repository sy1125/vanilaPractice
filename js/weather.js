const API_KEY = "3e10983e20b6f44ec5d21685ac96740b";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}degree`;
  });
}
function onGeoError() {
  console.log("Can`t find your position");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);