import React, { useState } from "react";
import "./Pop.css";
export default function Pop(props) {
  const [pop, setpop] = useState(null);

  function changeNY(event) {
    event.preventDefault();

    setpop(<p>"Everybody talk about pop music!"</p>);
  }

  function changeLondon(event) {
    event.preventDefault();

    setpop(<p>"Everybody talk about pop music!"</p>);
  }

  function changeParis(event) {
    event.preventDefault();

    setpop(<p>"Everybody talk about pop music!"</p>);
  }

  function changeMunich(event) {
    event.preventDefault();

    setpop(<p>"Everybody talk about pop music!"</p>);
  }

  return (
    <div className="nav">
      <ul>
        <li className="pop-city" onClick={changeNY}>
          <a href="/">New York</a>
        </li>
        <li className="pop-city" onClick={changeLondon}>
          <a href="/">London</a>
        </li>
        <li className="pop-city" onClick={changeParis}>
          <a href="/">Paris</a>
        </li>
        <li className="pop-city" onClick={changeMunich}>
          <a href="/">Munich</a>
        </li>
      </ul>
      <p className="popMusic">{pop} </p>
    </div>
  );
}
