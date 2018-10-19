import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./App.css";
import Router from "./Router";

const Navigation = props => (
  <header>
    <nav>
      <ul>
        <li>
          <NavLink to="/menu"> Menu </NavLink>
        </li>
        <li>
          <NavLink to="/kitchen"> Kitchen </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

class Home extends Component {
  render() {
    return (
      <div className="page-container">
        <Navigation />

        <Router />
      </div>
    );
  }
}

export default Home;
