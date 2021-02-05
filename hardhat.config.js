/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('dotenv').config()
require('@openzeppelin/hardhat-upgrades');

const ALCHEMY_MAINNET = "https://eth-mainnet.alchemyapi.io/v2/" + process.env.ALCHEMY_API_KEY;

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      forking: {
        url: ALCHEMY_MAINNET,
        blockNumber: 11786277
      }
    }
  },
  solidity: {
    version: "0.7.5",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
