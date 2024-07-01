import React from "react";
import "./App.css";

export default function Footer() {
  return (
    <footer>
      This project was coded by
      <a href="https://github.com/SoniaJayat" target="blank">
        {" "}
        Sonia Jayatheesan{" "}
      </a>
      is open-sourced on
      <a href="https://github.com/SoniaJayat/React-Weather-App" target="blank">
        GitHub{" "}
      </a>
      and hosted on
      <a href="https://weather-forecast-app-sonia.netlify.app/" target="blank">
        {" "}
        Netlify
      </a>
    </footer>
  );
}
