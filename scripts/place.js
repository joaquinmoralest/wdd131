const windchillElement = document.querySelector("#windchill")
const temperature = 2
const windSpeed = 5
let windchill = 0

const calculateWindChill = (temperature, windSpeed) => (35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16))).toFixed(2)

if (temperature <= 10 && windSpeed > 4.8) {
    windchill = calculateWindChill(temperature, windSpeed)
    windchill
} else {
    windchill = "N/A"
}

windchillElement.textContent = `${windchill} ºC`