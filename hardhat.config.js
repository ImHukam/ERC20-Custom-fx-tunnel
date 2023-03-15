require("@nomiclabs/hardhat-waffle");
require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-etherscan');
const { mnemonic } = require('./secrets.json');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  //defaultNetwork: "testnet",
  defaultNetwork: "testnet",
  networks: {

  dashboard: {
     url: "http://localhost:24012/rpc"
   },

    localhost: {
      url: "http://127.0.0.1:7545"
    },
    hardhat: {
    },
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: {mnemonic: mnemonic}
    },
    mainnet: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      gasPrice: 20000000000,
      accounts: {mnemonic: mnemonic}
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com/",
      // chainId: 137,
      // gasPrice: 20000000000,
      accounts: {mnemonic: mnemonic}
    },
    goerli: {
      url: "https://goerli.blockpi.network/v1/rpc/public",
      // chainId: 137,
      // gasPrice: 20000000000,
      accounts: {mnemonic: mnemonic}
    }
  },
  etherscan: {
    //apiKey:'HWSUN9947Q8ESYGUK73NZ5JYDFDATT4RJ8' //mumbai
    apiKey: {
     //bscTestnet: '83SFMPWFXCGB3PHI3GJZER6INMYJIXWPTI'
     polygonMumbai: 'HWSUN9947Q8ESYGUK73NZ5JYDFDATT4RJ8', //mumbai
     goerli: 'E8BBWZQQZS7UW39YQGKFKG4CFRJ65U4DRP'
    }
  },
  solidity: {
  version: "0.8.4",
  settings: {
    optimizer: {
      enabled: true
    }
   }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 20000
  }
};
