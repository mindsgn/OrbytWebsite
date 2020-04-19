import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './Home';
import Wallet from './Wallet';
import ICO from './ICO';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/wallet">
            <Wallet />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
