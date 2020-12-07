import React from "react";
import { Switch, Router, Route } from "react-router-dom";
import Services from "./../services/Services";
import Projects from "./../projects/Projects";
import Team from "./../team/Team";

const Router = () => {
  <Switch>
    <Route path="/service" component={Services} />
    <Route path="/projects" component={Projects} />
    <Route path="/team" component={Team} />
  </Switch>;
};

export default Router;
