import React, { useState } from "react";
import "./MainTemp.css";
import FormatDate from "./FormatDate.js";
import Icon from "./Icon.js";
import LocalTime from "./LocalTime.js";
import Date from "./Date.js";
import FutureBox from "./FutureBox.js";

export default function MainTemp(props) {
  const [unit, setUnit] = useState("celsius");
  function convertF(event) {
    event.preventDefault();
    props.setUnit("fahrenheit");
  }

  function convertC(event) {
    event.preventDefault();
    props.setUnit("celsius");
  }

  function fahrenheit() {
    return (props.data.temperature * 9) / 5 + 32;
  }

  function feels() {
    let feels = Math.round(props.data.feels);
    if (props.unit === "fahrenheit") {
      feels = Math.round((feels * 9) / 5 + 32);
      return `${feels}°F`;
    }
    return `${feels}°C`;
  }

  function wind() {
    let wind = Math.round(props.data.wind * 3.6);
    if (props.unit === "fahrenheit") {
      wind = Math.round(props.data.wind * 2.237);
      return `${wind} m/h`;
    }
    return `${wind} km/h`;
  }

  if (props.unit === "celsius") {
    return (
      <div className="MainTemp">
        <div className="card-body">
          <div className="container">
            <div className="row">
              <div className="col-5 weather-box">
                <ul>
                  <li className="stattitle">
                    <Date date={props.data.date} />{" "}
                  </li>
                  <li className="stats mt-0">Feels like: {feels()}</li>
                  <li className="stats">Humidity: {props.data.humidity}%</li>
                  <li className="stats">Wind speed: {wind()}</li>
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
                    <LocalTime
                      date={props.data.date}
                      zone={props.data.timezone}
                    />{" "}
                  </span>
                  |{" "}
                  <span className="text-capitalize description">
                    {" "}
                    {props.data.description}
                  </span>{" "}
                </div>
                <span className="icon">
                  <Icon code={props.data.icon} />{" "}
                </span>
                <span className="temperature">
                  {" "}
                  {Math.round(props.data.temperature)}
                </span>
                <span className="degree">
                  °C |{" "}
                  <a href="/" onClick={convertF}>
                    {" "}
                    °F{" "}
                  </a>
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
        <FutureBox
          coordinates={props.data.coordinates}
          unit={unit}
          setUnit={setUnit}
        />
      </div>
    );
  } else {
    return (
      <div className="MainTemp">
        <div className="card-body">
          <div className="container">
            <div className="row">
              <div className="col-5 weather-box">
                <ul>
                  <li className="stattitle">
                    <Date date={props.data.date} />{" "}
                  </li>
                  <li className="stats mt-0">Feels like: {feels()}</li>
                  <li className="stats">Humidity: {props.data.humidity}%</li>
                  <li className="stats">Wind speed: {wind()}</li>
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
                    <LocalTime
                      date={props.data.date}
                      zone={props.data.timezone}
                    />{" "}
                  </span>
                  |{" "}
                  <span className="text-capitalize">
                    {" "}
                    {props.data.description}
                  </span>{" "}
                </div>
                <span>
                  <Icon code={props.data.icon} />{" "}
                  <span className="temperature">
                    {" "}
                    {Math.round(fahrenheit())}
                  </span>
                  <span className="degree">
                    <a href="/" onClick={convertC}>
                      {" "}
                      °C{" "}
                    </a>
                    | °F{" "}
                  </span>
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
        <FutureBox
          coordinates={props.data.coordinates}
          unit={unit}
          setUnit={setUnit}
        />
      </div>
    );
  }
}
