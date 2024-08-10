import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import { createServer } from 'node:http';
import { Server } from 'socket.io';
import * as middlewares from './middlewares';
import api from './api';
import MessageResponse from './interfaces/MessageResponse';
import { dirname, join } from 'node:path';


require('dotenv').config();

const app = express();
const server = createServer(app);

app.use(express.static('public'));
// Initialize Socket.IO with the HTTP server
const io = new Server(server);

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

// app.get<{}, MessageResponse>('/', (req, res) => {
  //   res.json({
    //     message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
    //   });
    // });
    
    app.get('/', (req, res) => {
      res.sendFile(join(__dirname, 'index.html'));
    });
    io.on('connection', (socket) => {
      console.log('a user connected');
    });
    
    
    app.use('/api/v1', api);
    
    app.use(middlewares.notFound);
    app.use(middlewares.errorHandler);
    
export default app;
export default server;