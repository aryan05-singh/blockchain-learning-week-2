/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle")

const ALCHEMY_API_KEYS = "irmELwwZLCuYvqrYXPu5zjZb6Nj8nDTR";
const GOERLI_PRIVATE_KEYS = "a29fd1f7264b00410bb151014ba63c317d39e5926adb252aa28f9fe96d41ad13";
module.exports = {
  solidity: "0.8.19",

  networks:{
    goerli:{
      url:`https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEYS}`,
      accounts:[`${GOERLI_PRIVATE_KEYS}`],
    }
  }
};
