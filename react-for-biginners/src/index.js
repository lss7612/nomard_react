import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import App2 from "./App2";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <hr></hr>
    <App2 />
  </React.StrictMode>,
  document.getElementById("root")
);
