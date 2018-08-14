import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LevelSelector from "./LevelSelector";
import App from "./App";
import NotFound from "./NotFound";
import TokenSelector from "./TokenSelector";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LevelSelector} />
      <Route path="/tokenselector/" component={TokenSelector} />
      <Route path="/game/:level" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
