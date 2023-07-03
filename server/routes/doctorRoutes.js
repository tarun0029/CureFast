const express = require("express");
const {
  doctorRegisterController,
  doctorLoginController,
  authController,
  updateProfileController,
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

//UPDATE || POST
router.post("/doctor/profilesetting", authMiddlewares, updateProfileController);

module.exports = router;
