import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";
import Home from "./Home";
import store from "./config/store";

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));