// package: group
// file: group.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as group_pb from "./group_pb";
import * as find_settings_pb from "./find-settings_pb";
import * as channel_pb from "./channel_pb";

interface IGroupService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    setGroup: IGroupService_ISetGroup;
    readGroup: IGroupService_IReadGroup;
    setUserToGroup: IGroupService_ISetUserToGroup;
    findGroups: IGroupService_IFindGroups;
    findGroupsSettings: IGroupService_IFindGroupsSettings;
}

interface IGroupService_ISetGroup extends grpc.MethodDefinition<group_pb.SetGroupRequest, group_pb.GroupResponse> {
    path: string; // "/group.Group/SetGroup"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<group_pb.SetGroupRequest>;
    requestDeserialize: grpc.deserialize<group_pb.SetGroupRequest>;
    responseSerialize: grpc.serialize<group_pb.GroupResponse>;
    responseDeserialize: grpc.deserialize<group_pb.GroupResponse>;
}
interface IGroupService_IReadGroup extends grpc.MethodDefinition<group_pb.ReadGroupRequest, group_pb.GroupResponse> {
    path: string; // "/group.Group/ReadGroup"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<group_pb.ReadGroupRequest>;
    requestDeserialize: grpc.deserialize<group_pb.ReadGroupRequest>;
    responseSerialize: grpc.serialize<group_pb.GroupResponse>;
    responseDeserialize: grpc.deserialize<group_pb.GroupResponse>;
}
interface IGroupService_ISetUserToGroup extends grpc.MethodDefinition<group_pb.UsertToGroupRequest, group_pb.UsertToGroupResponse> {
    path: string; // "/group.Group/SetUserToGroup"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<group_pb.UsertToGroupRequest>;
    requestDeserialize: grpc.deserialize<group_pb.UsertToGroupRequest>;
    responseSerialize: grpc.serialize<group_pb.UsertToGroupResponse>;
    responseDeserialize: grpc.deserialize<group_pb.UsertToGroupResponse>;
}
interface IGroupService_IFindGroups extends grpc.MethodDefinition<group_pb.FindGroupsRequest, group_pb.FindGroupsResponse> {
    path: string; // "/group.Group/FindGroups"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<group_pb.FindGroupsRequest>;
    requestDeserialize: grpc.deserialize<group_pb.FindGroupsRequest>;
    responseSerialize: grpc.serialize<group_pb.FindGroupsResponse>;
    responseDeserialize: grpc.deserialize<group_pb.FindGroupsResponse>;
}
interface IGroupService_IFindGroupsSettings extends grpc.MethodDefinition<find_settings_pb.EmptyRequest, find_settings_pb.FindSettings> {
    path: string; // "/group.Group/FindGroupsSettings"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<find_settings_pb.EmptyRequest>;
    requestDeserialize: grpc.deserialize<find_settings_pb.EmptyRequest>;
    responseSerialize: grpc.serialize<find_settings_pb.FindSettings>;
    responseDeserialize: grpc.deserialize<find_settings_pb.FindSettings>;
}

export const GroupService: IGroupService;

export interface IGroupServer {
    setGroup: grpc.handleUnaryCall<group_pb.SetGroupRequest, group_pb.GroupResponse>;
    readGroup: grpc.handleUnaryCall<group_pb.ReadGroupRequest, group_pb.GroupResponse>;
    setUserToGroup: grpc.handleUnaryCall<group_pb.UsertToGroupRequest, group_pb.UsertToGroupResponse>;
    findGroups: grpc.handleUnaryCall<group_pb.FindGroupsRequest, group_pb.FindGroupsResponse>;
    findGroupsSettings: grpc.handleUnaryCall<find_settings_pb.EmptyRequest, find_settings_pb.FindSettings>;
}

export interface IGroupClient {
    setGroup(request: group_pb.SetGroupRequest, callback: (error: grpc.ServiceError | null, response: group_pb.GroupResponse) => void): grpc.ClientUnaryCall;
    setGroup(request: group_pb.SetGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: group_pb.GroupResponse) => void): grpc.ClientUnaryCall;
    setGroup(request: group_pb.SetGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: group_pb.GroupResponse) => void): grpc.ClientUnaryCall;
    readGroup(request: group_pb.ReadGroupRequest, callback: (error: grpc.ServiceError | null, response: group_pb.GroupResponse) => void): grpc.ClientUnaryCall;
    readGroup(request: group_pb.ReadGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: group_pb.GroupResponse) => void): grpc.ClientUnaryCall;
    readGroup(request: group_pb.ReadGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: group_pb.GroupResponse) => void): grpc.ClientUnaryCall;
    setUserToGroup(request: group_pb.UsertToGroupRequest, callback: (error: grpc.ServiceError | null, response: group_pb.UsertToGroupResponse) => void): grpc.ClientUnaryCall;
    setUserToGroup(request: group_pb.UsertToGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: group_pb.UsertToGroupResponse) => void): grpc.ClientUnaryCall;
    setUserToGroup(request: group_pb.UsertToGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: group_pb.UsertToGroupResponse) => void): grpc.ClientUnaryCall;
    findGroups(request: group_pb.FindGroupsRequest, callback: (error: grpc.ServiceError | null, response: group_pb.FindGroupsResponse) => void): grpc.ClientUnaryCall;
    findGroups(request: group_pb.FindGroupsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: group_pb.FindGroupsResponse) => void): grpc.ClientUnaryCall;
    findGroups(request: group_pb.FindGroupsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: group_pb.FindGroupsResponse) => void): grpc.ClientUnaryCall;
    findGroupsSettings(request: find_settings_pb.EmptyRequest, callback: (error: grpc.ServiceError | null, response: find_settings_pb.FindSettings) => void): grpc.ClientUnaryCall;
    findGroupsSettings(request: find_settings_pb.EmptyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: find_settings_pb.FindSettings) => void): grpc.ClientUnaryCall;
    findGroupsSettings(request: find_settings_pb.EmptyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: find_settings_pb.FindSettings) => void): grpc.ClientUnaryCall;
}

export class GroupClient extends grpc.Client implements IGroupClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public setGroup(request: group_pb.SetGroupRequest, callback: (error: grpc.ServiceError | null, response: group_pb.GroupResponse) => void): grpc.ClientUnaryCall;
    public setGroup(request: group_pb.SetGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: group_pb.GroupResponse) => void): grpc.ClientUnaryCall;
    public setGroup(request: group_pb.SetGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: group_pb.GroupResponse) => void): grpc.ClientUnaryCall;
    public readGroup(request: group_pb.ReadGroupRequest, callback: (error: grpc.ServiceError | null, response: group_pb.GroupResponse) => void): grpc.ClientUnaryCall;
    public readGroup(request: group_pb.ReadGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: group_pb.GroupResponse) => void): grpc.ClientUnaryCall;
    public readGroup(request: group_pb.ReadGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: group_pb.GroupResponse) => void): grpc.ClientUnaryCall;
    public setUserToGroup(request: group_pb.UsertToGroupRequest, callback: (error: grpc.ServiceError | null, response: group_pb.UsertToGroupResponse) => void): grpc.ClientUnaryCall;
    public setUserToGroup(request: group_pb.UsertToGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: group_pb.UsertToGroupResponse) => void): grpc.ClientUnaryCall;
    public setUserToGroup(request: group_pb.UsertToGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: group_pb.UsertToGroupResponse) => void): grpc.ClientUnaryCall;
    public findGroups(request: group_pb.FindGroupsRequest, callback: (error: grpc.ServiceError | null, response: group_pb.FindGroupsResponse) => void): grpc.ClientUnaryCall;
    public findGroups(request: group_pb.FindGroupsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: group_pb.FindGroupsResponse) => void): grpc.ClientUnaryCall;
    public findGroups(request: group_pb.FindGroupsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: group_pb.FindGroupsResponse) => void): grpc.ClientUnaryCall;
    public findGroupsSettings(request: find_settings_pb.EmptyRequest, callback: (error: grpc.ServiceError | null, response: find_settings_pb.FindSettings) => void): grpc.ClientUnaryCall;
    public findGroupsSettings(request: find_settings_pb.EmptyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: find_settings_pb.FindSettings) => void): grpc.ClientUnaryCall;
    public findGroupsSettings(request: find_settings_pb.EmptyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: find_settings_pb.FindSettings) => void): grpc.ClientUnaryCall;
}
