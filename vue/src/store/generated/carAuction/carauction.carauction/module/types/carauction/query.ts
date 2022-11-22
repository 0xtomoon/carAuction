/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../carauction/params";
import { SystemInfo } from "../carauction/system_info";
import { BaseAuction } from "../carauction/base_auction";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { BaseBid } from "../carauction/base_bid";

export const protobufPackage = "carauction.carauction";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetSystemInfoRequest {}

export interface QueryGetSystemInfoResponse {
  SystemInfo: SystemInfo | undefined;
}

export interface QueryGetBaseAuctionRequest {
  index: string;
}

export interface QueryGetBaseAuctionResponse {
  baseAuction: BaseAuction | undefined;
}

export interface QueryAllBaseAuctionRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllBaseAuctionResponse {
  baseAuction: BaseAuction[];
  pagination: PageResponse | undefined;
}

export interface QueryGetBaseBidRequest {
  index: string;
}

export interface QueryGetBaseBidResponse {
  baseBid: BaseBid | undefined;
}

export interface QueryAllBaseBidRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllBaseBidResponse {
  baseBid: BaseBid[];
  pagination: PageResponse | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetSystemInfoRequest: object = {};

export const QueryGetSystemInfoRequest = {
  encode(
    _: QueryGetSystemInfoRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetSystemInfoRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetSystemInfoRequest,
    } as QueryGetSystemInfoRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryGetSystemInfoRequest {
    const message = {
      ...baseQueryGetSystemInfoRequest,
    } as QueryGetSystemInfoRequest;
    return message;
  },

  toJSON(_: QueryGetSystemInfoRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryGetSystemInfoRequest>
  ): QueryGetSystemInfoRequest {
    const message = {
      ...baseQueryGetSystemInfoRequest,
    } as QueryGetSystemInfoRequest;
    return message;
  },
};

const baseQueryGetSystemInfoResponse: object = {};

export const QueryGetSystemInfoResponse = {
  encode(
    message: QueryGetSystemInfoResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.SystemInfo !== undefined) {
      SystemInfo.encode(message.SystemInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetSystemInfoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetSystemInfoResponse,
    } as QueryGetSystemInfoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.SystemInfo = SystemInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetSystemInfoResponse {
    const message = {
      ...baseQueryGetSystemInfoResponse,
    } as QueryGetSystemInfoResponse;
    if (object.SystemInfo !== undefined && object.SystemInfo !== null) {
      message.SystemInfo = SystemInfo.fromJSON(object.SystemInfo);
    } else {
      message.SystemInfo = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetSystemInfoResponse): unknown {
    const obj: any = {};
    message.SystemInfo !== undefined &&
      (obj.SystemInfo = message.SystemInfo
        ? SystemInfo.toJSON(message.SystemInfo)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetSystemInfoResponse>
  ): QueryGetSystemInfoResponse {
    const message = {
      ...baseQueryGetSystemInfoResponse,
    } as QueryGetSystemInfoResponse;
    if (object.SystemInfo !== undefined && object.SystemInfo !== null) {
      message.SystemInfo = SystemInfo.fromPartial(object.SystemInfo);
    } else {
      message.SystemInfo = undefined;
    }
    return message;
  },
};

const baseQueryGetBaseAuctionRequest: object = { index: "" };

export const QueryGetBaseAuctionRequest = {
  encode(
    message: QueryGetBaseAuctionRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetBaseAuctionRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetBaseAuctionRequest,
    } as QueryGetBaseAuctionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBaseAuctionRequest {
    const message = {
      ...baseQueryGetBaseAuctionRequest,
    } as QueryGetBaseAuctionRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetBaseAuctionRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetBaseAuctionRequest>
  ): QueryGetBaseAuctionRequest {
    const message = {
      ...baseQueryGetBaseAuctionRequest,
    } as QueryGetBaseAuctionRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetBaseAuctionResponse: object = {};

export const QueryGetBaseAuctionResponse = {
  encode(
    message: QueryGetBaseAuctionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.baseAuction !== undefined) {
      BaseAuction.encode(
        message.baseAuction,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetBaseAuctionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetBaseAuctionResponse,
    } as QueryGetBaseAuctionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseAuction = BaseAuction.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBaseAuctionResponse {
    const message = {
      ...baseQueryGetBaseAuctionResponse,
    } as QueryGetBaseAuctionResponse;
    if (object.baseAuction !== undefined && object.baseAuction !== null) {
      message.baseAuction = BaseAuction.fromJSON(object.baseAuction);
    } else {
      message.baseAuction = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetBaseAuctionResponse): unknown {
    const obj: any = {};
    message.baseAuction !== undefined &&
      (obj.baseAuction = message.baseAuction
        ? BaseAuction.toJSON(message.baseAuction)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetBaseAuctionResponse>
  ): QueryGetBaseAuctionResponse {
    const message = {
      ...baseQueryGetBaseAuctionResponse,
    } as QueryGetBaseAuctionResponse;
    if (object.baseAuction !== undefined && object.baseAuction !== null) {
      message.baseAuction = BaseAuction.fromPartial(object.baseAuction);
    } else {
      message.baseAuction = undefined;
    }
    return message;
  },
};

const baseQueryAllBaseAuctionRequest: object = {};

export const QueryAllBaseAuctionRequest = {
  encode(
    message: QueryAllBaseAuctionRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllBaseAuctionRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllBaseAuctionRequest,
    } as QueryAllBaseAuctionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllBaseAuctionRequest {
    const message = {
      ...baseQueryAllBaseAuctionRequest,
    } as QueryAllBaseAuctionRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllBaseAuctionRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllBaseAuctionRequest>
  ): QueryAllBaseAuctionRequest {
    const message = {
      ...baseQueryAllBaseAuctionRequest,
    } as QueryAllBaseAuctionRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllBaseAuctionResponse: object = {};

export const QueryAllBaseAuctionResponse = {
  encode(
    message: QueryAllBaseAuctionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.baseAuction) {
      BaseAuction.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllBaseAuctionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllBaseAuctionResponse,
    } as QueryAllBaseAuctionResponse;
    message.baseAuction = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseAuction.push(BaseAuction.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllBaseAuctionResponse {
    const message = {
      ...baseQueryAllBaseAuctionResponse,
    } as QueryAllBaseAuctionResponse;
    message.baseAuction = [];
    if (object.baseAuction !== undefined && object.baseAuction !== null) {
      for (const e of object.baseAuction) {
        message.baseAuction.push(BaseAuction.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllBaseAuctionResponse): unknown {
    const obj: any = {};
    if (message.baseAuction) {
      obj.baseAuction = message.baseAuction.map((e) =>
        e ? BaseAuction.toJSON(e) : undefined
      );
    } else {
      obj.baseAuction = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllBaseAuctionResponse>
  ): QueryAllBaseAuctionResponse {
    const message = {
      ...baseQueryAllBaseAuctionResponse,
    } as QueryAllBaseAuctionResponse;
    message.baseAuction = [];
    if (object.baseAuction !== undefined && object.baseAuction !== null) {
      for (const e of object.baseAuction) {
        message.baseAuction.push(BaseAuction.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetBaseBidRequest: object = { index: "" };

export const QueryGetBaseBidRequest = {
  encode(
    message: QueryGetBaseBidRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetBaseBidRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetBaseBidRequest } as QueryGetBaseBidRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBaseBidRequest {
    const message = { ...baseQueryGetBaseBidRequest } as QueryGetBaseBidRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetBaseBidRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetBaseBidRequest>
  ): QueryGetBaseBidRequest {
    const message = { ...baseQueryGetBaseBidRequest } as QueryGetBaseBidRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetBaseBidResponse: object = {};

export const QueryGetBaseBidResponse = {
  encode(
    message: QueryGetBaseBidResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.baseBid !== undefined) {
      BaseBid.encode(message.baseBid, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetBaseBidResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetBaseBidResponse,
    } as QueryGetBaseBidResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseBid = BaseBid.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBaseBidResponse {
    const message = {
      ...baseQueryGetBaseBidResponse,
    } as QueryGetBaseBidResponse;
    if (object.baseBid !== undefined && object.baseBid !== null) {
      message.baseBid = BaseBid.fromJSON(object.baseBid);
    } else {
      message.baseBid = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetBaseBidResponse): unknown {
    const obj: any = {};
    message.baseBid !== undefined &&
      (obj.baseBid = message.baseBid
        ? BaseBid.toJSON(message.baseBid)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetBaseBidResponse>
  ): QueryGetBaseBidResponse {
    const message = {
      ...baseQueryGetBaseBidResponse,
    } as QueryGetBaseBidResponse;
    if (object.baseBid !== undefined && object.baseBid !== null) {
      message.baseBid = BaseBid.fromPartial(object.baseBid);
    } else {
      message.baseBid = undefined;
    }
    return message;
  },
};

const baseQueryAllBaseBidRequest: object = {};

export const QueryAllBaseBidRequest = {
  encode(
    message: QueryAllBaseBidRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllBaseBidRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllBaseBidRequest } as QueryAllBaseBidRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllBaseBidRequest {
    const message = { ...baseQueryAllBaseBidRequest } as QueryAllBaseBidRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllBaseBidRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllBaseBidRequest>
  ): QueryAllBaseBidRequest {
    const message = { ...baseQueryAllBaseBidRequest } as QueryAllBaseBidRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllBaseBidResponse: object = {};

export const QueryAllBaseBidResponse = {
  encode(
    message: QueryAllBaseBidResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.baseBid) {
      BaseBid.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllBaseBidResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllBaseBidResponse,
    } as QueryAllBaseBidResponse;
    message.baseBid = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseBid.push(BaseBid.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllBaseBidResponse {
    const message = {
      ...baseQueryAllBaseBidResponse,
    } as QueryAllBaseBidResponse;
    message.baseBid = [];
    if (object.baseBid !== undefined && object.baseBid !== null) {
      for (const e of object.baseBid) {
        message.baseBid.push(BaseBid.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllBaseBidResponse): unknown {
    const obj: any = {};
    if (message.baseBid) {
      obj.baseBid = message.baseBid.map((e) =>
        e ? BaseBid.toJSON(e) : undefined
      );
    } else {
      obj.baseBid = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllBaseBidResponse>
  ): QueryAllBaseBidResponse {
    const message = {
      ...baseQueryAllBaseBidResponse,
    } as QueryAllBaseBidResponse;
    message.baseBid = [];
    if (object.baseBid !== undefined && object.baseBid !== null) {
      for (const e of object.baseBid) {
        message.baseBid.push(BaseBid.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a SystemInfo by index. */
  SystemInfo(
    request: QueryGetSystemInfoRequest
  ): Promise<QueryGetSystemInfoResponse>;
  /** Queries a BaseAuction by index. */
  BaseAuction(
    request: QueryGetBaseAuctionRequest
  ): Promise<QueryGetBaseAuctionResponse>;
  /** Queries a list of BaseAuction items. */
  BaseAuctionAll(
    request: QueryAllBaseAuctionRequest
  ): Promise<QueryAllBaseAuctionResponse>;
  /** Queries a BaseBid by index. */
  BaseBid(request: QueryGetBaseBidRequest): Promise<QueryGetBaseBidResponse>;
  /** Queries a list of BaseBid items. */
  BaseBidAll(request: QueryAllBaseBidRequest): Promise<QueryAllBaseBidResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "carauction.carauction.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  SystemInfo(
    request: QueryGetSystemInfoRequest
  ): Promise<QueryGetSystemInfoResponse> {
    const data = QueryGetSystemInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      "carauction.carauction.Query",
      "SystemInfo",
      data
    );
    return promise.then((data) =>
      QueryGetSystemInfoResponse.decode(new Reader(data))
    );
  }

  BaseAuction(
    request: QueryGetBaseAuctionRequest
  ): Promise<QueryGetBaseAuctionResponse> {
    const data = QueryGetBaseAuctionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "carauction.carauction.Query",
      "BaseAuction",
      data
    );
    return promise.then((data) =>
      QueryGetBaseAuctionResponse.decode(new Reader(data))
    );
  }

  BaseAuctionAll(
    request: QueryAllBaseAuctionRequest
  ): Promise<QueryAllBaseAuctionResponse> {
    const data = QueryAllBaseAuctionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "carauction.carauction.Query",
      "BaseAuctionAll",
      data
    );
    return promise.then((data) =>
      QueryAllBaseAuctionResponse.decode(new Reader(data))
    );
  }

  BaseBid(request: QueryGetBaseBidRequest): Promise<QueryGetBaseBidResponse> {
    const data = QueryGetBaseBidRequest.encode(request).finish();
    const promise = this.rpc.request(
      "carauction.carauction.Query",
      "BaseBid",
      data
    );
    return promise.then((data) =>
      QueryGetBaseBidResponse.decode(new Reader(data))
    );
  }

  BaseBidAll(
    request: QueryAllBaseBidRequest
  ): Promise<QueryAllBaseBidResponse> {
    const data = QueryAllBaseBidRequest.encode(request).finish();
    const promise = this.rpc.request(
      "carauction.carauction.Query",
      "BaseBidAll",
      data
    );
    return promise.then((data) =>
      QueryAllBaseBidResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
