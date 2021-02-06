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
import {ILevered} from "./interfaces/ILevered.sol";
import {ILendingPool} from "./interfaces/ILendingPool.sol";

contract Levered is
    ILevered,
    MinimalProxy,
    LeveredFlashLoan,
    Initializable,
    ERC721Upgradeable
{
    using SafeMath for uint256;
    using SafeERC20 for IERC20;

    IPosition public positionContractCore;
    address[] public positionList;

    function initialize(
        address provider,
        uint16 _referralCode,
        address _referral,
        address oneInch,
        address dataProvider,
        string memory _name,
        string memory _symbol
    ) external override initializer {
        super.initializeProvider(
            ILendingPoolAddressesProvider(provider),
            dataProvider
        );
        super.initializeReferral(_referralCode, _referral, oneInch);
        super.__ERC721_init(_name, _symbol);
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
    ) external override {
        // new Position
        address newPosition = createClone(address(positionContractCore));
        IPosition(newPosition).initialize();
        // Transfer initialAmount of fromAsset from msg.sender
        IERC20(fromAsset).transferFrom(
            msg.sender,
            address(this),
            initialAmount
        );
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
        positionList.push(newPosition);
        _safeMint(msg.sender, positionList.length - 1);
        emit NewPosition(msg.sender, newPosition, positionList.length - 1);
    }

    function closePosition(
        uint256 positionId,
        address fromAsset,
        address aTokenAddress,
        address toAsset,
        uint256 rateMode,
        uint256 parts,
        uint256 minReturn
    ) external override {
        require(
            msg.sender == ownerOf(positionId),
            "Levered: msg.sender not owner of positionID"
        );
        //address positionAddress = positionList[positionId];
        uint256 debtAmount;
        if (rateMode == 1) {
            (, debtAmount, , , , , , , ) = DATA_PROVIDER.getUserReserveData(
                fromAsset,
                positionList[positionId]
            );
        } else {
            (, , debtAmount, , , , , , ) = DATA_PROVIDER.getUserReserveData(
                fromAsset,
                positionList[positionId]
            );
        }
        address[] memory assets = new address[](1);
        assets[0] = fromAsset;
        uint256[] memory amounts = new uint256[](1);
        amounts[0] = debtAmount;
        uint256[] memory modes = new uint256[](1);
        modes[0] = 0;
        address[] memory addressArray = new address[](4);
        addressArray[0] = positionList[positionId];
        addressArray[1] = toAsset;
        addressArray[2] = aTokenAddress;
        addressArray[3] = msg.sender;
        uint256[] memory uintArray = new uint256[](3);
        uintArray[0] = rateMode;
        uintArray[1] = parts;
        uintArray[2] = minReturn;
        bytes memory params = abi.encode(false, addressArray, uintArray);
        LENDING_POOL.flashLoan(
            address(this),
            assets,
            amounts,
            modes,
            address(this),
            params,
            referralCodeAave
        );
        _burn(positionId);
        emit ClosePosition(msg.sender, positionId);
    }

    function getUsersPositions(address user)
        external
        view
        override
        returns (address[] memory, uint256[] memory)
    {
        uint256 userBalance = balanceOf(user);
        address[] memory addressList = new address[](userBalance);
        uint256[] memory positionIdList = new uint256[](userBalance);
        for (uint256 i = 0; i < userBalance; i++) {
            uint256 positionId = tokenOfOwnerByIndex(user, i);
            addressList[i] = positionList[positionId];
            positionIdList[i] = positionId;
        }
        return (addressList, positionIdList);
    }
}
