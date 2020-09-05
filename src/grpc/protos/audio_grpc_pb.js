// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var audio_pb = require('./audio_pb.js');

function serialize_audio_AudioRequest(arg) {
  if (!(arg instanceof audio_pb.AudioRequest)) {
    throw new Error('Expected argument of type audio.AudioRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_audio_AudioRequest(buffer_arg) {
  return audio_pb.AudioRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_audio_AudioStatusResponse(arg) {
  if (!(arg instanceof audio_pb.AudioStatusResponse)) {
    throw new Error('Expected argument of type audio.AudioStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_audio_AudioStatusResponse(buffer_arg) {
  return audio_pb.AudioStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AudioService = exports.AudioService = {
  setAudioContentRequest: {
    path: '/audio.Audio/SetAudioContentRequest',
    requestStream: true,
    responseStream: false,
    requestType: audio_pb.AudioRequest,
    responseType: audio_pb.AudioStatusResponse,
    requestSerialize: serialize_audio_AudioRequest,
    requestDeserialize: deserialize_audio_AudioRequest,
    responseSerialize: serialize_audio_AudioStatusResponse,
    responseDeserialize: deserialize_audio_AudioStatusResponse,
  },
};

exports.AudioClient = grpc.makeGenericClientConstructor(AudioService);
