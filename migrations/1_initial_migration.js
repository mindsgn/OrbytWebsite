const Migrations = artifacts.require("Migrations");
const Token = artifacts.require("Token");
const ICO = artifacts.require("ICO");

module.exports = async function(deployer) {
  await deployer.deploy(Migrations);
  await deployer.deploy(Token);
  const tokenMock = await Token.deployed();

  await tokenMock.mint(
  	'0x1102b154919C4018E42fcE8C0C85eEBbbb7b93C1',
  	'1000000000000000000000'
  )
};
