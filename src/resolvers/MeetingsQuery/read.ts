import { ReadMeetingsQueryArgs } from "../../schema";
import { Metadata } from "grpc";
import { ReadMeetingRequest } from "../../grpc/protos/meeting_pb";
import { seadMeeting } from "../../grpc/meeting";

export const read = async (_: any, { Id }: ReadMeetingsQueryArgs, meta: Metadata ) => {

    const req = new ReadMeetingRequest();

    req.setId(Id);

    const resp = (await seadMeeting(req, meta)).toObject();

    return resp;
}