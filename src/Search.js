import React, { useState } from "react";
import "./Search.css";
import axios from "axios";
import MainTemp from "./MainTemp.js";
import Pop from "./Pop.js";
import FutureBox from "./FutureBox.js";
import CardFooter from "./CardFooter.js";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      feels: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      sunrise: "6:00",
      sunset: "9:00",
      name: response.data.name,
      country: response.data.sys.country,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      localDate: "9:00 a.m.",
      icon: response.data.weather[0].icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function searchCity() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bd72cea685abd0c8d8f5b8f11becd620&units=metric`;
    axios.get(url).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="search">
        <div className="card">
          <div className="card-header">
            <div className="search-search">
              <form onSubmit={handleSubmit}>
                <input
                  type="search"
                  placeholder="Destination Unknown (enter city)"
                  size="35"
                  autoFocus="on"
                  onChange={handleCityChange}
                />
                <input type="submit" value="Compute" className="button" />
              </form>
            </div>
            <Pop data={weatherData} />
          </div>
          <MainTemp data={weatherData} />
          <FutureBox />
          <br />
          <CardFooter data={weatherData} />
        </div>
      </div>
    );
  } else {
    searchCity();
    return "It's more fun to compute!";
  }
}
