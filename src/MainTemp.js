import React from "react";
import "./MainTemp.css";
export default function MainTemp() {
  let MainTempData = {
    city: "Moncton",
    country: "Canada",
    currentTime: "10:00 a.m.",
    description: "Rainy",
    temperature: 30,
  };
  return (
    <div className="col-5 main-weather">
      <h2>
        <span>{MainTempData.city},</span>
        <span> {MainTempData.country} </span>
      </h2>
      <div className="timeDescription">
        <span className="currentDayTime">{MainTempData.currentTime}</span> |{" "}
        <span> {MainTempData.description}</span>{" "}
      </div>
      <img
        src="http://openweathermap.org/img/wn/10d@2x.png"
        id="icon"
        alt="Weather icon"
      />{" "}
      <span class="temperature"> {MainTempData.temperature}</span>
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
          Last updated: 10:30 a.m. <span id="updated"></span>
        </small>
      </p>
    </div>
  );
}
