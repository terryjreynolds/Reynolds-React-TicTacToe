import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LevelSelector from "./LevelSelector";
import App from "./App";
import NotFound from "./NotFound";
import TokenSelector from "./TokenSelector";

const Router = props => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LevelSelector} />
      <Route
        path="/tokenselector1/"
        render={props => <TokenSelector {...props} level={1} />}
      />
      <Route
        path="/tokenselector2/"
        render={props => <TokenSelector {...props} level={2} />}
      />
      <Route
        path="/game/X1"
        render={props => (
          <App {...props} player_token="X" level="1" whosTurn={true} />
        )}
      />
      <Route
        path="/game/X2"
        render={props => (
          <App {...props} player_token="X" level="2" whosTurn={true} />
        )}
      />
      <Route
        path="/game/O1/"
        render={props => (
          <App {...props} player_token="O" level="1" whosTurn={false} />
        )}
      />
      <Route
        path="/game/O2/"
        render={props => (
          <App {...props} player_token="O" level="2" whosTurn={false} />
        )}
      />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
