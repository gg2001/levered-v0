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
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IOneInchExchangeInterface extends ethers.utils.Interface {
  functions: {
    "swap(address,tuple,tuple[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "swap",
    values: [
      string,
      {
        srcToken: string;
        dstToken: string;
        srcReceiver: string;
        dstReceiver: string;
        amount: BigNumberish;
        minReturnAmount: BigNumberish;
        guaranteedAmount: BigNumberish;
        flags: BigNumberish;
        referrer: string;
        permit: BytesLike;
      },
      {
        targetWithMandatory: BigNumberish;
        gasLimit: BigNumberish;
        value: BigNumberish;
        data: BytesLike;
      }[]
    ]
  ): string;

  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;

  events: {};
}

export class IOneInchExchange extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IOneInchExchangeInterface;

  functions: {
    swap(
      caller: string,
      desc: {
        srcToken: string;
        dstToken: string;
        srcReceiver: string;
        dstReceiver: string;
        amount: BigNumberish;
        minReturnAmount: BigNumberish;
        guaranteedAmount: BigNumberish;
        flags: BigNumberish;
        referrer: string;
        permit: BytesLike;
      },
      calls: {
        targetWithMandatory: BigNumberish;
        gasLimit: BigNumberish;
        value: BigNumberish;
        data: BytesLike;
      }[],
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "swap(address,tuple,tuple[])"(
      caller: string,
      desc: {
        srcToken: string;
        dstToken: string;
        srcReceiver: string;
        dstReceiver: string;
        amount: BigNumberish;
        minReturnAmount: BigNumberish;
        guaranteedAmount: BigNumberish;
        flags: BigNumberish;
        referrer: string;
        permit: BytesLike;
      },
      calls: {
        targetWithMandatory: BigNumberish;
        gasLimit: BigNumberish;
        value: BigNumberish;
        data: BytesLike;
      }[],
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;
  };

  swap(
    caller: string,
    desc: {
      srcToken: string;
      dstToken: string;
      srcReceiver: string;
      dstReceiver: string;
      amount: BigNumberish;
      minReturnAmount: BigNumberish;
      guaranteedAmount: BigNumberish;
      flags: BigNumberish;
      referrer: string;
      permit: BytesLike;
    },
    calls: {
      targetWithMandatory: BigNumberish;
      gasLimit: BigNumberish;
      value: BigNumberish;
      data: BytesLike;
    }[],
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "swap(address,tuple,tuple[])"(
    caller: string,
    desc: {
      srcToken: string;
      dstToken: string;
      srcReceiver: string;
      dstReceiver: string;
      amount: BigNumberish;
      minReturnAmount: BigNumberish;
      guaranteedAmount: BigNumberish;
      flags: BigNumberish;
      referrer: string;
      permit: BytesLike;
    },
    calls: {
      targetWithMandatory: BigNumberish;
      gasLimit: BigNumberish;
      value: BigNumberish;
      data: BytesLike;
    }[],
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  callStatic: {
    swap(
      caller: string,
      desc: {
        srcToken: string;
        dstToken: string;
        srcReceiver: string;
        dstReceiver: string;
        amount: BigNumberish;
        minReturnAmount: BigNumberish;
        guaranteedAmount: BigNumberish;
        flags: BigNumberish;
        referrer: string;
        permit: BytesLike;
      },
      calls: {
        targetWithMandatory: BigNumberish;
        gasLimit: BigNumberish;
        value: BigNumberish;
        data: BytesLike;
      }[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "swap(address,tuple,tuple[])"(
      caller: string,
      desc: {
        srcToken: string;
        dstToken: string;
        srcReceiver: string;
        dstReceiver: string;
        amount: BigNumberish;
        minReturnAmount: BigNumberish;
        guaranteedAmount: BigNumberish;
        flags: BigNumberish;
        referrer: string;
        permit: BytesLike;
      },
      calls: {
        targetWithMandatory: BigNumberish;
        gasLimit: BigNumberish;
        value: BigNumberish;
        data: BytesLike;
      }[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    swap(
      caller: string,
      desc: {
        srcToken: string;
        dstToken: string;
        srcReceiver: string;
        dstReceiver: string;
        amount: BigNumberish;
        minReturnAmount: BigNumberish;
        guaranteedAmount: BigNumberish;
        flags: BigNumberish;
        referrer: string;
        permit: BytesLike;
      },
      calls: {
        targetWithMandatory: BigNumberish;
        gasLimit: BigNumberish;
        value: BigNumberish;
        data: BytesLike;
      }[],
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "swap(address,tuple,tuple[])"(
      caller: string,
      desc: {
        srcToken: string;
        dstToken: string;
        srcReceiver: string;
        dstReceiver: string;
        amount: BigNumberish;
        minReturnAmount: BigNumberish;
        guaranteedAmount: BigNumberish;
        flags: BigNumberish;
        referrer: string;
        permit: BytesLike;
      },
      calls: {
        targetWithMandatory: BigNumberish;
        gasLimit: BigNumberish;
        value: BigNumberish;
        data: BytesLike;
      }[],
      overrides?: PayableOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    swap(
      caller: string,
      desc: {
        srcToken: string;
        dstToken: string;
        srcReceiver: string;
        dstReceiver: string;
        amount: BigNumberish;
        minReturnAmount: BigNumberish;
        guaranteedAmount: BigNumberish;
        flags: BigNumberish;
        referrer: string;
        permit: BytesLike;
      },
      calls: {
        targetWithMandatory: BigNumberish;
        gasLimit: BigNumberish;
        value: BigNumberish;
        data: BytesLike;
      }[],
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "swap(address,tuple,tuple[])"(
      caller: string,
      desc: {
        srcToken: string;
        dstToken: string;
        srcReceiver: string;
        dstReceiver: string;
        amount: BigNumberish;
        minReturnAmount: BigNumberish;
        guaranteedAmount: BigNumberish;
        flags: BigNumberish;
        referrer: string;
        permit: BytesLike;
      },
      calls: {
        targetWithMandatory: BigNumberish;
        gasLimit: BigNumberish;
        value: BigNumberish;
        data: BytesLike;
      }[],
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;
  };
}