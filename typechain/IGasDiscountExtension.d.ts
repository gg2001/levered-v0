/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IGasDiscountExtensionInterface extends ethers.utils.Interface {
  functions: {
    "calculateGas(uint256,uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "calculateGas",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "calculateGas",
    data: BytesLike
  ): Result;

  events: {};
}

export class IGasDiscountExtension extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IGasDiscountExtensionInterface;

  functions: {
    calculateGas(
      gasUsed: BigNumberish,
      flags: BigNumberish,
      calldataLength: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber]>;

    "calculateGas(uint256,uint256,uint256)"(
      gasUsed: BigNumberish,
      flags: BigNumberish,
      calldataLength: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber]>;
  };

  calculateGas(
    gasUsed: BigNumberish,
    flags: BigNumberish,
    calldataLength: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber]>;

  "calculateGas(uint256,uint256,uint256)"(
    gasUsed: BigNumberish,
    flags: BigNumberish,
    calldataLength: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber]>;

  callStatic: {
    calculateGas(
      gasUsed: BigNumberish,
      flags: BigNumberish,
      calldataLength: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber]>;

    "calculateGas(uint256,uint256,uint256)"(
      gasUsed: BigNumberish,
      flags: BigNumberish,
      calldataLength: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber]>;
  };

  filters: {};

  estimateGas: {
    calculateGas(
      gasUsed: BigNumberish,
      flags: BigNumberish,
      calldataLength: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "calculateGas(uint256,uint256,uint256)"(
      gasUsed: BigNumberish,
      flags: BigNumberish,
      calldataLength: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    calculateGas(
      gasUsed: BigNumberish,
      flags: BigNumberish,
      calldataLength: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "calculateGas(uint256,uint256,uint256)"(
      gasUsed: BigNumberish,
      flags: BigNumberish,
      calldataLength: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}