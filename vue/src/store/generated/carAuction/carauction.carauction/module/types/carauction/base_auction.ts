/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "carauction.carauction";

export interface BaseAuction {
  index: string;
  carLabel: string;
  maxBid: number;
  winner: string;
  blockNumber: number;
  ended: boolean;
}

const baseBaseAuction: object = {
  index: "",
  carLabel: "",
  maxBid: 0,
  winner: "",
  blockNumber: 0,
  ended: false,
};

export const BaseAuction = {
  encode(message: BaseAuction, writer: Writer = Writer.create()): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.carLabel !== "") {
      writer.uint32(18).string(message.carLabel);
    }
    if (message.maxBid !== 0) {
      writer.uint32(24).uint64(message.maxBid);
    }
    if (message.winner !== "") {
      writer.uint32(34).string(message.winner);
    }
    if (message.blockNumber !== 0) {
      writer.uint32(40).int64(message.blockNumber);
    }
    if (message.ended === true) {
      writer.uint32(48).bool(message.ended);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): BaseAuction {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBaseAuction } as BaseAuction;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.carLabel = reader.string();
          break;
        case 3:
          message.maxBid = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.winner = reader.string();
          break;
        case 5:
          message.blockNumber = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.ended = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BaseAuction {
    const message = { ...baseBaseAuction } as BaseAuction;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.carLabel !== undefined && object.carLabel !== null) {
      message.carLabel = String(object.carLabel);
    } else {
      message.carLabel = "";
    }
    if (object.maxBid !== undefined && object.maxBid !== null) {
      message.maxBid = Number(object.maxBid);
    } else {
      message.maxBid = 0;
    }
    if (object.winner !== undefined && object.winner !== null) {
      message.winner = String(object.winner);
    } else {
      message.winner = "";
    }
    if (object.blockNumber !== undefined && object.blockNumber !== null) {
      message.blockNumber = Number(object.blockNumber);
    } else {
      message.blockNumber = 0;
    }
    if (object.ended !== undefined && object.ended !== null) {
      message.ended = Boolean(object.ended);
    } else {
      message.ended = false;
    }
    return message;
  },

  toJSON(message: BaseAuction): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.carLabel !== undefined && (obj.carLabel = message.carLabel);
    message.maxBid !== undefined && (obj.maxBid = message.maxBid);
    message.winner !== undefined && (obj.winner = message.winner);
    message.blockNumber !== undefined &&
      (obj.blockNumber = message.blockNumber);
    message.ended !== undefined && (obj.ended = message.ended);
    return obj;
  },

  fromPartial(object: DeepPartial<BaseAuction>): BaseAuction {
    const message = { ...baseBaseAuction } as BaseAuction;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.carLabel !== undefined && object.carLabel !== null) {
      message.carLabel = object.carLabel;
    } else {
      message.carLabel = "";
    }
    if (object.maxBid !== undefined && object.maxBid !== null) {
      message.maxBid = object.maxBid;
    } else {
      message.maxBid = 0;
    }
    if (object.winner !== undefined && object.winner !== null) {
      message.winner = object.winner;
    } else {
      message.winner = "";
    }
    if (object.blockNumber !== undefined && object.blockNumber !== null) {
      message.blockNumber = object.blockNumber;
    } else {
      message.blockNumber = 0;
    }
    if (object.ended !== undefined && object.ended !== null) {
      message.ended = object.ended;
    } else {
      message.ended = false;
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
