import { AudioClient } from "./protos/audio_grpc_pb";
import { credentials } from "grpc";
import { AudioRequest, AudioStatusResponse } from "./protos/audio_pb";
import { promisifyUnaryRequestForClient } from "./common";

const client = new AudioClient(`${process.env.SERVICE_AUDIO_HOST}:${process.env.SERVICE_AUDIO_PORT}`, credentials.createInsecure());

// const promisifyUnaryRequest = promisifyUnaryRequestForClient(client);

// export const setAudio = promisifyUnaryRequest<AudioRequest, AudioStatusResponse>('setAudioContentRequest');

const setAudio = client.setAudioContentRequest((err, stats) =>{
    if(err){
        console.log(err);
    }
    console.log('stats', stats);
});


export const sendAudio = (audioReq: AudioRequest) => {
    return setAudio.write(audioReq);
}