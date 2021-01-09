
const weatherApi = {
    key: "1b905f776feea34292859b793c205d1f",
    baseUrl: "https://api.openweathermap.org/data/2.5/", 
}







const searchInput = document.querySelector('#inputs');



// Event Listener Function on keypress
searchInput.addEventListener('keypress', setQuery);

function setQuery(evt){
  if(evt.keyCode == 13){
    getResults(searchInput.value);
    forecastResults(searchInput.value);
    console.log(searchInput.value);
  }
}
function getResults(city){
  fetch(`${weatherApi.baseUrl}weather?q=${city}&units=metric&APPID=${weatherApi.key}`)
  .then(weather => {
    return weather.json();
  }).then(displayResults);
} 












  

function displayResults (weather){
  let city = document.querySelector('.location .city');
  city.innerHTML = `${weather.name}, ${weather.sys.country}`;

  let now = new Date();
  let date = document.querySelector('.info .day');
  date.innerHTML = dateBuilder(now);
  
  let temp = document.querySelector('.info .temp');
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;

  let weather_el = document.querySelector('.location .weather');
  weather_el.innerHTML = weather.weather[0].main;

  let range = document.querySelector('.info .temp-diff');
  range.innerHTML = `${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`;
  






 


  
  if(weather_el.textContent == "Clouds"){
    document.body.style.backgroundImage = 'url("cloudy.jpeg")';
  }else if(weather_el.textContent == "Clear"){
    document.body.style.backgroundImage = 'url("clear.jpg")';
  }else if(weather_el.textContent == "Rain"){
    document.body.style.backgroundImage = 'url("rainy.jpg")';
  }else if(weather_el.textContent == "Thunderstorm"){
    document.body.style.backgroundImage = 'url("storm.jpeg")';
  }

}

function dateBuilder (d){
  let days = ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];

  let day = days[d.getDay()];
  return `${day}`;
}
