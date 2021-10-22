import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./style/index.scss";
import "./style/style.scss";
import "@fortawesome/fontawesome-free/css/all.css";
import { ThemeProvider } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
