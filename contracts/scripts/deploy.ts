import hre from "hardhat";

async function main() {
  const domainContractFactory = await hre.ethers.getContractFactory("Domains");
  const domainContract = await domainContractFactory.deploy("wizard");

  await domainContract.deployed();

  console.log("Contract deployed to: ", domainContract.address);

  let txn = await domainContract.register("hagrid", {
    value: hre.ethers.utils.parseEther("0.01"),
  });
  await txn.wait();
  console.log("Minted domain hagrid.wizard");

  txn = await domainContract.setRecord("hagrid", "Yer a wizard 'arry");
  await txn.wait();
  console.log("Set record for hagrid.wizard");

  const address = await domainContract.getAddress("hagrid");
  console.log("Owner of domain hagrid.wizard: ", address);

  const balance = await hre.ethers.provider.getBalance(domainContract.address);
  console.log("Contract balance: ", hre.ethers.utils.formatEther(balance));
}

async function runMain() {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

runMain();
