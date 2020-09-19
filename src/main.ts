import "reflect-metadata";
import { config as loadEnv } from "dotenv";
loadEnv();
import  * as express  from 'express';
import  { createServer }  from 'http';
import { ApolloServer } from 'apollo-server-express';
import  * as cors  from 'cors';
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";

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


  let https = require("https").Server(app) ;

  const io = require("socket.io")(https);

  io.on('connection', (socket: any) => {
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

  https.listen('4003', () => {
      console.log('up and running');
  });
}

Start()
.catch((err)=>{
    console.log(err);
});
