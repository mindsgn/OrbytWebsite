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
  constructor (props){
		super(props)
	}

  render(){
    return (
      <Router>
        <Navigation />
        <Switch>
          <Route path="/wallet">
            <Wallet />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
