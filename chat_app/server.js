import express from 'express';
import { Server } from 'socket.io';
import cors from 'cors';
import http from 'http';
import { connect } from './config.js';
import { chatModel } from './chat.schema.js';
import { Socket } from 'dgram';

const app = express();

// 1. Creating server using http.
const server = http.createServer(app);

// 2. Create socket server.
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ["GET", "POST"]
    }
});


io.on('connection', (socket) => {
    console.log("Connection is established");
    const users = [];
    socket.on("join", (data) =>{
        
        socket.username = data;
         users[socket.username]
         
    })

});

server.listen(3000, () => {
    console.log("App is listening on 3000");
    connect();
})
