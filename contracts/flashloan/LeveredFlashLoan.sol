// SPDX-License-Identifier: MIT
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
        (
            bool isOpen,
            address[] memory addressArray,
            uint256[] memory uintArray
        ) = abi.decode(params, (bool, address[], uint256[]));
        if (isOpen) {
            openFlashLoan(assets, amounts, premiums, addressArray, uintArray);
        } else {
            closeFlashLoan(assets, amounts, premiums, addressArray, uintArray);
        }
        return true;
    }

    function openFlashLoan(
        address[] calldata assets,
        uint256[] calldata amounts,
        uint256[] calldata premiums,
        address[] memory addressArray,
        uint256[] memory uintArray
    ) private {
        IERC20 receivedAsset = IERC20(assets[0]);
        IERC20 newAsset = IERC20(addressArray[1]);
        uint256 totalAmount = uintArray[1].add(amounts[0]);
        uint256 amountOwing = amounts[0].add(premiums[0]);
        // Swap totalAmount of receivedAsset to newAsset
        receivedAsset.approve(address(oneInchProtocol), totalAmount);
        (, uint256[] memory distribution) =
            oneInchProtocol.getExpectedReturn(
                receivedAsset,
                newAsset,
                totalAmount,
                uintArray[2],
                0
            );
        oneInchProtocol.swap(
            receivedAsset,
            newAsset,
            totalAmount,
            uintArray[3],
            distribution,
            0
        );
        uint256 returnAmount = newAsset.balanceOf(address(this));
        // Deposit returnAmount to LENDING_POOL
        IERC20(addressArray[1]).approve(address(LENDING_POOL), returnAmount);
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
    }

    function closeFlashLoan(
        address[] calldata assets,
        uint256[] calldata amounts,
        uint256[] calldata premiums,
        address[] memory addressArray,
        uint256[] memory uintArray
    ) private {
        IERC20 receivedAsset = IERC20(assets[0]);
        IERC20 newAsset = IERC20(addressArray[1]);
        uint256 amountOwing = amounts[0].add(premiums[0]);
        // Repay
        receivedAsset.approve(address(LENDING_POOL), amounts[0]);
        LENDING_POOL.repay(
            address(receivedAsset),
            amounts[0],
            uintArray[0],
            addressArray[0]
        );
        // Withdraw all
        uint256 withdrawalAmount =
            IPosition(addressArray[0]).withdraw(
                address(LENDING_POOL),
                address(newAsset),
                addressArray[2],
                type(uint256).max,
                address(this)
            );
        // Swap
        newAsset.approve(address(oneInchProtocol), withdrawalAmount);
        (, uint256[] memory distribution) =
            oneInchProtocol.getExpectedReturn(
                newAsset,
                receivedAsset,
                withdrawalAmount,
                uintArray[1],
                0
            );
        //uint256 returnAmount =
        oneInchProtocol.swap(
            newAsset,
            receivedAsset,
            withdrawalAmount,
            uintArray[2],
            distribution,
            0
        );
        uint256 returnAmount = receivedAsset.balanceOf(address(this));
        // Pay back user
        receivedAsset.transfer(addressArray[3], returnAmount.sub(amountOwing));
        // Return flashLoan
        receivedAsset.approve(address(LENDING_POOL), amountOwing);
    }
}
