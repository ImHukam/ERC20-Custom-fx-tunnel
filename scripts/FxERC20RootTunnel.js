const { verify } = require("../utils/verify")
const hre = require("hardhat");
// delay is optional for certain condition
//const sleep = ms => new Promise(res => setTimeout(res, ms));

async function main() {
  
  const Contract = await hre.ethers.getContractFactory("FxERC20RootTunnel");
  const contract = await Contract.deploy(
    '0x2890bA17EfE978480615e330ecB65333b880928e',
    '0x3d1d3E34f7fB6D26245E6640E1c50710eFFf15bA',
    '0x9e75E9Ce1b4B7680E9533E4Fb76c35BF3FEC530e'

  );

  await contract.deployed();

  console.log("deployed to:", contract.address);
  //await sleep(5000); //5 second delay

  // await verify(contract.address, [], "contracts/test.sol:hello")
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
