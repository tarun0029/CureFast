const mongoose = require("mongoose");

const doctorSchema = mongoose.Schema({
  firstName: {
    type: String,
    default: "",
  },
  lastName: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    required: [true, "name is require"],
  },
  email: {
    type: String,
    required: [true, "email is require"],
  },
  password: {
    type: String,
    required: [true, "password is require"],
  },
  dateOfBirth: {
    type: Date,
    default: "",
  },
  bloodGroup: {
    type: String,
    default: "",
  },
  address: {
    type: String,
    default: "",
  },
  city: {
    type: String,
    default: "",
  },
  phone: {
    type: Number,
    default: "",
  },
  state: {
    type: String,
    default: "",
  },
  zipCode: {
    type: Number,
    default: "",
  },
  country: {
    type: String,
    default: "",
  },
  notifcation: {
    type: Array,
    default: [],
  },
  seennotification: {
    type: Array,
    default: [],
  },
});

const doctorModel = mongoose.model("doctors", doctorSchema);

module.exports = doctorModel;