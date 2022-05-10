import React from "react";

export default function Date(props) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const codeMapping = {
    0: "Sunday always comes too late",
    1: "Monday you can fall apart",
    2: "Tuesday, break my heart",
    3: "Wednesday, break my heart",
    4: "Thursday doesn't even start",
    5: "It's Friday I'm in love",
    6: "Saturday, wait",
  };

  let month = months[props.date.getMonth()];

  let date = props.date.getDate();

  let year = props.date.getFullYear();

  return (
    <span>
      {month} {date}, {year}
      <div className="cure-lyrics"> {codeMapping[props.date.getDay()]}</div>
    </span>
  );
}
