const express = require("express");
const {
  doctorRegisterController,
  doctorLoginController,
  authController,
} = require("../controllers/doctorController.js");
const authMiddlewares = require("../middlewares/authMiddlewares.js");

//router object
const router = express.Router();

// routes

//LOGIN || POST
router.post("/doctor_login", doctorLoginController);

//REGISTER || POST
router.post("/doctor_register", doctorRegisterController);

router.post("/getUserData", authMiddlewares, authController);

module.exports = router;
