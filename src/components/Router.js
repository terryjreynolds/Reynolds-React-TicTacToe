import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LevelPicker from "./LevelPicker";
import App from "./App";
import NotFound from "./NotFound";


const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LevelPicker} />
      <Route path="/game/:level" component={App} />
      <Route component={NotFound} />
      
    </Switch>
  </BrowserRouter>
)

export default Router;
