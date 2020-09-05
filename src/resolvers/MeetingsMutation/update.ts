import { UpdateMeetingsMutationArgs } from "../../schema";
import { Metadata } from "grpc";
import { SetMeetingRequest } from "../../grpc/protos/meeting_pb";
import { setMeeting } from "../../grpc/meeting";

export const update = async (_: any, { id, meeting }: UpdateMeetingsMutationArgs, meta: Metadata ) => {

  const req = new SetMeetingRequest();

  req.setId(id);

  if(meeting) {
    req.setName(meeting.name);
    req.setChannelId(meeting.channelId);
    req.setFrom(meeting.from);
    req.setTo(meeting.to);
  }

  return (await setMeeting(req, meta)).toObject();

}