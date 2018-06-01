var HDWalletProvider = require("truffle-hdwallet-provider");

var infura_apikey = "9s3lR5Y9Hlh9bD3BbSz2";
var mnemonic = "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat";


module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/"+infura_apikey),
      network_id: 3,
      gas: 4612388 // Gas limit used for deploys
    }
  }
};
