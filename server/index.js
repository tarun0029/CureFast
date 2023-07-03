const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");

const app = express();   

app.use(cors())
app.use(express.json({ limit : "10mb"}))

const PORT = process.env.PORT || 5000;

//mongodb connection
connectDB();


// routes
app.use("/", require("./routes/patientRoutes"));
app.use("/", require("./routes/doctorRoutes"));


<<<<<<< HEAD






=======
>>>>>>> dbca6889cf75e885aed6a9f17bbe4e21ad06b8f8
app.listen(PORT,()=> console.log("server is running at port : " + PORT))
