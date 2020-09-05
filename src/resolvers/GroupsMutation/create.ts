import { CreateGroupsMutationArgs } from "../../schema";
import { Metadata } from "grpc";
import { SetGroupRequest } from "../../grpc/protos/group_pb";
import { setGroup } from "../../grpc/group";

export const create = async (_: any, { group }: CreateGroupsMutationArgs, meta: Metadata ) => {

    const req = new SetGroupRequest();

    if(group) {
        req.setName(group.name);
    }

    return (await setGroup(req, meta)).toObject();

}