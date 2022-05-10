import React from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  function convertF(event) {
    event.preventDefault();
    props.setUnit("fahrenheit");
  }

  function convertC(event) {
    event.preventDefault();
    props.setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (props.unit === "celsius") {
    return (
      <span className="WeatherTemperature">
        <span className="temperature"> {Math.round(props.celsius)}</span>

        <span className="degree">
          °C |{" "}
          <a href="/" onClick={convertF}>
            {" "}
            °F{" "}
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span className="WeatherTemperature">
        <span className="temperature"> {Math.round(fahrenheit())}</span>

        <span className="degree">
          <a href="/" onClick={convertC}>
            {" "}
            °C{" "}
          </a>
          | °F{" "}
        </span>
      </span>
    );
  }
}
