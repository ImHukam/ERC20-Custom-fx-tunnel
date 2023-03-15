const { verify } = require("../utils/verify")
const hre = require("hardhat");
// delay is optional for certain condition
//const sleep = ms => new Promise(res => setTimeout(res, ms));

async function main() {
  
  const Contract = await hre.ethers.getContractFactory("FxERC20");
  const contract = await Contract.deploy();

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
