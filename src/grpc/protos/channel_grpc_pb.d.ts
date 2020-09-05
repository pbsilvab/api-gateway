// package: channel
// file: channel.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as channel_pb from "./channel_pb";
import * as meeting_pb from "./meeting_pb";

interface IChannelService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    setChannel: IChannelService_ISetChannel;
    readChannel: IChannelService_IReadChannel;
    setUserToChannel: IChannelService_ISetUserToChannel;
}

interface IChannelService_ISetChannel extends grpc.MethodDefinition<channel_pb.SetChannelRequest, channel_pb.ChannelResponse> {
    path: string; // "/channel.Channel/SetChannel"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<channel_pb.SetChannelRequest>;
    requestDeserialize: grpc.deserialize<channel_pb.SetChannelRequest>;
    responseSerialize: grpc.serialize<channel_pb.ChannelResponse>;
    responseDeserialize: grpc.deserialize<channel_pb.ChannelResponse>;
}
interface IChannelService_IReadChannel extends grpc.MethodDefinition<channel_pb.ReadChannelRequest, channel_pb.ChannelResponse> {
    path: string; // "/channel.Channel/ReadChannel"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<channel_pb.ReadChannelRequest>;
    requestDeserialize: grpc.deserialize<channel_pb.ReadChannelRequest>;
    responseSerialize: grpc.serialize<channel_pb.ChannelResponse>;
    responseDeserialize: grpc.deserialize<channel_pb.ChannelResponse>;
}
interface IChannelService_ISetUserToChannel extends grpc.MethodDefinition<channel_pb.UsertToChannelRequest, channel_pb.UsertToChannelResponse> {
    path: string; // "/channel.Channel/SetUserToChannel"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<channel_pb.UsertToChannelRequest>;
    requestDeserialize: grpc.deserialize<channel_pb.UsertToChannelRequest>;
    responseSerialize: grpc.serialize<channel_pb.UsertToChannelResponse>;
    responseDeserialize: grpc.deserialize<channel_pb.UsertToChannelResponse>;
}

export const ChannelService: IChannelService;

export interface IChannelServer {
    setChannel: grpc.handleUnaryCall<channel_pb.SetChannelRequest, channel_pb.ChannelResponse>;
    readChannel: grpc.handleUnaryCall<channel_pb.ReadChannelRequest, channel_pb.ChannelResponse>;
    setUserToChannel: grpc.handleUnaryCall<channel_pb.UsertToChannelRequest, channel_pb.UsertToChannelResponse>;
}

export interface IChannelClient {
    setChannel(request: channel_pb.SetChannelRequest, callback: (error: grpc.ServiceError | null, response: channel_pb.ChannelResponse) => void): grpc.ClientUnaryCall;
    setChannel(request: channel_pb.SetChannelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: channel_pb.ChannelResponse) => void): grpc.ClientUnaryCall;
    setChannel(request: channel_pb.SetChannelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: channel_pb.ChannelResponse) => void): grpc.ClientUnaryCall;
    readChannel(request: channel_pb.ReadChannelRequest, callback: (error: grpc.ServiceError | null, response: channel_pb.ChannelResponse) => void): grpc.ClientUnaryCall;
    readChannel(request: channel_pb.ReadChannelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: channel_pb.ChannelResponse) => void): grpc.ClientUnaryCall;
    readChannel(request: channel_pb.ReadChannelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: channel_pb.ChannelResponse) => void): grpc.ClientUnaryCall;
    setUserToChannel(request: channel_pb.UsertToChannelRequest, callback: (error: grpc.ServiceError | null, response: channel_pb.UsertToChannelResponse) => void): grpc.ClientUnaryCall;
    setUserToChannel(request: channel_pb.UsertToChannelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: channel_pb.UsertToChannelResponse) => void): grpc.ClientUnaryCall;
    setUserToChannel(request: channel_pb.UsertToChannelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: channel_pb.UsertToChannelResponse) => void): grpc.ClientUnaryCall;
}

export class ChannelClient extends grpc.Client implements IChannelClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public setChannel(request: channel_pb.SetChannelRequest, callback: (error: grpc.ServiceError | null, response: channel_pb.ChannelResponse) => void): grpc.ClientUnaryCall;
    public setChannel(request: channel_pb.SetChannelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: channel_pb.ChannelResponse) => void): grpc.ClientUnaryCall;
    public setChannel(request: channel_pb.SetChannelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: channel_pb.ChannelResponse) => void): grpc.ClientUnaryCall;
    public readChannel(request: channel_pb.ReadChannelRequest, callback: (error: grpc.ServiceError | null, response: channel_pb.ChannelResponse) => void): grpc.ClientUnaryCall;
    public readChannel(request: channel_pb.ReadChannelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: channel_pb.ChannelResponse) => void): grpc.ClientUnaryCall;
    public readChannel(request: channel_pb.ReadChannelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: channel_pb.ChannelResponse) => void): grpc.ClientUnaryCall;
    public setUserToChannel(request: channel_pb.UsertToChannelRequest, callback: (error: grpc.ServiceError | null, response: channel_pb.UsertToChannelResponse) => void): grpc.ClientUnaryCall;
    public setUserToChannel(request: channel_pb.UsertToChannelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: channel_pb.UsertToChannelResponse) => void): grpc.ClientUnaryCall;
    public setUserToChannel(request: channel_pb.UsertToChannelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: channel_pb.UsertToChannelResponse) => void): grpc.ClientUnaryCall;
}
