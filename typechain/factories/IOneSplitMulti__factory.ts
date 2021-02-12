/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IOneSplitMulti } from "../IOneSplitMulti";

export class IOneSplitMulti__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IOneSplitMulti {
    return new Contract(address, _abi, signerOrProvider) as IOneSplitMulti;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "fromToken",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "destToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "parts",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "flags",
        type: "uint256",
      },
    ],
    name: "getExpectedReturn",
    outputs: [
      {
        internalType: "uint256",
        name: "returnAmount",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "distribution",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "fromToken",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "destToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "parts",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "flags",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "destTokenEthPriceTimesGasPrice",
        type: "uint256",
      },
    ],
    name: "getExpectedReturnWithGas",
    outputs: [
      {
        internalType: "uint256",
        name: "returnAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "estimateGasAmount",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "distribution",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20[]",
        name: "tokens",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "parts",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "flags",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "destTokenEthPriceTimesGasPrices",
        type: "uint256[]",
      },
    ],
    name: "getExpectedReturnWithGasMulti",
    outputs: [
      {
        internalType: "uint256[]",
        name: "returnAmounts",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "estimateGasAmount",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "distribution",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "fromToken",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "destToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minReturn",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "distribution",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "flags",
        type: "uint256",
      },
    ],
    name: "swap",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20[]",
        name: "tokens",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minReturn",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "distribution",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "flags",
        type: "uint256[]",
      },
    ],
    name: "swapMulti",
    outputs: [
      {
        internalType: "uint256",
        name: "returnAmount",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
];
