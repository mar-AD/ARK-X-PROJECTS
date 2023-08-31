const cities = [
    { name: 'New York', lat: 40.7128, lng: -74.0060 },
    { name: 'London', lat: 51.5074, lng: -0.1278 },
    { name: 'Paris', lat: 48.8566, lng: 2.3522 },
    { name: 'Tokyo', lat: 35.6895, lng: 139.6917 },
    { name: 'Sydney', lat: -33.8651, lng: 151.2099 },
    { name: 'Rome', lat: 41.9028, lng: 12.4964 },
    { name: 'Cairo', lat: 30.0626, lng: 31.2497 },
    { name: 'Rio de Janeiro', lat: -22.9068, lng: -43.1729 },
    { name: 'Dubai', lat: 25.2048, lng: 55.2708 },
    { name: 'Rabat', lat: 34.0209, lng: -6.8416 },
    { name: 'Agadir', lat: 30.4202, lng: -9.5982 },
    { name: 'Oymyakon', lat: 63.4622, lng: 142.7949 }
];


// function selectRandomCity(cities) {
//     const randomIndex = Math.floor(Math.random() * cities.length);
//     return cities[randomIndex];
// }

const userChose = document.querySelector('#search');
const btn = document.querySelector('.btn');
const temp = document.querySelector('.cel');
const date = document.querySelector('.date');
const cityNmae = document.querySelector('#cityName');
const setuation = document.querySelector('.setuation');
const pics = document.querySelector('.righ');

// const array = [];






async function getWeather(lat , log) {
    try {
        const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${log}&current_weather=true`;
        
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        // console.log(data)
        let fixed = data.current_weather.temperature.toFixed(0)
        temp.textContent = fixed+ '°C';
        date .textContent = data.current_weather.time;
        if (fixed > 20) {
            setuation.textContent = 'Hot Day';
            pics.style.backgroundImage ="url('hot.jpg')";
        }else if(fixed <= 12){
            setuation.textContent = 'Rainy Day';
            pics.style.backgroundImage ="url('rain.jpg')"
        }else if (fixed <= 0){
            setuation.textContent = 'It Must Be Freezing';
            pics.style.backgroundImage ="url('snow.jpg')"
        }
        else {
            setuation.textContent = 'It`s A Good Day'; 
            pics.style.backgroundImage ="url('good.jpg')" 
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// getWeather();

btn.addEventListener('click', (e) => {
    e.preventDefault();
    const userCity = userChose.value;
    const selectedCity = cities.find(city => city.name === userCity); 
    if (selectedCity) {
        getWeather(selectedCity.lat, selectedCity.lng);
        cityNmae.textContent = userCity;
        // array.push(userWeather)
    }else{
        prompt('we dont have the infos of that city')
    }
    userChose.value = ' ';
});

