const apiKey = '5b61979859aeb64dfa365daba64575aa';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');

async function checkWeather(city) {
    const responce = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await responce.json();
    console.log(data);    
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temperature').innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
});