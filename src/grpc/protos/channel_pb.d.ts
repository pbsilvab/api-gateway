// package: channel
// file: channel.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as meeting_pb from "./meeting_pb";

export class SetChannelRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): SetChannelRequest;

    getName(): string;
    setName(value: string): SetChannelRequest;

    getGroupId(): string;
    setGroupId(value: string): SetChannelRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetChannelRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetChannelRequest): SetChannelRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetChannelRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetChannelRequest;
    static deserializeBinaryFromReader(message: SetChannelRequest, reader: jspb.BinaryReader): SetChannelRequest;
}

export namespace SetChannelRequest {
    export type AsObject = {
        id: string,
        name: string,
        groupId: string,
    }
}

export class ChannelResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): ChannelResponse;

    getName(): string;
    setName(value: string): ChannelResponse;

    getGroupId(): string;
    setGroupId(value: string): ChannelResponse;

    clearMeetingsList(): void;
    getMeetingsList(): Array<meeting_pb.MeetingResponse>;
    setMeetingsList(value: Array<meeting_pb.MeetingResponse>): ChannelResponse;
    addMeetings(value?: meeting_pb.MeetingResponse, index?: number): meeting_pb.MeetingResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChannelResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ChannelResponse): ChannelResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChannelResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChannelResponse;
    static deserializeBinaryFromReader(message: ChannelResponse, reader: jspb.BinaryReader): ChannelResponse;
}

export namespace ChannelResponse {
    export type AsObject = {
        id: string,
        name: string,
        groupId: string,
        meetingsList: Array<meeting_pb.MeetingResponse.AsObject>,
    }
}

export class ReadChannelRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): ReadChannelRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadChannelRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ReadChannelRequest): ReadChannelRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadChannelRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadChannelRequest;
    static deserializeBinaryFromReader(message: ReadChannelRequest, reader: jspb.BinaryReader): ReadChannelRequest;
}

export namespace ReadChannelRequest {
    export type AsObject = {
        id: string,
    }
}

export class UsertToChannelRequest extends jspb.Message { 
    getChanelId(): string;
    setChanelId(value: string): UsertToChannelRequest;

    getAccountId(): string;
    setAccountId(value: string): UsertToChannelRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UsertToChannelRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UsertToChannelRequest): UsertToChannelRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UsertToChannelRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UsertToChannelRequest;
    static deserializeBinaryFromReader(message: UsertToChannelRequest, reader: jspb.BinaryReader): UsertToChannelRequest;
}

export namespace UsertToChannelRequest {
    export type AsObject = {
        chanelId: string,
        accountId: string,
    }
}

export class UsertToChannelResponse extends jspb.Message { 
    getChanelId(): string;
    setChanelId(value: string): UsertToChannelResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UsertToChannelResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UsertToChannelResponse): UsertToChannelResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UsertToChannelResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UsertToChannelResponse;
    static deserializeBinaryFromReader(message: UsertToChannelResponse, reader: jspb.BinaryReader): UsertToChannelResponse;
}

export namespace UsertToChannelResponse {
    export type AsObject = {
        chanelId: string,
    }
}
