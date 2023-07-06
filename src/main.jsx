import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./styles/globalStyle.js";
import Routes from "./routes.jsx";

ReactDOM.render(
  <React.StrictMode>
    <Routes />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById("root")
);
