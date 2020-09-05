import { UpdateGroupsMutationArgs } from "../../schema";
import { Metadata } from "grpc";
import { SetGroupRequest } from "../../grpc/protos/group_pb";
import { setGroup } from "../../grpc/group";

export const update = async (_: any, { group, id }: UpdateGroupsMutationArgs, meta: Metadata ) => {

    const req = new SetGroupRequest();

    req.setId(id);

    if(group) {
        req.setName(group.name);
    }

    return (await setGroup(req, meta)).toObject();

}