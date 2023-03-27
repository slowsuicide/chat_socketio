const path = require("path");
const express = require("express");
const http = require("http");
const newUser = require("./src/js/newUser");

const app = express();
const socketio = require("socket.io");
const server = http.createServer(app);

const io = socketio(server, {
  cors: {
    origin: '*',
  }
});

const availableUserPhotos = newUser.availablePhotos;
const availableUserNickNames = newUser.availableNickNames;
const availableUserNames = newUser.availableNames;


app.use(express.static(path.join(__dirname, "client")));

io.on("connection", (socket) => {
  const newUser = newRandomUser();
  socket.emit("new user", newUser);
  sendNotificationToAll(`${newUser.nickname} connected`);

  socket.on("disconnected", () => {
    console.log("user disconnected");
    sendNotificationToAll(`${newUser.nickname} has left`);
  });

  socket.on("chat message", (user, msg) => {
    console.log(`${user.nickname} sent message: ${msg}`);

    io.emit("chat message", user, msg);
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000. Test connection ");
});

function sendNotificationToAll(text) {
  io.emit("chat notification", text);
}

function newRandomUser() {
  const user = {
    fullName: availableUserNames[0],
    nickname: availableUserNickNames[0],
    email: availableUserNickNames[0] + "@email.com",
    photo: availableUserPhotos[0],
  };

  availableUserNickNames.splice(0, 1);
  availableUserPhotos.splice(0, 1);
  availableUserNames.splice(0, 1);

  return user;
}
