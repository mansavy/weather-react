import React from "react";
import "./TempBox.css";
export default function TempBox() {
  let TempBoxData = {
    feel: 24,
    humidity: 80,
    wind: 20,
    sunrise: "6:00",
    sunset: "8:00",
  };
  return (
    <div className="col-5 weather-box">
      <ul>
        <li className="stats">Feels like: {TempBoxData.feel}°</li>
        <li className="stats">Humidity: {TempBoxData.humidity}%</li>
        <li className="stats">Wind speed: {TempBoxData.wind} km/h</li>
        <li className="stats">Sunrise: {TempBoxData.sunrise} a.m.</li>
        <li className="stats">Sunset: {TempBoxData.sunset} p.m.</li>
      </ul>
    </div>
  );
}
