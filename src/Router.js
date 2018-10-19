import React from "react";
import { Switch, Route } from "react-router-dom";

import Menu from "./pages/menuPage";
import Kitchen from "./pages/kitchenPage";

const Router = () => (
  <Switch>
    <Route exact path="/menu" component={Menu} />
    <Route exact path="/kitchen" component={Kitchen} />
  </Switch>
);
export default Router;
