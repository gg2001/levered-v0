// SPDX-License-Identifier: MIT
pragma solidity ^0.7.5;
pragma experimental ABIEncoderV2;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IChi is IERC20 {
    function mint(uint256 value) external;

    function free(uint256 value) external returns (uint256 freed);

    function freeFromUpTo(address from, uint256 value)
        external
        returns (uint256 freed);
}

interface ISafeERC20Extension {
    function safeApprove(
        IERC20 token,
        address spender,
        uint256 amount
    ) external;

    function safeTransfer(
        IERC20 token,
        address payable target,
        uint256 amount
    ) external;
}

interface IGasDiscountExtension {
    function calculateGas(
        uint256 gasUsed,
        uint256 flags,
        uint256 calldataLength
    ) external pure returns (IChi, uint256);
}

interface IOneInchCaller is ISafeERC20Extension, IGasDiscountExtension {
    struct CallDescription {
        uint256 targetWithMandatory;
        uint256 gasLimit;
        uint256 value;
        bytes data;
    }

    function makeCall(CallDescription memory desc) external;

    function makeCalls(CallDescription[] memory desc) external payable;
}

interface IOneInchExchange {
    struct SwapDescription {
        IERC20 srcToken;
        IERC20 dstToken;
        address srcReceiver;
        address dstReceiver;
        uint256 amount;
        uint256 minReturnAmount;
        uint256 guaranteedAmount;
        uint256 flags;
        address referrer;
        bytes permit;
    }

    function swap(
        IOneInchCaller caller,
        SwapDescription calldata desc,
        IOneInchCaller.CallDescription[] calldata calls
    ) external payable returns (uint256);
}
