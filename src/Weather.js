import React from "react";
import axios from "axios";

export default function Weather() {
  function handleResponse(response) {
    alert(`The weather in New York is ${response.data.main.temp}`);
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=New York &appid=bd72cea685abd0c8d8f5b8f11becd620&units=metric`;
  axios.get(url).then(handleResponse);
}
