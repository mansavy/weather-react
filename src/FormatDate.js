import React from "react";

export default function FormatDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let hour = props.date.getHours();

  let day = days[props.date.getDay()];

  if (hour < 10) {
    hour = `0${hour}`;
  }

  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let ampm = hour >= 12 ? "p.m." : "a.m.";
  hour = hour % 12;
  hour = hour ? hour : 12;

  return (
    <span>
      {day} {hour}:{minutes} {ampm}
    </span>
  );
}
