const express = require("express");
const {
    doctorRegisterController,
    doctorLoginController,
    authController,
}  = require("../controllers/doctorController.js")
const authMiddleware = require("../middlewares/authMiddleware");

//router object
const router = express.Router();
 

// routes

//LOGIN || POST
router.post("/doctor_login", doctorLoginController);

//REGISTER || POST
router.post("/doctor_register", doctorRegisterController);

//Auth || POST
router.post("/getUserData", authMiddleware, authController);

module.exports = router;