const defaultCity = "Mumbai";

document.getElementById("searchBtn").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value.trim();
  if (city) getWeather(city);
});

async function getWeather(city) {
  const url = `https://wttr.in/${city}?format=j1`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    //  Current weather
    const area = data.nearest_area[0].areaName[0].value;
    const region = data.nearest_area[0].region[0].value;
    const country = data.nearest_area[0].country[0].value;
    const tempC = data.current_condition[0].temp_C;
    const desc = data.current_condition[0].weatherDesc[0].value;
    const humidity = data.current_condition[0].humidity;
    const wind = data.current_condition[0].windspeedKmph;

    document.getElementById("cityName").textContent = `${area}, ${region}, ${country}`;
    document.getElementById("temperature").textContent = `${tempC} °C`;
    document.getElementById("description").textContent = desc;
    document.getElementById("humidity").textContent = `Humidity: ${humidity}%`;
    document.getElementById("wind").textContent = `Wind Speed: ${wind} km/h`;

    //  Forecast (Next 3 Days)
    const forecastContainer = document.getElementById("forecast");
    forecastContainer.innerHTML = "";

    const days = data.weather.slice(0, 3); // Get exactly 3 days
    days.forEach(day => {
      const date = day.date;
      const avgTemp = day.avgtempC;
      const desc = day.hourly[4].weatherDesc[0].value; // midday description
      const minTemp = day.mintempC;
      const maxTemp = day.maxtempC;
      const icon = getWeatherEmoji(desc);

      const card = document.createElement("div");
      card.classList.add("forecast-card");
      card.innerHTML = `
        <h4>${formatDate(date)}</h4>
        <p>${icon} ${desc}</p>
        <p>🌡️ ${minTemp}°C - ${maxTemp}°C</p>
        <p>Avg: ${avgTemp}°C</p>
      `;
      forecastContainer.appendChild(card);
    });

  } catch (error) {
    alert("Error fetching weather data!");
    console.error(error);
  }
}

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short"
  });
}

// Add simple emoji icons for weather
function getWeatherEmoji(desc) {
  const text = desc.toLowerCase();
  if (text.includes("rain")) return "🌧️";
  if (text.includes("cloud")) return "☁️";
  if (text.includes("sun") || text.includes("clear")) return "☀️";
  if (text.includes("thunder")) return "⛈️";
  if (text.includes("snow")) return "❄️";
  return "🌤️";
}

// Ask user if they want to see default city
window.addEventListener("load", () => {
  const useDefault = confirm(`Do you want to see the weather for ${defaultCity}?`);
  if (useDefault) getWeather(defaultCity);
});
