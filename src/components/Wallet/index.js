import React, { Component } from 'react';
import './../App.css';
import Web3 from 'web3';
import Navigation from './../Navigation';
const Box = require('3box');

class Wallet extends Component{

  render(){
    return(
    <div>
      <Navigation />
    </div>
  );
  }
}

export default Wallet;
