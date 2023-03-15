const { verify } = require("../utils/verify")
const hre = require("hardhat");
// delay is optional for certain condition
//const sleep = ms => new Promise(res => setTimeout(res, ms));

async function main() {
  
  const Contract = await hre.ethers.getContractFactory("FxERC20ChildTunnel");
  const contract = await Contract.deploy(
    '0xCf73231F28B7331BBe3124B907840A94851f9f11',
    '0x9e75E9Ce1b4B7680E9533E4Fb76c35BF3FEC530e',
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
