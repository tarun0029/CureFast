const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  patientId: {
    type: String,
  },
  doctorId: {
    type: String,
  },
  status: {
    type: String,

    default: "pending",
  },
});

const appointmentModel = mongoose.model("appointments", appointmentSchema);

module.exports = appointmentModel;
