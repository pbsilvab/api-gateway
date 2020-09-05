import { ReadGroupsQueryArgs } from "../../schema";
import { ReadGroupRequest } from "../../grpc/protos/group_pb";
import { readGroup } from "../../grpc/group";
import { Metadata } from "grpc";

export const read = async (_: any, { id }: ReadGroupsQueryArgs, meta: Metadata ) => {

    const req = new ReadGroupRequest();

    req.setId(id);

    const resp = (await readGroup(req, meta)).toObject();

    return resp;
}