import React, { Component } from 'react';
import './App.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class Navigations extends Component{
  render(){
    return(
    	<Navbar collapseOnSelect className='Header'>
        	<Navbar.Brand href="/">
            	<h4 className='white'>ORBYT</h4>
        	</Navbar.Brand>
        	<Navbar.Toggle aria-controls="responsive-navbar-nav" />
         	<Navbar.Collapse id="responsive-navbar-nav">
            	<Nav className="mr-auto">
              		<Nav.Link href="/wallet">Wallet</Nav.Link>
            	</Nav>
            	<Nav>              
           		</Nav>
        	</Navbar.Collapse>
      	</Navbar>
    );
  }
}

export default Navigations;
