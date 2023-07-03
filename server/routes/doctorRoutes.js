const express = require("express");
const {
  doctorRegisterController,
  doctorLoginController,
  authController,
  getDoctorInfoController,
} = require("../controllers/doctorController.js");
const authMiddlewares = require("../middlewares/authMiddlewares.js");

//router object
const router = express.Router();

// routes

//LOGIN || POST
router.post("/doctor_login", doctorLoginController);

//REGISTER || POST
router.post("/doctor_register", doctorRegisterController);

//Auth || POST
router.post("/getUserData", authMiddlewares, authController);

//POST SINGLE DOC INFO
router.post("/getDoctorInfo", authMiddlewares, getDoctorInfoController);

//router.post("doctor/profilesetting",authMiddlewares,updateProfileController)

module.exports = router;
