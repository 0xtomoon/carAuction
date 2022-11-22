/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "carauction.carauction";

export interface BaseBid {
  index: string;
  auctionId: string;
  bidder: string;
  amount: number;
  bidTime: number;
}

const baseBaseBid: object = {
  index: "",
  auctionId: "",
  bidder: "",
  amount: 0,
  bidTime: 0,
};

export const BaseBid = {
  encode(message: BaseBid, writer: Writer = Writer.create()): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.auctionId !== "") {
      writer.uint32(18).string(message.auctionId);
    }
    if (message.bidder !== "") {
      writer.uint32(26).string(message.bidder);
    }
    if (message.amount !== 0) {
      writer.uint32(32).uint64(message.amount);
    }
    if (message.bidTime !== 0) {
      writer.uint32(40).int64(message.bidTime);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): BaseBid {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBaseBid } as BaseBid;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.auctionId = reader.string();
          break;
        case 3:
          message.bidder = reader.string();
          break;
        case 4:
          message.amount = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.bidTime = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BaseBid {
    const message = { ...baseBaseBid } as BaseBid;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.auctionId !== undefined && object.auctionId !== null) {
      message.auctionId = String(object.auctionId);
    } else {
      message.auctionId = "";
    }
    if (object.bidder !== undefined && object.bidder !== null) {
      message.bidder = String(object.bidder);
    } else {
      message.bidder = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Number(object.amount);
    } else {
      message.amount = 0;
    }
    if (object.bidTime !== undefined && object.bidTime !== null) {
      message.bidTime = Number(object.bidTime);
    } else {
      message.bidTime = 0;
    }
    return message;
  },

  toJSON(message: BaseBid): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.auctionId !== undefined && (obj.auctionId = message.auctionId);
    message.bidder !== undefined && (obj.bidder = message.bidder);
    message.amount !== undefined && (obj.amount = message.amount);
    message.bidTime !== undefined && (obj.bidTime = message.bidTime);
    return obj;
  },

  fromPartial(object: DeepPartial<BaseBid>): BaseBid {
    const message = { ...baseBaseBid } as BaseBid;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.auctionId !== undefined && object.auctionId !== null) {
      message.auctionId = object.auctionId;
    } else {
      message.auctionId = "";
    }
    if (object.bidder !== undefined && object.bidder !== null) {
      message.bidder = object.bidder;
    } else {
      message.bidder = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = 0;
    }
    if (object.bidTime !== undefined && object.bidTime !== null) {
      message.bidTime = object.bidTime;
    } else {
      message.bidTime = 0;
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
