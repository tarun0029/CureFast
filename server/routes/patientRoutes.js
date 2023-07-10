const express = require("express");
const {
  patientRegisterController,
  patientLoginController,
  getPatientInfoController,
  updateProfileController,
  patientAuthController,
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

router.post("/patient/profilesetting", authMiddlewares, updateProfileController);

module.exports = router;
