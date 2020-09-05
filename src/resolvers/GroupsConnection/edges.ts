import { FindGroupsResponse } from "../../grpc/protos/group_pb";

export const edges = (elem: FindGroupsResponse.AsObject) => elem.edgesList;
