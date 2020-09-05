import { Metadata } from "grpc";
import { FindGroupsQueryArgs } from "../../schema";
import { FindGroupsRequest } from "../../grpc/protos/group_pb";
import { filterInputToProtobuf, searchTermInputToProtobuf } from "../../utils";
import { findGroups } from "../../grpc/group";

export const find = async (_: any, args: FindGroupsQueryArgs,  meta: Metadata) => {

    const req = new FindGroupsRequest();

    const {
        first,
        last,
        before,
        after,
        filters,
        searchTerms,
        order,
      } = args;

    if(before) {
        req.setBefore(before);
    }
    if(after) {
        req.setAfter(after);
    }
    if(filters) {
        req.setFiltersList(filterInputToProtobuf(filters));
    }
    if(first) {
        req.setFirst(first);
    }
    if(last) {
        req.setLast(last);
    }
    if(order) {
        req.setOrder(order);
    }

    if(searchTerms) {
        req.setSearchTermsList(searchTermInputToProtobuf(searchTerms));
    }

    return (await findGroups(req, meta)).toObject();
}