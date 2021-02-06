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
  let name = "Levered";
  let symbol = "LEVP";
  let testAddr = "0x47ac0Fb4F2D84898e4D9E7b4DaB3C24507a6D503";
  let testSigner;

  let daiAddr = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
  let DAI;
  let wethAddr = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
  let WETH;
  let awethAddr = "0x030bA81f1c18d280636F32af80b9AAd02Cf0854e";
  let aWETH;

  let Levered;
  let levered;
  let owner;
  let addr1;
  let addr2;
  let addrs;

  let positionSizeNum = 1000;
  let leverageNum = 3;
  let slippage = 0.99;
  let interestRateMode = 2;

  let flashLoanFee = 0.0009;
  let flashLoanFeePlusOne = 1 + flashLoanFee;
  let positionSize = ethers.utils.parseEther(positionSizeNum.toString());
  // If leverageNum = 5 (Maximum)
  // positionMarginNum = ((positionSizeNum * 5) - positionSizeNum)/flashLoanFeePlusOne
  let positionMarginNum = (positionSizeNum * 3) - positionSizeNum;
  let positionMargin = ethers.utils.parseEther(positionMarginNum.toString());
  let oneInchParts = 10;
  let totalAmountNum = positionSizeNum + positionMarginNum;
  let totalAmount = ethers.utils.parseEther(totalAmountNum.toString());

  let returnVal;
  let minReturnNum;
  let minReturn;

  beforeEach(async function () {
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
    addressesProvider = await ethers.getContractAt("ILendingPoolAddressesProvider", addressesProviderAddr);
    oneSplit = await ethers.getContractAt("IOneSplit", oneSplitAddr);
    dataProvider = await ethers.getContractAt("IProtocolDataProvider", dataProviderAddr);
    lendingPool = await ethers.getContractAt("ILendingPool", lendingPoolAddr);
    oneInch = await ethers.getContractAt("IOneInchExchange", oneInchAddr);

    DAI = await ethers.getContractAt("IERC20", daiAddr);
    WETH = await ethers.getContractAt("IERC20", wethAddr);
    aWETH = await ethers.getContractAt("IERC20", awethAddr);

    Levered = await ethers.getContractFactory("Levered");
    levered = await upgrades.deployProxy(Levered, [addressesProvider.address, referralCode, referral, oneSplit.address, dataProvider.address, name, symbol], { initializer: 'initialize' });

    await hre.network.provider.request({
      method: "hardhat_impersonateAccount",
      params: [testAddr]
    })
    testSigner = await ethers.provider.getSigner(testAddr);
    owner.sendTransaction({ to: testAddr, value: ethers.utils.parseEther("1") });

    returnVal = (await oneSplit.getExpectedReturn(DAI.address, WETH.address, totalAmount, oneInchParts, 0)).returnAmount;
    minReturnNum = parseInt(returnVal.toString())*slippage;
    minReturn = ethers.utils.parseEther(ethers.utils.formatEther(minReturnNum.toString()));
  });

  describe("Deployment", function () {
    it("Should initialize values", async function () {
      expect(await levered.ADDRESSES_PROVIDER()).to.equal(addressesProvider.address);
      expect(await levered.referralCodeAave()).to.equal(referralCode);
      expect(await levered.referralOneInch()).to.equal(referral);
      expect(await levered.oneInchProtocol()).to.equal(oneSplit.address);
      expect(await levered.DATA_PROVIDER()).to.equal(dataProvider.address);
      expect(await levered.LENDING_POOL()).to.equal(lendingPool.address);
      expect(await levered.name()).to.equal(name);
      expect(await levered.symbol()).to.equal(symbol);
    });

    it("Should create an instance of Position", async function () {
      let position = await ethers.getContractAt("IPosition", await levered.positionContractCore());
      expect(await position.owner()).to.equal(levered.address);
    });
  });

  describe("Create position", function () {
    it("Should create position", async function () {
      let DAIBalance = await DAI.balanceOf(testAddr);

      await DAI.connect(testSigner).approve(levered.address, positionSize);
      await levered.connect(testSigner).openPosition(DAI.address, positionSize, positionMargin, WETH.address, interestRateMode, oneInchParts, minReturn);

      expect((await DAI.balanceOf(testAddr)).toString()).to.be.equal(DAIBalance.sub(positionSize).toString());

      let newPosition = (await levered.getUsersPositions(testAddr))[0][0];
      let newPositionIndex = (await levered.getUsersPositions(testAddr))[1][0].toNumber();

      expect(newPositionIndex).to.be.equal(0);
      expect((await dataProvider.getUserReserveData(WETH.address, newPosition)).currentATokenBalance.gte(minReturn)).to.be.true;
      expect((await dataProvider.getUserReserveData(DAI.address, newPosition)).currentVariableDebt.gte(positionMargin)).to.be.true;
      expect((await lendingPool.getUserAccountData(newPosition)).healthFactor.gte(ethers.utils.parseEther('1'))).to.be.true;
      expect(await levered.ownerOf(newPositionIndex)).to.be.equal(testAddr);
    });
  });

  describe("Close position", function () {
    it("Should close position", async function () {
      await DAI.connect(testSigner).approve(levered.address, positionSize);
      await levered.connect(testSigner).openPosition(DAI.address, positionSize, positionMargin, WETH.address, interestRateMode, oneInchParts, minReturn);

      let newPosition = (await levered.getUsersPositions(testAddr))[0][0];
      let newPositionIndex = (await levered.getUsersPositions(testAddr))[1][0].toNumber();
    });
  });
});