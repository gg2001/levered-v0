// SPDX-License-Identifier: MIT
pragma solidity ^0.7.5;

import {
    ERC721Upgradeable
} from "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import {
    Initializable
} from "@openzeppelin/contracts-upgradeable/proxy/Initializable.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";
import {SafeMath} from "@openzeppelin/contracts/math/SafeMath.sol";
import {MinimalProxy} from "./factory/MinimalProxy.sol";
import {Position} from "./factory/Position.sol";
import {LeveredFlashLoan} from "./flashloan/LeveredFlashLoan.sol";
import {
    ILendingPoolAddressesProvider
} from "./interfaces/ILendingPoolAddressesProvider.sol";
import {IPosition} from "./interfaces/IPosition.sol";
import {ILendingPool} from "./interfaces/ILendingPool.sol";
import {IOneSplit} from "./interfaces/IOneSplit.sol";

contract Levered is
    MinimalProxy,
    LeveredFlashLoan,
    Initializable
{
    using SafeMath for uint256;
    using SafeERC20 for IERC20;

    IPosition public positionContractCore;
    IPosition public newPos;

    function initialize(
        address provider,
        uint16 _referralCode,
        address _referral,
        address oneInch,
        address dataProvider
    ) external initializer {
        super.initializeProvider(ILendingPoolAddressesProvider(provider), dataProvider);
        super.initializeReferral(_referralCode, _referral, oneInch);
        positionContractCore = new Position();
        positionContractCore.initialize();
    }

    function openPosition(
        address fromAsset,
        uint256 initialAmount,
        uint256 marginAmount,
        address toAsset,
        uint256 interestRateMode,
        uint256 parts,
        uint256 minReturn
    ) external returns (address) {
        // new Position
        address newPosition = createClone(address(positionContractCore));
        IPosition(newPosition).initialize();
        // Transfer initialAmount of fromAsset from msg.sender
        IERC20(fromAsset).transferFrom(msg.sender, address(this), initialAmount);
        // Call LENDING_POOL.flashLoan
        address[] memory assets = new address[](1);
        assets[0] = fromAsset;
        uint256[] memory amounts = new uint256[](1);
        amounts[0] = marginAmount;
        uint256[] memory modes = new uint256[](1);
        modes[0] = 0;
        address[] memory addressArray = new address[](2);
        addressArray[0] = newPosition;
        addressArray[1] = toAsset;
        uint256[] memory uintArray = new uint256[](4);
        uintArray[0] = interestRateMode;
        uintArray[1] = initialAmount;
        uintArray[2] = parts;
        uintArray[3] = minReturn;
        bytes memory params = abi.encode(true, addressArray, uintArray);
        address receiverAddress = address(this);
        address onBehalfOf = address(this);
        LENDING_POOL.flashLoan(
            receiverAddress,
            assets,
            amounts,
            modes,
            onBehalfOf,
            params,
            referralCodeAave
        );
        newPos = IPosition(newPosition);
        return newPosition;
    }

    function closePosition(
        address positionAddress,
        address fromAsset,
        address aTokenAddress,
        address toAsset,
        uint256 rateMode,
        uint256 parts,
        uint256 minReturn
    ) external {
        uint256 debtAmount;
        if (rateMode == 1) {
            (, debtAmount,,,,,,,) = DATA_PROVIDER.getUserReserveData(fromAsset, positionAddress);
        } else {
            (,, debtAmount,,,,,,) = DATA_PROVIDER.getUserReserveData(fromAsset, positionAddress);
        }
        address[] memory assets = new address[](1);
        assets[0] = fromAsset;
        uint256[] memory amounts = new uint256[](1);
        amounts[0] = debtAmount;
        uint256[] memory modes = new uint256[](1);
        modes[0] = 0;
        address[] memory addressArray = new address[](4);
        addressArray[0] = positionAddress;
        addressArray[1] = toAsset;
        addressArray[2] = aTokenAddress;
        addressArray[3] = msg.sender;
        uint256[] memory uintArray = new uint256[](3);
        uintArray[0] = rateMode;
        uintArray[1] = parts;
        uintArray[2] = minReturn;
        bytes memory params = abi.encode(false, addressArray, uintArray);
        address receiverAddress = address(this);
        address onBehalfOf = address(this);
        LENDING_POOL.flashLoan(
            receiverAddress,
            assets,
            amounts,
            modes,
            onBehalfOf,
            params,
            referralCodeAave
        );
    }
}