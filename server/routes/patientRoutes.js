const express = require("express");
const {
  patientRegisterController,
  patientLoginController,
} = require("../controllers/patientController.js");

//router object
const router = express.Router();

//REGISTER || POST
router.post("/patient_register", patientRegisterController);

//LOGIN || POST
router.post("/patient_login", patientLoginController);

module.exports = router;
