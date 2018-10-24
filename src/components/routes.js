import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home/Home";
import PlayersHome from "./players/PlayersHome";
import CreatePlayer from "./players/CreatePlayer";

const routes = (
  <Switch>
    <Route path="/players/new" component={CreatePlayer}/>
    <Route path="/players" component={PlayersHome}/>
    <Route path="/" exact component={Home}/>
  </Switch>
)

export default routes;