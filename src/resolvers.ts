import { meetings as Channel_meetings } from "./resolvers/Channel/meetings";
import { create as ChannelsMutation_create } from "./resolvers/ChannelsMutation/create";
import { update as ChannelsMutation_update } from "./resolvers/ChannelsMutation/update";
import { read as ChannelsQuery_read } from "./resolvers/ChannelsQuery/read";
import { channels as Group_channels } from "./resolvers/Group/channels";
import { edges as GroupsConnection_edges } from "./resolvers/GroupsConnection/edges";
import { create as GroupsMutation_create } from "./resolvers/GroupsMutation/create";
import { update as GroupsMutation_update } from "./resolvers/GroupsMutation/update";
import { find as GroupsQuery_find } from "./resolvers/GroupsQuery/find";
import { findSettings as GroupsQuery_findSettings } from "./resolvers/GroupsQuery/findSettings";
import { read as GroupsQuery_read } from "./resolvers/GroupsQuery/read";
import { create as MeetingsMutation_create } from "./resolvers/MeetingsMutation/create";
import { update as MeetingsMutation_update } from "./resolvers/MeetingsMutation/update";
import { read as MeetingsQuery_read } from "./resolvers/MeetingsQuery/read";
import { channels as Mutation_channels } from "./resolvers/Mutation/channels";
import { groups as Mutation_groups } from "./resolvers/Mutation/groups";
import { meetings as Mutation_meetings } from "./resolvers/Mutation/meetings";
import { channels as Query_channels } from "./resolvers/Query/channels";
import { groups as Query_groups } from "./resolvers/Query/groups";
import { meetings as Query_meetings } from "./resolvers/Query/meetings";

export const resolvers = {
  Channel: {
    meetings: Channel_meetings,
  },
  ChannelsMutation: {
    create: ChannelsMutation_create,
    update: ChannelsMutation_update,
  },
  ChannelsQuery: {
    read: ChannelsQuery_read,
  },
  Group: {
    channels: Group_channels,
  },
  GroupsConnection: {
    edges: GroupsConnection_edges,
  },
  GroupsMutation: {
    create: GroupsMutation_create,
    update: GroupsMutation_update,
  },
  GroupsQuery: {
    find: GroupsQuery_find,
    findSettings: GroupsQuery_findSettings,
    read: GroupsQuery_read,
  },
  MeetingsMutation: {
    create: MeetingsMutation_create,
    update: MeetingsMutation_update,
  },
  MeetingsQuery: {
    read: MeetingsQuery_read,
  },
  Mutation: {
    channels: Mutation_channels,
    groups: Mutation_groups,
    meetings: Mutation_meetings,
  },
  Query: {
    channels: Query_channels,
    groups: Query_groups,
    meetings: Query_meetings,
  },
};
