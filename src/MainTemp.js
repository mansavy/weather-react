import React, { useState } from "react";
import "./MainTemp.css";
import axios from "axios";
export default function MainTemp(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      name: response.data.name,
      country: response.data.sys.country,
      temperature: response.data.main.temp,
      time: "Tuesday, 9:00 a.m.",
      description: response.data.weather[0].description,
      updatedTime: "10:30 a.m.",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="col-5 main-weather">
        <h2>
          <span>{weatherData.name},</span>
          <span> {weatherData.country} </span>
        </h2>
        <div className="timeDescription">
          <span className="currentDayTime">{weatherData.time}</span> |{" "}
          <span className="text-capitalize"> {weatherData.description}</span>{" "}
        </div>
        <img
          src="http://openweathermap.org/img/wn/10d@2x.png"
          id="icon"
          alt="Weather icon"
        />{" "}
        <span class="temperature"> {Math.round(weatherData.temperature)}</span>
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
            Last updated: <span id="updated">{weatherData.updatedTime}</span>
          </small>
        </p>
      </div>
    );
  } else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bd72cea685abd0c8d8f5b8f11becd620&units=metric`;
    axios.get(url).then(handleResponse);

    return "It's more fun to compute...";
  }
}
