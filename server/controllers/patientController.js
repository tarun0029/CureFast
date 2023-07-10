const patientModel = require("../models/patientModels");
const doctorModel = require("../models/doctorModels");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const appointmentModel = require("../models/appointmentModel");
//const jwt = require("jsonwebtoken");

//register callback
const patientRegisterController = async (req, res) => {
  try {
    const exisitingUser = await patientModel.findOne({ email: req.body.email });
    if (exisitingUser) {
      return res
        .status(200)
        .send({ message: "User Already Exist", success: false });
    }
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;
    const newUser = new patientModel(req.body);
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
const patientLoginController = async (req, res) => {
  try {
    const user = await patientModel.findOne({ email: req.body.email });
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

const patientAuthController = async (req, res) => {
  try {
    const user = await patientModel.findById({ _id: req.body.userId });
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

const getPatientInfoController = async (req, res) => {
  try {
    const doctor = await patientModel.findById({ _id: req.body.userId });
    res.status(200).send({
      success: true,
      message: "patient data fetch success",
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
    const doctor = await patientModel.findByIdAndUpdate(
      { _id: req.body.userId },
      req.body
    );
    res.status(201).send({
      success: true,
      message: "patient Profile Updated",
      data: doctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "patient Profile Update issue",
      error,
    });
  }
};


//GET ALL DOC
const getAllDocotrsController = async (req, res) => {
  try {
    const doctors = await doctorModel.find({},{});
    res.status(200).send({
      success: true,
      message: "Docots Lists Fetched Successfully",
      data: doctors,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Errro WHile Fetching DOcotr",
    });
  }
};

//GET Doc details
const getDoctorDetailsController = async (req, res) => {
  try {
    const doctor = await doctorModel.findById({ _id: req.params.id });
    res.status(200).send({
      success: true,
      message: "doctor data fetch success",
      data: doctor,
    });
  } catch (error) {
    console.log(error);
  }
  
};

//BOOK APPOINTMENT
const bookAppointmentController = async (req, res) => {
  try {
    req.body.status = "pending";
    const newAppointment = new appointmentModel(req.body);
    await newAppointment.save();
    const doctor = await doctorModel.findOne({ _id: req.body.doctorId });
    doctor.notification.push({
      type: "New-appointment-request",
      message: `A nEw Appointment Request from  this side`,
      onCLickPath: "/user/appointments",
    });
    await doctor.save();
    res.status(200).send({
      success: true,
      message: "Appointment Book succesfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error While Booking Appointment",
    });
  }
};


module.exports = {
  patientRegisterController,
  patientLoginController,
  patientAuthController,
  getPatientInfoController,
  updateProfileController,
  getAllDocotrsController,
  getDoctorDetailsController,
  bookAppointmentController, 
};


