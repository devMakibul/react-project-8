import { useState } from "react";
import "./Weather.css";

const API_KEY = "91cca3ac044aa5d460e983377e24354c";

function Weather() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);

  const getWeather = async () => {
    if (!city.trim()) return;
    setData(null);

    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
    );
    const result = await res.json();
    setData(result);
  };

  return (
    <div>
      <section>
        <h1 className="page-title">Weather</h1>

        <div className="weather-search">
          <input
            type="text"
            placeholder="Enter a city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={getWeather}>Search</button>
        </div>

        {data && (
          <div className="weather-card">
            <div className="weather-top">
              <h2>
                {data.name}, {data.sys.country}
              </h2>
              <p className="weather-desc">
                <img
                  src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                  alt="weather icon"
                />
                {data.weather[0].description}
              </p>
            </div>
            <div className="weather-stats">
              <div className="weather-stat">
                <span className="stat-label">Temperature</span>
                <span className="stat-value">{data.main.temp}°C</span>
              </div>
              <div className="weather-stat">
                <span className="stat-label">Feels like</span>
                <span className="stat-value">{data.main.feels_like}°C</span>
              </div>
              <div className="weather-stat">
                <span className="stat-label">Humidity</span>
                <span className="stat-value">{data.main.humidity}%</span>
              </div>
              <div className="weather-stat">
                <span className="stat-label">Wind</span>
                <span className="stat-value">{data.wind.speed} m/s</span>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default Weather;
