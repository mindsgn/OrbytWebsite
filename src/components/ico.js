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
import Button from 'react-bootstrap/Button';
import Web3 from 'web3';
import Navigation from './Navigation';

class Home extends Component{
  async componentWillMount(){
    await this.loadWeb3();  
  }

  async loadWeb3(){
    if(window.ethereum){
      window.web3 = new Web3(window.ethereum)
    }
    else if(window.web3){
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else{
      window.alert('non ethereum browser detected');
    }
  }

  render(){
    return(
    <div>
      <Navigation />
      <Container className='HomeStart'>
        <Row>
        </Row>
      </Container>
      <Container>
        <br />
        <Row>
          <h2>Projects</h2>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Orbyt Wallet</Card.Title>
                <Card.Text>Walllet to send & recieve digital assets</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
          </Col>
        </Row>
      </Container>
      <Container>
        <br />
        <Row>
          <h2>Team</h2>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Sibongiseni Tembe</Card.Title>
                <Card.Text>Founder & Fullstack Developer</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
  }
}

export default Home;
