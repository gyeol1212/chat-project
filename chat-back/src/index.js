const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const { generateMessage } = require('./utils/messages');
const { addUser, removeUser, getUser, getUsersInRoom } = require('./utils/users');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 8000;

io.on('connection', socket => {
  console.log('New WebSocket connection');
  socket.on('join', ({ name, room }) => {
    //add user
    const { user, error } = addUser({ id: socket.id, username: name, room });

    if (error) return console.log(error);

    // room join
    socket.join(user.room);

    //messages
    socket.emit('message', generateMessage('Admin', `Welcome ${name}!! `));

    socket.on('sendMessage', (message, callback) => {
      console.log('sendMessage on');
      const user = getUser(socket.id);

      if (user) {
        io.to(user.room).emit('message', generateMessage(user.username, message.message));
      }

      callback();
    });
  });
});

server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
