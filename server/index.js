const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const http = require("http");
const chatModel = require("./models/chatModel");

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));

const PORT = process.env.PORT || 5000;

//mongodb connection
connectDB();

// routes
app.use("/", require("./routes/patientRoutes"));
app.use("/", require("./routes/doctorRoutes"));

const emailToSocketIdMap = new Map();
const socketidToEmailMap = new Map();

const { Server } = require("socket.io");

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`user connected: ${socket.id}`);

  // chatting feature

  socket.on("join_room", async (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
    const exist = await chatModel.findOne({ chatId: data });
    if (!exist) {
      const newChat = new chatModel({ chatId: data, messages: [] });
      await newChat.save();
    }
  });

  socket.on("send_message", async (data) => {
    socket.to(data.chatId).emit("receive_message", data);
    const user = await chatModel.findOne({ chatId: data.chatId });
    user.messages.push(data);
    await user.save();
  });

  // video call feature
  socket.on("room:join", (data) => {
    const { email, room } = data;
    emailToSocketIdMap.set(email, socket.id);
    socketidToEmailMap.set(socket.id, email);
    io.to(room).emit("user:joined", { email, id: socket.id });
    socket.join(room);
    io.to(socket.id).emit("room:join", data);
  });

  socket.on("user:call", ({ to, offer }) => {
    io.to(to).emit("incomming:call", { from: socket.id, offer });
  });

  socket.on("call:accepted", ({ to, ans }) => {
    io.to(to).emit("call:accepted", { from: socket.id, ans });
  });

  socket.on("peer:nego:needed", ({ to, offer }) => {
    console.log("peer:nego:needed", offer);
    io.to(to).emit("peer:nego:needed", { from: socket.id, offer });
  });

  socket.on("peer:nego:done", ({ to, ans }) => {
    console.log("peer:nego:done", ans);
    io.to(to).emit("peer:nego:final", { from: socket.id, ans });
  });

  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
  });
});

server.listen(5000, () => {
  console.log("Server is Running");
});

//app.listen(PORT,()=> console.log("server is running at port : " + PORT))
