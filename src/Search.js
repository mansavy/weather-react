import React, { useState } from "react";
import "./Search.css";
import axios from "axios";
import MainTemp from "./MainTemp.js";
import FutureBox from "./FutureBox.js";
import CardFooter from "./CardFooter.js";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [pop, setPop] = useState(null);

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
      localDate: "Tuesday, 9:00 a.m.",
      icon: response.data.weather[0].icon,
      timezone: new Date(response.data.timezone),
      coordinates: response.data.coord,
    });
  }

  function changeNY(event) {
    event.preventDefault();
    setPop(<p>"Everybody talk about pop muzik!"</p>);
    setCity("New York");
    searchCity();
  }

  function changeLondon(event) {
    event.preventDefault();
    setCity("London");
    searchCity();
    setPop(<p>"Everybody talk about pop muzik!"</p>);
  }

  function changeParis(event) {
    event.preventDefault();
    setPop(<p>"Everybody talk about pop muzik!"</p>);
    setCity("Paris");
    searchCity();
  }

  function changeMunich(event) {
    event.preventDefault();
    setPop(<p>"Everybody talk about pop muzik!"</p>);
    setCity("Munich");
    searchCity();
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
                  onChange={handleCityChange}
                />
                <input type="submit" value="Compute" className="button" />
              </form>
            </div>
            <div className="nav">
              <ul>
                <li className="pop-city" onClick={changeNY}>
                  <a href="/">New York</a>
                </li>
                <li className="pop-city" onClick={changeLondon}>
                  <a href="/">London</a>
                </li>
                <li className="pop-city" onClick={changeParis}>
                  <a href="/">Paris</a>
                </li>
                <li className="pop-city" onClick={changeMunich}>
                  <a href="/">Munich</a>
                </li>
              </ul>
              <p className="popMusic">{pop} </p>
            </div>
          </div>
          <MainTemp data={weatherData} />
          <FutureBox coordinates={weatherData.coordinates} />
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
