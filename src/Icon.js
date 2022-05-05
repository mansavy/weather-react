import React from "react";
import clouds from "./media/clouds.gif";
import cloudy from "./media/cloudy.gif";
import cloudyNight from "./media/cloudyNight.gif";
import drizzle from "./media/drizzle.gif";
import foggy from "./media/foggy.gif";
import night from "./media/night.gif";
import rain from "./media/rain.gif";
import snow from "./media/snow.gif";
import storm from "./media/storm.gif";
import sun from "./media/sun.gif";

export default function Icon(props) {
  const codeMapping = {
    "01d": sun,
    "01n": night,
    "02d": cloudy,
    "02n": cloudyNight,
    "03d": cloudy,
    "03n": cloudyNight,
    "04d": clouds,
    "04n": clouds,
    "09d": drizzle,
    "09n": drizzle,
    "10d": rain,
    "10n": rain,
    "11d": storm,
    "11n": storm,
    "13d": snow,
    "13n": snow,
    "50d": foggy,
    "50n": foggy,
  };

  let CityIcon = codeMapping[props.code];
  {
    return CityIcon;
  }
}
