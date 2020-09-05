// package: group
// file: group.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as find_settings_pb from "./find-settings_pb";
import * as channel_pb from "./channel_pb";

export class SetGroupRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): SetGroupRequest;

    getName(): string;
    setName(value: string): SetGroupRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetGroupRequest): SetGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetGroupRequest;
    static deserializeBinaryFromReader(message: SetGroupRequest, reader: jspb.BinaryReader): SetGroupRequest;
}

export namespace SetGroupRequest {
    export type AsObject = {
        id: string,
        name: string,
    }
}

export class GroupResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): GroupResponse;

    getName(): string;
    setName(value: string): GroupResponse;

    clearChannelsList(): void;
    getChannelsList(): Array<channel_pb.ChannelResponse>;
    setChannelsList(value: Array<channel_pb.ChannelResponse>): GroupResponse;
    addChannels(value?: channel_pb.ChannelResponse, index?: number): channel_pb.ChannelResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GroupResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GroupResponse): GroupResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GroupResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GroupResponse;
    static deserializeBinaryFromReader(message: GroupResponse, reader: jspb.BinaryReader): GroupResponse;
}

export namespace GroupResponse {
    export type AsObject = {
        id: string,
        name: string,
        channelsList: Array<channel_pb.ChannelResponse.AsObject>,
    }
}

export class ReadGroupRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): ReadGroupRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ReadGroupRequest): ReadGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadGroupRequest;
    static deserializeBinaryFromReader(message: ReadGroupRequest, reader: jspb.BinaryReader): ReadGroupRequest;
}

export namespace ReadGroupRequest {
    export type AsObject = {
        id: string,
    }
}

export class UsertToGroupRequest extends jspb.Message { 
    getGroupId(): string;
    setGroupId(value: string): UsertToGroupRequest;

    getAccountId(): string;
    setAccountId(value: string): UsertToGroupRequest;

    getRole(): string;
    setRole(value: string): UsertToGroupRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UsertToGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UsertToGroupRequest): UsertToGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UsertToGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UsertToGroupRequest;
    static deserializeBinaryFromReader(message: UsertToGroupRequest, reader: jspb.BinaryReader): UsertToGroupRequest;
}

export namespace UsertToGroupRequest {
    export type AsObject = {
        groupId: string,
        accountId: string,
        role: string,
    }
}

export class UsertToGroupResponse extends jspb.Message { 
    getGroupId(): string;
    setGroupId(value: string): UsertToGroupResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UsertToGroupResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UsertToGroupResponse): UsertToGroupResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UsertToGroupResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UsertToGroupResponse;
    static deserializeBinaryFromReader(message: UsertToGroupResponse, reader: jspb.BinaryReader): UsertToGroupResponse;
}

export namespace UsertToGroupResponse {
    export type AsObject = {
        groupId: string,
    }
}

export class FindGroupsRequest extends jspb.Message { 
    getFirst(): number;
    setFirst(value: number): FindGroupsRequest;

    getAfter(): string;
    setAfter(value: string): FindGroupsRequest;

    getLast(): number;
    setLast(value: number): FindGroupsRequest;

    getBefore(): string;
    setBefore(value: string): FindGroupsRequest;

    clearFiltersList(): void;
    getFiltersList(): Array<find_settings_pb.FindFilter>;
    setFiltersList(value: Array<find_settings_pb.FindFilter>): FindGroupsRequest;
    addFilters(value?: find_settings_pb.FindFilter, index?: number): find_settings_pb.FindFilter;

    getOrder(): string;
    setOrder(value: string): FindGroupsRequest;

    clearSearchTermsList(): void;
    getSearchTermsList(): Array<find_settings_pb.SearchTerm>;
    setSearchTermsList(value: Array<find_settings_pb.SearchTerm>): FindGroupsRequest;
    addSearchTerms(value?: find_settings_pb.SearchTerm, index?: number): find_settings_pb.SearchTerm;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FindGroupsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FindGroupsRequest): FindGroupsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FindGroupsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FindGroupsRequest;
    static deserializeBinaryFromReader(message: FindGroupsRequest, reader: jspb.BinaryReader): FindGroupsRequest;
}

export namespace FindGroupsRequest {
    export type AsObject = {
        first: number,
        after: string,
        last: number,
        before: string,
        filtersList: Array<find_settings_pb.FindFilter.AsObject>,
        order: string,
        searchTermsList: Array<find_settings_pb.SearchTerm.AsObject>,
    }
}

export class FindGroupsResponse extends jspb.Message { 

    hasPageInfo(): boolean;
    clearPageInfo(): void;
    getPageInfo(): find_settings_pb.PageInfo | undefined;
    setPageInfo(value?: find_settings_pb.PageInfo): FindGroupsResponse;

    getTotalCount(): number;
    setTotalCount(value: number): FindGroupsResponse;

    clearEdgesList(): void;
    getEdgesList(): Array<GroupsEdge>;
    setEdgesList(value: Array<GroupsEdge>): FindGroupsResponse;
    addEdges(value?: GroupsEdge, index?: number): GroupsEdge;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FindGroupsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: FindGroupsResponse): FindGroupsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FindGroupsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FindGroupsResponse;
    static deserializeBinaryFromReader(message: FindGroupsResponse, reader: jspb.BinaryReader): FindGroupsResponse;
}

export namespace FindGroupsResponse {
    export type AsObject = {
        pageInfo?: find_settings_pb.PageInfo.AsObject,
        totalCount: number,
        edgesList: Array<GroupsEdge.AsObject>,
    }
}

export class GroupsEdge extends jspb.Message { 
    getCursor(): string;
    setCursor(value: string): GroupsEdge;


    hasNode(): boolean;
    clearNode(): void;
    getNode(): GroupResponse | undefined;
    setNode(value?: GroupResponse): GroupsEdge;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GroupsEdge.AsObject;
    static toObject(includeInstance: boolean, msg: GroupsEdge): GroupsEdge.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GroupsEdge, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GroupsEdge;
    static deserializeBinaryFromReader(message: GroupsEdge, reader: jspb.BinaryReader): GroupsEdge;
}

export namespace GroupsEdge {
    export type AsObject = {
        cursor: string,
        node?: GroupResponse.AsObject,
    }
}
