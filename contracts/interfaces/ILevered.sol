// SPDX-License-Identifier: MIT
pragma solidity ^0.7.5;

interface ILevered {
    event NewPosition(
        address indexed user,
        address position,
        uint256 positionId
    );

    event ClosePosition(address indexed user, uint256 positionId);

    function initialize(
        address provider,
        uint16 _referralCode,
        address _referral,
        address oneInch,
        address dataProvider,
        string memory _name,
        string memory _symbol
    ) external;

    function openPosition(
        address fromAsset,
        uint256 initialAmount,
        uint256 marginAmount,
        address toAsset,
        uint256 interestRateMode,
        uint256 parts,
        uint256 minReturn
    ) external;

    function closePosition(
        uint256 positionId,
        address fromAsset,
        address aTokenAddress,
        address toAsset,
        uint256 rateMode,
        uint256 parts,
        uint256 minReturn
    ) external;

    function getUsersPositions(address user)
        external
        view
        returns (address[] memory, uint256[] memory);
}
