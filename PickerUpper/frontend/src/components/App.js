import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from './HomePage';
import MapPage from './MapPage';
import GamePage from './GamePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/map" component={MapPage} />
          <Route path="/game" component={GamePage} />
        </Switch>
      </Router>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);