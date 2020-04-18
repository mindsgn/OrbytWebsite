import React, { Component } from 'react';
import logo from '../logo.png';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'

function Home() {
 return(
    <div>
      <Navigation />
      <Container>
        <Row>
        </Row>
      </Container>
    </div>
  );
}

function Navigation() {
 return(
    <Navbar collapseOnSelect className='Header'>
      <Navbar.Brand href="/">Orbyt Wallet</Navbar.Brand>
    </Navbar>
  );
}

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
