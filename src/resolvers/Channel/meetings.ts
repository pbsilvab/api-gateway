import { ChannelResponse } from "../../grpc/protos/channel_pb";

export const meetings = (elem: ChannelResponse.AsObject) => elem.meetingsList;
