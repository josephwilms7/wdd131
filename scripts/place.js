const year = document.getElementById("currentyear");

const today = new Date();

year.innerHTML = today.getFullYear();

const lastModified = document.getElementById("lastModified");

lastModified.innerHTML = document.lastModified;


const temperature = 8;
const windSpeed = 22;

function calculateWindChill(temp, wind) {
    return (13.12 + (0.6215 * temp) - (11.37 * Math.pow(wind, 0.16)) + (0.3965 * temp * Math.pow(wind, 0.16))).toFixed(1);
}

function displayWindChill() {
    let windChillElement = document.querySelector('#wind_chill');
    let windChill;

    if (temperature <= 10 && windSpeed > 4.8) {
        windChill = calculateWindChill(temperature, windSpeed);
    } else {
        windChill = "N/A";
    }

    windChillElement.textContent = windChill;
}

window.onload = displayWindChill;