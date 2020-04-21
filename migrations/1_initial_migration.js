const Migrations = artifacts.require("Migrations");
const Token = artifacts.require("Token");
const ICO = artifacts.require("ICO");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Token);
  deployer.deploy(ICO);
};
