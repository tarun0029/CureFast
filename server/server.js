const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));

const PORT = process.env.PORT || 5000;

// mongodb connection
connectDB();

// api

app.get("/", (req, res) => {
  res.send("Server is running");
});

const patientRegisterSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  password: String,
  confirmPassword: String,
});

const patientRegisterModel = mongoose.model(
  "patientRegister",
  patientRegisterSchema
);

//sign up
const signup = async (req, res) => {
  try {
    const exisitingUser = await patientRegisterModel.findOne({
      email: req.body.email,
    });
    if (exisitingUser) {
      return res
        .status(200)
        .send({ message: "User Already Exist", success: false });
    }
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;
    // req.body.confirmPassword=hashedPassword;
    const newUser = new patientRegisterModel(req.body);
    await newUser.save();
    res.send({ success:"true" ,message: "Successfully register !!" });
  } catch (error) {
    console.log(error);
  }
};

app.post("/patient_register", signup);

app.listen(PORT, () => console.log("server is running at port : " + PORT));
