import { GroupResponse } from "../../grpc/protos/group_pb";

export const channels = (elem: GroupResponse.AsObject) => elem.channelsList;
