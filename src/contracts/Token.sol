pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
  constructor() ERC20("ORBYT COIN", "ORB") public {
  }

  function sendTo(){
    _transfer();
  }

  function mint(){
    _mint(min);
  }

  function Ethereum(){
    _mint(min);
  }
}
