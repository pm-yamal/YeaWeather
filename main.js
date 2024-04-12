const apiKey = '5b61979859aeb64dfa365daba64575aa';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city) {
    const responce = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (responce.status === 404) {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    }
    else {
        const data = await responce.json();
        console.log(data);
        document.querySelector('.weather').style.display = 'block';
        document.querySelector('.error').style.display = 'none';

        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temperature').innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = data.wind.speed + ' км/ч';
        document.querySelector('.barometer').innerHTML = data.main.pressure + ' мм.рт.ст.';
        
        if (data.weather[0].main === 'Clouds') {
            weatherIcon.src = './img/clouds.png'
        }
        else if (data.weather[0].main === 'Clear') {
            weatherIcon.src = './img/clear.png'
        }
        else if (data.weather[0].main === 'Drizzle') {
            weatherIcon.src = './img/drizzle.png'
        }
        else if (data.weather[0].main === 'Mist') {
            weatherIcon.src = './img/mist.png'
        }
        else if (data.weather[0].main === 'Rain') {
            weatherIcon.src = './img/rain.png'
        }
        else if (data.weather[0].main === 'Snow') {
            weatherIcon.src = './img/snow.png'
        }    
    }    
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
});