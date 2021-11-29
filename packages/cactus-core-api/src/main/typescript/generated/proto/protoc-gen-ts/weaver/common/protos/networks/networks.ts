/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.15.6
 * source: networks/networks.proto
 * git: https://github.com/thesayyn/protoc-gen-ts
 * buymeacoffee: https://www.buymeacoffee.com/thesayyn
 *  */
import * as dependency_1 from "./../common/ack";
import * as dependency_2 from "./../common/state";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export namespace networks.networks {
    export class DbName extends pb_1.Message {
        constructor(data?: any[] | {
            name?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("name" in data && data.name != undefined) {
                    this.name = data.name;
                }
            }
        }
        get name() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set name(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            name?: string;
        }) {
            const message = new DbName({});
            if (data.name != null) {
                message.name = data.name;
            }
            return message;
        }
        toObject() {
            const data: {
                name?: string;
            } = {};
            if (this.name != null) {
                data.name = this.name;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.name === "string" && this.name.length)
                writer.writeString(1, this.name);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): DbName {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new DbName();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.name = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): DbName {
            return DbName.deserialize(bytes);
        }
    }
    export class RelayDatabase extends pb_1.Message {
        constructor(data?: any[] | {
            pairs?: Map<string, string>;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("pairs" in data && data.pairs != undefined) {
                    this.pairs = data.pairs;
                }
            }
            if (!this.pairs)
                this.pairs = new Map()
        }
        get pairs() {
            return pb_1.Message.getField(this, 1) as any as Map<string, string>;
        }
        set pairs(value: Map<string, string>) {
            pb_1.Message.setField(this, 1, value as any);
        }
        static fromObject(data: {
            pairs?: {
                [key: string]: string;
            };
        }) {
            const message = new RelayDatabase({});
            if (typeof data.pairs == "object") {
                message.pairs = new Map(Object.entries(data.pairs));
            }
            return message;
        }
        toObject() {
            const data: {
                pairs?: {
                    [key: string]: string;
                };
            } = {};
            if (this.pairs.size > 0) {
                data.pairs = Object.fromEntries(this.pairs);
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            for (const [key, value] of this.pairs) {
                writer.writeMessage(1, this.pairs, () => {
                    writer.writeString(1, key);
                    writer.writeString(2, value);
                })
            }
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): RelayDatabase {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new RelayDatabase();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message, () => pb_1.Map.deserializeBinary(message.pairs as any, reader, reader.readString, reader.readString));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): RelayDatabase {
            return RelayDatabase.deserialize(bytes);
        }
    }
    export class GetStateMessage extends pb_1.Message {
        constructor(data?: any[] | {
            request_id?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("request_id" in data && data.request_id != undefined) {
                    this.request_id = data.request_id;
                }
            }
        }
        get request_id() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set request_id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            request_id?: string;
        }) {
            const message = new GetStateMessage({});
            if (data.request_id != null) {
                message.request_id = data.request_id;
            }
            return message;
        }
        toObject() {
            const data: {
                request_id?: string;
            } = {};
            if (this.request_id != null) {
                data.request_id = this.request_id;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.request_id === "string" && this.request_id.length)
                writer.writeString(1, this.request_id);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetStateMessage {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GetStateMessage();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.request_id = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): GetStateMessage {
            return GetStateMessage.deserialize(bytes);
        }
    }
    export class NetworkQuery extends pb_1.Message {
        constructor(data?: any[] | {
            policy?: string[];
            address?: string;
            requesting_relay?: string;
            requesting_network?: string;
            certificate?: string;
            requestor_signature?: string;
            nonce?: string;
            requesting_org?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("policy" in data && data.policy != undefined) {
                    this.policy = data.policy;
                }
                if ("address" in data && data.address != undefined) {
                    this.address = data.address;
                }
                if ("requesting_relay" in data && data.requesting_relay != undefined) {
                    this.requesting_relay = data.requesting_relay;
                }
                if ("requesting_network" in data && data.requesting_network != undefined) {
                    this.requesting_network = data.requesting_network;
                }
                if ("certificate" in data && data.certificate != undefined) {
                    this.certificate = data.certificate;
                }
                if ("requestor_signature" in data && data.requestor_signature != undefined) {
                    this.requestor_signature = data.requestor_signature;
                }
                if ("nonce" in data && data.nonce != undefined) {
                    this.nonce = data.nonce;
                }
                if ("requesting_org" in data && data.requesting_org != undefined) {
                    this.requesting_org = data.requesting_org;
                }
            }
        }
        get policy() {
            return pb_1.Message.getField(this, 1) as string[];
        }
        set policy(value: string[]) {
            pb_1.Message.setField(this, 1, value);
        }
        get address() {
            return pb_1.Message.getField(this, 2) as string;
        }
        set address(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get requesting_relay() {
            return pb_1.Message.getField(this, 3) as string;
        }
        set requesting_relay(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get requesting_network() {
            return pb_1.Message.getField(this, 4) as string;
        }
        set requesting_network(value: string) {
            pb_1.Message.setField(this, 4, value);
        }
        get certificate() {
            return pb_1.Message.getField(this, 5) as string;
        }
        set certificate(value: string) {
            pb_1.Message.setField(this, 5, value);
        }
        get requestor_signature() {
            return pb_1.Message.getField(this, 6) as string;
        }
        set requestor_signature(value: string) {
            pb_1.Message.setField(this, 6, value);
        }
        get nonce() {
            return pb_1.Message.getField(this, 7) as string;
        }
        set nonce(value: string) {
            pb_1.Message.setField(this, 7, value);
        }
        get requesting_org() {
            return pb_1.Message.getField(this, 8) as string;
        }
        set requesting_org(value: string) {
            pb_1.Message.setField(this, 8, value);
        }
        static fromObject(data: {
            policy?: string[];
            address?: string;
            requesting_relay?: string;
            requesting_network?: string;
            certificate?: string;
            requestor_signature?: string;
            nonce?: string;
            requesting_org?: string;
        }) {
            const message = new NetworkQuery({});
            if (data.policy != null) {
                message.policy = data.policy;
            }
            if (data.address != null) {
                message.address = data.address;
            }
            if (data.requesting_relay != null) {
                message.requesting_relay = data.requesting_relay;
            }
            if (data.requesting_network != null) {
                message.requesting_network = data.requesting_network;
            }
            if (data.certificate != null) {
                message.certificate = data.certificate;
            }
            if (data.requestor_signature != null) {
                message.requestor_signature = data.requestor_signature;
            }
            if (data.nonce != null) {
                message.nonce = data.nonce;
            }
            if (data.requesting_org != null) {
                message.requesting_org = data.requesting_org;
            }
            return message;
        }
        toObject() {
            const data: {
                policy?: string[];
                address?: string;
                requesting_relay?: string;
                requesting_network?: string;
                certificate?: string;
                requestor_signature?: string;
                nonce?: string;
                requesting_org?: string;
            } = {};
            if (this.policy != null) {
                data.policy = this.policy;
            }
            if (this.address != null) {
                data.address = this.address;
            }
            if (this.requesting_relay != null) {
                data.requesting_relay = this.requesting_relay;
            }
            if (this.requesting_network != null) {
                data.requesting_network = this.requesting_network;
            }
            if (this.certificate != null) {
                data.certificate = this.certificate;
            }
            if (this.requestor_signature != null) {
                data.requestor_signature = this.requestor_signature;
            }
            if (this.nonce != null) {
                data.nonce = this.nonce;
            }
            if (this.requesting_org != null) {
                data.requesting_org = this.requesting_org;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.policy !== undefined)
                writer.writeRepeatedString(1, this.policy);
            if (typeof this.address === "string" && this.address.length)
                writer.writeString(2, this.address);
            if (typeof this.requesting_relay === "string" && this.requesting_relay.length)
                writer.writeString(3, this.requesting_relay);
            if (typeof this.requesting_network === "string" && this.requesting_network.length)
                writer.writeString(4, this.requesting_network);
            if (typeof this.certificate === "string" && this.certificate.length)
                writer.writeString(5, this.certificate);
            if (typeof this.requestor_signature === "string" && this.requestor_signature.length)
                writer.writeString(6, this.requestor_signature);
            if (typeof this.nonce === "string" && this.nonce.length)
                writer.writeString(7, this.nonce);
            if (typeof this.requesting_org === "string" && this.requesting_org.length)
                writer.writeString(8, this.requesting_org);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): NetworkQuery {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new NetworkQuery();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        pb_1.Message.addToRepeatedField(message, 1, reader.readString());
                        break;
                    case 2:
                        message.address = reader.readString();
                        break;
                    case 3:
                        message.requesting_relay = reader.readString();
                        break;
                    case 4:
                        message.requesting_network = reader.readString();
                        break;
                    case 5:
                        message.certificate = reader.readString();
                        break;
                    case 6:
                        message.requestor_signature = reader.readString();
                        break;
                    case 7:
                        message.nonce = reader.readString();
                        break;
                    case 8:
                        message.requesting_org = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): NetworkQuery {
            return NetworkQuery.deserialize(bytes);
        }
    }
    export abstract class UnimplementedNetworkService {
        static definition = {
            RequestState: {
                path: "/networks.networks.Network/RequestState",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: NetworkQuery) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => NetworkQuery.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: dependency_1.common.ack.Ack) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => dependency_1.common.ack.Ack.deserialize(new Uint8Array(bytes))
            },
            GetState: {
                path: "/networks.networks.Network/GetState",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: GetStateMessage) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => GetStateMessage.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: dependency_2.common.state.RequestState) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => dependency_2.common.state.RequestState.deserialize(new Uint8Array(bytes))
            },
            RequestDatabase: {
                path: "/networks.networks.Network/RequestDatabase",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: DbName) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => DbName.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: RelayDatabase) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => RelayDatabase.deserialize(new Uint8Array(bytes))
            }
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract RequestState(call: grpc_1.ServerUnaryCall<NetworkQuery, dependency_1.common.ack.Ack>, callback: grpc_1.requestCallback<dependency_1.common.ack.Ack>): void;
        abstract GetState(call: grpc_1.ServerUnaryCall<GetStateMessage, dependency_2.common.state.RequestState>, callback: grpc_1.requestCallback<dependency_2.common.state.RequestState>): void;
        abstract RequestDatabase(call: grpc_1.ServerUnaryCall<DbName, RelayDatabase>, callback: grpc_1.requestCallback<RelayDatabase>): void;
    }
    export class NetworkClient extends grpc_1.makeGenericClientConstructor(UnimplementedNetworkService.definition, "Network", {}) {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
            super(address, credentials, options)
        }
        RequestState(message: NetworkQuery, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<dependency_1.common.ack.Ack>): grpc_1.ClientUnaryCall;
        RequestState(message: NetworkQuery, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<dependency_1.common.ack.Ack>): grpc_1.ClientUnaryCall;
        RequestState(message: NetworkQuery, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<dependency_1.common.ack.Ack>): grpc_1.ClientUnaryCall;
        RequestState(message: NetworkQuery, callback: grpc_1.requestCallback<dependency_1.common.ack.Ack>): grpc_1.ClientUnaryCall;
        RequestState(message: NetworkQuery, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.common.ack.Ack>, options?: grpc_1.CallOptions | grpc_1.requestCallback<dependency_1.common.ack.Ack>, callback?: grpc_1.requestCallback<dependency_1.common.ack.Ack>): grpc_1.ClientUnaryCall {
            return super.RequestState(message, metadata, options, callback);
        }
        GetState(message: GetStateMessage, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<dependency_2.common.state.RequestState>): grpc_1.ClientUnaryCall;
        GetState(message: GetStateMessage, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<dependency_2.common.state.RequestState>): grpc_1.ClientUnaryCall;
        GetState(message: GetStateMessage, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<dependency_2.common.state.RequestState>): grpc_1.ClientUnaryCall;
        GetState(message: GetStateMessage, callback: grpc_1.requestCallback<dependency_2.common.state.RequestState>): grpc_1.ClientUnaryCall;
        GetState(message: GetStateMessage, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<dependency_2.common.state.RequestState>, options?: grpc_1.CallOptions | grpc_1.requestCallback<dependency_2.common.state.RequestState>, callback?: grpc_1.requestCallback<dependency_2.common.state.RequestState>): grpc_1.ClientUnaryCall {
            return super.GetState(message, metadata, options, callback);
        }
        RequestDatabase(message: DbName, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<RelayDatabase>): grpc_1.ClientUnaryCall;
        RequestDatabase(message: DbName, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<RelayDatabase>): grpc_1.ClientUnaryCall;
        RequestDatabase(message: DbName, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<RelayDatabase>): grpc_1.ClientUnaryCall;
        RequestDatabase(message: DbName, callback: grpc_1.requestCallback<RelayDatabase>): grpc_1.ClientUnaryCall;
        RequestDatabase(message: DbName, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<RelayDatabase>, options?: grpc_1.CallOptions | grpc_1.requestCallback<RelayDatabase>, callback?: grpc_1.requestCallback<RelayDatabase>): grpc_1.ClientUnaryCall {
            return super.RequestDatabase(message, metadata, options, callback);
        }
    }
}