// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile 
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const CAKEStake = await hre.ethers.getContractFactory("CAKEStake");
  const cakeStake = await CAKEStake.deploy("0xBeF2C0415CC95b57a6e96cEE05804c8259601a2f", 1616861252656000, "0x603d0F722A4111a56F9C1c11d3429d1f3D8823fa");

  await cakeStake.deployed();

  console.log("CAKEStake deployed to:", cakeStake.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
