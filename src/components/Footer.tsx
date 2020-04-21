import React from 'react';
import './../App.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';


class Navigation extends React.Component {
  render(){
    return (
      <div className="Footer">
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h5>ORBYT</h5>
          </Col>
          <Col md="auto">
            <Row>
              <h5>Social</h5>
            </Row>
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
          </Col>
        </Row>
      </div>
    );
  }
}

export default Navigation;
