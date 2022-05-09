import React from "react";

export default function Time(props) {
  let local = props.date.getTimezoneOffset() * 60 * 1000;
  let offset = props.zone * 1000;
  let time = props.date.getTime() + local + offset;

  let now = new Date(time);

  let hour = now.getHours();
  let minute = now.getMinutes();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[now.getDay()];

  if (minute < 10) {
    minute = `0${minute}`;
  }
  if (hour < 10) {
    hour = `0${hour}`;
  }

  let ampm = hour >= 12 ? "p.m." : "a.m.";
  hour = hour % 12;
  hour = hour ? hour : 12;
  return (
    <span>
      {day} {hour}:{minute} {ampm}
    </span>
  );
}
