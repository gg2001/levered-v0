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

interface ILeveredInterface extends ethers.utils.Interface {
  functions: {
    "closePosition(uint256,address,address,address,uint256,uint256,uint256)": FunctionFragment;
    "getUsersPositions(address)": FunctionFragment;
    "initialize(address,uint16,address,address,address,string,string)": FunctionFragment;
    "openPosition(address,uint256,uint256,address,uint256,uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "closePosition",
    values: [
      BigNumberish,
      string,
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getUsersPositions",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, BigNumberish, string, string, string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "openPosition",
    values: [
      string,
      BigNumberish,
      BigNumberish,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "closePosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUsersPositions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "openPosition",
    data: BytesLike
  ): Result;

  events: {
    "ClosePosition(address,uint256)": EventFragment;
    "NewPosition(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ClosePosition"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewPosition"): EventFragment;
}

export class ILevered extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ILeveredInterface;

  functions: {
    closePosition(
      positionId: BigNumberish,
      fromAsset: string,
      aTokenAddress: string,
      toAsset: string,
      rateMode: BigNumberish,
      parts: BigNumberish,
      minReturn: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "closePosition(uint256,address,address,address,uint256,uint256,uint256)"(
      positionId: BigNumberish,
      fromAsset: string,
      aTokenAddress: string,
      toAsset: string,
      rateMode: BigNumberish,
      parts: BigNumberish,
      minReturn: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getUsersPositions(
      user: string,
      overrides?: CallOverrides
    ): Promise<[string[], BigNumber[]]>;

    "getUsersPositions(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<[string[], BigNumber[]]>;

    initialize(
      provider: string,
      _referralCode: BigNumberish,
      _referral: string,
      oneInch: string,
      dataProvider: string,
      _name: string,
      _symbol: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "initialize(address,uint16,address,address,address,string,string)"(
      provider: string,
      _referralCode: BigNumberish,
      _referral: string,
      oneInch: string,
      dataProvider: string,
      _name: string,
      _symbol: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    openPosition(
      fromAsset: string,
      initialAmount: BigNumberish,
      marginAmount: BigNumberish,
      toAsset: string,
      interestRateMode: BigNumberish,
      parts: BigNumberish,
      minReturn: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "openPosition(address,uint256,uint256,address,uint256,uint256,uint256)"(
      fromAsset: string,
      initialAmount: BigNumberish,
      marginAmount: BigNumberish,
      toAsset: string,
      interestRateMode: BigNumberish,
      parts: BigNumberish,
      minReturn: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  closePosition(
    positionId: BigNumberish,
    fromAsset: string,
    aTokenAddress: string,
    toAsset: string,
    rateMode: BigNumberish,
    parts: BigNumberish,
    minReturn: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "closePosition(uint256,address,address,address,uint256,uint256,uint256)"(
    positionId: BigNumberish,
    fromAsset: string,
    aTokenAddress: string,
    toAsset: string,
    rateMode: BigNumberish,
    parts: BigNumberish,
    minReturn: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getUsersPositions(
    user: string,
    overrides?: CallOverrides
  ): Promise<[string[], BigNumber[]]>;

  "getUsersPositions(address)"(
    user: string,
    overrides?: CallOverrides
  ): Promise<[string[], BigNumber[]]>;

  initialize(
    provider: string,
    _referralCode: BigNumberish,
    _referral: string,
    oneInch: string,
    dataProvider: string,
    _name: string,
    _symbol: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "initialize(address,uint16,address,address,address,string,string)"(
    provider: string,
    _referralCode: BigNumberish,
    _referral: string,
    oneInch: string,
    dataProvider: string,
    _name: string,
    _symbol: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  openPosition(
    fromAsset: string,
    initialAmount: BigNumberish,
    marginAmount: BigNumberish,
    toAsset: string,
    interestRateMode: BigNumberish,
    parts: BigNumberish,
    minReturn: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "openPosition(address,uint256,uint256,address,uint256,uint256,uint256)"(
    fromAsset: string,
    initialAmount: BigNumberish,
    marginAmount: BigNumberish,
    toAsset: string,
    interestRateMode: BigNumberish,
    parts: BigNumberish,
    minReturn: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    closePosition(
      positionId: BigNumberish,
      fromAsset: string,
      aTokenAddress: string,
      toAsset: string,
      rateMode: BigNumberish,
      parts: BigNumberish,
      minReturn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "closePosition(uint256,address,address,address,uint256,uint256,uint256)"(
      positionId: BigNumberish,
      fromAsset: string,
      aTokenAddress: string,
      toAsset: string,
      rateMode: BigNumberish,
      parts: BigNumberish,
      minReturn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getUsersPositions(
      user: string,
      overrides?: CallOverrides
    ): Promise<[string[], BigNumber[]]>;

    "getUsersPositions(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<[string[], BigNumber[]]>;

    initialize(
      provider: string,
      _referralCode: BigNumberish,
      _referral: string,
      oneInch: string,
      dataProvider: string,
      _name: string,
      _symbol: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "initialize(address,uint16,address,address,address,string,string)"(
      provider: string,
      _referralCode: BigNumberish,
      _referral: string,
      oneInch: string,
      dataProvider: string,
      _name: string,
      _symbol: string,
      overrides?: CallOverrides
    ): Promise<void>;

    openPosition(
      fromAsset: string,
      initialAmount: BigNumberish,
      marginAmount: BigNumberish,
      toAsset: string,
      interestRateMode: BigNumberish,
      parts: BigNumberish,
      minReturn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "openPosition(address,uint256,uint256,address,uint256,uint256,uint256)"(
      fromAsset: string,
      initialAmount: BigNumberish,
      marginAmount: BigNumberish,
      toAsset: string,
      interestRateMode: BigNumberish,
      parts: BigNumberish,
      minReturn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    ClosePosition(user: string | null, positionId: null): EventFilter;

    NewPosition(
      user: string | null,
      position: null,
      positionId: null
    ): EventFilter;
  };

  estimateGas: {
    closePosition(
      positionId: BigNumberish,
      fromAsset: string,
      aTokenAddress: string,
      toAsset: string,
      rateMode: BigNumberish,
      parts: BigNumberish,
      minReturn: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "closePosition(uint256,address,address,address,uint256,uint256,uint256)"(
      positionId: BigNumberish,
      fromAsset: string,
      aTokenAddress: string,
      toAsset: string,
      rateMode: BigNumberish,
      parts: BigNumberish,
      minReturn: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    getUsersPositions(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getUsersPositions(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      provider: string,
      _referralCode: BigNumberish,
      _referral: string,
      oneInch: string,
      dataProvider: string,
      _name: string,
      _symbol: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "initialize(address,uint16,address,address,address,string,string)"(
      provider: string,
      _referralCode: BigNumberish,
      _referral: string,
      oneInch: string,
      dataProvider: string,
      _name: string,
      _symbol: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    openPosition(
      fromAsset: string,
      initialAmount: BigNumberish,
      marginAmount: BigNumberish,
      toAsset: string,
      interestRateMode: BigNumberish,
      parts: BigNumberish,
      minReturn: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "openPosition(address,uint256,uint256,address,uint256,uint256,uint256)"(
      fromAsset: string,
      initialAmount: BigNumberish,
      marginAmount: BigNumberish,
      toAsset: string,
      interestRateMode: BigNumberish,
      parts: BigNumberish,
      minReturn: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    closePosition(
      positionId: BigNumberish,
      fromAsset: string,
      aTokenAddress: string,
      toAsset: string,
      rateMode: BigNumberish,
      parts: BigNumberish,
      minReturn: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "closePosition(uint256,address,address,address,uint256,uint256,uint256)"(
      positionId: BigNumberish,
      fromAsset: string,
      aTokenAddress: string,
      toAsset: string,
      rateMode: BigNumberish,
      parts: BigNumberish,
      minReturn: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getUsersPositions(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getUsersPositions(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      provider: string,
      _referralCode: BigNumberish,
      _referral: string,
      oneInch: string,
      dataProvider: string,
      _name: string,
      _symbol: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "initialize(address,uint16,address,address,address,string,string)"(
      provider: string,
      _referralCode: BigNumberish,
      _referral: string,
      oneInch: string,
      dataProvider: string,
      _name: string,
      _symbol: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    openPosition(
      fromAsset: string,
      initialAmount: BigNumberish,
      marginAmount: BigNumberish,
      toAsset: string,
      interestRateMode: BigNumberish,
      parts: BigNumberish,
      minReturn: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "openPosition(address,uint256,uint256,address,uint256,uint256,uint256)"(
      fromAsset: string,
      initialAmount: BigNumberish,
      marginAmount: BigNumberish,
      toAsset: string,
      interestRateMode: BigNumberish,
      parts: BigNumberish,
      minReturn: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
