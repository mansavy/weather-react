import "./App.css";
import React from "react";
import Search from "./Search.js";
export default function App() {
  return (
    <div className="App mb-5">
      <div className="container">
        <Search defaultCity="Rio de Janeiro" />
      </div>

      <footer>
        <span>
          <a
            href="https://github.com/mansavy/weather-react"
            target="_blank"
            rel="noopener noreferrer"
            className="footerLink"
          >
            Open-source code:{" "}
          </a>
          <a
            href="https://mandysavoie.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mandy Savoie
          </a>
        </span>

        <span className="iconCredit">
          Animated icons:{" "}
          <a
            href="https://www.flaticon.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Freepik - Flaticon
          </a>
        </span>
        <span>
          Background credit:{" "}
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
