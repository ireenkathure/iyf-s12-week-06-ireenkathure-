
const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const statusEl = document.getElementById("status");
const card = document.getElementById("weatherCard");
const historyEl = document.getElementById("history");

let history = JSON.parse(localStorage.getItem("weatherHistory")) || [];

function renderHistory() {
  historyEl.innerHTML = "";
  history.forEach((city) => {
    const btn = document.createElement("button");
    btn.textContent = city;
    btn.addEventListener("click", () => getWeather(city));
    historyEl.appendChild(btn);
  });
}

function saveToHistory(city) {
  const name = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
  history = [name, ...history.filter((c) => c.toLowerCase() !== city.toLowerCase())].slice(0, 5);
  localStorage.setItem("weatherHistory", JSON.stringify(history));
  renderHistory();
}

async function getWeather(city) {
  const query = city.trim();
  if (!query) {
    statusEl.textContent = "Please enter a city name.";
    return;
  }
  statusEl.textContent = "Loading...";
  card.classList.add("hidden");

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(query)}&units=metric&appid=${API_KEY}`;
    const response = await fetch(url);

    if (!response.ok) {
      if (response.status === 404) throw new Error("City not found. Please check the spelling and try again.");
      if (response.status === 401) throw new Error("API key not active yet. Please try again in a few minutes.");
      throw new Error("Could not fetch weather. Please try again.");
    }

    const data = await response.json();

    document.getElementById("cityName").textContent = `${data.name}, ${data.sys.country}`;
    document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    document.getElementById("temp").textContent = Math.round(data.main.temp);
    document.getElementById("description").textContent = data.weather[0].description;
    document.getElementById("feelsLike").textContent = Math.round(data.main.feels_like);
    document.getElementById("humidity").textContent = data.main.humidity;
    document.getElementById("wind").textContent = data.wind.speed;
    document.getElementById("pressure").textContent = data.main.pressure;

    statusEl.textContent = "";
    card.classList.remove("hidden");
    saveToHistory(query);
  } catch (error) {
    if (!navigator.onLine) {
      statusEl.textContent = "No internet connection. Please check your connection and try again.";
    } else {
      statusEl.textContent = error.message;
    }
  }
}

searchBtn.addEventListener("click", () => getWeather(cityInput.value));
cityInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") getWeather(cityInput.value);
});

renderHistory();
 
// force rebuild
