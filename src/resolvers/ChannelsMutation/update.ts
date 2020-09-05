import { UpdateChannelsMutationArgs } from "../../schema";
import { Metadata } from "grpc";
import { SetChannelRequest } from "../../grpc/protos/channel_pb";
import { setChannel } from "../../grpc/channel";

export const update = async (_: any, { id, channel }: UpdateChannelsMutationArgs, meta: Metadata ) => {

    const req = new SetChannelRequest();

    console.log(id);

    req.setId(id);

    if(channel) {
        req.setName(channel.name);
    }

    return (await setChannel(req, meta)).toObject();

}