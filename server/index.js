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

  socket.on("join_room", async(data) => {
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
    user.messages.push(data)
    await user.save();
  });

  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
  });
});

server.listen(5000, () => {
  console.log("Server is Running");
});

//app.listen(PORT,()=> console.log("server is running at port : " + PORT))