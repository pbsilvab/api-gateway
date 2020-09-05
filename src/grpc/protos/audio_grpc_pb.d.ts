// package: audio
// file: audio.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as audio_pb from "./audio_pb";

interface IAudioService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    setAudioContentRequest: IAudioService_ISetAudioContentRequest;
}

interface IAudioService_ISetAudioContentRequest extends grpc.MethodDefinition<audio_pb.AudioRequest, audio_pb.AudioStatusResponse> {
    path: string; // "/audio.Audio/SetAudioContentRequest"
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<audio_pb.AudioRequest>;
    requestDeserialize: grpc.deserialize<audio_pb.AudioRequest>;
    responseSerialize: grpc.serialize<audio_pb.AudioStatusResponse>;
    responseDeserialize: grpc.deserialize<audio_pb.AudioStatusResponse>;
}

export const AudioService: IAudioService;

export interface IAudioServer {
    setAudioContentRequest: grpc.handleClientStreamingCall<audio_pb.AudioRequest, audio_pb.AudioStatusResponse>;
}

export interface IAudioClient {
    setAudioContentRequest(callback: (error: grpc.ServiceError | null, response: audio_pb.AudioStatusResponse) => void): grpc.ClientWritableStream<audio_pb.AudioRequest>;
    setAudioContentRequest(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: audio_pb.AudioStatusResponse) => void): grpc.ClientWritableStream<audio_pb.AudioRequest>;
    setAudioContentRequest(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: audio_pb.AudioStatusResponse) => void): grpc.ClientWritableStream<audio_pb.AudioRequest>;
    setAudioContentRequest(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: audio_pb.AudioStatusResponse) => void): grpc.ClientWritableStream<audio_pb.AudioRequest>;
}

export class AudioClient extends grpc.Client implements IAudioClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public setAudioContentRequest(callback: (error: grpc.ServiceError | null, response: audio_pb.AudioStatusResponse) => void): grpc.ClientWritableStream<audio_pb.AudioRequest>;
    public setAudioContentRequest(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: audio_pb.AudioStatusResponse) => void): grpc.ClientWritableStream<audio_pb.AudioRequest>;
    public setAudioContentRequest(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: audio_pb.AudioStatusResponse) => void): grpc.ClientWritableStream<audio_pb.AudioRequest>;
    public setAudioContentRequest(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: audio_pb.AudioStatusResponse) => void): grpc.ClientWritableStream<audio_pb.AudioRequest>;
}
