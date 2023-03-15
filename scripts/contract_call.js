const hre = require("hardhat");
const { ethers } = require("ethers");

const matic_provider = new ethers.providers.JsonRpcProvider("https://matic-mumbai.chainstacklabs.com")
const abi = [
    "function setService(address _service) external",
    "function setNFTContract(address _contract) external",
    "function cloneNFTContract( string calldata _orgId, string calldata _collectionId, string calldata _nftName, string calldata _nftSymbol) external"
];

const address = "";

const tokenContract = new ethers.Contract(address, abi, matic_provider);

const privateKey = ""; // only for testing purpose, use env for real development

const matic_wallet = new ethers.Wallet(privateKey, matic_provider);

const contract = tokenContract.connect(matic_wallet);

async function main() {

    const tx = await contract.cloneNFTContract(
        '3',
        'TEST3',
        'TEST3',
        'T3'
    )
    await tx.wait();
    console.log(tx.hash)

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
