const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

let userCount = 0;

app.use(express.static("public"));

io.on("connection", (socket) => {
  userCount++;
  const username = "User " + userCount;

  console.log(username + " connected");

  socket.emit("chat message", "You joined as " + username);
  socket.broadcast.emit("chat message", username + " joined the chat");

  socket.on("chat message", (msg) => {
    io.emit("chat message", username + ": " + msg);
  });

  socket.on("disconnect", () => {
    console.log(username + " disconnected");
    io.emit("chat message", username + " left the chat");
  });
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
