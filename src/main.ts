import "reflect-metadata";
import { config as loadEnv } from "dotenv";
loadEnv();
import  * as express  from 'express';
import  { createServer }  from 'http';
import { ApolloServer } from 'apollo-server-express';
import  * as cors  from 'cors';
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";
import * as socketIo from 'socket.io';


const Start = async () => {

  const app = express();

  const corsOptions = {
    origin: "*",
    credentials: false // <-- REQUIRED backend setting
  };

  const apolloServer = new ApolloServer({
    resolvers,
    typeDefs,
    context: ({ req , res }) => ({ req, res})
  });

  apolloServer.applyMiddleware({app, cors: false});

  // app.use(cors(corsOptions));
 // app.options('*', cors());

  const server = createServer(app);

  const io = socketIo(server);

  io.on('connection', socket => {
    console.log('someone connected');
      socket.on('join-room', (roomId, userId) => {
        console.log(roomId, userId);
        socket.join(roomId);
        socket.to(roomId).broadcast.emit('user-connected', userId);

        socket.on('disconect', () => {
            socket.to(roomId).broadcast.emit('user-disconected', userId);
        });
    });
  });

  server.listen('4003', () => {
      console.log('up and running');
  });
}

Start()
.catch((err)=>{
    console.log(err);
});
