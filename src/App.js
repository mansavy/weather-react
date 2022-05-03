import "./App.css";
import React from "react";
import Search from "./Search.js";
import Pop from "./Pop.js";
import TempBox from "./TempBox.js";
import MainTemp from "./MainTemp.js";
import FutureBox from "./FutureBox.js";
import CardFooter from "./CardFooter.js";

export default function App() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <Search />
          <Pop />
        </div>

        <div className="card-body">
          <div className="container">
            <div className="row">
              <TempBox />
              <div className="col-1"> </div>
              <MainTemp defaultCity="Rio de Janeiro" />
            </div>
          </div>
          <FutureBox />
          <br />
          <CardFooter />
        </div>
      </div>

      <br />
      <footer>
        <span id="myLinks">
          <a
            href="https://github.com/mansavy/weather-react"
            target="_blank"
            rel="noopener noreferrer"
            id="footerLink"
          >
            Open-source code:
          </a>
          <a
            href="https://mandysavoie.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mandy Savoie{" "}
          </a>
        </span>
        <span id="iconCredit">
          Animated icons:
          <a
            href="https://www.flaticon.com/free-icons/cloud"
            target="_blank"
            rel="noopener noreferrer"
          >
            Freepik - Flaticon
          </a>
        </span>
        <span id="background">
          Background credit:
          <a
            href="https://www.vecteezy.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vecteezy.com
          </a>
        </span>
      </footer>
    </div>
  );
}
