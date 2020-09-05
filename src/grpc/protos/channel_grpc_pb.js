// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var channel_pb = require('./channel_pb.js');
var meeting_pb = require('./meeting_pb.js');

function serialize_channel_ChannelResponse(arg) {
  if (!(arg instanceof channel_pb.ChannelResponse)) {
    throw new Error('Expected argument of type channel.ChannelResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_channel_ChannelResponse(buffer_arg) {
  return channel_pb.ChannelResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_channel_ReadChannelRequest(arg) {
  if (!(arg instanceof channel_pb.ReadChannelRequest)) {
    throw new Error('Expected argument of type channel.ReadChannelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_channel_ReadChannelRequest(buffer_arg) {
  return channel_pb.ReadChannelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_channel_SetChannelRequest(arg) {
  if (!(arg instanceof channel_pb.SetChannelRequest)) {
    throw new Error('Expected argument of type channel.SetChannelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_channel_SetChannelRequest(buffer_arg) {
  return channel_pb.SetChannelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_channel_UsertToChannelRequest(arg) {
  if (!(arg instanceof channel_pb.UsertToChannelRequest)) {
    throw new Error('Expected argument of type channel.UsertToChannelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_channel_UsertToChannelRequest(buffer_arg) {
  return channel_pb.UsertToChannelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_channel_UsertToChannelResponse(arg) {
  if (!(arg instanceof channel_pb.UsertToChannelResponse)) {
    throw new Error('Expected argument of type channel.UsertToChannelResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_channel_UsertToChannelResponse(buffer_arg) {
  return channel_pb.UsertToChannelResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ChannelService = exports.ChannelService = {
  setChannel: {
    path: '/channel.Channel/SetChannel',
    requestStream: false,
    responseStream: false,
    requestType: channel_pb.SetChannelRequest,
    responseType: channel_pb.ChannelResponse,
    requestSerialize: serialize_channel_SetChannelRequest,
    requestDeserialize: deserialize_channel_SetChannelRequest,
    responseSerialize: serialize_channel_ChannelResponse,
    responseDeserialize: deserialize_channel_ChannelResponse,
  },
  readChannel: {
    path: '/channel.Channel/ReadChannel',
    requestStream: false,
    responseStream: false,
    requestType: channel_pb.ReadChannelRequest,
    responseType: channel_pb.ChannelResponse,
    requestSerialize: serialize_channel_ReadChannelRequest,
    requestDeserialize: deserialize_channel_ReadChannelRequest,
    responseSerialize: serialize_channel_ChannelResponse,
    responseDeserialize: deserialize_channel_ChannelResponse,
  },
  setUserToChannel: {
    path: '/channel.Channel/SetUserToChannel',
    requestStream: false,
    responseStream: false,
    requestType: channel_pb.UsertToChannelRequest,
    responseType: channel_pb.UsertToChannelResponse,
    requestSerialize: serialize_channel_UsertToChannelRequest,
    requestDeserialize: deserialize_channel_UsertToChannelRequest,
    responseSerialize: serialize_channel_UsertToChannelResponse,
    responseDeserialize: deserialize_channel_UsertToChannelResponse,
  },
};

exports.ChannelClient = grpc.makeGenericClientConstructor(ChannelService);
