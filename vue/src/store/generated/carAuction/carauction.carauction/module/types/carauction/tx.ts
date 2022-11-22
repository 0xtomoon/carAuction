/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "carauction.carauction";

export interface MsgCreateAuction {
  creator: string;
  carLabel: string;
}

export interface MsgCreateAuctionResponse {
  auctionId: string;
  blockNumber: number;
}

export interface MsgPlaceBid {
  creator: string;
  auctionId: string;
  amount: number;
}

export interface MsgPlaceBidResponse {
  amount: number;
}

const baseMsgCreateAuction: object = { creator: "", carLabel: "" };

export const MsgCreateAuction = {
  encode(message: MsgCreateAuction, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.carLabel !== "") {
      writer.uint32(18).string(message.carLabel);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateAuction {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateAuction } as MsgCreateAuction;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.carLabel = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateAuction {
    const message = { ...baseMsgCreateAuction } as MsgCreateAuction;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.carLabel !== undefined && object.carLabel !== null) {
      message.carLabel = String(object.carLabel);
    } else {
      message.carLabel = "";
    }
    return message;
  },

  toJSON(message: MsgCreateAuction): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.carLabel !== undefined && (obj.carLabel = message.carLabel);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateAuction>): MsgCreateAuction {
    const message = { ...baseMsgCreateAuction } as MsgCreateAuction;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.carLabel !== undefined && object.carLabel !== null) {
      message.carLabel = object.carLabel;
    } else {
      message.carLabel = "";
    }
    return message;
  },
};

const baseMsgCreateAuctionResponse: object = { auctionId: "", blockNumber: 0 };

export const MsgCreateAuctionResponse = {
  encode(
    message: MsgCreateAuctionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.auctionId !== "") {
      writer.uint32(10).string(message.auctionId);
    }
    if (message.blockNumber !== 0) {
      writer.uint32(16).int64(message.blockNumber);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateAuctionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateAuctionResponse,
    } as MsgCreateAuctionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctionId = reader.string();
          break;
        case 2:
          message.blockNumber = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateAuctionResponse {
    const message = {
      ...baseMsgCreateAuctionResponse,
    } as MsgCreateAuctionResponse;
    if (object.auctionId !== undefined && object.auctionId !== null) {
      message.auctionId = String(object.auctionId);
    } else {
      message.auctionId = "";
    }
    if (object.blockNumber !== undefined && object.blockNumber !== null) {
      message.blockNumber = Number(object.blockNumber);
    } else {
      message.blockNumber = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateAuctionResponse): unknown {
    const obj: any = {};
    message.auctionId !== undefined && (obj.auctionId = message.auctionId);
    message.blockNumber !== undefined &&
      (obj.blockNumber = message.blockNumber);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateAuctionResponse>
  ): MsgCreateAuctionResponse {
    const message = {
      ...baseMsgCreateAuctionResponse,
    } as MsgCreateAuctionResponse;
    if (object.auctionId !== undefined && object.auctionId !== null) {
      message.auctionId = object.auctionId;
    } else {
      message.auctionId = "";
    }
    if (object.blockNumber !== undefined && object.blockNumber !== null) {
      message.blockNumber = object.blockNumber;
    } else {
      message.blockNumber = 0;
    }
    return message;
  },
};

const baseMsgPlaceBid: object = { creator: "", auctionId: "", amount: 0 };

export const MsgPlaceBid = {
  encode(message: MsgPlaceBid, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgPlaceBid {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgPlaceBid } as MsgPlaceBid;
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

  fromJSON(object: any): MsgPlaceBid {
    const message = { ...baseMsgPlaceBid } as MsgPlaceBid;
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

  toJSON(message: MsgPlaceBid): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.auctionId !== undefined && (obj.auctionId = message.auctionId);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgPlaceBid>): MsgPlaceBid {
    const message = { ...baseMsgPlaceBid } as MsgPlaceBid;
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

const baseMsgPlaceBidResponse: object = { amount: 0 };

export const MsgPlaceBidResponse = {
  encode(
    message: MsgPlaceBidResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.amount !== 0) {
      writer.uint32(8).uint64(message.amount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgPlaceBidResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgPlaceBidResponse } as MsgPlaceBidResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPlaceBidResponse {
    const message = { ...baseMsgPlaceBidResponse } as MsgPlaceBidResponse;
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Number(object.amount);
    } else {
      message.amount = 0;
    }
    return message;
  },

  toJSON(message: MsgPlaceBidResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgPlaceBidResponse>): MsgPlaceBidResponse {
    const message = { ...baseMsgPlaceBidResponse } as MsgPlaceBidResponse;
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = 0;
    }
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateAuction(request: MsgCreateAuction): Promise<MsgCreateAuctionResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  PlaceBid(request: MsgPlaceBid): Promise<MsgPlaceBidResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateAuction(request: MsgCreateAuction): Promise<MsgCreateAuctionResponse> {
    const data = MsgCreateAuction.encode(request).finish();
    const promise = this.rpc.request(
      "carauction.carauction.Msg",
      "CreateAuction",
      data
    );
    return promise.then((data) =>
      MsgCreateAuctionResponse.decode(new Reader(data))
    );
  }

  PlaceBid(request: MsgPlaceBid): Promise<MsgPlaceBidResponse> {
    const data = MsgPlaceBid.encode(request).finish();
    const promise = this.rpc.request(
      "carauction.carauction.Msg",
      "PlaceBid",
      data
    );
    return promise.then((data) => MsgPlaceBidResponse.decode(new Reader(data)));
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
