// SPDX-License-Identifier: MIT
pragma solidity ^0.7.5;

import {
    Initializable
} from "@openzeppelin/contracts-upgradeable/proxy/Initializable.sol";
import {SafeMath} from "@openzeppelin/contracts/math/SafeMath.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";
import {
    ILendingPoolAddressesProvider
} from "../interfaces/ILendingPoolAddressesProvider.sol";
import {ILendingPool} from "../interfaces/ILendingPool.sol";

interface IPosition {
    function owner() external view returns (address);

    function initialize() external;

    function withdraw(
        address lendingPool,
        address asset,
        address aTokenAddress,
        uint256 amount,
        address to
    ) external returns (uint256);

    function borrow(
        address lendingPool,
        address asset,
        uint256 amount,
        uint256 interestRateMode,
        uint16 referralCode,
        address onBehalfOf
    ) external;

    function swapBorrowRateMode(
        address lendingPool,
        address asset,
        uint256 rateMode
    ) external;

    function setUserUseReserveAsCollateral(
        address lendingPool,
        address asset,
        bool useAsCollateral
    ) external;

    function withdrawETH(address payable to, uint256 amount) external;

    function withdrawToken(
        address asset,
        address to,
        uint256 amount
    ) external;
}
