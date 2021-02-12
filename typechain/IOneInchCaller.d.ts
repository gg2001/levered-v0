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
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IOneInchCallerInterface extends ethers.utils.Interface {
  functions: {
    "calculateGas(uint256,uint256,uint256)": FunctionFragment;
    "makeCall(tuple)": FunctionFragment;
    "makeCalls(tuple[])": FunctionFragment;
    "safeApprove(address,address,uint256)": FunctionFragment;
    "safeTransfer(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "calculateGas",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "makeCall",
    values: [
      {
        targetWithMandatory: BigNumberish;
        gasLimit: BigNumberish;
        value: BigNumberish;
        data: BytesLike;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "makeCalls",
    values: [
      {
        targetWithMandatory: BigNumberish;
        gasLimit: BigNumberish;
        value: BigNumberish;
        data: BytesLike;
      }[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "safeApprove",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransfer",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "calculateGas",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "makeCall", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "makeCalls", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "safeApprove",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeTransfer",
    data: BytesLike
  ): Result;

  events: {};
}

export class IOneInchCaller extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IOneInchCallerInterface;

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

    makeCall(
      desc: {
        targetWithMandatory: BigNumberish;
        gasLimit: BigNumberish;
        value: BigNumberish;
        data: BytesLike;
      },
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "makeCall(tuple)"(
      desc: {
        targetWithMandatory: BigNumberish;
        gasLimit: BigNumberish;
        value: BigNumberish;
        data: BytesLike;
      },
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    makeCalls(
      desc: {
        targetWithMandatory: BigNumberish;
        gasLimit: BigNumberish;
        value: BigNumberish;
        data: BytesLike;
      }[],
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "makeCalls(tuple[])"(
      desc: {
        targetWithMandatory: BigNumberish;
        gasLimit: BigNumberish;
        value: BigNumberish;
        data: BytesLike;
      }[],
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    safeApprove(
      token: string,
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "safeApprove(address,address,uint256)"(
      token: string,
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    safeTransfer(
      token: string,
      target: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "safeTransfer(address,address,uint256)"(
      token: string,
      target: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
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

  makeCall(
    desc: {
      targetWithMandatory: BigNumberish;
      gasLimit: BigNumberish;
      value: BigNumberish;
      data: BytesLike;
    },
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "makeCall(tuple)"(
    desc: {
      targetWithMandatory: BigNumberish;
      gasLimit: BigNumberish;
      value: BigNumberish;
      data: BytesLike;
    },
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  makeCalls(
    desc: {
      targetWithMandatory: BigNumberish;
      gasLimit: BigNumberish;
      value: BigNumberish;
      data: BytesLike;
    }[],
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "makeCalls(tuple[])"(
    desc: {
      targetWithMandatory: BigNumberish;
      gasLimit: BigNumberish;
      value: BigNumberish;
      data: BytesLike;
    }[],
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  safeApprove(
    token: string,
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "safeApprove(address,address,uint256)"(
    token: string,
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  safeTransfer(
    token: string,
    target: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "safeTransfer(address,address,uint256)"(
    token: string,
    target: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

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

    makeCall(
      desc: {
        targetWithMandatory: BigNumberish;
        gasLimit: BigNumberish;
        value: BigNumberish;
        data: BytesLike;
      },
      overrides?: CallOverrides
    ): Promise<void>;

    "makeCall(tuple)"(
      desc: {
        targetWithMandatory: BigNumberish;
        gasLimit: BigNumberish;
        value: BigNumberish;
        data: BytesLike;
      },
      overrides?: CallOverrides
    ): Promise<void>;

    makeCalls(
      desc: {
        targetWithMandatory: BigNumberish;
        gasLimit: BigNumberish;
        value: BigNumberish;
        data: BytesLike;
      }[],
      overrides?: CallOverrides
    ): Promise<void>;

    "makeCalls(tuple[])"(
      desc: {
        targetWithMandatory: BigNumberish;
        gasLimit: BigNumberish;
        value: BigNumberish;
        data: BytesLike;
      }[],
      overrides?: CallOverrides
    ): Promise<void>;

    safeApprove(
      token: string,
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "safeApprove(address,address,uint256)"(
      token: string,
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    safeTransfer(
      token: string,
      target: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "safeTransfer(address,address,uint256)"(
      token: string,
      target: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
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

    makeCall(
      desc: {
        targetWithMandatory: BigNumberish;
        gasLimit: BigNumberish;
        value: BigNumberish;
        data: BytesLike;
      },
      overrides?: Overrides
    ): Promise<BigNumber>;

    "makeCall(tuple)"(
      desc: {
        targetWithMandatory: BigNumberish;
        gasLimit: BigNumberish;
        value: BigNumberish;
        data: BytesLike;
      },
      overrides?: Overrides
    ): Promise<BigNumber>;

    makeCalls(
      desc: {
        targetWithMandatory: BigNumberish;
        gasLimit: BigNumberish;
        value: BigNumberish;
        data: BytesLike;
      }[],
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "makeCalls(tuple[])"(
      desc: {
        targetWithMandatory: BigNumberish;
        gasLimit: BigNumberish;
        value: BigNumberish;
        data: BytesLike;
      }[],
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    safeApprove(
      token: string,
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "safeApprove(address,address,uint256)"(
      token: string,
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    safeTransfer(
      token: string,
      target: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "safeTransfer(address,address,uint256)"(
      token: string,
      target: string,
      amount: BigNumberish,
      overrides?: Overrides
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

    makeCall(
      desc: {
        targetWithMandatory: BigNumberish;
        gasLimit: BigNumberish;
        value: BigNumberish;
        data: BytesLike;
      },
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "makeCall(tuple)"(
      desc: {
        targetWithMandatory: BigNumberish;
        gasLimit: BigNumberish;
        value: BigNumberish;
        data: BytesLike;
      },
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    makeCalls(
      desc: {
        targetWithMandatory: BigNumberish;
        gasLimit: BigNumberish;
        value: BigNumberish;
        data: BytesLike;
      }[],
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "makeCalls(tuple[])"(
      desc: {
        targetWithMandatory: BigNumberish;
        gasLimit: BigNumberish;
        value: BigNumberish;
        data: BytesLike;
      }[],
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    safeApprove(
      token: string,
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "safeApprove(address,address,uint256)"(
      token: string,
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    safeTransfer(
      token: string,
      target: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "safeTransfer(address,address,uint256)"(
      token: string,
      target: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}