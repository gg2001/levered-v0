// SPDX-License-Identifier: MIT
pragma solidity ^0.7.5;

import {IFlashLoanReceiver} from "../interfaces/IFlashLoanReceiver.sol";
import {
    ILendingPoolAddressesProvider
} from "../interfaces/ILendingPoolAddressesProvider.sol";
import {ILendingPool} from "../interfaces/ILendingPool.sol";
import {IProtocolDataProvider} from "../interfaces/IProtocolDataProvider.sol";

abstract contract FlashLoanReceiverBase is IFlashLoanReceiver {
    ILendingPoolAddressesProvider public override ADDRESSES_PROVIDER;
    ILendingPool public override LENDING_POOL;
    IProtocolDataProvider public DATA_PROVIDER;

    function initializeProvider(
        ILendingPoolAddressesProvider provider,
        address dataProvider
    ) internal {
        ADDRESSES_PROVIDER = provider;
        LENDING_POOL = ILendingPool(provider.getLendingPool());
        DATA_PROVIDER = IProtocolDataProvider(dataProvider);
    }
}
