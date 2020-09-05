import { CreateMeetingsMutationArgs } from "../../schema";
import { Metadata } from "grpc";
import { SetMeetingRequest } from "../../grpc/protos/meeting_pb";
import { setMeeting } from "../../grpc/meeting";

export const create = async (_: any, { meeting }: CreateMeetingsMutationArgs, meta: Metadata ) => {

    const req = new SetMeetingRequest();

    console.log(meeting);

    if(meeting) {
        req.setName(meeting.name);
        req.setChannelId(meeting.channelId);
        req.setFrom(meeting.from);
        req.setTo(meeting.to);
    }

    return (await setMeeting(req, meta)).toObject();

}