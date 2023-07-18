const express = require("express");
const {
  doctorRegisterController,
  doctorLoginController,
  doctorAuthController,
  getDoctorInfoController,
  updateProfileController,
  getAllPatientsController,
  appointmentStatusController,
} = require("../controllers/doctorController.js");
const {   getAllChatsController }  = require("../controllers/chatController.js")
const authMiddlewares = require("../middlewares/authMiddlewares.js");

//router object
const router = express.Router();

// routes

//LOGIN || POST
router.post("/doctor_login", doctorLoginController);

//REGISTER || POST
router.post("/doctor_register", doctorRegisterController);

router.post("/getDoctorData", authMiddlewares, doctorAuthController);

//POST SINGLE DOC INFO
router.post("/doctor/getDoctorInfo", authMiddlewares, getDoctorInfoController);

router.post("/doctor/profilesetting", authMiddlewares, updateProfileController);

//GET ALL Patients
router.post("/getAllPatients", authMiddlewares, getAllPatientsController);


router.post(
  "/appointment-status",
  authMiddlewares,
  appointmentStatusController
);

// get all chats
router.post("/doctor/getAllChats", authMiddlewares, getAllChatsController);

module.exports = router;
