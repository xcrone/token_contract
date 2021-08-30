const web3 = require('web3');
const Token = artifacts.require("Token");

let name = 'Big Coin';
let symbol = 'BGC';
let cap = web3.utils.toWei('1000000', 'ether'); // 1m
let initial = web3.utils.toWei('1000', 'ether'); // 1k

module.exports = async(deployer, network, accounts) => {
    await deployer.deploy(
        Token,
        name,
        symbol,
        cap
    );
    const TokenContract = await Token.deployed();
    await TokenContract.mint(accounts[0], initial);
};