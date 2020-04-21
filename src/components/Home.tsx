import React from 'react';
import './../App.css';
import Phone from './../img/phone.png'
import Android from './../img/android.svg'
import IOS from './../img/IOS.svg'
import Footer from './Footer'
import  Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

class Home extends React.Component {
  render(){
    return (
      <div>
        <div className='HomeStart'>
        <Container>
            <Row className="justify-content-md-center">
              <Col>
                <h3>Welcome to ORBYT WALLET</h3>
                <Card.Text>
                  Open Source
                </Card.Text>
                <Card.Text>
                  Simple
                </Card.Text>
                <Row>
                  <Col md="auto">
                    <img src={Android} width={150} alt='android image'/>
                  </Col>
                  <Col md="auto">
                    <img src={IOS} width={150} alt='ios image'/>
                  </Col>
                </Row>
              </Col>
              <Col>
                <img src={Phone} width={250} alt='phone image'/>
              </Col>
            </Row>
          </Container>

        </div>
        <br />
        <br />
        <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Card>
              <Card.Body>
                <Card.Title>Security</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md="auto">
            <Card>
              <Card.Body>
                <Card.Title>Simple</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md="auto">
            <Card>
              <Card.Body>
                <Card.Title>Easy</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        </Container>
        <br />
        <br />
        <Container>
          <Row>
            <Col>
              <h5>TEAM</h5>
            </Col>
          </Row>
          <Row>
          <br />
          <Col md="auto">

            <Card>
              <Card.Body>
                <Card.Title>Sibongiseni Tembe</Card.Title>
                <Card.Text>
                  Founder & Software developer
                </Card.Text>
                <Row>
                  <Col>
                    <FaLinkedin/>
                  </Col>
                  <Col>
                  <FaTwitter/>
                  </Col>
                  <Col>
                  <FaGithub/>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          </Row>
        </Container>
        <br />
        <br />
        <Footer />
      </div>
    );
  }
}

export default Home;
