// package: audio
// file: audio.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class AudioRequest extends jspb.Message { 
    getFrom(): string;
    setFrom(value: string): AudioRequest;

    getTo(): string;
    setTo(value: string): AudioRequest;

    getFile(): string;
    setFile(value: string): AudioRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AudioRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AudioRequest): AudioRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AudioRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AudioRequest;
    static deserializeBinaryFromReader(message: AudioRequest, reader: jspb.BinaryReader): AudioRequest;
}

export namespace AudioRequest {
    export type AsObject = {
        from: string,
        to: string,
        file: string,
    }
}

export class AudioStatusResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): AudioStatusResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AudioStatusResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AudioStatusResponse): AudioStatusResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AudioStatusResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AudioStatusResponse;
    static deserializeBinaryFromReader(message: AudioStatusResponse, reader: jspb.BinaryReader): AudioStatusResponse;
}

export namespace AudioStatusResponse {
    export type AsObject = {
        id: string,
    }
}
