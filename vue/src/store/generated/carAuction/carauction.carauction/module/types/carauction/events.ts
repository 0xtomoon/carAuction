/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "carauction.carauction";

export interface AuctionCreated {
  creator: string;
  auctionId: string;
}

export interface PlacedBid {
  creator: string;
  auctionId: string;
  amount: number;
}

export interface AuctionEnded {
  auctionId: string;
  carLabel: string;
  bidAmount: number;
  winner: string;
}

const baseAuctionCreated: object = { creator: "", auctionId: "" };

export const AuctionCreated = {
  encode(message: AuctionCreated, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.auctionId !== "") {
      writer.uint32(18).string(message.auctionId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): AuctionCreated {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAuctionCreated } as AuctionCreated;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.auctionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuctionCreated {
    const message = { ...baseAuctionCreated } as AuctionCreated;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.auctionId !== undefined && object.auctionId !== null) {
      message.auctionId = String(object.auctionId);
    } else {
      message.auctionId = "";
    }
    return message;
  },

  toJSON(message: AuctionCreated): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.auctionId !== undefined && (obj.auctionId = message.auctionId);
    return obj;
  },

  fromPartial(object: DeepPartial<AuctionCreated>): AuctionCreated {
    const message = { ...baseAuctionCreated } as AuctionCreated;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.auctionId !== undefined && object.auctionId !== null) {
      message.auctionId = object.auctionId;
    } else {
      message.auctionId = "";
    }
    return message;
  },
};

const basePlacedBid: object = { creator: "", auctionId: "", amount: 0 };

export const PlacedBid = {
  encode(message: PlacedBid, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.auctionId !== "") {
      writer.uint32(18).string(message.auctionId);
    }
    if (message.amount !== 0) {
      writer.uint32(24).uint64(message.amount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): PlacedBid {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePlacedBid } as PlacedBid;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.auctionId = reader.string();
          break;
        case 3:
          message.amount = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PlacedBid {
    const message = { ...basePlacedBid } as PlacedBid;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.auctionId !== undefined && object.auctionId !== null) {
      message.auctionId = String(object.auctionId);
    } else {
      message.auctionId = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Number(object.amount);
    } else {
      message.amount = 0;
    }
    return message;
  },

  toJSON(message: PlacedBid): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.auctionId !== undefined && (obj.auctionId = message.auctionId);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: DeepPartial<PlacedBid>): PlacedBid {
    const message = { ...basePlacedBid } as PlacedBid;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.auctionId !== undefined && object.auctionId !== null) {
      message.auctionId = object.auctionId;
    } else {
      message.auctionId = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = 0;
    }
    return message;
  },
};

const baseAuctionEnded: object = {
  auctionId: "",
  carLabel: "",
  bidAmount: 0,
  winner: "",
};

export const AuctionEnded = {
  encode(message: AuctionEnded, writer: Writer = Writer.create()): Writer {
    if (message.auctionId !== "") {
      writer.uint32(10).string(message.auctionId);
    }
    if (message.carLabel !== "") {
      writer.uint32(18).string(message.carLabel);
    }
    if (message.bidAmount !== 0) {
      writer.uint32(24).uint64(message.bidAmount);
    }
    if (message.winner !== "") {
      writer.uint32(34).string(message.winner);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): AuctionEnded {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAuctionEnded } as AuctionEnded;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctionId = reader.string();
          break;
        case 2:
          message.carLabel = reader.string();
          break;
        case 3:
          message.bidAmount = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.winner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuctionEnded {
    const message = { ...baseAuctionEnded } as AuctionEnded;
    if (object.auctionId !== undefined && object.auctionId !== null) {
      message.auctionId = String(object.auctionId);
    } else {
      message.auctionId = "";
    }
    if (object.carLabel !== undefined && object.carLabel !== null) {
      message.carLabel = String(object.carLabel);
    } else {
      message.carLabel = "";
    }
    if (object.bidAmount !== undefined && object.bidAmount !== null) {
      message.bidAmount = Number(object.bidAmount);
    } else {
      message.bidAmount = 0;
    }
    if (object.winner !== undefined && object.winner !== null) {
      message.winner = String(object.winner);
    } else {
      message.winner = "";
    }
    return message;
  },

  toJSON(message: AuctionEnded): unknown {
    const obj: any = {};
    message.auctionId !== undefined && (obj.auctionId = message.auctionId);
    message.carLabel !== undefined && (obj.carLabel = message.carLabel);
    message.bidAmount !== undefined && (obj.bidAmount = message.bidAmount);
    message.winner !== undefined && (obj.winner = message.winner);
    return obj;
  },

  fromPartial(object: DeepPartial<AuctionEnded>): AuctionEnded {
    const message = { ...baseAuctionEnded } as AuctionEnded;
    if (object.auctionId !== undefined && object.auctionId !== null) {
      message.auctionId = object.auctionId;
    } else {
      message.auctionId = "";
    }
    if (object.carLabel !== undefined && object.carLabel !== null) {
      message.carLabel = object.carLabel;
    } else {
      message.carLabel = "";
    }
    if (object.bidAmount !== undefined && object.bidAmount !== null) {
      message.bidAmount = object.bidAmount;
    } else {
      message.bidAmount = 0;
    }
    if (object.winner !== undefined && object.winner !== null) {
      message.winner = object.winner;
    } else {
      message.winner = "";
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
