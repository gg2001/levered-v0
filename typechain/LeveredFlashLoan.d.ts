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
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface LeveredFlashLoanInterface extends ethers.utils.Interface {
  functions: {
    "ADDRESSES_PROVIDER()": FunctionFragment;
    "DATA_PROVIDER()": FunctionFragment;
    "LENDING_POOL()": FunctionFragment;
    "executeOperation(address[],uint256[],uint256[],address,bytes)": FunctionFragment;
    "oneInchProtocol()": FunctionFragment;
    "referralCodeAave()": FunctionFragment;
    "referralOneInch()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "ADDRESSES_PROVIDER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DATA_PROVIDER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "LENDING_POOL",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "executeOperation",
    values: [string[], BigNumberish[], BigNumberish[], string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "oneInchProtocol",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "referralCodeAave",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "referralOneInch",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "ADDRESSES_PROVIDER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DATA_PROVIDER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "LENDING_POOL",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeOperation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "oneInchProtocol",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "referralCodeAave",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "referralOneInch",
    data: BytesLike
  ): Result;

  events: {};
}

export class LeveredFlashLoan extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: LeveredFlashLoanInterface;

  functions: {
    ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<[string]>;

    "ADDRESSES_PROVIDER()"(overrides?: CallOverrides): Promise<[string]>;

    DATA_PROVIDER(overrides?: CallOverrides): Promise<[string]>;

    "DATA_PROVIDER()"(overrides?: CallOverrides): Promise<[string]>;

    LENDING_POOL(overrides?: CallOverrides): Promise<[string]>;

    "LENDING_POOL()"(overrides?: CallOverrides): Promise<[string]>;

    executeOperation(
      assets: string[],
      amounts: BigNumberish[],
      premiums: BigNumberish[],
      initiator: string,
      params: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "executeOperation(address[],uint256[],uint256[],address,bytes)"(
      assets: string[],
      amounts: BigNumberish[],
      premiums: BigNumberish[],
      initiator: string,
      params: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    oneInchProtocol(overrides?: CallOverrides): Promise<[string]>;

    "oneInchProtocol()"(overrides?: CallOverrides): Promise<[string]>;

    referralCodeAave(overrides?: CallOverrides): Promise<[number]>;

    "referralCodeAave()"(overrides?: CallOverrides): Promise<[number]>;

    referralOneInch(overrides?: CallOverrides): Promise<[string]>;

    "referralOneInch()"(overrides?: CallOverrides): Promise<[string]>;
  };

  ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<string>;

  "ADDRESSES_PROVIDER()"(overrides?: CallOverrides): Promise<string>;

  DATA_PROVIDER(overrides?: CallOverrides): Promise<string>;

  "DATA_PROVIDER()"(overrides?: CallOverrides): Promise<string>;

  LENDING_POOL(overrides?: CallOverrides): Promise<string>;

  "LENDING_POOL()"(overrides?: CallOverrides): Promise<string>;

  executeOperation(
    assets: string[],
    amounts: BigNumberish[],
    premiums: BigNumberish[],
    initiator: string,
    params: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "executeOperation(address[],uint256[],uint256[],address,bytes)"(
    assets: string[],
    amounts: BigNumberish[],
    premiums: BigNumberish[],
    initiator: string,
    params: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  oneInchProtocol(overrides?: CallOverrides): Promise<string>;

  "oneInchProtocol()"(overrides?: CallOverrides): Promise<string>;

  referralCodeAave(overrides?: CallOverrides): Promise<number>;

  "referralCodeAave()"(overrides?: CallOverrides): Promise<number>;

  referralOneInch(overrides?: CallOverrides): Promise<string>;

  "referralOneInch()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<string>;

    "ADDRESSES_PROVIDER()"(overrides?: CallOverrides): Promise<string>;

    DATA_PROVIDER(overrides?: CallOverrides): Promise<string>;

    "DATA_PROVIDER()"(overrides?: CallOverrides): Promise<string>;

    LENDING_POOL(overrides?: CallOverrides): Promise<string>;

    "LENDING_POOL()"(overrides?: CallOverrides): Promise<string>;

    executeOperation(
      assets: string[],
      amounts: BigNumberish[],
      premiums: BigNumberish[],
      initiator: string,
      params: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "executeOperation(address[],uint256[],uint256[],address,bytes)"(
      assets: string[],
      amounts: BigNumberish[],
      premiums: BigNumberish[],
      initiator: string,
      params: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    oneInchProtocol(overrides?: CallOverrides): Promise<string>;

    "oneInchProtocol()"(overrides?: CallOverrides): Promise<string>;

    referralCodeAave(overrides?: CallOverrides): Promise<number>;

    "referralCodeAave()"(overrides?: CallOverrides): Promise<number>;

    referralOneInch(overrides?: CallOverrides): Promise<string>;

    "referralOneInch()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<BigNumber>;

    "ADDRESSES_PROVIDER()"(overrides?: CallOverrides): Promise<BigNumber>;

    DATA_PROVIDER(overrides?: CallOverrides): Promise<BigNumber>;

    "DATA_PROVIDER()"(overrides?: CallOverrides): Promise<BigNumber>;

    LENDING_POOL(overrides?: CallOverrides): Promise<BigNumber>;

    "LENDING_POOL()"(overrides?: CallOverrides): Promise<BigNumber>;

    executeOperation(
      assets: string[],
      amounts: BigNumberish[],
      premiums: BigNumberish[],
      initiator: string,
      params: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "executeOperation(address[],uint256[],uint256[],address,bytes)"(
      assets: string[],
      amounts: BigNumberish[],
      premiums: BigNumberish[],
      initiator: string,
      params: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    oneInchProtocol(overrides?: CallOverrides): Promise<BigNumber>;

    "oneInchProtocol()"(overrides?: CallOverrides): Promise<BigNumber>;

    referralCodeAave(overrides?: CallOverrides): Promise<BigNumber>;

    "referralCodeAave()"(overrides?: CallOverrides): Promise<BigNumber>;

    referralOneInch(overrides?: CallOverrides): Promise<BigNumber>;

    "referralOneInch()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    ADDRESSES_PROVIDER(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "ADDRESSES_PROVIDER()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    DATA_PROVIDER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "DATA_PROVIDER()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    LENDING_POOL(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "LENDING_POOL()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    executeOperation(
      assets: string[],
      amounts: BigNumberish[],
      premiums: BigNumberish[],
      initiator: string,
      params: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "executeOperation(address[],uint256[],uint256[],address,bytes)"(
      assets: string[],
      amounts: BigNumberish[],
      premiums: BigNumberish[],
      initiator: string,
      params: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    oneInchProtocol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "oneInchProtocol()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    referralCodeAave(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "referralCodeAave()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    referralOneInch(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "referralOneInch()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
