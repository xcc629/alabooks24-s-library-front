import React from "react";
import ReactDOM from "react-dom";
import Router from "./Router";

import "./styles/common.scss";
import "./styles/reset.scss";

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById("root")
);
