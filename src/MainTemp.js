import React, { useState } from "react";
import "./MainTemp.css";
import FormatDate from "./FormatDate";
import axios from "axios";

export default function MainTemp(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      feels: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      sunrise: new Date(response.data.sys.sunrise * 1000),
      sunset: new Date(response.data.sys.sunset * 1000),
      name: response.data.name,
      country: response.data.sys.country,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      updatedTime: "10:30 a.m.",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="card-body">
        <div className="container">
          <div className="row">
            <div className="col-5 weather-box">
              <ul>
                <li className="stats">
                  Feels like: {Math.round(weatherData.feels)}°C
                </li>
                <li className="stats">Humidity: {weatherData.humidity}%</li>
                <li className="stats">
                  Wind speed: {Math.round((weatherData.wind * 15) / 5)} km/h
                </li>
                <li className="stats">
                  Sunrise: <FormatDate date={weatherData.sunrise} /> a.m.
                </li>
                <li className="stats">
                  Sunset: <FormatDate date={weatherData.sunset} /> p.m.
                </li>
              </ul>
            </div>
            <div className="col-1"></div>

            <div className="col-5 main-weather">
              <h2>
                <span>{weatherData.name},</span>
                <span> {weatherData.country} </span>
              </h2>
              <div className="timeDescription">
                <span>
                  <FormatDate date={weatherData.date} />{" "}
                </span>
                |{" "}
                <span className="text-capitalize">
                  {" "}
                  {weatherData.description}
                </span>{" "}
              </div>
              <img
                src="http://openweathermap.org/img/wn/10d@2x.png"
                id="icon"
                alt="Weather icon"
              />{" "}
              <span class="temperature">
                {" "}
                {Math.round(weatherData.temperature)}
              </span>
              <br />
              <span class="degree">
                <span id="celsius" class="active">
                  °C
                </span>{" "}
                |<span id="fahrenheit">°F</span>
              </span>
              <br />
              <p>
                <small>
                  Last updated:{" "}
                  <span id="updated">{weatherData.updatedTime}</span>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bd72cea685abd0c8d8f5b8f11becd620&units=metric`;
    axios.get(url).then(handleResponse);

    return "It's more fun to compute...";
  }
}
