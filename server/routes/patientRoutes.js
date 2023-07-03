const express = require("express");
const {
  patientRegisterController,
  patientLoginController,
} = require("../controllers/patientController.js");

//router object
const router = express.Router();

// routes

//LOGIN || POST
router.post("/patient_login", patientLoginController);

//REGISTER || POST
router.post("/patient_register", patientRegisterController);

module.exports = router;
