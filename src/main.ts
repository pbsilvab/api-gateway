import "reflect-metadata";
import { config as loadEnv } from "dotenv";
loadEnv();
import  * as express  from 'express';
import  { createServer }  from 'http';
import { ApolloServer } from 'apollo-server-express';
import  * as cors  from 'cors';
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";
import * as io from 'socket.io';
import * as fs  from 'fs';
import https   from 'https';

const Start = async () => {
  const app = express();

  const corsOptions = {
    credentials: true // <-- REQUIRED backend setting
  };

  const apolloServer = new ApolloServer({
    resolvers,
    typeDefs,
    context: ({ req , res }) => ({ req, res})
  });

  apolloServer.applyMiddleware({app, cors: true});

  app.use(cors(corsOptions));
  app.options('*', cors());


  let http = require("http").Server(app);

  http.listen('4003', () => {
      console.log('4003 up and running');
  });

  const options = {
    key: fs.readFileSync('/etc/letsencrypt/live/wetalk.sharkrahs.com/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/wetalk.sharkrahs.com/fullchain.pem')
  };

  const appSsl = https.createServer(options);

  const socket = io(appSsl);

  socket.on('connection', (socket: any) => {

      console.log('someone connected');

      socket.on('join-room', (roomId: any, userId : any) => {

        console.log(roomId, userId);
        socket.join(roomId);

        socket.to(roomId).broadcast.emit('user-connected', userId);

        socket.on('disconect', () => {
            socket.to(roomId).broadcast.emit('user-disconected', userId);
        });

    });
  });

  appSsl.listen('4004', () => {
      console.log('4004 up and running');
  });

}

Start()
.catch((err)=>{
    console.log(err);
});
