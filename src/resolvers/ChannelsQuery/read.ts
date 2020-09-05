import { ReadChannelsQueryArgs } from "../../schema";
import { Metadata } from "grpc";
import { ReadChannelRequest } from "../../grpc/protos/channel_pb";
import { readChannel } from "../../grpc/channel";

export const read = async (_: any, { Id }: ReadChannelsQueryArgs, meta: Metadata ) => {

    const req = new ReadChannelRequest();

    req.setId(Id);

    const resp = (await readChannel(req, meta)).toObject();

    return resp;
}