import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import bgImage from "./assets/pikachu.jpg";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: "bottom",
        width: "100%",
        height: "100%",
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "-1",
      }}
    ></div>
    <App />
  </React.StrictMode>
);
