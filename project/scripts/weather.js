const apiKey = 'f99f8b1a5d207be321d582715d95df12';
const lat = 49.69;
const lon = -112.83;
const weatherInfo = document.getElementById('weather-info');
const loadWeatherButton = document.getElementById('load-weather');

async function getWeather() {
    try {
        console.log(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        weatherInfo.innerHTML = '<p>Error fetching weather data.</p>';
    }
}

function displayWeather(data) {
    const weatherDataContainer = document.getElementById('weather-data');
    weatherDataContainer.innerHTML = ''; // Clear previous data

    const dailyWeather = {};

    // Group weather data by date
    data.list.forEach(entry => {
        const date = new Date(entry.dt * 1000);
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-US', options); // Formatted date

        if (!dailyWeather[formattedDate]) {
            dailyWeather[formattedDate] = {
                temp: entry.main.temp,
                conditions: entry.weather[0].description,
                windSpeed: entry.wind.speed,
                humidity: entry.main.humidity,
                count: 1 // Count entries for averaging if needed
            };
        } else {
            dailyWeather[formattedDate].temp += entry.main.temp;
            dailyWeather[formattedDate].count += 1;
            dailyWeather[formattedDate].windSpeed += entry.wind.speed; // Accumulate wind speed
            dailyWeather[formattedDate].humidity += entry.main.humidity; // Accumulate humidity
        }
    });

    // Create an average for each day
    for (const date in dailyWeather) {
        const dailyData = dailyWeather[date];
        const averageTemp = (dailyData.temp / dailyData.count).toFixed(1);
        const averageWindSpeed = (dailyData.windSpeed / dailyData.count).toFixed(1);
        const averageHumidity = (dailyData.humidity / dailyData.count).toFixed(1);

        const weatherHTML = `
            <div class="weather-day">
                <span class="date">${date}</span><br>
                <span>Temperature: ${averageTemp} &#8451;</span><br>
                <span>Conditions: ${dailyData.conditions}</span><br>
                <span>Wind: ${averageWindSpeed} km/h</span><br>
                <span>Humidity: ${averageHumidity}%</span><br>
            </div>
        `;
        weatherDataContainer.innerHTML += weatherHTML;
    }
}

loadWeatherButton.addEventListener('click', getWeather);