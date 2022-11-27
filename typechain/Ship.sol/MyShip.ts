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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface MyShipInterface extends utils.Interface {
  functions: {
    "fire()": FunctionFragment;
    "place(uint256,uint256)": FunctionFragment;
    "setShipPostion(uint256,uint256)": FunctionFragment;
    "setTargetPostion(uint256,uint256)": FunctionFragment;
    "update(uint256,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "fire"
      | "place"
      | "setShipPostion"
      | "setTargetPostion"
      | "update"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "fire", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "place",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setShipPostion",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setTargetPostion",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "update",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "fire", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "place", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setShipPostion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTargetPostion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "update", data: BytesLike): Result;

  events: {};
}

export interface MyShip extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MyShipInterface;

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
    fire(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    place(
      width: PromiseOrValue<BigNumberish>,
      height: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setShipPostion(
      _x: PromiseOrValue<BigNumberish>,
      _y: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setTargetPostion(
      _x: PromiseOrValue<BigNumberish>,
      _y: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    update(
      _x: PromiseOrValue<BigNumberish>,
      _y: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  fire(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  place(
    width: PromiseOrValue<BigNumberish>,
    height: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setShipPostion(
    _x: PromiseOrValue<BigNumberish>,
    _y: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setTargetPostion(
    _x: PromiseOrValue<BigNumberish>,
    _y: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  update(
    _x: PromiseOrValue<BigNumberish>,
    _y: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    fire(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { t_x: BigNumber; t_y: BigNumber }>;

    place(
      width: PromiseOrValue<BigNumberish>,
      height: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { cord_x: BigNumber; cord_y: BigNumber }
    >;

    setShipPostion(
      _x: PromiseOrValue<BigNumberish>,
      _y: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setTargetPostion(
      _x: PromiseOrValue<BigNumberish>,
      _y: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    update(
      _x: PromiseOrValue<BigNumberish>,
      _y: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    fire(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    place(
      width: PromiseOrValue<BigNumberish>,
      height: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setShipPostion(
      _x: PromiseOrValue<BigNumberish>,
      _y: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setTargetPostion(
      _x: PromiseOrValue<BigNumberish>,
      _y: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    update(
      _x: PromiseOrValue<BigNumberish>,
      _y: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    fire(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    place(
      width: PromiseOrValue<BigNumberish>,
      height: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setShipPostion(
      _x: PromiseOrValue<BigNumberish>,
      _y: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setTargetPostion(
      _x: PromiseOrValue<BigNumberish>,
      _y: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    update(
      _x: PromiseOrValue<BigNumberish>,
      _y: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}