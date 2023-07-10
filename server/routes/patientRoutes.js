const express = require("express");
const {
  patientRegisterController,
  patientLoginController,
  getPatientInfoController,
  updateProfileController,
  patientAuthController,
  getAllDocotrsController,
  getDoctorDetailsController,
  bookAppointmentController,
} = require("../controllers/patientController.js");
const authMiddlewares = require("../middlewares/authMiddlewares.js");

//router object
const router = express.Router();

// routes

//LOGIN || POST
router.post("/patient_login", patientLoginController);

//REGISTER || POST
router.post("/patient_register", patientRegisterController);

router.post("/getPatientData", authMiddlewares, patientAuthController);

//POST SINGLE DOC INFO
router.post("/patient/getPatientInfo", authMiddlewares, getPatientInfoController);

// POST profileSetting
router.post("/patient/profilesetting", authMiddlewares, updateProfileController);


//GET ALL DOC
router.get("/getAllDoctors", authMiddlewares, getAllDocotrsController);

//get doctor details
router.get("/viewdoctorprofile/:id", getDoctorDetailsController);

// booking apping 
router.post("/bookappointment",authMiddlewares,bookAppointmentController);




module.exports = router;
