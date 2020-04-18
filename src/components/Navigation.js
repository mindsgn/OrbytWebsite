import React, { Component } from 'react';
import logo from '../logo.png';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Web3 from 'web3';

class Navigations extends Component{
  render(){
    return(
      <Navbar collapseOnSelect className='Header'>
        <Navbar.Brand href="/">Orbyt Technologies</Navbar.Brand>
      </Navbar>
    );
  }
}

export default Navigations;
