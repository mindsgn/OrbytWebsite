pragma solidity >=0.4.21 <0.6.0;

import '@openzeppelin/contracts/token/ERC20/ERC20Mintable.sol';

contract Token is ERC20Mintable {
  string public name;
  string public symbol;
  uint256 public decimals;

  constructor() public {
    name = 'Orbyt Coin (ORBX)';
    symbol = 'ORBX';
    decimals = 18;
  }

  
}
