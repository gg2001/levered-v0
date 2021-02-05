// SPDX-License-Identifier: agpl-3.0
pragma solidity ^0.7.5;

import {IFlashLoanReceiver} from "../interfaces/IFlashLoanReceiver.sol";
import {
    ILendingPoolAddressesProvider
} from "../interfaces/ILendingPoolAddressesProvider.sol";
import {ILendingPool} from "../interfaces/ILendingPool.sol";

abstract contract FlashLoanReceiverBase is IFlashLoanReceiver {
    ILendingPoolAddressesProvider public override ADDRESSES_PROVIDER;
    ILendingPool public override LENDING_POOL;

    function initializeProvider(ILendingPoolAddressesProvider provider) internal {
        ADDRESSES_PROVIDER = provider;
        LENDING_POOL = ILendingPool(provider.getLendingPool());
    }
}
