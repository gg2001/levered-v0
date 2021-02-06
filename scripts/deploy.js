const { ethers, upgrades } = require("hardhat");

async function main() {

  const [deployer] = await ethers.getSigners();

  let addressesProviderAddr = "0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5";
  let referralCode = 0;
  let referral = "0xD465bE4e63bD09392bAC51Fcf04AA13412B552D0";
  let oneSplitAddr = "0xC586BeF4a0992C495Cf22e1aeEE4E446CECDee0E";
  let dataProviderAddr = "0x057835Ad21a177dbdd3090bB1CAE03EaCF78Fc6d";
  let lendingPoolAddr = "0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9";
  let oneInchAddr = "0x111111125434b319222CdBf8C261674aDB56F3ae";
  let name = "Levered";
  let symbol = "LEVP";

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Levered = await ethers.getContractFactory("Levered");
  const levered = await upgrades.deployProxy(Levered, [addressesProviderAddr, referralCode, referral, oneSplitAddr, dataProviderAddr, name, symbol], { initializer: 'initialize' });

  console.log("Levered address:", levered.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });