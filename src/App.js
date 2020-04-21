import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Navigation from './components/Navigation'
import Home from './components/Home';
import Wallet from './components/Wallet';


class App extends React.Component {
  render(){
    return (
      <Router>
        <Navigation/>
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
