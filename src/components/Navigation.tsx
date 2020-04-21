import React from 'react';
import './../App.css';
import Navbar  from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';


class Footer extends React.Component {
  render(){
    return (
      <Navbar className="Navigation">
        <Navbar.Brand href="/">
          <h3 className="white">ORBYT</h3>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/Wallet">Wallet</Nav.Link>
        </Nav>

        <Nav>
          <Nav.Link href="/Wallet"></Nav.Link>
          <Button>Sign In</Button>
        </Nav>
      </Navbar>
    );
  }
}

export default Footer;
