// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var group_pb = require('./group_pb.js');
var find$settings_pb = require('./find-settings_pb.js');
var channel_pb = require('./channel_pb.js');

function serialize_find_settings_EmptyRequest(arg) {
  if (!(arg instanceof find$settings_pb.EmptyRequest)) {
    throw new Error('Expected argument of type find_settings.EmptyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_find_settings_EmptyRequest(buffer_arg) {
  return find$settings_pb.EmptyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_find_settings_FindSettings(arg) {
  if (!(arg instanceof find$settings_pb.FindSettings)) {
    throw new Error('Expected argument of type find_settings.FindSettings');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_find_settings_FindSettings(buffer_arg) {
  return find$settings_pb.FindSettings.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_group_FindGroupsRequest(arg) {
  if (!(arg instanceof group_pb.FindGroupsRequest)) {
    throw new Error('Expected argument of type group.FindGroupsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_group_FindGroupsRequest(buffer_arg) {
  return group_pb.FindGroupsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_group_FindGroupsResponse(arg) {
  if (!(arg instanceof group_pb.FindGroupsResponse)) {
    throw new Error('Expected argument of type group.FindGroupsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_group_FindGroupsResponse(buffer_arg) {
  return group_pb.FindGroupsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_group_GroupResponse(arg) {
  if (!(arg instanceof group_pb.GroupResponse)) {
    throw new Error('Expected argument of type group.GroupResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_group_GroupResponse(buffer_arg) {
  return group_pb.GroupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_group_ReadGroupRequest(arg) {
  if (!(arg instanceof group_pb.ReadGroupRequest)) {
    throw new Error('Expected argument of type group.ReadGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_group_ReadGroupRequest(buffer_arg) {
  return group_pb.ReadGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_group_SetGroupRequest(arg) {
  if (!(arg instanceof group_pb.SetGroupRequest)) {
    throw new Error('Expected argument of type group.SetGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_group_SetGroupRequest(buffer_arg) {
  return group_pb.SetGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_group_UsertToGroupRequest(arg) {
  if (!(arg instanceof group_pb.UsertToGroupRequest)) {
    throw new Error('Expected argument of type group.UsertToGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_group_UsertToGroupRequest(buffer_arg) {
  return group_pb.UsertToGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_group_UsertToGroupResponse(arg) {
  if (!(arg instanceof group_pb.UsertToGroupResponse)) {
    throw new Error('Expected argument of type group.UsertToGroupResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_group_UsertToGroupResponse(buffer_arg) {
  return group_pb.UsertToGroupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var GroupService = exports.GroupService = {
  setGroup: {
    path: '/group.Group/SetGroup',
    requestStream: false,
    responseStream: false,
    requestType: group_pb.SetGroupRequest,
    responseType: group_pb.GroupResponse,
    requestSerialize: serialize_group_SetGroupRequest,
    requestDeserialize: deserialize_group_SetGroupRequest,
    responseSerialize: serialize_group_GroupResponse,
    responseDeserialize: deserialize_group_GroupResponse,
  },
  readGroup: {
    path: '/group.Group/ReadGroup',
    requestStream: false,
    responseStream: false,
    requestType: group_pb.ReadGroupRequest,
    responseType: group_pb.GroupResponse,
    requestSerialize: serialize_group_ReadGroupRequest,
    requestDeserialize: deserialize_group_ReadGroupRequest,
    responseSerialize: serialize_group_GroupResponse,
    responseDeserialize: deserialize_group_GroupResponse,
  },
  setUserToGroup: {
    path: '/group.Group/SetUserToGroup',
    requestStream: false,
    responseStream: false,
    requestType: group_pb.UsertToGroupRequest,
    responseType: group_pb.UsertToGroupResponse,
    requestSerialize: serialize_group_UsertToGroupRequest,
    requestDeserialize: deserialize_group_UsertToGroupRequest,
    responseSerialize: serialize_group_UsertToGroupResponse,
    responseDeserialize: deserialize_group_UsertToGroupResponse,
  },
  findGroups: {
    path: '/group.Group/FindGroups',
    requestStream: false,
    responseStream: false,
    requestType: group_pb.FindGroupsRequest,
    responseType: group_pb.FindGroupsResponse,
    requestSerialize: serialize_group_FindGroupsRequest,
    requestDeserialize: deserialize_group_FindGroupsRequest,
    responseSerialize: serialize_group_FindGroupsResponse,
    responseDeserialize: deserialize_group_FindGroupsResponse,
  },
  findGroupsSettings: {
    path: '/group.Group/FindGroupsSettings',
    requestStream: false,
    responseStream: false,
    requestType: find$settings_pb.EmptyRequest,
    responseType: find$settings_pb.FindSettings,
    requestSerialize: serialize_find_settings_EmptyRequest,
    requestDeserialize: deserialize_find_settings_EmptyRequest,
    responseSerialize: serialize_find_settings_FindSettings,
    responseDeserialize: deserialize_find_settings_FindSettings,
  },
};

exports.GroupClient = grpc.makeGenericClientConstructor(GroupService);
