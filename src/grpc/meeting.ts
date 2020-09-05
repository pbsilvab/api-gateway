import { MeetingClient } from "./protos/meeting_grpc_pb";
import { credentials } from "grpc";
import { promisifyUnaryRequestForClient } from "./common";
import { SetMeetingRequest, MeetingResponse, ReadMeetingRequest, ReadChannelMeetingRequest, ChannelMeetingResponse } from "./protos/meeting_pb";

const client = new MeetingClient(`${process.env.SERVICE_WETALK_HOST}:${process.env.SERVICE_WETALK_PORT}`, credentials.createInsecure());

const promisifyUnaryRequest = promisifyUnaryRequestForClient(client);

export const setMeeting = promisifyUnaryRequest<SetMeetingRequest, MeetingResponse>('setMeeting');
export const seadMeeting = promisifyUnaryRequest<ReadMeetingRequest, MeetingResponse>('seadMeeting');
export const seadChannelMeeting = promisifyUnaryRequest<ReadChannelMeetingRequest, ChannelMeetingResponse>('seadChannelMeeting');
