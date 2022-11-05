import hre from "hardhat";

async function main() {
  const [owner, randomPerson] = await hre.ethers.getSigners();
  const domainContractFactory = await hre.ethers.getContractFactory("Domains");
  const domainContract = await domainContractFactory.deploy("social");
  await domainContract.deployed();

  console.log("Contract deployed to: ", domainContract.address);
  console.log("Contract deployed by: ", owner.address);

  let txn = await domainContract.register("doom", {
    value: hre.ethers.utils.parseEther("1"),
  });
  await txn.wait();

  const domainOwner = await domainContract.getAddress("doom");
  console.log("Owner of domain: ", domainOwner);

  const balance = await hre.ethers.provider.getBalance(domainContract.address);
  console.log("Contract balance: ", hre.ethers.utils.formatEther(balance));

  try {
    txn = await domainContract
      .connect(randomPerson)
      .setRecord("doom", "Haha mine!");
    await txn.wait();
  } catch (error) {
    console.log("Tx failed successfully.");
  }
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
