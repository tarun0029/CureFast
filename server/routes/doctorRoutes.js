const express = require("express");
const {
  doctorRegisterController,
  doctorLoginController,
} = require("../controllers/doctorController.js");

//router object
const router = express.Router();

//REGISTER || POST
router.post("/doctor_register", doctorRegisterController);

//LOGIN || POST
router.post("/doctor_login", doctorLoginController);

module.exports = router;
