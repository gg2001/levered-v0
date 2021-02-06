const { ethers, upgrades } = require("hardhat");

async function main() {

  const [deployer] = await ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Levered = await ethers.getContractFactory("Levered");
  const levered = await upgrades.deployProxy(Levered, ["0xb53c1a33016b2dc2ff3653530bff1848a515c8c5", 0, "0xd465be4e63bd09392bac51fcf04aa13412b552d0", "0xc586bef4a0992c495cf22e1aeee4e446cecdee0e", "0x057835Ad21a177dbdd3090bB1CAE03EaCF78Fc6d"], { initializer: 'initialize' });

  console.log("Levered address:", levered.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });