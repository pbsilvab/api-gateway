import { ChannelClient } from "./protos/channel_grpc_pb";
import { credentials } from "grpc";
import { promisifyUnaryRequestForClient } from "./common";
import { SetChannelRequest, ChannelResponse, ReadChannelRequest, UsertToChannelRequest, UsertToChannelResponse } from "./protos/channel_pb";

const client = new ChannelClient(`${process.env.SERVICE_WETALK_HOST}:${process.env.SERVICE_WETALK_PORT}`, credentials.createInsecure());

const promisifyUnaryRequest = promisifyUnaryRequestForClient(client);

export const setChannel = promisifyUnaryRequest<SetChannelRequest, ChannelResponse>('setChannel');
export const readChannel = promisifyUnaryRequest<ReadChannelRequest, ChannelResponse>('readChannel');
export const setUserToChannel = promisifyUnaryRequest<UsertToChannelRequest, UsertToChannelResponse>('setUserToChannel');