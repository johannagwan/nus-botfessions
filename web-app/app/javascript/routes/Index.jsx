import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Confessions from "../components/Confessions";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/confessions" exact component={Confessions} />
    </Switch>
  </Router>
);