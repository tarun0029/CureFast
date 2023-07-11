const doctorModel = require("../models/doctorModels");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const appointmentModel = require("../models/appointmentModel");
const patientModel = require("../models/patientModels");

//const moment = require("moment");

//register callback
const doctorRegisterController = async (req, res) => {
  try {
    const exisitingUser = await doctorModel.findOne({ email: req.body.email });
    if (exisitingUser) {
      return res
        .status(200)
        .send({ message: "User Already Exist", success: false });
    }
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;
    const newUser = new doctorModel(req.body);
    await newUser.save();
    res.status(201).send({ message: "Register Sucessfully", success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Register Controller ${error.message}`,
    });
  }
};

// login callback
const doctorLoginController = async (req, res) => {
  try {
    const user = await doctorModel.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(200)
        .send({ message: "user not found", success: false });
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res
        .status(200)
        .send({ message: "Invlid EMail or Password", success: false });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.status(200).send({ message: "Login Success", success: true, token });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: `Error in Login CTRL ${error.message}` });
  }
};

const doctorAuthController = async (req, res) => {
  try {
    const user = await doctorModel.findById({ _id: req.body.userId });
    // user.password = undefined;
    if (!user) {
      return res.status(200).send({
        message: "user not found",
        success: false,
      });
    } else {
      res.status(200).send({
        success: true,
        data: user,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "auth error",
      success: false,
      error,
    });
  }
};

const getDoctorInfoController = async (req, res) => {
  try {
    const doctor = await doctorModel.findById({ _id: req.body.userId });
    res.status(200).send({
      success: true,
      message: "doctor data fetch success",
      data: doctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Fetching Doctor Details",
    });
  }
};

// update doc profile
const updateProfileController = async (req, res) => {
  try {
    const doctor = await doctorModel.findByIdAndUpdate(
      { _id: req.body.userId },
      req.body
    );
    res.status(201).send({
      success: true,
      message: "Doctor Profile Updated",
      data: doctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Doctor Profile Update issue",
      error,
    });
  }
};

const getAllPatientsController = async (req, res) => {
  try {
    const patients = await appointmentModel.find(
      { doctorId: req.body.doctorId },
      {}
    );

    const patientArray = [];

    patients.forEach((patient) => {
      patientArray.push({
        status: patient.status,
        appointmentId: patient._id,
        patientId: patient.patientId,
      });
    });

    const patientIds = patientArray.map((patient) => patient.patientId);

    const patientsDetails = await patientModel.find({
      _id: { $in: patientIds },
    });

    const pairedPatients = patientArray.map((patient) => {
      const patientDetails = patientsDetails.find((p) =>
        p._id.equals(patient.patientId)
      );

      return {
        appointmentId: patient.appointmentId,
        status: patient.status,
        patientDetails: patientDetails.toObject(),
      };
    });

    res.status(200).send({
      success: true,
      message: "Patients List Fetched Successfully",
      data: pairedPatients,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error While Fetching Patients",
    });
  }
};

const appointmentStatusController = async (req, res) => {
  try {
    const { appointmentId, status } = req.body;
    const appointment = await appointmentModel.findByIdAndUpdate(
      appointmentId,
      { status }
    );
    const patient = await patientModel.findOne({ _id: appointment.patientId });
    const doctor = await doctorModel.findOne({ _id: appointment.doctorId });
    const notification = patient.notification;
    notification.push({
      type: "status-updated",
      doctorName: `${doctor.firstName} ${doctor.lastName}`,
      status : status
    });
    await patient.save();
    res.status(200).send({
      success: true,
      message: `Appointment status has been updated`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error In Update Status",
    });
  }
};

module.exports = {
  doctorRegisterController,
  doctorLoginController,
  doctorAuthController,
  getDoctorInfoController,
  updateProfileController,
  getAllPatientsController,
  appointmentStatusController,
};
