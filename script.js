const container = document.querySelector('.container');
const search = document.querySelector('.search-bar button');
const weathercontainer = document.querySelector('.weather-container');

search.addEventListener('click', () => {
    const APIKey = '93923368bbb5c3fc23fa3dfbf45cc690';
    const city = document.querySelector('.search-bar input').value;

    if (city === "") return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(json => {
            const image = document.querySelector('.weather-container img');
            const cloud = document.querySelector('.weather-container .cloud');
            const cloudysky = document.querySelector('.weather-container .cloudysky');

            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = 'images/clear.png';
                    break;
                case 'Rain':
                    image.src = 'images/rain.png';
                    break;
                case 'Clouds':
                    image.src = 'images/cloud.png';
                    break;
                case 'Mist':
                    image.src = 'images/mist.png';
                    break;
                case 'Snow':
                    image.src = 'images/snow.png';
                    break;
                default:
                    image.src = 'images/clouds.png';
                    break;
            }
            cloud.innerHTML = `${parseInt(json.main.temp - 273.15)}°C`;
            cloudysky.innerHTML = `${json.weather[0].description}`;
        })
});
