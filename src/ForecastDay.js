import React from "react";
import "./ForecastDay.css";

export default function ForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  }

  return (
    <span className="ForecastDay">
      <div className="card future-card">
        <div className="card-body forecast-body">
          <h5 className="card-title">{day()}</h5>
          <span className="card-text">
            <ul>
              <li className="future-stats future-description">
                {props.data.weather[0].description}
              </li>
              <li className="future-stats future-description">
                {" "}
                {maxTemp()} | {minTemp()}
              </li>
              <li className="future-stats future-description">
                Humidity: <br /> {props.data.humidity}%
              </li>
            </ul>
          </span>
        </div>
      </div>
    </span>
  );
}
