const {ethers,upgrades}  = require('hardhat');

async function main() {
  
  const factory       = await ethers.getContractFactory("VyriseV1");
  const contractProxy = await ethers.deployContract(factory, [123]);
  await contractProxy.deployed();
  console.log("Proxy address:", contractProxy.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});