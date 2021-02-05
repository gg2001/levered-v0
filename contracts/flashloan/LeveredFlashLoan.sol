// SPDX-License-Identifier: agpl-3.0
pragma solidity ^0.7.5;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";
import {SafeMath} from "@openzeppelin/contracts/math/SafeMath.sol";
import {FlashLoanReceiverBase} from "./FlashLoanReceiverBase.sol";
import {ILendingPool} from "../interfaces/ILendingPool.sol";
import {IOneSplit} from "../interfaces/IOneSplit.sol";
import {IPosition} from "../interfaces/IPosition.sol";

contract LeveredFlashLoan is FlashLoanReceiverBase {
    using SafeMath for uint256;
    using SafeERC20 for IERC20;

    uint16 public referralCodeAave;
    address public referralOneInch;
    IOneSplit public oneInchProtocol;

    function initializeReferral(
        uint16 _referralCode,
        address _referral,
        address oneInch
    ) internal {
        referralCodeAave = _referralCode;
        referralOneInch = _referral;
        oneInchProtocol = IOneSplit(oneInch);
    }

    function executeOperation(
        address[] calldata assets,
        uint256[] calldata amounts,
        uint256[] calldata premiums,
        address initiator,
        bytes calldata params
    ) external override returns (bool) {
        require(
            address(LENDING_POOL) == msg.sender,
            "LeveredFlashLoan: msg.sender not LENDING_POOL"
        );
        require(
            initiator == address(this),
            "LeveredFlashLoan: initiator not address(this)"
        );
        (address[] memory addressArray, uint256[] memory uintArray) =
            abi.decode(params, (address[], uint256[]));
        IERC20 receivedAsset = IERC20(assets[0]);
        IERC20 newAsset = IERC20(addressArray[1]);
        uint256 totalAmount = uintArray[1].add(amounts[0]);
        uint256 amountOwing = amounts[0].add(premiums[0]);
        // Swap totalAmount of receivedAsset to newAsset
        (, uint256[] memory distribution) =
            oneInchProtocol.getExpectedReturn(
                receivedAsset,
                newAsset,
                totalAmount,
                uintArray[2],
                0
            );
        uint256 returnAmount =
            oneInchProtocol.swap(
                receivedAsset,
                newAsset,
                totalAmount,
                uintArray[3],
                distribution,
                0
            );
        // Deposit returnAmount to LENDING_POOL
        LENDING_POOL.deposit(
            addressArray[1],
            returnAmount,
            addressArray[0],
            referralCodeAave
        );
        // Borrow amountOwing from newPosition
        IPosition(addressArray[0]).borrow(
            address(LENDING_POOL),
            address(receivedAsset),
            amountOwing,
            uintArray[0],
            referralCodeAave,
            addressArray[0]
        );
        // Return flashLoan
        receivedAsset.approve(address(LENDING_POOL), amountOwing);
        return true;
    }
}
