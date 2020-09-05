import { CreateChannelsMutationArgs } from "../../schema";
import { Metadata } from "grpc";
import { SetChannelRequest } from "../../grpc/protos/channel_pb";
import { setChannel } from "../../grpc/channel";

export const create = async (_: any, { channel }: CreateChannelsMutationArgs, meta: Metadata ) => {

    const req = new SetChannelRequest();

    console.log(channel);

    if(channel) {
        req.setName(channel.name);
        req.setGroupId(channel.groupId);
    }

    return (await setChannel(req, meta)).toObject();

}