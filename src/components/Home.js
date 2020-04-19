import React, { Component } from 'react';
import phone from '../img/wallet-image.png';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Navigation from './Navigation';
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import Chat from './Chat';

class Home extends Component{
  render(){
    return(
    <div>
      <Navigation />
      <div className='HomeStart'>
      <Container >
        <br />
        <Row className="justify-content-md-center">
          <h1>Welcome to the ORBYT Project</h1>
        </Row>
        <Row className="justify-content-md-center">
          We aim to provide people with mobile phone access to secure and affordable financial services. So people everywhere can live better lives.
        </Row>
        <br />
        <br />
        <Row className="justify-content-md-center">
          <img src={phone} width={400}/>
        </Row>
      </Container>
      </div>
      <Container >
        <br />
        <Row className="justify-content-md-center">
          <h1>The ORBYT system is for everyone</h1>
        </Row>
        <Row className="justify-content-md-center">
          Moving money around the world should be as easy and cheap as sending a message. No matter where you live, what you do, or how much you earn.
        </Row>
        <br />
        <br />
        <Row className="justify-content-md-center">
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Secure</Card.Title>
                <Card.Text>Walllet to send & recieve digital assets</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Simple</Card.Title>
                <Card.Text>Walllet to send & recieve digital assets</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Open</Card.Title>
                <Card.Text>Walllet to send & recieve digital assets</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <br />
        <br />
        <Row className="justify-content-md-center">
          <h2>Team</h2>
        </Row>
        <Row className="justify-content-md-center" >
          <Col  md="auto">
            <Card>
              <Card.Body>
                  <Card.Title>Sibongiseni Tembe</Card.Title>
                  <Card.Text>Founder & Fullstack Developer</Card.Text>
                  <Button><DiGithubBadge/></Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <br />
      <div className="Footer">
        <Container>
          <Row className="justify-content-md-center">
            <h4>ORBYT</h4>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <FaLinkedin/>
            </Col>
            <Col md="auto">
              <FaTwitterSquare/>
            </Col>
          </Row>
        </Container>
      </div>
      <Chat />
    </div>
  );
  }
}

export default Home;
