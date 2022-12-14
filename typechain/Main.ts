/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface MainInterface extends utils.Interface {
  functions: {
    "register(address)": FunctionFragment;
    "turn()": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "register" | "turn"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "register",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "turn", values?: undefined): string;

  decodeFunctionResult(functionFragment: "register", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "turn", data: BytesLike): Result;

  events: {
    "Registered(uint256,address,uint256,uint256)": EventFragment;
    "Size(uint256,uint256)": EventFragment;
    "Touched(uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Registered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Size"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Touched"): EventFragment;
}

export interface RegisteredEventObject {
  index: BigNumber;
  owner: string;
  x: BigNumber;
  y: BigNumber;
}
export type RegisteredEvent = TypedEvent<
  [BigNumber, string, BigNumber, BigNumber],
  RegisteredEventObject
>;

export type RegisteredEventFilter = TypedEventFilter<RegisteredEvent>;

export interface SizeEventObject {
  width: BigNumber;
  height: BigNumber;
}
export type SizeEvent = TypedEvent<[BigNumber, BigNumber], SizeEventObject>;

export type SizeEventFilter = TypedEventFilter<SizeEvent>;

export interface TouchedEventObject {
  ship: BigNumber;
  x: BigNumber;
  y: BigNumber;
}
export type TouchedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  TouchedEventObject
>;

export type TouchedEventFilter = TypedEventFilter<TouchedEvent>;

export interface Main extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MainInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    register(
      ship: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    turn(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  register(
    ship: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  turn(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    register(
      ship: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    turn(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "Registered(uint256,address,uint256,uint256)"(
      index?: PromiseOrValue<BigNumberish> | null,
      owner?: PromiseOrValue<string> | null,
      x?: null,
      y?: null
    ): RegisteredEventFilter;
    Registered(
      index?: PromiseOrValue<BigNumberish> | null,
      owner?: PromiseOrValue<string> | null,
      x?: null,
      y?: null
    ): RegisteredEventFilter;

    "Size(uint256,uint256)"(width?: null, height?: null): SizeEventFilter;
    Size(width?: null, height?: null): SizeEventFilter;

    "Touched(uint256,uint256,uint256)"(
      ship?: null,
      x?: null,
      y?: null
    ): TouchedEventFilter;
    Touched(ship?: null, x?: null, y?: null): TouchedEventFilter;
  };

  estimateGas: {
    register(
      ship: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    turn(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    register(
      ship: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    turn(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
