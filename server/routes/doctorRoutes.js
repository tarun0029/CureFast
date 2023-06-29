const express = require("express");
const {
    doctorRegisterController,
    doctorLoginController
}  = require("../controllers/doctorController.js")

//router object
const router = express.Router();
 

// routes

//LOGIN || POST
router.post("/doctor_login", doctorLoginController);

//REGISTER || POST
router.post("/doctor_register", doctorRegisterController);

module.exports = router;