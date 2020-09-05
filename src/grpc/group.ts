import { GroupClient } from "./protos/group_grpc_pb";
import { credentials } from "grpc";
import { promisifyUnaryRequestForClient } from "./common";
import { SetGroupRequest, GroupResponse, ReadGroupRequest, UsertToGroupRequest, UsertToGroupResponse, FindGroupsRequest, FindGroupsResponse } from "./protos/group_pb";
import { EmptyRequest, FindSettings } from "./protos/find-settings_pb";

const client = new GroupClient(`${process.env.SERVICE_WETALK_HOST}:${process.env.SERVICE_WETALK_PORT}`, credentials.createInsecure());

const promisifyUnaryRequest = promisifyUnaryRequestForClient(client);

export const setGroup = promisifyUnaryRequest<SetGroupRequest, GroupResponse>('setGroup');
export const readGroup = promisifyUnaryRequest<ReadGroupRequest, GroupResponse>('readGroup');
export const setUserToGroup = promisifyUnaryRequest<UsertToGroupRequest, UsertToGroupResponse>('setUserToGroup');
export const findGroups = promisifyUnaryRequest<FindGroupsRequest, FindGroupsResponse>('findGroups');
export const findGroupsSettings = promisifyUnaryRequest<EmptyRequest, FindSettings>('findGroupsSettings');