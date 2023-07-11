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
  email: {
    type: String,
    required: [true, "email is require"],
  },
  password: {
    type: String,
    required: [true, "password is require"],
  },
  dateOfBirth: {
    type: String,
    default: "",
  },
  gender: {
    type: String,
    default: "",
  },
  biography: {
    type: String,
    default: "",
  },
  consultancyFees: {
    type: String,
    default: "",
  },
  experience: {
    type: String,
    default: "",
  },
  specialization: {
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
    type: String,
    default: "",
  },
  state: {
    type: String,
    default: "",
  },
  zipCode: {
    type: String,
    default: "",
  },
  country: {
    type: String,
    default: "",
  },
  notification: {
    type: Array,
    default: [],
  },
  seennotification: {
    type: Array,
    default: [],
  },
  isDoctor: {
    type: Boolean,
    default: true,
  },
});

const doctorModel = mongoose.model("doctors", doctorSchema);

module.exports = doctorModel;
