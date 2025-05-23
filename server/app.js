import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import cors from "cors";

const port = 3000;

const app = express();
const server = createServer(app);
// io means circuit
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.get("/", (req, res) => {
  res.send("hello");
});

// below code is for io circuit create
io.on("connection", (socket) => {
  console.log("user connected");
  console.log("userId", socket.id);
  // first event send to client
  socket.emit("welcome", "Welcome to the server");
  //first event received by server from client

  socket.on("message", (data) => {
    console.log(data);
  });
});

server.listen(port, () => {
  console.log(`Server run at http://localhost:${port}`);
});
