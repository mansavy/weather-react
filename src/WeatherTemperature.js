import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertF(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertC(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <span className="WeatherTemperature">
        <span className="temperature"> {Math.round(props.celsius)}</span>
        <br />
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
        <br />
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
