// package: meeting
// file: meeting.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as meeting_pb from "./meeting_pb";

interface IMeetingService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    setMeeting: IMeetingService_ISetMeeting;
    readMeeting: IMeetingService_IReadMeeting;
    readChannelMeeting: IMeetingService_IReadChannelMeeting;
}

interface IMeetingService_ISetMeeting extends grpc.MethodDefinition<meeting_pb.SetMeetingRequest, meeting_pb.MeetingResponse> {
    path: string; // "/meeting.Meeting/SetMeeting"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<meeting_pb.SetMeetingRequest>;
    requestDeserialize: grpc.deserialize<meeting_pb.SetMeetingRequest>;
    responseSerialize: grpc.serialize<meeting_pb.MeetingResponse>;
    responseDeserialize: grpc.deserialize<meeting_pb.MeetingResponse>;
}
interface IMeetingService_IReadMeeting extends grpc.MethodDefinition<meeting_pb.ReadMeetingRequest, meeting_pb.MeetingResponse> {
    path: string; // "/meeting.Meeting/ReadMeeting"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<meeting_pb.ReadMeetingRequest>;
    requestDeserialize: grpc.deserialize<meeting_pb.ReadMeetingRequest>;
    responseSerialize: grpc.serialize<meeting_pb.MeetingResponse>;
    responseDeserialize: grpc.deserialize<meeting_pb.MeetingResponse>;
}
interface IMeetingService_IReadChannelMeeting extends grpc.MethodDefinition<meeting_pb.ReadChannelMeetingRequest, meeting_pb.ChannelMeetingResponse> {
    path: string; // "/meeting.Meeting/ReadChannelMeeting"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<meeting_pb.ReadChannelMeetingRequest>;
    requestDeserialize: grpc.deserialize<meeting_pb.ReadChannelMeetingRequest>;
    responseSerialize: grpc.serialize<meeting_pb.ChannelMeetingResponse>;
    responseDeserialize: grpc.deserialize<meeting_pb.ChannelMeetingResponse>;
}

export const MeetingService: IMeetingService;

export interface IMeetingServer {
    setMeeting: grpc.handleUnaryCall<meeting_pb.SetMeetingRequest, meeting_pb.MeetingResponse>;
    readMeeting: grpc.handleUnaryCall<meeting_pb.ReadMeetingRequest, meeting_pb.MeetingResponse>;
    readChannelMeeting: grpc.handleUnaryCall<meeting_pb.ReadChannelMeetingRequest, meeting_pb.ChannelMeetingResponse>;
}

export interface IMeetingClient {
    setMeeting(request: meeting_pb.SetMeetingRequest, callback: (error: grpc.ServiceError | null, response: meeting_pb.MeetingResponse) => void): grpc.ClientUnaryCall;
    setMeeting(request: meeting_pb.SetMeetingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: meeting_pb.MeetingResponse) => void): grpc.ClientUnaryCall;
    setMeeting(request: meeting_pb.SetMeetingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: meeting_pb.MeetingResponse) => void): grpc.ClientUnaryCall;
    readMeeting(request: meeting_pb.ReadMeetingRequest, callback: (error: grpc.ServiceError | null, response: meeting_pb.MeetingResponse) => void): grpc.ClientUnaryCall;
    readMeeting(request: meeting_pb.ReadMeetingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: meeting_pb.MeetingResponse) => void): grpc.ClientUnaryCall;
    readMeeting(request: meeting_pb.ReadMeetingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: meeting_pb.MeetingResponse) => void): grpc.ClientUnaryCall;
    readChannelMeeting(request: meeting_pb.ReadChannelMeetingRequest, callback: (error: grpc.ServiceError | null, response: meeting_pb.ChannelMeetingResponse) => void): grpc.ClientUnaryCall;
    readChannelMeeting(request: meeting_pb.ReadChannelMeetingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: meeting_pb.ChannelMeetingResponse) => void): grpc.ClientUnaryCall;
    readChannelMeeting(request: meeting_pb.ReadChannelMeetingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: meeting_pb.ChannelMeetingResponse) => void): grpc.ClientUnaryCall;
}

export class MeetingClient extends grpc.Client implements IMeetingClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public setMeeting(request: meeting_pb.SetMeetingRequest, callback: (error: grpc.ServiceError | null, response: meeting_pb.MeetingResponse) => void): grpc.ClientUnaryCall;
    public setMeeting(request: meeting_pb.SetMeetingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: meeting_pb.MeetingResponse) => void): grpc.ClientUnaryCall;
    public setMeeting(request: meeting_pb.SetMeetingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: meeting_pb.MeetingResponse) => void): grpc.ClientUnaryCall;
    public readMeeting(request: meeting_pb.ReadMeetingRequest, callback: (error: grpc.ServiceError | null, response: meeting_pb.MeetingResponse) => void): grpc.ClientUnaryCall;
    public readMeeting(request: meeting_pb.ReadMeetingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: meeting_pb.MeetingResponse) => void): grpc.ClientUnaryCall;
    public readMeeting(request: meeting_pb.ReadMeetingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: meeting_pb.MeetingResponse) => void): grpc.ClientUnaryCall;
    public readChannelMeeting(request: meeting_pb.ReadChannelMeetingRequest, callback: (error: grpc.ServiceError | null, response: meeting_pb.ChannelMeetingResponse) => void): grpc.ClientUnaryCall;
    public readChannelMeeting(request: meeting_pb.ReadChannelMeetingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: meeting_pb.ChannelMeetingResponse) => void): grpc.ClientUnaryCall;
    public readChannelMeeting(request: meeting_pb.ReadChannelMeetingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: meeting_pb.ChannelMeetingResponse) => void): grpc.ClientUnaryCall;
}
