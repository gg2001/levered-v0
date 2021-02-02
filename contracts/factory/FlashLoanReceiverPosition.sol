// SPDX-License-Identifier: agpl-3.0
pragma solidity ^0.7.5;

import {
    Initializable
} from "@openzeppelin/contracts-upgradeable/proxy/Initializable.sol";
import {IFlashLoanReceiver} from "../interfaces/IFlashLoanReceiver.sol";
import {
    ILendingPoolAddressesProvider
} from "../interfaces/ILendingPoolAddressesProvider.sol";
import {ILendingPool} from "../interfaces/ILendingPool.sol";

abstract contract FlashLoanReceiverPosition is
    IFlashLoanReceiver,
    Initializable
{
    ILendingPoolAddressesProvider public override ADDRESSES_PROVIDER;
    ILendingPool public override LENDING_POOL;
    address public owner;

    modifier onlyOwner() {
        require(
            owner == msg.sender,
            "FlashLoanReceiverBase: caller is not the owner"
        );
        _;
    }

    function initialize(ILendingPoolAddressesProvider provider)
        public
        initializer
    {
        owner = msg.sender;
        ADDRESSES_PROVIDER = provider;
        LENDING_POOL = ILendingPool(provider.getLendingPool());
    }
}
