/* eslint-disable */
import { Params } from "../carauction/params";
import { SystemInfo } from "../carauction/system_info";
import { BaseAuction } from "../carauction/base_auction";
import { BaseBid } from "../carauction/base_bid";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "carauction.carauction";

/** GenesisState defines the carauction module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  systemInfo: SystemInfo | undefined;
  baseAuctionList: BaseAuction[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  baseBidList: BaseBid[];
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.systemInfo !== undefined) {
      SystemInfo.encode(message.systemInfo, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.baseAuctionList) {
      BaseAuction.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.baseBidList) {
      BaseBid.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.baseAuctionList = [];
    message.baseBidList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.systemInfo = SystemInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.baseAuctionList.push(
            BaseAuction.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.baseBidList.push(BaseBid.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.baseAuctionList = [];
    message.baseBidList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.systemInfo !== undefined && object.systemInfo !== null) {
      message.systemInfo = SystemInfo.fromJSON(object.systemInfo);
    } else {
      message.systemInfo = undefined;
    }
    if (
      object.baseAuctionList !== undefined &&
      object.baseAuctionList !== null
    ) {
      for (const e of object.baseAuctionList) {
        message.baseAuctionList.push(BaseAuction.fromJSON(e));
      }
    }
    if (object.baseBidList !== undefined && object.baseBidList !== null) {
      for (const e of object.baseBidList) {
        message.baseBidList.push(BaseBid.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.systemInfo !== undefined &&
      (obj.systemInfo = message.systemInfo
        ? SystemInfo.toJSON(message.systemInfo)
        : undefined);
    if (message.baseAuctionList) {
      obj.baseAuctionList = message.baseAuctionList.map((e) =>
        e ? BaseAuction.toJSON(e) : undefined
      );
    } else {
      obj.baseAuctionList = [];
    }
    if (message.baseBidList) {
      obj.baseBidList = message.baseBidList.map((e) =>
        e ? BaseBid.toJSON(e) : undefined
      );
    } else {
      obj.baseBidList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.baseAuctionList = [];
    message.baseBidList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.systemInfo !== undefined && object.systemInfo !== null) {
      message.systemInfo = SystemInfo.fromPartial(object.systemInfo);
    } else {
      message.systemInfo = undefined;
    }
    if (
      object.baseAuctionList !== undefined &&
      object.baseAuctionList !== null
    ) {
      for (const e of object.baseAuctionList) {
        message.baseAuctionList.push(BaseAuction.fromPartial(e));
      }
    }
    if (object.baseBidList !== undefined && object.baseBidList !== null) {
      for (const e of object.baseBidList) {
        message.baseBidList.push(BaseBid.fromPartial(e));
      }
    }
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
