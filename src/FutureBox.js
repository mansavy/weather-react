import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay.js";

export default function FutureBox(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setforecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setforecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="FutureBox">
        <div className="row row-cols-1 row-cols-lg-5  ms-3 me-3">
          {forecast.map(function (dailyForecast, index) {
            if (index > 0 && index < 6) {
              return (
                <div className="col-sm future-temps" key={index}>
                  <ForecastDay data={dailyForecast} unit={props.unit} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=bd72cea685abd0c8d8f5b8f11becd620&units=metric`;

    axios.get(url).then(handleResponse);

    return <center>"It's more fun to compute!"</center>;
  }
}
