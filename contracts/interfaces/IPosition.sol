// SPDX-License-Identifier: MIT
pragma solidity ^0.7.5;

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
