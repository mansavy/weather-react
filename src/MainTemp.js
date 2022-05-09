import React from "react";
import "./MainTemp.css";
import FormatDate from "./FormatDate.js";
import Icon from "./Icon.js";
import WeatherTemperature from "./WeatherTemperature.js";
import LocalTime from "./LocalTime.js";
import Date from "./Date.js";

export default function MainTemp(props) {
  return (
    <div className="card-body">
      <div className="container">
        <div className="row">
          <div className="col-5 weather-box">
            <ul>
              <li className="stattitle">
                <Date date={props.data.date} />{" "}
              </li>
              <li className="stats mt-0">
                Feels like: {Math.round(props.data.feels)}°C
              </li>
              <li className="stats">Humidity: {props.data.humidity}%</li>
              <li className="stats">
                Wind speed: {Math.round((props.data.wind * 15) / 5)} km/h
              </li>
            </ul>
          </div>
          <div className="col-1"></div>

          <div className="col-5 main-weather">
            <h2>
              <span>{props.data.name},</span>
              <span> {props.data.country} </span>
            </h2>
            <div className="timeDescription text-capitalize">
              <span>
                <LocalTime date={props.data.date} zone={props.data.timezone} />{" "}
              </span>
              |{" "}
              <span className="text-capitalize"> {props.data.description}</span>{" "}
            </div>
            <span>
              <Icon code={props.data.icon} />{" "}
              <WeatherTemperature celsius={props.data.temperature} />
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
