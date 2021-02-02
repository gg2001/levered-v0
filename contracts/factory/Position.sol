// SPDX-License-Identifier: MIT
pragma solidity ^0.7.5;

import {SafeMath} from "@openzeppelin/contracts/math/SafeMath.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";
import {FlashLoanReceiverPosition} from "./FlashLoanReceiverPosition.sol";

contract Position is FlashLoanReceiverPosition {
    using SafeMath for uint256;
    using SafeERC20 for IERC20;

    /*
    function deposit(
        address asset,
        uint256 amount,
        address onBehalfOf,
        uint16 referralCode
    ) external onlyOwner {

    }
    */

    function withdraw(
        address asset,
        uint256 amount,
        address to
    ) external onlyOwner returns (uint256) {
        return LENDING_POOL.withdraw(asset, amount, to);
    }

    function borrow(
        address asset,
        uint256 amount,
        uint256 interestRateMode,
        uint16 referralCode,
        address onBehalfOf
    ) external onlyOwner {
        LENDING_POOL.borrow(
            asset,
            amount,
            interestRateMode,
            referralCode,
            onBehalfOf
        );
    }

    /*
    function repay(
        address asset,
        uint256 amount,
        uint256 rateMode,
        address onBehalfOf
    ) external onlyOwner returns (uint256) {
        
    }
    */

    function swapBorrowRateMode(address asset, uint256 rateMode)
        external
        onlyOwner
    {
        LENDING_POOL.swapBorrowRateMode(asset, rateMode);
    }

    function setUserUseReserveAsCollateral(address asset, bool useAsCollateral)
        external
        onlyOwner
    {
        LENDING_POOL.setUserUseReserveAsCollateral(asset, useAsCollateral);
    }

    /**
        This function is called after your contract has received the flash loaned amount
     */
    function executeOperation(
        address[] calldata assets,
        uint256[] calldata amounts,
        uint256[] calldata premiums,
        address initiator,
        bytes calldata params
    ) external override returns (bool) {
        require(
            msg.sender == address(LENDING_POOL),
            "Position: caller is not the LENDING_POOL"
        );

        //
        // This contract now has the funds requested.
        // Your logic goes here.
        //

        // At the end of your logic above, this contract owes
        // the flashloaned amounts + premiums.
        // Therefore ensure your contract has enough to repay
        // these amounts.

        // Approve the LendingPool contract allowance to *pull* the owed amount
        for (uint256 i = 0; i < assets.length; i++) {
            uint256 amountOwing = amounts[i].add(premiums[i]);
            IERC20(assets[i]).approve(address(LENDING_POOL), amountOwing);
        }

        return true;
    }

    function myFlashLoanCall() external onlyOwner {
        address receiverAddress = address(this);

        address[] memory assets = new address[](2);

        uint256[] memory amounts = new uint256[](2);

        // 0 = no debt, 1 = stable, 2 = variable
        uint256[] memory modes = new uint256[](2);

        address onBehalfOf = address(this);
        bytes memory params = "";
        uint16 referralCode = 0;

        LENDING_POOL.flashLoan(
            receiverAddress,
            assets,
            amounts,
            modes,
            onBehalfOf,
            params,
            referralCode
        );
    }
}
