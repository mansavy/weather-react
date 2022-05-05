import React from "react";
import "./MainTemp.css";
import FormatDate from "./FormatDate.js";
import Icon from "./Icon.js";

export default function MainTemp(props) {
  return (
    <div className="card-body">
      <div className="container">
        <div className="row">
          <div className="col-5 weather-box">
            <ul>
              <li className="stats">
                Feels like: {Math.round(props.data.feels)}°C
              </li>
              <li className="stats">Humidity: {props.data.humidity}%</li>
              <li className="stats">
                Wind speed: {Math.round((props.data.wind * 15) / 5)} km/h
              </li>
              <li className="stats">Sunrise: {props.data.sunrise} a.m.</li>
              <li className="stats">Sunset: {props.data.sunset} p.m.</li>
            </ul>
          </div>
          <div className="col-1"></div>

          <div className="col-5 main-weather">
            <h2>
              <span>{props.data.name},</span>
              <span> {props.data.country} </span>
            </h2>
            <div className="timeDescription">
              <span>{props.data.localDate} </span>|{" "}
              <span className="text-capitalize"> {props.data.description}</span>{" "}
            </div>
            <Icon code={props.data.icon} />{" "}
            <span className="temperature">
              {" "}
              {Math.round(props.data.temperature)}
            </span>
            <br />
            <span className="degree">
              <span className="celsius active">°C</span> |
              <span className="fahrenheit">°F</span>
            </span>
            <br />
            <p>
              <small>
                Last updated: <FormatDate date={props.data.date} />
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
