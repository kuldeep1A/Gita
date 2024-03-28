import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/app.css";
import "./assets/css/response.css";
import "./assets/css/normalization/normalization.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
