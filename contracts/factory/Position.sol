// SPDX-License-Identifier: MIT
pragma solidity ^0.7.5;

import {
    Initializable
} from "@openzeppelin/contracts-upgradeable/proxy/Initializable.sol";
import {SafeMath} from "@openzeppelin/contracts/math/SafeMath.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";
import {IPosition} from "../interfaces/IPosition.sol";
import {ILendingPool} from "../interfaces/ILendingPool.sol";

contract Position is IPosition, Initializable {
    using SafeMath for uint256;
    using SafeERC20 for IERC20;

    address public override owner;

    modifier onlyOwner() {
        require(owner == msg.sender, "Position: caller is not the owner");
        _;
    }

    function initialize() external override initializer {
        owner = msg.sender;
    }

    function withdraw(
        address lendingPool,
        address asset,
        address aTokenAddress,
        uint256 amount,
        address to
    ) external override onlyOwner returns (uint256) {
        IERC20 aToken = IERC20(aTokenAddress);
        aToken.approve(lendingPool, aToken.balanceOf(address(this)));
        uint256 amountToWithdraw =
            ILendingPool(lendingPool).withdraw(asset, amount, to);
        emit WithdrawPosition(asset, address(this), to, amount);
        return amountToWithdraw;
    }

    function borrow(
        address lendingPool,
        address asset,
        uint256 amount,
        uint256 interestRateMode,
        uint16 referralCode,
        address onBehalfOf
    ) external override onlyOwner {
        ILendingPool(lendingPool).borrow(
            asset,
            amount,
            interestRateMode,
            referralCode,
            onBehalfOf
        );
        IERC20(asset).transfer(msg.sender, amount);
        emit BorrowPosition(
            asset,
            msg.sender,
            address(this),
            amount,
            interestRateMode
        );
    }

    function swapBorrowRateMode(
        address lendingPool,
        address asset,
        uint256 rateMode
    ) external override onlyOwner {
        ILendingPool(lendingPool).swapBorrowRateMode(asset, rateMode);
        emit SwapPosition(asset, address(this), rateMode);
    }

    function setUserUseReserveAsCollateral(
        address lendingPool,
        address asset,
        bool useAsCollateral
    ) external override onlyOwner {
        ILendingPool(lendingPool).setUserUseReserveAsCollateral(
            asset,
            useAsCollateral
        );
        emit ReserveUsedAsCollateralEnabledPosition(asset, address(this));
    }

    function withdrawETH(address payable to, uint256 amount)
        external
        override
        onlyOwner
    {
        to.transfer(amount);
        emit WithdrawTokens(address(0), to, amount);
    }

    function withdrawToken(
        address asset,
        address to,
        uint256 amount
    ) external override onlyOwner {
        IERC20(asset).transfer(to, amount);
        emit WithdrawTokens(asset, to, amount);
    }
}
