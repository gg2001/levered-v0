const { expect } = require("chai");
const { ethers, upgrades } = require("hardhat");

describe("Levered contract", function () {
  let addressesProviderAddr = "0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5";
  let addressesProvider;
  let referralCode = 0;
  let referral = "0xD465bE4e63bD09392bAC51Fcf04AA13412B552D0";
  let oneSplitAddr = "0xC586BeF4a0992C495Cf22e1aeEE4E446CECDee0E";
  let oneSplit;
  let dataProviderAddr = "0x057835Ad21a177dbdd3090bB1CAE03EaCF78Fc6d";
  let dataProvider;
  let lendingPoolAddr = "0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9";
  let lendingPool;
  let oneInchAddr = "0x111111125434b319222CdBf8C261674aDB56F3ae";
  let oneInch;

  let daiAddr = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
  let DAI;
  let wethAddr = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
  let WETH;

  let Levered;
  let levered;
  let owner;
  let addr1;
  let addr2;
  let addrs;

  beforeEach(async function () {
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
    addressesProvider = await ethers.getContractAt("ILendingPoolAddressesProvider", addressesProviderAddr);
    oneSplit = await ethers.getContractAt("IOneSplit", oneSplitAddr);
    dataProvider = await ethers.getContractAt("IProtocolDataProvider", dataProviderAddr);
    lendingPool = await ethers.getContractAt("ILendingPool", lendingPoolAddr);
    oneInch = await ethers.getContractAt("IOneInchExchange", oneInchAddr);

    DAI = await ethers.getContractAt("IERC20", daiAddr);
    WETH = await ethers.getContractAt("IERC20", wethAddr);

    Levered = await ethers.getContractFactory("Levered");
    levered = await upgrades.deployProxy(Levered, [addressesProvider.address, referralCode, referral, oneSplit.address, dataProvider.address], { initializer: 'initialize' });
  });

  describe("Deployment", function () {
    it("Should initialize values", async function () {
      expect(await levered.ADDRESSES_PROVIDER()).to.equal(addressesProvider.address);
      expect(await levered.referralCodeAave()).to.equal(referralCode);
      expect(await levered.referralOneInch()).to.equal(referral);
      expect(await levered.oneInchProtocol()).to.equal(oneSplit.address);
      expect(await levered.DATA_PROVIDER()).to.equal(dataProvider.address);
      expect(await levered.LENDING_POOL()).to.equal(lendingPool.address);
    });

    it("Should create an instance of Position", async function () {
      let position = await ethers.getContractAt("IPosition", await levered.positionContractCore());
      expect(await position.owner()).to.equal(levered.address);
    });
  });
});