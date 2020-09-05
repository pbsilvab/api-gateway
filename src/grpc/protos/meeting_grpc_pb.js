// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var meeting_pb = require('./meeting_pb.js');

function serialize_meeting_ChannelMeetingResponse(arg) {
  if (!(arg instanceof meeting_pb.ChannelMeetingResponse)) {
    throw new Error('Expected argument of type meeting.ChannelMeetingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_meeting_ChannelMeetingResponse(buffer_arg) {
  return meeting_pb.ChannelMeetingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_meeting_MeetingResponse(arg) {
  if (!(arg instanceof meeting_pb.MeetingResponse)) {
    throw new Error('Expected argument of type meeting.MeetingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_meeting_MeetingResponse(buffer_arg) {
  return meeting_pb.MeetingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_meeting_ReadChannelMeetingRequest(arg) {
  if (!(arg instanceof meeting_pb.ReadChannelMeetingRequest)) {
    throw new Error('Expected argument of type meeting.ReadChannelMeetingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_meeting_ReadChannelMeetingRequest(buffer_arg) {
  return meeting_pb.ReadChannelMeetingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_meeting_ReadMeetingRequest(arg) {
  if (!(arg instanceof meeting_pb.ReadMeetingRequest)) {
    throw new Error('Expected argument of type meeting.ReadMeetingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_meeting_ReadMeetingRequest(buffer_arg) {
  return meeting_pb.ReadMeetingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_meeting_SetMeetingRequest(arg) {
  if (!(arg instanceof meeting_pb.SetMeetingRequest)) {
    throw new Error('Expected argument of type meeting.SetMeetingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_meeting_SetMeetingRequest(buffer_arg) {
  return meeting_pb.SetMeetingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var MeetingService = exports.MeetingService = {
  setMeeting: {
    path: '/meeting.Meeting/SetMeeting',
    requestStream: false,
    responseStream: false,
    requestType: meeting_pb.SetMeetingRequest,
    responseType: meeting_pb.MeetingResponse,
    requestSerialize: serialize_meeting_SetMeetingRequest,
    requestDeserialize: deserialize_meeting_SetMeetingRequest,
    responseSerialize: serialize_meeting_MeetingResponse,
    responseDeserialize: deserialize_meeting_MeetingResponse,
  },
  readMeeting: {
    path: '/meeting.Meeting/ReadMeeting',
    requestStream: false,
    responseStream: false,
    requestType: meeting_pb.ReadMeetingRequest,
    responseType: meeting_pb.MeetingResponse,
    requestSerialize: serialize_meeting_ReadMeetingRequest,
    requestDeserialize: deserialize_meeting_ReadMeetingRequest,
    responseSerialize: serialize_meeting_MeetingResponse,
    responseDeserialize: deserialize_meeting_MeetingResponse,
  },
  readChannelMeeting: {
    path: '/meeting.Meeting/ReadChannelMeeting',
    requestStream: false,
    responseStream: false,
    requestType: meeting_pb.ReadChannelMeetingRequest,
    responseType: meeting_pb.ChannelMeetingResponse,
    requestSerialize: serialize_meeting_ReadChannelMeetingRequest,
    requestDeserialize: deserialize_meeting_ReadChannelMeetingRequest,
    responseSerialize: serialize_meeting_ChannelMeetingResponse,
    responseDeserialize: deserialize_meeting_ChannelMeetingResponse,
  },
};

exports.MeetingClient = grpc.makeGenericClientConstructor(MeetingService);
