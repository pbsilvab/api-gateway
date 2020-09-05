import { EmptyRequest } from "../../grpc/protos/find-settings_pb";
import { findGroupsSettings } from "../../grpc/group";

export const findSettings = async (_: any, __: any, { meta }: any) => (await findGroupsSettings(new EmptyRequest(), meta)).toObject();
