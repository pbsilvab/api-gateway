// package: meeting
// file: meeting.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class SetMeetingRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): SetMeetingRequest;

    getName(): string;
    setName(value: string): SetMeetingRequest;

    getFrom(): string;
    setFrom(value: string): SetMeetingRequest;

    getTo(): string;
    setTo(value: string): SetMeetingRequest;

    getChannelId(): string;
    setChannelId(value: string): SetMeetingRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetMeetingRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetMeetingRequest): SetMeetingRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetMeetingRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetMeetingRequest;
    static deserializeBinaryFromReader(message: SetMeetingRequest, reader: jspb.BinaryReader): SetMeetingRequest;
}

export namespace SetMeetingRequest {
    export type AsObject = {
        id: string,
        name: string,
        from: string,
        to: string,
        channelId: string,
    }
}

export class MeetingResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): MeetingResponse;

    getName(): string;
    setName(value: string): MeetingResponse;

    getFrom(): string;
    setFrom(value: string): MeetingResponse;

    getTo(): string;
    setTo(value: string): MeetingResponse;

    getChannelId(): string;
    setChannelId(value: string): MeetingResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MeetingResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MeetingResponse): MeetingResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MeetingResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MeetingResponse;
    static deserializeBinaryFromReader(message: MeetingResponse, reader: jspb.BinaryReader): MeetingResponse;
}

export namespace MeetingResponse {
    export type AsObject = {
        id: string,
        name: string,
        from: string,
        to: string,
        channelId: string,
    }
}

export class ReadMeetingRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): ReadMeetingRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadMeetingRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ReadMeetingRequest): ReadMeetingRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadMeetingRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadMeetingRequest;
    static deserializeBinaryFromReader(message: ReadMeetingRequest, reader: jspb.BinaryReader): ReadMeetingRequest;
}

export namespace ReadMeetingRequest {
    export type AsObject = {
        id: string,
    }
}

export class ReadChannelMeetingRequest extends jspb.Message { 
    getChannelId(): string;
    setChannelId(value: string): ReadChannelMeetingRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadChannelMeetingRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ReadChannelMeetingRequest): ReadChannelMeetingRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadChannelMeetingRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadChannelMeetingRequest;
    static deserializeBinaryFromReader(message: ReadChannelMeetingRequest, reader: jspb.BinaryReader): ReadChannelMeetingRequest;
}

export namespace ReadChannelMeetingRequest {
    export type AsObject = {
        channelId: string,
    }
}

export class ChannelMeetingResponse extends jspb.Message { 
    clearMeetingsList(): void;
    getMeetingsList(): Array<MeetingResponse>;
    setMeetingsList(value: Array<MeetingResponse>): ChannelMeetingResponse;
    addMeetings(value?: MeetingResponse, index?: number): MeetingResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChannelMeetingResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ChannelMeetingResponse): ChannelMeetingResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChannelMeetingResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChannelMeetingResponse;
    static deserializeBinaryFromReader(message: ChannelMeetingResponse, reader: jspb.BinaryReader): ChannelMeetingResponse;
}

export namespace ChannelMeetingResponse {
    export type AsObject = {
        meetingsList: Array<MeetingResponse.AsObject>,
    }
}
